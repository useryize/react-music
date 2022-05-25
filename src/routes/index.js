import React from 'react';
const { lazy } = React;
const Find = lazy(() => import('../pages/Find'));
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const SongSheetDetails = lazy(() => import('../pages/SongSheetDetails'));
const Search = lazy(() => import('../pages/Search'));

const routes = [
    {
        id: 'find',
        path: '/find',
        element: Find,
        title: '发现'
    },
    {
        id: 'home',
        path: '/home',
        element: Home,
        title: '我的'
    },
    {
        id: 'login',
        path: '/login',
        element: Login,
        title: '登录'
    },
    {
        id: 'songSheetDetails',
        path: '/songSheetDetails/:id',
        element: SongSheetDetails,
        title: '歌单详情'
    },
    {
        id: 'search',
        path: '/search',
        element: Search,
        title: '搜索'
    },

]
export default routes
