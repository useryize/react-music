import React from 'react';
import createContextFind from '../../hooks/Find/createContextFind';
import { findBannerList } from '../../hooks/Find/useReducerFind';
import { Carousel } from 'antd-mobile';
import styles from './index.module.less';

const { useEffect, useContext } = React;

const Banner = () => {
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

    return (
        <div className={styles.bannerBox}>
            <Carousel
                autoplay={true}
                infinite={true}
            // dotStyle= {}
            >
                {
                    banners && banners.map((item, index) => {
                        return <div key={index} className={styles.imgBox}><img className={styles.img} src={item.imageUrl} alt={item.typeTitle} /></div>
                    })
                }
            </Carousel >
            <div className={styles.console} onClick={() => {
                // alert(JSON.stringify(state));
                alert(JSON.stringify(styles.dotStyle));
            }}>console</div>
        </div>

    )
}

export default Banner;