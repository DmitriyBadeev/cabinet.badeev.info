import React from "react"
import FadePage from "components/fade/FadePage"
import { ContentWrapper } from "common-styles"
import { useStockReportsQuery, useFondReportsQuery, useBondReportsQuery } from "finance-types"
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

    if (stockPayloads.error) message.error(stockPayloads.error.message)
    if (fondPayloads.error) message.error(fondPayloads.error.message)
    if (bondPayloads.error) message.error(bondPayloads.error.message)

    const stockReports = stockPayloads.data?.stockReports?.map((s, i) => {
        return {
            key: i,
            ...s,
        }
    })

    const fondReports = fondPayloads.data?.fondReports?.map((s, i) => {
        return {
            key: i,
            ...s,
        }
    })

    const bondReports = bondPayloads.data?.bondReports?.map((s, i) => {
        return {
            key: i,
            ...s,
        }
    })

    console.log(stockReports)
    console.log(fondReports)
    console.log(bondReports)

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
                            scroll={{ x: 1450 }}
                        />
                    </Col>
                    <Col>
                        <Table
                            loading={fondPayloads.loading}
                            columns={fondColumns}
                            dataSource={fondReports}
                            pagination={false}
                            title={() => <Title level={4}>Фонды</Title>}
                            scroll={{ x: 1190 }}
                        />
                    </Col>
                    <Col>
                        <Table
                            loading={bondPayloads.loading}
                            columns={bondColumns}
                            dataSource={bondReports}
                            pagination={false}
                            title={() => <Title level={4}>Облигации</Title>}
                            scroll={{ x: 1630 }}
                        />
                    </Col>
                </Row>
            </ContentWrapper>
        </FadePage>
    )
}

export default PortfolioReport
