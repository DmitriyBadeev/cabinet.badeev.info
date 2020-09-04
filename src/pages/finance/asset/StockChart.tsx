import React from "react"
import { useStockCandlesQuery, CandleInterval, StockCandle } from "finance-types"
import LocalLoading from "components/loading/LocalLoading"
import { message } from "antd"
import CandleStickChartWithForceIndexIndicator from "components/charts/CandleStickChartWithForceIndex"
import { stockData } from "components/charts/CandleStickChartWithForceIndex"

type propTypes = {
    ticket: string
}

function parseData(data: (StockCandle | null)[]) {
    var parsedData = [] as stockData[]

    data.forEach((d: StockCandle | null) => {
        if (d !== null) {
            parsedData.push({
                open: d.open,
                close: d.close,
                high: d.high,
                low: d.low,
                value: d.value,
                volume: d.volume,
                date: new Date(d.dateTime),
            })
        }
    })

    return parsedData
}

const StockChart: React.FC<propTypes> = (props) => {
    const from = "01.01.2019"
    const interval = CandleInterval.Day

    const { data, loading, error } = useStockCandlesQuery({
        variables: {
            ticket: props.ticket,
            from,
            interval,
        },
    })

    if (loading) {
        return <LocalLoading />
    }

    if (error) message.error(error.message)

    const stockData = parseData(data?.stockCandles || [])
    console.log(stockData)

    return <CandleStickChartWithForceIndexIndicator stockData={stockData} />
}

export default StockChart
