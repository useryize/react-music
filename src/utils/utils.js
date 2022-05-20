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

/**
 * JS颜色十六进制转换为rgb或rgba
 * 
 * @param {*} sColor #ffffff
 * @param {*} opacity 1
 * @returns #ffffff => reba(255,255,255,1)
 */
export const colorRgb = (sColor, opacity) => {
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/; /*16进制颜色转为RGB格式*/
    sColor = sColor.toLowerCase();
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }

        //处理六位的颜色值  
        let sColorChange = [];
        for (let i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return `rgba(${sColorChange.join(",")},${opacity})`
    }
    return sColor;
}


/**
 * 秒格式化
 *
 * @param {*} time 单位秒
 * @param {*} type  s ms hms dhms
 * @returns 
 */

export const getTime = (time, type = 'ms') => {
    let d = parseInt(time / 60 / 60 / 24)
    d = d < 10 ? `0${d}` : d
    let h = parseInt(time / 60 / 60 % 24)
    h = h < 10 ? `0${h}` : h
    let m = parseInt(time / 60 % 60)
    m = m < 10 ? `0${m}` : m
    let s = parseInt(time % 60)
    s = s < 10 ? `0${s}` : s
    const typeObj = {
        ms: [m, s].join(':'),
        hms: [h, m, s].join(':'),
        dhms: `${d}天 ${[h, m, s].join(':')}`,
    }
    return typeObj[type]
}
