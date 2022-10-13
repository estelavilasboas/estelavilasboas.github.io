import * as React from 'react';

import { useMutation as useApolloMutation, OperationVariables } from '@apollo/client';

import { getMutation, MutationName } from '@app/data/graphql/graphql-docs.service';
import { AppError } from '@app/model';

import { mapApolloError } from './graphql-error.mapper';

export interface MutationResult<TData> {
  called?: boolean;
  loading: boolean;
  data: TData;
  error: AppError;
}

export interface MutationOptions<TData> {
  onCompleted?: (data: TData) => void;
  onError?: (error: AppError) => void;
}

export type MutationTuple<TData, TVariables> = [(variables?: TVariables) => void, MutationResult<TData>];

export function useMutation<TData = any, TVariables = OperationVariables>(
  document: MutationName,
  options: MutationOptions<TData> = {},
): MutationTuple<TData, TVariables> {
  const query = getMutation(document);

  const [apolloMutate, res] = useApolloMutation<TData, TVariables>(query, {
    onCompleted: options.onCompleted,
    onError: (error) => options.onError?.(mapApolloError(error)),
  });

  const mutate = React.useCallback(
    (variables: TVariables) => {
      apolloMutate({ variables });
    },
    [apolloMutate],
  );

  return [
    mutate,
    {
      called: res.called,
      loading: res.loading,
      data: res.data,
      error: res.error ? mapApolloError(res.error) : undefined,
    },
  ];
}
