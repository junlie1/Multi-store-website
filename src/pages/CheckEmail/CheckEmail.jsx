import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Title,
  Subtitle,
  Button,
  LinkText,
} from './style';
import { useMutationHooks } from '../../hooks/useMutationHook';
import * as UserService from '../../service/userService';
import * as message from '../../components/Message/Message';
import InputForm from '../../components/InputForm/InputForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/slides/userSlide';

const CheckEmail = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const mutation = useMutationHooks(data => UserService.checkEmail(data));  
  const {data, isSuccess, isError, error } = mutation; 
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (isError) {
      message.error(error?.response?.data?.message || "Không tìm thấy tài khoản");
    }
    else if(isSuccess) {
      message.success("Hãy sửa mật khẩu");
      dispatch(getUser(data));
      navigate('/update-password');
    }
  }, [isSuccess,isError, error]);

  const validateEmail = () => {
    mutation.mutate({ email });
  };

  return (
    <Container>
      <Card>
        <Title>Quên mật khẩu?</Title>
        <Subtitle>
          Điền email gắn với tài khoản của bạn để nhận đường dẫn thay đổi mật khẩu
        </Subtitle>
        <form>
          <InputForm
            style={{ marginBottom: '10px' }}
            placeholder="abc@gmail.com"
            value={email}
            onChange={setEmail} // Cập nhật giá trị email
          />
          <Button type="button" onClick={validateEmail}>Tiếp tục</Button>
        </form>
        <LinkText href="/login">Quay lại đăng nhập</LinkText>
      </Card>
    </Container>
  );
};

export default CheckEmail;
