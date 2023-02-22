import { featuredData } from "../../utilities/data/featuredData";
import styled from "styled-components";
import Card from "../GlobalStyles/Card";

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
  @media (min-width: 1440px) {
    gap: 20px;
  }
`;

const Products = ({ products }) => {
  return (
    <SectionContainer>
      {products.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </SectionContainer>
  );
};

export default Products;
