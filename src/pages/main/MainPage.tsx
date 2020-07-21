import React from "react"
import FadePage from "components/fade/FadePage"
import { observer } from "mobx-react"
import { Row, Col } from "antd"
import Constitution from "secrets/Constitution"

const MainPage: React.FC = observer(() => {
    return (
        <FadePage>
            <Row justify="center" gutter={[0, 30]}>
                <Col span={18}>
                    <Constitution />
                </Col>
            </Row>
        </FadePage>
    )
})

export default MainPage
