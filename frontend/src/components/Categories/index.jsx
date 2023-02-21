import styled from "styled-components";

import Image from "../GlobalStyles/Image";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    height: 50vh;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    height: 60vh;
  }
`;

const Column = styled.div`
  flex: 1;
  ${(props) =>
    props.largeCol &&
    `
    flex: 1;
  `}
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  overflow: hidden;
  max-height: 70vh;
`;

const Categories = () => {
  return (
    <SectionContainer>
      <Title>Categories</Title>
      <ImageContainer>
        <Column>
          <Row>
            <Image
              imageSource="https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              linkText="Sale"
              path="/products/1"
            />
          </Row>
          <Row>
            <Image
              imageSource="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              linkText="Women"
              path="/products/2"
            />
          </Row>
        </Column>
        <Column>
          <Row>
            <Image
              imageSource="https://images.pexels.com/photos/8084059/pexels-photo-8084059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              linkText="Kids"
              path="/products/1"
            />
          </Row>
        </Column>
        <Column>
          <Row>
            <Column>
              <Row>
                <Image
                  imageSource="https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  linkText="Arrivals"
                  path="/products/2"
                />
              </Row>
            </Column>
            <Column>
              <Row>
                <Image
                  imageSource="https://images.pexels.com/photos/6617686/pexels-photo-6617686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  linkText="Seasonal"
                  path="/products/1"
                />
              </Row>
            </Column>
          </Row>
          <Row>
            <Column>
              <Row>
                <Image
                  imageSource="https://images.pexels.com/photos/7679659/pexels-photo-7679659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  linkText="Trending"
                  path="/products/2"
                />
              </Row>
            </Column>
          </Row>
        </Column>
      </ImageContainer>
    </SectionContainer>
  );
};

export default Categories;
