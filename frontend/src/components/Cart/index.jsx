import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";

import CartItem from "./CartItem";
import CartTotalInfo from "./CartTotalInfo";

const tempDate = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/6764007/pexels-photo-6764007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/6712033/pexels-photo-6712033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "jacket",
    description:
      "The best jacket you can wearm when is cold outside and you want to stay warm. Grab you jacket and quickly put it on with a one action zippper. You will not regret it",
    oldPrice: 12,
    price: 9,
    isNew: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/4960250/pexels-photo-4960250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    img2: "https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "jeans",
    description:
      "The best jacket you can wearm when is cold outside and you want to stay warm. Grab you jacket and quickly put it on with a one action zippper. You will not regret it",
    oldPrice: 26,
    price: 18,
    isNew: true,
  },
];

const Container = styled.div`
  position: absolute;
  top: 80px;
  right: 0px;
  width: 80vw;
  max-height: 80vh;
  background: #fff;
  z-index: 100;
  padding: 20px;
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

const CloseIcon = styled(IoMdCloseCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #242424;
  font-weight: 400;
  cursor: pointer;
  transition: transform 0.4s ease;
  &:hover {
    transform: rotate(180deg);
  }
  @media (min-width: 1024px) {
    font-size: 30px;
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

const Cart = ({ cartOpen, toggleCart }) => {
  const handleToggleCart = () => {
    toggleCart();
  };

  return (
    <Container cartOpen={cartOpen}>
      <CloseIcon onClick={handleToggleCart} />
      <CartHeader>Products In Your Cart</CartHeader>
      {tempDate.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
      <CartTotalInfo />
    </Container>
  );
};

export default Cart;
