import styled from "styled-components";

const SectionContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 4px;
`;

const SmallImageContainer = styled.div`
  flex: 1;
`;

const LargeImageContainer = styled.div`
  flex: 5;
`;

const Thumbnail = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 4px;
  cursor: pointer;
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
        <Thumbnail src={images[0]} alt="" onClick={() => onIndexChange(0)} />
        <Thumbnail src={images[1]} alt="" onClick={() => onIndexChange(1)} />
      </SmallImageContainer>
      <LargeImageContainer>
        <Image src={images[selectedIndex]} />
      </LargeImageContainer>
    </SectionContainer>
  );
};

export default ImageSection;
