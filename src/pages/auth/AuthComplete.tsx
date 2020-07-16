import React, { useEffect } from "react"
import { observer } from "mobx-react"
import useStore from "store/useStore"
import { Redirect } from "react-router-dom"
import Loading from "components/loading/Loading"

const AuthComplete: React.FC = observer(() => {
    const { AuthService } = useStore()

    useEffect(() => {
        AuthService.signinComplete()
    }, [AuthService])

    if (!AuthService.isAuthenticating) return <Redirect to="/" />

    return <Loading />
})

export default AuthComplete
