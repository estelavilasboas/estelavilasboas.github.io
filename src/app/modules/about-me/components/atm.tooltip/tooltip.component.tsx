import { Body, BodySecondary, Divider, H3, Hbox } from "../../../../atomic";
import {
  TooltipStyled,
  TrianglePointingLeft,
  TrianglePointingRight,
} from "./tooltip.style";

export interface TooltipProps {
  jobTitle?: string;
  employer?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  side?: "right" | "left";
}

export const Tooltip: React.FC<TooltipProps> = (props) => (
  <Hbox>
    {props.side === "left" && (
      <Hbox.Item noGrow>
        <TrianglePointingLeft />
      </Hbox.Item>
    )}

    <Hbox.Item noGrow>
      <TooltipStyled>
        <H3 variant="secondary">{props.jobTitle}</H3>
        <Divider />
        <Body variant="secondary">{props.employer}</Body>
        <Body variant="secondary">
          {props.startDate} - {props.endDate}
        </Body>
        <BodySecondary variant="secondary">{props.description}</BodySecondary>
      </TooltipStyled>
    </Hbox.Item>

    {props.side === "right" && (
      <Hbox.Item noGrow>
        <TrianglePointingRight />
      </Hbox.Item>
    )}
  </Hbox>
);
