import styled from 'styled-components';
import { Border } from '../../../atomic/obj.constants';

const HORIZONTAL_SHADOW = '15px';
const VERTICAL_SHADOW = '13px';
const SPREAD_RADIUS = '4px';

const LEFT_POSITION = '60%';
const TOP_POSITION = '5%';

const MAX_WIDTH = '350px';

export const ProfileImageWrapper = styled.div`
  position: absolute;
  left: ${LEFT_POSITION};
  top: ${TOP_POSITION};
  max-width: ${MAX_WIDTH};
  border-radius: ${Border.RadiusLarge};
  overflow: hidden;
  -webkit-box-shadow: ${HORIZONTAL_SHADOW} ${VERTICAL_SHADOW} 0px ${SPREAD_RADIUS} rgba(231,218,225,1);
  -moz-box-shadow: ${HORIZONTAL_SHADOW} ${VERTICAL_SHADOW} 0px ${SPREAD_RADIUS} rgba(231,218,225,1);
  box-shadow: ${HORIZONTAL_SHADOW} ${VERTICAL_SHADOW} 0px ${SPREAD_RADIUS} rgba(231,218,225,1);
`;
