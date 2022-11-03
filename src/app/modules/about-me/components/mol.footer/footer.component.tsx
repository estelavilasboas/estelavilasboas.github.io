import * as React from "react";
import { Body, Hbox, Spacing } from "../../../../atomic";

import { FooterBackground, Avatar } from "../icons.component";
import { FooterItem, FooterWrapper, InfoWrapper } from "./footer.style";
import { Separator } from "../../../../atomic/obj.box/box.component.style";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterBackground />

      <InfoWrapper>
        <Hbox>
          <Hbox.Separator size={Spacing.XXLarge} />
          <Hbox.Separator size={Spacing.XXLarge} />

          <Hbox.Item vAlign="center">
            <FooterItem>
              <Body variant="primary">estelavilasboas01@gmail.com</Body>
            </FooterItem>
            <Separator />

            <FooterItem width={70}>
              <Body variant="primary">(49) 99833-3554</Body>
            </FooterItem>
            <Separator />

            <FooterItem width={80}>
              <Body variant="primary">linkedin.com/in/estelavilasboas/</Body>
            </FooterItem>
            <Separator />
          </Hbox.Item>
          <Hbox.Separator size={Spacing.XXLarge} />
          <Hbox.Separator size={Spacing.XXLarge} />

          <Hbox.Item noGrow>
            <Avatar />
          </Hbox.Item>

          <Hbox.Separator size={Spacing.XXLarge} />
          <Hbox.Separator size={Spacing.XXLarge} />
        </Hbox>
      </InfoWrapper>
    </FooterWrapper>
  );
};
