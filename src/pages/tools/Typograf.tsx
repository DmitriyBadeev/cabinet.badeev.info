import React, { useState, useEffect } from "react"
import { Row, Col, Input, Button, message, Space } from "antd"
import { HorizontalCenter } from "common-styles"
import { useTypografTextLazyQuery } from "types"
import { EditOutlined, CopyOutlined, CheckOutlined } from "@ant-design/icons"
import CopyToClipboard from "react-copy-to-clipboard"

const { TextArea } = Input

const Typograf: React.FC = () => {
    const [text, setText] = useState("")
    const [copy, setCopy] = useState(false)
    const [timer, setTimer] = useState(0)

    const [query, { data, loading, error }] = useTypografTextLazyQuery()

    useEffect(() => {
        setText(data?.typografText || "")
    }, [data])

    if (error) {
        message.error(error.message)
    }

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
        <Row justify="center">
            <Col span={18}>
                <TextArea
                    rows={10}
                    placeholder="Сюда писать"
                    style={{ fontSize: "20px" }}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onPressEnter={() =>
                        query({
                            variables: {
                                text: text,
                            },
                        })
                    }
                />
                <HorizontalCenter style={{ marginTop: "20px" }}>
                    <Space size="large">
                        <Button
                            loading={loading}
                            type="primary"
                            size="large"
                            icon={<EditOutlined />}
                            onClick={() =>
                                query({
                                    variables: {
                                        text: text,
                                    },
                                })
                            }
                        >
                            Оттипографить
                        </Button>
                        <CopyToClipboard text={text} onCopy={() => copied()}>
                            <Button size="large" icon={copy ? <CheckOutlined /> : <CopyOutlined />}>
                                Скопировать
                            </Button>
                        </CopyToClipboard>
                    </Space>
                </HorizontalCenter>
            </Col>
        </Row>
    )
}

export default Typograf
