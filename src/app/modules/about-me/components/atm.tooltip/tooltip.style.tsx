import styled from "styled-components";
import { Color } from "../../../../atomic";

const HORIZONTAL_SHADOW = "10px";
const VERTICAL_SHADOW = "10px";
const SPREAD_RADIUS = "2px";

export const TooltipStyled = styled.div`
  width: 350px;
  height: 100%;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${Color.White};
  -webkit-box-shadow: ${HORIZONTAL_SHADOW} ${VERTICAL_SHADOW} 0px
    ${SPREAD_RADIUS} rgba(231, 218, 225, 1);
  -moz-box-shadow: ${HORIZONTAL_SHADOW} ${VERTICAL_SHADOW} 0px ${SPREAD_RADIUS}
    rgba(231, 218, 225, 1);
  box-shadow: ${HORIZONTAL_SHADOW} ${VERTICAL_SHADOW} 0px ${SPREAD_RADIUS}
    rgba(231, 218, 225, 1);
`;

export const TrianglePointingRight = styled.div`
  width: 0;
  height: 0;
  border-top: 1px solid ${Color.White};
  border-bottom: 30px solid transparent;
  border-left: 40px solid ${Color.White};
`;

export const TrianglePointingLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 1px solid ${Color.White};
  border-bottom: 30px solid transparent;
  border-right: 40px solid ${Color.White};
`;
