import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkItem = styled(Link)`
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const CustomLink = ({ to, children }) => {
  return <LinkItem to={to}>{children}</LinkItem>;
};

export default CustomLink;
