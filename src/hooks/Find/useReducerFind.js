import { axiosGet } from '../../utils/axios';
import { bannerUrl } from '../../utils/apis';
const FIND_BANNER_LIST = 'FIND_BANNER_LIST';

export const initialState = {
    list: {}
}

export const reducer = (state = initialState, action) => {
    if (action.type === 'FIND_BANNER_LIST') {
        return {
            ...state,
            list: action.list
        }
    }
    return state;
}



export const findBannerList = ({ dispatch }) => {
    axiosGet({
        url: bannerUrl,
        prm: {
            // 0: pc,1: android,2: iphone,3: ipad
            type: 2
        }
    }).then((res) => {
        dispatch({
            type: FIND_BANNER_LIST,
            list: res
        })
    })
};