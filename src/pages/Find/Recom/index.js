import React from 'react';
import Swiper from 'swiper';
import styles from './index.module.less';
import { findRecomList } from '../../../hooks/Find/useReducerFind';

import createContextFind from '../../../hooks/Find/createContextFind';
const { useContext, useEffect } = React;
const Recom = () => {
    const {
        state: {
            recomList: {
                playlists = []
            } = {}
        } = {},
        dispatch
    } = useContext(createContextFind);

    useEffect(() => {
        // other code
        findRecomList({ dispatch });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        let swiper = new Swiper('.swiper-container-recom', {
            slidesPerView: 3,
            spaceBetween: 30,
        });
        return () => {
            swiper.destroy();
        }
    }, [playlists]);
    return (


        //         <div class="swiper-container">
        //     <div class="swiper-wrapper">
        //       <div class="swiper-slide">Slide 1</div>
        //       <div class="swiper-slide">Slide 2</div>
        //       <div class="swiper-slide">Slide 3</div>
        //       <div class="swiper-slide">Slide 4</div>
        //       <div class="swiper-slide">Slide 5</div>
        //       <div class="swiper-slide">Slide 6</div>
        //       <div class="swiper-slide">Slide 7</div>
        //       <div class="swiper-slide">Slide 8</div>
        //       <div class="swiper-slide">Slide 9</div>
        //       <div class="swiper-slide">Slide 10</div>
        //     </div>
        //     <!-- Add Pagination -->
        //     <div class="swiper-pagination"></div>
        //   </div>
        <div className={styles.recomBox}>
            <div className={styles.title}>推荐歌单</div>
            <div className={`swiper-container swiper-container-recom ${styles.itemBox}`}>
                <div className="swiper-wrapper">
                    {
                        playlists.map(item => (
                            <div className={`swiper-slide ${styles.item}`} key={item.id}>
                                <div className={styles.pic}>
                                    <img src={item.coverImgUrl} alt="" />
                                </div>
                                <div className={styles.name}>{item.copywriter}</div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}
export default Recom;