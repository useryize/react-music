import React from 'react'
import createContextSearch from '../../../hooks/Search/createContextSearch'
import { searchTypeFunction } from '../../../hooks/Search/useReducerSearch'
import { Tabs } from 'antd-mobile'
import { tabsJson } from './tabs'
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
        <>
            <Tabs activeKey={activeKey} onChange={(val) => {
                const newVal = Number(val)
                setActiveKey(val)
                searchTypeFunction({ dispatch, params: tabsJson[newVal].key })
            }}>
                {
                    tabsJson.map((item, index) => {
                        return <Tabs.Tab title={item.name} key={index} disabled={false} />
                    })
                }
            </Tabs>
        </>
    )
}
export default KeywordTabs