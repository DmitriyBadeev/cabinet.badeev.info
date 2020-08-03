import React from "react"
import { Row, Col, Table, Space } from "antd"
import CopyButton from "components/common/CopyButton"
import { YANDEX_TOKEN } from "store/Config"

const columns = [
    {
        title: "Название",
        dataIndex: "title",
        key: "title",
        width: 200,
    },
    {
        title: "Токен",
        dataIndex: "token",
        key: "token",
        ellipsis: true,
    },
    {
        title: "Действие",
        dataIndex: "action",
        key: "action",
    },
]

const dataSource = [
    {
        key: "1",
        title: "Текущий OAuth-токен",
        token: localStorage.getItem("token"),
        action: (
            <Space>
                <CopyButton copyText={localStorage.getItem("token") || ""} textButton="Копировать" />
                <CopyButton
                    copyText={`"Authorization": "${localStorage.getItem("token") || ""}"`}
                    textButton="Копировать HTTP-заголовок"
                />
            </Space>
        ),
    },
    {
        key: "2",
        title: "Яндекс OAuth-токен",
        token: YANDEX_TOKEN,
        action: (
            <Space>
                <CopyButton copyText={YANDEX_TOKEN} textButton="Копировать" />
                <CopyButton
                    copyText={`"Authorization": "OAuth ${YANDEX_TOKEN}"`}
                    textButton="Копировать HTTP-заголовок"
                />
            </Space>
        ),
    },
]

const Tokens: React.FC = () => {
    return (
        <Row justify="center">
            <Col span={22}>
                <Table columns={columns} dataSource={dataSource} pagination={false} />
            </Col>
        </Row>
    )
}

export default Tokens
