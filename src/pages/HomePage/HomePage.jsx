import React, { useEffect, useState } from "react";
import { HeroSection, ProductsSection, Container, } from "./style";
import { getPopularProducts, getTopRatedProducts } from "../../service/productService";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { Image } from "antd";
import home from "../../assets/Home.png";
import TopRatedProductsCard from "../../components/ProductCardComponent/TopRatedProductsCard";
import PopularProductsCard from "../../components/ProductCardComponent/PopularProductsCard";

function HomePage() {
  const [popularProducts, setPopularProducts] = useState([]);
  const [topRatedProducts, settopRatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [popularData, topratedData] = await Promise.all([
          getPopularProducts(),
          getTopRatedProducts(),
        ]);
        setPopularProducts(popularData);
        settopRatedProducts(topratedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <HeaderComponent />
      <Container>
        <HeroSection>
          <Image src={home} alt="image home" preview={false} />
        </HeroSection>
        <ProductsSection>
          <TopRatedProductsCard products={topRatedProducts} isLoading={isLoading}/>
          <PopularProductsCard products={popularProducts} isLoading={isLoading} />
        </ProductsSection>
      </Container>
      <FooterComponent />
    </>
  );
}

export default HomePage;
