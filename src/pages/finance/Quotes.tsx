import React from "react"
import { Row, Col, message, Space } from "antd"
import { useMarketQuotesQuery } from "finance-types"
import FadePage from "components/fade/FadePage"
import { ColorIndex, Center } from "common-styles"
import styled from "styled-components"
import LocalLoading from "components/loading/LocalLoading"

const QuoteTitle = styled.div`
    color: #6e6e6e;
`

const QuoteValue = styled.div`
    color: #333;
    font-weight: 600;
`

const Quotes: React.FC = () => {
    const { data, loading, error } = useMarketQuotesQuery()

    if (error) message.error(error.message)

    const quotes = data?.marketQuotes

    const GetMarketQuotes = () => {
        return quotes?.map((el) => {
            return (
                <Space>
                    <QuoteTitle>{el?.name}</QuoteTitle>
                    <QuoteValue>{el?.value}</QuoteValue>
                    <ColorIndex index={el?.change || 0}>{el?.change}</ColorIndex>
                </Space>
            )
        })
    }

    return (
        <FadePage>
            <Row justify="center" gutter={[20, 20]}>
                <Col span={24}>
                    <QuotesSkeleton loading={loading}>
                        <Space size="large">{GetMarketQuotes()}</Space>
                    </QuotesSkeleton>
                </Col>
            </Row>
        </FadePage>
    )
}

export default Quotes

type propTypes = {
    loading: boolean
}

const QuotesSkeleton: React.FC<propTypes> = (props) => {
    if (props.loading) {
        return (
            <Center>
                <LocalLoading />
            </Center>
        )
    }

    return <>{props.children}</>
}
