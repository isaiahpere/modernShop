import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import { axiosRequest } from "../../utilities/axios/axiosRequest";

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

  const stripePromise = loadStripe(
    "pk_test_51MfsNdFUngB0guL8sFMjtat5huZ38qlbmlV54qkROFbbbMxHH7Z7o1Cm0y4rOFcZYfEu7W0UTc2fwP3TfXKQhywh00SPWVTVTf"
  );
  // make a request to stripe for payment processing
  const handleCheckout = async () => {
    try {
      // stripe promise - needs to be outside of component so to not rerender
      const stripe = await stripePromise;
      const res = await axiosRequest.post("/orders", { products });

      // redirect to stripe checkout site
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log("There is an error handling checkout");
      console.log(err);
    }
  };

  return (
    <>
      <TotalContainer>
        <SubtotalText>Subtotal</SubtotalText>
        <SubtotalPrice>${subtotal}</SubtotalPrice>
      </TotalContainer>
      <Checkout>
        <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
        <ResetCart onClick={handleResetCart}>Reset Cart</ResetCart>
      </Checkout>
    </>
  );
};

export default CartTotalInfo;
