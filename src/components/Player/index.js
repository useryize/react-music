import React from 'react';
import createContextApp from '../../hooks/App/createContextApp';
import styles from './index.module.less';
import { Image } from 'antd-mobile'
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
                <div className={styles.play} onClick={() => {
                    pauseSongs()
                }}>
                    <div className={styles.imgBox} >
                        <Image
                            width='0.8rem'
                            heigth='0.8rem'
                            fit="cover"
                            lazy={true}
                            src={songInfo && songInfo.al && songInfo.al.picUrl}
                        ></Image>
                    </div>
                    <div className={styles.name}>{songInfo && songInfo.name}</div>
                </div>

            </div>
        </>

    )
};

export default Headers;
