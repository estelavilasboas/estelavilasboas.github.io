import * as React from 'react';

import { FrameStyled } from './frame.component.style';

export const Frame: React.FC<{ children?: React.ReactNode }> = (props) => {
  return <FrameStyled>{props.children}</FrameStyled>;
};
