import styled from "styled-components";
import { ItemTitle } from ".";
import { InputContainer, Input, InputLabel } from "./SortBy";

const CategoryContainer = styled.div`
  margin-bottom: 15px;
`;

const FilterMenuCategories = ({ categories, onSubcategoryChange }) => {
  const handleSubcategoryChange = (e) => {
    onSubcategoryChange(e);
  };

  return (
    <CategoryContainer>
      <ItemTitle>Product Category</ItemTitle>
      {categories.map((item) => (
        <InputContainer key={item.id}>
          <Input
            type="checkbox"
            id={item.id}
            value={item.id}
            onChange={handleSubcategoryChange}
          />
          <InputLabel htmlFor={item.id}>{item.attributes.title}</InputLabel>
        </InputContainer>
      ))}
    </CategoryContainer>
  );
};

export default FilterMenuCategories;
