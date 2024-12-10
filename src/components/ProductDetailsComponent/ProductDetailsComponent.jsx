import React, { useState } from 'react';
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import * as ProductService from '../../service/productService';
import { useQuery } from '@tanstack/react-query';
import { StarFilled, MinusOutlined, PlusOutlined } from '@ant-design/icons';

import {
  ProductDetailsContainer,
  ProductImageWrapper,
  ProductImage,
  ProductInfoWrapper,
  ProductName,
  ProductPrice,
  ProductDescription,
  ProductCategory,
  ActionButton,
  FullWidthSection,
  GlobalStyle,
  WrapperInputNumber,
  WrapperQualityProduct,
} from "./style";
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../redux/slides/cartSlide';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetailsComponent = ({ idProduct }) => {
  const [numProduct, setNumProduct] = useState(1);
  const user = useSelector((state) => state.user);
  
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();  

  
  const onChange = (value) => { 
    setNumProduct(Number(value))
  }
  const handleChangeCount = (type) => {
    if(type === 'increase') {
      setNumProduct(numProduct + 1)
    }
    else {
      setNumProduct(numProduct - 1)
    }
  }

  const handleGetDetailProduct = async () => {
    try {
      const res = await ProductService.getDetailsProduct(idProduct);
      return res;
    } catch (error) {
      console.log('error', error);
    }
  };

  const { data: productDetails } = useQuery({
    queryKey: ['product-details', idProduct],
    queryFn: handleGetDetailProduct,
    enabled: !!idProduct,
  });

  console.log('productDetails', productDetails);
  

  const handleAddProductToCart = () => {
    if(!user?.id) {
      navigate('/login', {state: location?.pathname})
    }
    else {
      dispatch(addCartItem({
        cartItem: {
            productName: productDetails?.productName,
            quantity: numProduct,
            image: productDetails?.images,
            productPrice: productDetails?.productPrice,
            productId: productDetails?._id,
            category: productDetails?.category,
            vendorId: productDetails?.vendorId,
        }
    }));
    }
  }

  return (
    <>
      <GlobalStyle />
      {/* Header */}
      <HeaderComponent />

      {/* Main Content */}
      <ProductDetailsContainer>
  {/* Phần hình ảnh nằm bên trái */}
  <ProductImageWrapper>
    <ProductImage
      src={productDetails?.images?.[0] || "/placeholder-image.jpg"}
      alt={productDetails?.productName || "Product Image"}
    />
  </ProductImageWrapper>

  {/* Phần thông tin nằm bên phải */}
  <ProductInfoWrapper>
    <ProductName>{productDetails?.productName || "Tên sản phẩm"}</ProductName>
    <ProductPrice>
      {productDetails?.productPrice?.toLocaleString() || "0"} Đ
    </ProductPrice>
    <ProductCategory>
      <span>Danh mục:</span> {productDetails?.category || "Không có"}
    </ProductCategory>
    <ProductDescription>
      {productDetails?.description || "Không có mô tả"}
    </ProductDescription>
    <div style={{ margin: "10px 0 20px", padding: "10px 0", borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5" }}>
          <div style={{marginBottom: "10px", fontSize: 'x-large'}}>Số lượng</div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transparent", cursor: 'pointer' }} onClick={() => handleChangeCount('decrease')}>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
            <WrapperInputNumber onChange={onChange} value={numProduct} size='small' />
            <button style={{ border: "none", background: "transparent", cursor: 'pointer'}} onClick={() => handleChangeCount('increase')}>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
        </div>
    <ActionButton onClick={handleAddProductToCart}>Thêm vào giỏ hàng</ActionButton>
  </ProductInfoWrapper>
</ProductDetailsContainer>


      {/* Footer */}
      <FullWidthSection>
        <FooterComponent />
      </FullWidthSection>
    </>
  );
};

export default ProductDetailsComponent;
