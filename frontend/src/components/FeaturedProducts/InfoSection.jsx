import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  flex: 2;
  text-transform: capitalize;
`;

const Description = styled.p`
  flex: 3;
  color: gray;
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
