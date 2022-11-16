import { Checkbox } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import './index.less'


const items = [
    {
        name: '楼栋1',
        id: '1001',
        checked: false
    },
    {
        name: '楼栋2',
        id: '1002',
        checked: false
    },
    {
        name: '楼栋3',
        id: '1003',
        checked: false
    }
]


export default function ItemList(): any {
    const [clicked, setClicked] = useState(false)
    const handleCheckbox = (val: any) => {
        setClicked(!clicked)
        items.forEach(v => {
            v.id === val.item.id && (v.checked = val.e)
        })
        console.log(items)
    }
    return (
        <>
            {
                items.map(item => (
                    <div className='parent' key={item.id}>
                        <Checkbox className='checkboxItem' onChange={(e) => handleCheckbox({ e, item })}>{item.name}</Checkbox>
                        {item.checked && <input placeholder='请输入楼栋名称'></input>}
                    </div>
                )
                )
            }
        </>
    )
}
