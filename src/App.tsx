import React from 'react';

import { ApolloClient, ApolloProvider } from '@apollo/client';
import { Container } from 'typedi';

import { Routes } from '@app/routes';

function App() {
  const apolloClient = Container.get(ApolloClient);

  return (
    <ApolloProvider client={apolloClient}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;
