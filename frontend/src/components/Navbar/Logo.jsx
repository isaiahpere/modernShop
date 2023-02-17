import styled from "styled-components";
import CustomLink from "../GlobalStyles/Link";

const Container = styled.div``;

const Logo = () => {
  return (
    <Container>
      <CustomLink to="/" fontSize={30}>
        MODERN SHOP
      </CustomLink>
    </Container>
  );
};

export default Logo;
