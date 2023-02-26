import styled from "styled-components";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled(Flex)`
  background: #2879fe;
  color: #ffffff;
  padding: 15px;

  margin-bottom: 45px;
`;

const Wrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  /* width: 50%; */
`;

const CustomText = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const EmailContainer = styled.div`
  height: 25px;
  margin-bottom: 12px;
`;

const EmailInput = styled.input`
  border: none;
  width: 200px;
  padding: 5px;
  border-radius: 4px 0 0 4px;

  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`;

const EmailButton = styled.button`
  border: none;
  height: 100%;
  width: 65px;
  background: #242424;
  color: #ffffff;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background: #3f3f3f;
  }
`;

const IconsContainer = styled(Flex)`
  justify-content: space-between;
  width: 140px;
`;

const Icon = styled(Link)`
  cursor: pointer;
  color: #242424;
  font-size: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <CustomText>Connect With Us Now!</CustomText>
        <EmailContainer>
          <EmailInput type="text" placeholder="johnDoe@email.com" />
          <EmailButton>Subscribe</EmailButton>
        </EmailContainer>
        <IconsContainer>
          <Icon to="https://www.facebook.com" target="_blank">
            <FaFacebook />
          </Icon>
          <Icon to="https://www.instagram.com" target="_blank">
            <FaInstagramSquare />
          </Icon>
          <Icon to="https://www.youtube.com" target="_blank">
            <FaYoutubeSquare />
          </Icon>
          <Icon to="https://www.twitter.com" target="_blank">
            <FaTwitterSquare />
          </Icon>
        </IconsContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
