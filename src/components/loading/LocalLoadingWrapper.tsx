import React from "react"
import { Spin } from "antd"
import { Center } from "common-styles"

type propTypes = {
    loading: boolean
}

const LocalLoadingWrapper: React.FC<propTypes> = (props) => {
    if (props.loading)
        return (
            <Center style={{ height: "100%" }}>
                <Spin size="default" />
            </Center>
        )

    return <>{props.children}</>
}

export default LocalLoadingWrapper
