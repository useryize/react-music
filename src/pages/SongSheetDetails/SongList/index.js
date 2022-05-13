import React from "react";
import createContextSong from '@/hooks/SongSheetDetails/createContextSong'
import { getPlaylistDetail } from '@/hooks/SongSheetDetails/useReducerSong'
import { List, Image } from "antd-mobile";
const {
    useContext,
    useEffect
} = React
const SongList = () => {
    const {
        state: {
            songList: {
                playlist: {
                    tracks = []
                } = {}
            } = {}

        } = {}, dispatch, props } = useContext(createContextSong)
    const { match: { params: { id = '' } = {} } = {} } = props
    useEffect(() => {
        getPlaylistDetail({ dispatch, params: { id } })
    }, [])
    return (
        <List>
            {
                tracks.map(item => (
                    <List.Item key={item.id}>
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