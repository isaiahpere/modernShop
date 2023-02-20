import styled from "styled-components";

import Logo from "./Logo";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const NavContainer = styled.div``;

const Wrapper = styled(FlexContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Wrapper>
        <LeftContent />
        <Logo />
        <RightContent />
      </Wrapper>
    </NavContainer>
  );
};

export default Navbar;
