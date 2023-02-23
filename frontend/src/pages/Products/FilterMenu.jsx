import styled from "styled-components";

import { ItemTitle } from ".";
import FilterMenuCategories from "./FilterMenuCategories";
import SortBy from "./SortBy";

const FilterSection = styled.div`
  flex: 1;
  position: sticky;
  height: 100%;
  top: 20px;
  padding-right: 10px;
`;

const FilterItem = styled.div`
  margin-bottom: 15px;
`;

const FilterMenu = ({
  data,
  handleAscSort,
  handleDescSort,
  onSubcategoryChange,
}) => {
  return (
    <FilterSection>
      <FilterItem>
        <FilterMenuCategories
          categories={data}
          onSubcategoryChange={onSubcategoryChange}
        />
      </FilterItem>
      <FilterItem>
        <ItemTitle>Sort By</ItemTitle>
        <SortBy
          type="radio"
          id="des"
          name="price"
          handleSort={handleDescSort}
          title="Price (High to Low)"
        />
        <SortBy
          type="radio"
          id="asc"
          name="price"
          handleSort={handleAscSort}
          title="Price (Low to High)"
        />
      </FilterItem>
    </FilterSection>
  );
};

export default FilterMenu;
