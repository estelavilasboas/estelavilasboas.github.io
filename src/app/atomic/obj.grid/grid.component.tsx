import { Container, Col as FlexCol, Row as FlexRow } from "react-grid-system";
import styled from "styled-components";

import { Breakpoint, Spacing } from "../obj.constants";

export interface RowProps {
  mb?: boolean;
  mt?: boolean;
  noGutter?: boolean;
}

const RowStyled = styled(FlexRow)<RowProps>`
  margin-bottom: ${(props) => (props.mb ? Spacing.Medium : "0px")};
  margin-top: ${(props) => (props.mt ? Spacing.Medium : "0px")};
  ${(props) => {
    if (props.noGutter) {
      return `overflow: hidden;
              margin-left: -${rowMargin}rem;
              margin-right: -${rowMargin}rem;`;
    } else {
      return "";
    }
  }}
`;

export const Grid = Container;
export const Col = FlexCol;
export const Row = RowStyled;

export const GridSettings = {
  gridColumns: 12,
  // Defaults
  gutterWidth: 30, //px
  breakpoints: [
    Breakpoint.sm,
    Breakpoint.md,
    Breakpoint.lg,
    Breakpoint.xl,
    Breakpoint.xxl,
  ],
};

export const rowMargin = GridSettings.gutterWidth / 2;
