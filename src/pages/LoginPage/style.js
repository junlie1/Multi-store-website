import styled from 'styled-components';

// Toàn bộ Container của Login
export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.53);
  height: 100vh;
  width: 100vw;
`;

// Card chứa giao diện Login
export const LoginCard = styled.div`
  width: 800px;
  height: 445px;
  border-radius: 6px;
  background: #fff;
  display: flex;
`;

// Wrapper cho cột bên trái
export const WrapperContainerLeft = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f9f9f9;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }
`;

// Wrapper cho cột bên phải
export const WrapperContainerRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #eef1f5;
  text-align: center;

  h4 {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 500;
    color: #333;
  }
`;

// Text nhẹ trong giao diện
export const WrapperTextLight = styled.span`
  color: #007bff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
