import { useState } from "react";
import styled from "styled-components";
import heroImages from "../../utilities/data/heroImages";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";

const ZERO_INDEX = 0;
// const data = [
//   "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/886404/pexels-photo-886404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/175696/pexels-photo-175696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/829552/pexels-photo-829552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// ];

const HeroContainer = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  width: 100vw;
`;

const ImageWrapper = styled.div`
  width: 300vw;
  height: 100%;
  display: flex;
  transition: all 1s ease;
  ${(props) =>
    props.offsetValue &&
    `
    transform: translateX(${props.offsetValue * -100}vw); 
  `}
`;

const ImageContainer = styled.div`
  width: 100vw;
`;

const Image = styled.img`
  width: 100vw;
  height: calc(100vh - 80px);
  object-fit: cover;
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
  /* border: 1px solid white; */
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? heroImages.length - 1 : (prev) => prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide(
      currentSlide === heroImages.length - 1 ? ZERO_INDEX : (prev) => prev + 1
    );
  };

  console.log(currentSlide);

  return (
    <HeroContainer>
      <ImageWrapper offsetValue={currentSlide}>
        {heroImages.map((item) => {
          return (
            <ImageContainer key={item}>
              <Image src={item} alt="" />
            </ImageContainer>
          );
        })}
      </ImageWrapper>
      <IconsContainer>
        <Icon onClick={handlePrevSlide}>
          <LeftArrow />
        </Icon>
        <Icon onClick={handleNextSlide}>
          <RightArrow />
        </Icon>
      </IconsContainer>
    </HeroContainer>
  );
};

export default Hero;
