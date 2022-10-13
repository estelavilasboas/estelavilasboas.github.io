import * as React from 'react';

import { Breakpoint } from '@atomic/obj.constants';

type BreakpointKeys = keyof typeof Breakpoint;

export const useMatchMedia = (breakPoint: BreakpointKeys = 'md') => {
  const [matchBreakpoint, setMatchBreakpoint] = React.useState<boolean>();

  React.useEffect(() => {
    const checkMatch = () => {
      const mediaQuery = window?.matchMedia(`(min-width: ${Breakpoint[breakPoint]}em)`);
      setMatchBreakpoint(!mediaQuery?.matches);
    };

    checkMatch();
    window.addEventListener('resize', checkMatch);
    return () => window.removeEventListener('resize', checkMatch);
  }, [breakPoint]);

  return { matchBreakpoint };
};
