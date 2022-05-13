const envDev = false
export const SERVER = 'https://useryize.vercel.app'


export const loginCellphone = '/login/cellphone'; // login
export const bannerUrl = envDev ? `/json/banner.json` : `${SERVER}/banner`; // banner
export const homepageDragonBall = envDev ? `/json/ball.json` : `${SERVER}/homepage/dragon/ball`; // 首页-发现-圆形图标入口列表
export const personalized = `${SERVER}/personalized` // 推荐歌单
export const newsong = `/personalized/newsong`; // 最新音乐

