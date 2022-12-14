import styled, { css } from "styled-components";

import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
  Spacing,
} from "../obj.constants";

export type TextVariant =
  | "primary"
  | "secondary"
  | "accessory"
  | "accessory2"
  | "accessory3"
  | "white";

const TextVariantColors: Record<TextVariant, string> = {
  primary: Color.Primary,
  secondary: Color.Secondary,
  accessory: Color.Accessory,
  accessory2: Color.Accessory2,
  accessory3: Color.Accessory3,
  white: Color.White,
};

export interface TextProps {
  variant?: TextVariant;
}

export const HDisplay = styled.label<TextProps>`
  color: ${(props) =>
    props.variant ? TextVariantColors[props.variant] : Color.Primary};
  font-size: ${FontSize.XXLarge};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
`;
HDisplay.displayName = "HDisplay";

export const H1 = styled.h1<TextProps>`
  color: ${(props) =>
    props.variant ? TextVariantColors[props.variant] : Color.Primary};
  font-size: ${FontSize.XLarge};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  margin-bottom: ${Spacing.Medium};
  margin-top: ${Spacing.Large};
`;

export const H2 = styled.h2<TextProps>`
  color: ${(props) =>
    props.variant ? TextVariantColors[props.variant] : Color.Primary};
  font-size: ${FontSize.Large};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  margin-bottom: ${Spacing.Small};
  margin-top: ${Spacing.Large};
`;
H2.displayName = "H2";

export const H3 = styled.h3<TextProps>`
  color: ${(props) =>
    props.variant ? TextVariantColors[props.variant] : Color.Primary};
  font-size: ${FontSize.Medium};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
`;
H3.displayName = "H3";

export const H4Height = FontSize.Small;
export const H4 = styled.p<TextProps>`
  color: ${(props) =>
    props.variant ? TextVariantColors[props.variant] : Color.Primary};
  font-size: ${H4Height};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  line-height: 0.1;
`;
H4.displayName = "H4";

export const Body = styled.p<TextProps>`
  color: ${(props) =>
    props.variant ? TextVariantColors[props.variant] : Color.Primary};
  margin: 0;
  font-size: ${FontSize.XSmall};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  line-height: 1.5;
`;
Body.displayName = "Body";

export const BodySecondary = styled.label<TextProps>`
  color: ${(props) =>
    props.variant ? TextVariantColors[props.variant] : Color.Primary};
  font-size: ${FontSize.XXSmall};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  line-height: 1.5;
  margin: 0;
`;

export const BodySecondaryCentered = styled(BodySecondary)`
  text-align: center;
`;

interface InputLabelProps {
  hasError?: boolean;
}

export const InputLabel = styled.label<InputLabelProps>`
  color: ${(props) => (props.hasError ? Color.Alert : Color.GrayXDark)};
  display: block;
  font-size: ${FontSize.Small};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  margin-bottom: ${Spacing.XSmall};
`;

export const InputValueCss = css`
  color: ${Color.Primary};
  font-size: ${FontSize.Small};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
`;

export const InputValue = styled.label`
  ${InputValueCss};
`;

export const InputDisabledCss = css`
  color: ${Color.Gray};
  font-size: ${FontSize.Small};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};

  /* https://stackoverflow.com/a/45209441/3670829 */
  -webkit-text-fill-color: ${Color.GrayLight};
  opacity: 1;
  -webkit-opacity: 1;
`;

export const InputDisabled = styled.label`
  ${InputDisabledCss};
`;

export const InputCaption = styled.label`
  color: ${Color.GrayXDark};
  font-size: ${FontSize.XSmall};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  margin-top: ${Spacing.XSmall};
  display: block;
`;

export const InputCaptionError = styled(InputCaption)`
  color: ${Color.Alert};
`;

export const InputPlaceholderCss = css`
  color: ${Color.GrayDark};
  font-size: ${FontSize.Small};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
`;

export const InputPlaceholder = styled.label`
  pointer-events: none;
  ${InputPlaceholderCss};
`;

export const ProductPricePrefix = styled.span`
  color: ${Color.GrayDark};
  font-weight: ${FontWeight.Bold};
`;

export interface PriceProps {
  isFeatured?: boolean;
}

export const ProductPrice = styled.label<PriceProps>`
  color: ${(props) => (props.isFeatured ? Color.Alert : Color.Primary)};
  font-size: ${FontSize.Small};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
`;

export const ProductOldPrice = styled.label`
  color: ${Color.GrayDark};
  text-decoration: line-through;
  font-size: ${FontSize.XSmall};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Lighter};
`;

export const DT = styled.dt`
  display: inline;
  color: ${Color.GrayXDark};
  font-size: ${FontSize.Small};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
`;

export const DD = styled.dd`
  display: inline;
  color: ${Color.Primary};
  font-size: ${FontSize.Medium};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  margin: 0;
`;

// Utilities

export const Ellipsed = styled.span`
  max-width: 100%;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
