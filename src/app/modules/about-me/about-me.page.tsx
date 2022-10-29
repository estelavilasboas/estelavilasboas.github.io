import { Body, HDisplay, Separator, Spacing } from '../../atomic';
import { Row } from '../../atomic/obj.grid';
import * as React from 'react';
import { aboutMeStrings } from './about-me.strings';
import { BackgroundStyled, IntroductionWrapper } from './about-me.style';
import { ProfileImageWrapper } from './components/profile-image.style';

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

      <ProfileImageWrapper>
        <img alt="logo" src={'https://images.unsplash.com/photo-1666964613986-ee204609abbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} />
      </ProfileImageWrapper>
    </Row>
  );
};
