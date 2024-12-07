import React from "react";
import { ProductCard, ProductName, ProductPrice, RatingContainer } from "./style";
import { StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const CardComponent = ({ product }) => {
  const { _id, productName, productPrice, averageRating, images } = product;
  const navigate = useNavigate();

  const handleDetailsProduct = () => {
    navigate(`/product-details/${_id}`);
  };

  return (
    <ProductCard onClick={handleDetailsProduct} style={{cursor: 'pointer'}}>
      <img
        alt={productName}
        src={images && images[0]} // Hiển thị hình ảnh đầu tiên nếu có
      />
      <div className="content">
        <ProductName>{productName}</ProductName>
        <ProductPrice>{`${productPrice} ₫`}</ProductPrice>
        <RatingContainer>
          <span>{averageRating?.toFixed(1)}</span>
          <StarFilled style={{ color: "#FFD700", marginLeft: "4px" }} />
        </RatingContainer>
      </div>
    </ProductCard>
  );
};

export default CardComponent;
