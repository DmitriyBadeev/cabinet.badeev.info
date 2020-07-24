import React, { useState, useEffect } from "react"
import { Row, Col, Input, Button, message, Space } from "antd"
import { HorizontalCenter } from "common-styles"
import { useTypografTextLazyQuery } from "types"
import { EditOutlined } from "@ant-design/icons"
import CopyButton from "components/common/CopyButton"

const { TextArea } = Input

const Typograf: React.FC = () => {
    const [text, setText] = useState("")
    const [query, { data, loading, error }] = useTypografTextLazyQuery()

    useEffect(() => {
        setText(data?.typografText || "")
    }, [data])

    if (error) {
        message.error(error.message)
    }

    return (
        <Row justify="center">
            <Col span={18}>
                <TextArea
                    rows={10}
                    placeholder="Писать сюда"
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
                        <CopyButton copyText={text} sizeButton="large" />
                    </Space>
                </HorizontalCenter>
            </Col>
        </Row>
    )
}

export default Typograf
