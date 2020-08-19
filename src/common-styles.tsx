import styled from "styled-components"
import { Layout } from "antd"

const { Content } = Layout

export const Flex = styled.div`
    display: flex;
`

export const HorizontalCenter = styled(Flex)`
    justify-content: center;
`

export const Center = styled(HorizontalCenter)`
    align-items: center;
`

export const Underline = styled.span`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`
export const ContentWrapper = styled(Content)`
    background: white;
    padding: 25px;
    border-radius: 10px;
`
type IndexProp = {
    index: number
}

export const ColorIndex = styled.span<IndexProp>`
    color: ${(props) => (props.index >= 0 ? props.theme.green : props.theme.red)};

    &::before {
        content: ${(props) => (props.index > 0 ? `"+"` : `""`)};
    }
`
