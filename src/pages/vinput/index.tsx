import React, { useEffect, useState } from 'react'
import { ActionSheet, Form, Input, Checkbox, List } from 'antd-mobile'

import type {
    Action,
} from 'antd-mobile/es/components/action-sheet'
import { RightOutline } from 'antd-mobile-icons'
import styles from './index.less';
import ItemList from '@/components/itemlist'


const actions: Action[] = [
    { text: '楼栋新增', key: 'addnew' },
    { text: '楼栋不存在', key: 'noitem' },
    { text: '楼栋名称错误', key: 'wrongname' },
]
enum FeedBackType {
    addnew = '楼栋新增',
    noitem = '楼栋不存在',
    wrongname = '楼栋名称错误'
}
type FeedBackTypes = keyof typeof FeedBackType // ***

export default () => {
    const [visible, setVisible] = useState(false)
    const [feedType, setFeedType] = useState('wrongname')
    const [form] = Form.useForm()

    useEffect(() => {
        form.setFieldsValue({ ftype: FeedBackType[feedType as FeedBackTypes] })
    }, [feedType])

    return (
        <>
            <Form
                form={form}
                layout='horizontal'
                initialValues={{
                    ftype: FeedBackType[feedType as FeedBackTypes]
                }}
            >
                <Form.Item
                    label='反馈类型'
                    name='ftype'
                    extra={
                        <RightOutline onClick={() => setVisible(true)} />
                    }
                    rules={[{ required: true, message: '' }]}
                    className={styles.fontsize}
                >
                    <Input
                        onFocus={() => {
                            setVisible(true)
                        }}
                        style={{ '--text-align': 'right', "--font-size": 'small' }}
                    />

                </Form.Item>

                {
                    feedType === 'addnew' && <Form.Item
                        label='楼栋新增'
                        name='additem'
                        rules={[{ required: true, message: '' }]}
                        className={styles.fontsize}
                    >
                        <Input
                            placeholder="请填写新增的楼栋名称"
                            onFocus={val => {
                                console.log(val)
                            }}
                            style={{ '--text-align': 'right', "--font-size": 'small' }}
                        />
                    </Form.Item>
                }
                {
                    feedType === 'noitem' && <Form.Item
                        label='请选择不存在的楼栋'
                        name='noitem'
                        rules={[{ required: true, message: '' }]}
                        className={styles.fontsize}
                    >
                    </Form.Item>}
                {feedType === 'wrongname' &&
                    <>
                        <Form.Item
                            label=' 请选择名称错误楼栋'
                            name='modifyitem'
                            rules={[{ required: true, message: '' }]}
                            className={styles.fontsize}
                        >
                        </Form.Item>
                        <Form.Item>
                            <ItemList></ItemList>
                        </Form.Item>
                    </>
                }
            </Form>
            <ActionSheet
                cancelText='取消'
                visible={visible}
                actions={actions}
                onClose={() => {
                    setVisible(false)
                }}
                onAction={val => {
                    setFeedType(val.key as FeedBackTypes)
                }}
            />
        </>
    )
}
