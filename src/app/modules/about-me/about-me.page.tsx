import {
  BackgroundColor,
  Body,
  BodySecondary,
  Divider,
  H3,
  Hbox,
  Spacing,
} from "../../atomic";
import { Row } from "../../atomic/obj.grid";
import * as React from "react";
import {
  BulletStyled,
  LineStyled,
  TooltipStyled,
  TrianglePointingLeft,
  TrianglePointingRight,
} from "./about-me.style";
import { Separator } from "../../atomic/obj.box/box.component.style";
import { Header } from "./components/mol.header/header.component";
import { IntroductionSection } from "./components/mol.introduction-section/introduction-section.component";

export const AboutMePage: React.FC = () => {
  return (
    <Row noGutter>
      <Header />

      <IntroductionSection />
      <Separator size={Spacing.XXLarge} />

      <BackgroundColor variant="accessory3">
        <H3 variant="accessory">Trajetória</H3>
        <Separator size={Spacing.XXLarge} />

        <Hbox>
          <Hbox.Item hAlign="flex-end">
            <TooltipStyled>
              <Body>Trajetória</Body>
              <Divider />
              <Body>Trajetória</Body>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>{" "}
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>{" "}
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>{" "}
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>{" "}
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
            </TooltipStyled>
          </Hbox.Item>
          <Hbox.Item noGrow>
            <TrianglePointingRight />
          </Hbox.Item>
          <Hbox.Separator size={Spacing.XLarge} />

          <Hbox.Item noGrow>
            <BulletStyled />
            <LineStyled />
          </Hbox.Item>
          <Hbox.Separator size={Spacing.XLarge} />

          <Hbox.Item noGrow>
            <TrianglePointingLeft />
          </Hbox.Item>

          <Hbox.Item hAlign="flex-start">
            <TooltipStyled>
              <Body>Trajetória</Body>
              <Divider />

              <Body>Trajetória</Body>
              <BodySecondary>Trajetória</BodySecondary>
            </TooltipStyled>
          </Hbox.Item>
        </Hbox>
      </BackgroundColor>
    </Row>
  );
};
