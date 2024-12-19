import React, { useEffect, useState } from 'react';
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
  SignUpContainer,
  SignUpCard,
  InputField,
  PasswordWrapper,
  SubmitButton,
} from './style';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { Image } from 'antd';
import { data, useNavigate } from 'react-router-dom';
import * as UserService from '../../service/userService';
import * as message from '../../components/Message/Message';
import imageLogo from '../../assets/images/logo-login.png';
import { useSelector } from 'react-redux';
import { useMutationHooks } from '../../hooks/useMutationHook';

const ChangePassword = () => {
    
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowNewPassword, setIsShowNewPassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const user = useSelector((state) => state.user);
    
    const navigate = useNavigate();
    const mutation = useMutationHooks(
        data => UserService.changePassword(user.id,data)
    );

    const {data, isSuccess, isError, error } = mutation; 
    console.log('mutation',mutation);
    

  useEffect(() => {
    if (isError) {
      message.error(error?.response?.data?.message || "Đổi mật khẩu thất bại");
    }
    else if(isSuccess) {
      message.success("Đổi mật khẩu thành công")
    }
  }, [isSuccess,isError, error]);
  
    const handleUpdate = () => {
      console.log("Data sent to API:", {
        currentPassword,
        newPassword
    });
        mutation.mutate({
            currentPassword,
            newPassword
        })
    }
    const handleNavigateToSignIn = () => {
      navigate('/login'); // Navigate to the login page
    };
    return (
      <SignUpContainer>
        <SignUpCard>
          <WrapperContainerLeft>
            <h1>Xin chào</h1>
            <p>Đổi mật khẩu</p>
            <PasswordWrapper>
              <InputField
                placeholder="Mật khẩu cũ"
                type={isShowPassword ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <span onClick={() => setIsShowPassword(!isShowPassword)}>
                {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
              </span>
            </PasswordWrapper>
  
            <PasswordWrapper>
              <InputField
                placeholder="Mật khẩu mới"
                type={isShowNewPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span onClick={() => setIsShowNewPassword(!isShowNewPassword)}>
                {isShowNewPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
              </span>
            </PasswordWrapper>
  
            <SubmitButton
              disabled={!currentPassword || !newPassword}
              onClick={handleUpdate}
            >
              Submit
            </SubmitButton>
  
            <p>
              Nhớ mật khẩu?{' '}
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
}

export default ChangePassword