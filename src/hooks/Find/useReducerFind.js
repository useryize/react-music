import {get} from '../../utils/axios';
const FIND_BANNER_LIST = 'FIND_BANNER_LIST';

export const initialState = {
    list: {}
}

export const reducer = (state = initialState, action) => {
    if(action.type === 'FIND_BANNER_LIST') {
        return {
            ...state,
            list: action.list
        }
    }
    return state;
}



export const findBannerList = ({dispatch}) => {
    get({url: 'list.json'}).then((res) => {
        dispatch({
            type: FIND_BANNER_LIST,
            list: res
        })
    })
};