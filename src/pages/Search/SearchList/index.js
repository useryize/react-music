import React from 'react'
import createContextSearch from '../../../hooks/Search/createContextSearch'
import { getSearch } from '../../../hooks/Search/useReducerSearch'
import createContextApp from '../../../hooks/App/createContextApp'
import { getSongUrl, singleInfoFunction } from '../../../hooks/App/useReducerApp'
import { Image, List } from 'antd-mobile'
import history from '../../../utils/history'
import styles from './index.module.less'
import { PlayOutline } from 'antd-mobile-icons'
import { formatNumber } from '@/utils/utils'
const {
    useContext,
    useEffect
} = React

const KeywordTabs = () => {
    const {
        state: {
            srarchType,
            searchInput,
            searchList: {
                playlists = [],
                songs = []
            } = {}
        } = {},
        dispatch
    } = useContext(createContextSearch)

    // app数据
    const {
        dispatch: dispatchApp
    } = useContext(createContextApp)

    useEffect(() => {
        getSearch({ dispatch, params: { type: srarchType, keywords: searchInput } })
    }, [srarchType, searchInput])
    const toSongSheetDetails = (item) => {
        history.push({
            pathname: `/songSheetDetails/${item.id}`,
        });
    }
    return (
        // <List>
        //     {
        //         playlists.map(item => (
        //             <List.Item key={item.id} onClick={() => {
        //                 toSongSheetDetails(item)
        //             }}>
        //                 <Image
        //                     width='0.8rem'
        //                     heigth='0.8rem'
        //                     fit="cover"
        //                     lazy={true}
        //                     src={item.coverImgUrl}
        //                 ></Image>
        //                 <div>{item.name}</div>
        //             </List.Item>
        //         ))
        //     }
        // </List>
        <div className={styles.listBox}>

            {
                srarchType === 1 && <List>
                    {
                        songs.map(item => (
                            <List.Item key={item.id} onClick={async () => {
                                const res = await getSongUrl({ dispatch: dispatchApp, params: { id: item.id } }) // 获取音乐id
                                const { data: [obj = {}] = [] } = res || {}
                                const songObj = {
                                    mp3Url: obj && obj.url,
                                    mp3Pic: '',
                                    mp3Name: item.name
                                }
                                singleInfoFunction({ dispatch: dispatchApp, params: songObj })
                            }}>
                                <div>{item.name}</div>
                                <div>{item.name}</div>
                            </List.Item>
                        ))
                    }
                </List>
            }


            {
                srarchType === 1000 && playlists.map((item, index) => (
                    <div className={styles.item} key={index} onClick={() => {
                        toSongSheetDetails(item)
                    }}>
                        <div className={styles.pic}>
                            <Image
                                width='100%'
                                heigth='auto'
                                fit="cover"
                                lazy={true}
                                src={item.coverImgUrl}
                            ></Image>
                            <div className={styles.playCount}>
                                <PlayOutline />
                                <span>{formatNumber(item.playCount)}</span>
                            </div>
                        </div>
                        <div className={styles.name}>{item.name}</div>
                    </div>
                ))
            }
        </div>
    )
}
export default KeywordTabs