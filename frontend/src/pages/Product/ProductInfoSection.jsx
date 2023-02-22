import styled from "styled-components";
import { RxPlus, RxMinus } from "react-icons/rx";
import { MdOutlineAddShoppingCart, MdCompareArrows } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SectionTitle = styled.h1`
  text-transform: uppercase;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 1024px) {
    font-size: 26px;
  }
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #242424;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

const Description = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-align: justify;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const QuanityControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;

  @media (min-width: 1024px) {
    justify-content: unset;
  }
`;

const QuantityButton = styled(Flex)`
  font-size: 14px;
  font-weight: 900;
  background: rgba(0, 0, 0, 0.2);
  color: #242424;
  height: 18px;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
  @media (min-width: 768px) {
    height: 24px;
  }
`;

const DecreaseIcon = styled(RxMinus)`
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
const IncreaseIcon = styled(RxPlus)`
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Quantity = styled.p`
  color: #242424;
  font-size: 14px;
`;

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  background: #397ce8;
  cursor: pointer;
  &:hover {
    background: #326cc8;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const CartIcon = styled(MdOutlineAddShoppingCart)`
  width: 20px;
  height: 20px;
`;

const CartText = styled.div`
  padding-left: 10px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 12px;
  @media (min-width: 1024px) {
    align-items: unset;
    justify-content: unset;
  }
`;

const LinkItem = styled.div`
  display: flex;
  align-items: center;
  color: #2879fe;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #3977d9;
  }
`;

const LikeIcon = styled(AiOutlineHeart)``;

const CompareIcon = styled(MdCompareArrows)``;

const LinkText = styled.p`
  text-transform: uppercase;
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const InfoItem = styled.span`
  font-size: 12px;
  color: gray;
`;

const ProductInfoSection = ({ increaseQty, decreaseQty, quantity }) => {
  return (
    <SectionContainer>
      <SectionTitle>The best Hat Ever</SectionTitle>
      <Price>$199.00</Price>
      <Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, nulla?
        Voluptas delectus veniam magni commodi ut sapiente alias natus ab!
        Repellat doloremque asperiores architecto a iusto unde. In, expedita
        earum. Fugiat voluptates quibusdam vero consequatur deleniti.
      </Description>
      <QuanityControlContainer>
        <QuantityButton onClick={decreaseQty}>
          <DecreaseIcon />
        </QuantityButton>
        <Quantity>{quantity}</Quantity>
        <QuantityButton onClick={increaseQty}>
          <IncreaseIcon />
        </QuantityButton>
      </QuanityControlContainer>
      <AddToCartButton>
        <CartIcon />
        <CartText>add to cart</CartText>
      </AddToCartButton>
      <LinksContainer>
        <LinkItem>
          <LikeIcon />
          <LinkText>add to wish list</LinkText>
        </LinkItem>
        <LinkItem>
          <CompareIcon />
          <LinkText>add to compare</LinkText>
        </LinkItem>
      </LinksContainer>
      <InfoContainer>
        <InfoItem>Vendor: Polo</InfoItem>
        <InfoItem>Product Type: T-Shirt</InfoItem>
        <InfoItem>Tag: T-Shirt, Women, Top</InfoItem>
      </InfoContainer>
    </SectionContainer>
  );
};

export default ProductInfoSection;
