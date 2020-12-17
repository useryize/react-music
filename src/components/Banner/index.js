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
        state,
        dispatch
    } = useContext(createContextFind);
    useEffect(() => {
        // other code
        findBannerList({ dispatch });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Carousel

                autoplay={false}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
            >
                {
                    banners && banners.map((item, index) => {
                        return <div key={index}><img src={item.imageUrl} alt={item.typeTitle} />456</div>
                    })
                }
            </Carousel >
            <div className={styles.box} onClick={() => {
                    alert(JSON.stringify(state))
                }}>456</div>
        </>

    )
}

export default Banner;