import React from 'react';
import createContextApp from '../../hooks/App/createContextApp'
import { getSongIdApp } from '../../hooks/App/useReducerApp'
// import { List, Image } from "antd-mobile";
import styles from './index.module.less'
import { PlayOutline } from 'antd-mobile-icons'
const {
    useContext,
    useState
} = React

const SongListPublic = (_props) => {
    const { dataInfo = [] } = _props

    const [songFocu, setSongFocu] = useState(null)
    // app数据
    const { dispatch } = useContext(createContextApp)
    return (
        <div className={styles.songBox}>
            {
                dataInfo.map((item, index) => (
                    <div className={styles.item} key={index} onClick={async () => {
                        setSongFocu(index)
                        getSongIdApp({ dispatch, params: item.id })
                    }}>
                        <div className={styles.left}>
                            <div className={`${styles.order} ${index === songFocu ? styles.focu : ''}`}>{index + 1}</div>
                            <div className={styles.titleBox}>
                                <div className={styles.title}>{item.name}</div>
                                <div className={styles.doc}>
                                    <span>
                                        {
                                            { 8: 'SQ', 1: 'VIP' }[+item.fee] || '未知'
                                        }
                                    </span>
                                    <span>
                                        {item.ar.map(itemName => (itemName.name)).join('/')}-
                                        {
                                            item && item.al && item.al.name
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <PlayOutline fontSize='.14rem' />
                        </div>
                    </div>
                ))

            }
        </div >
    )
}

export default SongListPublic;
