import React from 'react'
import createContextSearch from '../../../hooks/Search/createContextSearch'
import { searchInputTextFunction, getSearchDefault } from '../../../hooks/Search/useReducerSearch'
import { SearchBar } from 'antd-mobile'
const { useContext, useEffect, useState } = React

const KeywordTabs = () => {
    const {
        dispatch
    } = useContext(createContextSearch)
    const [searchDefault, setSearchDefault] = useState(null)
    useEffect(async () => {
        const res = await getSearchDefault({ dispatch })
        const { data: { showKeyword = '' } = {} } = res
        searchInputTextFunction({ dispatch, params: '许嵩' || showKeyword })
        setSearchDefault(showKeyword)

    }, [])
    return (
        <SearchBar placeholder={'许嵩' || searchDefault} onSearch={(val) => {
            searchInputTextFunction({ dispatch, params: val })
        }} />
    )
}
export default KeywordTabs
