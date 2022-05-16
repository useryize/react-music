export const formatNumber = (number) => {
    return (number / 10000).toFixed(2) + '万';
}

/**发布-订阅 监听缓存
 * 
 * 缓存歌曲信息
 * 要监听同一页面的缓存值 调用songInfoLocalStorage.setItem
 * 监听自定义事件songInfoSetItemEvent
 * 
 * @param {*} info 为对象 接受 音乐ID 音乐图标 音乐名
 * @returns 
 */
export const songInfoLocalStorage = (info = {}) => {

    const originStorage = window.localStorage;
    const storage = {
        setItem: function () {
            let setItemEvent = new Event('songInfoSetItemEvent', { bubbles: false, cancelable: true, composed: false });
            setItemEvent.info = info
            window.dispatchEvent(setItemEvent);
            originStorage.setItem('songData', JSON.stringify(info))
        },
        getItem: function () {
            return JSON.parse(originStorage.getItem('songData'));
        }
    }
    return storage
} 
