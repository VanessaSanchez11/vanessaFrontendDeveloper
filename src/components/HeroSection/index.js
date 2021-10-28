import React, { useState } from "react";

import bgImage from "../../images/bg-img.jpg";
import {SocialIcons, SocialIconLink } from "../Footer/FooterElements";
import {FaInstagram} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs'
import {SiGithub} from 'react-icons/si'

import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  
} from "./HeroElements";

import 'animate.css';


const HeroSection = () => {
  // const [hover, setHover] = useState(false);

  

  return (
    <HeroContainer>
      <HeroBg>
        <ImgBg src={bgImage} alt="background-img" />
      </HeroBg>
      <HeroContent>
        <HeroH1 className="animate__animated animate__flipInX">¡Hi! I'm Vanessa</HeroH1>
        <HeroP className="animate__animated animate__backInLeft">
        I am a frontend developer, passionate about creating information systems and user interfaces.
        </HeroP>
        <HeroBtnWrapper>
          
          <SocialIcons className="animate__animated animate__backInUp">
            
            <SocialIconLink href="https://www.linkedin.com/in/vanessa-sanchez-7730591a5/" target="_blank" aria-label="Linked In" title="Linked In">
              <BsLinkedin />
            </SocialIconLink>
            <SocialIconLink href="https://github.com/VanessaSanchez11" target="_blank" aria-label="GitHub" title="Github">
              <SiGithub />
            </SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/vanessamc2/" target="_blank" aria-label="Instagram" title="Instagram">
              <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
