import React from 'react';
const { lazy } = React;
const Find = lazy(() => import('../pages/Find'));
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const SongSheetDetails = lazy(() => import('../pages/SongSheetDetails'));
const Search = lazy(() => import('../pages/Search'));

const routes = [
    {
        path: '/find',
        component: Find,
        title: '发现'
    },
    {
        path: '/home',
        component: Home,
        title: '我的'
    },
    {
        path: '/login',
        component: Login,
        title: '登录'
    },
    {
        path: '/songSheetDetails/:id',
        component: SongSheetDetails,
        title: '歌单详情'
    },
    {
        path: '/search',
        component: Search,
        title: '搜索'
    },

]
export default routes
