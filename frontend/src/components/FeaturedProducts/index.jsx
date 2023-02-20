import styled from "styled-components";

import InfoSection from "./InfoSection";
import Products from "./Products";

const SectionContainer = styled.div`
  margin: 100px 200px;
`;

const FeaturedProducts = ({ type }) => {
  return (
    <SectionContainer>
      <InfoSection title={type} />
      <Products />
    </SectionContainer>
  );
};

export default FeaturedProducts;
