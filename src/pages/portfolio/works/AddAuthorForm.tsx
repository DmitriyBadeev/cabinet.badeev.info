import React, { useState, useEffect, useRef } from "react"
import { useCreateAuthorMutation, useDeleteAuthorMutation } from "types"
import { message, Row, Col, Button, Form, Input, Modal, Space } from "antd"
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons"
import GlobalLink from "components/links/GlobalLink"
import { FormInstance } from "antd/lib/form"
import { Store } from "antd/lib/form/interface"
import { AuthorType } from "./WorkForm"

type AddAuthorFormPropTyoes = {
    id: number
    authors: AuthorType[]
}

const AddAuthorForm: React.FC<AddAuthorFormPropTyoes> = (props) => {
    const [authors, setAuthors] = useState(props.authors)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        setAuthors(props.authors)
    }, [props.authors])

    const addAuthor = (values: Store) => {
        setAuthors([...authors, { name: values.name, role: values.role, link: values.link }])
        setOpenModal(false)
    }

    const [createAuthorMutation, createPayloads] = useCreateAuthorMutation()
    const [deleteAuthorMutation, deletePayloads] = useDeleteAuthorMutation()

    if (createPayloads.error) message.error(createPayloads.error.message)
    if (deletePayloads.error) message.error(deletePayloads.error.message)

    const updateAuthors = () => {
        authors.forEach(async (author) => {
            await createAuthorMutation({
                variables: {
                    name: author.name || "",
                    link: author.link || "",
                    role: author.role || "",
                    workId: props.id,
                },
            })
        })

        props.authors.forEach(async (author) => {
            if (author.id)
                await deleteAuthorMutation({
                    variables: {
                        id: author.id,
                    },
                })
        })

        message.success("Авторы обновлены")
    }

    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                {authors?.map((author, index) => {
                    return (
                        <Row justify="space-between" gutter={[12, 12]} key={author?.id || index}>
                            <Col>
                                <GlobalLink to={author?.link ?? ""}>{author?.name}</GlobalLink>: {author?.role}
                            </Col>
                            <Col>
                                <MinusCircleOutlined
                                    style={{ cursor: "pointer", color: "#999" }}
                                    onClick={() => setAuthors(authors.filter((_a, i) => i !== index))}
                                />
                            </Col>
                        </Row>
                    )
                })}
            </Col>
            <Col span={24}>
                <Space>
                    <Button type="dashed" onClick={() => setOpenModal(true)}>
                        <PlusOutlined /> Добавить автора
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => updateAuthors()}
                        loading={createPayloads.loading || deletePayloads.loading}
                    >
                        Обновить
                    </Button>
                </Space>
            </Col>
            <AddAuthorModal onSubmit={addAuthor} open={openModal} onCancel={() => setOpenModal(false)} />
        </Row>
    )
}

export default AddAuthorForm

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = (form: FormInstance, visible: boolean) => {
    const prevVisibleRef = useRef<boolean>()
    useEffect(() => {
        prevVisibleRef.current = visible
    }, [visible])
    const prevVisible = prevVisibleRef.current

    useEffect(() => {
        if (!visible && prevVisible) {
            form.resetFields()
        }
    }, [visible, prevVisible, form])
}

type AddAuthorModalPropTypes = {
    open: boolean
    onSubmit: (values: Store) => void
    onCancel: () => void
}

const AddAuthorModal: React.FC<AddAuthorModalPropTypes> = (props) => {
    const [form] = Form.useForm()

    useResetFormOnCloseModal(form, props.open)

    const onOk = () => {
        form.submit()
    }

    return (
        <Modal title="Добавление автора" visible={props.open} onOk={onOk} onCancel={props.onCancel}>
            <Form form={form} layout="vertical" name="userForm" onFinish={props.onSubmit}>
                <Form.Item name="name" label="Имя, фамилия автора" rules={[{ required: true }]}>
                    <Input placeholder="Имя, фамилия автора" />
                </Form.Item>
                <Form.Item name="role" label="Роль в команде" rules={[{ required: true }]}>
                    <Input placeholder="Роль в команде" />
                </Form.Item>
                <Form.Item name="link" label="Ссылка" rules={[{ required: true }]}>
                    <Input placeholder="Ссылка" />
                </Form.Item>
            </Form>
        </Modal>
    )
}
