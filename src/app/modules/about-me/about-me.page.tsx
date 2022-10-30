import { Body, Hbox, HDisplay, Spacing } from '../../atomic';
import { Row } from '../../atomic/obj.grid';
import * as React from 'react';
import { aboutMeStrings } from './about-me.strings';
import { BackgroundStyled, IntroductionWrapper } from './about-me.style';
import { ProfileImageWrapper, HorizontalImageWrapper } from './components/profile-image.style';
import { Separator } from '../../atomic/obj.box/box.component.style';

const strings = aboutMeStrings;

export const AboutMePage: React.FC = () => {
  return (
    <Row noGutter>
      <BackgroundStyled>
        <Separator size={Spacing.XXLarge} />
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
      <Separator size={Spacing.XXLarge} />

      <Hbox>
        <Hbox.Item>
          <HorizontalImageWrapper>
            <img alt="logo" src={'https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} />
          </HorizontalImageWrapper>
        </Hbox.Item>
        <Hbox.Separator />
        <div style={{width: '48px'}} />

        <Hbox.Item>
          <Separator size={Spacing.XXLarge} />
          <Separator size={Spacing.XXLarge} />
          <Separator size={Spacing.XXLarge} />

          <Body variant="primary">{strings.introduction}</Body>
        </Hbox.Item>
        <Hbox.Separator />
        <div style={{ width: '15%' }} />

      </Hbox>
      
    </Row>
  );
};
