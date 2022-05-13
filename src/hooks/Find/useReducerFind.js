import { axiosGet } from '../../utils/axios';
import { bannerUrl, personalized, homepageDragonBall } from '../../utils/apis';
const FIND_BANNER_LIST = 'FIND_BANNER_LIST';
const FIND_RECOM_LIST = 'FIND_RECOM_LIST';
const HOME_PAGE_DRAGON_BALL = 'HOME_PAGE_DRAGON_BALL';

export const initialState = {
    bannerList: {},
    recomList: [],
    iconNavList: []
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
    if (action.type === 'HOME_PAGE_DRAGON_BALL') {
        return {
            ...state,
            iconNavList: action.iconNavList,
        }
    }
    return state;
}


// banner
export const findBannerList = ({ dispatch } = {}) => {
    const axiosRes = axiosGet({
        url: bannerUrl,
        params: {
            type: 2 // 0: pc,1: android,2: iphone,3: ipad
        }
    })
    axiosRes.then((res) => {
        dispatch({
            type: FIND_BANNER_LIST,
            bannerList: res
        })
    })
    return axiosRes
};

// 圆形图标入口列表
export const getFindIconNav = ({ dispatch } = {}) => {
    const axiosRes = axiosGet({
        url: homepageDragonBall,
        params: {
        }
    })
    axiosRes.then((res) => {
        dispatch({ type: HOME_PAGE_DRAGON_BALL, iconNavList: (res && res.data) || [] })
    })
    return axiosRes
}

// 推荐歌单
export const findRecomList = ({ dispatch } = {}) => {
    axiosGet({
        url: personalized,
        params: {
        }
    }).then((res) => {
        dispatch({ type: FIND_RECOM_LIST, recomList: (res && res.result) || [] })

    })
}
