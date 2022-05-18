import { axiosGet } from '../../utils/axios';
import { songUrl } from '../../utils/apis';
const SINGLE_INFO_FUNCTION = 'SINGLE_INFO_FUNCTION';
export const initialState = {
    singleInfo: {},
}

export const reducer = (state = initialState, action) => {
    if (action.type === SINGLE_INFO_FUNCTION) {
        return {
            ...state,
            singleInfo: action.singleInfo,
        }
    }
    return state;
}


// 获取歌曲url
export const getSongUrl = ({ dispatch, params } = {}) => {
    const axiosRes = axiosGet({
        url: songUrl,
        params: {
            ...params
        }
    })
    return axiosRes
};

// 获取音乐id
export const singleInfoFunction = ({ dispatch, params }) => {
    dispatch({ type: SINGLE_INFO_FUNCTION, singleInfo: params })
}
