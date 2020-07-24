import React, { useState, useEffect } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { Button } from "antd"
import { CheckOutlined, CopyOutlined } from "@ant-design/icons"
import { SizeType } from "antd/lib/config-provider/SizeContext"

type propTypes = {
    copyText: string
    sizeButton?: SizeType
    textButton?: string
}

const CopyButton: React.FC<propTypes> = (props) => {
    const [copy, setCopy] = useState(false)
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        return () => clearTimeout(timer)
    }, [timer])

    const copied = () => {
        setCopy(true)

        const timerId = setTimeout(() => {
            setCopy(false)
        }, 4000)

        setTimer(timerId)
    }

    return (
        <CopyToClipboard text={props.copyText} onCopy={() => copied()}>
            <Button size={props.sizeButton} icon={copy ? <CheckOutlined /> : <CopyOutlined />}>
                {props.textButton || "Скопировать"}
            </Button>
        </CopyToClipboard>
    )
}

export default CopyButton
