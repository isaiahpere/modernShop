import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
`;

const Image = styled.img`
  width: 80px;
  height: 50px;
  object-fit: cover;
`;

const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemTitle = styled.h1`
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

const ItemDescription = styled.p`
  font-size: 10px;
  color: grey;
  padding: 2px 0;
  padding-right: 20px;
`;

const ItemPrice = styled.div`
  font-size: 12px;
  color: #54aa54;
`;

const TrashContainer = styled.div`
  width: 14px;
`;
const TrashIcon = styled(FaRegTrashAlt)`
  font-size: 14px;
  color: red;
  cursor: pointer;
  &:hover {
    color: #b09595;
  }
`;

const CartItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} alt="" />
      <CartInfoContainer>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemDescription>
          {item.description?.substring(0, 60)}...
        </ItemDescription>
        <ItemPrice>1 x ${item.price}</ItemPrice>
      </CartInfoContainer>
      <TrashContainer>
        <TrashIcon />
      </TrashContainer>
    </Container>
  );
};

export default CartItem;
