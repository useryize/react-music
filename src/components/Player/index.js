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
            setSongInfo(songInfoLocalStorage().getItem() || {})
            console.log('监听songData======', songInfoLocalStorage().getItem() || {});
        });
    }, [])

    // 暂停/播放
    const playSongs = () => {
        if (!songData.mp3Url) return
        audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause()
    }

    return (
        <>
            <audio ref={audioRef} src={songData.mp3Url} controls />
            <div className={styles.playerBox}>
                <div className={styles.playerFixed} onClick={() => {
                    playSongs()
                }}>
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
