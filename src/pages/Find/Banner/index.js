import React from 'react';
import createContextFind from '../../../hooks/Find/createContextFind';
import { findBannerList } from '../../../hooks/Find/useReducerFind';
// import { Carousel } from 'antd-mobile';
import Swiper, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import styles from './index.module.less';

Swiper.use([Pagination]);

const {
    useEffect,
    useContext,
    // useRef,
} = React;


const Banner = () => {
    // const swiperDom = useRef(null);
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
        let swiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            }
        });
        return () => {
            swiper.destroy();
        }
    }, [banners]);

    return (
        <div className={`swiper-container ${styles.bannerBox}`}>
            <div className="swiper-wrapper">
                {
                    banners.map((item, index) => {
                        return (
                            <div
                                className={`swiper-slide ${styles.banner}`} key={index}
                                style={{ backgroundImage: `url(${item.pic})` }}
                            >
                                <div className={styles.tigs}>{item.typeTitle}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="swiper-pagination"></div>
        </div>
    )
    // return (
    //     banners && banners.length > 0 &&
    //     <div className={styles.bannerBox}>
    //         <Carousel
    //             autoplay
    //             infinite
    //         >
    //             {
    //                 banners && banners.map((item, index) => {
    //                     return (
    //                         <div
    //                             className={styles.banner} key={index}
    //                             style={{ backgroundImage: `url(${item.pic})` }}
    //                         >
    //                             {/* <img className={styles.imgBox} src={item.pic} alt={item.typeTitle} /> */}
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </Carousel>
    //     </div>
    // )
    // return (
    //     <div ref={swiperDom} className={`${styles.bannerBox} swiper-container`}>
    //         <div className="swiper-wrapper">
    //             {
    //                 banners && banners.map((item, index) => {
    //                     return (
    //                         <div className="swiper-slide" key={index}>
    //                             <div key={index} className={`${styles.carouselBox} `}>
    //                                 <div className={styles.imgBox}>
    //                                     <img className={styles.img} src={item.pic} alt={item.typeTitle} />
    //                                 </div>
    //                             </div>
    //                         </div>

    //                     )
    //                 })
    //             }
    //         </div>
    //     </div>
    // )
}

export default Banner;