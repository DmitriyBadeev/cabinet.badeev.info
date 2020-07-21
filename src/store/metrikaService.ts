import axios from "axios"
import { action, observable } from "mobx"
import { YANDEX_TOKEN, COUNTER_ID } from "store/Config"

const METRIKA_VISITS = "ym:s:visits"
const METRIKA_USERS = "ym:s:users"
const METRIKA_HITS = "ym:s:hits"

const SEARCH_PHRASE = "sources_search_phrases"

const api = axios.create({
    baseURL: "https://api-metrika.yandex.net/",
    headers: {
        Authorization: `OAuth ${YANDEX_TOKEN}`,
    },
})

export type DimensionType = {
    favicon: string
    name: string
    url: string
}

export type SearchPhraseType = {
    key: string
    dimensions: DimensionType[]
    metrics: number[]
}

export type GeoType = {
    key: string
    dimensions: {
        name: string
    }[]
    metrics: number[]
}

export type ResultGeoType = {
    data: GeoType[]
    totals: number[]
}

export default class MetrikaService {
    @observable isLoadingPhrase = false
    @observable isLoadingViews = false
    @observable isLoadingGeo = false
    @observable isLoadingVisitsAndUsers = false

    @action async getSearchPhrase() {
        this.isLoadingPhrase = true

        const response = await api.get(
            `stat/v1/data?metrics=${METRIKA_VISITS}, ${METRIKA_USERS}&preset=${SEARCH_PHRASE}&id=${COUNTER_ID}`
        )

        const data: SearchPhraseType[] = response.data.data.map((el: any) => {
            el.key = el.dimensions[0].name

            return el
        })

        this.isLoadingPhrase = false
        return data
    }

    @action async getViewsByMonth() {
        this.isLoadingViews = true

        const response = await api.get(
            `/stat/v1/data/bytime?metrics=${METRIKA_HITS}&date1=30daysAgo&date2=today&group=day&id=${COUNTER_ID}`
        )

        const data: number[] = response.data.data[0].metrics[0]
        this.isLoadingViews = false

        return data
    }

    @action async getGeography() {
        this.isLoadingGeo = true

        const response = await api.get(`stat/v1/data?preset=geo_country&date1=30daysAgo&date2=today&id=${COUNTER_ID}`)
        const data: GeoType[] = response.data.data.map((el: GeoType, i: number) => {
            el.key = i.toString()
            return el
        })
        const totals: number[] = response.data.totals

        const result: ResultGeoType = {
            data,
            totals,
        }

        this.isLoadingGeo = false
        return result
    }

    @action async getVisitsAndUsersByMonth() {
        this.isLoadingVisitsAndUsers = true

        const respose = await api.get(
            `stat/v1/data/bytime?metrics=${METRIKA_VISITS}, ${METRIKA_USERS}&date1=30daysAgo&date2=today&group=day&id=${COUNTER_ID}`
        )

        const data: number[][] = respose.data.data[0].metrics
        this.isLoadingVisitsAndUsers = false
        return data
    }
}
