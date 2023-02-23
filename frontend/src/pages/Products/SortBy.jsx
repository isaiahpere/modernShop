import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 4px;
`;

export const Input = styled.input``;

export const InputLabel = styled.label`
  font-size: 12px;
  padding-left: 4px;
`;

const SortBy = ({ type, id, name, handleSort, title }) => {
  return (
    <InputContainer>
      <Input type={type} id={id} value={id} name={name} onChange={handleSort} />
      <InputLabel htmlFor={id}>{title}</InputLabel>
    </InputContainer>
  );
};

export default SortBy;
