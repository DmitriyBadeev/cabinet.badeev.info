import React from "react"
import { Layout } from "antd"
import SideBar from "./SideBar"
import Header from "./Header"
import styled from "styled-components"

const { Content } = Layout

const MainLayout = styled(Layout)`
    min-height: 100vh;
`

const ContentWrapper = styled(Content)`
    margin: 40px;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
`

const Shared: React.FC = (props) => {
    return (
        <MainLayout>
            <SideBar />
            <Layout>
                <Header />
                <ContentWrapper>{props.children}</ContentWrapper>
            </Layout>
        </MainLayout>
    )
}

export default Shared
