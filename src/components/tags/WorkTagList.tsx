import React from "react"
import { useTagsByWorkIdQuery } from "types"
import TagList from "./TagList"
import LocalLoading from "components/loading/LocalLoading"
import { message } from "antd"

type typeProps = {
    workId: number
    isRemovable: boolean
}

const WorkTagList: React.FC<typeProps> = (props) => {
    const { data, loading, error } = useTagsByWorkIdQuery({
        variables: {
            workId: props.workId,
        },
        fetchPolicy: "no-cache",
    })

    if (error) {
        message.error(error.message)
    }

    if (loading) return <LocalLoading />

    return (
        <TagList
            isRemovable={props.isRemovable}
            tagList={data?.tagsByWorkId || []}
            activeTags={[]}
            onToggle={() => {}}
        />
    )
}

export default WorkTagList
