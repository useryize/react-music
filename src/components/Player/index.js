import React from 'react';
import createContextApp from '../../hooks/App/createContextApp';
import styles from './index.module.less';
import { PlayOutline } from 'antd-mobile-icons'
const {
    useState,
    useContext,
    useEffect,
    useRef
} = React
const Headers = () => {
    const audioRef = useRef(null)
    const { state: {
        songComplete
    } = {} } = useContext(createContextApp)
    const { data: [audioObj = {}] = [] } = songComplete

    const [songInfo, setSongInfo] = useState({})
    useEffect(() => {
        const getInfo = JSON.parse(window.localStorage.getItem('songData'))
        setSongInfo(getInfo)
        playSongs()
    }, [songComplete])

    // 暂停/播放
    const playSongs = () => {
        if (!audioObj.url) return
        audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause()
    }

    return (
        <>
            <audio ref={audioRef} src={audioObj.url} controls />
            <div className={styles.playerBox}>
                <div className={styles.playerFixed} onClick={() => {
                    playSongs()
                }}>
                    <div className={styles.imgBox} >
                        <div className={styles.img}>
                            <img src={songInfo && songInfo.al && songInfo.al.picUrl} alt='' />
                        </div>
                        <div className={styles.name}>{songInfo && songInfo.name}</div>
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
