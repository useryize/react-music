import { axiosGet } from '../../utils/axios';
import { playlistDetail, songUrl } from '../../utils/apis';
const PLAY_LIST_DETAIL = 'PLAY_LIST_DETAIL';
const SONG_URL = 'SONG_URL';

export const initialState = {
    songList: {},
    songComplete: {},
}

export const reducer = (state = initialState, action) => {
    if (action.type === PLAY_LIST_DETAIL) {
        return {
            ...state,
            songList: action.songList,
        }
    }
    if (action.type === SONG_URL) {
        return {
            ...state,
            songComplete: action.songComplete,
        }
    }
    return state;
}


// 歌单详情
export const getPlaylistDetail = ({ dispatch, params } = {}) => {
    const axiosRes = axiosGet({
        url: playlistDetail,
        params
    })
    axiosRes.then((res) => {
        dispatch({
            type: PLAY_LIST_DETAIL,
            songList: res || {}
        })
    })
    return axiosRes
};
// 歌曲详情
export const getSongUrl = ({ dispatch, params } = {}) => {
    const axiosRes = axiosGet({
        url: songUrl,
        params: {
            ...params
        }
    })
    axiosRes.then((res) => {
        dispatch({
            type: SONG_URL,
            songComplete: res || {}
        })
    })
    return axiosRes
};