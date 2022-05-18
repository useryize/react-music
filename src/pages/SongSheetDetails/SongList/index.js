import React from "react";
import createContextSong from '@/hooks/SongSheetDetails/createContextSong'
import { getPlaylistDetail } from '@/hooks/SongSheetDetails/useReducerSong'
import SongListPublic from '../../../components/SongListPublic'
import styles from './index.module.less'
const {
    useContext,
    useEffect,
} = React
const SongListCom = () => {

    const {
        state: {
            songList: {
                playlist: {
                    tracks = []
                } = {},
                playlist = {}
            } = {},
        } = {}, dispatch, props
    } = useContext(createContextSong)

    useEffect(() => {
        // 歌单列表
        const { match: { params: { id = '' } = {} } = {} } = props
        getPlaylistDetail({ dispatch, params: { id } })
    }, [])

    return (
        <>
            <div className={styles.songPicBox}>
                <div className={styles.songBlur} style={{ backgroundImage: `url(${playlist.coverImgUrl})` }}></div>
                <div className={styles.songpic}>
                    <div className={styles.left}>
                        <img src={playlist.coverImgUrl} alt="" />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.title}>{playlist.name}sadasdasdasd</div>
                        <div className={styles.doc}>{playlist.description}asdasdasdasd</div>
                    </div>
                </div>
            </div>
            <SongListPublic dataInfo={tracks} />
        </>
    )
}

export default SongListCom
