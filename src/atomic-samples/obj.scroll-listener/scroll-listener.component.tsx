import * as React from 'react';
//import { hasDocument, hasWindow } from '@app/core/browser/platform';
const hasDocument = () => typeof document !== 'undefined';
const hasWindow = () => typeof window !== 'undefined';

export interface ScrollListenerProps {
  onAchieveEndOfScroll?: () => void;
}

export class ScrollListener extends React.Component<ScrollListenerProps, undefined> {
  componentDidMount() {
    if (!hasWindow()) {
      return;
    }

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    if (!hasWindow()) {
      return;
    }

    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (!hasDocument() || !hasWindow()) {
      return;
    }

    const scrollMaxHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    const isAtTheEndOfScroll = scrollY + windowHeight > 0.75 * scrollMaxHeight;
    if (isAtTheEndOfScroll && this.props.onAchieveEndOfScroll) {
      this.props.onAchieveEndOfScroll();
    }
  };

  render() {
    return <></>;
  }
}
