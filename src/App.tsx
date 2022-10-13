import React from 'react';

import { ApolloClient, ApolloProvider } from '@apollo/client';
import { Container } from 'typedi';

import { H1 } from '@atomic/atm.typography';
import { Col, Grid, Row } from '@atomic/obj.grid';

function App() {
  const apolloClient = Container.get(ApolloClient);

  return (
    <ApolloProvider client={apolloClient}>
      <Grid fluid>
        <Row>
          <Col>
            <Row>
              <H1>Template</H1>
            </Row>
          </Col>
        </Row>
      </Grid>
    </ApolloProvider>
  );
}

export default App;
