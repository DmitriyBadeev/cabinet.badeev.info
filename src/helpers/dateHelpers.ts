export const getStringDate = (date: string | number) => {
    return new Date(date).toLocaleString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Europe/Moscow",
    })
}

export const getNumericStringDate = (date: string | number) => {
    return new Date(date).toLocaleString("ru", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timeZone: "Europe/Moscow",
    })
}

export const getStringDateAndTime = (date: string | number) => {
    return new Date(date).toLocaleString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    })
}

export const getShortStringDate = (date: string | number) => {
    return new Date(date).toLocaleString("ru", {
        month: "long",
        day: "numeric",
        timeZone: "Europe/Moscow",
    })
}

export const secondsToFormatString = (timestamp: number) => {
    timestamp = Math.floor(timestamp)
    var hours = Math.floor(timestamp / 60 / 60)
    var minutes = Math.floor(timestamp / 60) - hours * 60
    var seconds = timestamp % 60

    var formatted = [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
    ].join(":")

    return formatted
}

export const getDaysToEnd = () => {
    let now = new Date()
    let end = new Date("07.01.2022")

    let dif = end.getTime() - now.getTime()
    let days = Math.trunc(dif / 1000 / 60 / 60 / 24)
    return getCorrectForm(days)
}

export const getCorrectForm = (days: number) => {
    let lastDigit = days % 10
    let lastTwoDigits = days % 100
    if ((lastTwoDigits >= 5 && lastTwoDigits) <= 20 || lastDigit === 0 || lastDigit >= 5) return days + " дней"
    if (lastDigit === 1) return days + " день"
    if (lastDigit >= 2 && lastDigit <= 4) return days + " дня"
}

export const getAge = () => {
    let now = new Date().getFullYear()
    return now - 2000
}
