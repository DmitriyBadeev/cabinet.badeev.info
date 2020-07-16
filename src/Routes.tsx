import React, { useEffect } from "react"
import { useLocation, Switch, Route } from "react-router-dom"
import MainPage from "pages/main/MainPage"
import AuthComplete from "pages/auth/AuthComplete"

const Routes: React.FC = () => {
    return (
        <ScrollToTop>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/auth-complete" component={AuthComplete} />
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
