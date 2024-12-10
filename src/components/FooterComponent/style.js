import styled from "styled-components";

// Container chính của Footer
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px 50px;
  background-color: #121212; /* Nền tối */
  border-top: 1px solid #333;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;


export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;


export const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #ffffff; /* Đổi sang màu chữ trắng */
`;


export const FooterText = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8); /* Chữ màu trắng nhạt */
  margin-bottom: 8px;
`;

export const FooterLink = styled.a`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8); /* Chữ màu trắng nhạt */
  text-decoration: none;
  margin-bottom: 8px;

  &:hover {
    color: #007bff; /* Màu chữ sáng hơn khi hover */
  }
`;


export const EmailInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const SubscribeButton = styled.button`
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
