import { Link } from "react-router-dom";

import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled(Link)``;

const CardContainer = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 5px;
`;

const ImageBadge = styled(Flex)`
  position: absolute;
  left: 5px;
  top: 5px;
  width: 44px;
  height: 18px;
  border-radius: 24px;
  font-size: 10px;
  color: #ffffff;
  font-weight: 600;
  z-index: 5;
  padding-bottom: 2px;
  background: rgba(0, 0, 0, 0.3);
`;

const ImageFront = styled.img`
  position: absolute;
  width: 100%;
  opacity: 1;
  z-index: 2;
  transition: opacity 0.5s ease;
  &:hover {
    opacity: 0;
  }
`;

const ImageBack = styled.img`
  position: absolute;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
  padding: 0 2px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2px;
  gap: 12px;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #242424;
  ${(props) =>
    props.oldPrice &&
    `
    color: gray;
    text-decoration: line-through;
    font-weight: 400;
  `}
`;

const Card = ({ item }) => {
  return (
    <Container to={`/product/${item.id}`}>
      <CardContainer>
        <ImageWrapper>
          {item.isNew && <ImageBadge>New</ImageBadge>}
          <ImageFront src={item.img} alt={item.title} />
          <ImageBack src={item.img2} alt={item.title} />
        </ImageWrapper>
        <Title>{item.title}</Title>
        <PriceContainer>
          <Price oldPrice>${item.oldPrice}</Price>
          <Price>${item.price}</Price>
        </PriceContainer>
      </CardContainer>
    </Container>
  );
};

export default Card;
