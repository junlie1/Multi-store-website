import axios from "axios";

export const createOrder = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL_BACKEND}/orders`,data
      );
      return response.data;
    } catch (error) {
      console.error("Lỗi mua hàng:", error.response?.data || error.message);
      throw error.response?.data || { message: "Đã xảy ra lỗi" };
    }
  };

export const getOrder = async (buyerId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL_BACKEND}/orders/${buyerId}`);
        return response.data;
    } catch (error) {
        console.error("Lỗi mua hàng:", error.response?.data || error.message);
      throw error.response?.data || { message: "Đã xảy ra lỗi" };
    }
}