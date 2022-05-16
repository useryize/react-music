import React from 'react';
import styles from './index.module.less';
import { PlayOutline } from 'antd-mobile-icons'
import { songInfoLocalStorage } from '../../utils/utils'
const {
    useState,
    // useContext,
    useEffect,
    useRef
} = React
const Headers = () => {
    const audioRef = useRef(null)
    const [songData, setSongInfo] = useState({})

    useEffect(() => {
        setSongInfo(songInfoLocalStorage().getItem() || {})
        console.log('初始化songData======', songInfoLocalStorage().getItem() || {});
        window.addEventListener('songInfoSetItemEvent', function (e) {
            setSongInfo(e.info || {})
            console.log('监听songData======', e.info);
        });
        return () => {
            window.removeEventListener('songInfoSetItemEvent')
        }
    }, [])

    // 暂停/播放
    const playSongs = () => {
        if (!songData.mp3Url) return
        audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause()
    }
    useEffect(() => {
        playSongs()
    }, [songData])
    useEffect(() => {
        // const audio = audioRef.current
        // // 实时显示播放进度
        // audio.addEventListener("timeupdate", function (val) {
        //     // 更新与播放进度相关的内容
        //     // console.error(val);
        // });

        // // 音频文件因为缺少媒体信息（如时长等）导致播放停止时会触发waiting事件
        // audio.addEventListener("waiting", function (val) {
        //     console.error('waiting');
        // });

        // // 当整个音频文件播放完毕的时候触发ended事件
        // audio.addEventListener("ended", function () {
        // });

        // // loadstart事件简单地告诉我们加载过程已经开始，浏览器正在连接到媒体
        // audio.addEventListener("loadstart", function () {
        // });

        // // 媒体数据意外地不再可用
        // audio.addEventListener("stalled", function () {
        //     // console.error('stalled');
        // });

        // // 当媒体文件可以播放的时候会触发canplay事件
        // audio.addEventListener("canplay", function () {
        //     // console.log('当媒体文件可以播放的时候会触发canplay事件');
        // });
    }, [])
    return (
        <>
            <audio ref={audioRef} src={songData.mp3Url} controls={false} />
            <div className={styles.playerBox}>
                <div className={styles.playerFixed} onClick={playSongs}>
                    <div className={styles.imgBox} >
                        <div className={styles.img}>
                            <img src={songData.mp3Pic} alt='' />
                        </div>
                        <div className={styles.name}>{songData && songData.mp3Name}</div>
                    </div>
                    <div className={styles.player}>
                        <PlayOutline fontSize='.4rem' />
                    </div>
                </div>

            </div>
        </>

    )
};

export default Headers;
