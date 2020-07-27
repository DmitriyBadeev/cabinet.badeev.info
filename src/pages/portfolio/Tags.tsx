import React, { useEffect, useState } from "react"
import AllTagList from "components/tags/AllTagList"
import WorkTagList from "components/tags/WorkTagList"
import { Row, Col, message, Drawer, Form, Input, Button, Divider, Typography } from "antd"
import Table, { ColumnsType } from "antd/lib/table"
import {
    useWorksLazyQuery,
    useDisconnectMutation,
    useConnectMutation,
    useTagsByWorkIdLazyQuery,
    useCreateTagMutation,
    useDeleteTagMutation,
} from "types"
import Loading from "components/loading/Loading"
import { EditOutlined, PlusOutlined } from "@ant-design/icons"

const { Title } = Typography

const Tags: React.FC = () => {
    const [query, { data, loading, error }] = useWorksLazyQuery({
        fetchPolicy: "no-cache",
    })

    useEffect(() => {
        query()
    }, [query])

    const initialEdirProps = {
        isOpen: false,
        workId: 0,
        workTitle: "",
    }

    if (error) message.error(error.message)

    const closeForm = () => {
        setEditFormProps(initialEdirProps)
    }

    const columns: ColumnsType<{
        key: number | undefined
        id: number | undefined
        title: string | null | undefined
        date: any
    }> = [
        {
            key: "id",
            title: "ID",
            dataIndex: "id",
            width: 60,
        },
        {
            key: "title",
            title: "Заголовок",
            dataIndex: "title",
            width: 250,
        },
        {
            key: "tags",
            title: "Теги",
            render: (_items, item) => (
                <Row>
                    <Col span={24}>
                        <WorkTagList workId={item.id ?? 0} isRemovable={false} />
                    </Col>
                    <Col span={24}>
                        <Button
                            key="edit"
                            type="link"
                            onClick={() =>
                                setEditFormProps({
                                    isOpen: true,
                                    workId: item.id || 0,
                                    workTitle: item.title || "",
                                })
                            }
                        >
                            <EditOutlined /> Редактировать
                        </Button>
                    </Col>
                </Row>
            ),
        },
    ]

    const [editFormProps, setEditFormProps] = useState(initialEdirProps)

    const dataWorks = data?.works?.nodes ?? []

    const works = dataWorks.map((work) => {
        return {
            key: work?.id,
            id: work?.id,
            title: work?.title,
            date: work?.date,
        }
    })

    return (
        <Row justify="center" gutter={[16, 16]}>
            <Col span={23}>
                <Table dataSource={works} columns={columns} pagination={false} loading={loading} />
            </Col>
            <TagForm {...editFormProps} onClose={closeForm} reload={() => query()} />
        </Row>
    )
}

export default Tags

type TagFormPropType = {
    workId: number
    workTitle: string
    isOpen: boolean
    onClose: () => void
    reload: () => void
}

const TagForm: React.FC<TagFormPropType> = (props) => {
    const [query, { data, loading, error }] = useTagsByWorkIdLazyQuery({
        variables: {
            workId: props.workId,
        },
        fetchPolicy: "no-cache",
    })

    useEffect(() => {
        query()
    }, [query])

    if (error) {
        message.error(error.message)
    }

    const tags = data?.tagsByWorkId?.map((t) => t?.id ?? 0).filter((id) => id !== 0)

    const [disconnectMutation, disconnectPayloads] = useDisconnectMutation()
    const [connectMutation, connectPayloads] = useConnectMutation()
    const [createMutation, createPayloads] = useCreateTagMutation()
    const [deleteMutation, deletePayloads] = useDeleteTagMutation()

    const onToggleTag = (id: number, isActive: boolean) => {
        if (isActive) {
            disconnectMutation({
                variables: {
                    tagId: id,
                    workId: props.workId,
                },
            }).then(() => onSuccess("Тег отсоединен"))
        } else {
            connectMutation({
                variables: {
                    tagId: id,
                    workId: props.workId,
                },
            }).then(() => onSuccess("Тег присоединен"))
        }
    }

    const createTag = (title: string) => {
        createMutation({
            variables: {
                title,
            },
        }).then(() => onSuccess("Тег добавлен"))
    }

    const removeTag = (id: number) => {
        deleteMutation({
            variables: {
                id,
            },
        }).then(() => onSuccess("Тег удален"))
    }

    const onSuccess = (massage: string) => {
        message.success(massage)
        props.reload()
        query()
    }

    if (disconnectPayloads.error) message.error(disconnectPayloads.error.message)
    if (disconnectPayloads.error) message.error(disconnectPayloads.error.message)
    if (createPayloads.error) message.error(createPayloads.error.message)
    if (deletePayloads.error) message.error(deletePayloads.error.message)

    const getForm = () => {
        if (
            disconnectPayloads.loading ||
            connectPayloads.loading ||
            createPayloads.loading ||
            deletePayloads.loading ||
            loading
        )
            return <Loading />

        return (
            <Form layout="vertical">
                <Row gutter={16}>
                    <Col span={22}>
                        <Form.Item name="title" label="Заголовок" initialValue={props.workTitle}>
                            <Input placeholder="Заголовок" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Form.Item name="id" label="ID" initialValue={props.workId}>
                            <Input placeholder="ID" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <AllTagList onToggle={onToggleTag} onRemove={removeTag} activeTags={tags} isRemovable={true} />
                    </Col>
                    <Col span={24}>
                        <Divider />
                    </Col>
                    <Col span={24}>
                        <Title level={4}>Добавление тега</Title>
                        <Form layout="vertical" onFinish={(values) => createTag(values.title)}>
                            <Form.Item
                                name="title"
                                label="Заголовок"
                                rules={[{ required: true, message: "Заголовок не может быть пустым" }]}
                            >
                                <Input placeholder="Заголовок тега" />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit">
                                    <PlusOutlined /> Добавить
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Form>
        )
    }

    return (
        <Drawer visible={props.isOpen} title="Редактирование тегов" width={800} onClose={props.onClose} destroyOnClose>
            {getForm()}
        </Drawer>
    )
}
