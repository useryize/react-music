import React, { useState, Fragment } from 'react';
import { Popup } from 'antd-mobile';
import styles from './index.module.less';
const Headers = () => {
    let [searchTitle] = useState('hooks');
    let [drawerShow, drawerShowFun] = useState(false);
    return (
        <Fragment>
            <div className={styles.headBox}>
                <div className={styles.left}>
                    <div className={styles.more} onClick={() => drawerShowFun(!drawerShow)}></div>
                </div>
                <div className={styles.center}>{searchTitle}</div>
                <div className={styles.right}></div>
            </div>
            <Popup
                position="left"
                visible={drawerShow}
                onMaskClick={() => drawerShowFun(false)}
                bodyStyle={{ width: '60vw' }}
            >
                <div>个人中心</div>
            </Popup>
        </Fragment>

    )
};

export default Headers;