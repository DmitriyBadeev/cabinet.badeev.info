import React, { useEffect, useState } from "react"
import { observer } from "mobx-react"
import useStore from "store/useStore"
import LocalLoading from "components/loading/LocalLoading"
import { SearchPhraseType, DimensionType } from "store/metrikaService"
import { Space, Table } from "antd"
import GlobalLink from "components/links/GlobalLink"

const columns = [
    {
        title: "Поисковая фраза",
        dataIndex: "dimensions",
        key: "name",
        render: (dimension: DimensionType[]) => {
            return (
                <Space>
                    <img src={`https://${dimension[0].favicon}/favicon.ico`} alt="Поисковая система" />
                    <GlobalLink to={dimension[0].url}>{dimension[0].name}</GlobalLink>
                </Space>
            )
        },
    },
    {
        title: "Посетители",
        dataIndex: "metrics",
        key: "users",
        render: (metric: number[]) => metric[0],
        sorter: (a: SearchPhraseType, b: SearchPhraseType) => a.metrics[0] - b.metrics[0],
    },
    {
        title: "Визиты",
        dataIndex: "metrics",
        key: "visits",
        render: (metric: number[]) => metric[1],
        sorter: (a: SearchPhraseType, b: SearchPhraseType) => a.metrics[1] - b.metrics[1],
    },
]

const SearchPhrase: React.FC = observer(() => {
    const { MetrikaService } = useStore()
    const [searchPhrases, setSearchPhrases] = useState<SearchPhraseType[]>([])

    useEffect(() => {
        MetrikaService.getSearchPhrase().then((data) => setSearchPhrases(data))
    }, [MetrikaService])

    if (MetrikaService.isLoadingPhrase) return <LocalLoading />

    return <Table columns={columns} dataSource={searchPhrases} size="small" pagination={false} />
})

export default SearchPhrase
