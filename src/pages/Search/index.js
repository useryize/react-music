import React, { useReducer } from 'react'
import createContextSearch from '../../hooks/Search/createContextSearch'
import { reducer, initialState } from '../../hooks/Search/useReducerSearch'
import CapsuleTabs from './KeywordTabs'
const Search = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <createContextSearch.Provider value={{ state, dispatch, props }}>
            <CapsuleTabs />
        </createContextSearch.Provider>
    )
}
export default Search