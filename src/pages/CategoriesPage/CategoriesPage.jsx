import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as ProductService from "../../service/productService";
import {
  Container,
  HeaderSection,
  FilterContainer,
  ProductList,
  SortDropdown,
  SortLabel,
  PaginationWrapper,
  PageButton,
} from "./style";
import CardComponent from "../../components/CardComponent/CardComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
function CategoriesPage() {
  const { category } = useParams(); 
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [sortOption, setSortOption] = useState("rating"); 
  const [page, setPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(0); 
  
  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const result = await ProductService.getProductsByCategory(category, page);
      console.log('result',result);
      
      if (result && result.products) {
        setProducts(result.products);
        setTotalPages(result.totalPages);
      } else {
        setProducts([]); // Không có sản phẩm nào
        setTotalPages(0);
      }
    } catch (error) {
      console.error("Error fetching products by category:", error);
      setProducts([]);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };
  fetchProducts();
}, [category, page]);
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    const sortedProducts = [...products].sort((a, b) => {
      if (value === "rating") return b.averageRating - a.averageRating; 
      if (value === "priceLowToHigh") return a.productPrice - b.productPrice; 
      if (value === "priceHighToLow") return b.productPrice - a.productPrice; 
      return 0;
    });
    setProducts(sortedProducts);
  };
  const handlePageChange = (newPage) => {
    setPage(newPage); 
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <HeaderComponent />
      <Container>
        <HeaderSection>
          <h2>{category} Products</h2>
          <FilterContainer>
            <SortLabel htmlFor="sort">Sort by:</SortLabel>
            <SortDropdown id="sort" onChange={handleSortChange}>
              <option value="rating">Rating</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </SortDropdown>
          </FilterContainer>
        </HeaderSection>
        <ProductList>
          {products.map((product) => (
            <CardComponent key={product._id} product={product} />
          ))}
        </ProductList>
        <PaginationWrapper>
          {Array.from({ length: totalPages }, (_, index) => (
            <PageButton
              key={index + 1}
              active={page === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PageButton>
          ))}
        </PaginationWrapper>
      </Container>
      <FooterComponent />
    </>
  );
}

export default CategoriesPage;
