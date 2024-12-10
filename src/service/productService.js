import axios from "axios";

// API gọi dữ liệu sản phẩm phổ biến
export const getPopularProducts = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL_BACKEND}/popular-product`);
    return response.data;
  } catch (error) {
    console.error("Error fetching popular products:", error);
    throw error;
  }
};

// API gọi dữ liệu sản phẩm nổi bật
export const getTopRatedProducts = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL_BACKEND}/top-rated-products`
    ); // Gọi trực tiếp axios
    // console.log('response cua top-rated-products',response.data);
    
    return response.data;
  } catch (error) {
    console.error("Error fetching top-rated products:", error);
    throw error;
  }
};

export const getDetailsProduct = async (id) => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL_BACKEND}/product/${id}`);    
  return res.data;
}

export const getProductsByCategory = async (category, page = 1, limit = 25) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL_BACKEND}/products-by-category/web/${category}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};
// 
export const searchProducts = async (searchTerm) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL_BACKEND}/search?term=${searchTerm}`
    );
    return response.data.products; // Trả về danh sách sản phẩm
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
// 
