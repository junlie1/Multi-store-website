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
