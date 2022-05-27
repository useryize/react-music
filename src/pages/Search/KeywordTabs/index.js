import React from 'react'
import createContextSearch from '../../../hooks/Search/createContextSearch'
import { searchTypeFunction } from '../../../hooks/Search/useReducerSearch'
import { Tabs } from 'antd-mobile'
import { tabsJson } from './tabs'
import styles from './index.module.less'
const {
    useContext,
    useState
} = React

const KeywordTabs = () => {
    const {
        dispatch
    } = useContext(createContextSearch)
    const [activeKey, setActiveKey] = useState('1')
    return (
        <div className={styles.tabsBox}>
            <Tabs activeKey={activeKey} onChange={(val) => {
                const newVal = Number(val)
                setActiveKey(val)
                searchTypeFunction({ dispatch, params: tabsJson[newVal].key })
            }}>
                {
                    tabsJson.map((item, index) => {
                        return <Tabs.Tab title={item.name} key={index} disabled={item.disabled} />
                    })
                }
            </Tabs>
        </div>
    )
}
export default KeywordTabs
