import React, { useState, Fragment, useContext, useEffect } from 'react';
import createContextFind from '../../hooks/Find/createContextFind';
import { Popup, Avatar, Button } from 'antd-mobile';
import { SearchOutline } from 'antd-mobile-icons'
import styles from './index.module.less';
const Headers = () => {
    const { props } = useContext(createContextFind)
    // let [searchTitle] = useState('hooks');
    let [drawerShow, drawerShowFun] = useState(false);
    let [userData, setUserData] = useState({});
    const toLogin = () => {
        const { history } = props;
        history.push({
            pathname: "/login",
        });

    }
    useEffect(() => {
        let userData = JSON.parse(window.localStorage.getItem('userData'))
        setUserData((userData && userData.user) || {})
    }, [])
    return (
        <Fragment>
            <div className={styles.headBox}>
                <div className={styles.left} onClick={() => drawerShowFun(!drawerShow)}>
                    <Avatar
                        src={userData.avatarUrl}
                        fit='cover'
                        style={{
                            '--size': '0.4rem',
                            '--border-radius': '50%'
                        }}
                    />
                    <div className={styles.name}>{userData.nickname}</div>
                </div>
                {/* <div className={styles.center}>{searchTitle}</div> */}
                <div className={styles.right}>
                    <SearchOutline fontSize='.4rem' color="#333333" />
                </div>
            </div>
            <Popup
                position="left"
                visible={drawerShow}
                onMaskClick={() => drawerShowFun(false)}
                bodyStyle={{ width: '60vw' }}
            >
                <div style={{ padding: '.2rem' }}>
                    <Button block size='large' onClick={toLogin}>登录</Button>
                </div>
            </Popup>
        </Fragment>

    )
};

export default Headers;
