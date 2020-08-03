import React from "react"
import FadePage from "components/fade/FadePage"
import { Tabs } from "antd"
import { ContentWrapper } from "common-styles"
import Typograf from "./Typograf"
import Symbols from "./Symbols"
import Tokens from "./Tokens"

const { TabPane } = Tabs

const ToolsPage: React.FC = () => {
    return (
        <FadePage>
            <Tabs defaultActiveKey="1" type="card" size="large">
                <TabPane tab="Типограф" key="1">
                    <ContentWrapper>
                        <Typograf />
                    </ContentWrapper>
                </TabPane>
                <TabPane tab="Спецсимволы" key="2">
                    <ContentWrapper>
                        <Symbols />
                    </ContentWrapper>
                </TabPane>
                <TabPane tab="Токены" key="3">
                    <ContentWrapper>
                        <Tokens />
                    </ContentWrapper>
                </TabPane>
            </Tabs>
        </FadePage>
    )
}

export default ToolsPage
