import React, { useState, Fragment } from 'react';
import { Drawer } from 'antd-mobile';
import styles from './index.module.less';
const Headers = () => {
    let [searchTitle] = useState('hooks')
    // const sidebar = (
    //     <div>2143</div>
    // )
    return (
        <Fragment>
            <div className={styles.headBox}>
                <div className={styles.left}>
                    <div className={styles.more}></div>
                </div>
                <div className={styles.center}>{searchTitle}</div>
                <div className={styles.right}></div>
            </div>
            <Drawer
                position="left"
                open={true}
                className={styles.sidebarStyle}
                // sidebar={sidebar}
            >
                <div>kjk</div>
            </Drawer>
        </Fragment>

    )
};

export default Headers;