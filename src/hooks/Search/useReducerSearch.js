import { axiosGet } from '../../utils/axios';
import { search, searchDefault } from '../../utils/apis';
const SEARCH_TYPE_FUCTION = 'SEARCH_TYPE_FUCTION'
const SEARCH_INPUT_FUCTION = 'SEARCH_INPUT_FUCTION'
const SEARCH_LIST_DETALIS = 'SEARCH_LIST_DETALIS'
export const initialState = {
    srarchType: 1000, // 搜索类型
    searchInput: '', // 搜索关键字
    searchList: {}, // 搜索列表
}

export const reducer = (state = initialState, action) => {
    if (action.type === SEARCH_TYPE_FUCTION) {
        return {
            ...state,
            srarchType: action.srarchType
        }
    }
    if (action.type === SEARCH_INPUT_FUCTION) {
        return {
            ...state,
            searchInput: action.searchInput
        }
    }
    if (action.type === SEARCH_LIST_DETALIS) {
        return {
            ...state,
            searchList: action.searchList
        }
    }
    return state;
}
// 搜索类型
export const searchTypeFunction = ({ dispatch = h => h, params = 0 }) => {
    dispatch({ type: SEARCH_TYPE_FUCTION, srarchType: params })
}
// 搜索关键字
export const searchInputTextFunction = ({ dispatch = h => h, params = '' }) => {
    dispatch({ type: SEARCH_INPUT_FUCTION, searchInput: params })
}
// 默认搜索关键词
export const getSearchDefault = ({ dispatch = h => h, params = {} }) => {
    const axiosRes = axiosGet({
        url: searchDefault,
        params
    })
    return axiosRes
}
// 搜索
export const getSearch = ({ dispatch = h => h, params = {} }) => {
    const axiosRes = axiosGet({
        url: search,
        params
    })
    axiosRes.then((res) => {
        dispatch({ type: SEARCH_LIST_DETALIS, searchList: (res && res.result) || {} })
    })
    return axiosRes
}