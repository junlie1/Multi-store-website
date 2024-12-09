import React, { useEffect, useState } from 'react';
import * as OrderService from '../../service/orderService';
import { useSelector } from 'react-redux';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';

const OrderSuccess = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]); // Lưu danh sách đơn hàng
  const [loading, setLoading] = useState(true); // Hiển thị trạng thái tải dữ liệu

  // Lấy danh sách đơn hàng khi component được render
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const fetchedOrders = await OrderService.getOrder(user.id); // Lấy danh sách đơn hàng từ API
        setOrders(fetchedOrders); // Lưu dữ liệu vào state
      } catch (error) {
        console.error('Lỗi khi lấy danh sách đơn hàng:', error);
      } finally {
        setLoading(false); // Tắt trạng thái tải
      }
    };

    fetchOrders(); // Gọi hàm lấy dữ liệu
  }, [user.id]); // Chỉ gọi lại khi `user.id` thay đổi

  return (
    <>
      <HeaderComponent />
      <div style={{ padding: '20px' }}>
        <h1>Danh sách đơn hàng</h1>
        {loading ? (
          <p>Đang tải danh sách đơn hàng...</p>
        ) : orders.length === 0 ? (
          <p>Chưa có đơn hàng nào.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {orders.map((order) => (
              <div
                key={order._id}
                style={{
                  border: '1px solid #ddd',
                  padding: '15px',
                  borderRadius: '5px',
                  background: '#f9f9f9',
                }}
              >
                <img
                  src={order.image}
                  alt={order.productName}
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    marginRight: '10px',
                  }}
                />
                <div style={{ marginTop: '10px' }}>
                  <h2>{order.productName}</h2>
                  <p>
                    <strong>Giá:</strong> {order.productPrice.toLocaleString('vi-VN')} VND
                  </p>
                  <p>
                    <strong>Số lượng:</strong> {order.quantity}
                  </p>
                  <p>
                    <strong>Thành tiền:</strong> {(
                      order.productPrice * order.quantity
                    ).toLocaleString('vi-VN')} VND
                  </p>
                  <p>
                    <strong>Phương thức thanh toán:</strong> {order.paymentMethod}
                  </p>
                  <p>
                    <strong>Trạng thái:</strong>{' '}
                    {
                    order.delivered 
                    ? 'Đã giao' 
                    : order.shipping 
                    ? "Đang vận chuyển"
                    : order.processing 
                    ? "Đang chuẩn bị hàng"
                    : "Đơn đã bị hủy"
                    }
                  </p>
                  <p>
                    <strong>Địa chỉ:</strong> {`${order.locality}, ${order.city}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default OrderSuccess;
