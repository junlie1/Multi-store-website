import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import { ProductsContainer } from "./style";

const TopRatedProductsCard = ({ products, isLoading }) => {
  if (isLoading) {
    return <div>Đang tải...</div>;
  }

  if (!products || products.length === 0) {
    return <div>Không có sản phẩm nổi bật</div>;
  }

  return (
    <>
      <h2>Top-Rated Collection</h2>
      <ProductsContainer>
        {products.map((product) => (
          <CardComponent key={product._id} product={product} />
        ))}
      </ProductsContainer>
    </>
  );
};

export default TopRatedProductsCard;
