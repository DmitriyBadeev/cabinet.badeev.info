import React from "react"
import { Row, Col, Select, message } from "antd"
import { useSearchAssetLazyQuery } from "finance-types"
import { SearchOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

const { Option } = Select

const SearchAsset: React.FC = () => {
    const [query, { data, loading, error }] = useSearchAssetLazyQuery()

    if (error) message.error(error.message)

    const searchData = data?.searchAsset

    const sendRequest = (value: string) => {
        if (value === null || value === "") {
            return
        }

        query({ variables: { ticket: value } })
    }

    return (
        <Row gutter={[0, 20]}>
            <Col span={8}>
                <Select
                    showSearch
                    loading={loading}
                    suffixIcon={<SearchOutlined />}
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    value={searchData?.ticket ?? undefined}
                    style={{ width: "100%" }}
                    placeholder={
                        <>
                            <SearchOutlined /> Поиск по тикету
                        </>
                    }
                    notFoundContent={null}
                    filterOption={false}
                    onSearch={sendRequest}
                >
                    {searchData && (
                        <Option value={searchData?.ticket ?? ""}>
                            <Link to={`/finance/asset/${searchData.ticket}`}>{searchData?.name}</Link>
                        </Option>
                    )}
                </Select>
            </Col>
        </Row>
    )
}

export default SearchAsset
