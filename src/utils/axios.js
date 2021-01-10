import axios from 'axios';

axios.defaults.headers.get['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.headers.get['Accept'] = 'application/json; charset=utf-8';
// axios.defaults.headers.get['Content-Security-Policy'] = 'upgrade-insecure-requests';
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {

    },
);

export const axiosGet = ({ url, prm }) => {
    return new Promise((resolve, reject) => {
        axios.post(url, {
            params: prm
        }).then(res => {
            resolve(res.data);
        }).catch(res => {
            reject(res.data);
        })
    });
}