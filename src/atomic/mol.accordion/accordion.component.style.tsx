import styled from 'styled-components';

interface AccordionCollapsibleProps {
  expanded: boolean;
  contentHeight: number;
}

export const AccordionCollapsibleStyled = styled.div<AccordionCollapsibleProps>`
  max-height: ${(props) => (props.expanded ? `${props.contentHeight}px` : '0px')};
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    -moz-transition: max-height 0.3s ease-in-out;
    -ms-transition: max-height 0.3s ease-in-out;
    -o-transition: max-height 0.3s ease-in-out;
    -webkit-transition: max-height 0.3s ease-in-out;
    transition: max-height 0.3s ease-in-out;
  }
`;
