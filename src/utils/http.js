import axios from 'axios'
import qs from 'qs'

//根据环境变量区分接口默认地址这里看自己需求配
// switch(process.env.NODE_ENV){
//     case "production":
//         axios.defaults.baseURL="http://127.0.0.1:3000"
//         break;
//     case "test":
//         axios.defaults.baseURL="http://192.168.1.1" 
//         break;
//     default:
//         axios.defaults.baseURL="http://localhost:8080"
// }

//设置超时时间和跨域是否携带凭证
axios.defaults.timeout=10000;
//设置CORS跨域允许携带凭证
axios.defaults.withCredentials=true;

axios.defaults.headers['Content-Type']='application/x-www-form-urlencoded'
axios.defaults.transformRequest=data=>qs.stringify(data)
// axios.defaults.transformRequest=data=>{
//     var params=''
//     for(let attr in data){
//         params+=attr+'='+data[attr]+'&'
//     }
//     params=params.substr(0,params.length-1)
//     return params
// }

//设置请求拦截器
//客户端发送请求=》请求拦截器=》服务器
// TOKEN校验（JWT）接收服务器返回的token
// 存储到vuex/本地存储中，每一次发请求我们应该吧token带上
axios.interceptors.request.use((config)=>{
    // 携带上token
    let token=localStorage.getItem('token')
    token&&(config.headers.Authorization=token)
    return config
},error=>{
    return Promise.reject(error)
})

//响应拦截器
//服务器返回信息=》拦截的统一处理=》客户端js获取到信息
// axios.defaults.validatestatus=status=>{
       //自定义响应成功的http状态码
//     return /^(2|3)\d{2}$/.test(status)
// }
axios.interceptors.response.use(response=>{
    return response;
    //看项目实际情况，这样写返回的数据就只有主体内容
},error=>{
    let {response} = error;
    if(response){
        //服务器最起码返回结果
        // switch(response.status){
        //     case 401://=>权限问题，当前请求需要用户验证，一般是未登陆
        //         break;
        //     case 403://=>服务器已经理解请求，但是拒绝执行他，一般是token过期或session过期
        //         localStorage.removeItem('token')
        //         break;
        //     case 404://=>找不到页面
        //         break;
        // }
    } else{
        //服务器连结果都没有返回
        if(!window.navigator.onLine){
            //如果客户端断网了:可以跳转到断网页面
            return
        }
        return Promise.reject(error)
        //可能是服务器错误返回一个promise
    }
});

export default axios