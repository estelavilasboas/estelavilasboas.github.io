import * as React from 'react';

import {
  useLazyQuery as useApolloLazyQuery,
  useQuery as useApolloQuery,
  ErrorPolicy,
  FetchMoreOptions,
  OperationVariables,
  WatchQueryFetchPolicy,
} from '@apollo/client';

import { getQuery, QueryName } from '@app/data/graphql/graphql-docs.service';
import { AppError } from '@app/model';

import { mapApolloError } from './graphql-error.mapper';

export interface QueryResult<TData, TVariables> {
  called?: boolean;
  loading: boolean;
  data: TData;
  error: AppError;
  refetch: (variables?: TVariables) => void;
  fetchMore: (variables?: TVariables & FetchMoreOptions<TData, TVariables>) => void;
  updateQuery: (data: TData) => void;
}

export interface QueryOptions<TData> {
  fetchPolicy?: WatchQueryFetchPolicy;
  errorPolicy?: ErrorPolicy;
  onCompleted?: (data: TData) => void;
  onError?: (error: AppError) => void;
  skip?: boolean;
}

const DEFAULT_CACHE_POLICY: WatchQueryFetchPolicy = 'cache-and-network';

export function useQuery<TData = any, TVariables = OperationVariables>(
  document: QueryName,
  variables?: TVariables,
  options: QueryOptions<TData> = {},
): QueryResult<TData, TVariables> {
  if (!options.fetchPolicy) {
    options.fetchPolicy = DEFAULT_CACHE_POLICY;
  }

  const query = getQuery(document);

  const res = useApolloQuery<TData, TVariables>(query, {
    variables,
    onCompleted: options.onCompleted,
    onError: (error) => options.onError?.(mapApolloError(error)),
    fetchPolicy: options.fetchPolicy,
    errorPolicy: options.errorPolicy,
    skip: options?.skip,
  });

  const fetchMore = React.useCallback(
    (vars: Partial<TVariables> & FetchMoreOptions<TData, TVariables>) => {
      res.fetchMore(vars);
    },
    [res],
  );

  const refetch = React.useCallback(
    (vars: TVariables) => {
      res.refetch(vars);
    },
    [res],
  );

  const updateQuery = React.useCallback(
    (data: TData) => {
      res.updateQuery(() => data);
    },
    [res],
  );

  return {
    called: res.called,
    loading: res.loading,
    data: res.data,
    error: res.error && mapApolloError(res.error),
    fetchMore,
    refetch,
    updateQuery,
  };
}

export type QueryTuple<TData, TVariables> = [(variables?: TVariables) => void, QueryResult<TData, TVariables>];

export function useLazyQuery<TData = any, TVariables = OperationVariables>(
  document: QueryName,
  options: QueryOptions<TData> = {},
): QueryTuple<TData, TVariables> {
  if (!options.fetchPolicy) {
    options.fetchPolicy = DEFAULT_CACHE_POLICY;
  }

  const query = getQuery(document);

  const [apolloQuery, res] = useApolloLazyQuery<TData, TVariables>(query, {
    onCompleted: options.onCompleted,
    onError: (error) => options.onError?.(mapApolloError(error)),
    fetchPolicy: options.fetchPolicy,
    errorPolicy: options.errorPolicy,
  });

  const fetchMore = React.useCallback(
    (variables: Partial<TVariables> & FetchMoreOptions<TData, TVariables>) => {
      res.fetchMore(variables);
    },
    [res],
  );

  const refetch = React.useCallback(
    (variables: TVariables) => {
      res.refetch(variables);
    },
    [res],
  );

  const updateQuery = React.useCallback(
    (data: TData) => {
      res.updateQuery(() => data);
    },
    [res],
  );

  const performQuery = React.useCallback(
    (vars: TVariables) => {
      apolloQuery({ variables: vars });
    },
    [apolloQuery],
  );

  return [
    performQuery,
    {
      called: res.called,
      loading: res.loading,
      data: res.data,
      error: res.error && mapApolloError(res.error),
      fetchMore,
      refetch,
      updateQuery,
    },
  ];
}
