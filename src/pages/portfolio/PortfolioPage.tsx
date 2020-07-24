import React from "react"
import FadePage from "components/fade/FadePage"
import { Tabs } from "antd"
import { ContentWrapper } from "common-styles"
import Editor from "./Editor"

const { TabPane } = Tabs

const PortfolioPage: React.FC = () => {
    return (
        <FadePage>
            <Tabs defaultActiveKey="1" type="card" size="large">
                <TabPane tab="Редактор" key="1">
                    <ContentWrapper>
                        <Editor />
                    </ContentWrapper>
                </TabPane>
            </Tabs>
        </FadePage>
    )
}

export default PortfolioPage
