import { Body, HDisplay, Separator, Spacing } from '../../atomic';
import { Row } from '../../atomic/obj.grid';
import * as React from 'react';
import { aboutMeStrings } from './about-me.strings';
import { BackgroundStyled, IntroductionWrapper } from './about-me.style';

const strings = aboutMeStrings;

export const AboutMePage: React.FC = () => {
  return (
    <Row noGutter>
      <BackgroundStyled>
        <Separator />
          <IntroductionWrapper>
            <HDisplay variant={'accessory'}>{strings.hello}</HDisplay>
            <Separator size={Spacing.XSmall} />

            <Body variant={'accessory3'}>{strings.introduction}</Body>
            <Separator />
          </IntroductionWrapper>
        <Separator />
      </BackgroundStyled>
    </Row>
  );
};
