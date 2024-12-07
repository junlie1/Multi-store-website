import axios from "axios";

export const getAllCategory = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL_BACKEND}/categories`
      );
      
      return response.data;
    } catch (error) {
      console.error("Error fetching categories", error);
      throw error;
    }
  };