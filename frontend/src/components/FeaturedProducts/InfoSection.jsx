import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 12px;

  @media (min-width: 768px) {
    padding: 0 24px;
  }
  @media (min-width: 1024px) {
    margin: 4px 50px;
  }
  @media (min-width: 1440px) {
    margin: 8px 200px;
  }
`;

const Title = styled.h1`
  flex: 1;
  text-align: center;
  text-transform: capitalize;
  padding-bottom: 10px;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  width: 100%;
  flex: 2;
  color: gray;
  text-align: justify;
  font-size: 14px;
  padding-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const InfoSection = ({ title }) => {
  return (
    <SectionContainer>
      <Title>{title} Products</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam saepe
        nisi voluptatem illo, eius blanditiis minus veniam neque ipsa vel
        explicabo nesciunt numquam tempora impedit incidunt repellat reiciendis
        id. Quisquam, explicabo modi? Repudiandae sint saepe nobis quas odio
        voluptas maxime maiores nesciunt necessitatibus illo, porro dolor nulla
        id, perspiciatis laboriosam eius veritatis iure animi.
      </Description>
    </SectionContainer>
  );
};

export default InfoSection;
