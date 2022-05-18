import React from "react";
import createContextSong from '@/hooks/SongSheetDetails/createContextSong'
import { getPlaylistDetail } from '@/hooks/SongSheetDetails/useReducerSong'
import createContextApp from '../../../hooks/App/createContextApp'
import { getSongUrl, singleInfoFunction } from '../../../hooks/App/useReducerApp'
import { List, Image } from "antd-mobile";
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

    // app数据
    const {
        dispatch: dispatchApp
    } = useContext(createContextApp)



    useEffect(() => {
        // 歌单列表
        const { match: { params: { id = '' } = {} } = {} } = props
        getPlaylistDetail({ dispatch, params: { id } })
    }, [])

    return (
        <>
            <SongListPublic dataInfo={tracks} />
            <div className={styles.sonPic} style={{ backgroundImage: `url(${playlist.coverImgUrl})` }}>
            </div>
            <List>
                {
                    tracks.map(item => (
                        <List.Item key={item.id} onClick={async () => {
                            const res = await getSongUrl({ dispatch: dispatchApp, params: { id: item.id } }) // 获取音乐id
                            const { data: [obj = {}] = [] } = res || {}
                            const songObj = {
                                mp3Url: obj && obj.url,
                                mp3Pic: (item && item.al && item.al.picUrl) || '',
                                mp3Name: item.name
                            }
                            singleInfoFunction({ dispatch: dispatchApp, params: songObj })
                            // songInfoLocalStorage(songObj).setItem() // 缓存音乐信息
                        }}>
                            <Image
                                width='0.8rem'
                                heigth='0.8rem'
                                fit="cover"
                                lazy={true}
                                src={item.al && item.al.picUrl}
                            ></Image>
                            <div>{item.name}</div>
                            <div>{item.al.name}</div>
                        </List.Item>
                    ))
                }

            </List>
        </>
    )
}

export default SongListCom
