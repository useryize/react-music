import React from 'react'
import { Tabs } from 'antd-mobile'
import { tabs } from './tabs'
const { useState } = React

const KeywordTabs = () => {
    const [activeKey, setActiveKey] = useState('1')
    return (
        <>
            <Tabs activeKey={activeKey} onChange={(val) => {
                setActiveKey(val)
            }}>
                {
                    tabs.map((item, index) => {
                        return <Tabs.Tab title={item.name} key={index} disabled={false} />
                    })
                }
            </Tabs>
        </>
    )
}
export default KeywordTabs