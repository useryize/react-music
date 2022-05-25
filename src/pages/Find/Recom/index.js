import React from 'react';
import { useNavigate } from 'react-router-dom'
// import Swiper from 'swiper';
import styles from './index.module.less';
import { findRecomList } from '../../../hooks/Find/useReducerFind';
import createContextFind from '../../../hooks/Find/createContextFind';
// import history from '@/utils/history';
import { formatNumber } from '@/utils/utils'
import { PlayOutline } from 'antd-mobile-icons'
const {
    useContext,
    useEffect,
    // useState,
} = React;
const Recom = () => {
    const navigate = useNavigate()
    const {
        state: {
            recomList = []
        } = {},
        dispatch,
        // props
    } = useContext(createContextFind);
    // const [list] = useState(Array.from({ length: 20 }).map(item => ({ picUrl: '', name: 'XXX' })))
    useEffect(() => {
        findRecomList({ dispatch });
    }, []);
    // useEffect(() => {
    //     let swiper = new Swiper('.swiper-container-recom', {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     });
    //     return () => {
    //         swiper.destroy();
    //     }
    // }, [playlists]);
    const toSongSheetDetails = (item) => {
        // const { history } = props;
        // history.push({
        //     pathname: `/songSheetDetails/${item.id}`,
        // });
        navigate(`/songSheetDetails/${item.id}`)
    }
    return (
        <div className={styles.recomBox}>
            <div className={styles.title}>推荐歌单</div>
            <div className={styles.itemBox}>
                {
                    recomList.map((item, index) => (
                        <div className={styles.item} key={index} onClick={() => {
                            toSongSheetDetails(item)
                        }}>
                            <div className={styles.pic}>
                                <img src={item.picUrl} alt="" />
                                <div className={styles.playCount}>
                                    <PlayOutline />
                                    <span>{formatNumber(item.playCount)}</span>
                                </div>
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
