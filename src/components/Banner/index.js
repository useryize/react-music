import React from 'react';
import styles from './index.module.css';
// import { get } from '../../utils/axios';
const { useEffect, useReducer } = React;

const Banner = () => {
    useEffect(() => {
        // get({url: 'list.json'})
    }, []);
    return (
        <div className={styles.box}>798</div>
    )
}

export default Banner;