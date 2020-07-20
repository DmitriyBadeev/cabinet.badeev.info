import React from "react"
import FadePage from "components/fade/FadePage"
import { observer } from "mobx-react"
import { ContentWrapper } from "common-styles"
import { Row, Col, Typography } from "antd"

const { Title } = Typography

const MainPage: React.FC = observer(() => {
    return (
        <FadePage>
            <Row justify="space-between" gutter={[0, 30]}>
                <Col span={15}>
                    <ContentWrapper>
                        <Title level={4}>Конституция</Title>
                    </ContentWrapper>
                </Col>
                <Col span={8}>
                    <ContentWrapper></ContentWrapper>
                </Col>
                <Col span={24}>
                    <ContentWrapper></ContentWrapper>
                </Col>
            </Row>
        </FadePage>
    )
})

export default MainPage
