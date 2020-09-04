import React from "react"
import { toCurrency, toPercent } from "helpers/financeHelpers"
import { getNumericStringDate } from "helpers/dateHelpers"
import { Tooltip } from "antd"
import { ColorIndex } from "common-styles"
import { Link } from "react-router-dom"

export const stockColumns = [
    {
        key: "name",
        title: "Название",
        dataIndex: "name",
        width: 150,
        fixed: "left" as "left",
        render: (_items: any, item: any) => {
            return <Link to={`/finance/asset/${item.ticket}`}>{item.name}</Link>
        },
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
        sorter: (a: any, b: any) => a.amount - b.amount,
    },
    {
        key: "price",
        title: "Текущая цена",
        dataIndex: "price",
        align: "center" as "center",
        colSpan: 2,
        width: 120,
        sorter: (a: any, b: any) => a.price - b.price,
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
        width: 140,
        sorter: (a: any, b: any) => a.allPrice - b.allPrice,
        render: (_items: any, item: any) => {
            return <>{toCurrency(item.allPrice)}</>
        },
    },
    {
        key: "boughtPrice",
        title: "Потрачено",
        width: 130,
        dataIndex: "boughtPrice",
        sorter: (a: any, b: any) => a.boughtPrice - b.boughtPrice,
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
        sorter: (a: any, b: any) => a.paperProfit - b.paperProfit,
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
        sorter: (a: any, b: any) => a.paidDividends - b.paidDividends,
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
        render: (_items: any, item: any) => {
            return <Link to={`/finance/asset/${item.ticket}`}>{item.name}</Link>
        },
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
        width: 110,
        dataIndex: "amount",
        sorter: (a: any, b: any) => a.amount - b.amount,
    },
    {
        key: "price",
        title: "Текущая цена",
        dataIndex: "price",
        align: "center" as "center",
        colSpan: 2,
        width: 120,
        sorter: (a: any, b: any) => a.price - b.price,
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
        width: 140,
        sorter: (a: any, b: any) => a.allPrice - b.allPrice,
        render: (_items: any, item: any) => {
            return <>{toCurrency(item.allPrice)}</>
        },
    },
    {
        key: "boughtPrice",
        title: "Потрачено",
        width: 130,
        dataIndex: "boughtPrice",
        sorter: (a: any, b: any) => a.boughtPrice - b.boughtPrice,
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
        sorter: (a: any, b: any) => a.paperProfit - b.paperProfit,
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
        render: (_items: any, item: any) => {
            return <Link to={`/finance/asset/${item.ticket}`}>{item.name}</Link>
        },
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
        sorter: (a: any, b: any) => a.amount - b.amount,
    },
    {
        key: "price",
        title: "Текущая цена",
        dataIndex: "price",
        align: "center" as "center",
        colSpan: 2,
        width: 120,
        sorter: (a: any, b: any) => a.price - b.price,
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
        width: 140,
        sorter: (a: any, b: any) => a.allPrice - b.allPrice,
        render: (_items: any, item: any) => {
            return <>{toCurrency(item.allPrice)}</>
        },
    },
    {
        key: "boughtPrice",
        title: "Потрачено",
        width: 130,
        dataIndex: "boughtPrice",
        sorter: (a: any, b: any) => a.boughtPrice - b.boughtPrice,
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
        sorter: (a: any, b: any) => a.paperProfit - b.paperProfit,
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
        sorter: (a: any, b: any) => a.paidDividends - b.paidDividends,
        render: (_items: any, item: any) => toCurrency(item.paidPayments),
    },
    {
        key: "nearestPayment",
        title: "Выплата",
        width: 130,
        dataIndex: "nearestPayment",
        render: (_items: any, item: any) => {
            if (item.nearestPayment !== null) {
                const payment = item.nearestPayment.allPayment / 100

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

export const paymentsColumns = [
    {
        key: "name",
        title: "Название",
        dataIndex: "name",
        width: 130,
        fixed: "left" as "left",
    },
    {
        key: "paymentValue",
        title: "Выплата",
        dataIndex: "paymentValue",
        width: 110,
        sorter: (a: any, b: any) => a.paymentValue - b.paymentValue,
        render: (_items: any, item: any) => toCurrency(item.paymentValue),
    },
    {
        key: "allPayment",
        title: "Всего",
        dataIndex: "allPayment",
        width: 110,
        sorter: (a: any, b: any) => a.allPayment - b.allPayment,
        render: (_items: any, item: any) => toCurrency(item.allPayment),
    },
    {
        key: "registryCloseDate",
        title: "Дата",
        width: 130,
        dataIndex: "registryCloseDate",
        render: (_items: any, item: any) => <>{getNumericStringDate(item.registryCloseDate)}</>,
    },
    {
        key: "ticket",
        title: "Тикет",
        dataIndex: "ticket",
        width: 110,
    },
    {
        key: "amount",
        title: "Кол-во",
        dataIndex: "amount",
        width: 110,
        sorter: (a: any, b: any) => a.amount - b.amount,
    },
]
