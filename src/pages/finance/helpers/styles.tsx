import { CSSProperties } from "react"
import styled from "styled-components"
import React from "react"
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons"

const PercentIcon = styled.div<{ isDown: boolean }>`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    background: ${(props) => (props.isDown ? "#cf1322" : "#75d728")};
    color: white;
    border-radius: 50%;
    margin-right: 5px;
`

export const getStatStyle: (value: number | undefined) => CSSProperties = (value: number | undefined) => {
    if (value && value >= 0) {
        return {
            color: "#75D728",
            fontWeight: 600,
            fontSize: "2.1rem",
        }
    }

    return {
        color: "#cf1322",
        fontWeight: 600,
        fontSize: "2.1rem",
    }
}

export const getProfitPrefix = (value: number | undefined) => {
    if (value && value > 0) return "+"

    return ""
}

export const getProfitPercentPrefix = (value: number | undefined) => {
    if (value && value > 0)
        return (
            <PercentIcon isDown={false}>
                <ArrowUpOutlined />
            </PercentIcon>
        )

    if (value && value < 0)
        return (
            <PercentIcon isDown={true}>
                <ArrowDownOutlined />
            </PercentIcon>
        )

    return ""
}
