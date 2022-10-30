import styled from 'styled-components';
import { Border, Spacing } from '../../../atomic/obj.constants';

const HORIZONTAL_SHADOW = '10px';
const VERTICAL_SHADOW = '10px';
const SPREAD_RADIUS = '2px';

const RIGHT_POSITION = '15%';
const TOP_POSITION = '10%';

const MAX_WIDTH = '300px';
const MAX_HEIGHT = '500px';
const MAX_HORIZONTAL_WIDTH = '700px';

export const ProfileImageWrapper = styled.div`
  position: absolute;
  right: ${RIGHT_POSITION};
  top: ${TOP_POSITION};
  max-width: ${MAX_WIDTH};
  max-height: ${MAX_HEIGHT};
  border-radius: ${Border.RadiusLarge};
  overflow: hidden;
  -webkit-box-shadow: ${HORIZONTAL_SHADOW} ${VERTICAL_SHADOW} 0px ${SPREAD_RADIUS} rgba(231,218,225,1);
  -moz-box-shadow: ${HORIZONTAL_SHADOW} ${VERTICAL_SHADOW} 0px ${SPREAD_RADIUS} rgba(231,218,225,1);
  box-shadow: ${HORIZONTAL_SHADOW} ${VERTICAL_SHADOW} 0px ${SPREAD_RADIUS} rgba(231,218,225,1);
`;

export const HorizontalImageWrapper = styled.div`
  overflow: hidden;
  max-height: ${MAX_WIDTH};
  max-width: ${MAX_HORIZONTAL_WIDTH};
  margin-bottom: ${Spacing.XLarge};
  border-radius: 0 ${Border.RadiusLarge} ${Border.RadiusLarge} 0;
  -webkit-box-shadow: ${HORIZONTAL_SHADOW} ${VERTICAL_SHADOW} 0px ${SPREAD_RADIUS} rgba(231,218,225,1);
  -moz-box-shadow: ${HORIZONTAL_SHADOW} ${VERTICAL_SHADOW} 0px ${SPREAD_RADIUS} rgba(231,218,225,1);
  box-shadow: ${HORIZONTAL_SHADOW} ${VERTICAL_SHADOW} 0px ${SPREAD_RADIUS} rgba(231,218,225,1);
`;
