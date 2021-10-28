import React from "react";

import { SiGithub } from "react-icons/si";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  LinkSpace,
} from "./InfoElements";





const InfoSection = ({
  id,
  lightBg,
  lightText,
  topLine,
  headLine,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
  dark,
  primary,
  darkText,
  dark2,
  hrefLink,
  displaybutton,
  widthImg,
  radiusImg,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText} >{description}</Subtitle>
                <BtnWrap href={hrefLink} target="_blank">
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    displaybutton={displaybutton ? 1 : 0}
                  >
                    <LinkSpace>
                      <SiGithub />
                    </LinkSpace>
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={img}
                  alt={alt}
                  widthImg={widthImg ? 1 : 0}
                  radiusImg={radiusImg ? 1 : 0 }
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
