import React, { useEffect } from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import Routes from "./Routes"
import { ThemeProvider } from "styled-components"
import Shared from "./pages/shared/Shared"
import { BrowserRouter } from "react-router-dom"
import { observer } from "mobx-react"
import useStore from "store/useStore"
import { ConfigProvider } from "antd"

import "moment/locale/ru"
import ru_RU from "antd/es/locale/ru_RU"

const client = new ApolloClient({
    uri: "https://api.badeev.info/graphql?",
    request: (operation) => {
        const token = window.localStorage.getItem("token")
        operation.setContext({
            headers: {
                Authorization: token ? token : "",
            },
        })
    },
})

const theme = {
    primary: "#407BFF",
    green: "#75D728",
    red: "#cf1322",
}

const App: React.FC = observer(() => {
    const { AuthService } = useStore()

    useEffect(() => {
        AuthService.loadUser()
    }, [AuthService])

    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <ConfigProvider locale={ru_RU} csp={{ nonce: "badeev.info" }}>
                    <BrowserRouter>
                        <Shared>
                            <Routes />
                        </Shared>
                    </BrowserRouter>
                </ConfigProvider>
            </ThemeProvider>
        </ApolloProvider>
    )
})

export default App
