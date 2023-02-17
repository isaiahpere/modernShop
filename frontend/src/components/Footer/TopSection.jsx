import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 50px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: justify;
  font-size: 14px;
`;

const SectionTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: #555555;
`;

const SectionItem = styled.span`
  color: gray;
`;

const TopSection = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>Categories</SectionTitle>
        <SectionItem>Women</SectionItem>
        <SectionItem>Men</SectionItem>
        <SectionItem>Shoes</SectionItem>
        <SectionItem>Accessories</SectionItem>
        <SectionItem>New Arrivals</SectionItem>
      </Section>
      <Section>
        <SectionTitle>Links</SectionTitle>
        <SectionItem>FAQ</SectionItem>
        <SectionItem>Pages</SectionItem>
        <SectionItem>Stores</SectionItem>
        <SectionItem>Compare</SectionItem>
        <SectionItem>Cookies</SectionItem>
      </Section>
      <Section>
        <SectionTitle>About</SectionTitle>
        <SectionItem>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          tenetur quas molestiae labore blanditiis voluptas accusamus nam
          placeat vero ratione nisi aliquid voluptate quae dignissimos laborum,
          iusto quo dicta distinctio. Molestias illo, quia ipsa, ipsum nihil
          illum repudiandae assumenda consequatur commodi, est minus facere.
        </SectionItem>
      </Section>
      <Section>
        <SectionTitle>Contact</SectionTitle>
        <SectionItem>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          tenetur quas molestiae labore blanditiis voluptas accusamus nam
          placeat vero ratione nisi aliquid voluptate quae dignissimos laborum,
          iusto quo dicta distinctio. Molestias illo, quia ipsa, ipsum nihil
          illum repudiandae assumenda consequatur commodi, est minus facere.
        </SectionItem>
      </Section>
    </Container>
  );
};

export default TopSection;
