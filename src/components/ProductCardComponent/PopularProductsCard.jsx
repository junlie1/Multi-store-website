import React from "react";
import CardComponent from "./CardComponent";
import { ProductsContainer } from "./style";

const PopularProductsCard = ({ products, isLoading }) => {
  if (isLoading) {
    return <div>Đang tải...</div>;
  }

  if (!products || products.length === 0) {
    return <div>Không có sản phẩm phổ biến</div>;
  }

  return (
    <>
      <h2>Popular Collection</h2>
      <ProductsContainer>
        {products.map((product) => (
          <CardComponent key={product._id} product={product} />
        ))}
      </ProductsContainer>
    </>
  );
};

export default PopularProductsCard;
