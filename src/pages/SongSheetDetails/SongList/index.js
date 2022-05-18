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
            <div className={styles.sonPic} style={{ backgroundImage: `url(${playlist.coverImgUrl})` }}>
            </div>
            <SongListPublic dataInfo={tracks} />
        </>
    )
}

export default SongListCom
