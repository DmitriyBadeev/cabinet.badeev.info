export const toCurrency = (number: number) => {
    return number.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })
}

export const toPercent = (number: number) => {
    return `${number.toLocaleString("ru-RU")} %`
}
