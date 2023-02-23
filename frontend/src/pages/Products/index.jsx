import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";

import List from "../../components/List";
import useFetch from "../../utilities/hooks/useFetch";
import FilterMenu from "./FilterMenu";

const ProductsContainer = styled.div`
  display: flex;
  padding: 20px;
  @media (min-width: 768px) {
    padding: 30px;
  }
`;

export const ItemTitle = styled.h2`
  font-weight: 500;
  margin-bottom: 6px;
`;

const ContentContainer = styled.div`
  flex: 5;
`;

const ContentImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  padding: 0 10px;
  margin-bottom: 40px;
`;

const Products = () => {
  // sort method
  const [sortMethod, setSortMethod] = useState(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  // category id
  const { id } = useParams();
  const categoryId = Number(id);

  // category data
  const { data } = useFetch(
    `/subcategories?[filters][categories][id][$eq]=${categoryId}`
  );

  console.log(data);

  //  handle sorting asc
  const handleSortAsc = () => setSortMethod("asc");

  //  handle sorting desc
  const handleSortDecs = () => setSortMethod("desc");

  // push & pop categories as they are selected
  const handleSelectedCategories = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubcategories(
      isChecked
        ? [...selectedSubcategories, value]
        : selectedSubcategories.filter((item) => item !== value)
    );
  };

  console.log("selected categories");
  console.log(selectedSubcategories);

  return (
    <ProductsContainer>
      <FilterMenu
        data={data}
        handleAscSort={handleSortAsc}
        handleDescSort={handleSortDecs}
        onSubcategoryChange={handleSelectedCategories}
      />
      <ContentContainer>
        <ContentImage
          src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="category section"
        />
        <List
          sort={sortMethod}
          categoryId={categoryId}
          subCategories={selectedSubcategories}
        />
      </ContentContainer>
    </ProductsContainer>
  );
};

export default Products;
