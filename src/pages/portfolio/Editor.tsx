import React, { useState, useEffect } from "react"
import {
    Row,
    Col,
    Button,
    Drawer,
    Form,
    Input,
    Select,
    Divider,
    Dropdown,
    Menu,
    Table,
    Popconfirm,
    Collapse,
    Space,
} from "antd"
import Parser from "html-react-parser"
import { SortableContainer, SortableElement, SortableHandle } from "react-sortable-hoc"
import {
    PlusOutlined,
    MinusCircleOutlined,
    EditOutlined,
    DeleteOutlined,
    DownOutlined,
    MenuOutlined,
    DragOutlined,
} from "@ant-design/icons"
import arrayMove from "array-move"
import { observer } from "mobx-react"
import useStore from "store/useStore"
import CopyButton from "components/common/CopyButton"

const { Option } = Select

const Editor: React.FC = observer(() => {
    const { EditorService } = useStore()
    const [content, setContent] = useState<JSX.Element | JSX.Element[]>(<div />)

    useEffect(() => {
        setContent(Parser(EditorService.render))
    }, [EditorService])

    const closeForm = () => {
        setFormProps({
            isOpen: false,
            title: "",
            onClose: closeForm,
        })
        setContent(Parser(EditorService.render))
    }

    const [formProps, setFormProps] = useState<EditorFormPropTypes>({
        isOpen: false,
        title: "",
        onClose: closeForm,
    })

    const getMenu = () => {
        return (
            <Menu
                onClick={(e) => {
                    EditorService.createBlock(EditorService.blockTypes[Number(e.key)], "Новый блок")
                    EditorService.openBlock(EditorService.blocks.length - 1)
                    setFormProps({ isOpen: true, title: "Добавление блока", onClose: closeForm })
                }}
            >
                {EditorService.blockTypes.map((el, i) => (
                    <Menu.Item key={i}>{el}</Menu.Item>
                ))}
            </Menu>
        )
    }

    const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: "move", color: "#999" }} />)
    const SortableItem = SortableElement((props: any) => <tr {...props} />)
    const SortContainer = SortableContainer((props: any) => <tbody {...props} />)

    const DraggableContainer = (props: any) => (
        <SortContainer useDragHandle helperClass="row-dragging" onSortEnd={onSortEnd} {...props} />
    )

    const onSortEnd = ({ oldIndex, newIndex }: any) => {
        if (oldIndex !== newIndex) {
            const newData = arrayMove(EditorService.blocks, oldIndex, newIndex).filter((el) => !!el)
            EditorService.blocks = newData
            setContent(Parser(EditorService.render))
        }
    }
    const DraggableBodyRow = ({ ...restProps }) => {
        const index = EditorService.blocks.findIndex((x) => x.index === restProps["data-row-key"])
        return <SortableItem index={index} {...restProps} />
    }

    const columns = [
        {
            key: "sort",
            title: <DragOutlined />,
            align: "center" as "center",
            dataIndex: "sort",
            width: 60,
            className: "drag-visible",
            render: () => <DragHandle />,
        },
        {
            key: "title",
            title: "Заголовок",
            dataIndex: "title",
            className: "drag-visible",
        },
        {
            key: "type",
            title: "Тип блока",
            dataIndex: "type",
            className: "drag-visible",
        },
        {
            key: "actions",
            title: "Действия",
            colSpan: 2,
            align: "center" as "center",
            width: 150,
            render: (_items: any, _item: any, blockIndex: number) => (
                <Button
                    key="edit"
                    type="link"
                    onClick={() => {
                        EditorService.openBlock(blockIndex)
                        setFormProps({
                            isOpen: true,
                            title: "Редактирование блока",
                            onClose: closeForm,
                        })
                    }}
                >
                    <EditOutlined /> Редактировать
                </Button>
            ),
        },
        {
            key: "remove",
            align: "center" as "center",
            width: 150,
            colSpan: 0,
            render: (_items: any, _item: any, blockIndex: number) => (
                <Popconfirm
                    title="Точно удалить?"
                    cancelText="Отмена"
                    okText="Удалить"
                    onConfirm={() => {
                        EditorService.removeBlock(blockIndex)
                        setContent(Parser(EditorService.render))
                    }}
                >
                    <Button danger={true} type="link" key="remove">
                        <DeleteOutlined /> Удалить
                    </Button>
                </Popconfirm>
            ),
        },
    ]

    return (
        <Row justify="center" gutter={[16, 16]}>
            <Col span={22}>
                <Collapse defaultActiveKey={["1"]} ghost>
                    <Collapse.Panel header="Редактор" key="1">
                        <Table
                            pagination={false}
                            dataSource={EditorService.blocks}
                            columns={columns}
                            rowKey="index"
                            components={{
                                body: {
                                    wrapper: DraggableContainer,
                                    row: DraggableBodyRow,
                                },
                            }}
                        />
                    </Collapse.Panel>
                </Collapse>
            </Col>
            <Col span={21}>
                <Space>
                    <Dropdown overlay={getMenu()}>
                        <Button type="primary">
                            Добавить <DownOutlined />
                        </Button>
                    </Dropdown>
                    <CopyButton copyText={EditorService.render} textButton="Копировать HTML" />
                </Space>
            </Col>
            <Col span={21}>
                <Divider />
            </Col>
            <Col span={24}>{content}</Col>
            <EditorForm {...formProps} />
        </Row>
    )
})

export default Editor

type EditorFormPropTypes = {
    isOpen: boolean
    title?: string
    onClose: () => void
}

const EditorForm: React.FC<EditorFormPropTypes> = observer((props) => {
    const { EditorService } = useStore()

    return (
        <Drawer visible={props.isOpen} title={props.title} width={800} onClose={props.onClose} destroyOnClose>
            <Form layout="vertical">
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="title"
                            label="Заголовок"
                            rules={[{ required: true, message: "Введите заголовок" }]}
                            initialValue={EditorService.currentBlock?.title}
                        >
                            <Input
                                placeholder="Заголовок блока"
                                onChange={(e) => {
                                    if (EditorService.currentBlock) EditorService.currentBlock.title = e.target.value
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="typeBlock"
                            label="Тип блока"
                            rules={[{ required: true, message: "Выберите тип блока" }]}
                            initialValue={EditorService.currentBlock?.type}
                        >
                            <Select placeholder="Выберите тип блока" disabled>
                                {EditorService.blockTypes.map((el, i) => (
                                    <Option key={i} value={i}>
                                        {el}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                {EditorService.currentBlock?.elements.map((el, i) => (
                    <Row gutter={16} key={i}>
                        <Col span={4}>
                            <Form.Item
                                name={`typeEl_${i}`}
                                label="Элемент"
                                rules={[{ required: true, message: "Выберите тип элемента" }]}
                                initialValue={el.type?.type}
                            >
                                <Select
                                    placeholder="Выберите тип элемента"
                                    onChange={(e) =>
                                        (el.type = EditorService.currentBlock?.elementTypes[Number(e)] || null)
                                    }
                                >
                                    {EditorService.currentBlock?.elementTypes.map((element, i) => (
                                        <Option key={i} value={i}>
                                            {element.type}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={19}>
                            <Form.Item
                                name={`contentEl_${i}`}
                                label="Содержимое"
                                rules={[{ required: true, message: "Нет содержимого" }]}
                                initialValue={el.content}
                            >
                                <Input.TextArea
                                    rows={5}
                                    placeholder="Содержимое"
                                    value={el.content}
                                    onChange={(e) => (el.content = e.target.value)}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={1}>
                            <MinusCircleOutlined
                                onClick={() => {
                                    EditorService.currentBlock?.removeElement(i)
                                }}
                            />
                        </Col>
                    </Row>
                ))}
                <Button
                    type="dashed"
                    onClick={() => {
                        EditorService.currentBlock?.createElement(0, "")
                    }}
                >
                    <PlusOutlined />
                    Добавить элемент
                </Button>
            </Form>
        </Drawer>
    )
})
