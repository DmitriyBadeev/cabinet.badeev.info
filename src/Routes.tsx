import React, { useEffect } from "react"
import { useLocation, Switch, Route, Redirect, RouteProps } from "react-router-dom"
import { observer } from "mobx-react"
import useStore from "store/useStore"
import MainPage from "pages/main/MainPage"
import PortfolioPage from "pages/portfolio/PortfolioPage"
import FinancePage from "pages/finance/FinancePage"
import MetrikaPage from "pages/metrika/MetrikaPage"
import AuthComplete from "pages/auth/AuthComplete"
import Enter from "pages/auth/Enter"
import Signout from "pages/auth/Signout"
import Loading from "components/loading/Loading"

const Routes: React.FC = () => {
    return (
        <ScrollToTop>
            <Switch>
                <PrivateRoute exact path="/">
                    <MainPage />
                </PrivateRoute>
                <PrivateRoute exact path="/portfolio">
                    <PortfolioPage />
                </PrivateRoute>
                <PrivateRoute exact path="/finance">
                    <FinancePage />
                </PrivateRoute>
                <PrivateRoute exact path="/metrika">
                    <MetrikaPage />
                </PrivateRoute>
                <Route exact path="/enter">
                    <Enter />
                </Route>
                <Route exact path="/auth-complete">
                    <AuthComplete />
                </Route>
                <Route exact path="/signout">
                    <Signout />
                </Route>
            </Switch>
        </ScrollToTop>
    )
}

export default Routes

const ScrollToTop: React.FC = (props) => {
    let location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return <>{props.children}</>
}

const PrivateRoute: React.FC<RouteProps> = observer(({ children, ...rest }) => {
    const { AuthService } = useStore()

    if (AuthService.isLoadingUser) {
        return <Loading />
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                AuthService.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/enter",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    )
})
