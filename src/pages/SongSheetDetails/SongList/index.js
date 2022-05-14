import React from "react";
import createContextSong from '@/hooks/SongSheetDetails/createContextSong'
import {
    getPlaylistDetail,
    getSongUrl,
} from '@/hooks/SongSheetDetails/useReducerSong'
import { List, Image } from "antd-mobile";
const {
    useContext,
    useEffect,
    useRef,
    useState
} = React
const SongList = () => {
    const {
        state: {
            songList: {
                playlist: {
                    tracks = []
                } = {}
            } = {},
            songComplete: { data: [audioObj = {}] = [] } = {}
        } = {}, dispatch, props } = useContext(createContextSong)
    const audioRef = useRef(null)
    const [titleName, setTitleName] = useState(null)
    useEffect(() => {
        const { match: { params: { id = '' } = {} } = {} } = props
        getPlaylistDetail({ dispatch, params: { id } })
    }, [])
    return (
        <>
            <audio ref={audioRef} src={audioObj.url} controls>  </audio>
            <div>{titleName}</div>
            <List>
                {
                    tracks.map(item => (
                        <List.Item key={item.id} onClick={async () => {
                            await getSongUrl({ dispatch, params: { id: item.id } })
                            audioRef.current.play()
                            setTitleName(item.name)
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

export default SongList