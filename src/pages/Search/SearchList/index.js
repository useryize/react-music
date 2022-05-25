import React from 'react'
import { useNavigate } from "react-router-dom";
import createContextSearch from '../../../hooks/Search/createContextSearch'
import { getSearch } from '../../../hooks/Search/useReducerSearch'
// import createContextApp from '../../../hooks/App/createContextApp'
// import { getSongUrlFunction } from '../../../hooks/App/useReducerApp'
import { Image, List } from 'antd-mobile'
// import history from '../../../utils/history'
import styles from './index.module.less'
import { PlayOutline } from 'antd-mobile-icons'
import { formatNumber } from '@/utils/utils'

const {
    useContext,
    useEffect
} = React

const KeywordTabs = () => {
    const navigate = useNavigate()
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
    // const {
    //     dispatch: dispatchApp
    // } = useContext(createContextApp)

    useEffect(() => {
        getSearch({ dispatch, params: { type: srarchType, keywords: searchInput } })
    }, [srarchType, searchInput])
    const toSongSheetDetails = (item) => {
        navigate(`/songSheetDetails/${item.id}`)
        // history.push({
        //     pathname: `/songSheetDetails/${item.id}`,
        // });
    }
    return (
        <div className={styles.listBox}>

            {
                srarchType === 1 && <List>
                    {
                        songs.map(item => (
                            <List.Item key={item.id}>
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
