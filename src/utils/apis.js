const envDev = false
export const SERVER = 'https://useryize.vercel.app'


export const loginCellphone = `${SERVER}/login/cellphone`; // 登录
export const exitLogin = `${SERVER}/logout`; // 退出登录
export const loginStatus = `${SERVER}/login/status`; // 登录状体
export const bannerUrl = envDev ? `/json/banner.json` : `${SERVER}/banner`; // banner
export const homepageDragonBall = envDev ? `/json/ball.json` : `${SERVER}/homepage/dragon/ball`; // 首页-发现-圆形图标入口列表
export const personalized = `${SERVER}/personalized` // 推荐歌单
export const playlistDetail = `${SERVER}/playlist/detail` // 获取歌单详情
export const songtDetail = `${SERVER}/song/detail` // 获取歌曲详情
export const songUrl = `${SERVER}/song/url` // 获取歌曲url
export const search = `${SERVER}/search` // 搜索
export const searchDefault = `${SERVER}/search/default` // 默认搜索关键词

