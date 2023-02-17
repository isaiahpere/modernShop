import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const NavItem = ({ children }) => {
  return <Container>{children}</Container>;
};

export default NavItem;
