import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import InfoSection from "./InfoSection";
import Products from "./Products";

const SectionContainer = styled.div`
  margin: 60px 0;
`;

const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/products?populate=*&[filters][type]=${type}`,
          {
            headers: {
              Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <SectionContainer>
      <InfoSection title={type} />
      <Products products={data} />
    </SectionContainer>
  );
};

export default FeaturedProducts;
