import React from 'react';
import createContextFind from '../../../hooks/Find/createContextFind'
import { getFindIconNav } from '../../../hooks/Find/useReducerFind'
import styles from './index.module.less'
const {
	// useState,
	useContext,
	useEffect
} = React
const Iconnav = () => {
	const { state: { iconNavList = [] } = {}, dispatch } = useContext(createContextFind)
	// const [iconList] = useState(Array.from({ length: 50 }))
	useEffect(() => {
		let key = ''
		const res = getFindIconNav({ dispatch })
		res.then(() => {
			clearInterval(key)
		})
		res.catch(() => {
			key = setInterval(() => {
				getFindIconNav({ dispatch })
			}, 1000)
		})
	}, [])
	return (
		<div className={styles.iconBox}>
			{
				iconNavList && iconNavList.map((item, index) => (
					<div className={styles.item} key={(item && item.id) || index}>
						<div className={styles.img} style={{ backgroundImage: `url(${item.iconUrl})` }}></div>
						<div className={styles.name}>{(item && item.name) || ''}</div>
					</div>
				))
			}
		</div>
	)
}

export default Iconnav;
