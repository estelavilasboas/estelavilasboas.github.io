import styled from 'styled-components';
import { Color, Spacing } from '../../atomic/obj.constants';

export type BackgroundVariant = 'primary' | 'accessory' | 'accessory2' | 'accessory3';

const BackgroundVariantColors: Record<BackgroundVariant, string> = {
  primary: Color.Primary,
  accessory: Color.Accessory,
  accessory2: Color.Accessory2,
  accessory3: Color.Accessory3,
}

interface BackgroundStyledProps {
  variant?: BackgroundVariant;
};
;

export const BackgroundStyled = styled.div<BackgroundStyledProps>`
  background-color: ${(props) => props.variant ? BackgroundVariantColors[props.variant] : Color.Primary};
  padding: ${Spacing.XXLarge} 0;
  width: 100%;
`;

export const IntroductionWrapper = styled.div`
  margin: 0 15%;
  padding: ${Spacing.XLarge} 0;
  max-width: 30%;
`;
