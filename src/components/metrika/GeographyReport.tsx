import React, { useEffect, useState } from "react"
import { observer } from "mobx-react"
import useStore from "store/useStore"
import { ResultGeoType } from "store/metrikaService"
import LocalLoading from "components/loading/LocalLoading"
import { Table, Space, Typography } from "antd"
import { secondsToFormatString } from "helpers/dateHelpers"

const { Text } = Typography

const columns = [
    {
        title: "Регион",
        dataIndex: "dimensions",
        key: "region",
        render: (dimension: { name: string }[]) => {
            return (
                <Space>
                    <Text>{dimension[0].name || "Не определено"}</Text> →
                    <Text>{dimension[1].name || "Не определено"}</Text> →
                    <Text>{dimension[2].name || "Не определено"}</Text>
                </Space>
            )
        },
    },
    {
        title: "Визиты",
        dataIndex: "metrics",
        key: "visits",
        render: (metric: number[]) => metric[0],
    },
    {
        title: "Посетители",
        dataIndex: "metrics",
        key: "users",
        render: (metric: number[]) => metric[1],
    },
    {
        title: "Отказы",
        dataIndex: "metrics",
        key: "rejection",
        render: (metric: number[]) => metric[2].toFixed(2),
    },
    {
        title: "Глубина просмотра",
        dataIndex: "metrics",
        key: "depth",
        render: (metric: number[]) => metric[3].toFixed(2),
    },
    {
        title: "Время на сайте",
        dataIndex: "metrics",
        key: "time",
        render: (metric: number[]) => secondsToFormatString(metric[4]),
    },
]

const GeographyReport: React.FC = observer(() => {
    const { MetrikaService } = useStore()
    const [report, setReport] = useState<ResultGeoType>()

    useEffect(() => {
        MetrikaService.getGeography().then((data) => setReport(data))
    }, [MetrikaService])

    if (MetrikaService.isLoadingGeo) return <LocalLoading />

    return (
        <Table
            columns={columns}
            dataSource={report?.data}
            size="middle"
            pagination={false}
            summary={() => {
                return (
                    <Table.Summary.Row>
                        <Table.Summary.Cell index={0}>
                            <Text strong>Итого и средние</Text>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={1}>
                            <Text strong>{report?.totals[0]}</Text>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={2}>
                            <Text strong>{report?.totals[1]}</Text>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={3}>
                            <Text strong>{report?.totals[2].toFixed(2)}</Text>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={4}>
                            <Text strong>{report?.totals[3].toFixed(2)}</Text>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={4}>
                            <Text strong>{secondsToFormatString(report?.totals[4] || 0)}</Text>
                        </Table.Summary.Cell>
                    </Table.Summary.Row>
                )
            }}
        />
    )
})

export default GeographyReport
