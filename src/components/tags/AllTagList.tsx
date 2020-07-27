import React from "react"
import { useAllTagsQuery } from "types"
import TagList from "./TagList"
import LocalLoading from "../loading/LocalLoading"
import { message } from "antd"

type propTypes = {
    activeTags?: number[]
    onToggle?: (id: number, isActive: boolean) => void
    onRemove?: (id: number) => void
    isRemovable: boolean
}

const AllTagList: React.FC<propTypes> = (props) => {
    const { data, loading, error } = useAllTagsQuery({
        fetchPolicy: "no-cache",
    })

    if (error) {
        message.error(error.message)
    }

    if (loading) return <LocalLoading />

    return (
        <TagList
            isRemovable={props.isRemovable}
            tagList={data?.tags || []}
            activeTags={props.activeTags || []}
            onToggle={props.onToggle}
            onRemove={props.onRemove}
        />
    )
}

export default AllTagList
