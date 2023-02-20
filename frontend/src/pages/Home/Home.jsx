import styled from "styled-components";

import Hero from "../../components/Hero";
import FeaturedProducts from "../../components/FeaturedProducts";

const HomeContainer = styled.div`
  /* overflow: hidden; */
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </HomeContainer>
  );
};

export default Home;
