import * as React from 'react';

import { Button } from '@atomic/atm.button';
import { Separator } from '@atomic/obj.box';
import { Spacing } from '@atomic/obj.constants';

import { AccordionCollapsibleStyled } from './accordion.component.style';

interface AccordionProps {
  openedTitle: string;
  closedTitle: string;
  expanded: boolean;
  trailing?: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = (props) => {
  const [currentHeight, setCurrentHeight] = React.useState(0);

  const measureElement = (element: HTMLDivElement) => {
    const values = element?.getBoundingClientRect();
    if (values?.height && values?.height !== currentHeight) {
      setCurrentHeight(values.height);
    }
  };

  return (
    <>
      {!props.trailing && (
        <>
          <Button variant='link' onClick={props.onClick}>
            {props.expanded ? props.openedTitle : props.closedTitle}
          </Button>
          <Separator size={Spacing.Small} />
        </>
      )}

      <AccordionCollapsibleStyled expanded={props.expanded} contentHeight={currentHeight}>
        <div ref={measureElement}>{props.children}</div>
      </AccordionCollapsibleStyled>

      {props.trailing && (
        <>
          {props.expanded && <Separator size={Spacing.Small} />}
          <Button variant='link' onClick={props.onClick}>
            {props.expanded ? props.openedTitle : props.closedTitle}
          </Button>
        </>
      )}
    </>
  );
};
