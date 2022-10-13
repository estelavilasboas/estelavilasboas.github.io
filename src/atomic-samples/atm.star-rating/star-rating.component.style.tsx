import styled from 'styled-components';

import { FaIcon } from '@atomic/atm.fa-icon/fa-icon.component';
import { Color, FontSize } from '@atomic/obj.constants';

export const StarRatingWrapperStyled = styled.div`
  height: ${FontSize.XSmall};
  display: inline-block;
  line-height: 0;
  position: relative;
`;
export const StarEmptyStyled = styled(FaIcon.Star)`
  color: ${Color.GrayLight};
`;

export const StarFullStyled = styled(FaIcon.Star)`
  color: ${Color.Black};
`;
export const StarHalfStyled = styled(FaIcon.StarHalf)`
  color: ${Color.Black};
  position: absolute;
  left: 0;
  top: 0;
`;
