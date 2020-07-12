import React from "react"
import FadePage from "../../components/fade/FadePage"
import { Typography } from "antd"

const { Title } = Typography

const MainPage: React.FC = () => {
    return (
        <FadePage>
            <Title level={1}>Главная страница</Title>
        </FadePage>
    )
}

export default MainPage
