import React from 'react';
import createContextFind from '../../../hooks/Find/createContextFind';
import { findBannerList } from '../../../hooks/Find/useReducerFind';
import { Swiper } from 'antd-mobile'
import styles from './index.module.less';

// import Swiper, { Pagination } from "swiper";
// import "swiper/swiper-bundle.css";
// Swiper.use([Pagination]);

const {
	useEffect,
	useContext,
} = React;


const Banner = () => {
	const { state: {
		bannerList: {
			banners = []
		} = {}
	},
		dispatch
	} = useContext(createContextFind);
	useEffect(() => {
		findBannerList({ dispatch });
	}, []);

	if (banners.length === 0) {
		return <div className={styles.emptyBanner}>加载中...</div>
	}

	return (
		<div className={styles.bannerBox}>
			<Swiper
				loop={true}
				rubberband={true}
				stuckAtBoundary={true}
				indicatorProps={{
					style: {
						'--dot-color': 'rgba(0, 0, 0, 0.4)',
						'--active-dot-color': '#ffffff',
						'--dot-size': '.1rem',
						'--active-dot-size': '.3rem',
						'--dot-border-radius': '50%',
						'--active-dot-border-radius': '.15rem',
						'--dot-spacing': '.08rem',
					}
				}}
			>
				{
					banners.map((item, index) => (
						<Swiper.Item key={index}>
							<div className={styles.banner} style={{ backgroundImage: `url(${item.pic})` }}>
								<div className={styles.tigs}>{item.typeTitle}</div>
							</div>
						</Swiper.Item>
					))
				}
			</Swiper>
		</div>
	)
}

export default Banner;
