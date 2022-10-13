import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { FaIcon } from '@atomic/atm.fa-icon';
import { Color, IconSize, Spacing, TransitionDuration } from '@atomic/obj.constants';

export const DefaultListCellStyled = styled.div`
  position: relative;
  width: 100%;
  align-items: center;
  display: flex;
  white-space: nowrap;
  text-decoration: none;
  padding: ${Spacing.Small} ${Spacing.Medium};
  cursor: pointer;
`;

export const DefaultListCellIconWrapperStyled = styled.div`
  width: ${Spacing.Large};
  text-align: center;
  margin-right: ${Spacing.Small};
`;

export const DefaultListCellIconStyled = styled(FontAwesomeIcon).attrs({ size: 'lg' })`
  color: ${Color.Black};
`;

export const DefaultListCellAngleStyled = styled(FaIcon.ChevronRight)`
  position: absolute;
  right: 0;
  transition: ${TransitionDuration};
  color: ${Color.Black};
  text-align: center;
  font-size: ${IconSize.Medium};
  vertical-align: middle;
  margin-right: ${Spacing.Medium};
`;
