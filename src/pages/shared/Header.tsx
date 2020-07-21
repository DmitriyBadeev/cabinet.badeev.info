import React from "react"
import { Layout, Button, Typography, Avatar, Space, Badge } from "antd"
import styled from "styled-components"
import useStore from "store/useStore"
import { ExportOutlined } from "@ant-design/icons"
import { observer } from "mobx-react"
import { useSecretQuery } from "types"
import GlobalLink from "components/links/GlobalLink"
import Time from "components/time/Time"

type propStyleType = {
    collapsedSider: boolean
}

const HeaderWrapper = styled(Layout.Header)`
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const HeaderOuter = styled.div<propStyleType>`
    margin-left: ${(props) => (props.collapsedSider ? "80px" : "200px")};
    transition: all 0.2s;
`

const { Text } = Typography

const WrapperIdentity = styled.div``

const Header: React.FC = observer(() => {
    const { NavStore, AuthService } = useStore()
    const { data } = useSecretQuery()

    return (
        <HeaderOuter collapsedSider={NavStore.isMenuCollapsed}>
            <HeaderWrapper>
                <Time />

                {AuthService.isAuthenticated && (
                    <WrapperIdentity>
                        <Space size="large">
                            <Space size="small">
                                {data?.secretData === "Secret" ? (
                                    <Badge dot status="success" offset={[-2, 23]} title="Доступ к секретным данным">
                                        <Avatar src={AuthService.user?.profile.picture} size={32} />
                                    </Badge>
                                ) : (
                                    <Badge dot status="error" offset={[-2, 23]} title="Доступ к секретным данным">
                                        <Avatar src={AuthService.user?.profile.picture} size={32} />
                                    </Badge>
                                )}
                                <Text>
                                    <GlobalLink to="https://badeev.info">
                                        {AuthService.user?.profile.name} {AuthService.user?.profile.family_name}
                                    </GlobalLink>
                                </Text>
                            </Space>
                            <Button onClick={AuthService.signout} icon={<ExportOutlined />}>
                                Выйти
                            </Button>
                        </Space>
                    </WrapperIdentity>
                )}
            </HeaderWrapper>
        </HeaderOuter>
    )
})

export default Header
