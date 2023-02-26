import styled from "styled-components";
import { FaOpencart } from "react-icons/fa";
import { enableBodyScroll } from "body-scroll-lock";

import CartItem from "./CartItem";
import CartTotalInfo from "./CartTotalInfo";
import { useSelector } from "react-redux";

const Layover = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 200;
  overflow: hidden;
`;

const Container = styled.div`
  position: absolute;
  top: 80px;
  right: 0px;
  width: 80vw;
  max-height: 80vh;
  background: #fff;
  z-index: 100;
  padding: 30px;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px 0 0 4px;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
  @media (min-width: 768px) {
    width: 50vw;
  }
  @media (min-width: 1024px) {
    width: 40vw;
  }
  @media (min-width: 1440px) {
    width: 25vw;
  }
`;

const CartHeader = styled.h1`
  font-size: 16px;
  color: var(--secondary);
  font-weight: 400;
  padding: 10px 0 20px 0;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const EmptyCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  min-height: 160px;
`;

const EmptyCartText = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #242424;
`;

const EmptyCartIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyCartIcon = styled(FaOpencart)`
  font-size: 80px;
`;

const Cart = ({ cartOpen, toggleCart }) => {
  // products
  const products = useSelector((state) => state.cart.products);
  const isCartEmpty = products.length < 1;

  const handleOutsideClick = () => {
    toggleCart();
    enableBodyScroll(document);
  };

  console.log("products from cart");
  console.log(products);

  return (
    <Layover cartOpen={cartOpen} onClick={handleOutsideClick}>
      {isCartEmpty && <div>Cart is empty</div>}
      <Container onClick={(e) => e.stopPropagation()}>
        {isCartEmpty && (
          <EmptyCartContainer>
            <EmptyCartText>Cart is empty!</EmptyCartText>
            <EmptyCartIconContainer>
              <EmptyCartIcon />
            </EmptyCartIconContainer>
          </EmptyCartContainer>
        )}
        {!isCartEmpty && (
          <>
            <CartHeader>Products In Your Cart</CartHeader>
            {products.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
            <CartTotalInfo products={products} />
          </>
        )}
      </Container>
    </Layover>
  );
};

export default Cart;
