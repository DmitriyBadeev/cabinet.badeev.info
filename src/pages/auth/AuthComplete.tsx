import React, { useEffect, useState } from "react"
import { observer } from "mobx-react"
import useStore from "store/useStore"
import { Redirect } from "react-router-dom"
import Loading from "components/loading/Loading"

const AuthComplete: React.FC = observer(() => {
    const { AuthService } = useStore()

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        AuthService.signinComplete().then(() => setIsLoaded(true))
    }, [AuthService])

    if (isLoaded) return <Redirect to="/" />

    return <Loading />
})

export default AuthComplete
