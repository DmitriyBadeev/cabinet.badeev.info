import React, { useEffect, useState } from "react"
import { Line } from "@ant-design/charts"
import { observer } from "mobx-react"
import useStore from "store/useStore"
import LocalLoading from "components/loading/LocalLoading"
import { getShortStringDate } from "helpers/dateHelpers"

type DataItemType = {
    day: string
    views: number
    type: string
}

const CountViewsChart: React.FC = observer(() => {
    const { MetrikaService } = useStore()
    const [views, setViews] = useState<DataItemType[]>([])

    useEffect(() => {
        MetrikaService.getViewsByMonth().then((data) => {
            const dataItems: DataItemType[] = data.map((el, i) => {
                const now = new Date()
                now.setDate(now.getDate() - (30 - i))

                return { day: getShortStringDate(now.getTime()), type: "Просмотры", views: el }
            })

            setViews(dataItems)
        })
    }, [MetrikaService])

    const config = {
        data: views,
        xField: "day",
        yField: "views",
        seriesField: "type",
        forceFit: true,
        responsive: true,
    }

    if (MetrikaService.isLoadingViews) return <LocalLoading />

    return <Line {...config} />
})

export default CountViewsChart
