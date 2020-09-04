import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import AllPortfolioReports from "./AllPortfolioReports"
import { Tabs, message } from "antd"
import { usePortfoliosQuery } from "finance-types"
import SearchAsset from "./SearchAsset"
import PortfolioReport from "./PortfolioReport"
import FadePage from "components/fade/FadePage"
import FinanceClient from "./FinanceClient"
import Loading from "components/loading/Loading"
import Quotes from "./Quotes"

const { TabPane } = Tabs

const FinancePage: React.FC = () => {
    return (
        <ApolloProvider client={FinanceClient}>
            <SearchAsset />
            <Quotes />
            <AllPortfolioReports />
            <PortfoliosTabs />
        </ApolloProvider>
    )
}

export default FinancePage

const PortfoliosTabs: React.FC = () => {
    const { data, loading, error } = usePortfoliosQuery()

    if (loading) return <Loading />

    if (error) message.error(error.message)

    const portfolios = data?.portfolios

    const getPortfolioTabs = () => {
        return portfolios?.map((p, i) => (
            <TabPane tab={p?.name} key={`"${i}"`}>
                <PortfolioReport portfolioId={p?.id || 1} />
            </TabPane>
        ))
    }

    return (
        <FadePage>
            <Tabs defaultActiveKey="1" type="card" size="large">
                {getPortfolioTabs()}
            </Tabs>
        </FadePage>
    )
}
