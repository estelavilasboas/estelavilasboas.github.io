import { ApolloClient } from '@apollo/client';
import { setConfiguration } from 'react-grid-system';
import { Container } from 'typedi';

import { ApolloClientBuilderService } from '@app/core/graphql';
import { FrontendEnvironmentVariables } from '@app/frontend-environment-variables';
import { GridSettings } from '@atomic/obj.grid';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function configure(frontendEnvironmentVariables: FrontendEnvironmentVariables) {
  const baseUrl = frontendEnvironmentVariables.BASE_URL;

  configApolloClient(baseUrl);
  configureGrid();
}

function configureGrid() {
  setConfiguration(GridSettings);
}

function configApolloClient(url: string) {
  const client = Container.get(ApolloClientBuilderService).build(url);
  Container.set(ApolloClient, client);
}
