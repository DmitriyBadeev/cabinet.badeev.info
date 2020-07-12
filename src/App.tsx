import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import Routes from "./Routes"
import { ThemeProvider } from "styled-components"
import Shared from "./pages/shared/Shared"
import { BrowserRouter } from "react-router-dom"

const client = new ApolloClient({
    uri: "https://api.badeev.info/graphql?",
})

const theme = {
    primary: "#407BFF",
}

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Shared>
                        <Routes />
                    </Shared>
                </BrowserRouter>
            </ThemeProvider>
        </ApolloProvider>
    )
}

export default App
