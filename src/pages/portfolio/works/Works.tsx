import React, { useState, useEffect } from "react"
import { useWorksLazyQuery, useDeleteWorkMutation } from "types"
import { message, Row, Table, Col, Button, Popconfirm } from "antd"
import { getStringDate } from "helpers/dateHelpers"
import { ColumnsType } from "antd/lib/table"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import EditedWorkForm from "./EditedWorkForm"
import { PlusOutlined } from "@ant-design/icons"
import AddedWorkForm from "./AddedWorkForm"

const Works: React.FC = () => {
    const [query, { data, loading, error }] = useWorksLazyQuery({
        fetchPolicy: "no-cache",
    })

    const [deleteWorkMutation, deleteWorkPayloads] = useDeleteWorkMutation({ fetchPolicy: "no-cache" })

    useEffect(() => {
        query()
    }, [query])

    const initialEdirProps = {
        isOpen: false,
        id: 0,
    }

    const closeForm = () => {
        setEditFormProps(initialEdirProps)
        setIsOpenAddForm(false)
    }

    const [editFormProps, setEditFormProps] = useState(initialEdirProps)
    const [isOpenAddForm, setIsOpenAddForm] = useState(false)

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
        },
        {
            key: "date",
            title: "Дата создания",
            dataIndex: "date",
            align: "center" as "center",
            render: (_items, item) => getStringDate(item.date),
        },
        {
            key: "actions",
            title: "Действия",
            colSpan: 2,
            align: "center" as "center",
            width: 150,
            render: (_items, item, _blockIndex) => (
                <Button key="edit" type="link" onClick={() => setEditFormProps({ isOpen: true, id: item?.id ?? 0 })}>
                    <EditOutlined /> Редактировать
                </Button>
            ),
        },
        {
            key: "remove",
            align: "center" as "center",
            width: 150,
            colSpan: 0,
            render: (items, item) => (
                <Popconfirm
                    title="Точно удалить?"
                    cancelText="Отмена"
                    okText="Удалить"
                    onConfirm={() => {
                        if (item.id) {
                            deleteWorkMutation({ variables: { id: item.id } })
                            query()
                        }
                    }}
                >
                    <Button danger={true} type="link" key="remove">
                        <DeleteOutlined /> Удалить
                    </Button>
                </Popconfirm>
            ),
        },
    ]

    if (error) message.error(error.message)
    if (deleteWorkPayloads.error) message.error(deleteWorkPayloads.error.message)

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
                <Table
                    dataSource={works}
                    columns={columns}
                    pagination={false}
                    loading={loading || deleteWorkPayloads.loading}
                />
            </Col>
            <Col span={23}>
                <Button type="primary" onClick={() => setIsOpenAddForm(true)}>
                    <PlusOutlined /> Добавить работу
                </Button>
            </Col>
            <EditedWorkForm {...editFormProps} onClose={closeForm} reload={() => query()} />
            <AddedWorkForm isOpen={isOpenAddForm} onClose={closeForm} reload={() => query()} />
        </Row>
    )
}

export default Works
