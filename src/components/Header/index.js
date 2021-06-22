import React, { useState, Fragment } from 'react';
import { Drawer } from 'antd-mobile';
import styles from './index.module.less';
const Headers = () => {
    let [searchTitle] = useState('hooks');
    let [drawerShow, drawerShowFun] = useState(false);
    const sidebar = (
        <div>2143</div>
    )
    return (
        <Fragment>
            <div className={styles.headBox}>
                <div className={styles.left}>
                    <div className={styles.more} onClick={() => drawerShowFun(!drawerShow)}></div>
                </div>
                <div className={styles.center}>{searchTitle}</div>
                <div className={styles.right}></div>
            </div>
            <Drawer
                position="left"
                open={drawerShow}
                touch={false}
                className={styles.sidebarStyle}
                sidebar={sidebar}
                onOpenChange={() => drawerShowFun(false)}
            >
                <div></div>
            </Drawer>
        </Fragment>

    )
};

export default Headers;