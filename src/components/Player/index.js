import React from 'react';
import styles from './index.module.less';
import { Slider } from 'antd-mobile'
import { PlayOutline } from 'antd-mobile-icons'
import createContextApp from '../../hooks/App/createContextApp'
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
    const { state: { singleInfo = {} } = {} } = useContext(createContextApp)
    const audioRef = useRef(null)
    const [songTime, setSongTime] = useState(null) // 当前播放时间
    const [songTimeRate, setSongTimeRate] = useState(null) // 当前播放百分比
    // useEffect(() => {
    //     setSongInfo(songInfoLocalStorage().getItem() || {})
    //     console.log('初始化songData======', songInfoLocalStorage().getItem() || {});
    //     window.addEventListener('songInfoSetItemEvent', function (e) {
    //         setSongInfo(e.info || {})
    //         console.log('监听songData======', e.info);
    //     });
    //     return () => {
    //         window.removeEventListener('songInfoSetItemEvent')
    //     }
    // }, [])


    useEffect(() => {
        playSongs()
    }, [singleInfo])
    // 暂停/播放
    const playSongs = () => {
        if (!singleInfo.mp3Url) return
        audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause()
    }
    // 转换为时分秒
    const getTime = (time) => {

        // let h = parseInt(time / 60 / 60 % 24)
        // h = h < 10 ? '0' + h : h
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
        // audio.addEventListener("durationchange", function (e) {
        //     console.error(audio.duration);

        // });

        // 每次currentTime属性值发生变化的时候会触发timeupdate事件。
        // 实际开发的时候，这个事件每250毫秒出发一次。这个事件可用来实时显示播放进度。
        // 节流 频率改为1s
        audio.addEventListener("timeupdate", _.throttle((e) => {
            setSongTime(getTime(audio.currentTime)) // 当前播放时间 单位s
            setSongTimeRate((audio.currentTime / audio.duration) * 100)
        }, 1000))

        // return () => {
        //     audio.removeEventListener('timeupdate')
        // }
    }, [])

    // if (!singleInfo.mp3Url) {
    //     return <div></div>
    // }

    return (
        <>
            <audio ref={audioRef} src={singleInfo.mp3Url} controls={false} />
            {
                singleInfo.mp3Url && <div className={styles.playerBox}>
                    <div className={styles.playerFixed}>
                        <div className={styles.imgBox} >
                            <div className={styles.img}>
                                <img src={singleInfo.mp3Pic} alt='' />
                            </div>
                            {/* <div className={styles.name}>{singleInfo && singleInfo.mp3Name}</div> */}
                        </div>
                        <div className={styles.timeBox}>
                            <div className={styles.time}>{songTime}</div>
                            <Slider
                                min={0}
                                max={100}
                                style={{ '--fill-color': '#00b578' }}
                                value={songTimeRate}
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
