// import styled, { createGlobalStyle } from "styled-components";

// // Reset toàn bộ trang
// export const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   html, body {
//     width: 100%;
//     height: 100%;
//     overflow-x: hidden; /* Tránh cuộn ngang không cần thiết */
//     background-color: #fdfaf4; /* Màu nền chung */
//     font-family: "Arial", sans-serif;
//   }
// `;

// // Toàn bộ container của trang
// export const ProductDetailsContainer = styled.div`
//   width: 100vw; /* Đảm bảo chiếm toàn bộ chiều ngang */
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   gap: 20px;
//   padding: 50px 0; /* Padding trên/dưới */
//   background-color: #fdfaf4;
// `;

// // Header và Footer
// export const FullWidthSection = styled.div`
//   width: 100%; /* Full chiều ngang màn hình */
//   background-color: #fff;
//   padding: 10px 0; /* Padding trên/dưới */
// `;

// // Phần hình ảnh
// export const ProductImageWrapper = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
// `;

// export const ProductImage = styled.img`
//   max-width: 100%;
//   height: auto;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
// `;

// // Phần chi tiết sản phẩm
// export const ProductInfoWrapper = styled.div`
//   flex: 2;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   color: #333;
//   padding: 0 20px; /* Padding trái/phải */
// `;

// // Tên sản phẩm
// export const ProductName = styled.h1`
//   font-size: 28px;
//   font-weight: bold;
//   margin: 0;
//   color: #222;
// `;

// // Giá sản phẩm
// export const ProductPrice = styled.div`
//   font-size: 24px;
//   color: #ff6f61;
//   font-weight: bold;
//   margin-bottom: 10px;

//   & del {
//     font-size: 18px;
//     color: #999;
//     margin-left: 10px;
//   }
// `;

// // Mô tả sản phẩm
// export const ProductDescription = styled.p`
//   font-size: 16px;
//   line-height: 1.6;
//   color: #555;
// `;

// // Danh mục và nhà cung cấp
// export const ProductCategory = styled.div`
//   font-size: 16px;
//   color: #666;

//   & span {
//     font-weight: bold;
//     color: #333;
//   }
// `;

// // Nút hành động
// export const ActionButton = styled.button`
//   background-color: #333;
//   color: #fff;
//   border: none;
//   padding: 15px 20px;
//   font-size: 16px;
//   font-weight: bold;
//   text-transform: uppercase;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-top: 20px;

//   &:hover {
//     background-color: #555;
//   }
// `;


import styled, { createGlobalStyle } from "styled-components";

// Reset toàn bộ trang
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden; /* Tránh cuộn ngang không cần thiết */
    background-color: #fdfaf4; /* Màu nền chung */
    font-family: "Arial", sans-serif;
  }
`;

// Toàn bộ container của trang
export const ProductDetailsContainer = styled.div`
    display: flex;
  flex-direction: row; /* Chia thành 2 phần ngang */
  align-items: center; /* Canh giữa theo chiều dọc */
  justify-content: center; /* Canh giữa nội dung */
  width: 100%;
  max-width: 1200px; /* Giới hạn chiều rộng tổng */
  margin: 0 auto; /* Căn giữa toàn bộ container */
  padding: 50px 20px;
  gap: 40px; /* Khoảng cách giữa ảnh và mô tả */
`;

// Phần hình ảnh
export const ProductImageWrapper = styled.div`
  flex: 1; /* Chiếm 1 phần của màn hình */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  flex: 1; /* Chiếm 1 phần của màn hình */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Phần chi tiết sản phẩm
export const ProductInfoWrapper = styled.div`
  flex: 1; /* Chiếm 1 phần của màn hình */
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center; /* Canh giữa nội dung theo chiều dọc */
  text-align: left; /* Căn trái nội dung */
  color: #333;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px; /* Thu nhỏ padding trên màn hình nhỏ */
  }
`;

// Tên sản phẩm
export const ProductName = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  color: #222;
`;

// Giá sản phẩm
export const ProductPrice = styled.div`
  font-size: 24px;
  color: #ff6f61;
  font-weight: bold;
  margin-bottom: 10px;

  & del {
    font-size: 18px;
    color: #999;
    margin-left: 10px;
  }
`;

// Mô tả sản phẩm
export const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
`;

// Danh mục và nhà cung cấp
export const ProductCategory = styled.div`
  font-size: 16px;
  color: #666;

  & span {
    font-weight: bold;
    color: #333;
  }
`;

// Nút hành động
export const ActionButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%; /* Nút chiếm toàn bộ chiều ngang */
  max-width: 300px; /* Giới hạn chiều rộng nút */
  align-self: center; /* Căn giữa nút */

  &:hover {
    background-color: #555;
  }
`;

export const FullWidthSection = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 10px 0;
`;