import styled from "styled-components";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: spin 5s linear infinite reverse;

  @keyframes spin {
    100% {
      transform: rotate(1turn);
    }
  }
`;

const SpinnerIcon = styled(CgSpinnerTwoAlt)`
  color: #6792d7;
  font-size: 40px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
`;

const Spinner = ({ color, fontSize }) => {
  return (
    <Container>
      <SpinnerIcon color={color} fontSize={fontSize} />
    </Container>
  );
};

export default Spinner;
