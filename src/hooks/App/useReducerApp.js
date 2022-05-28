import { axiosGet } from '../../utils/axios';
import { songUrl, songtDetail, scrobble } from '../../utils/apis';
const CURRENT_PALY_ALL_FUNCTION_APP = 'CURRENT_PALY_ALL_FUNCTION_APP';
const SONG_ID_FUNCTION = 'SONG_ID_FUNCTION';
const SONG_ALL_ID_FUNCTION = 'SONG_ALL_ID_FUNCTION';
const HEADER_TITLE_INFO_FUNCTION = 'HEADER_TITLE_INFO_FUNCTION';
const SEARCH_INPUT_FUCTION = 'SEARCH_INPUT_FUCTION';
export const initialState = {
    currentPalyAll: {}, // 当前播放歌曲列表
    songId: '',
    songAllId: '',
    headerTitle: {
        backgroundColor: '#ffffff',
        textColor: '#333333'
    },
    searchInput: '许嵩'
}
export const reducer = (state = initialState, action) => {
    if (action.type === CURRENT_PALY_ALL_FUNCTION_APP) {
        return {
            ...state,
            currentPalyAll: action.currentPalyAll,
        }
    }
    if (action.type === SONG_ID_FUNCTION) {
        return {
            ...state,
            songId: action.songId,
        }
    }
    if (action.type === SONG_ALL_ID_FUNCTION) {
        return {
            ...state,
            songAllId: action.songAllId,
        }
    }
    if (action.type === HEADER_TITLE_INFO_FUNCTION) {
        return {
            ...state,
            headerTitle: action.headerTitle,
        }
    }
    if (action.type === SEARCH_INPUT_FUCTION) {
        return {
            ...state,
            searchInput: action.searchInput,
        }
    }
    return state;
}
// 设置头部信息
export const setHeaderTitle = ({ dispatch, params }) => {
    dispatch({ type: HEADER_TITLE_INFO_FUNCTION, headerTitle: params })
}

// 获取歌曲详情
export const getSongDetailApp = ({ dispatch, params, type = '' }) => {
    const axiosRes = axiosGet({
        url: songtDetail,
        params
    })
    if (type === 'ALL') {
        // 当前播放歌曲列表
        axiosRes.then((res) => {
            dispatch({ type: CURRENT_PALY_ALL_FUNCTION_APP, currentPalyAll: res || {} })
        })
    }

    return axiosRes
}

// 获取音乐id
export const getSongIdApp = ({ dispatch, params }) => {
    dispatch({ type: SONG_ID_FUNCTION, songId: params })
}

// 获取全部id
export const getSongALLIdApp = ({ dispatch, params }) => {
    dispatch({ type: SONG_ALL_ID_FUNCTION, songAllId: params })
}

// 获取歌曲url
export const getSongUrlApp = ({ dispatch, params } = {}) => {
    const axiosRes = axiosGet({
        url: songUrl,
        params: {
            ...params
        }
    })
    return axiosRes
};

// 听歌打卡
export const setScrobblePunchinApp = ({ dispatch = h => h, params = {} }) => {
    const axiosRes = axiosGet({
        url: scrobble,
        params
    })
    return axiosRes
}

// 搜索关键字
export const searchInputTextFunctionApp = ({ dispatch = h => h, params = '' }) => {
    dispatch({ type: SEARCH_INPUT_FUCTION, searchInput: params })
}
