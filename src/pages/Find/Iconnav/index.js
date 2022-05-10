import React, { useState, useContext, useEffect } from 'react';
import createContextFind from '../../../hooks/Find/createContextFind'
import { getFindIconNav } from '../../../hooks/Find/useReducerFind'
import styles from './index.module.less'
const Iconnav = () => {
	const { state: { iconNavList = '' } = {}, dispatch } = useContext(createContextFind)
	const [iconList] = useState(Array.from({ length: 50 }))
	useEffect(() => {
		getFindIconNav({ dispatch })
	}, [])
	return (
		<>
			<div className={styles.iconBox} onClick={() => getFindIconNav({ dispatch })}>
				{
					iconList.map((item, index) => (
						<div className={styles.item} key={(item && item.id) || index}>
							<div className={styles.img}></div>
							<div className={styles.name}>4654</div>
						</div>
					))
				}
			</div>
			<div>
				{JSON.stringify(iconNavList)}
			</div>
		</>

	)
}

export default Iconnav;
