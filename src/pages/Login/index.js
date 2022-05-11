import React from 'react';
import styles from './index.module.less'
import {  Input, Button } from 'antd-mobile'
const style = {
	'--font-size': '.2rem',
	'--color': '#333333',
	'--placeholder-color': '#666666'
}
const Login = () => {
	return (
		<div className={styles.loginBox}>
			<div className={styles.tab}>
				<div className={styles.item}>手机登录</div>
				<div className={styles.item}>账号登录</div>
			</div>
			<div className={styles.userBox}>
				<div className={styles.phone}><Input placeholder='请输入用户名' clearable style={{ ...style }} /></div>
				<div className={styles.password}><Input placeholder='请输入密码' clearable type='password' style={{ ...style }} /></div>
				<Button block type='submit' color='#000000' size='large'>
					提交
				</Button>
				{/* <Form
					layout='horizontal'
					footer={
						
					}
				>
					<Form.Item label='用户名' name='username'>
						
					</Form.Item>
					<Form.Item label='密码' name='password'>
						
					</Form.Item>
				</Form> */}
			</div>
		</div>
	)
}

export default Login;
