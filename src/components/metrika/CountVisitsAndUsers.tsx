import React, { useEffect, useState } from "react"
import { observer } from "mobx-react"
import useStore from "store/useStore"
import LocalLoading from "components/loading/LocalLoading"
import { Line } from "@ant-design/charts"
import { getShortStringDate } from "helpers/dateHelpers"

type DataItemType = {
    day: string
    type: "Посетители" | "Визиты"
    value: number
}

const CountVisitsAndUsers: React.FC = observer(() => {
    const { MetrikaService } = useStore()
    const [data, setData] = useState<DataItemType[]>([])

    useEffect(() => {
        MetrikaService.getVisitsAndUsersByMonth().then((data) => {
            const dataVisits: DataItemType[] = data[0].map((el, i) => {
                const now = new Date()
                now.setDate(now.getDate() - (30 - i))

                return { day: getShortStringDate(now.getTime()), type: "Визиты", value: el }
            })

            const dataUsers: DataItemType[] = data[1].map((el, i) => {
                const now = new Date()
                now.setDate(now.getDate() - (30 - i))

                return { day: getShortStringDate(now.getTime()), type: "Посетители", value: el }
            })

            setData([...dataVisits, ...dataUsers])
        })
    }, [MetrikaService])

    const config = {
        data: data,
        xField: "day",
        yField: "value",
        seriesField: "type",
        forceFit: true,
        responsive: true,
    }

    if (MetrikaService.isLoadingVisitsAndUsers) return <LocalLoading />

    return <Line {...config} />
})

export default CountVisitsAndUsers
