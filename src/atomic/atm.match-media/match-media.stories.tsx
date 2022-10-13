import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { useMatchMedia as useMatchMediaComponent } from './match-media.use-case';

export default {
  title: 'Atomic/Atoms/useMatchMedia',
} as Meta;

export const useMatchMedia: React.FC = () => {
  const { matchBreakpoint } = useMatchMediaComponent();
  return <>{matchBreakpoint ? <div>isMobile</div> : <div>notMobile</div>}</>;
};
