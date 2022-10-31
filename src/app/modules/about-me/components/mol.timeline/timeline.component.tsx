import {
  Hbox,
  Separator,
  Spacing,
} from "../../../../atomic";
import * as React from "react";
import { Tooltip } from "../atm.tooltip";
import { BulletStyled, LineStyled } from "./timeline.style";

export const Timeline: React.FC = () => (
  <Hbox>
    <Hbox.Item hAlign="flex-end">
      <Tooltip
        side="right"
        jobTitle="aaaaaa"
        employer="bbbbbb"
        startDate="janieor"
        endDate="dsddsad"
        description="dsadasd defnks jdah dasjh das hdjsha hdsa hd hjas jhdh jsd jaw jhsdh jash jdah jsdh jas hjd hjas jhdh jash jda hs"
      />
      <Separator size={Spacing.XLarge} />
    </Hbox.Item>
    <Hbox.Separator size={Spacing.XLarge} />

    <Hbox.Item noGrow>
      <BulletStyled />
      <LineStyled />
    </Hbox.Item>
    <Hbox.Separator size={Spacing.XLarge} />

    <Hbox.Item>
      <Tooltip
        side="left"
        jobTitle="aaaaaa"
        employer="bbbbbb"
        startDate="janieor"
        endDate="dsddsad"
        description="dsadasd defnks jdah dasjh das hdjsha hdsa hd hjas jhdh jsd jaw jhsdh jash jdah jsdh jas hjd hjas jhdh jash jda hs"
      />
      <Separator size={Spacing.XLarge} />
    </Hbox.Item>
  </Hbox>
);