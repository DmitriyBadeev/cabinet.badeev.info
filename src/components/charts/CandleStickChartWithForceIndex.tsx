import React from "react"
import { format } from "d3-format"
import { timeFormat } from "d3-time-format"

import { ChartCanvas, Chart } from "react-stockcharts"
import {
    BarSeries,
    AreaSeries,
    AlternatingFillAreaSeries,
    CandlestickSeries,
    StraightLine,
} from "react-stockcharts/lib/series"
import { XAxis, YAxis } from "react-stockcharts/lib/axes"
import { CrossHairCursor, EdgeIndicator, MouseCoordinateX, MouseCoordinateY } from "react-stockcharts/lib/coordinates"

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale"
import { OHLCTooltip, SingleValueTooltip } from "react-stockcharts/lib/tooltip"
import { ema, forceIndex } from "react-stockcharts/lib/indicator"
import { fitWidth } from "react-stockcharts/lib/helper"
import { last } from "react-stockcharts/lib/utils"

export type stockData = {
    open: number
    close: number
    high: number
    low: number
    value: number
    volume: number
    date: Date
}

type propTypes = {
    stockData: stockData[]
    width: number
    ratio: number
    type: "svg" | "hybrid"
}

const CandleStickChartWithForceIndexIndicator: React.FC<propTypes> = ({ stockData, width, ratio, type = "svg" }) => {
    const fi = forceIndex()
        .merge((d: { fi: any }, c: any) => {
            d.fi = c
        })
        .accessor((d: { fi: any }) => d.fi)

    const fiEMA13 = ema()
        .id(1)
        .options({ windowSize: 13, sourcePath: "fi" })
        .merge((d: { fiEMA13: any }, c: any) => {
            d.fiEMA13 = c
        })
        .accessor((d: { fiEMA13: any }) => d.fiEMA13)

    const calculatedData = fiEMA13(fi(stockData))
    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor((d: { date: any }) => d.date)
    const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(calculatedData)

    const start = xAccessor(last(data))
    const end = xAccessor(data[Math.max(0, data.length - 150)])
    const xExtents = [start, end]

    return (
        <ChartCanvas
            height={700}
            width={width}
            ratio={ratio}
            margin={{ left: 60, right: 60, top: 20, bottom: 30 }}
            type={type}
            seriesName="MSFT"
            data={data}
            xScale={xScale}
            xAccessor={xAccessor}
            displayXAccessor={displayXAccessor}
            xExtents={xExtents}
            zoomEvent={false}
        >
            <Chart
                id={1}
                height={450}
                yExtents={(d: { high: any; low: any }) => [d.high, d.low]}
                padding={{ top: 10, right: 0, bottom: 20, left: 0 }}
            >
                <YAxis axisAt="right" orient="right" ticks={5} />
                <XAxis axisAt="bottom" orient="bottom" showTicks={false} outerTickSize={0} />
                <MouseCoordinateY at="right" orient="right" displayFormat={format(".2f")} />

                <CandlestickSeries
                    fill={(d: { close: number; open: number }) => (d.close > d.open ? "#75D728" : "#cf1322")}
                />

                <EdgeIndicator
                    itemType="last"
                    orient="right"
                    edgeAt="right"
                    yAccessor={(d: { close: any }) => d.close}
                    fill={(d: { close: number; open: number }) => (d.close > d.open ? "#75D728" : "#cf1322")}
                />
                <OHLCTooltip origin={[-40, -10]} />
            </Chart>
            <Chart
                id={2}
                height={150}
                yExtents={(d: { volume: any }) => d.volume}
                origin={(w: any, h: number) => [0, h - 350]}
            >
                <YAxis axisAt="left" orient="left" ticks={5} tickFormat={format(".2s")} />
                <MouseCoordinateY at="left" orient="left" displayFormat={format(".4s")} />

                <BarSeries
                    yAccessor={(d: { volume: any }) => d.volume}
                    fill={(d: { close: number; open: number }) => (d.close > d.open ? "#75D728" : "#cf1322")}
                    opacity={0.1}
                    strokeWidth={3}
                />
            </Chart>
            <Chart
                id={3}
                height={100}
                yExtents={fi.accessor()}
                origin={(w: any, h: number) => [0, h - 200]}
                padding={{ top: 10, right: 0, bottom: 10, left: 0 }}
            >
                <XAxis axisAt="bottom" orient="bottom" showTicks={false} outerTickSize={0} />
                <YAxis axisAt="right" orient="right" ticks={4} tickFormat={format(".2s")} />
                <MouseCoordinateY at="right" orient="right" displayFormat={format(".4s")} />

                <AreaSeries baseAt={(scale: (arg0: number) => any) => scale(0)} yAccessor={fi.accessor()} />
                <StraightLine yValue={0} />

                <SingleValueTooltip
                    yAccessor={fi.accessor()}
                    yLabel="ForceIndex (1)"
                    yDisplayFormat={format(".4s")}
                    origin={[-40, 15]}
                />
            </Chart>
            <Chart
                id={4}
                height={100}
                yExtents={fiEMA13.accessor()}
                origin={(w: any, h: number) => [0, h - 100]}
                padding={{ top: 10, right: 0, bottom: 10, left: 0 }}
            >
                <XAxis axisAt="bottom" orient="bottom" />
                <YAxis axisAt="right" orient="right" ticks={4} tickFormat={format(".2s")} />

                <MouseCoordinateX at="bottom" orient="bottom" displayFormat={timeFormat("%Y-%m-%d")} />
                <MouseCoordinateY at="right" orient="right" displayFormat={format(".4s")} />

                {/* <AreaSeries baseAt={(scale: any) => scale(0)} yAccessor={fiEMA13.accessor()} /> */}
                <AlternatingFillAreaSeries baseAt={0} yAccessor={fiEMA13.accessor()} />
                <StraightLine yValue={0} />

                <SingleValueTooltip
                    yAccessor={fiEMA13.accessor()}
                    yLabel={`ForceIndex (${fiEMA13.options().windowSize})`}
                    yDisplayFormat={format(".4s")}
                    origin={[-40, 15]}
                />
            </Chart>
            <CrossHairCursor />
        </ChartCanvas>
    )
}

export default fitWidth(CandleStickChartWithForceIndexIndicator)
