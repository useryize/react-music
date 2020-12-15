import React from 'react';
// import styles from './index.module.css';
// import { get } from '../../utils/axios';
import { Button } from 'antd-mobile';
const { useEffect } = React;

const Banner = () => {
    useEffect(() => {
        // get({url: 'list.json'})
    }, []);
    return (
        <Button type="ghost" >small</Button>
    )
}

export default Banner;