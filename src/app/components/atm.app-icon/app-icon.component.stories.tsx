import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { AppIcon } from './app-icon.component';

export default {
  title: 'App/Atoms/AppIcon',
  component: AppIcon.LoadingTooltipArrow,
} as Meta;

export const LogoIcon: React.FC = () => <AppIcon.Logo />;
export const LoadingTooltipArrowIcon: React.FC = () => <AppIcon.LoadingTooltipArrow />;
