import React, { useReducer, lazy } from 'react';
import createContextFind from '../../hooks/Find/createContextFind';
import { reducer, initialState } from '../../hooks/Find/useReducerFind';

// const Header = lazy(() => import('../../components/Header')); // 头部搜索
const Banner = lazy(() => import('./Banner')); // banner
const Recom = lazy(() => import('./Recom')); // 推荐歌单
const Iconnav = lazy(() => import('./Iconnav')); // icon导航

const Find = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <createContextFind.Provider value={{ state, dispatch, props }}>
//             <Header />
            <Banner />
            <Iconnav />
            <Recom />
        </createContextFind.Provider>
    )
};
export default Find;
