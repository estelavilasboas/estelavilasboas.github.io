import styled from "styled-components";
import { Border, Color, Spacing } from "../../../../atomic";

export const InfoWrapper = styled.div `
  position: absolute;
  width: 100%;
  bottom: 15%;
`; 

export const FooterWrapper = styled.div` 
  position: relative;
`;

export const FooterItem = styled.div`
  background-color: ${Color.Accessory3};
  border-radius: ${Border.RadiusLarge};
  padding: ${Spacing.XSmall} ${Spacing.XLarge};
`;
