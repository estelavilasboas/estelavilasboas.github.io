import styled from 'styled-components';
import { Color, Spacing } from '../../atomic/obj.constants';

export const BackgroundStyled = styled.div`
  background-color: ${Color.Primary};
  padding: ${Spacing.XXLarge};
  width: 100%;
`;

export const IntroductionWrapper = styled.div`
  margin: 0 15%;
  padding: ${Spacing.XXLarge};
  max-width: 30%;
`;
