import React from "react"
import FadePage from "components/fade/FadePage"
import { Typography } from "antd"
import { observer } from "mobx-react"
import useStore from "store/useStore"

const { Title, Paragraph } = Typography

const MainPage: React.FC = observer(() => {
    const { AuthService } = useStore()

    return (
        <FadePage>
            <Title level={1}>Главная страница</Title>
            <Paragraph>{AuthService.user?.access_token}</Paragraph>
        </FadePage>
    )
})

export default MainPage
