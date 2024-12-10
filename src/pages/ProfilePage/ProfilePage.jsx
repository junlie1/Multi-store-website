import React from 'react';
import {
  PageWrapper,
  Container,
  Sidebar,
  SidebarItem,
  ProfileSection,
} from './style';
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { Outlet, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const sidebarItems = [
    { name: 'Trang chủ', path: '/profile-user/home', icon: '🏠' },
    { name: 'Lịch sử mua hàng', path: '/profile-user/purchase-history', icon: '📜' },
    { name: 'Tài khoản của bạn', path: '/profile-user/account', icon: '👤' },
  ];

  return (
    <PageWrapper>
      <HeaderComponent />
      <Container>
        {/* Sidebar */}
        <Sidebar>
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              onClick={() => navigate(item.path)}
            >
              {item.icon} {item.name}
            </SidebarItem>
          ))}
        </Sidebar>

        {/* ProfileSection */}
        <ProfileSection>
          <Outlet />
        </ProfileSection>
      </Container>
    </PageWrapper>
  );
};

export default ProfilePage;
