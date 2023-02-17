import styled from "styled-components";
import { HiOutlineSearch } from "react-icons/hi";
import { MdPersonOutline } from "react-icons/md";
import { BiHeart } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";

import CustomLink from "../GlobalStyles/Link";
import NavItem from "../GlobalStyles/NavItem";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const CartContainer = styled.div`
  position: relative;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  color: #777777;
  cursor: pointer;
`;

const SearchIcon = styled(HiOutlineSearch)`
  font-size: 24px;
`;

const HeartIcon = styled(BiHeart)`
  font-size: 24px;
`;

const PersonIcon = styled(MdPersonOutline)`
  font-size: 24px;
`;

const CartIcon = styled(MdOutlineShoppingCart)`
  font-size: 24px;
`;

const CartBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -6px;
  background: #2879fe;
  font-size: 10px;
  font-weight: 600;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  color: #ffffff;
`;

const RightContent = () => {
  return (
    <Container>
      <NavItem>
        <CustomLink to="/">Home</CustomLink>
      </NavItem>
      <NavItem>
        <CustomLink to="/">About</CustomLink>
      </NavItem>
      <NavItem>
        <CustomLink to="/">Contact</CustomLink>
      </NavItem>
      <NavItem>
        <CustomLink to="/">Stores</CustomLink>
      </NavItem>
      <IconContainer>
        <NavItem>
          <SearchIcon />
        </NavItem>
        <NavItem>
          <HeartIcon />
        </NavItem>
        <NavItem>
          <PersonIcon />
        </NavItem>
        <NavItem>
          <CartContainer>
            <CartIcon />
            <CartBadge>21</CartBadge>
          </CartContainer>
        </NavItem>
      </IconContainer>
    </Container>
  );
};

export default RightContent;
