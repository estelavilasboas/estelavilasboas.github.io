import * as React from 'react';

import { HeaderDeskStyled, HeaderMobileStyled } from './header.component.style';

const HeaderMobile: React.FC<{ children?: React.ReactNode }> = (props) => (
  <HeaderMobileStyled>{props.children}</HeaderMobileStyled>
);
const HeaderDesk: React.FC<{ children?: React.ReactNode }> = (props) => (
  <HeaderDeskStyled>{props.children}</HeaderDeskStyled>
);

export class Header extends React.Component<{ children?: React.ReactNode }> {
  static Mobile = HeaderMobile;
  static Desk = HeaderDesk;

  render() {
    return <div className='appHeader'>{this.props.children}</div>;
  }
}
