import React from 'react';
import createContextFind from '../../hooks/Find/createContextFind';
import {findBannerList} from '../../hooks/Find/useReducerFind';

// import styles from './index.module.css';

import { Button } from 'antd-mobile';
const { useEffect, useContext } = React;

const Banner = () => {
    const { state, dispatch } = useContext(createContextFind);
    useEffect(() => {
        findBannerList({dispatch});
    }, []);
    return (
    <Button type="ghost" onClick={() => {
      alert(JSON.stringify(state.list));
    }}>123</Button>
    )
}

export default Banner;