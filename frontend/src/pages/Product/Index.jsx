import styled from "styled-components";
import { useState } from "react";

import ImageSection from "./ImageSection";
import ProductInfoSection from "./ProductInfoSection";

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
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const tempImages = [
    "https://images.pexels.com/photos/458649/pexels-photo-458649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const handleQtyDecrease = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };
  const handleQtyIncrease = () => {
    if (quantity === 9) return;
    setQuantity((prev) => prev + 1);
  };

  return (
    <ProductContainer>
      <ImageSection
        images={tempImages}
        selectedIndex={selectedImage}
        onIndexChange={setSelectedImage}
      />
      <ProductInfoSection
        increaseQty={handleQtyIncrease}
        decreaseQty={handleQtyDecrease}
        quantity={quantity}
      />
    </ProductContainer>
  );
};

export default Product;
