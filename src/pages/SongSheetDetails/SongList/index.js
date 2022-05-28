import React from "react";
import { useParams } from "react-router-dom";
import createContextSong from '../../../hooks/SongSheetDetails/createContextSong'
import { getPlaylistDetail, getPlaylistTrackAll } from '../../../hooks/SongSheetDetails/useReducerSong'
import SongListPublic from '../../../components/SongListPublic'
import { Image } from 'antd-mobile'
import styles from './index.module.less'
const {
    useContext,
    // useEffect,
    useEffect
} = React
const SongListCom = () => {
    const useParamsRoute = useParams()
    const {
        state: {
            songList: {
                // playlist: {
                // 	tracks = []
                // } = {},
                playlist = {}
            } = {},
            songAllList: {
                songs = []
            } = {}
        } = {}, dispatch
    } = useContext(createContextSong)

    useEffect(() => {
        // 歌单列表
        const { id = '' } = useParamsRoute
        getPlaylistDetail({ dispatch, params: { id } })

        // 获取所有歌曲
        getPlaylistTrackAll({ dispatch, params: { id, offset: 0, limit: 1000 } })
    }, [])

    return (
        <>
            <div className={styles.songPicBox}>
                <div className={styles.songBackground} style={{ backgroundImage: `url(${playlist.coverImgUrl})` }}></div>
                <div className={styles.songPic}>
                    <div className={styles.left}>
                        <Image lazy src={playlist.coverImgUrl} placeholder={null} />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.title}>{playlist.name}</div>
                        <div className={styles.creator}>
                            <div className={styles.creatorImg}>
                                <Image
                                    className={styles.songImg}
                                    lazy
                                    src={playlist && playlist.creator && playlist.creator.avatarUrl}
                                    placeholder={null}
                                />
                            </div>
                            <div className={styles.creatorName}>
                                {playlist && playlist.creator && playlist.creator.nickname}
                            </div>
                        </div>
                        <div className={styles.doc}>{playlist.description}</div>
                    </div>
                </div>
            </div>
            <SongListPublic dataInfo={songs} />
        </>
    )
}

export default SongListCom
