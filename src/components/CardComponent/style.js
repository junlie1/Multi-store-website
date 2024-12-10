import styled from "styled-components";

export const CardWrapper = styled.div`
  border: 1px solid #ddd; /* Viền nhẹ */
  border-radius: 8px; /* Bo góc */
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Đổ bóng */
  overflow: hidden; /* Ẩn phần thừa */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Hiệu ứng hover */
  cursor: pointer;

  &:hover {
    transform: translateY(-5px); /* Nhấn mạnh hover */
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2); /* Đổ bóng rõ hơn */
  }
`;

export const CardImage = styled.img`
  width: 100%; /* Full chiều rộng card */
  height: 180px; /* Chiều cao cố định */
  object-fit: cover; /* Ảnh tự căn chỉnh */
  border-bottom: 1px solid #ddd; /* Đường phân cách */
`;

export const CardContent = styled.div`
  padding: 15px; /* Khoảng cách bên trong card */

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
    text-align: center; /* Căn giữa tên sản phẩm */
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #666;
    text-align: center;
  }

  .price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #d9534f; /* Màu đỏ nổi bật */
    text-align: center;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: center; /* Căn giữa rating */
  align-items: center;
  gap: 5px; /* Khoảng cách giữa icon và số */
  font-size: 0.9rem;

  .star-icon {
    color: #ffc107; /* Màu vàng cho ngôi sao */
  }
`;