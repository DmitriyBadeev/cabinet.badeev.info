import styled from "styled-components"

export const Flex = styled.div`
    display: flex;
`

export const HorizontalCenter = styled(Flex)`
    justify-content: center;
`

export const Center = styled(HorizontalCenter)`
    align-items: center;
`
