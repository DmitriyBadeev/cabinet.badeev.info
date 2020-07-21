import React, { useEffect, useState } from "react"
import { getStringDateAndTime } from "helpers/dateHelpers"
import { Typography } from "antd"

const { Text } = Typography

const Time: React.FC = () => {
    const [time, setTime] = useState("")

    useEffect(() => {
        const timerId = setInterval(() => {
            const time = Date.now()
            const timeToString = getStringDateAndTime(time)
            setTime(timeToString)
        }, 500)

        return () => clearInterval(timerId)
    }, [])

    return <Text>{time}</Text>
}

export default Time
