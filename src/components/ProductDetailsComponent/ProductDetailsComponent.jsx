// import React from 'react';
// import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
// import FooterComponent from "../../components/FooterComponent/FooterComponent";
// import * as ProductService from '../../service/productService';
// import { useQuery } from '@tanstack/react-query';

// import {
//   ProductDetailsContainer,
//   ProductImageWrapper,
//   ProductImage,
//   ProductInfoWrapper,
//   ProductName,
//   ProductPrice,
//   ProductDescription,
//   ProductCategory,
//   ActionButton,
//   FullWidthSection,
//   GlobalStyle,
// } from "./style";

// const ProductDetailsComponent = ({ idProduct }) => {
//   const handleGetDetailProduct = async () => {
//     try {
//       const res = await ProductService.getDetailsProduct(idProduct);
//       return res;
//     } catch (error) {
//       console.log('error', error);
//     }
//   };

//   const { data: productDetails } = useQuery({
//     queryKey: ['product-details', idProduct],
//     queryFn: handleGetDetailProduct,
//     enabled: !!idProduct,
//   });

//   console.log('productDetails', productDetails);

//   return (
//   <>
//     <GlobalStyle />
//     {/* Header */}
//       <HeaderComponent />

//     {/* Main Content */}
//     <ProductDetailsContainer>
//       <ProductImageWrapper>
//         <ProductImage
//           src={productDetails?.images?.[0]}
//           alt={productDetails?.productName || "Product Image"}
//         />
//       </ProductImageWrapper>

//       <ProductInfoWrapper>
//         <ProductName>{productDetails?.productName || "Tên sản phẩm"}</ProductName>
//         <ProductPrice>{productDetails?.productPrice?.toLocaleString()} Đ</ProductPrice>
//         <ProductCategory>
//           <span>Danh mục:</span> {productDetails?.category || "Không có"}
//         </ProductCategory>
//         <ProductDescription>
//           {productDetails?.description || "Không có mô tả"}
//         </ProductDescription>
//         <ActionButton>Add to cart</ActionButton>
//       </ProductInfoWrapper>
//     </ProductDetailsContainer>

//     {/* Footer */}
//     <FullWidthSection>
//       <FooterComponent />
//     </FullWidthSection>
//   </>
// );

// };

// export default ProductDetailsComponent;

import React from 'react';
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import * as ProductService from '../../service/productService';
import { useQuery } from '@tanstack/react-query';

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
} from "./style";

const ProductDetailsComponent = ({ idProduct }) => {
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
    <ActionButton>Thêm vào giỏ hàng</ActionButton>
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
