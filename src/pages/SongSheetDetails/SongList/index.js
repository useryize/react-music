import React from "react";
import createContextSong from '@/hooks/SongSheetDetails/createContextSong'
import { getPlaylistDetail } from '@/hooks/SongSheetDetails/useReducerSong'
import createContextApp from '../../../hooks/App/createContextApp'
import { getSongUrl } from '../../../hooks/App/useReducerApp'
import { List, Image } from "antd-mobile";
import { songInfoLocalStorage } from '../../../utils/utils'
const {
    useContext,
    useEffect,
} = React
const SongList = () => {

    const {
        state: {
            songList: {
                playlist: {
                    tracks = []
                } = {}
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
        <List>
            {
                tracks.map(item => (
                    <List.Item key={item.id} onClick={async () => {
                        songInfoLocalStorage(item)
                        await getSongUrl({ dispatch: dispatchApp, params: { id: item.id } })
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
    )
}

export default SongList