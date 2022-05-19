import React from 'react';
import createContextApp from '../../hooks/App/createContextApp'
import { getSongUrl, singleInfoFunction } from '../../hooks/App/useReducerApp'
// import { List, Image } from "antd-mobile";
import styles from './index.module.less'
import { PlayOutline } from 'antd-mobile-icons'
const {
    useContext,
    useState
} = React

const SongListPublic = (_props) => {
    const { dataInfo = [] } = _props

    const [songFocu, setSongFocu] = useState(null)
    // app数据
    const { dispatch } = useContext(createContextApp)
    return (
        <div className={styles.songBox}>
            {
                dataInfo.map((item, index) => (
                    <div className={styles.item} key={index} onClick={async () => {
                        setSongFocu(index)
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
                        <div className={styles.left}>
                            <div className={`${styles.order} ${index === songFocu ? styles.focu : ''}` }>{index + 1}</div>
                            <div className={styles.titleBox}>
                                <div className={styles.title}>{item.name}</div>
                                <div className={styles.doc}>
                                    <span>
                                        {
                                            { 8: 'SQ', 1: 'VIP' }[+item.fee]
                                        }
                                    </span>
                                    <span>
                                        {item.ar.map(itemName => (itemName.name)).join('/')}-
                                        {
                                            item && item.al && item.al.name
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <PlayOutline fontSize='.14rem' />
                        </div>
                    </div>
                ))

            }
        </div >
        // <List>
        //     {
        //         dataInfo.map(item => (
        //             <List.Item key={item.id}}>
        //                 <Image
        //                     width='0.8rem'
        //                     heigth='0.8rem'
        //                     fit="cover"
        //                     lazy={true}
        //                     src={item.al && item.al.picUrl}
        //                 ></Image>
        //                 <div>{item.name}</div>
        //                 <div>{item.al.name}</div>
        //             </List.Item>
        //         ))
        //     }
        // </List>
    )
}

export default SongListPublic;
