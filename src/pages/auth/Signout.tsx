import React, { useEffect, useState } from "react"
import { observer } from "mobx-react"
import useStore from "store/useStore"
import Loading from "components/loading/Loading"

const Signout: React.FC = observer(() => {
    const { AuthService } = useStore()
    const [isRedirect, setIsRedirect] = useState(false)

    useEffect(() => {
        AuthService.clearToken()
        AuthService.signoutRedirectCallback().then(() => setIsRedirect(true))
    }, [AuthService])

    if (isRedirect) {
        window.location.replace("https://badeev.info")
    }

    return <Loading />
})

export default Signout
