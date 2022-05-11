import React, { useState } from 'react';
import styles from './index.module.less'
import { Input, Button } from 'antd-mobile'
const style = {
	'--font-size': '.2rem',
	'--color': '#333333',
	'--placeholder-color': '#666666'
}
const Login = () => {
	const [phone, setPhone] = useState('')
	const [pass, setPass] = useState('')
	return (
		<div className={styles.loginBox}>
			<div className={styles.tab}>
				<div className={styles.item}>手机登录</div>
				<div className={styles.item}>账号登录</div>
			</div>
			<div className={styles.userBox}>
				<div className={styles.phone}>
					<Input
						value={phone}
						onChange={(val) => {
							setPhone(val)
						}} placeholder='请输入用户名' clearable style={{ ...style }} />
				</div>
				<div className={styles.password}>
					<Input
						value={pass}
						onChange={(val) => {
							setPass(val)
						}}
						placeholder='请输入密码' clearable type='password' style={{ ...style }} />
				</div>
				<Button
					onClick={() => {
						console.error(phone, pass);
					}}
					block type='submit' color="primary" size='large'>
					提交
				</Button>
				{/* https://useryize.vercel.app/login/cellphone?phone=18824650476&password=yize@@.1 */}
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
