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
    const playSongs = () => {
        audioObj.url && audioRef.current.play()
    }
    const pauseSongs = () => {
        audioObj.url && audioRef.current.pause()
    }
    return (
        <>
            <audio ref={audioRef} src={audioObj.url} controls />
            <div className={styles.playerBox}>
                <div className={styles.playerFixed} onClick={() => {
                    pauseSongs()
                }}>
                    <div className={styles.imgBox} >
                        <div className={styles.img}>
                            <image src={songInfo && songInfo.al && songInfo.al.picUrl} />
                        </div>
                        <div className={styles.name}>{songInfo && songInfo.name}</div>
                    </div>
                    <div className={styles.palyer}>
                        <PlayOutline fontSize='.8rem' />
                    </div>
                </div>

            </div>
        </>

    )
};

export default Headers;
