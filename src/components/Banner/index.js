import React from 'react';
import createContextFind from '../../hooks/Find/createContextFind';
import { findBannerList } from '../../hooks/Find/useReducerFind';
// import { Carousel } from 'antd-mobile';
import Swiper from "swiper"
import "swiper/swiper-bundle.css";
import styles from './index.module.less';

const { useEffect, useContext, useRef } = React;


const Banner = () => {
    const swiperDom = useRef(null);
    const { state: {
        list: {
            banners = []
        }
    },
        // state,
        dispatch
    } = useContext(createContextFind);
    useEffect(() => {
        // other code
        findBannerList({ dispatch });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // let a = new Swiper(swiperDom, { loop: true, autoplay: true, });
        
    }, [banners]);
    return (
        <div ref={swiperDom} className={`${styles.bannerBox} swiper-container`} onClick={(e) => {
            console.error(e);
        }}>
            <div className={`${styles.carouselBox} swiper-slide`}>
                {
                    banners && banners.map((item, index) => {
                        return <div key={index} className={styles.imgBox}><img className={styles.img} src={item.pic} alt={item.typeTitle} /></div>
                    })
                }
            </div>
        </div>
    )
}

export default Banner;