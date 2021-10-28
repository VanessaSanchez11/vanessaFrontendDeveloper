import React from "react";
import {  FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer id="contact">
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              VSM
            </SocialLogo>
            <WebsiteRights>
              Vane {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.linkedin.com/in/vanessa-sanchez-7730591a5/"
                target="_blank"
                aria-label="Linked In"
                title="Linked In"
              >
                <BsLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/VanessaSanchez11"
                target="_blank"
                aria-label="GitHub"
                title="Github"
              >
                <SiGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/vanessamc2/"
                target="_blank"
                aria-label="Instagram"
                title="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
