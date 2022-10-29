import styled from 'styled-components';
import { Border } from '../../../atomic/obj.constants';

export const ProfileImageWrapper = styled.div`
  position: absolute;
  left: 60%;
  top: 5%;
  max-width: 350px;
  border-radius: ${Border.RadiusLarge};
  overflow: hidden;
  -webkit-box-shadow: 15px 13px 0px 4px rgba(231,218,225,1);
  -moz-box-shadow: 15px 13px 0px 4px rgba(231,218,225,1);
  box-shadow: 15px 13px 0px 4px rgba(231,218,225,1);
`;
