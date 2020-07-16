import React from "react"
import FadePage from "components/fade/FadePage"
import { Typography, Button } from "antd"
import { observer } from "mobx-react"
import useStore from "store/useStore"
import { useSecretQuery } from "types"

const { Title, Paragraph } = Typography

const MainPage: React.FC = observer(() => {
    const { AuthService } = useStore()

    const { data, error } = useSecretQuery()

    return (
        <FadePage>
            <Title level={1}>Главная страница</Title>
            <Button onClick={AuthService.signin}>Войти</Button>
            {(
                <Paragraph style={{ color: "green" }} strong>
                    {data?.secretData}
                </Paragraph>
            ) || <Paragraph type="danger">{error?.message}</Paragraph>}
        </FadePage>
    )
})

export default MainPage
