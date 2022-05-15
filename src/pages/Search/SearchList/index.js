import React from 'react'
import createContextSearch from '../../../hooks/Search/createContextSearch'
import { getSearch } from '../../../hooks/Search/useReducerSearch'
import { List, Image } from 'antd-mobile'
import history from '../../../utils/history'
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
                playlists = []
            } = {}
        } = {},
        dispatch
    } = useContext(createContextSearch)
    useEffect(() => {
        getSearch({ dispatch, params: { type: srarchType, keywords: searchInput } })
    }, [srarchType, searchInput])
    const toSongSheetDetails = (item) => {
        history.push({
            pathname: `/songSheetDetails/${item.id}`,
        });
    }
    return (
        <List>
            {
                playlists.map(item => (
                    <List.Item key={item.id} onClick={() => {
                        toSongSheetDetails(item)
                    }}>
                        <Image
                            width='0.8rem'
                            heigth='0.8rem'
                            fit="cover"
                            lazy={true}
                            src={item.coverImgUrl}
                        ></Image>
                        <div>{item.name}</div>
                    </List.Item>
                ))
            }
        </List>
    )
}
export default KeywordTabs