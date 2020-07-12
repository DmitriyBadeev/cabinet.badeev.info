import React from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

const LogoStyle = styled.div<propTypes>`
    font-size: 1.5rem;
    color: "#222";
    transition: all 0.2s;
    padding: 0 5px;
    border-radius: 10px;
    cursor: pointer;
    line-height: 45px;
`

const Point = styled.span`
    font-size: 2.5rem;
    color: ${(props) => props.theme.primary};
`

type propTypes = {
    isSmall?: boolean
}

const Logo: React.FC<propTypes> = ({ isSmall = false }) => {
    if (isSmall)
        return (
            <Link to="/">
                <LogoStyle isSmall={isSmall}>B</LogoStyle>
            </Link>
        )

    return (
        <Link to="/">
            <LogoStyle>
                Badeev<Point>.</Point>info
            </LogoStyle>
        </Link>
    )
}

export default Logo
