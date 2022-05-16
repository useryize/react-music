export const formatNumber = (number) => {
    return (number / 10000).toFixed(2) + '万';
}

/**
 * 缓存歌曲信息 并监听缓存值
 * 要监听同一页面的缓存值 调用songInfoLocalStorage.setItem
 * 监听自定义事件songInfoSetItemEvent
 * 
 * @param {*} info 为对象 接受 音乐ID 音乐图标 音乐名
 * @returns 
 */
export const songInfoLocalStorage = (info = {}) => {

    const originStorage = window.localStorage;
    const storage = {
        setItem: function (key, value) {
            let setItemEvent = new Event('songInfoSetItemEvent');
            setItemEvent.key = key;
            window.dispatchEvent(setItemEvent);
            originStorage.setItem(key, value);
        },
        getItem: function (key) {
            return JSON.parse(originStorage.getItem(key));
        }
    }
    storage.setItem('songData', JSON.stringify(info))
    return storage
} 
