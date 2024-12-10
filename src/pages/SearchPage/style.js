import styled from "styled-components";
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Tự động chia cột */
  gap: 20px; /* Khoảng cách giữa các thẻ sản phẩm */
  width: 100%;
  max-width: 1200px; /* Độ rộng tối đa của container */
  padding: 20px 0; /* Padding trên và dưới */
`;
export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;
export const Message = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;