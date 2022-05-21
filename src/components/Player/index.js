import React from 'react';
import styles from './index.module.less';
import { Slider, ProgressCircle } from 'antd-mobile'
import { PlayOutline } from 'antd-mobile-icons'
import createContextApp from '../../hooks/App/createContextApp'
import { getSongUrlApp, getSongDetailApp } from '../../hooks/App/useReducerApp'
import _ from 'lodash'
// import mp3 from './index.mp3'
// import { songInfoLocalStorage } from '../../utils/utils'
const {
    useContext,
    useEffect,
    useRef,
    useState
} = React
const Headers = () => {
    const { state: { songId = '' } = {}, dispatch } = useContext(createContextApp)

    const audioRef = useRef(null)

    const [durationTime, setDurationTime] = useState('00:00') // 总时间
    const [currentTime, setCurrentTime] = useState('00:00') // 当前播放时间
    const [currentTimeRate, setCurrentTimeRate] = useState(0) // 当前播放百分比

    const [songMp3Info, setSongMp3Info] = useState({}) // mp3信息汇总

    // 监听音乐id 获取音乐详情
    useEffect(() => {
        if (!songId) return
        Promise.all([
            getSongUrlApp({ dispatch, params: { id: songId } }),
            getSongDetailApp({ dispatch, params: { ids: songId } })
        ]).then(res => {
            const [urlObj = {}, detaileObj = {}] = res

            const [urlData] = (urlObj && urlObj.data) || {}
            const { url: mp3Url = '' } = urlData

            const [detaileSongs] = (detaileObj && detaileObj.songs) || {}
            const { al: { name: mp3Name = '', picUrl: mp3Pic = '' } = {} } = detaileSongs
            setSongMp3Info({ mp3Name, mp3Pic, mp3Url })
        })
    }, [songId])

    // 监听音乐信息 播放暂停歌曲
    useEffect(() => {
        playSongs()
    }, [songMp3Info])


    // 暂停/播放
    const playSongs = () => {
        if (!songMp3Info.mp3Url) return
        audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause()
    }


    // 转换为时分秒
    const getTime = (time) => {
        let m = parseInt(time / 60 % 60)
        m = m < 10 ? '0' + m : m
        let s = parseInt(time % 60)
        s = s < 10 ? '0' + s : s
        return [m, s].join(":")
    }

    useEffect(() => {
        const audio = audioRef.current
        // // 当媒体文件可以播放的时候会触发canplay事件
        // audio.addEventListener("canplay", function (e) {

        // });

        // 当准确时长返回时候，会触发durationchange
        audio.addEventListener("durationchange", function (e) {
            setDurationTime(getTime(audio.duration)) // 歌曲总时间

        });

        // 每次currentTime属性值发生变化的时候会触发timeupdate事件。
        // 实际开发的时候，这个事件每250毫秒出发一次。这个事件可用来实时显示播放进度。
        // 节流 频率改为1s
        audio.addEventListener("timeupdate", _.throttle((e) => {
            setCurrentTime(getTime(audio.currentTime)) // 当前播放时间 单位s
            setCurrentTimeRate((audio.currentTime / audio.duration) * 100)
        }, 1000))

    }, [])

    return (
        <>
            <audio ref={audioRef} src={songMp3Info.mp3Url} controls={false} loop={true} />
            {
                songMp3Info.mp3Url && <div className={styles.playerBox}>
                    <div className={styles.playerFixed}>
                        <div className={styles.imgBox} >
                            <div className={styles.img}>

                                <ProgressCircle
                                    percent={currentTimeRate}
                                >
                                    <img src={songMp3Info.mp3Pic} alt='' />
                                </ProgressCircle>
                            </div>
                            <div className={styles.name}>{songMp3Info && songMp3Info.mp3Name}</div>
                        </div>
                        <div className={styles.timeBox}>
                            <div className={styles.time}>{currentTime}/{durationTime} - {songMp3Info && songMp3Info.mp3Name}</div>
                            <Slider
                                min={0}
                                max={100}
                                style={{ '--fill-color': '#00b578' }}
                                value={currentTimeRate}
                            />
                        </div>
                        <div className={styles.player}>
                            <PlayOutline fontSize='.2rem' onClick={playSongs} />
                        </div>
                    </div>
                </div>
            }
        </>

    )
};

export default Headers;
