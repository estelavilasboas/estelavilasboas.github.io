import { BackgroundColor, H3, H1, Spacing } from "../../atomic";
import { Row } from "../../atomic/obj.grid";
import * as React from "react";
import { Separator } from "../../atomic/obj.box/box.component.style";
import { Header } from "./components/org.header/header.component";
import { IntroductionSection } from "./components/org.introduction-section/introduction-section.component";
import { Timeline } from "./components/mol.timeline/timeline.component";
import { aboutMeStrings } from "./about-me.strings";
import { Footer } from "./components/mol.footer/footer.component";

export const AboutMePage: React.FC = () => {
  return (
    <Row noGutter>
      {/* WIP WARNING START */}
      <BackgroundColor
        style={{ position: "absolute", zIndex: 1, textAlign: "center" }}
      >
        <H1 variant="white">WIP</H1>
        <H3 variant="white">
          Hi! This website is a work in progress. Soon it will be available.
        </H3>
      </BackgroundColor>
      <Separator size={Spacing.XXLarge} />
      <Separator size={Spacing.XXLarge} />
      {/* WIP WARNING END */}

      <Header />

      <IntroductionSection />
      <Separator size={Spacing.XXLarge} />

      <BackgroundColor variant="accessory3">
        <H3 variant="accessory" style={{ textAlign: "center" }}>
          Trajetória
        </H3>
        <Separator size={Spacing.XXLarge} />

        <Timeline items={aboutMeStrings.timeline} />

        <Footer /> 

      </BackgroundColor>
    </Row>
  );
};
