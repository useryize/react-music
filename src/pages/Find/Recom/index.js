import React from 'react';
// import Swiper from 'swiper';
import styles from './index.module.less';
import { findRecomList } from '../../../hooks/Find/useReducerFind';

import createContextFind from '../../../hooks/Find/createContextFind';
const {
    useContext,
    useEffect,
    // useState,
} = React;
const Recom = () => {
    const {
        state: {
            recomList: {
                playlists = []
            } = {}
        } = {},
        dispatch
    } = useContext(createContextFind);
    // const [list] = useState(Array.from({ length: 20 }).map(item => ({ picUrl: '', name: 'XXX' })))
    useEffect(() => {
        findRecomList({ dispatch });
    }, []);
    console.error(list);
    // useEffect(() => {
    //     let swiper = new Swiper('.swiper-container-recom', {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     });
    //     return () => {
    //         swiper.destroy();
    //     }
    // }, [playlists]);
    return (
        <div className={styles.recomBox}>
            <div className={styles.title}>推荐歌单</div>
            <div className={styles.itemBox}>
                {
                    playlists.map((item, index) => (
                        <div className={styles.item} key={index}>
                            <div className={styles.pic}>
                                <img src={item.picUrl} alt="" />
                            </div>
                            <div className={styles.name}>{item.name}</div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}
export default Recom;
