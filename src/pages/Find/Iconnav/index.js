import React from 'react';
import createContextFind from '../../../hooks/Find/createContextFind'
import { getFindIconNav } from '../../../hooks/Find/useReducerFind'
import styles from './index.module.less'
import moment from 'moment';
// import icon from './icon.png'
const {
	// useState,
	useContext,
	useEffect
} = React
const Iconnav = () => {
	const { state: { iconNavList = [] } = {}, dispatch } = useContext(createContextFind)
	// const [iconList] = useState(Array.from({ length: 50 }))
	useEffect(() => {
		getFindIconNav({ dispatch })
	}, [])

	if (iconNavList.length === 0) {
		return <div className={styles.emptyInfo}>加载中...</div>
	}

	return (
		<div className={styles.iconBox}>
			{
				iconNavList && iconNavList.map((item, index) => (
					<div className={styles.item} key={(item && item.id) || index}>
						<div className={styles.imgBox}>
							<div className={styles.img} style={{ backgroundImage: `url(${item.iconUrl})` }}>
							</div>
							{
								index === 0 && <div className={styles.days}>{moment().format('DD')}</div>
							}
						</div>
						<div className={styles.name}>{(item && item.name) || ''}</div>
					</div>
				))
			}
		</div>
	)
}

export default Iconnav;
