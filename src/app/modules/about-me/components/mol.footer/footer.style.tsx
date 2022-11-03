import styled from "styled-components";
import { Border, Color, Spacing } from "../../../../atomic";

export const InfoWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 15%;
`;

export const FooterWrapper = styled.div`
  position: relative;
`;

interface FooterItemProps {
  width?: number;
}

export const FooterItem = styled.div<FooterItemProps>`
  background-color: ${Color.Accessory3};
  border-radius: ${Border.RadiusLarge};
  padding: 10px ${Spacing.XLarge};
  max-width: ${(props) => (props.width ? `${props.width}%` : "100%")};
`;
