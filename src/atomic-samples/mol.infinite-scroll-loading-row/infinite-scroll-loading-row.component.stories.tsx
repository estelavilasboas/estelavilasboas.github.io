import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { InfiniteScrollLoadingRow } from './infinite-scroll-loading-row.component';

export default {
  title: 'Samples/Molecules/Infinite Scroll Loading Row',
  component: InfiniteScrollLoadingRow,
} as Meta;

export const InfiniteScroll: React.FC = () => <InfiniteScrollLoadingRow isVisible />;
