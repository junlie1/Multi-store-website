import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, Logo, Nav, NavLink, Dropdown, DropdownMenu, DropdownLink, LoginButton, CartButton } from "./style";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import * as UserService from '../../service/userService';
import * as CategoryService from '../../service/categoryService.js';
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Popover } from "antd";
import {WrapperContentPopup } from './style.js';
import { resetUser } from '../../redux/slides/userSlide'


function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);  
  
  const [categories, setCategories] = useState([]);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleNavigate = (path) => {
    navigate(path); 
  };

  const toggleMenu = () => {
    if (!menuOpen) {
      handleGetAllCategories(); // Gọi API khi mở menu
    }
    setMenuOpen(!menuOpen); 
  };

  const handleGetAllCategories = async() => {
    try {
      const res = await CategoryService.getAllCategory();
      setCategories(res);
    } catch (error) {
      
    }
  }
  const handleLogout = async () => {
    await UserService.logoutUser();
    localStorage.removeItem('token');
    dispatch(resetUser()); // Cập nhật Redux state
    navigate('/login'); 
}

  const content = (
    <div>
        <WrapperContentPopup onClick = {() => navigate('/profile-user')}>Thông tin cá nhân</WrapperContentPopup>
        <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
    </div>
);

  return (
    <HeaderContainer>
      <Logo onClick={() => handleNavigate("/")}>Group 3</Logo>
      <Nav>
        <NavLink onClick={() => handleNavigate("/about")}>About</NavLink>
        <Dropdown>
          <NavLink onClick={toggleMenu}>Categories</NavLink>
          {menuOpen && (
            <DropdownMenu>
              {categories.length > 0
                ? categories.map((category) => (
                  <DropdownLink
                    key={category.id} // Sử dụng `id` làm key nếu có
                    onClick={() => handleNavigate(`/categories/${category.name}`)} // Sử dụng `slug` hoặc `id` để tạo link
                  >
                    {category.name}
                  </DropdownLink>
                ))
                :(
                  <DropdownLink>Loading...</DropdownLink>
                )}
            </DropdownMenu>
          )}
        </Dropdown>
        <NavLink onClick={() => handleNavigate("/collections")}>
          Collections
        </NavLink>
      </Nav>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {user?.id 
        ? <Badge count = {cart?.cartItems.length} size='small'>
            <CartButton onClick={() => handleNavigate("/cart")}>
              <AiOutlineShoppingCart size={24} />
            </CartButton>
          </Badge>
        : <div></div>
      }
        {user?.token 
        ?  <>
            <Popover content = {content} trigger="click">
                <div style={{cursor:'pointer'}}>{user?.length ? user?.fullName : user?.email}</div>
            </Popover>
          </>
        : <LoginButton onClick={() => handleNavigate("/login")}>
              <AiOutlineUser size={24} />
          </LoginButton>
        }
      </div>

    </HeaderContainer>
  );
}

export default HeaderComponent;


