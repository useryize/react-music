import React from 'react'
// import history from '../../utils/history'
import createContextApp from '../../hooks/App/createContextApp'
import { searchInputTextFunctionApp } from '../../hooks/App/useReducerApp'
import { useNavigate } from "react-router-dom";
import { NavBar, Popup, Button, Avatar, SearchBar } from 'antd-mobile'
import styles from './index.module.less'

const {
    useState,
    useEffect,
    useContext
} = React

const Header = (_props) => {
    const navigate = useNavigate();
    const { heaterTitle = {} } = _props

    const { state: {
        searchInput
    } = {},
        dispatch
    } = useContext(createContextApp)
    console.error(searchInput);
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
        const domObj = {
            'find': (
                <div className={styles.childrenBox} onClick={toSearch}>
                    <div className={styles.findBox}>
                        <div className={`iconfont search ${styles.icon}`}></div>
                        <div className={styles.test}>许嵩</div>
                    </div>
                </div>
            ),
            'search': (
                <div className={styles.childrenBox}>
                    <div className={styles.searchBox}>
                        <SearchBar placeholder={'许嵩'} onBlur={(val) => {
                            searchInputTextFunctionApp({ dispatch, params: val.target.value || '许嵩' })
                        }} />
                    </div>
                </div>


            )
        }
        return domObj[id] || null
    }

    // 右侧按钮
    const rightDom = () => {
        return null
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
