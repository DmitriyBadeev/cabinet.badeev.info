import React from "react"
import TagComponent from "./Tag"
import { Tag } from "types"
import styled from "styled-components"

type propTypes = {
    tagList: Array<Tag | undefined | null>
    activeTags: Array<number>
    onToggle?: (id: number, isActive: boolean) => void
    onRemove?: (id: number) => void
    isRemovable: boolean
}

const TagListWrapper = styled.div`
    display: flex;
    margin: 20px -5px;
    flex-wrap: wrap;
`

const TagList: React.FC<propTypes> = (props) => {
    if (!props.tagList) return <TagListWrapper></TagListWrapper>

    return (
        <TagListWrapper>
            {props.tagList.map((tag) => {
                if (tag)
                    return (
                        <TagComponent
                            key={tag.id}
                            isActive={props.activeTags.includes(tag.id)}
                            id={tag.id}
                            onToggle={props.onToggle}
                            onRemove={props.onRemove}
                            isRemovable={props.isRemovable}
                        >
                            {tag.title}
                        </TagComponent>
                    )
                else return null
            })}
        </TagListWrapper>
    )
}

export default TagList
