const envDev = false
export const SERVER = 'https://useryize.vercel.app'


export const bannerUrl = envDev ? `/json/banner.json` : `${SERVER}/banner`; // banner
export const personalized = `/json/paylist.json`; // 推荐歌单
export const newsong = `/personalized/newsong`; // 最新音乐
export const homepageDragonBall = `${SERVER}/homepage/dragon/ball`; // 首页-发现-圆形图标入口列表
