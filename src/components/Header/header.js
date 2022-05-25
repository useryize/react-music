import React from 'react'
// import history from '../../utils/history'
import { useNavigate } from "react-router-dom";
import { NavBar, Popup, Button, Avatar, Input } from 'antd-mobile'
import styles from './index.module.less'

const {
    useState,
    useEffect
} = React

const Header = (_props) => {
    const navigate = useNavigate();
    const { heaterTitle = {} } = _props
    let [drawerShow, drawerShowFun] = useState(false);
    let [userData, setUserData] = useState({});

    const toLogin = () => {
        navigate('/login')
        // history.push({
        //     pathname: "/login",
        // });

    }
    const toSearch = () => {
        navigate('/search')
        // history.push({
        //     pathname: "/search",
        // });

    }
    const leftDom = () => {
        const pathType = heaterTitle.path === '/find'
        return <div className={`iconfont ${pathType ? 'more' : 'returnto'} ${styles.buttonLeftIcon}`} onClick={() => {
            pathType ? drawerShowFun(true) : navigate(-1)
        }}></div>
    }
    const leftTest = () => {
        return <div className={styles.buttonLeftTest}>首页</div>
    }
    const childrenDom = () => {
        return <div className={styles.childrenBox} onClick={toSearch}>
            <div className={`iconfont search ${styles.childrenIcon}`}></div>
            <div className={styles.childrenTest}>许嵩</div>
        </div>
    }

    const rightDom = () => {
        return <div className={`iconfont search ${styles.buttonRightIcon}`} onClick={toSearch}></div>
    }


    useEffect(() => {
        let userData = JSON.parse(window.localStorage.getItem('userData'))
        setUserData((userData && userData.user) || {})
    }, [])

    return (
        <>
            <div className={styles.navbarBox}>
                <div className={styles.navbar}>
                    <NavBar backArrow={leftDom()} left={leftTest()} children={childrenDom()} right={rightDom()}></NavBar>
                </div>
            </div>
            <Popup
                position="left"
                visible={drawerShow}
                onMaskClick={() => drawerShowFun(false)}
                bodyStyle={{ width: '80vw' }}
            >
                <div className={styles.popupLeft}>
                    <Avatar
                        src={userData.avatarUrl}
                        fit='cover'
                        style={{
                            '--size': '0.2rem',
                            '--border-radius': '50%'
                        }}
                    />
                    <div className={styles.name}>{userData.nickname}</div>
                </div>
                <div style={{ padding: '.1rem' }}>
                    <Button block size='large' onClick={toLogin}>登录</Button>
                </div>
            </Popup>
        </>

    )
}
export default Header
