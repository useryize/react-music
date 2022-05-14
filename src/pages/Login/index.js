import React, { useState } from 'react';
import styles from './index.module.less'
import { Input, Button, List } from 'antd-mobile'
import { axiosGet } from '@/utils/axios'
import { loginCellphone } from '@/utils/apis'
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
                        }}
                        block type='submit' color="primary" size='large'>
                        提交
                    </Button>
                </List.Item>
            </List>
        </div>
    )
}

export default Login;
