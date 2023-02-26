import styled from "styled-components";
import { useState } from "react";

import ImageSection from "./ImageSection";
import ProductInfoSection from "./ProductInfoSection";
import useFetch from "../../utilities/hooks/useFetch";
import { useParams } from "react-router-dom";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px;
  gap: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 20px 50px;
    gap: 40px;
  }
`;

const Product = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const url = `/products/${id}?populate=*`;
  const { data, loading } = useFetch(url);
  const imagesFound = data?.attributes?.imagenes; // check we have images

  return (
    <ProductContainer>
      {!imagesFound && loading && <div>Loading</div>}
      {imagesFound && !loading && (
        <>
          <ImageSection
            images={data.attributes.imagenes.data}
            selectedIndex={selectedImage}
            onIndexChange={setSelectedImage}
          />
          <ProductInfoSection product={data} />
        </>
      )}
    </ProductContainer>
  );
};

export default Product;
