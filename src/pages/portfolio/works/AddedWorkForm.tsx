import React from "react"
import { useCreateWorkMutation } from "types"
import { message } from "antd"
import { Store } from "antd/lib/form/interface"
import WorkForm from "./WorkForm"
import moment from "moment"

type propTypes = {
    isOpen: boolean
    onClose: () => void
    reload: () => void
}

const AddedWorkForm: React.FC<propTypes> = (props) => {
    const [createWorkMutation, createPayloads] = useCreateWorkMutation()

    const onFinish = (values: Store) => {
        const variables = {
            title: values.title as string,
            shortDescription: (values.shortDescription || "") as string,
            imgPath: values.imgPath as string,
            task: (values.task || "") as string,
            html: (values.html || "") as string,
            date: values.date.add(1, "days").format() as any,
            link: (values.link || "") as string,
        }

        createWorkMutation({
            variables: variables,
        }).then(() => {
            message.success("Работа создана")
            props.reload()
            props.onClose()
        })
    }

    if (createPayloads.error) {
        message.error(createPayloads.error.message)
    }

    return (
        <WorkForm
            loading={false}
            loadingUpdate={createPayloads.loading}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onFinish={onFinish}
            formTitle="Добавление работы"
            buttonTitle="Добавить"
            date={moment().format("YYYY-MM-DD")}
        />
    )
}

export default AddedWorkForm
