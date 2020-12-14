import axios from 'axios';


export const get = ({ url, prm }) => {
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