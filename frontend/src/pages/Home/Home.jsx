import styled from "styled-components";

import Hero from "../../components/Hero";
import FeaturedProducts from "../../components/FeaturedProducts";
import Categories from "../../components/Categories";
import Contact from "../../components/Contact";

const HomeContainer = styled.div`
  overflow: hidden;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </HomeContainer>
  );
};

export default Home;
