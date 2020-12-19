import axios from 'axios';
import { SERVER } from './apis';

//根据环境变量区分接口默认地址这里看自己需求配
const handleResponse = (response) => {
    return response.data
}

const handleError = (error) => {
    const { response, message } = error
    return Promise.reject(response ? new Error(response.data.message || message) : error)
}

const createInstance = () => {
    const instance = axios.create({
        baseURL: SERVER,
        withCredentials: false,
        timeout: '40000',
        responseType: 'json',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": 'GET, POST, OPTIONS',
            "Access-Control-Allow-Headers": 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization',
        }
    })

    instance.interceptors.response.use(handleResponse, handleError)

    return instance
}


const request = createInstance()
export default request;