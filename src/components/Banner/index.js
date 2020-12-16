import React from 'react';
import createContextFind from '../../hooks/Find/createContextFind';
// import styles from './index.module.css';
// import { get } from '../../utils/axios';

import { Button } from 'antd-mobile';
const { useEffect, useContext } = React;

const Banner = () => {
    const { state, dispatch } = useContext(createContextFind);
    useEffect(() => {
        // get({url: 'list.json'})
    }, []);
    return (
    <Button type="ghost" onClick={() => {
        dispatch({
            type: 'aaa',
            a: 456
        })
    }}>{state.a}</Button>
    )
}

export default Banner;