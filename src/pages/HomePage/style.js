import styled from "styled-components";

// Container tổng
export const Container = styled.div`
  width: 100%;
`;

// Hero Section
export const HeroSection = styled.div`
  width: 100%; 
  background: url('/assets/Home.png') no-repeat center center/cover;
  background-color: #001F3F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
`;

// Phần sản phẩm
export const ProductsSection = styled.div`
  width: 100%; /* Full màn hình */
  padding: 2rem;
  background: #f9f9f9;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #333;
    text-align: center; /* Căn giữa tiêu đề */
  }

  .products-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    max-width: 1200px; /* Giới hạn độ rộng */
    margin: 0 auto; /* Căn giữa */
  }
`;
