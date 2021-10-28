import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#CAF2FB" : "#212529")};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 45px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-family: var(--font-family-title);
`;
export const Heading = styled.h1`
  font-family: var(--font-family-title);
  margin-bottom: 24px;
  font-size: 58px;
  letter-spacing: 3px;
  text-align: center;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#4895EF" : "#212529")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 32px;
  text-align: justify;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.a`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
`;

export const LinkSpace = styled.span` 

  margin-right:10px;


`




export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width:${({widthImg}) => (widthImg ? '70%' : '100%')};
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius:${({radiusImg}) => (radiusImg ? '70%' : '0%')};
  height:450px;
  @media screen and (max-width: 380px) {
    height:420px;
  }
`;
