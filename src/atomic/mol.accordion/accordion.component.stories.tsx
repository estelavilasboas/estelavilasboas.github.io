import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Body, H3 } from '@atomic/atm.typography';

import { Accordion } from './accordion.component';

export default {
  title: 'Atomic/Molecules/Accordion',
} as Meta;

export const WithHeader: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <H3>With header</H3>
      <Accordion
        openedTitle='Opened'
        closedTitle='Closed'
        expanded={expanded}
        onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
      >
        {Array(5)
          .fill('')
          .map((_, index) => (
            <React.Fragment key={index}>
              <Body>Content</Body>
            </React.Fragment>
          ))}
      </Accordion>
    </>
  );
};

export const WithTrailingTitle: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <H3>With trailing title</H3>
      <Accordion
        openedTitle='Show less'
        closedTitle='Show more'
        expanded={expanded}
        onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
        trailing
      >
        {Array(5)
          .fill('')
          .map((_, index) => (
            <React.Fragment key={index}>
              <Body>Content</Body>
            </React.Fragment>
          ))}
      </Accordion>
    </>
  );
};
