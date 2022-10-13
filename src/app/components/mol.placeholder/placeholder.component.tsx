import * as React from 'react';

import { FaIcon } from '@atomic/atm.fa-icon';
import { Body, HDisplay } from '@atomic/atm.typography';
import { Separator } from '@atomic/obj.box';
import { Row } from '@atomic/obj.grid';

import { PlaceholderColStyled } from './placeholder.component.style';

export interface PlaceholderProps {
  icon: keyof typeof FaIcon;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const Placeholder: React.FC<PlaceholderProps> = (props) => {
  const Icon = FaIcon[props.icon];
  return (
    <Row align='center'>
      <PlaceholderColStyled xs={12}>
        <Separator />
        <Icon size='10x' />
        <Separator />
        <HDisplay>{props.title}</HDisplay>
        {props.description && <Body>{props.description}</Body>}
        <Separator />
        {props.children}
      </PlaceholderColStyled>
    </Row>
  );
};
