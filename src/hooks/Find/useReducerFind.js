import { axiosGet } from '../../utils/axios';
import { bannerUrl, personalized } from '../../utils/apis';
const FIND_BANNER_LIST = 'FIND_BANNER_LIST';
const FIND_RECOM_LIST = 'FIND_RECOM_LIST';

export const initialState = {
    bannerList: {},
    recomList: {},

}

export const reducer = (state = initialState, action) => {
    if (action.type === 'FIND_BANNER_LIST') {
        return {
            ...state,
            bannerList: action.bannerList,
        }
    }
    if (action.type === 'FIND_RECOM_LIST') {
        return {
            ...state,
            recomList: action.recomList,
        }
    }
    return state;
}


// banner
export const findBannerList = ({ dispatch } = {}) => {
    axiosGet({
        url: bannerUrl,
        prm: {
            // 0: pc,1: android,2: iphone,3: ipad
            type: 2
        }
    }).then((res) => {
        dispatch({
            type: FIND_BANNER_LIST,
            bannerList: res
        })
    })
};

// 推荐歌单
export const findRecomList = ({ dispatch } = {}) => {
    axiosGet({
        url: personalized,
        prm: {}
    }).then((res) => {
        dispatch({ type: FIND_RECOM_LIST, recomList: res })

    })
}