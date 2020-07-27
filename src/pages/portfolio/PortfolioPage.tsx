import React from "react"
import FadePage from "components/fade/FadePage"
import { Tabs } from "antd"
import { ContentWrapper } from "common-styles"
import Editor from "./Editor"
import Works from "./works/Works"
import Tags from "./Tags"

const { TabPane } = Tabs

const PortfolioPage: React.FC = () => {
    return (
        <FadePage>
            <Tabs defaultActiveKey="1" type="card" size="large">
                <TabPane tab="Работы" key="1">
                    <ContentWrapper>
                        <Works />
                    </ContentWrapper>
                </TabPane>
                <TabPane tab="Редактор" key="2">
                    <ContentWrapper>
                        <Editor />
                    </ContentWrapper>
                </TabPane>
                <TabPane tab="Теги" key="3">
                    <ContentWrapper>
                        <Tags />
                    </ContentWrapper>
                </TabPane>
            </Tabs>
        </FadePage>
    )
}

export default PortfolioPage
