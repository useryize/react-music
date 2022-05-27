import { axiosGet } from '../../utils/axios';
import { playlistDetail, playlistTrackAll } from '../../utils/apis';
const PLAY_LIST_DETAIL = 'PLAY_LIST_DETAIL';
const PLAY_LIST_TRACK_ALL = 'PLAY_LIST_TRACK_ALL';

export const initialState = {
    songList: {},
	songAllList: {}
}

export const reducer = (state = initialState, action) => {
    if (action.type === PLAY_LIST_DETAIL) {
        return {
            ...state,
            songList: action.songList,
        }
    }
    if (action.type === PLAY_LIST_TRACK_ALL) {
        return {
            ...state,
            songAllList: action.songAllList,
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
// 获取歌单所有歌曲
export const getPlaylistTrackAll = ({ dispatch, params } = {}) => {
    const axiosRes = axiosGet({
        url: playlistTrackAll,
        params
    })
    axiosRes.then((res) => {
        dispatch({
            type: PLAY_LIST_TRACK_ALL,
            songAllList: res || {}
        })
    })
    return axiosRes
};
