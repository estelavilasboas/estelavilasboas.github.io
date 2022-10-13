import React from 'react';

import { ApolloClient, ApolloProvider } from '@apollo/client';
import { Container } from 'typedi';

import { H1 } from '@atomic/atm.typography';
import { Col, Grid, Row } from '@atomic/obj.grid';
import { AboutMePage } from '@app/modules/about-me';

function App() {
  const apolloClient = Container.get(ApolloClient);

  return (
    <ApolloProvider client={apolloClient}>
      <AboutMePage />
    </ApolloProvider>
  );
}

export default App;
