import React from "react"
import { useParams } from "react-router-dom"
import { useAssetReportQuery } from "finance-types"
import Loading from "components/loading/Loading"
import { message, Typography, Row, Col, Space, Statistic, Divider } from "antd"
import { ApolloProvider } from "@apollo/react-hooks"
import FinanceClient from "../FinanceClient"
import FadePage from "components/fade/FadePage"
import { ContentWrapper } from "common-styles"
import ParagraphSkeleton from "components/loading/ParagraphSkeleton"
import { BlockTitle } from "common-styles"
import { toCurrency, toPercent } from "helpers/financeHelpers"
import { getProfitPrefix, getStatStyle } from "../helpers/styles"
import SearchAsset from "../SearchAsset"
import StockChart from "./StockChart"

type paramsTypes = {
    ticket: string
}

const { Title, Text } = Typography

const AssetPage: React.FC = () => {
    const { ticket } = useParams<paramsTypes>()

    return (
        <ApolloProvider client={FinanceClient}>
            <AssetInfo ticket={ticket} />
        </ApolloProvider>
    )
}

export default AssetPage

type propTypes = {
    ticket: string
}

const AssetInfo: React.FC<propTypes> = (props) => {
    const AssetReport = useAssetReportQuery({
        variables: {
            ticket: props.ticket,
        },
    })

    if (AssetReport.error) message.error(AssetReport.error.message)

    if (AssetReport.loading) {
        return <Loading />
    }

    const asset = AssetReport.data?.assetReport

    return (
        <FadePage>
            <SearchAsset />
            <Row gutter={[10, 10]}>
                <Col span={24}>
                    <Title level={3}>
                        {asset?.name} <Text type="secondary">{asset?.ticket?.toUpperCase()}</Text>
                    </Title>
                </Col>
            </Row>
            <Row justify="center" gutter={[30, 30]}>
                <Col span={8}>
                    <ContentWrapper>
                        <ParagraphSkeleton loading={AssetReport.loading}>
                            <Row justify="space-around">
                                <Space direction="vertical">
                                    <Statistic
                                        title={<BlockTitle>Текущая стоимость</BlockTitle>}
                                        value={`${toCurrency(asset?.price || 0)}`}
                                        valueStyle={{ color: "#407BFF", fontWeight: 600, fontSize: "2.1rem" }}
                                    />
                                </Space>
                                <Divider type="vertical" orientation="center" style={{ height: "80px" }} />
                                <Space direction="vertical">
                                    <Statistic
                                        title={<BlockTitle>Изменение за день</BlockTitle>}
                                        value={`${toPercent(asset?.priceChange || 0)}`}
                                        prefix={getProfitPrefix(asset?.priceChange)}
                                        valueStyle={getStatStyle(asset?.priceChange)}
                                    />
                                </Space>
                            </Row>
                        </ParagraphSkeleton>
                    </ContentWrapper>
                </Col>
                <Col span={8}>
                    <ContentWrapper>
                        <Space direction="vertical">
                            <Statistic
                                title={<BlockTitle>Время</BlockTitle>}
                                value={`${asset?.updateTime}`}
                                valueStyle={{ color: "#333", fontWeight: 400, fontSize: "2.1rem" }}
                            />
                        </Space>
                    </ContentWrapper>
                </Col>
                <Col span={8}></Col>
            </Row>

            <Row justify="center" gutter={[30, 30]}>
                <Col span={24}>
                    <ContentWrapper>
                        <StockChart ticket={props.ticket} />
                    </ContentWrapper>
                </Col>
            </Row>
        </FadePage>
    )
}
