import { axiosGet } from '../../utils/axios';
import { songUrl } from '../../utils/apis';
const SONG_URL = 'SONG_URL';
export const initialState = {
    songComplete: {},
}

export const reducer = (state = initialState, action) => {
    if (action.type === SONG_URL) {
        return {
            ...state,
            songComplete: action.songComplete,
        }
    }
    return state;
}


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