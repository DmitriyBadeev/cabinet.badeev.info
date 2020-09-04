import React, { useEffect } from "react"
import { Row, Col, message, Statistic, Space, Divider, Button, Table } from "antd"
import { ContentWrapper } from "common-styles"
import {
    usePortfolioReportsQuery,
    useUpdatePortfoliosReportSubscription,
    useStartPortfoliosReportUpdateMutation,
    useUpdatePricesReportSubscription,
    useAllAssetPricesReportQuery,
    useAllFuturePaymentsQuery,
} from "finance-types"
import { toCurrency, toPercent } from "helpers/financeHelpers"
import FadePage from "components/fade/FadePage"
import ParagraphSkeleton from "components/loading/ParagraphSkeleton"
import { Pie } from "@ant-design/charts"
import { paymentsColumns } from "./TableColumns"
import LocalLoadingWrapper from "components/loading/LocalLoadingWrapper"
import { BlockTitle } from "common-styles"
import { getProfitPrefix, getStatStyle, getProfitPercentPrefix } from "./helpers/styles"

const AllPortfolioReports: React.FC = () => {
    const { data, loading, error } = usePortfolioReportsQuery()
    const AllPrices = useAllAssetPricesReportQuery()
    const AllFuturePayments = useAllFuturePaymentsQuery()

    const UpdatePortfolios = useUpdatePortfoliosReportSubscription({
        shouldResubscribe: true,
    })
    const UpdatePricesReport = useUpdatePricesReportSubscription({
        shouldResubscribe: true,
    })

    const [startUpdateMutation, startUpdateMutationData] = useStartPortfoliosReportUpdateMutation()

    useEffect(() => {
        startUpdateMutation()
    }, [startUpdateMutation])

    if (error) message.error(error.message)
    if (AllPrices.error) message.error(AllPrices.error.message)
    if (AllFuturePayments.error) message.error(AllFuturePayments.error.message)

    if (UpdatePortfolios.error) message.error(UpdatePortfolios.error.message)
    if (UpdatePricesReport.error) message.error(UpdatePricesReport.error.message)

    if (startUpdateMutationData.error)
        message.error(`Не удалось запустить обновление: ${startUpdateMutationData.error.message}`)

    const report = UpdatePortfolios.data?.onUpdatePortfoliosReport ?? data?.allPortfoliosReport
    const allPricesReport = UpdatePricesReport.data?.onUpdatePricesReport ?? AllPrices.data?.allAssetPricesReport

    const pieData = [
        {
            type: "Стоимость акций",
            value: allPricesReport?.stockPrice,
        },
        {
            type: "Стоимость фондов",
            value: allPricesReport?.fondPrice,
        },
        {
            type: "Стоимость облигаций",
            value: allPricesReport?.bondPrice,
        },
    ]

    const payments = AllFuturePayments.data?.allFuturePaymentsReport?.map((p, i) => {
        return {
            key: i,
            ...p,
        }
    })

    return (
        <FadePage>
            <Row justify="center" gutter={[30, 30]}>
                <Col span={7}>
                    <ContentWrapper>
                        <ParagraphSkeleton loading={loading}>
                            <Space direction="vertical">
                                <Statistic
                                    title={<BlockTitle>Суммарная стоимость</BlockTitle>}
                                    value={`${toCurrency(report?.allCost || 0)}`}
                                    valueStyle={{ color: "#407BFF", fontWeight: 600, fontSize: "2.1rem" }}
                                />
                                <Statistic
                                    value={`Инвестировано: ${toCurrency(report?.allInvestSum || 0)}`}
                                    valueStyle={{ color: "#aeaeae", fontSize: "1rem" }}
                                />
                            </Space>
                        </ParagraphSkeleton>
                    </ContentWrapper>
                </Col>
                <Col span={10}>
                    <ContentWrapper>
                        <ParagraphSkeleton loading={loading}>
                            <Row justify="space-around">
                                <Col>
                                    <Space direction="vertical">
                                        <Statistic
                                            title={<BlockTitle>Бумажная прибыль</BlockTitle>}
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
                                            title={<BlockTitle>Дивидендная прибыль</BlockTitle>}
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
                        </ParagraphSkeleton>
                    </ContentWrapper>
                </Col>
                <Col span={7}>
                    <ContentWrapper style={{ height: "100%" }}>
                        <ParagraphSkeleton loading={loading}>
                            <Space direction="vertical">
                                <Statistic
                                    title={<BlockTitle>Свободных средств</BlockTitle>}
                                    value={`${toCurrency(report?.allUserBalance || 0)}`}
                                    valueStyle={{ color: "#333", fontWeight: 600, fontSize: "1.8rem" }}
                                />
                                <Space>
                                    <Button type="primary">Пополнить</Button>
                                    <Button>Вывести</Button>
                                </Space>
                            </Space>
                        </ParagraphSkeleton>
                    </ContentWrapper>
                </Col>
            </Row>
            <Row justify="center" gutter={[30, 30]}>
                <Col span={12}>
                    <ContentWrapper style={{ height: "100%" }}>
                        <LocalLoadingWrapper loading={AllPrices.loading}>
                            <BlockTitle style={{ marginBottom: "10px" }}>Диаграмма по типам активов</BlockTitle>
                            <Pie
                                angleField="value"
                                data={pieData}
                                colorField="type"
                                radius={0.7}
                                forceFit={true}
                                label={{
                                    visible: true,
                                    type: "spider",
                                    formatter: (text) => `${toCurrency(Number(text) ?? 0)}`,
                                }}
                            />
                        </LocalLoadingWrapper>
                    </ContentWrapper>
                </Col>
                <Col span={12}>
                    <ContentWrapper style={{ height: "100%" }}>
                        <BlockTitle style={{ marginBottom: "10px" }}>Ближайшие выплаты</BlockTitle>
                        <Table
                            loading={AllFuturePayments.loading}
                            columns={paymentsColumns}
                            dataSource={payments}
                            scroll={{ x: 700 }}
                            pagination={{ pageSize: 5 }}
                        />
                    </ContentWrapper>
                </Col>
            </Row>
        </FadePage>
    )
}

export default AllPortfolioReports
