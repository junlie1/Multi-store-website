// import React, { useState } from 'react';
// import {
//   WrapperContainerLeft,
//   WrapperContainerRight,
//   WrapperTextLight,
//   SignUpContainer,
//   SignUpCard,
// } from './style';
// import InputForm from '../../components/InputForm/InputForm';
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
// import imageLogo from '../../assets/images/logo-login.png';
// import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
// import { Image } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import * as UserService from '../../service/userService';
// import * as message from '../../components/Message/Message';

// const SignUpPage = () => {
//   const [isShowPassword, setIsShowPassword] = useState(false);
//   const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignUp = async () => {
//     if (password !== confirmPassword) {
//       message.error('Mật khẩu và xác nhận mật khẩu không khớp!');
//       return;
//     }
//     try {
//       const data = await UserService.signup({ fullName, email, password });
//       if (data?.status === 'success') {
//         message.success('Đăng ký thành công!');
//         navigate('/login'); // Redirect to the login page
//       }
//     } catch (error) {
//       message.error(error?.message || 'Đăng ký không thành công');
//     }
//   };

//   const handleNavigateToSignIn = () => {
//     navigate('/login'); // Navigate to the login page
//   };

//   return (
//     <SignUpContainer>
//       <SignUpCard>
//         <WrapperContainerLeft>
//           <h1>Xin chào</h1>
//           <p>Đăng ký và tạo tài khoản</p>
//           <InputForm
//             style={{ marginBottom: '10px' }}
//             placeholder="Họ và tên"
//             value={fullName}
//             onChange={setFullName}
//           />
//           <InputForm
//             style={{ marginBottom: '10px' }}
//             placeholder="abc@gmail.com"
//             value={email}
//             onChange={setEmail}
//           />
//           <div style={{ position: 'relative' }}>
//             <span
//               onClick={() => setIsShowPassword(!isShowPassword)}
//               style={{
//                 zIndex: 10,
//                 position: 'absolute',
//                 top: '9px',
//                 right: '8px',
//                 cursor: 'pointer',
//               }}
//             >
//               {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
//             </span>
//             <InputForm
//               placeholder="Mật khẩu"
//               type={isShowPassword ? 'text' : 'password'}
//               value={password}
//               onChange={setPassword}
//             />
//           </div>
//           <div style={{ position: 'relative', marginTop: '10px' }}>
//             <span
//               onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
//               style={{
//                 zIndex: 10,
//                 position: 'absolute',
//                 top: '9px',
//                 right: '8px',
//                 cursor: 'pointer',
//               }}
//             >
//               {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
//             </span>
//             <InputForm
//               placeholder="Xác nhận mật khẩu"
//               type={isShowConfirmPassword ? 'text' : 'password'}
//               value={confirmPassword}
//               onChange={setConfirmPassword}
//             />
//           </div>
//           <ButtonComponent
//             disabled={!fullName || !email || !password || !confirmPassword}
//             onClick={handleSignUp}
//             size={40}
//             styleButton={{
//               background: 'rgb(255, 57, 69)',
//               border: 'none',
//               height: '48px',
//               width: '100%',
//               borderRadius: '4px',
//               margin: '26px 0 10px',
//             }}
//             styleTextButton={{
//               color: '#fff',
//               fontSize: '15px',
//               fontWeight: '700',
//             }}
//             textButton="Đăng ký"
//           />
//           <p>
//             Đã có tài khoản?{' '}
//             <span>
//               <WrapperTextLight
//                 onClick={handleNavigateToSignIn}
//                 style={{ cursor: 'pointer' }}
//               >
//                 Đăng nhập
//               </WrapperTextLight>
//             </span>
//           </p>
//         </WrapperContainerLeft>
//         <WrapperContainerRight>
//           <Image
//             src={imageLogo}
//             preview={false}
//             alt="Image-logo"
//             height="203px"
//             width="203px"
//           />
//           <h4>Group 3</h4>
//         </WrapperContainerRight>
//       </SignUpCard>
//     </SignUpContainer>
//   );
// };

// export default SignUpPage;

import React, { useState } from 'react';
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
  SignUpContainer,
  SignUpCard,
  InputFieldContainer,
  InputField,
  PasswordWrapper,
  SubmitButton,
} from './style';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import * as UserService from '../../service/userService';
import * as message from '../../components/Message/Message';
import imageLogo from '../../assets/images/logo-login.png';

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      message.error('Mật khẩu và xác nhận mật khẩu không khớp!');
      return;
    }
    try {
      const data = await UserService.signup({ fullName, email, password });     
      console.log('data',data);
      if (data?.user) {
        message.success('Đăng ký thành công!');
        navigate('/login'); // Redirect to the login page
      }
    } catch (error) {
      message.error(error?.message || 'Đăng ký không thành công');
    }
  };

  const handleNavigateToSignIn = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <SignUpContainer>
      <SignUpCard>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng ký và tạo tài khoản</p>

          <InputFieldContainer>
            <InputField
              placeholder="Họ và tên"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </InputFieldContainer>

          <InputFieldContainer>
            <InputField
              placeholder="abc@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputFieldContainer>

          <PasswordWrapper>
            <InputField
              placeholder="Mật khẩu"
              type={isShowPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setIsShowPassword(!isShowPassword)}>
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
          </PasswordWrapper>

          <PasswordWrapper>
            <InputField
              placeholder="Xác nhận mật khẩu"
              type={isShowConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}>
              {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
          </PasswordWrapper>

          <SubmitButton
            disabled={!fullName || !email || !password || !confirmPassword}
            onClick={handleSignUp}
          >
            Đăng ký
          </SubmitButton>

          <p>
            Đã có tài khoản?{' '}
            <WrapperTextLight onClick={handleNavigateToSignIn}>
              Đăng nhập
            </WrapperTextLight>
          </p>
        </WrapperContainerLeft>

        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="Image-logo"
            height="203px"
            width="203px"
          />
          <h4>Group 3</h4>
        </WrapperContainerRight>
      </SignUpCard>
    </SignUpContainer>
  );
};

export default SignUpPage;
