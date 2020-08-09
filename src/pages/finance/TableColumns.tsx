import React from "react"
import styled from "styled-components"
import { toCurrency, toPercent } from "helpers/financeHelpers"
import { getNumericStringDate } from "helpers/dateHelpers"
import { Tooltip } from "antd"

type IndexProp = {
    index: number
}

const ColorIndex = styled.span<IndexProp>`
    color: ${(props) => (props.index > 0 ? props.theme.green : props.theme.red)};

    &::before {
        content: ${(props) => (props.index > 0 ? `"+"` : `""`)};
    }
`

export const stockColumns = [
    {
        key: "name",
        title: "Название",
        dataIndex: "name",
        width: 150,
        fixed: "left" as "left",
    },
    {
        key: "ticket",
        title: "Тикет",
        dataIndex: "ticket",
        width: 100,
        fixed: "left" as "left",
    },
    {
        key: "amount",
        title: "Кол-во",
        width: 100,
        dataIndex: "amount",
    },
    {
        key: "price",
        title: "Текущая цена",
        dataIndex: "price",
        align: "center" as "center",
        colSpan: 2,
        width: 120,
        render: (_items: any, item: any) => {
            return <>{toCurrency(item.price)}</>
        },
    },
    {
        key: "priceChange",
        colSpan: 0,
        width: 100,
        align: "left" as "left",
        render: (item: any) => {
            return <ColorIndex index={item.priceChange}>{toPercent(item.priceChange)}</ColorIndex>
        },
    },
    {
        key: "allPrice",
        title: "Общая цена",
        dataIndex: "allPrice",
        width: 130,
        render: (_items: any, item: any) => {
            return <>{toCurrency(item.allPrice)}</>
        },
    },
    {
        key: "boughtPrice",
        title: "Потрачено",
        width: 130,
        dataIndex: "boughtPrice",
        render: (_items: any, item: any) => {
            return <>{toCurrency(item.boughtPrice)}</>
        },
    },
    {
        key: "paperProfit",
        title: "Бумажная прибыль",
        dataIndex: "paperProfit",
        width: 130,
        align: "center" as "center",
        colSpan: 2,
        render: (_items: any, item: any) => {
            return <ColorIndex index={item.paperProfit}>{toCurrency(item.paperProfit)}</ColorIndex>
        },
    },
    {
        key: "paperProfitPercent",
        colSpan: 0,
        width: 100,
        align: "left" as "left",
        render: (items: any) => {
            return <ColorIndex index={items.paperProfitPercent}>{toPercent(items.paperProfitPercent)}</ColorIndex>
        },
    },
    {
        key: "paidDividends",
        title: "Дивиденды",
        width: 130,
        dataIndex: "paidDividends",
        render: (_items: any, item: any) => toCurrency(item.paidDividends),
    },
    {
        key: "nearestDividend",
        title: "Отсечка",
        width: 130,
        dataIndex: "nearestDividend",
        render: (_items: any, item: any) => {
            if (item.nearestDividend !== null) {
                const payment = (item.nearestDividend.paymentValue / 100) * item.amount

                return (
                    <Tooltip
                        title={`Ожидаемая выплата: ${payment.toLocaleString("ru-RU", {
                            style: "currency",
                            currency: item.nearestDividend.currencyId,
                        })}`}
                    >
                        <span>{getNumericStringDate(item.nearestDividend.registryCloseDate)}</span>
                    </Tooltip>
                )
            }

            return "—"
        },
    },
    {
        key: "updateTime",
        title: "Время",
        width: 130,
        dataIndex: "updateTime",
    },
]

export const fondColumns = [
    {
        key: "name",
        title: "Название",
        dataIndex: "name",
        width: 150,
        fixed: "left" as "left",
    },
    {
        key: "ticket",
        title: "Тикет",
        dataIndex: "ticket",
        width: 100,
        fixed: "left" as "left",
    },
    {
        key: "amount",
        title: "Кол-во",
        width: 100,
        dataIndex: "amount",
    },
    {
        key: "price",
        title: "Текущая цена",
        dataIndex: "price",
        align: "center" as "center",
        colSpan: 2,
        width: 120,
        render: (_items: any, item: any) => {
            return <>{toCurrency(item.price)}</>
        },
    },
    {
        key: "priceChange",
        colSpan: 0,
        width: 100,
        align: "left" as "left",
        render: (item: any) => {
            return <ColorIndex index={item.priceChange}>{toPercent(item.priceChange)}</ColorIndex>
        },
    },
    {
        key: "allPrice",
        title: "Общая цена",
        dataIndex: "allPrice",
        width: 130,
        render: (_items: any, item: any) => {
            return <>{toCurrency(item.allPrice)}</>
        },
    },
    {
        key: "boughtPrice",
        title: "Потрачено",
        width: 130,
        dataIndex: "boughtPrice",
        render: (_items: any, item: any) => {
            return <>{toCurrency(item.boughtPrice)}</>
        },
    },
    {
        key: "paperProfit",
        title: "Бумажная прибыль",
        dataIndex: "paperProfit",
        width: 130,
        align: "center" as "center",
        colSpan: 2,
        render: (_items: any, item: any) => {
            return <ColorIndex index={item.paperProfit}>{toCurrency(item.paperProfit)}</ColorIndex>
        },
    },
    {
        key: "paperProfitPercent",
        colSpan: 0,
        width: 100,
        align: "left" as "left",
        render: (items: any) => {
            return <ColorIndex index={items.paperProfitPercent}>{toPercent(items.paperProfitPercent)}</ColorIndex>
        },
    },
    {
        key: "updateTime",
        title: "Время",
        width: 130,
        dataIndex: "updateTime",
    },
]

export const bondColumns = [
    {
        key: "name",
        title: "Название",
        dataIndex: "name",
        width: 150,
        fixed: "left" as "left",
    },
    {
        key: "ticket",
        title: "Тикет",
        dataIndex: "ticket",
        width: 150,
        fixed: "left" as "left",
    },
    {
        key: "amount",
        title: "Кол-во",
        width: 100,
        dataIndex: "amount",
    },
    {
        key: "price",
        title: "Текущая цена",
        dataIndex: "price",
        align: "center" as "center",
        colSpan: 2,
        width: 120,
        render: (_items: any, item: any) => {
            return <>{toPercent(item.price)}</>
        },
    },
    {
        key: "priceChange",
        colSpan: 0,
        width: 100,
        align: "left" as "left",
        render: (item: any) => {
            return <ColorIndex index={item.priceChange}>{toPercent(item.priceChange)}</ColorIndex>
        },
    },
    {
        key: "allPrice",
        title: "Общая цена",
        dataIndex: "allPrice",
        width: 130,
        render: (_items: any, item: any) => {
            return <>{toCurrency(item.allPrice)}</>
        },
    },
    {
        key: "boughtPrice",
        title: "Потрачено",
        width: 130,
        dataIndex: "boughtPrice",
        render: (_items: any, item: any) => {
            return <>{toCurrency(item.boughtPrice)}</>
        },
    },
    {
        key: "paperProfit",
        title: "Бумажная прибыль",
        dataIndex: "paperProfit",
        width: 130,
        align: "center" as "center",
        colSpan: 2,
        render: (_items: any, item: any) => {
            return <ColorIndex index={item.paperProfit}>{toCurrency(item.paperProfit)}</ColorIndex>
        },
    },
    {
        key: "paperProfitPercent",
        colSpan: 0,
        width: 100,
        align: "left" as "left",
        render: (items: any) => {
            return <ColorIndex index={items.paperProfitPercent}>{toPercent(items.paperProfitPercent)}</ColorIndex>
        },
    },
    {
        key: "paidPayments",
        title: "Выплачено",
        width: 130,
        dataIndex: "paidPayments",
        render: (_items: any, item: any) => toCurrency(item.paidPayments),
    },
    {
        key: "nearestPayment",
        title: "Выплата",
        width: 130,
        dataIndex: "nearestPayment",
        render: (_items: any, item: any) => {
            if (item.nearestPayment !== null) {
                const payment = (item.nearestPayment.paymentValue / 100) * item.amount

                return (
                    <Tooltip
                        title={`Ожидаемая выплата: ${payment.toLocaleString("ru-RU", {
                            style: "currency",
                            currency: item.nearestPayment.currencyId,
                        })}`}
                    >
                        <span>{getNumericStringDate(item.nearestPayment.registryCloseDate)}</span>
                    </Tooltip>
                )
            }

            return "—"
        },
    },
    {
        key: "amortization",
        title: "Погашение",
        width: 130,
        dataIndex: "amortization",
        render: (_items: any, item: any) => {
            if (item.hasAmortized) {
                return <>Погашено</>
            }

            return <>{getNumericStringDate(item.amortizationDate)}</>
        },
    },
    {
        key: "updateTime",
        title: "Время",
        width: 130,
        dataIndex: "updateTime",
    },
]
