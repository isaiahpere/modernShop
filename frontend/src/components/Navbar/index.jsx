import styled from "styled-components";
import { useState } from "react";

import Logo from "./Logo";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import Cart from "../Cart";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const NavContainer = styled.div`
  position: relative;
`;

const Wrapper = styled(FlexContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
`;

const Navbar = () => {
  //state
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <NavContainer>
      <Wrapper>
        <LeftContent />
        <Logo />
        <RightContent changeCartVisible={setCartVisible} />
      </Wrapper>
      {cartVisible && (
        <Cart cartOpen={cartVisible} toggleCart={setCartVisible} />
      )}
    </NavContainer>
  );
};

export default Navbar;
