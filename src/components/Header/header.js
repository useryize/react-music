import React from 'react'
// import history from '../../utils/history'
import { useNavigate } from "react-router-dom";
import { NavBar, Popup, Button, Avatar } from 'antd-mobile'
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
    const backArrow = () => {
        const pathType = heaterTitle.path === '/find'
        return <div className={`iconfont ${pathType ? 'more' : 'returnto'} ${styles.buttonLeft}`} onClick={() => {
            pathType ? drawerShowFun(true) : navigate(-1)
        }}></div>
    }
    const rightDom = (
        <div className={`iconfont search ${styles.buttonRight}`} onClick={toSearch}></div>
    )

    useEffect(() => {
        let userData = JSON.parse(window.localStorage.getItem('userData'))
        setUserData((userData && userData.user) || {})
    }, [])

    return (
        <>
            <div className={styles.navbarBox}>
                <div className={styles.navbar}>
                    <NavBar backArrow={backArrow()} right={rightDom}>{heaterTitle.title}</NavBar>
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
