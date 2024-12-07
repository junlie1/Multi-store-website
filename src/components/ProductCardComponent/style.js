import styled from "styled-components";

// Container cho danh sách sản phẩm
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Tự động chia cột */
  gap: 20px; /* Khoảng cách giữa các thẻ sản phẩm */
  width: 100%;
  max-width: 1200px; /* Độ rộng tối đa của container */
  margin: 0 auto; /* Căn giữa */
  padding: 20px 0; /* Padding trên và dưới */
`;

// Card sản phẩm
export const ProductCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  background: #fff;

  &:hover {
    transform: translateY(-5px); /* Hiệu ứng hover */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Bóng đổ đậm hơn khi hover */
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }

  .content {
    padding: 15px;
    text-align: center;
  }
`;

// Tên sản phẩm
export const ProductName = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  text-align: center;
`;

// Giá sản phẩm
export const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #FF424E;
  margin-top: 10px;
`;

// Đánh giá trung bình
export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #999;
  margin-top: 5px;

  span {
    font-size: 14px;
    font-weight: 500;
    color: #333;
  }
`;
