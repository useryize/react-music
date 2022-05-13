import { axiosGet } from '../../utils/axios';
import { playlistDetail } from '../../utils/apis';
const PLAY_LIST_DETAIL = 'PLAY_LIST_DETAIL';

export const initialState = {
    songList: {}
}

export const reducer = (state = initialState, action) => {
    if (action.type === 'PLAY_LIST_DETAIL') {
        return {
            ...state,
            songList: action.songList,
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