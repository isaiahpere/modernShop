import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";

import List from "../../components/List";

const ProductsContainer = styled.div`
  display: flex;
  padding: 30px;
`;

const FilterSection = styled.div`
  flex: 1;
  position: sticky;
  height: 100%;
  top: 20px;
`;

const FilterItem = styled.div`
  margin-bottom: 15px;
`;

const ItemTitle = styled.h2`
  font-weight: 500;
  margin-bottom: 6px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 4px;
`;

const Input = styled.input``;

const InputLabel = styled.label`
  font-size: 12px;
  padding-left: 4px;
`;

const ContentContainer = styled.div`
  flex: 5;
`;

const ContentImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 40px;
`;

const Products = () => {
  const [sortMethod, setSortMethod] = useState(null);

  const { id } = useParams();
  const categoryId = Number(id);

  const handleSortAsc = () => setSortMethod("asc");
  const handleSortDecs = () => setSortMethod("desc");

  return (
    <ProductsContainer>
      <FilterSection>
        <FilterItem>
          <ItemTitle>Product Category</ItemTitle>
          <InputContainer>
            <Input type="checkbox" id="1" />
            <InputLabel htmlFor="1">Shoes</InputLabel>
          </InputContainer>
          <InputContainer>
            <Input type="checkbox" id="2" />
            <InputLabel htmlFor="2">Hats</InputLabel>
          </InputContainer>
          <InputContainer>
            <Input type="checkbox" id="3" />
            <InputLabel htmlFor="3">Jeans</InputLabel>
          </InputContainer>
          <InputContainer>
            <Input type="checkbox" id="4" />
            <InputLabel htmlFor="4">Sale</InputLabel>
          </InputContainer>
        </FilterItem>
        <FilterItem>
          <ItemTitle>Sort By</ItemTitle>
          <InputContainer>
            <Input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={handleSortAsc}
            />
            <InputLabel htmlFor="asc">Price (Low to High)</InputLabel>
          </InputContainer>
          <InputContainer>
            <Input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={handleSortDecs}
            />
            <InputLabel htmlFor="desc">Price (High to Low)</InputLabel>
          </InputContainer>
        </FilterItem>
      </FilterSection>
      <ContentContainer>
        <ContentImage
          src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="category section"
        />
        <List sort={sortMethod} category={categoryId} />
      </ContentContainer>
    </ProductsContainer>
  );
};

export default Products;
