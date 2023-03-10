import styled from "styled-components";

import Spinner from "../GlobalStyles/Spinner";
import Card from "../GlobalStyles/Card";
import useFetch from "../../utilities/hooks/useFetch";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
`;

const List = ({ categoryId, sort = "asc", subCategories }) => {
  // build filter url for subcategories
  let url = "";
  if (subCategories) {
    subCategories.forEach((item) => {
      let temp = `&[filters][sub_categories][id][$eq]=${item}`;
      url += temp;
    });
  }

  // if sort method provided  update url
  if (sort) url += `&sort=price:${sort}`;

  // fetch data
  const { data, loading } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId}${url}`
  );

  return (
    <Container>
      {/* create a no products message */}
      {data.length < 1 && <div>No Products Found</div>}
      {data.length > 0 && (
        <>
          {loading && <Spinner />}
          {!loading && data.map((item) => <Card key={item.id} item={item} />)}
        </>
      )}
    </Container>
  );
};

export default List;
