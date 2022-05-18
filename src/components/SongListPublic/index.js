import React from 'react';
import createContextApp from '../../hooks/App/createContextApp'
import { getSongUrl, singleInfoFunction } from '../../hooks/App/useReducerApp'
import { List, Image } from "antd-mobile";
const {
    useContext,
} = React

const SongListPublic = (_props) => {
    console.error(_props);
    const { dataInfo = [] } = _props
    // app数据
    const { dispatch } = useContext(createContextApp)
    return (
        <List>
            {
                dataInfo.map(item => (
                    <List.Item key={item.id} onClick={async () => {
                        const res = await getSongUrl({ dispatch, params: { id: item.id } }) // 获取音乐id
                        const { data: [obj = {}] = [] } = res || {}
                        const songObj = {
                            mp3Url: obj && obj.url,
                            mp3Pic: (item && item.al && item.al.picUrl) || '',
                            mp3Name: item.name
                        }
                        singleInfoFunction({ dispatch, params: songObj })
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
    )
}

export default SongListPublic;
