import {
  BackgroundColor,
  Body,
  BodySecondary,
  Divider,
  H3,
  Hbox,
  H1,
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
      {/* WIP WARNING START */}
      <BackgroundColor style={{ position: "absolute", zIndex: 1, textAlign: "center"}}>
        <H1 variant='white'>WIP</H1>
        <H3 variant='white'>Hi! This website is a work in progress. Soon it will be available.</H3>
      </BackgroundColor>
      <Separator size={Spacing.XXLarge} />
      <Separator size={Spacing.XXLarge} />
      {/* WIP WARNING END */}

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
