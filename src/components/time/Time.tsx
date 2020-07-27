import React, { useEffect, useState } from "react"
import { Typography } from "antd"
import moment from "moment"

const { Text } = Typography

const Time: React.FC = () => {
    const [time, setTime] = useState("")

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(moment().format("DD MMMM YYYY, HH:mm:ss, dddd"))
        }, 500)

        return () => clearInterval(timerId)
    }, [])

    return <Text>{time}</Text>
}

export default Time
