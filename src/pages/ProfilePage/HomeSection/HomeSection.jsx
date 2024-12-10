import React, { useEffect, useState } from 'react';
import {
  Container,
  ProfileCard,
  StatsContainer,
  StatBox,
  PromoSection,
  PromoCard,
  SliderContainer,
} from './style';
import { useSelector } from 'react-redux';
import * as OrderService from '../../../service/orderService';
import * as BannerService from '../../../service/bannerService';
import Slider from 'react-slick';
import SliderComponent from '../../../components/SliderComponent/SliderComponent';

const HomeSection = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [banners, setBanners] = useState([]);
  console.log('banners', banners);
  

  const settings = {
    dots: true,              // Hiển thị các dấu chấm dưới slider
    infinite: true,          // Cho phép cuộn vô hạn
    speed: 500,              // Tốc độ chuyển slide
    slidesToShow: 4,         // Hiển thị 4 ảnh trên 1 hàng (1 dòng)
    slidesToScroll: 4,       // Cuộn 4 ảnh mỗi lần
    autoplay: true,          // Tự động chuyển slide
    autoplaySpeed: 2000,     // Tốc độ tự động chuyển
  };

  // Lấy danh sách đơn hàng
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const fetchedOrders = await OrderService.getOrder(user.id);
        setOrders(fetchedOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, [user?.id]);

  // Lấy danh sách banner
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const fetchedBanners = await BannerService.getAllBanner();
        setBanners(fetchedBanners);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };
    fetchBanners();
  }, []);

  // Tính tổng tiền đã mua
  const totalAmount = orders.reduce((total, order) => {
    if (order?.paymentMethod === 'vnpay' || order?.paymentMethod === 'cod-web') {
      return total + order?.quantity * order?.productPrice;
    } else if (order?.paymentMethod === 'card' || order?.paymentMethod === 'cod') {
      return total + (order?.quantity * order?.productPrice) * 24000;
    } else {
      return total;
    }
  }, 0);

  return (
    <Container>
      {/* Thông tin người dùng */}
      <ProfileCard>
        <div>
          <h1>
            Tên người dùng: <span style={{ fontWeight: 'normal' }}>{user?.fullName}</span>
          </h1>
          <h1>
            Số điện thoại: <span style={{ fontWeight: 'normal' }}>{user?.phoneNumber}</span>
          </h1>
        </div>
        <div>
          <StatsContainer>
            <StatBox>
              <h2>{orders.length}</h2>
              <p>Đơn hàng</p>
            </StatBox>
            <StatBox>
              <h2>
                {totalAmount > 1000000
                  ? `${(totalAmount / 1000000)} M`
                  : `${(totalAmount / 1000)} K`}
              </h2>
              <p>Tổng tiền tích lũy</p>
            </StatBox>
          </StatsContainer>
        </div>
      </ProfileCard>

      {/* Slider quảng cáo */}
      <PromoSection>
        <h2>Chương trình nổi bật</h2>
        {/* <SliderContainer>
          <Slider {...settings}>
            {banners.map((banner) => (
              <div key={banner?._id} style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={banner.image}
                  alt="slider"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    padding: '10px',
                  }}
                />
              </div>
            ))}
          </Slider>
        </SliderContainer> */}
        <SliderComponent arrImages = {banners}/>
      </PromoSection>
    </Container>
  );
};

export default HomeSection;
