export const formatNumber = (number) => {
    return (number / 10000).toFixed(2) + '万';
}

// 缓存歌曲信息
export const songInfoLocalStorage = (info = '') => {
    window.localStorage.setItem('songData', JSON.stringify(info))
} 