import { axiosGet } from '../../utils/axios';
import { songUrl, songtDetail, scrobble } from '../../utils/apis';
const GET_SONG_DETAIL_FUNCTION = 'GET_SONG_DETAIL_FUNCTION';
const SONG_ID_FUNCTION = 'SONG_ID_FUNCTION';
const SONG_URL_FUNCTION = 'SONG_URL_FUNCTION';
const HEADER_TITLE_INFO_FUNCTION = 'HEADER_TITLE_INFO_FUNCTION';
const SEARCH_INPUT_FUCTION = 'SEARCH_INPUT_FUCTION';
export const initialState = {
    songDetailArr: [],
    songId: '',
    songUrlArr: [],
    headerTitle: {
        backgroundColor: '#ffffff',
        textColor: '#333333'
    },
	searchInput: '许嵩'
}
export const reducer = (state = initialState, action) => {
    if (action.type === GET_SONG_DETAIL_FUNCTION) {
        return {
            ...state,
            songDetailArr: action.songDetailArr,
        }
    }
    if (action.type === SONG_ID_FUNCTION) {
        return {
            ...state,
            songId: action.songId,
        }
    }
    if (action.type === SONG_URL_FUNCTION) {
        return {
            ...state,
            songUrlArr: action.songUrlArr,
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
export const getSongDetailApp = ({ dispatch, params }) => {
    const axiosRes = axiosGet({
        url: songtDetail,
        params
    })
    axiosRes.then((res) => {
        dispatch({ type: GET_SONG_DETAIL_FUNCTION, songDetailArr: (res && res.songs) || [] })
    })
    return axiosRes
}

// 获取音乐id
export const getSongIdApp = ({ dispatch, params }) => {
    dispatch({ type: SONG_ID_FUNCTION, songId: params })
}

// 获取歌曲url
export const getSongUrlApp = ({ dispatch, params } = {}) => {
    const axiosRes = axiosGet({
        url: songUrl,
        params: {
            ...params
        }
    })
    axiosRes.then((res) => {
        dispatch({ type: SONG_URL_FUNCTION, songUrlArr: (res && res.data) || [] })
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
