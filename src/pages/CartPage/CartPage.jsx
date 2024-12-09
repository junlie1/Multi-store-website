import { Button, Checkbox, Form } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { 
  CustomCheckbox, 
  WrapperCountOrder, 
  WrapperInfo, 
  WrapperItemOrder, 
  WrapperLeft, 
  WrapperListOrder, 
  WrapperRight, 
  WrapperStyleHeader,
  WrapperTotal 
} from './style';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { WrapperInputNumber } from '../../components/ProductDetailsComponent/style';
import InputComponent from '../../components/InputComponent/InputComponent';
import { useSelector } from 'react-redux';
import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeCartItem, selectCartItems, setTotalPrice } from '../../redux/slides/cartSlide';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent.jsx';
import * as UserService from '../../service/userService.js';
import { message } from 'antd';
import { updateUser } from '../../redux/slides/userSlide.js';
import { useNavigate } from 'react-router-dom';


const OrderPage = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  console.log('user', user);
  const [form] = Form.useForm();
  const [isopenModalUpdateInfo, setIsOpenModalUpdateInfo] = useState(false);
  const [listChecked, setListChecked] = useState([]); // Lưu danh sách sản phẩm được chọn
  const [stateUserDetails, setStateUderDetails] = useState({
    fullName: '',
    city: '',
    locality: '',
    phoneNumber: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeCount = (type, idProduct) => {
    if (type === 'increase') {
      dispatch(increaseQuantity({ idProduct }));
    } else {
      dispatch(decreaseQuantity({ idProduct }));
    }
  };

  const handleDeleteOrder = (idProduct) => {
    dispatch(removeCartItem({ idProduct }));
  };

  const handleOnChangeCheck = (checked, productId) => {
    if (checked) {
      setListChecked([...listChecked, productId]);
    } else {
      setListChecked(listChecked.filter((id) => id !== productId));
    }
  };

  // Tính tổng tiền dựa trên listChecked
  const totalCartPrice = useMemo(() => {
    return cart?.cartItems?.filter((item) => listChecked.includes(item.productId))?.reduce((total, item) => {
        return total + item.productPrice * item.quantity;
      }, 0);
  }, [cart.cartItems, listChecked]);

  useEffect(() => {
    if (isopenModalUpdateInfo) {
      setStateUderDetails({
        ...stateUserDetails,
        fullName: user?.fullName || '',
        city: user?.city || '',
        locality: user?.locality || '',
        phoneNumber: user?.phoneNumber || '',
      });
    }
  }, [isopenModalUpdateInfo]);

  useEffect(() => {
    if (form && stateUserDetails) {
      form.setFieldsValue(stateUserDetails);
    }
  }, [form, stateUserDetails]);

  const handleAddOrder = () => {
    if (listChecked.length === 0) {
      message.error('Vui lòng chọn ít nhất một sản phẩm!');
      return;
    }

    if(!user?.city || !user?.locality || !user?.phoneNumber || !user?.fullName) {
      setIsOpenModalUpdateInfo(true);
    }
    else {
      // Tạo danh sách sản phẩm đã chọn từ cart
    const selectedProducts  = cart?.cartItems?.filter((item) => listChecked.includes(item.productId));
     // Tính tổng tiền
    const calculatedTotalPrice = selectedProducts.reduce((total, item) => {
      return (total + item.productPrice * item.quantity) * 24000;
    }, 0);
     // Dispatch action để cập nhật selectedCartItems trong Redux
     dispatch(selectCartItems({ productIds: listChecked }));
     dispatch(setTotalPrice(calculatedTotalPrice)); // Cập nhật totalPrice

     console.log("selectedProducts", selectedProducts);
    

    // Chuyển hướng sang trang /payment với thông tin được chọn
    navigate('/payment', {
      state: { 
        selectedProducts, 
        totalCartPrice: calculatedTotalPrice, 
        userDetails: { 
          fullName: user.fullName, 
          city: user.city, 
          locality: user.locality, 
          phoneNumber: user.phoneNumber 
        } 
      },
    });
  }
}
  const handelUpdateInfoUser = async () => {
    try {
      // Kiểm tra tất cả các trường trong form
      const values = await form.validateFields();
      console.log('Validated values:', values);

      const { fullName,city,locality,phoneNumber } = stateUserDetails;

      if (fullName && city && locality && phoneNumber) {
        // Gọi API cập nhật thông tin người dùng
        const updatedUser = await UserService.updateUser(user?.id, { fullName, city, locality, phoneNumber });

        // Dispatch cập nhật Redux store
        dispatch(updateUser({ 
          ...updatedUser, 
          token: user?.token 
        }));

        message.success('Thông tin đã được cập nhật!');
        setIsOpenModalUpdateInfo(false);
      }
    } catch (error) {
      console.error('Validation failed:', error);
      message.error('Vui lòng điền đầy đủ thông tin!');
    }
  };

  const handleCancelUpdate = () => {
    setStateUderDetails({
      fullName: '',
      city: '',
      locality: '',
      phoneNumber: '',
    })
    form.resetFields()
    setIsOpenModalUpdateInfo(false)
  }

  const handleChangeAddress = () => {
      setIsOpenModalUpdateInfo(true);
  }
  const handleOnchangeDetails = (e) => {
    setStateUderDetails({
      ...stateUserDetails,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <HeaderComponent />
      <div style={{ background: '#f5f5fa', width: '100%', height: '100vh', marginTop: '20px' }}>
        <div style={{ height: '100%', width: '1270px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <WrapperLeft>
              <WrapperStyleHeader>
                <span style={{ display: 'inline-block', width: '390px' }}>
                  <CustomCheckbox></CustomCheckbox>
                  <span> Tất cả {cart?.cartItems?.length} sản phẩm</span>
                </span>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Đơn giá</span>
                  <span>Số lượng</span>
                  <span>Thành tiền</span>
                  <DeleteOutlined style={{ cursor: 'pointer' }} />
                </div>
              </WrapperStyleHeader>
              <WrapperListOrder>
                {cart?.cartItems?.map((cart) => {
                  return (
                    <WrapperItemOrder key={cart.productId}>
                      <div style={{ width: '390px', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Checkbox
                          checked={listChecked.includes(cart.productId)}
                          onChange={(e) => handleOnChangeCheck(e.target.checked, cart.productId)}
                        />
                        <img src={cart?.image} style={{ width: '77px', height: '79px', objectFit: 'cover' }} />
                        <div style={{ width: 260, overflow: 'hidden' }}>{cart?.productName}</div>
                      </div>
                      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span>
                          <span style={{ fontSize: '13px', color: '#242424' }}>{cart?.productPrice}</span>
                        </span>
                        <WrapperCountOrder>
                          <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                            <MinusOutlined
                              style={{ color: '#000', fontSize: '10px' }}
                              onClick={() => handleChangeCount('decrease', cart?.productId)}
                            />
                          </button>
                          <WrapperInputNumber size="small" defaultValue={cart?.quantity} value={cart?.quantity} />
                          <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                            <PlusOutlined
                              style={{ color: '#000', fontSize: '10px' }}
                              onClick={() => handleChangeCount('increase', cart?.productId)}
                            />
                          </button>
                        </WrapperCountOrder>
                        <span
                          style={{ color: 'rgb(255, 66, 78)', fontSize: '13px', fontWeight: 500 }}
                        >
                          {cart?.productPrice * cart?.quantity}
                        </span>
                        <DeleteOutlined
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleDeleteOrder(cart?.productId)}
                        />
                      </div>
                    </WrapperItemOrder>
                  );
                })}
              </WrapperListOrder>
            </WrapperLeft>
            <WrapperRight>
              <div style={{ width: '100%' }}>
                <WrapperInfo>
                  <div>
                    <span>Địa chỉ: </span>
                    <span style={{ fontWeight: 'bold' }}>{`${user?.locality}, ${user?.city}`}</span>
                    <span style={{ color: '#9255FD', cursor: 'pointer' }} onClick={handleChangeAddress}>Thay đổi</span>
                  </div>
                </WrapperInfo>
                <WrapperTotal>
                  <span>Tổng tiền</span>
                  <span style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ color: 'rgb(254, 56, 52)', fontSize: '24px', fontWeight: 'bold' }}>
                      {totalCartPrice.toLocaleString('vi-VN')} VND
                    </span>
                    <span style={{ color: '#000', fontSize: '11px' }}>(Đã bao gồm VAT nếu có)</span>
                  </span>
                </WrapperTotal>
              </div>
              <Button
              size={40}
              style={{
                background: 'rgb(255, 57, 69)',
                height: '48px',
                width: '320px',
                border: 'none',
                borderRadius: '4px',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold', 
                textAlign: 'center',
              }}
              onClick={handleAddOrder}
            >Mua hàng</Button>
            </WrapperRight>
          </div>
        </div>
        <Modal
          title="Cập nhật thông tin giao hàng"
          visible={isopenModalUpdateInfo}
          onOk={handelUpdateInfoUser}
          onCancel={handleCancelUpdate}
        >
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            autoComplete="on"
          >
            <Form.Item label="FullName" name="fullName" rules={[{ required: true, message: 'Please input your full name' }]}>
              <InputComponent onChange={(e) => handleOnchangeDetails(e)} name="fullName" />
            </Form.Item>
            <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please input your city!' }]}>
              <InputComponent onChange={(e) => handleOnchangeDetails(e)} name="city" />
            </Form.Item>
            <Form.Item label="Locality" name="locality" rules={[{ required: true, message: 'Please input your locality!' }]}>
              <InputComponent onChange={(e) => handleOnchangeDetails(e)} name="locality" />
            </Form.Item>
            <Form.Item label="SĐT" name="phoneNumber" rules={[{ required: true, message: 'Please input your phone number!' }]}>
              <InputComponent onChange={(e) => handleOnchangeDetails(e)} name="phoneNumber" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default OrderPage;
