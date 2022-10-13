/* eslint-disable react/display-name */
import * as React from 'react';

import Logo from '../../../assets/icons/apple-touch-icon.png';
import LoadingTooltipArrow from '../../../assets/img/img_tooltip_arrow.png';

export const AppIcon = {
  LoadingTooltipArrow: () => <img alt='' src={LoadingTooltipArrow} width='40px' />,
  Logo: () => <img alt='' src={Logo} width='40px' />,
};
