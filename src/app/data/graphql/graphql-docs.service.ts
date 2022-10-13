import { DocumentNode } from 'graphql';

import { Mutation, Query } from './graphql.schemas';

export type MutationName = keyof typeof Mutation;
export type QueryName = keyof typeof Query;

export function getMutation(mutationName: MutationName): DocumentNode {
  return Mutation[mutationName];
}

export function getQuery(queryName: QueryName): DocumentNode {
  return Query[queryName];
}
