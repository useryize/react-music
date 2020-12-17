import React from 'react';
import createContextFind from '../../hooks/Find/createContextFind';
import {findBannerList} from '../../hooks/Find/useReducerFind';

// import styles from './index.module.css';

import { Button } from 'antd-mobile';
const { useEffect, useContext } = React;

const Banner = () => {
    const { state, dispatch } = useContext(createContextFind);
    useEffect(() => {
        // other code
        findBannerList({dispatch});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
    <Button type="ghost" onClick={() => {
      alert(JSON.stringify(state.list));
    }}>123</Button>
    )
}

export default Banner;