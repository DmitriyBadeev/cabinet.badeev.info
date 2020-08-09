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
    allCurrencyOperations?: Maybe<Array<Maybe<CurrencyOperation>>>
    allPortfoliosReport?: Maybe<AllPortfoliosReport>
    assetActions?: Maybe<Array<Maybe<AssetAction>>>
    assetTypes?: Maybe<Array<Maybe<AssetType>>>
    bondReports?: Maybe<Array<Maybe<BondReport>>>
    currencyActions?: Maybe<Array<Maybe<CurrencyAction>>>
    currentUserBalance: Scalars["Float"]
    fondReports?: Maybe<Array<Maybe<FondReport>>>
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

export type MutationsWithdrawalBalanceArgs = {
    withdrawalBalanceInput?: Maybe<WithdrawalBalanceInput>
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
    currencyId?: Maybe<Scalars["String"]>
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
