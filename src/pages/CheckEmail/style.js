import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e3f0fd, #f5d3e5);
`;

export const Card = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #6c63ff;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  margin-bottom: 20px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;
  &:focus {
    border-color: #6c63ff;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 14px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: #6c63ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #574bdb;
  }
`;

export const LinkText = styled.a`
  display: block;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #6c63ff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
