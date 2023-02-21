import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LinkButton = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  min-width: 100px;
  text-align: center;
  text-transform: uppercase;
  width: fit-content;
  height: 30px;
  padding: 6px 16px;
  background: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
`;

const Image = ({ linkText, path, imageSource }) => {
  return (
    <Container>
      <Img src={imageSource} alt={linkText} />

      <LinkButton to={path}>{linkText}</LinkButton>
    </Container>
  );
};

export default Image;
