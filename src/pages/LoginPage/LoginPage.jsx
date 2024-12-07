import React, { useState, useEffect } from 'react';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight, LoginContainer, LoginCard,} from './style';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import imageLogo from '../../assets/images/logo-login.png';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { Image } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { updateUser } from '../../redux/slides/userSlide'
import {jwtDecode} from 'jwt-decode';
import { useMutationHooks } from '../../hooks/useMutationHook'

import * as UserService from '../../service/userService';
import * as message from '../../components/Message/Message';

const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutationHooks(
    data => UserService.signin(data)
    
  );
  const {data ,isSuccess, isError, error} = mutation;  

  useEffect(() => {
    if (isError) {
      message.error(error?.message || "Đăng nhập không thành công");
      return; // Ngăn chặn điều hướng nếu có lỗi
    }
    if(isSuccess) {
      if (data?.token) {
        localStorage.setItem('token', JSON.stringify(data?.token));
        console.log(JSON.stringify(data?.token));
        
        const decoded = jwtDecode(data?.token);                
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id);
        }
        message.success("Đăng nhập thành công");
        navigate('/');
    }
    else {
      message.error("Đăng nhập thất bại");
    }
  }
  }, [isSuccess, isError]);

  const handleLogin = () => {
    mutation.mutate({
      email,
      password
    })
  }

  const handleGetDetailsUser = async (userId) => {    
    const res = await UserService.getDetailsUser(userId);  
    const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;
    dispatch(updateUser({...res,token}));    
  }

  const handleNavigateToSignup = () => {
    navigate('/register');
  };

  return (
    <LoginContainer>
      <LoginCard>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập và tạo tài khoản</p>
          <InputForm
            style={{ marginBottom: '10px' }}
            placeholder="abc@gmail.com"
            value={email}
            onChange={setEmail}
          />
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '9px',
                right: '8px',
                cursor: 'pointer',
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              placeholder="password"
              type={isShowPassword ? 'text' : 'password'}
              value={password}
              onChange={setPassword}
            />
          </div>
          <ButtonComponent
            disabled={!email || !password}
            onClick={handleLogin}
            size={40}
            styleButton={{
              background: 'rgb(255, 57, 69)',
              border: 'none',
              height: '48px',
              width: '100%',
              borderRadius: '4px',
              margin: '26px 0 10px',
            }}
            styleTextButton={{
              color: '#fff',
              fontSize: '15px',
              fontWeight: '700',
            }}
            textButton="Đăng nhập"
          />
          <p>
            <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
          </p>
          <p>
            Chưa có tài khoản?{' '}
            <span>
              <WrapperTextLight
                onClick={handleNavigateToSignup}
                style={{ cursor: 'pointer' }}
              >
                Tạo tài khoản
              </WrapperTextLight>
            </span>
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
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginPage;
