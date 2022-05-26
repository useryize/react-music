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
    // 左侧按钮
    const leftDom = () => {
        const { id } = heaterTitle
        const pathType = id === 'find'
        const click = () => {
            return pathType ? drawerShowFun(true) : navigate(-1)
        }
        const classNameType = (
            `iconfont ${pathType ? 'more' : 'returnto'} ${styles.buttonLeftIcon}`
        )
        return <div className={classNameType} onClick={click}></div>
    }

    // 左侧文案
    const leftTest = () => {
        const { id } = heaterTitle
        const pathType = id !== 'find'
        return pathType ? <div className={styles.buttonLeftTest}>{heaterTitle.title}</div> : null
    }

    // 中间部分展示内容
    const childrenDom = () => {
        const { id } = heaterTitle
        const pathType = id === 'find'
        return pathType ? (
            <div className={styles.childrenBox} onClick={toSearch}>
                <div className={`iconfont search ${styles.childrenIcon}`}></div>
                <div className={styles.childrenTest}>许嵩</div>
            </div>
        ) : null
    }

    // 右侧按钮
    const rightDom = () => {
        return <div className={`iconfont search ${styles.buttonRightIcon}`} onClick={toSearch}></div>
    }


    useEffect(() => {
        // 获取用户信息
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
