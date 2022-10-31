import { Hbox, Separator, Spacing } from "../../../../atomic";
import * as React from "react";
import { Tooltip, TooltipProps } from "../atm.tooltip";
import { BulletStyled, LineStyled } from "./timeline.style";

interface TimelineProps {
  items: TooltipProps[];
}


export const Timeline: React.FC<TimelineProps> = ({ items }) => (
  <>
    {items.map((item, index) => {
      const pointingSide = index % 2 === 0 ? "right" : "left";
      const isLastItem = index === items?.length - 1;

      return (
        <TimelineItem {...item} side={pointingSide} isLastItem={isLastItem} />
      );
    })}
  </>
);

interface TimelineItemProps extends TooltipProps {
  isLastItem?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = (props) => {
  const hideRight = props.side === "right";
  const hideLeft = props.side === "left";

  return (
    <Hbox>
      <Hbox.Item hAlign="flex-end" style={{ visibility: hideLeft ? 'hidden' : 'visible' }}>
        <Tooltip {...props} />
        <Separator size={Spacing.XLarge} />
      </Hbox.Item>
      <Hbox.Separator size={Spacing.XLarge} />

      <Hbox.Item noGrow>
        <BulletStyled />
        {!props.isLastItem && <LineStyled />}
      </Hbox.Item>
      <Hbox.Separator size={Spacing.XLarge} />

      <Hbox.Item style={{ visibility: hideRight ? 'hidden' : 'visible' }}>
        <Tooltip {...props} />
        <Separator size={Spacing.XLarge} />
      </Hbox.Item>
    </Hbox>
  );
};
