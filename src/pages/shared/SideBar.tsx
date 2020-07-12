import React from "react"
import { Layout, Menu } from "antd"
import Logo from "components/logo/Logo"
import { Center } from "common-styles"
import styled from "styled-components"
import { observer } from "mobx-react"
import useStore from "store/useStore"
import { UserOutlined, AppstoreOutlined, PieChartOutlined } from "@ant-design/icons"

const { Sider } = Layout
const { Item } = Menu

const LogoWrapper = styled(Center)`
    height: 64px;
    margin: 0 20px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
`

const MenuWrapper = styled.div`
    margin: 30px 0;
`

const StyledSider = styled(Sider)`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`

const SideBar: React.FC = observer(() => {
    const { NavStore } = useStore()

    return (
        <StyledSider width={230} trigger={null} collapsible collapsed={NavStore.isMenuCollapsed} theme="light">
            <LogoWrapper>
                <Logo isSmall={NavStore.isMenuCollapsed} />
            </LogoWrapper>
            <MenuWrapper>
                <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
                    <Item key="1" icon={<UserOutlined />}>
                        Главная
                    </Item>
                    <Item key="2" icon={<AppstoreOutlined />}>
                        Портфолио
                    </Item>
                    <Item key="3" icon={<PieChartOutlined />}>
                        Финансы
                    </Item>
                </Menu>
            </MenuWrapper>
        </StyledSider>
    )
})

export default SideBar
