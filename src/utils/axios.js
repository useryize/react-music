import axios from 'axios';

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

export const axiosGet = ({ url, prm }) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: prm })
            .then(res => {
                resolve(res && res.data);
            })
            .catch(err => {
                reject(err.data);
            })
    });
}
