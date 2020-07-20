import React from "react"
import FadePage from "components/fade/FadePage"
import { ContentWrapper } from "common-styles"
import { Row, Col, Typography, List } from "antd"
import SearchPhrases from "components/metrika/SearchPhrases"
import CountViewsChart from "components/metrika/CountViewsChart"
import GeographyReport from "components/metrika/GeographyReport"
import CountVisitsAndUsers from "components/metrika/CountVisitsAndUsers"
import GlobalLink from "components/links/GlobalLink"

const { Title, Text } = Typography

const sourceOfMetrika = [
    {
        data: "Яндекс Метрика",
        link: "https://metrika.yandex.ru/dashboard?group=day&period=month&id=65373601",
    },
    {
        data: "Яндекс Вебмастер",
        link: "https://webmaster.yandex.ru/site/https:badeev.info:443/dashboard/",
    },
    {
        data: "Google Search Console",
        link: "https://search.google.com/search-console?resource_id=https%3A%2F%2Fbadeev.info%2F",
    },
    {
        data: "Google Аналитика",
        link: "https://analytics.google.com/analytics/web/#/report-home/a171598449w238580816p222994894",
    },
]

const MetrikaPage: React.FC = () => {
    return (
        <FadePage>
            <Row justify="space-between" gutter={[0, 30]}>
                <Col span={12}>
                    <ContentWrapper>
                        <Title level={4}>Количество визитов и посетителей</Title>
                        <CountVisitsAndUsers />
                    </ContentWrapper>
                </Col>
                <Col span={11}>
                    <ContentWrapper>
                        <Title level={4}>Количество просмотров</Title>
                        <CountViewsChart />
                    </ContentWrapper>
                </Col>
                <Col span={24}>
                    <ContentWrapper>
                        <Title level={4}>География</Title>
                        <GeographyReport />
                    </ContentWrapper>
                </Col>
                <Col span={12}>
                    <ContentWrapper>
                        <Title level={4}>Поисковые фразы</Title>
                        <SearchPhrases />
                    </ContentWrapper>
                </Col>
                <Col span={11}>
                    <ContentWrapper>
                        <Title level={4}>Ссылки на метрики</Title>
                        <List
                            dataSource={sourceOfMetrika}
                            bordered
                            size="small"
                            renderItem={(item) => {
                                return (
                                    <List.Item>
                                        <Text>
                                            <GlobalLink to={item.link}>{item.data}</GlobalLink>
                                        </Text>
                                    </List.Item>
                                )
                            }}
                        />
                    </ContentWrapper>
                </Col>
            </Row>
        </FadePage>
    )
}

export default MetrikaPage
