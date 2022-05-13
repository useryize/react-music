import React, { useState, Fragment, useContext } from 'react';
import createContextFind from '../../hooks/Find/createContextFind';
import { Popup, Avatar } from 'antd-mobile';
import styles from './index.module.less';
const Headers = () => {
    const { props } = useContext(createContextFind)
    let [searchTitle] = useState('hooks');
    let [drawerShow, drawerShowFun] = useState(false);
    const toLogin = () => {
        const { history } = props;
        history.push({
            pathname: "/login",
        });

    }
    return (
        <Fragment>
            <div className={styles.headBox}>
                <div className={styles.left}>
                    {/* <div className={styles.more} onClick={() => drawerShowFun(!drawerShow)}></div> */}
                    <Avatar
                        fit='cover'
                        style={{
                            '--size': '0.6rem',
                            '--border-radius': '50%'
                        }}
                    />
                </div>
                <div className={styles.center}>{searchTitle}</div>
                <div className={styles.right} onClick={toLogin}>立即登录</div>
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
