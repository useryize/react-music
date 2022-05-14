import React, { useState } from 'react';
import styles from './index.module.less'
import { Input, Button, List, Toast } from 'antd-mobile'
import { axiosGet } from '@/utils/axios'
import { loginCellphone, exitLogin, loginStatus } from '@/utils/apis'
import history from '@/utils/history'
const style = {
    '--font-size': '.2rem',
    '--color': '#333333',
    '--placeholder-color': '#666666',
    '--border': '#solid 1px red'
}
const Login = () => {
    const [phone, setPhone] = useState('')
    const [pass, setPass] = useState('')
    return (
        <div className={styles.loginBox}>
            <div className={styles.tab}>
                <div className={`${styles.item} ${styles.focu}`}>手机登录</div>
                <div className={styles.item}>账号登录</div>
            </div>
            <List mode="default"
                style={{
                    '--border-bottom': 'none'
                }}
            >
                <List.Item>
                    <Input
                        value={phone}
                        onChange={(val) => {
                            setPhone(val)
                        }}
                        placeholder='请输入用户名'
                        clearable style={{ ...style }}
                    />
                </List.Item>
                <List.Item>
                    <Input
                        clearable
                        value={pass}
                        onChange={(val) => {
                            setPass(val)
                        }}
                        placeholder='请输入密码'
                        type='password'
                        style={{ ...style }} />
                </List.Item>
                <List.Item>
                    <Button
                        onClick={async () => {

                            const resStatus = await axiosGet({
                                url: loginStatus,
                            })

                            if (!resStatus.data.account) {
                                const res = await axiosGet({
                                    url: loginCellphone,
                                    params: {
                                        phone: phone,
                                        password: decodeURIComponent(pass),
                                    }
                                })
                                if (+res.code === 200) {
                                    history.goBack()
                                }
                            } else {
                                Toast.show({
                                    duration: '5000',
                                    content: '已经登录，请勿重新登录, 5S后返回上一页',
                                    position: 'top',
                                    afterClose: () => {
                                        history.goBack()
                                    },
                                })
                            }

                        }}
                        block type='submit' color="primary" size='large'>
                        提交
                    </Button>
                    <Button style={{ marginTop: '.2rem' }} color="primary" block size='large' onClick={async () => {
                        const res = await axiosGet({
                            url: exitLogin,
                        })
                        if (+res.code === 200) {
                            Toast.show({
                                duration: '3000',
                                content: '退出成功',
                                position: 'top',
                                afterClose: () => {
                                    history.goBack()
                                },
                            })
                        }
                    }}>退出登录</Button>
                </List.Item>
            </List>
        </div>
    )
}

export default Login;
