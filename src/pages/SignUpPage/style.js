// import styled from 'styled-components';

// export const WrapperContainerLeft = styled.div`
//   flex: 1;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   h1 {
//     font-size: 24px;
//     font-weight: bold;
//     margin-bottom: 10px;
//     color: #000;
//   }

//   p {
//     font-size: 14px;
//     margin-bottom: 20px;
//     color: #555;
//   }
// `;

// export const WrapperContainerRight = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #f5f5f5;

//   img {
//     margin-bottom: 20px;
//   }

//   h4 {
//     font-size: 16px;
//     font-weight: bold;
//     color: #000;
//   }
// `;

// export const WrapperTextLight = styled.span`
//   color: #007bff;
//   font-weight: bold;
//   cursor: pointer;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// export const SignUpContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: rgba(0, 0, 0, 0.1);
// `;

// export const SignUpCard = styled.div`
//   display: flex;
//   width: 700px;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   background-color: #fff;
// `;

// export const InputFieldContainer = styled.div`
//   width: 100%; /* Ensure all fields are the same width */
//   margin-bottom: 10px; /* Add spacing between fields */
// `;

// export const InputField = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   box-sizing: border-box;
//   font-size: 14px;
//   transition: border-color 0.2s ease-in-out;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;

// export const PasswordWrapper = styled.div`
//   position: relative;
//   width: 100%;

//   span {
//     position: absolute;
//     top: 50%;
//     right: 10px;
//     transform: translateY(-50%);
//     cursor: pointer;
//     color: #555;
//   }
// `;

// export const SubmitButton = styled.button`
//   background: ${(props) => (props.disabled ? '#ddd' : 'rgb(255, 57, 69)')};
//   border: none;
//   height: 48px;
//   width: 100%;
//   border-radius: 4px;
//   margin: 26px 0 10px;
//   font-size: 15px;
//   font-weight: 700;
//   color: #fff;
//   cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
//   transition: background 0.3s ease;

//   &:hover {
//     background: ${(props) => (props.disabled ? '#ddd' : '#d9534f')};
//   }
// `;

import styled from 'styled-components';

export const WrapperContainerLeft = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #000;
  }

  p {
    font-size: 14px;
    margin-bottom: 20px;
    color: #555;
  }
`;

export const WrapperContainerRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  img {
    margin-bottom: 20px;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: #000;
  }
`;

export const WrapperTextLight = styled.span`
  color: #007bff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
`;

export const SignUpCard = styled.div`
  display: flex;
  width: 700px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const InputFieldContainer = styled.div`
  width: 100%; /* Ensures all fields are of equal width */
  margin-bottom: 15px;
`;

export const InputField = styled.input`
  width: 100%; /* Makes sure the input takes up the full container width */
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;

  span {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #555;
  }
`;

export const SubmitButton = styled.button`
  background: ${(props) => (props.disabled ? '#ddd' : 'rgb(255, 57, 69)')};
  border: none;
  height: 48px;
  width: 100%;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => (props.disabled ? '#ddd' : '#d9534f')};
  }
`;


