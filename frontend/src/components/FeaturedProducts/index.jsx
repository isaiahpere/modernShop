import styled from "styled-components";

import useFetch from "../../utilities/hooks/useFetch";
import InfoSection from "./InfoSection";
import Products from "./Products";
import Spinner from "../GlobalStyles/Spinner";

const SectionContainer = styled.div`
  margin: 60px 0;
`;

const LoadingContiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeaturedProducts = ({ type }) => {
  const url = `/products?populate=*&[filters][type][$eq]=${type}`;
  const { data, loading, error } = useFetch(url);

  return (
    <SectionContainer>
      <InfoSection title={type} />
      {loading ? <Spinner /> : <Products products={data} />}
    </SectionContainer>
  );
};

export default FeaturedProducts;
