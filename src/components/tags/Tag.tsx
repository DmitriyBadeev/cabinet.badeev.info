import React from "react"
import styled from "styled-components"
import { Popconfirm } from "antd"

type propTypes = {
    isActive: boolean
    isRemovable: boolean
    onToggle?: (id: number, isActive: boolean) => void
    onRemove?: (id: number) => void
    id: number
}

type styleProp = {
    isActive: boolean
    isRemovable: boolean
}

const TagStyle = styled.div<styleProp>`
    border: solid 1px ${(props) => props.theme.primary};
    border-radius: 10px;
    font-size: 16px;
    padding: 2px ${(props) => (props.isRemovable ? "20px" : "6.5px")} 2px 5px;
    color: ${(props) => (props.isActive ? "#fff" : props.theme.primary)};
    background: ${(props) => props.isActive && props.theme.primary};
    margin: 3px;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0, 0, 0, 1);

    &::before {
        content: "#";
        display: inline-flex;
        margin-right: 1.5px;
        opacity: 0.7;
    }

    &:hover {
        color: white;
        background: ${(props) => props.theme.primary};
        opacity: 0.8;
    }

    &:active {
        background: ${(props) => props.theme.primary};
        opacity: 0.7;
    }
`

const Cross = styled.span<styleProp>`
    position: absolute;
    cursor: pointer;
    font-weight: 600;
    right: 6px;
    top: 7px;
    display: inline-flex;
    padding: 0 4px;
    color: ${(props) => (props.isActive ? "#fff" : "#333")};
    opacity: 0.4;
    transition: all 0.5s cubic-bezier(0, 0, 0, 1);

    &:hover {
        opacity: 1;
    }
`
const TagWrapper = styled.div`
    position: relative;
`

const Tag: React.FC<propTypes> = (props) => {
    return (
        <TagWrapper>
            <TagStyle
                isRemovable={props.isRemovable}
                isActive={props.isActive}
                onClick={() => props.onToggle && props.onToggle(props.id, props.isActive)}
            >
                {props.children}
            </TagStyle>
            {props.isRemovable && (
                <Popconfirm
                    title="Точно удалить?"
                    cancelText="Отмена"
                    okText="Удалить"
                    onConfirm={() => props.onRemove && props.onRemove(props.id)}
                >
                    <Cross isRemovable={props.isRemovable} isActive={props.isActive}>
                        ×
                    </Cross>
                </Popconfirm>
            )}
        </TagWrapper>
    )
}

export default Tag
