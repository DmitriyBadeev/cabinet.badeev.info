import React, { useState } from "react"
import { Layout, Menu } from "antd"
import Logo from "../../components/logo/Logo"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from "@ant-design/icons"
import styled from "styled-components"

const { Sider } = Layout

const SideBarWrapper = styled.div`
    position: fixed;
    width: 250px;
    background: white;
`

const CustomSider = styled(Sider)`
    width: 250px;
`

const SideBar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <SideBarWrapper>
            <Layout>
                <CustomSider trigger={null} collapsible collapsed={collapsed} theme="light">
                    <Logo />
                    <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </CustomSider>
                <Layout>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Layout>
            </Layout>
        </SideBarWrapper>
    )
}

export default SideBar
