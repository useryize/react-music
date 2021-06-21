import React from 'react';
import styles from './index.module.less';
const Headers = () => {

    return (
        <div className={styles.headBox}>
            <div className={styles.left}>
                <div className={styles.more}></div>
            </div>
            <div className={styles.center}></div>
            <div className={styles.right}></div>
        </div>
    )
};

export default Headers;