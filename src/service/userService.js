import axios from "axios";

// Đăng ký tài khoản
export const signup = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL_BACKEND}/signup`,data
    );
    console.log(response.data);
    return response.data; // Trả về dữ liệu user sau khi đăng ký thành công
  } catch (error) {
    console.error("Lỗi đăng ký:", error.response?.data || error.message);
    throw error.response?.data || { message: "Đã xảy ra lỗi" };
  }
};

// Đăng nhập tài khoản
export const signin = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL_BACKEND}/signin`,data
    );    
    return response.data; // Trả về thông tin user
  } catch (error) {
    console.error("Lỗi đăng nhập:", error.response?.data || error.message);
    throw error.response?.data || { message: "Đã xảy ra lỗi" };
  }
};

export const getDetailsUser = async (userId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL_BACKEND}/get-user/${userId}`
      );      
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error fetching user details');
    }
  };

  export const logoutUser = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL_BACKEND}/user/log-out`)
    return res.data;
} 

export const updateUser = async (id,data) => {
  const res = await axios.patch(`${process.env.REACT_APP_API_URL_BACKEND}/users-web/${id}`, data);
  return res.data;
} 