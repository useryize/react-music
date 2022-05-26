import React from "react";
import { useParams } from "react-router-dom";
import createContextSong from '@/hooks/SongSheetDetails/createContextSong'
import { getPlaylistDetail } from '@/hooks/SongSheetDetails/useReducerSong'
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
                playlist: {
                    tracks = []
                } = {},
                playlist = {}
            } = {},
        } = {}, dispatch
    } = useContext(createContextSong)

    useEffect(() => {
        // 歌单列表
        const { id = '' } = useParamsRoute
        console.error(id);
        getPlaylistDetail({ dispatch, params: { id } })
    }, [])

    return (
        <>
            <div className={styles.songPicBox}>
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
            <SongListPublic dataInfo={tracks} />
        </>
    )
}

export default SongListCom
