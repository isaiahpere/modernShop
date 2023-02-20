import { featuredData } from "../../utilities/data/featuredData";
import styled from "styled-components";
import Card from "../GlobalStyles/Card";

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const Products = () => {
  return (
    <SectionContainer>
      {featuredData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </SectionContainer>
  );
};

export default Products;
