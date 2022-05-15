import React from 'react';
import createContextApp from '../../hooks/App/createContextApp';
import styles from './index.module.less';
const {
    // useState,
    useContext,
    useEffect,
    useRef
} = React
const Headers = () => {
    const { state: {
        songComplete
    } = {} } = useContext(createContextApp)
    const { data: [audioObj = {}] = [] } = songComplete
    const audioRef = useRef(null)
    useEffect(() => {
        console.error(songComplete);
        audioObj.url && audioRef.current.play()
    }, [songComplete])
    return (
        <>
            <audio ref={audioRef} src={audioObj.url} controls />
            <div className={styles.playerBox}>
                <div className={styles.imgBox}></div>
                <div className={styles.play}></div>
            </div>
        </>

    )
};

export default Headers;
