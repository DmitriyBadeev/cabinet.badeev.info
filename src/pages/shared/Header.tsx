import React from "react"
import { Layout, Button, Typography, Avatar, Space, Badge } from "antd"
import styled, { css } from "styled-components"
import useStore from "store/useStore"
import { MenuUnfoldOutlined, MenuFoldOutlined, ExportOutlined } from "@ant-design/icons"
import { observer } from "mobx-react"
import { useSecretQuery } from "types"
import GlobalLink from "components/links/GlobalLink"

type propStyleType = {
    collapsedSider: boolean
}

const HeaderWrapper = styled(Layout.Header)`
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s;
`
const HeaderOuter = styled.div<propStyleType>`
    margin-left: ${(props) => (props.collapsedSider ? "80px" : "200px")};
`

const Icon = css`
    font-size: 18px;
    line-height: 64px;
    padding: 0 10px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
        color: ${(props) => props.theme.primary};
    }
`

const MenuUnfold = styled(MenuUnfoldOutlined)`
    ${Icon}
`

const MenuFold = styled(MenuFoldOutlined)`
    ${Icon}
`

const { Text } = Typography

const WrapperIdentity = styled.div``

const Header: React.FC = observer(() => {
    const { NavStore, AuthService } = useStore()
    const { data } = useSecretQuery()

    return (
        <HeaderOuter collapsedSider={NavStore.isMenuCollapsed}>
            <HeaderWrapper>
                {React.createElement(NavStore.isMenuCollapsed ? MenuUnfold : MenuFold, {
                    onClick: () => NavStore.toggleMenu(),
                })}
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
