import React from "react"
import SideBar from "./SideBar"
import Header from "./Header"
import styled from "styled-components"
import { Layout } from "antd"
import { observer } from "mobx-react"
import useStore from "store/useStore"

type propStyleType = {
    collapsedSider: boolean
}

const MainLayout = styled(Layout)`
    min-height: 100vh;
`

const PageLayout = styled.div<propStyleType>`
    margin: 40px 40px 40px ${(props) => (props.collapsedSider ? "120px" : "250px")};
    transition: all 0.2s;
`

const Shared: React.FC = observer((props) => {
    const { NavStore } = useStore()

    return (
        <MainLayout>
            <SideBar />
            <Layout>
                <Header />
                <PageLayout collapsedSider={NavStore.isMenuCollapsed}>{props.children}</PageLayout>
            </Layout>
        </MainLayout>
    )
})

export default Shared
