import styled from "styled-components";
import { useState } from "react";
import { RxPlus, RxMinus } from "react-icons/rx";
import { MdOutlineAddShoppingCart, MdCompareArrows } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

import ImageSection from "./ImageSection";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductContainer = styled.div`
  padding: 20px 50px;
  display: flex;
  gap: 40px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h1``;

const Price = styled.span`
  font-size: 30px;
  font-weight: 400;
  color: #242424;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: justify;
`;

const QuanityControlContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const DecrementButton = styled(Flex)`
  font-size: 14px;
  font-weight: 900;
  background: rgba(0, 0, 0, 0.2);
  color: #242424;
  height: 16px;
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`;

const Quantity = styled.p`
  color: #242424;
  font-size: 14px;
`;

const IncrementButton = styled(DecrementButton)``;

const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 28px;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  background: #397ce8;
  cursor: pointer;

  &:hover {
    background: #326cc8;
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
  gap: 20px;
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
  padding-left: 4px;
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

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const tempImages = [
    "https://images.pexels.com/photos/458649/pexels-photo-458649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const handleQtyDecrease = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };
  const handleQtyIncrease = () => {
    if (quantity === 9) return;
    setQuantity((prev) => prev + 1);
  };

  return (
    <ProductContainer>
      <ImageSection
        images={tempImages}
        selectedIndex={selectedImage}
        onIndexChange={setSelectedImage}
      />
      <RightSection>
        <SectionTitle>The best Hat Ever</SectionTitle>
        <Price>$199.00</Price>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
          nulla? Voluptas delectus veniam magni commodi ut sapiente alias natus
          ab! Repellat doloremque asperiores architecto a iusto unde. In,
          expedita earum. Fugiat voluptates quibusdam vero consequatur deleniti.
        </Description>
        <QuanityControlContainer>
          <DecrementButton onClick={handleQtyDecrease}>
            <RxMinus />
          </DecrementButton>
          <Quantity>{quantity}</Quantity>
          <IncrementButton onClick={handleQtyIncrease}>
            <RxPlus />
          </IncrementButton>
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
      </RightSection>
    </ProductContainer>
  );
};

export default Product;
