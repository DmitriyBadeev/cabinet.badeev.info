import React from "react"
import FadePage from "components/fade/FadePage"
import { Typography } from "antd"
import { useSecretQuery } from "types"

const { Title, Paragraph } = Typography

const MainPage: React.FC = () => {
    const { data, error } = useSecretQuery()

    return (
        <FadePage>
            <Title level={1}>Главная страница</Title>

            <Paragraph style={{ color: "green" }} strong>
                {data?.secretData}
            </Paragraph>
            {error && <Paragraph type="danger">{error?.message}</Paragraph>}
        </FadePage>
    )
}

export default MainPage
