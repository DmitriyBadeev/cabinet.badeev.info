import React, { useEffect } from "react"
import { observer } from "mobx-react"
import useStore from "store/useStore"
import Loading from "components/loading/Loading"

const Enter: React.FC = observer(() => {
    const { AuthService } = useStore()

    useEffect(() => {
        AuthService.signin()
    }, [AuthService])

    return <Loading />
})

export default Enter
