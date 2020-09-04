import React, { useEffect } from "react"
import { Layout, Menu, Space, Avatar, Typography, Button, Tooltip } from "antd"
import Logo from "components/logo/Logo"
import { Center } from "common-styles"
import styled from "styled-components"
import { observer } from "mobx-react"
import useStore from "store/useStore"
import {
    UserOutlined,
    AppstoreOutlined,
    PieChartOutlined,
    LineChartOutlined,
    ToolOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    ExportOutlined,
} from "@ant-design/icons"
import { Link, useLocation } from "react-router-dom"
import GlobalLink from "components/links/GlobalLink"
import { useSecretLazyQuery } from "types"

const { Sider } = Layout
const { Item } = Menu
const { Text } = Typography

const mainSidebarColor = "#4C7189"

const LogoWrapper = styled(Center)`
    height: 80px;
    margin: 0 20px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
`

const MenuWrapper = styled.div`
    margin: 20px 0;
`

const StyledSider = styled(Sider)`
    position: fixed;
    background: ${mainSidebarColor};
    height: 100vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const StyledMenu = styled(Menu)`
    background: ${mainSidebarColor};
`

const StyledItem = styled(Item)`
    background: ${mainSidebarColor};
`

const WrapperTrigger = styled.div`
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    background: ${mainSidebarColor};
    &:hover {
        color: ${(props) => props.theme.primary};
    }
`

const AvatarInfo = styled(Space)`
    width: 100%;
    transition: all 0.2s;
    margin: 20px 0 5px;
    padding: 10px 0;
`

const UserName = styled(Text)`
    color: rgba(255, 255, 255, 0.85);
    font-weight: 600;
`

const UserButton = styled(Button)`
    background: #56788e;
    color: rgba(255, 255, 255, 0.85);

    &:hover {
        background: #587a8f;
        color: rgba(255, 255, 255, 1);
    }
`

const SideBar: React.FC = observer(() => {
    const { NavStore, AuthService } = useStore()
    const location = useLocation()

    const [query, { data, error }] = useSecretLazyQuery({ fetchPolicy: "no-cache" })

    useEffect(() => {
        const timerId = setInterval(() => {
            query()
        }, 15000)

        return () => clearInterval(timerId)
    }, [query])

    useEffect(() => {
        if (error) {
            AuthService.signin()
        }
    }, [data, query, error, AuthService])

    const getRoute = () => {
        if (location.pathname === "/") {
            return ["1"]
        }

        if (location.pathname.startsWith("/portfolio")) {
            return ["2"]
        }

        if (location.pathname.startsWith("/finance")) {
            return ["3"]
        }

        if (location.pathname.startsWith("/metrika")) {
            return ["4"]
        }

        if (location.pathname.startsWith("/tools")) {
            return ["5"]
        }

        return ["1"]
    }

    return (
        <StyledSider
            width={210}
            collapsible
            onCollapse={() => NavStore.toggleMenu()}
            collapsed={NavStore.isMenuCollapsed}
            trigger={
                NavStore.isMenuCollapsed ? (
                    <WrapperTrigger>
                        <ArrowRightOutlined style={{ fontSize: "17px" }} />
                    </WrapperTrigger>
                ) : (
                    <WrapperTrigger>
                        <ArrowLeftOutlined />
                    </WrapperTrigger>
                )
            }
        >
            <LogoWrapper>
                <Logo isSmall={NavStore.isMenuCollapsed} />
            </LogoWrapper>

            {AuthService.isAuthenticated && (
                <AvatarInfo direction="vertical" align="center">
                    <Avatar src={AuthService.user?.profile.picture} size={!NavStore.isMenuCollapsed ? 64 : 48} />
                    {!NavStore.isMenuCollapsed && (
                        <>
                            <UserName>
                                {AuthService.user?.profile.name} {AuthService.user?.profile.family_name}
                            </UserName>
                            <Space size="middle">
                                <Tooltip title="Выход" placement="bottom">
                                    <UserButton
                                        shape="circle"
                                        icon={<ExportOutlined />}
                                        type="text"
                                        onClick={AuthService.signout}
                                    />
                                </Tooltip>

                                <GlobalLink to="https://badeev.info">
                                    <Tooltip title="Промо" placement="bottom">
                                        <UserButton shape="circle" icon={<UserOutlined />} type="text" />
                                    </Tooltip>
                                </GlobalLink>
                            </Space>
                        </>
                    )}
                </AvatarInfo>
            )}

            <MenuWrapper>
                <StyledMenu
                    theme="dark"
                    style={{ background: mainSidebarColor }}
                    mode="inline"
                    defaultSelectedKeys={getRoute()}
                >
                    <StyledItem key="1" icon={<UserOutlined />}>
                        <Link to="/">Главная</Link>
                    </StyledItem>
                    <StyledItem key="2" icon={<AppstoreOutlined />}>
                        <Link to="/portfolio">Портфолио</Link>
                    </StyledItem>
                    <StyledItem key="3" icon={<PieChartOutlined />}>
                        <Link to="/finance">Финансы</Link>
                    </StyledItem>
                    <StyledItem key="4" icon={<LineChartOutlined />}>
                        <Link to="/metrika">Метрика</Link>
                    </StyledItem>
                    <StyledItem key="5" icon={<ToolOutlined />}>
                        <Link to="/tools">Инструменты</Link>
                    </StyledItem>
                </StyledMenu>
            </MenuWrapper>
        </StyledSider>
    )
})

export default SideBar
