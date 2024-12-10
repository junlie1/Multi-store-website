import axios from "axios";

export const getAllBanner = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL_BACKEND}/banner`);
      return response.data;
    } catch (error) {
      console.error("Error fetching banner", error);
      throw error;
    }
  };