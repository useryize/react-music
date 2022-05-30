import React from 'react';
import styles from './index.module.less';
import { Slider, ProgressCircle, Popup, Image, Toast } from 'antd-mobile'
import { DownOutline } from 'antd-mobile-icons'
import createContextApp from '../../hooks/App/createContextApp'
import { getSongUrlApp, getSongDetailApp, setScrobblePunchinApp, getSongIdApp } from '../../hooks/App/useReducerApp'
import SongListPublic from '../SongListPublic/index'
import _ from 'lodash'
// import history from '../../utils/history'
// import mp3 from './index.mp3'
// import { songInfoLocalStorage } from '../../utils/utils'
const {
    useContext,
    useEffect,
    useRef,
    useState
} = React
const Headers = () => {
    const { state: { songId = '', songAllId = '', currentPalyAll: { songs: currentPalySongs = [] } = {} } = {}, dispatch } = useContext(createContextApp)
    const audioRef = useRef(null)

    const [durationTime, setDurationTime] = useState('00:00') // 总时间
    const [currentTime, setCurrentTime] = useState('00:00') // 当前播放时间
    const [currentTimeRate, setCurrentTimeRate] = useState(0) // 当前播放百分比

    const [songMp3Info, setSongMp3Info] = useState({}) // mp3信息汇总

    const [songPalyType, setSongPalyType] = useState(false); // 音乐播放器弹出层
    const [currentPalyType, setCurrentPalyType] = useState(false); // 当前播放歌曲弹出层


    // let [transformRotate, setTransformRotate] = useState(0); // 控制图片自动旋转角度
    // let [transformKey, setTransformKey] = useState(''); // 控制图片自动旋转角度

    // 监听音乐id
    useEffect(() => {
        if (!songId) return
        // 获取音乐 url/音乐详情
        Promise.all([
            getSongUrlApp({ dispatch, params: { id: songId } }),
            getSongDetailApp({ dispatch, params: { ids: songId } })
        ]).then(res => {
            const [urlObj = {}, detaileObj = {}] = res

            const [urlData] = (urlObj && urlObj.data) || {}
            const { url: mp3Url = '' } = urlData

            const [detaileSongs] = (detaileObj && detaileObj.songs) || {}
            const { name: mp3Name = '', al: { picUrl: mp3Pic = '' } = {}, ar: author = [] } = detaileSongs
            setSongMp3Info({ mp3Name, mp3Pic, mp3Url, author })
            setSongPalyType(true)

        })

        // 听歌打卡
        setScrobblePunchinApp({ dispatch, params: { id: songId, time: audioRef.current.duration || 60 } })

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

    // 上一曲/下一曲
    const playNextSong = (type) => {
        console.error(currentPalySongs);
        if (currentPalySongs.length === 0) {
            Toast.show({
                duration: '3000',
                content: '暂无更多',
                position: 'center',
            })
            return
        }
        let currentIndex = 0
        currentPalySongs.forEach((item, index) => {
            if (Number(item.id) === Number(songId)) {
                currentIndex = index
                console.error(index);
            }
        })
        let currentItem = currentPalySongs[type === 'up' ? currentIndex - 1 : currentIndex + 1] || {}
        getSongIdApp({ dispatch, params: currentItem.id })
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

        // 当整个音频文件播放完毕的时候触发ended事件
        audio.addEventListener("ended", function () {
            playNextSong('next')
        });

    }, [])

    // 当前播放歌曲列表
    useEffect(() => {
        if (!songAllId) return
        getSongDetailApp({ dispatch, params: { ids: songAllId }, type: 'ALL' })
        const [id] = songAllId.split(',')
        getSongIdApp({ dispatch, params: id }) // 默认播放第一首
    }, [songAllId])

    return (
        <>
            <audio ref={audioRef} src={songMp3Info.mp3Url} controls={false} loop={false} />

            {/* 简易播放器 */}
            {
                songMp3Info.mp3Url && <div className={styles.playerBox}>
                    <div className={styles.playerFixed}>
                        <div className={styles.imgBox} >
                            <div className={styles.img} onClick={() => setSongPalyType(!songPalyType)}>
                                {/* <img src={songMp3Info.mp3Pic} style={{ transform: `rotate(${transformRotate}deg)` }} alt='' /> */}
                                <img src={songMp3Info.mp3Pic} alt='' />
                            </div>
                            <div className={styles.name}>
                                {songMp3Info && songMp3Info.mp3Name} -
                                {songMp3Info && songMp3Info.author && songMp3Info.author.map(item => item.name).join('/')}
                            </div>
                        </div>
                        <div className={styles.player}>
                            <ProgressCircle
                                percent={currentTimeRate}
                            >
                                <div className={`iconfont  ${audioRef.current && audioRef.current.paused ? 'play' : 'suspend'} ${styles.palyIcon}`} onClick={playSongs}></div>
                            </ProgressCircle>
                            <div className={`iconfont more ${styles.moreIcon}`} onClick={() => setCurrentPalyType(true)}></div>

                        </div>
                    </div>
                </div>
            }

            {/* 音乐播放器弹出层 */}
            <Popup
                className={styles.jukeboxPop}
                position="bottom"
                visible={songPalyType}
                onMaskClick={() => setSongPalyType(false)}
            >
                <div className={styles.jukebox}>
                    <div className={styles.backPic} style={{ backgroundImage: `url(${songMp3Info.mp3Pic})` }}></div>
                    <div className={styles.jukeboxDetaile}>
                        <div className={styles.clonePop}>
                            <DownOutline onClick={() => setSongPalyType(false)} />
                        </div>
                        <div className={styles.songName}>
                            <div className={styles.title}>{songMp3Info && songMp3Info.mp3Name}</div>
                            <div className={styles.author}>
                                {songMp3Info && songMp3Info.author && songMp3Info.author.map(item => item.name).join('/')}
                            </div>
                        </div>
                        <div className={styles.songPay}>
                            <div className={styles.mp3Pic}>
                                <Image src={songMp3Info.mp3Pic} />
                            </div>
                        </div>
                        <div className={styles.controlBox}>
                            <div className={styles.progress}>
                                <div className={styles.timeLeft}>{currentTime}</div>
                                <div className={styles.timecen}>
                                    <Slider
                                        min={0}
                                        max={100}
                                        value={currentTimeRate}
                                        onAfterChange={(val) => {
                                            const time = +val / 100 * +audioRef.current.duration
                                            audioRef.current.currentTime = time
                                        }}
                                    />
                                </div>
                                <div className={styles.timeRight}>{durationTime}</div>
                            </div>
                            <div className={`${styles.buttonBox} ${currentPalySongs.length === 0 ? styles.noOther : ''}`}>
                                <div className={`iconfont lastsong ${styles.le}`} onClick={() => playNextSong('up')}></div>
                                <div className={`iconfont  ${audioRef.current && audioRef.current.paused ? 'play' : 'suspend'} ${styles.cen}`} onClick={playSongs}></div>
                                <div className={`iconfont nextsong ${styles.ri}`} onClick={() => playNextSong('next')}></div>
                                <div className={`iconfont more ${styles.ri}`} onClick={() => setCurrentPalyType(true)}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Popup>
            <Popup
                className={styles.currentPalyPop}
                position="bottom"
                visible={currentPalyType}
                onMaskClick={() => setCurrentPalyType(false)}
            >
                <div className={`scrollbar ${styles.currentPalyBox}`}>
                    <SongListPublic dataInfo={currentPalySongs} />
                </div>
            </Popup>
        </>

    )
};

export default Headers;
