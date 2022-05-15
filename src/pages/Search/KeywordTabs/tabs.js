// type: 搜索类型；
// 默认为 1 即单曲 , 
// 取值意义 : 
// 1: 单曲,
// 10: 专辑,
// 100: 歌手,
// 1000: 歌单,
// 1002: 用户, 
// 1004: MV,
// 1006: 歌词,
// 1009: 电台,
// 1014: 视频, 
// 1018:综合, 
// 2000:声音(搜索声音返回字段格式会不一样)
export const tabs = [
    {
        key: 1,
        name: '单曲',
        disabled: true
    },
    {
        key: 1000,
        name: '歌单',
        disabled: true
    },
    {
        key: 10,
        name: '专辑',
        disabled: true
    },
    {
        key: 100,
        name: '歌手',
        disabled: true
    },

    {
        key: 1002,
        name: '用户',
        disabled: true
    },
    {
        key: 1004,
        name: 'MV',
        disabled: true
    },
    {
        key: 1006,
        name: '歌词',
        disabled: true
    },
    {
        key: 1009,
        name: '电台',
        disabled: true
    },
    {
        key: 1014,
        name: '视频',
        disabled: true
    },
    {
        key: 1018,
        name: '综合',
        disabled: true
    },
    {
        key: 2000,
        name: '声音',
        disabled: true
    },
]