import React from 'react';
import createContextFind from '../../../hooks/Find/createContextFind';
import { findBannerList } from '../../../hooks/Find/useReducerFind';
// import { Carousel } from 'antd-mobile';
import Swiper from "swiper"
import "swiper/swiper-bundle.css";
import styles from './index.module.less';

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
            loop: true
        });
        return () => {
            swiper.destroy();
        }
    }, [banners]);

    return (
        <div className={`swiper-container ${styles.bannerBox}`}>
            <div className="swiper-wrapper">
                {/* <div className={`swiper-slide ${styles.banner}`}>Slide 1</div>
                <div className={`swiper-slide ${styles.banner}`}>Slide 2</div>
                <div className={`swiper-slide ${styles.banner}`}>Slide 3</div>
                <div className={`swiper-slide ${styles.banner}`}>Slide 4</div>
                <div className={`swiper-slide ${styles.banner}`}>Slide 5</div>
                <div className={`swiper-slide ${styles.banner}`}>Slide 6</div>
                <div className={`swiper-slide ${styles.banner}`}>Slide 7</div>
                <div className={`swiper-slide ${styles.banner}`}>Slide 8</div> */}
                {
                    banners.map((item, index) => {
                        return (
                            <div
                                className={`swiper-slide ${styles.banner}`} key={index}
                            style={{ backgroundImage: `url(${item.pic})` }}
                            >
                                {item.typeTitle}
                                {/* <img className={styles.imgBox} src={item.pic} alt={item.typeTitle} /> */}
                            </div>
                        )
                    })
                }
            </div>
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