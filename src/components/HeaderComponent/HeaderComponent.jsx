import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, Logo, Nav, NavLink, Dropdown, DropdownMenu, DropdownLink, LoginButton, CartButton, SearchButton, SearchModal, SearchInput, SearchResults, SearchItem, CloseButton, } from "./style";
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import * as UserService from '../../service/userService';
import * as CategoryService from '../../service/categoryService.js';
import { useDispatch, useSelector } from "react-redux";
import { Popover } from "antd";
import {WrapperContentPopup } from './style.js';
import { resetUser } from '../../redux/slides/userSlide';
import { searchProducts } from "../../service/productService"; 

function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const user = useSelector((state) => state.user);
  const [categories, setCategories] = useState([]);


  // 
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // 

  
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



  // 
   // Mở modal tìm kiếm
   const handleSearchOpen = () => setIsSearchOpen(true);

   // Đóng modal tìm kiếm
   const handleSearchClose = () => {
     setIsSearchOpen(false);
     setSearchTerm("");
     setSearchResults([]);
   };
 
   // Xử lý khi nhập từ khóa tìm kiếm
   const handleSearchInput = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  
    if (term) {
      try {
        // Gọi hàm searchProducts từ productService và nhận trực tiếp danh sách sản phẩm
        const products = await searchProducts(term);
        setSearchResults(products || []); // Đặt kết quả tìm kiếm vào state
      } catch (error) {
        console.error("Error fetching search results:", error.message);
      }
    } else {
      setSearchResults([]); // Xóa kết quả tìm kiếm nếu không có từ khóa
    }
  };
  
 
   // Chuyển hướng đến trang kết quả tìm kiếm
   const handleNavigateToSearchPage = () => {
     navigate(`/search?term=${searchTerm}`);
     handleSearchClose();
   };
  // 




  const content = (
    <div>
        <WrapperContentPopup onClick = {() => navigate('/profile-user')}>Thông tin cá nhân</WrapperContentPopup>
        <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
    </div>
);

  return (
    // <HeaderContainer>
    //   <Logo onClick={() => handleNavigate("/")}>Group 3</Logo>
    //   <Nav>
    //     <NavLink onClick={() => handleNavigate("/about")}>About</NavLink>
    //     <Dropdown>
    //       <NavLink onClick={toggleMenu}>Categories</NavLink>
    //       {menuOpen && (
    //         <DropdownMenu>
    //           {categories.length > 0
    //             ? categories.map((category) => (
    //               <DropdownLink
    //               key={category.id}
    //               onClick={() => {
    //                 navigate(`/categories/${category.name}`); // Điều hướng đến trang loại sản phẩm
    //                 setMenuOpen(false); // Đóng dropdown sau khi nhấn
    //               }}
    //             >
    //               {category.name}
    //             </DropdownLink>
    //             ))
    //             :(
    //               <DropdownLink>Loading...</DropdownLink>
    //             )}
    //         </DropdownMenu>
    //       )}
    //     </Dropdown>
    //     <NavLink onClick={() => handleNavigate("/collections")}>
    //       Search
    //     </NavLink>
    //   </Nav>
    //   <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    //     <CartButton onClick={() => handleNavigate("/cart")}>
    //       <AiOutlineShoppingCart size={24} />
    //     </CartButton>
    //     {user?.token 
    //     ?  <>
    //         <Popover content = {content} trigger="click">
    //             <div style={{cursor:'pointer'}}>{user?.length ? user?.fullName : user?.email}</div>
    //         </Popover>
    //       </>
    //     : <LoginButton onClick={() => handleNavigate("/login")}>
    //           <AiOutlineUser size={24} />
    //       </LoginButton>
    //     }
    //   </div>

    // </HeaderContainer>
      <HeaderContainer>
        <Logo onClick={() => handleNavigate("/")}>Group 3</Logo>
        <Nav>
          <NavLink onClick={() => handleNavigate("/about")}>About</NavLink>
          <Dropdown>
            <NavLink onClick={toggleMenu}>Categories</NavLink>
            {menuOpen && (
              <DropdownMenu>
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <DropdownLink
                      key={category.id}
                      onClick={() => {
                        navigate(`/categories/${category.name}`); // Điều hướng đến trang loại sản phẩm
                        setMenuOpen(false); // Đóng dropdown sau khi nhấn
                      }}
                    >
                      {category.name}
                    </DropdownLink>
                  ))
                ) : (
                  <DropdownLink>Loading...</DropdownLink>
                )}
              </DropdownMenu>
            )}
          </Dropdown>
          <NavLink onClick={handleSearchOpen}>
            <AiOutlineSearch size={18} /> Search
          </NavLink>
        </Nav>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <CartButton onClick={() => handleNavigate("/cart")}>
            <AiOutlineShoppingCart size={24} />
          </CartButton>
          {user?.token ? (
            <>
              <Popover content={content} trigger="click">
                <div style={{ cursor: "pointer" }}>
                  {user?.length ? user?.fullName : user?.email}
                </div>
              </Popover>
            </>
          ) : (
            <LoginButton onClick={() => handleNavigate("/login")}>
              <AiOutlineUser size={24} />
            </LoginButton>
          )}
        </div>
  
        {/* Modal tìm kiếm */}
        {isSearchOpen && (
          <SearchModal>
            <CloseButton onClick={handleSearchClose}>×</CloseButton>
            <h3>Nhập từ khóa bạn muốn tìm kiếm</h3>
            <SearchInput
              type="text"
              value={searchTerm}
              onChange={handleSearchInput}
              placeholder="Search for products..."
            />
            {searchTerm && (
              <SearchResults>
                {searchResults.length > 0 ? (
                  searchResults.map((item) => (
                    <SearchItem
                      key={item._id}
                      onClick={() => {
                        navigate(`/product-details/${item._id}`);
                        handleSearchClose();
                      }}
                    >
                      {item.name}
                    </SearchItem>
                  ))
                ) : (
                  <p>No results found</p>
                )}
              </SearchResults>
            )}
            <button onClick={handleNavigateToSearchPage}>→</button>
          </SearchModal>
        )}
      </HeaderContainer>
      // 
  );
}

export default HeaderComponent;


