import styled from "styled-components";
import BottomSection from "./BottomSection";
import TopSection from "./TopSection";

const FooterContainer = styled.div`
  margin: 100px 100px 20px 100px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TopSection></TopSection>
      <BottomSection></BottomSection>
    </FooterContainer>
  );
};

export default Footer;
