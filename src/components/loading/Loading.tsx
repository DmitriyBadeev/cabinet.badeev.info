import React from "react"
import { Spin } from "antd"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    height: 50vh;
    justify-content: center;
    align-items: center;
`

const Loading: React.FC = () => {
    return (
        <Wrapper>
            <Spin size="large" />
        </Wrapper>
    )
}

export default Loading
