import styled from "styled-components";

import CustomLink from "../GlobalStyles/Link";
import NavItem from "../GlobalStyles/NavItem";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    display: flex;
    gap: 24px;
  }

  @media (min-width: 1024px) {
  }
`;

const Logo = styled.img`
  width: 30px;

  @media (min-width: 768px) {
    width: 40px;
  }
`;

const LeftContent = () => {
  return (
    <Container>
      <NavItem>
        <CustomLink to="/">
          <Logo src="/images/logo.png" alt="" />
        </CustomLink>
      </NavItem>
      <NavItem>
        <CustomLink to="/products/1">Men</CustomLink>
      </NavItem>
      <NavItem>
        <CustomLink to="/products/2">Women</CustomLink>
      </NavItem>
      <NavItem>
        <CustomLink to="/products/3">Children</CustomLink>
      </NavItem>
    </Container>
  );
};

export default LeftContent;
