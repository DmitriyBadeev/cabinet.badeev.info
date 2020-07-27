import React from "react"
import { useWorkByIdQuery, useUpdateWorkMutation } from "types"
import { message } from "antd"
import { Store } from "antd/lib/form/interface"
import WorkForm from "./WorkForm"

type EditedWorkFormPropTypes = {
    isOpen: boolean
    id: number
    onClose: () => void
    reload: () => void
}

const EditedWorkForm: React.FC<EditedWorkFormPropTypes> = (props) => {
    const { data, loading, error } = useWorkByIdQuery({
        variables: {
            id: props.id,
        },
        fetchPolicy: "no-cache",
    })

    const [updateWorkMutation, updatePayloads] = useUpdateWorkMutation()

    const onFinish = (values: Store) => {
        const variables = {
            id: values.id as number,
            title: values.title as string,
            shortDescription: values.shortDescription as string,
            imgPath: values.imgPath as string,
            task: values.task as string,
            html: values.html as string,
            date: values.date.add(1, "days").format() as any,
            link: values.link as string,
        }

        updateWorkMutation({
            variables: variables,
        }).then(() => {
            message.success("Работа обновлена")
            props.reload()
        })
    }

    if (error) {
        message.error(error.message)
    }

    if (updatePayloads.error) {
        message.error(updatePayloads.error.message)
    }

    const work = data?.workById

    const authors = work?.authors?.map((author) => {
        return {
            id: author?.id,
            name: author?.name,
            role: author?.role,
            link: author?.link,
        }
    })

    return (
        <WorkForm
            loading={loading}
            loadingUpdate={updatePayloads.loading}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onFinish={onFinish}
            formTitle="Редактирование работы"
            buttonTitle="Обновить"
            id={props.id}
            titleWork={work?.title ?? ""}
            link={work?.link ?? ""}
            date={work?.date ?? ""}
            shortDescription={work?.shortDescription ?? ""}
            imgPath={work?.imgPath ?? ""}
            task={work?.task ?? ""}
            html={work?.html ?? ""}
            authors={authors ?? []}
        />
    )
}

export default EditedWorkForm
