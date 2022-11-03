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
      <Header />

      <IntroductionSection />
      <Separator size={Spacing.XLarge} />

      <BackgroundColor variant="accessory3">
        <H3 variant="accessory" style={{ textAlign: "center" }}>
          Trajetória
        </H3>
        <Separator size={Spacing.XLarge} />

        <Timeline items={aboutMeStrings.timeline} />

        <Footer />
      </BackgroundColor>
    </Row>
  );
};
