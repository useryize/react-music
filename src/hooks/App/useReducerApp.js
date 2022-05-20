import { axiosGet } from '../../utils/axios';
import { songUrl, songtDetail } from '../../utils/apis';
const GET_SONG_DETAIL_FUNCTION = 'GET_SONG_DETAIL_FUNCTION';
const SONG_ID_FUNCTION = 'SONG_ID_FUNCTION';
const SONG_URL_FUNCTION = 'SONG_URL_FUNCTION';
export const initialState = {
    songDetailArr: [],
    songId: '',
    songUrlArr: [],
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
    return state;
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
