import React from "react"
import { Layout } from "antd"
import SideBar from "./SideBar"

const { Content } = Layout

const Shared: React.FC = (props) => {
    return (
        <Layout>
            <SideBar />
            <Content>{props.children}</Content>
        </Layout>
    )
}

export default Shared
