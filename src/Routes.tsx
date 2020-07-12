import React, { useEffect } from "react"
import { useLocation, Switch, Route } from "react-router-dom"
import MainPage from "./pages/main/MainPage"

const Routes: React.FC = () => {
    return (
        <ScrollToTop>
            <Switch>
                <Route exact path="/" component={MainPage} />
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
