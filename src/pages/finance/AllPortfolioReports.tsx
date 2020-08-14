import React, { CSSProperties, useEffect } from "react"
import { Row, Col, message, Statistic, Space, Divider, Button } from "antd"
import { ContentWrapper } from "common-styles"
import {
    usePortfolioReportsQuery,
    useUpdatePortfoliosReportSubscription,
    useStartPortfoliosReportUpdateMutation,
} from "finance-types"
import styled from "styled-components"
import { toCurrency, toPercent } from "helpers/financeHelpers"
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons"
import FadePage from "components/fade/FadePage"
import LoadingHOC from "components/loading/LoadingHOC"

const StatisticTitle = styled.h3`
    font-size: 1rem;
    margin: 0;
    padding: 0;
    font-weight: 400;
    color: #6e6e6e;
`

const PercentIcon = styled.div<{ isDown: boolean }>`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    background: ${(props) => (props.isDown ? "#cf1322" : "#75d728")};
    color: white;
    border-radius: 50%;
    margin-right: 5px;
`

const AllPortfolioReports: React.FC = () => {
    const { data, loading, error } = usePortfolioReportsQuery()

    const UpdatePortfolios = useUpdatePortfoliosReportSubscription()
    const [startUpdateMutation, startUpdateMutationData] = useStartPortfoliosReportUpdateMutation()

    useEffect(() => {
        startUpdateMutation()
    }, [startUpdateMutation])

    if (error) message.error(error.message)
    if (UpdatePortfolios.error) message.error(UpdatePortfolios.error.message)
    if (startUpdateMutationData.error)
        message.error(`Не удалось запустить обновление: ${startUpdateMutationData.error.message}`)

    const report = UpdatePortfolios.data?.onUpdatePortfoliosReport ?? data?.allPortfoliosReport

    const getStatStyle: (value: number | undefined) => CSSProperties = (value: number | undefined) => {
        if (value && value >= 0) {
            return {
                color: "#75D728",
                fontWeight: 600,
                fontSize: "2.1rem",
            }
        }

        return {
            color: "#cf1322",
            fontWeight: 600,
            fontSize: "2.1rem",
        }
    }

    const getProfitPrefix = (value: number | undefined) => {
        if (value && value > 0) return "+"

        return ""
    }

    const getProfitPercentPrefix = (value: number | undefined) => {
        if (value && value > 0)
            return (
                <PercentIcon isDown={false}>
                    <ArrowUpOutlined />
                </PercentIcon>
            )

        if (value && value < 0)
            return (
                <PercentIcon isDown={true}>
                    <ArrowDownOutlined />
                </PercentIcon>
            )

        return ""
    }

    return (
        <FadePage>
            <Row justify="center" gutter={[30, 30]}>
                <Col span={7}>
                    <ContentWrapper>
                        <LoadingHOC loading={loading}>
                            <Space direction="vertical">
                                <Statistic
                                    title={<StatisticTitle>Суммарная стоимость</StatisticTitle>}
                                    value={`${toCurrency(report?.allCost || 0)}`}
                                    valueStyle={{ color: "#407BFF", fontWeight: 600, fontSize: "2.1rem" }}
                                />
                                <Statistic
                                    value={`Инвестировано: ${toCurrency(report?.allInvestSum || 0)}`}
                                    valueStyle={{ color: "#aeaeae", fontSize: "1rem" }}
                                />
                            </Space>
                        </LoadingHOC>
                    </ContentWrapper>
                </Col>
                <Col span={10}>
                    <ContentWrapper>
                        <LoadingHOC loading={loading}>
                            <Row justify="space-around">
                                <Col>
                                    <Space direction="vertical">
                                        <Statistic
                                            title={<StatisticTitle>Бумажная прибыль</StatisticTitle>}
                                            value={toCurrency(report?.allPaperProfit || 0)}
                                            prefix={getProfitPrefix(report?.allPaperProfit)}
                                            valueStyle={getStatStyle(report?.allPaperProfit)}
                                        />
                                        <Statistic
                                            value={`${toPercent(report?.allPaperProfitPercent || 0)}`}
                                            valueStyle={{ color: "#333", fontSize: "1rem", fontWeight: 600 }}
                                            prefix={getProfitPercentPrefix(report?.allPaperProfitPercent)}
                                        />
                                    </Space>
                                </Col>
                                <Divider type="vertical" orientation="center" style={{ height: "100px" }} />
                                <Col>
                                    <Space direction="vertical">
                                        <Statistic
                                            title={<StatisticTitle>Дивидендная прибыль</StatisticTitle>}
                                            value={toCurrency(report?.allPaymentProfit || 0)}
                                            prefix={getProfitPrefix(report?.allPaymentProfit)}
                                            valueStyle={getStatStyle(report?.allPaymentProfit)}
                                        />
                                        <Statistic
                                            value={`${toPercent(report?.allPaymentProfitPercent || 0)}`}
                                            valueStyle={{ color: "#333", fontSize: "1rem", fontWeight: 600 }}
                                            prefix={getProfitPercentPrefix(report?.allPaymentProfitPercent)}
                                        />
                                    </Space>
                                </Col>
                            </Row>
                        </LoadingHOC>
                    </ContentWrapper>
                </Col>
                <Col span={7}>
                    <ContentWrapper>
                        <LoadingHOC loading={loading}>
                            <Space direction="vertical">
                                <Statistic
                                    title={<StatisticTitle>Свободных средств</StatisticTitle>}
                                    value={`${toCurrency(report?.allUserBalance || 0)}`}
                                    valueStyle={{ color: "#333", fontWeight: 600, fontSize: "1.8rem" }}
                                />
                                <Space>
                                    <Button type="primary">Пополнить</Button>
                                    <Button>Вывести</Button>
                                </Space>
                            </Space>
                        </LoadingHOC>
                    </ContentWrapper>
                </Col>
            </Row>
        </FadePage>
    )
}

export default AllPortfolioReports
