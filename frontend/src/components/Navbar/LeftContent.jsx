import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

import CustomLink from "../GlobalStyles/Link";
import NavItem from "../GlobalStyles/NavItem";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Country = styled.img``;

const ArrowDown = styled(IoIosArrowDown)``;

const ItemCurrency = styled.span``;

const LeftContent = () => {
  return (
    <Container>
      <NavItem>
        <Country src="/images/flag.png" />
        <ArrowDown />
      </NavItem>
      <NavItem>
        <ItemCurrency>USD</ItemCurrency>
        <ArrowDown />
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
