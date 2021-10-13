const serverAddr = '47.115.57.59'
const envDev = true
export const SERVER = `http://${serverAddr}:3000`;


export const bannerUrl = envDev ? `/json/banner.json` : `${SERVER}/banner`; // banner
export const personalized = `/json/paylist.json`; // 推荐歌单
export const newsong = `/personalized/newsong`; // 最新音乐