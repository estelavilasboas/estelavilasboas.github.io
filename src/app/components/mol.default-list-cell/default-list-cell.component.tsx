import * as React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  DefaultListCellAngleStyled,
  DefaultListCellIconStyled,
  DefaultListCellIconWrapperStyled,
  DefaultListCellStyled,
} from './default-list-cell.component.style';

export interface DefaultListCellProps {
  iconName?: IconProp;
  arrow?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const DefaultListCell: React.FC<DefaultListCellProps> = (props) => (
  <DefaultListCellStyled onClick={props.onClick}>
    {props.iconName && (
      <DefaultListCellIconWrapperStyled>
        <DefaultListCellIconStyled icon={props.iconName} />
      </DefaultListCellIconWrapperStyled>
    )}

    {props.children}
    {props.arrow && <DefaultListCellAngleStyled />}
  </DefaultListCellStyled>
);
