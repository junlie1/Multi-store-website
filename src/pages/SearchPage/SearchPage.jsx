import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, ProductList, Message } from "./style";
import CardComponent from "../../components/CardComponent/CardComponent";
import { searchProducts } from "../../service/productService";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);  
  const [loading, setLoading] = useState(true);

  const searchTerm = searchParams.get("term");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const products = await searchProducts(searchTerm); // Gọi API từ service
        setProducts(products || []); // Cập nhật state sản phẩm
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false); // Kết thúc loading
      }
    };

    if (searchTerm) fetchProducts(); // Chỉ fetch khi có từ khóa
  }, [searchTerm]);
  
  return (
    <Container>
      <h2>Results for "{searchTerm}"</h2>
      {loading ? (
        <Message>Loading...</Message>
      ) : products.length > 0 ? (
        <ProductList>
          {products.map((product) => (            
            <CardComponent key={product._id} product={product} />
          ))}
        </ProductList>
      ) : (
        <Message>No products found</Message>
      )}
    </Container>
  );
}

export default SearchPage;
