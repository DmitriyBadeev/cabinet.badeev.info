import React from "react"
import { Row, Col, Button, Drawer, Form, Input, DatePicker, Divider } from "antd"
import Loading from "components/loading/Loading"
import moment from "moment"
import ru_RU from "antd/es/date-picker/locale/ru_RU"
import TextArea from "antd/lib/input/TextArea"
import { Store } from "antd/lib/form/interface"
import AddAuthorForm from "./AddAuthorForm"

type WorkFormPropTypes = {
    isOpen: boolean
    formTitle: string
    onClose: () => void
    onFinish: (values: Store) => void
    buttonTitle: string
    loading: boolean
    loadingUpdate: boolean
    id?: number
    titleWork?: string
    link?: string
    date?: string
    shortDescription?: string
    imgPath?: string
    task?: string
    html?: string
    authors?: AuthorType[]
}

export type AuthorType = {
    id?: number
    name: string | null | undefined
    role: string | null | undefined
    link: string | null | undefined
}

const WorksForm: React.FC<WorkFormPropTypes> = (props) => {
    const updateWork = (values: Store) => {
        props.onFinish(values)
    }

    const getForm = () => {
        if (props.loading) return <Loading />

        return (
            <Form layout="vertical" onFinish={updateWork}>
                <Row gutter={16}>
                    <Col span={22}>
                        <Form.Item
                            name="title"
                            label="Заголовок"
                            rules={[{ required: true, message: "Заголовок не может быть пустым" }]}
                            initialValue={props.titleWork}
                        >
                            <Input placeholder="Заголовок блока" />
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Form.Item name="id" label="ID" initialValue={props.id}>
                            <Input placeholder="ID" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="shortDescription"
                            label="Краткое описание"
                            initialValue={props.shortDescription}
                        >
                            <TextArea placeholder="Краткое описание" rows={5} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="imgPath"
                            label="Ссылка на превью изображение"
                            initialValue={props.imgPath}
                            rules={[{ required: true, message: "Нужно превью изображение" }]}
                        >
                            <Input placeholder="Ссылка" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item name="task" label="Задача" initialValue={props.task}>
                            <TextArea placeholder="Задача" rows={3} />
                        </Form.Item>
                    </Col>
                    <Col span={19}>
                        <Form.Item name="link" label="Ссылка" initialValue={props.link}>
                            <Input placeholder="Ссылка" />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name="date"
                            label="Дата"
                            initialValue={moment(props.date, "YYYY-MM-DD")}
                            rules={[{ required: true, message: "Выберите дату" }]}
                        >
                            <DatePicker format="DD.MM.YYYY" locale={ru_RU} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item name="html" label="HTML-контент" initialValue={props.html}>
                            <TextArea placeholder="Контент" rows={8} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Button type="primary" htmlType="submit" loading={props.loadingUpdate}>
                            {props.buttonTitle}
                        </Button>
                    </Col>
                    <Col span={24}>
                        <Divider />
                    </Col>
                </Row>
                {props.id && <AddAuthorForm id={props.id} authors={props.authors || []} />}
            </Form>
        )
    }

    return (
        <Drawer visible={props.isOpen} title={props.formTitle} width={800} onClose={props.onClose} destroyOnClose>
            {getForm()}
        </Drawer>
    )
}

export default WorksForm
