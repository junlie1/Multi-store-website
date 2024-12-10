import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 100px;
`;


export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column; /* Hiển thị tiêu đề và sort theo cột */
  align-items: flex-start; /* Căn góc trái */
  margin-bottom: 20px;
  margin-top: -100px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    text-transform: capitalize;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SortLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #555;
  margin-right: 10px; /* Khoảng cách giữa label và dropdown */
`;

export const SortDropdown = styled.select`
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: white;
  cursor: pointer;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Hiển thị 5 sản phẩm trên mỗi hàng */
  gap: 20px; /* Khoảng cách giữa các card */
  margin-top: 50px;
  padding: 20px 0;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? "#800000" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#D2042D" : "#f0f0f0")};
  }
`;
