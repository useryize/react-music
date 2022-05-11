import axios from 'axios';

axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.get['Accept'] = 'application/json; charset=utf-8';
// axios.defaults.headers.get['Content-Security-Policy'] = 'upgrade-insecure-requests';
// axios.defaults.headers.get['Access-Control-Allow-Headers'] = 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE';
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
        axios.get(url, { params: prm })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data);
            })
    });
}
