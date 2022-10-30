import { Body, BodySecondary, H3, H4, Hbox, HDisplay, Spacing } from '../../atomic';
import { Row } from '../../atomic/obj.grid';
import * as React from 'react';
import { aboutMeStrings } from './about-me.strings';
import { BackgroundStyled, BulletStyled, Divider, IntroductionWrapper, LineStyled, TooltipStyled } from './about-me.style';
import { VerticalImageWrapper, HorizontalImageWrapper } from './components/profile-image.style';
import { Separator } from '../../atomic/obj.box/box.component.style';

const strings = aboutMeStrings;

export const AboutMePage: React.FC = () => {
  return (
    <Row noGutter>
      <BackgroundStyled>
        <IntroductionWrapper>
          <HDisplay variant={'accessory'}>{strings.hello}</HDisplay>
          <Separator size={Spacing.XSmall} />

          <Body variant={'accessory3'}>{strings.introduction}</Body>
          <Separator />
        </IntroductionWrapper>
      </BackgroundStyled>

      <VerticalImageWrapper>
        <img alt="logo" src={'https://images.unsplash.com/photo-1666964613986-ee204609abbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} />
      </VerticalImageWrapper>

      <Hbox>
        <Hbox.Item>
          <Separator size={Spacing.XLarge} />
          <HorizontalImageWrapper>
            <img alt="logo" src={'https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} />
          </HorizontalImageWrapper>
        </Hbox.Item>
        <Hbox.Separator size={Spacing.XXLarge} />

        <Hbox.Item>
          <Separator size={Spacing.XXLarge} />
          <Separator size={Spacing.XLarge} />
          <Body variant="primary">{strings.introduction}{strings.introduction}{strings.introduction}</Body>
          <Separator size={Spacing.XXLarge} />
        </Hbox.Item>
        <div style={{ width: '15%' }} />
      </Hbox>
      <Separator size={Spacing.XXLarge} />

      <BackgroundStyled variant="accessory3">
        <H3 variant="accessory">Trajetória</H3>
        <Separator size={Spacing.XXLarge} />

        <Hbox>
          <Hbox.Item hAlign='flex-end'>
            <TooltipStyled>
              <Body>Trajetória</Body>
              <Divider />

              <Body>Trajetória</Body>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary> <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary> <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary> <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary> <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
              <BodySecondary>Trajetória</BodySecondary>
            </TooltipStyled>
          </Hbox.Item>
          <Hbox.Separator size={Spacing.XLarge} />

          <Hbox.Item noGrow>
            <BulletStyled />
            <LineStyled />
          </Hbox.Item>
          <Hbox.Separator size={Spacing.XLarge} />

          <Hbox.Item hAlign='flex-start'>
            <TooltipStyled>
              <Body>Trajetória</Body>
              <Divider />

              <Body>Trajetória</Body>
              <BodySecondary>Trajetória</BodySecondary>
            </TooltipStyled>
          </Hbox.Item>
        </Hbox>


      </BackgroundStyled>


    </Row>
  );
};
