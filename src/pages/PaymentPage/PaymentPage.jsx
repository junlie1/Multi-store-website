import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalPrice, selectCartItems } from '../../redux/slides/cartSlide';
import { useNavigate } from 'react-router-dom';
import { Radio, Button } from 'antd';
import { message } from 'antd';
import { createOrder } from '../../service/orderService';
import * as PaymentService from '../../service/paymentService';
const PaymentPage = () => {
  const user = useSelector((state) => state.user);  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedCartItems, totalPrice } = useSelector((state) => state.cart);

  const [paymentMethod, setPaymentMethod] = useState('cash'); // Mặc định là tiền mặt

  const handlePayment = async  () => {
    if (!selectedCartItems.length) {
      message.error('Không có sản phẩm nào để thanh toán!');
      return;
    }

    if (paymentMethod === 'cash') {
      try {
        // Tạo dữ liệu order
        const orderData = selectedCartItems.map((item) => ({
          fullName: user?.fullName,
          email: user?.email, 
          city: user?.city, 
          locality: user?.locality,
          phoneNumber: user?.phoneNumber, 
          productId: item.productId,
          productName: item.productName,
          productPrice: item.productPrice,
          quantity: item.quantity,
          category: item.category,
          image: item.image[0],
          vendorId: item.vendorId,
          buyerId: user?.id,
          paymentStatus: 'pending',
          paymentIntentId: null,
          paymentMethod: 'cod',
          isPaid: false,
        }));

        // Gọi API thêm mới order
        const promises = orderData.map((data) => createOrder(data));
        await Promise.all(promises);

        message.success('Thanh toán thành công bằng tiền mặt!');
        navigate('/order-success');
      } catch (error) {
        message.error(error.message || 'Đã xảy ra lỗi khi xử lý thanh toán.');
      }
    } 
    else if (paymentMethod === 'vnpay') {
      try {
        // Giả sử chỉ thanh toán cho một sản phẩm
        const selectedProduct = selectedCartItems[0]; // Lấy sản phẩm đầu tiên trong danh sách
    
        // Tạo dữ liệu đơn hàng
        const orderData = {
          fullName: user?.fullName,
          email: user?.email, 
          city: user?.city, 
          locality: user?.locality,
          phoneNumber: user?.phoneNumber, 
          productId: selectedProduct.productId,
          productName: selectedProduct.productName,
          productPrice: (selectedProduct.productPrice) * 24000,
          quantity: selectedProduct.quantity,
          category: selectedProduct.category,
          image: selectedProduct.image[0],
          vendorId: selectedProduct.vendorId,
          buyerId: user?.id,
          paymentStatus: 'pending',
          paymentMethod: 'vnpay', // Chỉ định phương thức thanh toán là vnpay
          isPaid: false,
        };
    
        // Gửi yêu cầu tạo URL thanh toán
        const res = await PaymentService.createPayment(orderData);
        console.log('res', res);
        
    
        if (res?.data?.url) {
          // Chuyển hướng người dùng đến URL thanh toán
          window.location.href = res.data.url;
        } else {
          console.error('Failed to create payment URL:', res.message);
          message.error('Không thể tạo liên kết thanh toán. Vui lòng thử lại!');
        }
      } catch (error) {
        console.error('Payment error:', error);
        message.error('Đã xảy ra lỗi trong quá trình thanh toán. Vui lòng thử lại!');
      }
    }
  };

  return (
    <div>
      <h1>Chọn phương thức thanh toán</h1>
      <Radio.Group
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        style={{ marginBottom: '20px' }}
      >
        <Radio value="cash">Tiền mặt</Radio>
        <Radio value="vnpay">VNPAY</Radio>
      </Radio.Group>

      <div>
        <h2>Tổng tiền: {totalPrice.toLocaleString('vi-VN')} VND</h2>
        <Button
          type="primary"
          onClick={handlePayment}
          style={{ marginTop: '20px', background: '#4caf50', color: '#fff' }}
        >
          Thanh toán
        </Button>
      </div>
    </div>
  );
};

export default PaymentPage;
