import React from "react"
import { Underline } from "common-styles"

type propTypes = {
    to: string
}

const GlobalLink: React.FC<propTypes> = ({ to, children }) => {
    return (
        <a href={to} target="_blank" rel="noopener noreferrer">
            <Underline>{children}</Underline>
        </a>
    )
}

export default GlobalLink
