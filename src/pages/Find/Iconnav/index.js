import React, { useState } from 'react';
import styles from './index.module.less'
const Iconnav = () => {
	const [iconList] = useState(Array.from({ length: 50 }))
	console.error(iconList);
	return (
		<div className={styles.iconBox}>
			{
				iconList.map((item) => (
					<div className={styles.item} key={item && item.id}>
						<div className={styles.img}></div>
						<div className={styles.name}>4654</div>
					</div>
				))
			}
		</div>
	)
}

export default Iconnav;
