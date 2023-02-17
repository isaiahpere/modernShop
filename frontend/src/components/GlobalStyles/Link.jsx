import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkItem = styled(Link)`
  font-size: 18px;
  ${(props) =>
    props.fontSize &&
    `
    font-size: ${props.fontSize}px;
  `}
`;

const CustomLink = ({ to, children, fontSize }) => {
  return (
    <LinkItem to={to} fontSize={fontSize}>
      {children}
    </LinkItem>
  );
};

export default CustomLink;
