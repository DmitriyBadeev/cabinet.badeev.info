import { getMainDefinition } from "apollo-utilities"
import { setContext } from "apollo-link-context"
import { HttpLink } from "apollo-link-http"
import { WebSocketLink } from "apollo-link-ws"
import { split } from "apollo-link"
import { ApolloClient, InMemoryCache } from "apollo-boost"

const httpLink = new HttpLink({
    uri: "https://finance.badeev.info/graphql?",
})

const wsLink = new WebSocketLink({
    uri: "wss://finance.badeev.info/graphql?",
    options: {
        reconnect: true,
    },
})

const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query)
        return definition.kind === "OperationDefinition" && definition.operation === "subscription"
    },
    wsLink,
    httpLink
)

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token")
    return {
        headers: {
            ...headers,
            authorization: token ? token : "",
        },
    }
})

const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache(),
})

export default client
