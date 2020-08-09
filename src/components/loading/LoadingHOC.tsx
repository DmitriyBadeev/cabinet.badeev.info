import React from "react"
import LocalLoading from "./LocalLoading"
import { Center } from "common-styles"

type loadingProp = {
    loading: boolean
}

const LoadingHOC: React.FC<loadingProp> = (props) => {
    if (props.loading)
        return (
            <Center>
                <LocalLoading />
            </Center>
        )

    return <>{props.children}</>
}

export default LoadingHOC
