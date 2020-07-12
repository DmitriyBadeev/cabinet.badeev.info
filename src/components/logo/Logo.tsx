import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const LogoStyle = styled.div`
    font-size: 24px;
    color: #222;
    transition: all 0.2s;
    padding: 0 5px;
    border-radius: 10px;
    cursor: pointer;
    line-height: 45px;
`

const Point = styled.span`
    font-size: 36px;
    color: ${(props) => props.theme.primary};
`

const Logo: React.FC = () => {
    return (
        <Link to="/">
            <LogoStyle>
                Badeev<Point>.</Point>info
            </LogoStyle>
        </Link>
    )
}

export default Logo
