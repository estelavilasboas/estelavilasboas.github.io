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

export const BulletStyled = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: ${Color.Primary};
`;

export const LineStyled = styled.div`
  width: 2px;
  height: 100%;
  margin-left: 7px;
  background-color: ${Color.Primary};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${Color.Primary};
`;

export const TooltipStyled = styled.div`
  width: 350px;
  height: 100%;
  padding: 16px;
  background-color: ${Color.White};
`;
