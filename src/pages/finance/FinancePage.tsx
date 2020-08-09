import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import AllPortfolioReports from "./AllPortfolioReports"
import { Tabs, message } from "antd"
import { usePortfoliosQuery } from "finance-types"
import LocalLoading from "components/loading/LocalLoading"
import PortfolioReport from "./PortfolioReport"
import FadePage from "components/fade/FadePage"

const client = new ApolloClient({
    uri: "https://finance.badeev.info/graphql?",
    request: (operation) => {
        const token = window.localStorage.getItem("token")
        operation.setContext({
            headers: {
                Authorization: token ? token : "",
            },
        })
    },
})

const { TabPane } = Tabs

const FinancePage: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <AllPortfolioReports />
            <PortfoliosTabs />
        </ApolloProvider>
    )
}

export default FinancePage

const PortfoliosTabs: React.FC = () => {
    const { data, loading, error } = usePortfoliosQuery()

    if (loading) return <LocalLoading />

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
