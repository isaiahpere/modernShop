import styled from "styled-components";

const SectionContainer = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  gap: 4px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SmallImageContainer = styled.div`
  flex: 1;
  order: 2;
  display: flex;
  @media (min-width: 768px) {
    order: 1;
    display: block;
  }
`;

const LargeImageContainer = styled.div`
  flex: 5;
  order: 1;
  @media (min-width: 798px) {
    order: 2;
  }
`;

const Thumbnail = styled.img`
  width: 60px;
  object-fit: cover;
  margin-bottom: 4px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 800px;
  object-fit: cover;
`;

const ImageSection = ({ images, selectedIndex, onIndexChange }) => {
  return (
    <SectionContainer>
      <SmallImageContainer>
        {images.map((image, idx) => (
          <Thumbnail src={image} alt="" onClick={() => onIndexChange(idx)} />
        ))}
        {/* <Thumbnail src={images[1]} alt="" onClick={() => onIndexChange(1)} /> */}
      </SmallImageContainer>
      <LargeImageContainer>
        <Image src={images[selectedIndex]} />
      </LargeImageContainer>
    </SectionContainer>
  );
};

export default ImageSection;
