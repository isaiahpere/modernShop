import { useDispatch } from "react-redux";
import styled from "styled-components";
import { resetCart } from "../../Redux/cartReducer";

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SubtotalText = styled.span`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;

const SubtotalPrice = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const Checkout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 14px;
`;

const CheckoutButton = styled.button`
  padding: 0 20px;
  width: 50%;
  height: 30px;
  border: none;
  background: #397ce8;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border-radius: 24px;
  margin-bottom: 16px;
  cursor: pointer;
`;

const ResetCart = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: red;
  cursor: pointer;
`;

const CartTotalInfo = ({ products }) => {
  const dispatch = useDispatch();

  const subtotal = products
    .reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0)
    .toFixed(2);

  const handleResetCart = () => {
    dispatch(resetCart());
  };

  return (
    <>
      <TotalContainer>
        <SubtotalText>Subtotal</SubtotalText>
        <SubtotalPrice>${subtotal}</SubtotalPrice>
      </TotalContainer>
      <Checkout>
        <CheckoutButton>Checkout</CheckoutButton>
        <ResetCart onClick={handleResetCart}>Reset Cart</ResetCart>
      </Checkout>
    </>
  );
};

export default CartTotalInfo;
