import React, { useEffect, useMemo } from "react"
import { createForm } from "@formily/core"
// import { createForm } from "@formily/antd"
// import { createForm } from "@formily/react"

import "antd/dist/antd.css"
import { message, Modal } from "antd"
import { NewMixinParser, Form } from "model-parser" //需按包

import { getUserList } from "@/service/userlist"
import { schema } from './schemajson.json'

const components = {}


export default function Modou() {
    const form = useMemo(() => createForm(), [])
    useEffect(() => {
        getUserList().then(res => {
            console.log(139, res)
        })
    }, [])

    return (
        <Form form={form} {...schema.form}>
            <NewMixinParser
                treeSchema={schema}
                components={components}
                scope={{ message, Modal }}
            ></NewMixinParser>
        </Form>
    )
}
