import { useState } from "react";
import styled from "styled-components";
import heroImages from "../../utilities/data/heroImages";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";

const ZERO = 0;

const Section = styled.div``;

const Carousel = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 80px);
`;

const ImageContainer = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  transition-delay: 0.2s;
  ${(props) =>
    props.selected &&
    `
    opacity: 1;
    transition-delay: 0s;
  `};
`;

const Image = styled.img`
  width: 100%;
  height: calc(100vh - 80px);
  object-fit: cover;
  object-position: center;
`;

const IconsContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  display: flex;
  width: auto;
  transform: translate(-50%, -50%);
  gap: 12px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 40px;
  height: 40px;
  color: #ffffff;
  font-weight: 900;
  cursor: pointer;
  border-radius: 24px;
  transition: all 0.3s ease-in;

  &:hover {
    background: rgba(241, 241, 241, 0.6);
    color: #242424;
  }
`;

const RightArrow = styled(ImArrowRight2)``;

const LeftArrow = styled(ImArrowLeft2)``;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(ZERO);

  const handlePrevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? heroImages.length - 1 : (prev) => prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide(
      currentSlide === heroImages.length - 1 ? ZERO : (prev) => prev + 1
    );
  };

  return (
    <Section>
      <Carousel offsetValue={currentSlide} aria-label="new fashion image">
        {heroImages.map((item, idx) => {
          return (
            <ImageContainer key={item} selected={currentSlide === idx}>
              <Image src={item} alt="" />
            </ImageContainer>
          );
        })}
      </Carousel>
      <IconsContainer>
        <Icon onClick={handlePrevSlide}>
          <LeftArrow />
        </Icon>
        <Icon onClick={handleNextSlide}>
          <RightArrow />
        </Icon>
      </IconsContainer>
    </Section>
  );
};

export default Hero;
