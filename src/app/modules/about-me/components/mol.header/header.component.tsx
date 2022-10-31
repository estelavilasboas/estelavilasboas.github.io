import * as React from "react";

import {
  HDisplay,
  Separator,
  Spacing,
  Body,
  BackgroundColor,
} from "../../../../atomic";
import { aboutMeStrings } from "../../about-me.strings";
import { IntroductionWrapper } from "./header.style";
import { VerticalImageWrapper } from "../atm.image/image.style";

const strings = aboutMeStrings;

export const Header: React.FC = () => (
  <>
    <BackgroundColor>
      <IntroductionWrapper>
        <HDisplay variant={"accessory"}>{strings.hello}</HDisplay>
        <Separator size={Spacing.XSmall} />

        <Body variant={"accessory3"}>{strings.introduction}</Body>
        <Separator />
      </IntroductionWrapper>
    </BackgroundColor>

    <VerticalImageWrapper>
      <img
        alt="logo"
        src={
          "https://images.unsplash.com/photo-1666964613986-ee204609abbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
      />
    </VerticalImageWrapper>
  </>
);
