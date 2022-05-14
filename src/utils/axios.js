import axios from 'axios';
import moment from 'moment'
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.get['Accept'] = 'application/json; charset=utf-8';
// axios.defaults.headers.get['Content-Security-Policy'] = 'upgrade-insecure-requests';
// axios.defaults.headers.get['Access-Control-Allow-Headers'] = 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE';
axios.defaults.withCredentials = true;

// 请求拦截器
axios.interceptors.request.use(
    (config) => {
        config.headers = {
            'Content-Type': 'application/json'
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应了拦截器
axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        // console.log(error.config);
        console.log(error.response);
        return Promise.reject(error)
    }
)

export const axiosGet = ({ url, params }) => {
    const isCache = true
    const newParams = {
        timestamp: (isCache && moment().toDate().getTime()) || '', // 加上时间戳接口缓存
        realIP: '116.25.146.177',
        ...params,

    }

    return new Promise((resolve, reject) => {
        axios.get(url, { params: newParams })
            .then(res => {
                resolve(res && res.data);
            })
            .catch(err => {
                reject(err.data);
            })
    });
}
