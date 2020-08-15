import React, { useEffect } from "react"
import FadePage from "components/fade/FadePage"
import { ContentWrapper } from "common-styles"
import {
    useStockReportsQuery,
    useFondReportsQuery,
    useBondReportsQuery,
    useStartAssetReportsUpdateMutation,
    useUpdateStockReportsSubscription,
    useUpdateBondReportsSubscription,
    useUpdateFondReportsSubscription,
} from "finance-types"
import { message, Table, Typography, Row, Col } from "antd"
import { stockColumns, fondColumns, bondColumns } from "./TableColumns"

type propTypes = {
    portfolioId: number
}

const { Title } = Typography

const PortfolioReport: React.FC<propTypes> = (props) => {
    const stockPayloads = useStockReportsQuery({
        variables: {
            portfolioId: props.portfolioId,
        },
    })

    const fondPayloads = useFondReportsQuery({
        variables: {
            portfolioId: props.portfolioId,
        },
    })

    const bondPayloads = useBondReportsQuery({
        variables: {
            portfolioId: props.portfolioId,
        },
    })

    const UpdateStocks = useUpdateStockReportsSubscription({
        variables: {
            portfolioId: props.portfolioId,
        },
    })
    const UpdateFonds = useUpdateFondReportsSubscription({
        variables: {
            portfolioId: props.portfolioId,
        },
    })
    const UpdateBonds = useUpdateBondReportsSubscription({
        variables: {
            portfolioId: props.portfolioId,
        },
    })

    const [startUpdateMutation, startUpdateMutationData] = useStartAssetReportsUpdateMutation()

    useEffect(() => {
        startUpdateMutation()
    }, [startUpdateMutation])

    if (stockPayloads.error) message.error(stockPayloads.error.message)
    if (fondPayloads.error) message.error(fondPayloads.error.message)
    if (bondPayloads.error) message.error(bondPayloads.error.message)

    if (startUpdateMutationData.error)
        message.error(`Не удалось запустить обновление: ${startUpdateMutationData.error.message}`)

    if (UpdateStocks.error) message.error(UpdateStocks.error.message)
    if (UpdateFonds.error) message.error(UpdateFonds.error.message)
    if (UpdateBonds.error) message.error(UpdateBonds.error.message)

    const stockReportsData = UpdateStocks.data?.onUpdateStockReports ?? stockPayloads.data?.stockReports
    const fondReportsData = UpdateFonds.data?.onUpdateFondReports ?? fondPayloads.data?.fondReports
    const bondReportsData = UpdateBonds.data?.onUpdateBondReports ?? bondPayloads.data?.bondReports

    const stockReports = stockReportsData?.map((s, i) => {
        return {
            key: i,
            ...s,
        }
    })

    const fondReports = fondReportsData?.map((s, i) => {
        return {
            key: i,
            ...s,
        }
    })

    const bondReports = bondReportsData?.map((s, i) => {
        return {
            key: i,
            ...s,
        }
    })

    return (
        <FadePage>
            <ContentWrapper>
                <Row justify="center" gutter={[30, 30]}>
                    <Col>
                        <Table
                            loading={stockPayloads.loading}
                            columns={stockColumns}
                            dataSource={stockReports}
                            pagination={false}
                            title={() => <Title level={4}>Акции</Title>}
                            scroll={{ x: 1460 }}
                        />
                    </Col>
                    <Col>
                        <Table
                            loading={fondPayloads.loading}
                            columns={fondColumns}
                            dataSource={fondReports}
                            pagination={false}
                            title={() => <Title level={4}>Фонды</Title>}
                            scroll={{ x: 1210 }}
                        />
                    </Col>
                    <Col>
                        <Table
                            loading={bondPayloads.loading}
                            columns={bondColumns}
                            dataSource={bondReports}
                            pagination={false}
                            title={() => <Title level={4}>Облигации</Title>}
                            scroll={{ x: 1640 }}
                        />
                    </Col>
                </Row>
            </ContentWrapper>
        </FadePage>
    )
}

export default PortfolioReport
