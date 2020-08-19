import gql from "graphql-tag"
import * as ApolloReactCommon from "@apollo/react-common"
import * as ApolloReactHooks from "@apollo/react-hooks"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    /** The multiplier path scalar represents a valid GraphQL multiplier path string. */
    MultiplierPath: any
    /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
    DateTime: any
}

export type Queries = {
    __typename?: "Queries"
    allAssetOperations?: Maybe<Array<Maybe<AssetOperation>>>
    allAssetPricesReport?: Maybe<AssetPricesReport>
    allCurrencyOperations?: Maybe<Array<Maybe<CurrencyOperation>>>
    allFuturePaymentsReport?: Maybe<Array<Maybe<PaymentDataReport>>>
    allPortfoliosReport?: Maybe<AllPortfoliosReport>
    assetActions?: Maybe<Array<Maybe<AssetAction>>>
    assetTypes?: Maybe<Array<Maybe<AssetType>>>
    bondReports?: Maybe<Array<Maybe<BondReport>>>
    currencyActions?: Maybe<Array<Maybe<CurrencyAction>>>
    currentUserBalance: Scalars["Float"]
    fondReports?: Maybe<Array<Maybe<FondReport>>>
    marketQuotes?: Maybe<Array<Maybe<CommonMarketQuote>>>
    portfolios?: Maybe<Array<Maybe<Portfolio>>>
    secretData?: Maybe<Scalars["String"]>
    stockReports?: Maybe<Array<Maybe<StockReport>>>
    test?: Maybe<Scalars["String"]>
}

export type QueriesAllAssetOperationsArgs = {
    portfolioId: Scalars["Int"]
}

export type QueriesAllCurrencyOperationsArgs = {
    portfolioId: Scalars["Int"]
}

export type QueriesBondReportsArgs = {
    portfolioId: Scalars["Int"]
}

export type QueriesFondReportsArgs = {
    portfolioId: Scalars["Int"]
}

export type QueriesStockReportsArgs = {
    portfolioId: Scalars["Int"]
}

export type Mutations = {
    __typename?: "Mutations"
    buyAsset?: Maybe<OperationResult>
    createPortfolio?: Maybe<OperationResult>
    refillBalance?: Maybe<OperationResult>
    sellAsset?: Maybe<OperationResult>
    startAssetReportsUpdate?: Maybe<Scalars["String"]>
    startPortfoliosReportUpdate?: Maybe<Scalars["String"]>
    stopUpdate?: Maybe<Scalars["String"]>
    withdrawalBalance?: Maybe<OperationResult>
}

export type MutationsBuyAssetArgs = {
    buyAssetInput?: Maybe<BuyAssetInput>
}

export type MutationsCreatePortfolioArgs = {
    name?: Maybe<Scalars["String"]>
}

export type MutationsRefillBalanceArgs = {
    refillBalanceInput?: Maybe<RefillBalanceInput>
}

export type MutationsSellAssetArgs = {
    sellAssetInput?: Maybe<SellAssetInput>
}

export type MutationsStopUpdateArgs = {
    handlerId?: Maybe<Scalars["String"]>
}

export type MutationsWithdrawalBalanceArgs = {
    withdrawalBalanceInput?: Maybe<WithdrawalBalanceInput>
}

export type Subscriptions = {
    __typename?: "Subscriptions"
    onUpdateBondReports?: Maybe<Array<Maybe<BondReport>>>
    onUpdateFondReports?: Maybe<Array<Maybe<FondReport>>>
    onUpdatePortfoliosReport?: Maybe<AllPortfoliosReport>
    onUpdatePricesReport?: Maybe<AssetPricesReport>
    onUpdateStockReports?: Maybe<Array<Maybe<StockReport>>>
}

export type SubscriptionsOnUpdateBondReportsArgs = {
    portfolioId: Scalars["Int"]
}

export type SubscriptionsOnUpdateFondReportsArgs = {
    portfolioId: Scalars["Int"]
}

export type SubscriptionsOnUpdateStockReportsArgs = {
    portfolioId: Scalars["Int"]
}

export type Portfolio = {
    __typename?: "Portfolio"
    assetOperations?: Maybe<Array<Maybe<AssetOperation>>>
    id: Scalars["Int"]
    name?: Maybe<Scalars["String"]>
    userId: Scalars["Int"]
}

export type AllPortfoliosReport = {
    __typename?: "AllPortfoliosReport"
    allCost: Scalars["Float"]
    allInvestSum: Scalars["Float"]
    allPaperProfit: Scalars["Float"]
    allPaperProfitPercent: Scalars["Float"]
    allPaymentProfit: Scalars["Float"]
    allPaymentProfitPercent: Scalars["Float"]
    allUserBalance: Scalars["Float"]
}

export type StockReport = {
    __typename?: "StockReport"
    allPrice: Scalars["Float"]
    amount: Scalars["Int"]
    boughtPrice: Scalars["Float"]
    name?: Maybe<Scalars["String"]>
    nearestDividend?: Maybe<PaymentData>
    paidDividends: Scalars["Float"]
    paperProfit: Scalars["Float"]
    paperProfitPercent: Scalars["Float"]
    price: Scalars["Float"]
    priceChange: Scalars["Float"]
    ticket?: Maybe<Scalars["String"]>
    updateTime?: Maybe<Scalars["String"]>
}

export type FondReport = {
    __typename?: "FondReport"
    allPrice: Scalars["Float"]
    amount: Scalars["Int"]
    boughtPrice: Scalars["Float"]
    name?: Maybe<Scalars["String"]>
    paperProfit: Scalars["Float"]
    paperProfitPercent: Scalars["Float"]
    price: Scalars["Float"]
    priceChange: Scalars["Float"]
    ticket?: Maybe<Scalars["String"]>
    updateTime?: Maybe<Scalars["String"]>
}

export type BondReport = {
    __typename?: "BondReport"
    allPrice: Scalars["Float"]
    amortizationDate: Scalars["DateTime"]
    amount: Scalars["Int"]
    boughtPrice: Scalars["Float"]
    hasAmortized: Scalars["Boolean"]
    name?: Maybe<Scalars["String"]>
    nearestPayment?: Maybe<PaymentData>
    paidPayments: Scalars["Float"]
    paperProfit: Scalars["Float"]
    paperProfitPercent: Scalars["Float"]
    price: Scalars["Float"]
    priceChange: Scalars["Float"]
    ticket?: Maybe<Scalars["String"]>
    updateTime?: Maybe<Scalars["String"]>
}

export type AssetPricesReport = {
    __typename?: "AssetPricesReport"
    bondPrice: Scalars["Float"]
    fondPrice: Scalars["Float"]
    stockPrice: Scalars["Float"]
}

export type PaymentDataReport = {
    __typename?: "PaymentDataReport"
    allPayment: Scalars["Float"]
    amount: Scalars["Int"]
    currencyId?: Maybe<Scalars["String"]>
    name?: Maybe<Scalars["String"]>
    paymentValue: Scalars["Float"]
    registryCloseDate: Scalars["DateTime"]
    ticket?: Maybe<Scalars["String"]>
}

export type CommonMarketQuote = {
    __typename?: "CommonMarketQuote"
    change: Scalars["Float"]
    name?: Maybe<Scalars["String"]>
    ticket?: Maybe<Scalars["String"]>
    time?: Maybe<Scalars["String"]>
    value: Scalars["Float"]
}

export type AssetOperation = {
    __typename?: "AssetOperation"
    amount: Scalars["Int"]
    assetAction?: Maybe<AssetAction>
    assetActionId: Scalars["Int"]
    assetType?: Maybe<AssetType>
    assetTypeId: Scalars["Int"]
    date: Scalars["DateTime"]
    id: Scalars["Int"]
    paymentPrice: Scalars["Int"]
    portfolio?: Maybe<Portfolio>
    portfolioId: Scalars["Int"]
    ticket?: Maybe<Scalars["String"]>
}

export type CurrencyOperation = {
    __typename?: "CurrencyOperation"
    currencyAction?: Maybe<CurrencyAction>
    currencyActionId: Scalars["Int"]
    currencyId?: Maybe<Scalars["String"]>
    currencyName?: Maybe<Scalars["String"]>
    date: Scalars["DateTime"]
    id: Scalars["Int"]
    portfolio?: Maybe<Portfolio>
    portfolioId: Scalars["Int"]
    price: Scalars["Int"]
}

export type AssetType = {
    __typename?: "AssetType"
    assetOperations?: Maybe<Array<Maybe<AssetOperation>>>
    id: Scalars["Int"]
    name?: Maybe<Scalars["String"]>
}

export type AssetAction = {
    __typename?: "AssetAction"
    assetOperations?: Maybe<Array<Maybe<AssetOperation>>>
    id: Scalars["Int"]
    name?: Maybe<Scalars["String"]>
}

export type CurrencyAction = {
    __typename?: "CurrencyAction"
    currencyOperations?: Maybe<Array<Maybe<CurrencyOperation>>>
    id: Scalars["Int"]
    name?: Maybe<Scalars["String"]>
}

export type OperationResult = {
    __typename?: "OperationResult"
    isSuccess: Scalars["Boolean"]
    message?: Maybe<Scalars["String"]>
}

export type BuyAssetInput = {
    amount: Scalars["Int"]
    assetTypeId: Scalars["Int"]
    date: Scalars["DateTime"]
    portfolioId: Scalars["Int"]
    price: Scalars["Int"]
    ticket?: Maybe<Scalars["String"]>
}

export type SellAssetInput = {
    amount: Scalars["Int"]
    assetTypeId: Scalars["Int"]
    date: Scalars["DateTime"]
    portfolioId: Scalars["Int"]
    price: Scalars["Int"]
    ticket?: Maybe<Scalars["String"]>
}

export type RefillBalanceInput = {
    date: Scalars["DateTime"]
    portfolioId: Scalars["Int"]
    price: Scalars["Int"]
}

export type WithdrawalBalanceInput = {
    date: Scalars["DateTime"]
    portfolioId: Scalars["Int"]
    price: Scalars["Int"]
}

export type PaymentData = {
    __typename?: "PaymentData"
    allPayment: Scalars["Int"]
    amount: Scalars["Int"]
    currencyId?: Maybe<Scalars["String"]>
    name?: Maybe<Scalars["String"]>
    paymentValue: Scalars["Int"]
    registryCloseDate: Scalars["DateTime"]
    ticket?: Maybe<Scalars["String"]>
}

export type PortfolioReportsQueryVariables = Exact<{ [key: string]: never }>

export type PortfolioReportsQuery = { __typename?: "Queries" } & {
    allPortfoliosReport?: Maybe<
        { __typename?: "AllPortfoliosReport" } & Pick<
            AllPortfoliosReport,
            | "allCost"
            | "allInvestSum"
            | "allPaperProfit"
            | "allPaperProfitPercent"
            | "allPaymentProfit"
            | "allPaymentProfitPercent"
            | "allUserBalance"
        >
    >
}

export type PortfoliosQueryVariables = Exact<{ [key: string]: never }>

export type PortfoliosQuery = { __typename?: "Queries" } & {
    portfolios?: Maybe<Array<Maybe<{ __typename?: "Portfolio" } & Pick<Portfolio, "id" | "name">>>>
}

export type StockReportsQueryVariables = Exact<{
    portfolioId: Scalars["Int"]
}>

export type StockReportsQuery = { __typename?: "Queries" } & {
    stockReports?: Maybe<
        Array<
            Maybe<
                { __typename?: "StockReport" } & Pick<
                    StockReport,
                    | "name"
                    | "ticket"
                    | "amount"
                    | "price"
                    | "priceChange"
                    | "allPrice"
                    | "boughtPrice"
                    | "paperProfit"
                    | "paperProfitPercent"
                    | "paidDividends"
                    | "updateTime"
                > & {
                        nearestDividend?: Maybe<
                            { __typename?: "PaymentData" } & Pick<
                                PaymentData,
                                "currencyId" | "paymentValue" | "registryCloseDate"
                            >
                        >
                    }
            >
        >
    >
}

export type FondReportsQueryVariables = Exact<{
    portfolioId: Scalars["Int"]
}>

export type FondReportsQuery = { __typename?: "Queries" } & {
    fondReports?: Maybe<
        Array<
            Maybe<
                { __typename?: "FondReport" } & Pick<
                    FondReport,
                    | "name"
                    | "ticket"
                    | "amount"
                    | "price"
                    | "priceChange"
                    | "allPrice"
                    | "boughtPrice"
                    | "paperProfit"
                    | "paperProfitPercent"
                    | "updateTime"
                >
            >
        >
    >
}

export type BondReportsQueryVariables = Exact<{
    portfolioId: Scalars["Int"]
}>

export type BondReportsQuery = { __typename?: "Queries" } & {
    bondReports?: Maybe<
        Array<
            Maybe<
                { __typename?: "BondReport" } & Pick<
                    BondReport,
                    | "name"
                    | "ticket"
                    | "amount"
                    | "price"
                    | "priceChange"
                    | "allPrice"
                    | "boughtPrice"
                    | "paperProfit"
                    | "paperProfitPercent"
                    | "paidPayments"
                    | "updateTime"
                    | "amortizationDate"
                    | "hasAmortized"
                > & {
                        nearestPayment?: Maybe<
                            { __typename?: "PaymentData" } & Pick<
                                PaymentData,
                                "currencyId" | "paymentValue" | "registryCloseDate"
                            >
                        >
                    }
            >
        >
    >
}

export type StopUpdateMutationVariables = Exact<{
    handleId: Scalars["String"]
}>

export type StopUpdateMutation = { __typename?: "Mutations" } & Pick<Mutations, "stopUpdate">

export type StartPortfoliosReportUpdateMutationVariables = Exact<{ [key: string]: never }>

export type StartPortfoliosReportUpdateMutation = { __typename?: "Mutations" } & Pick<
    Mutations,
    "startPortfoliosReportUpdate"
>

export type StartAssetReportsUpdateMutationVariables = Exact<{ [key: string]: never }>

export type StartAssetReportsUpdateMutation = { __typename?: "Mutations" } & Pick<Mutations, "startAssetReportsUpdate">

export type UpdatePortfoliosReportSubscriptionVariables = Exact<{ [key: string]: never }>

export type UpdatePortfoliosReportSubscription = { __typename?: "Subscriptions" } & {
    onUpdatePortfoliosReport?: Maybe<
        { __typename?: "AllPortfoliosReport" } & Pick<
            AllPortfoliosReport,
            | "allCost"
            | "allInvestSum"
            | "allPaperProfit"
            | "allPaperProfitPercent"
            | "allPaymentProfit"
            | "allPaymentProfitPercent"
            | "allUserBalance"
        >
    >
}

export type UpdateStockReportsSubscriptionVariables = Exact<{
    portfolioId: Scalars["Int"]
}>

export type UpdateStockReportsSubscription = { __typename?: "Subscriptions" } & {
    onUpdateStockReports?: Maybe<
        Array<
            Maybe<
                { __typename?: "StockReport" } & Pick<
                    StockReport,
                    | "name"
                    | "ticket"
                    | "amount"
                    | "price"
                    | "priceChange"
                    | "allPrice"
                    | "boughtPrice"
                    | "paperProfit"
                    | "paperProfitPercent"
                    | "paidDividends"
                    | "updateTime"
                > & {
                        nearestDividend?: Maybe<
                            { __typename?: "PaymentData" } & Pick<
                                PaymentData,
                                "currencyId" | "paymentValue" | "registryCloseDate"
                            >
                        >
                    }
            >
        >
    >
}

export type UpdateFondReportsSubscriptionVariables = Exact<{
    portfolioId: Scalars["Int"]
}>

export type UpdateFondReportsSubscription = { __typename?: "Subscriptions" } & {
    onUpdateFondReports?: Maybe<
        Array<
            Maybe<
                { __typename?: "FondReport" } & Pick<
                    FondReport,
                    | "name"
                    | "ticket"
                    | "amount"
                    | "price"
                    | "priceChange"
                    | "allPrice"
                    | "boughtPrice"
                    | "paperProfit"
                    | "paperProfitPercent"
                    | "updateTime"
                >
            >
        >
    >
}

export type UpdateBondReportsSubscriptionVariables = Exact<{
    portfolioId: Scalars["Int"]
}>

export type UpdateBondReportsSubscription = { __typename?: "Subscriptions" } & {
    onUpdateBondReports?: Maybe<
        Array<
            Maybe<
                { __typename?: "BondReport" } & Pick<
                    BondReport,
                    | "name"
                    | "ticket"
                    | "amount"
                    | "price"
                    | "priceChange"
                    | "allPrice"
                    | "boughtPrice"
                    | "paperProfit"
                    | "paperProfitPercent"
                    | "paidPayments"
                    | "updateTime"
                    | "amortizationDate"
                    | "hasAmortized"
                > & {
                        nearestPayment?: Maybe<
                            { __typename?: "PaymentData" } & Pick<
                                PaymentData,
                                "currencyId" | "paymentValue" | "registryCloseDate"
                            >
                        >
                    }
            >
        >
    >
}

export type UpdatePricesReportSubscriptionVariables = Exact<{ [key: string]: never }>

export type UpdatePricesReportSubscription = { __typename?: "Subscriptions" } & {
    onUpdatePricesReport?: Maybe<
        { __typename?: "AssetPricesReport" } & Pick<AssetPricesReport, "stockPrice" | "fondPrice" | "bondPrice">
    >
}

export type AllAssetPricesReportQueryVariables = Exact<{ [key: string]: never }>

export type AllAssetPricesReportQuery = { __typename?: "Queries" } & {
    allAssetPricesReport?: Maybe<
        { __typename?: "AssetPricesReport" } & Pick<AssetPricesReport, "bondPrice" | "stockPrice" | "fondPrice">
    >
}

export type AllFuturePaymentsQueryVariables = Exact<{ [key: string]: never }>

export type AllFuturePaymentsQuery = { __typename?: "Queries" } & {
    allFuturePaymentsReport?: Maybe<
        Array<
            Maybe<
                { __typename?: "PaymentDataReport" } & Pick<
                    PaymentDataReport,
                    "name" | "ticket" | "paymentValue" | "amount" | "allPayment" | "registryCloseDate" | "currencyId"
                >
            >
        >
    >
}

export type MarketQuotesQueryVariables = Exact<{ [key: string]: never }>

export type MarketQuotesQuery = { __typename?: "Queries" } & {
    marketQuotes?: Maybe<
        Array<
            Maybe<
                { __typename?: "CommonMarketQuote" } & Pick<
                    CommonMarketQuote,
                    "name" | "ticket" | "value" | "change" | "time"
                >
            >
        >
    >
}

export const PortfolioReportsDocument = gql`
    query portfolioReports {
        allPortfoliosReport {
            allCost
            allInvestSum
            allPaperProfit
            allPaperProfitPercent
            allPaymentProfit
            allPaymentProfitPercent
            allUserBalance
        }
    }
`

/**
 * __usePortfolioReportsQuery__
 *
 * To run a query within a React component, call `usePortfolioReportsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortfolioReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortfolioReportsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePortfolioReportsQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<PortfolioReportsQuery, PortfolioReportsQueryVariables>
) {
    return ApolloReactHooks.useQuery<PortfolioReportsQuery, PortfolioReportsQueryVariables>(
        PortfolioReportsDocument,
        baseOptions
    )
}
export function usePortfolioReportsLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PortfolioReportsQuery, PortfolioReportsQueryVariables>
) {
    return ApolloReactHooks.useLazyQuery<PortfolioReportsQuery, PortfolioReportsQueryVariables>(
        PortfolioReportsDocument,
        baseOptions
    )
}
export type PortfolioReportsQueryHookResult = ReturnType<typeof usePortfolioReportsQuery>
export type PortfolioReportsLazyQueryHookResult = ReturnType<typeof usePortfolioReportsLazyQuery>
export type PortfolioReportsQueryResult = ApolloReactCommon.QueryResult<
    PortfolioReportsQuery,
    PortfolioReportsQueryVariables
>
export const PortfoliosDocument = gql`
    query portfolios {
        portfolios {
            id
            name
        }
    }
`

/**
 * __usePortfoliosQuery__
 *
 * To run a query within a React component, call `usePortfoliosQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortfoliosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortfoliosQuery({
 *   variables: {
 *   },
 * });
 */
export function usePortfoliosQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<PortfoliosQuery, PortfoliosQueryVariables>
) {
    return ApolloReactHooks.useQuery<PortfoliosQuery, PortfoliosQueryVariables>(PortfoliosDocument, baseOptions)
}
export function usePortfoliosLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PortfoliosQuery, PortfoliosQueryVariables>
) {
    return ApolloReactHooks.useLazyQuery<PortfoliosQuery, PortfoliosQueryVariables>(PortfoliosDocument, baseOptions)
}
export type PortfoliosQueryHookResult = ReturnType<typeof usePortfoliosQuery>
export type PortfoliosLazyQueryHookResult = ReturnType<typeof usePortfoliosLazyQuery>
export type PortfoliosQueryResult = ApolloReactCommon.QueryResult<PortfoliosQuery, PortfoliosQueryVariables>
export const StockReportsDocument = gql`
    query stockReports($portfolioId: Int!) {
        stockReports(portfolioId: $portfolioId) {
            name
            ticket
            amount
            price
            priceChange
            allPrice
            boughtPrice
            paperProfit
            paperProfitPercent
            nearestDividend {
                currencyId
                paymentValue
                registryCloseDate
            }
            paidDividends
            updateTime
        }
    }
`

/**
 * __useStockReportsQuery__
 *
 * To run a query within a React component, call `useStockReportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockReportsQuery({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useStockReportsQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<StockReportsQuery, StockReportsQueryVariables>
) {
    return ApolloReactHooks.useQuery<StockReportsQuery, StockReportsQueryVariables>(StockReportsDocument, baseOptions)
}
export function useStockReportsLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StockReportsQuery, StockReportsQueryVariables>
) {
    return ApolloReactHooks.useLazyQuery<StockReportsQuery, StockReportsQueryVariables>(
        StockReportsDocument,
        baseOptions
    )
}
export type StockReportsQueryHookResult = ReturnType<typeof useStockReportsQuery>
export type StockReportsLazyQueryHookResult = ReturnType<typeof useStockReportsLazyQuery>
export type StockReportsQueryResult = ApolloReactCommon.QueryResult<StockReportsQuery, StockReportsQueryVariables>
export const FondReportsDocument = gql`
    query fondReports($portfolioId: Int!) {
        fondReports(portfolioId: $portfolioId) {
            name
            ticket
            amount
            price
            priceChange
            allPrice
            boughtPrice
            paperProfit
            paperProfitPercent
            updateTime
        }
    }
`

/**
 * __useFondReportsQuery__
 *
 * To run a query within a React component, call `useFondReportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFondReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFondReportsQuery({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useFondReportsQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<FondReportsQuery, FondReportsQueryVariables>
) {
    return ApolloReactHooks.useQuery<FondReportsQuery, FondReportsQueryVariables>(FondReportsDocument, baseOptions)
}
export function useFondReportsLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FondReportsQuery, FondReportsQueryVariables>
) {
    return ApolloReactHooks.useLazyQuery<FondReportsQuery, FondReportsQueryVariables>(FondReportsDocument, baseOptions)
}
export type FondReportsQueryHookResult = ReturnType<typeof useFondReportsQuery>
export type FondReportsLazyQueryHookResult = ReturnType<typeof useFondReportsLazyQuery>
export type FondReportsQueryResult = ApolloReactCommon.QueryResult<FondReportsQuery, FondReportsQueryVariables>
export const BondReportsDocument = gql`
    query bondReports($portfolioId: Int!) {
        bondReports(portfolioId: $portfolioId) {
            name
            ticket
            amount
            price
            priceChange
            allPrice
            boughtPrice
            paperProfit
            paperProfitPercent
            nearestPayment {
                currencyId
                paymentValue
                registryCloseDate
            }
            paidPayments
            updateTime
            amortizationDate
            hasAmortized
        }
    }
`

/**
 * __useBondReportsQuery__
 *
 * To run a query within a React component, call `useBondReportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBondReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBondReportsQuery({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useBondReportsQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<BondReportsQuery, BondReportsQueryVariables>
) {
    return ApolloReactHooks.useQuery<BondReportsQuery, BondReportsQueryVariables>(BondReportsDocument, baseOptions)
}
export function useBondReportsLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BondReportsQuery, BondReportsQueryVariables>
) {
    return ApolloReactHooks.useLazyQuery<BondReportsQuery, BondReportsQueryVariables>(BondReportsDocument, baseOptions)
}
export type BondReportsQueryHookResult = ReturnType<typeof useBondReportsQuery>
export type BondReportsLazyQueryHookResult = ReturnType<typeof useBondReportsLazyQuery>
export type BondReportsQueryResult = ApolloReactCommon.QueryResult<BondReportsQuery, BondReportsQueryVariables>
export const StopUpdateDocument = gql`
    mutation stopUpdate($handleId: String!) {
        stopUpdate(handlerId: $handleId)
    }
`
export type StopUpdateMutationFn = ApolloReactCommon.MutationFunction<StopUpdateMutation, StopUpdateMutationVariables>

/**
 * __useStopUpdateMutation__
 *
 * To run a mutation, you first call `useStopUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStopUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stopUpdateMutation, { data, loading, error }] = useStopUpdateMutation({
 *   variables: {
 *      handleId: // value for 'handleId'
 *   },
 * });
 */
export function useStopUpdateMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<StopUpdateMutation, StopUpdateMutationVariables>
) {
    return ApolloReactHooks.useMutation<StopUpdateMutation, StopUpdateMutationVariables>(
        StopUpdateDocument,
        baseOptions
    )
}
export type StopUpdateMutationHookResult = ReturnType<typeof useStopUpdateMutation>
export type StopUpdateMutationResult = ApolloReactCommon.MutationResult<StopUpdateMutation>
export type StopUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<
    StopUpdateMutation,
    StopUpdateMutationVariables
>
export const StartPortfoliosReportUpdateDocument = gql`
    mutation startPortfoliosReportUpdate {
        startPortfoliosReportUpdate
    }
`
export type StartPortfoliosReportUpdateMutationFn = ApolloReactCommon.MutationFunction<
    StartPortfoliosReportUpdateMutation,
    StartPortfoliosReportUpdateMutationVariables
>

/**
 * __useStartPortfoliosReportUpdateMutation__
 *
 * To run a mutation, you first call `useStartPortfoliosReportUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartPortfoliosReportUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startPortfoliosReportUpdateMutation, { data, loading, error }] = useStartPortfoliosReportUpdateMutation({
 *   variables: {
 *   },
 * });
 */
export function useStartPortfoliosReportUpdateMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        StartPortfoliosReportUpdateMutation,
        StartPortfoliosReportUpdateMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        StartPortfoliosReportUpdateMutation,
        StartPortfoliosReportUpdateMutationVariables
    >(StartPortfoliosReportUpdateDocument, baseOptions)
}
export type StartPortfoliosReportUpdateMutationHookResult = ReturnType<typeof useStartPortfoliosReportUpdateMutation>
export type StartPortfoliosReportUpdateMutationResult = ApolloReactCommon.MutationResult<
    StartPortfoliosReportUpdateMutation
>
export type StartPortfoliosReportUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<
    StartPortfoliosReportUpdateMutation,
    StartPortfoliosReportUpdateMutationVariables
>
export const StartAssetReportsUpdateDocument = gql`
    mutation startAssetReportsUpdate {
        startAssetReportsUpdate
    }
`
export type StartAssetReportsUpdateMutationFn = ApolloReactCommon.MutationFunction<
    StartAssetReportsUpdateMutation,
    StartAssetReportsUpdateMutationVariables
>

/**
 * __useStartAssetReportsUpdateMutation__
 *
 * To run a mutation, you first call `useStartAssetReportsUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartAssetReportsUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startAssetReportsUpdateMutation, { data, loading, error }] = useStartAssetReportsUpdateMutation({
 *   variables: {
 *   },
 * });
 */
export function useStartAssetReportsUpdateMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        StartAssetReportsUpdateMutation,
        StartAssetReportsUpdateMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<StartAssetReportsUpdateMutation, StartAssetReportsUpdateMutationVariables>(
        StartAssetReportsUpdateDocument,
        baseOptions
    )
}
export type StartAssetReportsUpdateMutationHookResult = ReturnType<typeof useStartAssetReportsUpdateMutation>
export type StartAssetReportsUpdateMutationResult = ApolloReactCommon.MutationResult<StartAssetReportsUpdateMutation>
export type StartAssetReportsUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<
    StartAssetReportsUpdateMutation,
    StartAssetReportsUpdateMutationVariables
>
export const UpdatePortfoliosReportDocument = gql`
    subscription updatePortfoliosReport {
        onUpdatePortfoliosReport {
            allCost
            allInvestSum
            allPaperProfit
            allPaperProfitPercent
            allPaymentProfit
            allPaymentProfitPercent
            allUserBalance
        }
    }
`

/**
 * __useUpdatePortfoliosReportSubscription__
 *
 * To run a query within a React component, call `useUpdatePortfoliosReportSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatePortfoliosReportSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatePortfoliosReportSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUpdatePortfoliosReportSubscription(
    baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
        UpdatePortfoliosReportSubscription,
        UpdatePortfoliosReportSubscriptionVariables
    >
) {
    return ApolloReactHooks.useSubscription<
        UpdatePortfoliosReportSubscription,
        UpdatePortfoliosReportSubscriptionVariables
    >(UpdatePortfoliosReportDocument, baseOptions)
}
export type UpdatePortfoliosReportSubscriptionHookResult = ReturnType<typeof useUpdatePortfoliosReportSubscription>
export type UpdatePortfoliosReportSubscriptionResult = ApolloReactCommon.SubscriptionResult<
    UpdatePortfoliosReportSubscription
>
export const UpdateStockReportsDocument = gql`
    subscription updateStockReports($portfolioId: Int!) {
        onUpdateStockReports(portfolioId: $portfolioId) {
            name
            ticket
            amount
            price
            priceChange
            allPrice
            boughtPrice
            paperProfit
            paperProfitPercent
            nearestDividend {
                currencyId
                paymentValue
                registryCloseDate
            }
            paidDividends
            updateTime
        }
    }
`

/**
 * __useUpdateStockReportsSubscription__
 *
 * To run a query within a React component, call `useUpdateStockReportsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdateStockReportsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateStockReportsSubscription({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useUpdateStockReportsSubscription(
    baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
        UpdateStockReportsSubscription,
        UpdateStockReportsSubscriptionVariables
    >
) {
    return ApolloReactHooks.useSubscription<UpdateStockReportsSubscription, UpdateStockReportsSubscriptionVariables>(
        UpdateStockReportsDocument,
        baseOptions
    )
}
export type UpdateStockReportsSubscriptionHookResult = ReturnType<typeof useUpdateStockReportsSubscription>
export type UpdateStockReportsSubscriptionResult = ApolloReactCommon.SubscriptionResult<UpdateStockReportsSubscription>
export const UpdateFondReportsDocument = gql`
    subscription updateFondReports($portfolioId: Int!) {
        onUpdateFondReports(portfolioId: $portfolioId) {
            name
            ticket
            amount
            price
            priceChange
            allPrice
            boughtPrice
            paperProfit
            paperProfitPercent
            updateTime
        }
    }
`

/**
 * __useUpdateFondReportsSubscription__
 *
 * To run a query within a React component, call `useUpdateFondReportsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdateFondReportsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateFondReportsSubscription({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useUpdateFondReportsSubscription(
    baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
        UpdateFondReportsSubscription,
        UpdateFondReportsSubscriptionVariables
    >
) {
    return ApolloReactHooks.useSubscription<UpdateFondReportsSubscription, UpdateFondReportsSubscriptionVariables>(
        UpdateFondReportsDocument,
        baseOptions
    )
}
export type UpdateFondReportsSubscriptionHookResult = ReturnType<typeof useUpdateFondReportsSubscription>
export type UpdateFondReportsSubscriptionResult = ApolloReactCommon.SubscriptionResult<UpdateFondReportsSubscription>
export const UpdateBondReportsDocument = gql`
    subscription updateBondReports($portfolioId: Int!) {
        onUpdateBondReports(portfolioId: $portfolioId) {
            name
            ticket
            amount
            price
            priceChange
            allPrice
            boughtPrice
            paperProfit
            paperProfitPercent
            nearestPayment {
                currencyId
                paymentValue
                registryCloseDate
            }
            paidPayments
            updateTime
            amortizationDate
            hasAmortized
        }
    }
`

/**
 * __useUpdateBondReportsSubscription__
 *
 * To run a query within a React component, call `useUpdateBondReportsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdateBondReportsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateBondReportsSubscription({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useUpdateBondReportsSubscription(
    baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
        UpdateBondReportsSubscription,
        UpdateBondReportsSubscriptionVariables
    >
) {
    return ApolloReactHooks.useSubscription<UpdateBondReportsSubscription, UpdateBondReportsSubscriptionVariables>(
        UpdateBondReportsDocument,
        baseOptions
    )
}
export type UpdateBondReportsSubscriptionHookResult = ReturnType<typeof useUpdateBondReportsSubscription>
export type UpdateBondReportsSubscriptionResult = ApolloReactCommon.SubscriptionResult<UpdateBondReportsSubscription>
export const UpdatePricesReportDocument = gql`
    subscription updatePricesReport {
        onUpdatePricesReport {
            stockPrice
            fondPrice
            bondPrice
        }
    }
`

/**
 * __useUpdatePricesReportSubscription__
 *
 * To run a query within a React component, call `useUpdatePricesReportSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatePricesReportSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatePricesReportSubscription({
 *   variables: {
 *   },
 * });
 */

export function useUpdatePricesReportSubscription(
    baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
        UpdatePricesReportSubscription,
        UpdatePricesReportSubscriptionVariables
    >
) {
    return ApolloReactHooks.useSubscription<UpdatePricesReportSubscription, UpdatePricesReportSubscriptionVariables>(
        UpdatePricesReportDocument,
        baseOptions
    )
}
export type UpdatePricesReportSubscriptionHookResult = ReturnType<typeof useUpdatePricesReportSubscription>
export type UpdatePricesReportSubscriptionResult = ApolloReactCommon.SubscriptionResult<UpdatePricesReportSubscription>
export const AllAssetPricesReportDocument = gql`
    query allAssetPricesReport {
        allAssetPricesReport {
            bondPrice
            stockPrice
            fondPrice
        }
    }
`

/**
 * __useAllAssetPricesReportQuery__
 *
 * To run a query within a React component, call `useAllAssetPricesReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAssetPricesReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAssetPricesReportQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAssetPricesReportQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<AllAssetPricesReportQuery, AllAssetPricesReportQueryVariables>
) {
    return ApolloReactHooks.useQuery<AllAssetPricesReportQuery, AllAssetPricesReportQueryVariables>(
        AllAssetPricesReportDocument,
        baseOptions
    )
}
export function useAllAssetPricesReportLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllAssetPricesReportQuery, AllAssetPricesReportQueryVariables>
) {
    return ApolloReactHooks.useLazyQuery<AllAssetPricesReportQuery, AllAssetPricesReportQueryVariables>(
        AllAssetPricesReportDocument,
        baseOptions
    )
}
export type AllAssetPricesReportQueryHookResult = ReturnType<typeof useAllAssetPricesReportQuery>
export type AllAssetPricesReportLazyQueryHookResult = ReturnType<typeof useAllAssetPricesReportLazyQuery>
export type AllAssetPricesReportQueryResult = ApolloReactCommon.QueryResult<
    AllAssetPricesReportQuery,
    AllAssetPricesReportQueryVariables
>
export const AllFuturePaymentsDocument = gql`
    query AllFuturePayments {
        allFuturePaymentsReport {
            name
            ticket
            paymentValue
            amount
            allPayment
            registryCloseDate
            currencyId
        }
    }
`

/**
 * __useAllFuturePaymentsQuery__
 *
 * To run a query within a React component, call `useAllFuturePaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFuturePaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFuturePaymentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllFuturePaymentsQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<AllFuturePaymentsQuery, AllFuturePaymentsQueryVariables>
) {
    return ApolloReactHooks.useQuery<AllFuturePaymentsQuery, AllFuturePaymentsQueryVariables>(
        AllFuturePaymentsDocument,
        baseOptions
    )
}
export function useAllFuturePaymentsLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllFuturePaymentsQuery, AllFuturePaymentsQueryVariables>
) {
    return ApolloReactHooks.useLazyQuery<AllFuturePaymentsQuery, AllFuturePaymentsQueryVariables>(
        AllFuturePaymentsDocument,
        baseOptions
    )
}
export type AllFuturePaymentsQueryHookResult = ReturnType<typeof useAllFuturePaymentsQuery>
export type AllFuturePaymentsLazyQueryHookResult = ReturnType<typeof useAllFuturePaymentsLazyQuery>
export type AllFuturePaymentsQueryResult = ApolloReactCommon.QueryResult<
    AllFuturePaymentsQuery,
    AllFuturePaymentsQueryVariables
>
export const MarketQuotesDocument = gql`
    query marketQuotes {
        marketQuotes {
            name
            ticket
            value
            change
            time
        }
    }
`

/**
 * __useMarketQuotesQuery__
 *
 * To run a query within a React component, call `useMarketQuotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketQuotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketQuotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMarketQuotesQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<MarketQuotesQuery, MarketQuotesQueryVariables>
) {
    return ApolloReactHooks.useQuery<MarketQuotesQuery, MarketQuotesQueryVariables>(MarketQuotesDocument, baseOptions)
}
export function useMarketQuotesLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MarketQuotesQuery, MarketQuotesQueryVariables>
) {
    return ApolloReactHooks.useLazyQuery<MarketQuotesQuery, MarketQuotesQueryVariables>(
        MarketQuotesDocument,
        baseOptions
    )
}
export type MarketQuotesQueryHookResult = ReturnType<typeof useMarketQuotesQuery>
export type MarketQuotesLazyQueryHookResult = ReturnType<typeof useMarketQuotesLazyQuery>
export type MarketQuotesQueryResult = ApolloReactCommon.QueryResult<MarketQuotesQuery, MarketQuotesQueryVariables>
