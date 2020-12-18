import axios from './http';


export const axiosGet = ({ url, prm }) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: prm
        }).then(res => {
            resolve(res.data);
        }).catch(res => {
            reject(res.data);
        })
    });
}