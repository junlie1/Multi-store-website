import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
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
