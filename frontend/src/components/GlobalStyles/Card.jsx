import { Link } from "react-router-dom";

import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled(Link)`
  padding: 0 10px;
  margin-bottom: 16px;

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const CardContainer = styled.div`
  width: 340px;
  height: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 240px;
    height: auto;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 5px;
  padding-bottom: 4px;
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
  height: 100%;
  object-fit: cover;
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
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  text-transform: capitalize;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #54aa54;
  ${(props) =>
    props.oldPrice &&
    `
    color: gray;
    text-decoration: line-through;
    font-weight: 400;
  `}
`;

const Card = ({ item }) => {
  const imageOne = `${process.env.REACT_APP_UPLOAD_URL}${item.attributes?.image?.data?.attributes?.url}`;
  const imageTwo = `${process.env.REACT_APP_UPLOAD_URL}${item.attributes?.image2?.data?.attributes?.url}`;
  return (
    <Container to={`/product/${item.id}`}>
      <CardContainer>
        <ImageWrapper>
          {item.attributes.isNew && <ImageBadge>New</ImageBadge>}
          <ImageFront src={imageOne} alt={item.title} />
          <ImageBack src={imageTwo} alt={item.title} />
        </ImageWrapper>
        <Title>{item.attributes.title}</Title>
        <PriceContainer>
          <Price>${Number(item.attributes.price).toFixed(2)}</Price>
        </PriceContainer>
      </CardContainer>
    </Container>
  );
};

export default Card;
