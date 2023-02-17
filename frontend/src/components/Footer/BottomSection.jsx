import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #242424;
  margin-right: 24px;
`;

const RightText = styled.span`
  font-size: 12px;
  color: gray;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 40px;
`;

const BottomSection = () => {
  return (
    <Container>
      <LeftSection>
        <Logo>MODERN SHOP</Logo>
        <RightText>&copy; Copyright 2023. All Rights Reserved</RightText>
      </LeftSection>
      <RightSection>
        <Image src="/images/payment.png" />
      </RightSection>
    </Container>
  );
};

export default BottomSection;
