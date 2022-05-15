import React, { useReducer, lazy } from 'react'
import createContextSearch from '../../hooks/Search/createContextSearch'
import { reducer, initialState } from '../../hooks/Search/useReducerSearch'

const KeywordTabs = lazy(() => import('./KeywordTabs/index'));
const SearchInput = lazy(() => import('./SearchInput/index'));
const SearchList = lazy(() => import('./SearchList/index'));

const Search = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <createContextSearch.Provider value={{ state, dispatch, props }}>
            <KeywordTabs />
            <SearchInput />
            <SearchList />
        </createContextSearch.Provider>
    )
}
export default Search