import React from "react";
import { useNavigate } from "react-router-dom";
import { CardWrapper, CardImage, CardContent, RatingWrapper } from "./style";
import { FaStar } from "react-icons/fa";

const CardComponent = ({ product }) => {
  const { _id, productName, productPrice, averageRating, images } = product;
  const navigate = useNavigate();

  // Định dạng rating chỉ lấy 1 chữ số thập phân
  const formattedRating = averageRating ? parseFloat(averageRating).toFixed(1) : "N/A";

  // Hàm điều hướng đến trang chi tiết sản phẩm
  const handleDetailsProduct = () => {
    navigate(`/product-details/${_id}`);
  };

  return (
    <CardWrapper onClick={handleDetailsProduct}>
      <CardImage src={images[0]} alt={productName} />
      <CardContent>
        <h3>{productName}</h3>
        <p className="price">{productPrice} VND</p>
        <RatingWrapper>
          <FaStar className="star-icon" />
          <span>{formattedRating}</span>
        </RatingWrapper>
      </CardContent>
    </CardWrapper>
  );
};

export default CardComponent;