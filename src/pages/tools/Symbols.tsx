import React from "react"
import { Row, Col, Table, Typography } from "antd"
import styled from "styled-components"

const { Text } = Typography

const Symbol = styled.span`
    font-size: 18px;
    font-weight: 600;
`
//TODO кавычки
const dataSource = [
    {
        key: "1",
        symbol: <Symbol>—</Symbol>,
        title: "Длинное тире",
        html: "&mdash;",
        unicode: "\\u2014",
        desc: (
            <Text>
                Употребляется: <br />
                — на месте отсутствующего члена предложения (Я — страсть как!); <br />
                — между подлежащим и сказуемым (Дважды два — четыре); <br />
                — для выделения прямой речи (— Да. Я согласна, — отчеканила Селезнёва);
                <br />
                — для обозначения пауз (А она — возьми да и поставь, дура!); <br />— для указания маршрутов (поезд
                Москва — Санкт-Петербург); <br />— в качестве маркера списка
            </Text>
        ),
    },
    {
        key: "2",
        symbol: <Symbol>–</Symbol>,
        title: "Короткое (среднее) тире",
        html: "&ndash;",
        unicode: "\\u2013",
        desc: <Text>используется для обозначения числовых диапазонов (1941–1945)</Text>,
    },
    {
        key: "3",
        symbol: <Symbol>−</Symbol>,
        title: "Минус",
        html: "&minus;",
        unicode: "\\u2212",
        desc: <Text>Употребляется в качестве знака вычитания</Text>,
    },
    {
        key: "4",
        symbol: <Symbol>-</Symbol>,
        title: "Дефис",
        html: "Клавиатура",
        unicode: "\\u2010",
        desc: (
            <Text>
                Употребляется: <br />— для присоединения частиц (кто-либо, где-то);
                <br />— для присоединения префиксов (во-первых, по-русски);
                <br />— в качестве знака сокращения (физ-ра, г-ца);
                <br />— в словосочетаниях и сложносоставных словах (ковер-самолет);
                <br />— в качестве знака переноса (в интернете сегодня прак- тически не встречается).
            </Text>
        ),
    },
]

const columns = [
    {
        title: "Символ",
        dataIndex: "symbol",
        key: "symbol",
    },
    {
        title: "Название",
        dataIndex: "title",
        key: "title",
    },
    {
        title: "HTML-код",
        dataIndex: "html",
        key: "html",
    },
    {
        title: "Юникод",
        dataIndex: "unicode",
        key: "unicode",
    },
    {
        title: "Употребление",
        dataIndex: "desc",
        key: "desc",
    },
]

const Symbols: React.FC = () => {
    return (
        <Row justify="center">
            <Col span={22}>
                <Table columns={columns} dataSource={dataSource} pagination={false} />
            </Col>
        </Row>
    )
}

export default Symbols
