import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import compression from 'compression';
import fetch from 'cross-fetch';
import { Express } from 'express';
import helmet from 'helmet';
import { Container } from 'typedi';

import { getCacheMiddleware } from 'server/middleware/in-memory-cache.middleware';

interface ConfigurationParams {
  app: Express;
  cspScriptHash: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function configure({ app, cspScriptHash }: ConfigurationParams) {
  configureApolloClient();
  configureMiddlewares({ app, cspScriptHash });
}

function configureApolloClient() {
  const apolloClient = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: process.env.GRAPHQL_URL,
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  Container.set(ApolloClient, apolloClient);
}

function configureMiddlewares({ app, cspScriptHash }: ConfigurationParams) {
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          scriptSrc: ["'self'", `'sha256-${cspScriptHash}'`],
        },
      },
    }),
  );
  app.use(compression());
  app.use(
    getCacheMiddleware({ cacheExpirationSeconds: +(process.env.CACHE_EXPIRATION_SECONDS || 300), cspScriptHash }),
  );
}
