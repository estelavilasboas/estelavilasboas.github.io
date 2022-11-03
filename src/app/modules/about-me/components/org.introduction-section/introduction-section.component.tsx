import * as React from "react";

import { Hbox, Separator, Spacing, Body } from "../../../../atomic";
import { aboutMeStrings } from "../../about-me.strings";
import { HorizontalImageWrapper } from "../atm.image";

const strings = aboutMeStrings;

export const IntroductionSection: React.FC = () => (
  <Hbox>
    <Hbox.Item>
      <Separator size={Spacing.XLarge} />
      <HorizontalImageWrapper>
        <img
          alt="logo"
          src={
            "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
        />
      </HorizontalImageWrapper>
    </Hbox.Item>
    <Hbox.Separator size={Spacing.XXLarge} />

    <Hbox.Item>
      <Separator size={Spacing.XXLarge} />
      <Separator size={Spacing.XXLarge} />
      <Body variant="primary">
        {strings.introduction}
        {strings.introduction}
        {strings.introduction}
      </Body>
      <Separator size={Spacing.XXLarge} />
    </Hbox.Item>
    <div style={{ width: "15%" }} />
  </Hbox>
);
