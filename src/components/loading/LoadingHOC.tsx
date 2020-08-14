import React from "react"
import { Skeleton } from "antd"

type loadingProp = {
    loading: boolean
}

const LoadingHOC: React.FC<loadingProp> = (props) => {
    return (
        <Skeleton active={true} loading={props.loading} paragraph={{ rows: 2 }}>
            {props.children}
        </Skeleton>
    )
}

export default LoadingHOC
