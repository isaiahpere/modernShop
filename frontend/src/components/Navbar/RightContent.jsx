import styled from "styled-components";
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { disableBodyScroll } from "body-scroll-lock";

import NavItem from "../GlobalStyles/NavItem";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const CartContainer = styled.div`
  position: relative;
  padding-right: 10px;
`;

const IconContainer = styled.div``;

const PersonIcon = styled(MdOutlinePersonOutline)`
  font-size: 24px;
  color: #242424;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const CartIcon = styled(HiOutlineShoppingCart)`
  font-size: 22px;
  color: #242424;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const CartBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -30%;
  right: 8%;
  background: #2879fe;
  font-size: 10px;
  font-weight: 600;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  color: #ffffff;
`;

const RightContent = ({ changeCartVisible }) => {
  const products = useSelector((state) => state.cart.products);
  const totalProductQuantity = products.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const toggleCart = () => {
    disableBodyScroll(document);
    changeCartVisible((prev) => !prev);
  };

  return (
    <Container>
      <NavItem>
        <IconContainer>
          <PersonIcon />
        </IconContainer>
      </NavItem>
      <NavItem>
        <CartContainer onClick={toggleCart}>
          <IconContainer>
            <CartIcon />
          </IconContainer>
          {totalProductQuantity > 0 && (
            <CartBadge>{totalProductQuantity}</CartBadge>
          )}
        </CartContainer>
      </NavItem>
    </Container>
  );
};

export default RightContent;
