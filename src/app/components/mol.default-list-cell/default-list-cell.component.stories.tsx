import * as React from 'react';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Meta } from '@storybook/react/types-6-0';

import { H3 } from '@atomic/atm.typography';

import { DefaultListCell, DefaultListCellProps } from './default-list-cell.component';

export default {
  title: 'App/Molecules/Default List Cell',
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

export const SimpleListCell: React.FC<DefaultListCellProps> = (props) => (
  <DefaultListCell iconName={faInstagram} onClick={props.onClick}>
    <H3>Title</H3>
  </DefaultListCell>
);

export const ListCellWithArrow: React.FC<DefaultListCellProps> = (props) => (
  <DefaultListCell arrow iconName={faInstagram} onClick={props.onClick}>
    <H3>Title</H3>
  </DefaultListCell>
);
