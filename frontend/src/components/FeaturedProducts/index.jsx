import styled from "styled-components";

import InfoSection from "./InfoSection";
import Products from "./Products";

const SectionContainer = styled.div`
  margin: 60px 0;
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
