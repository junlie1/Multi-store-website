import axios from 'axios';

export const createPayment = async (data) => {
    try {
        console.log('Payment service sending data:', data);
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL_BACKEND}/payment/create_payment_url`, 
            data
        );
        return response;
    } catch (error) {
        console.error('Payment service error:', error);
        throw error;
    }
}; 