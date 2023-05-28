import React from 'react';
import axios from 'axios';
import { API } from '../../constants/api.constants';
const VNPayComponent = () => {
  const handlePayment = async () => {
    try {
      const response = await axios.post(API.MANAGE_PAYMENT + "/create", {
        amount: 100000, // The payment amount in your local currency
        bankCode: '', // Optional bank code
        orderDescription: 'Payment for goods', // The order description
        orderType: '', // Optional order type
        language: 'vn', // Language preference
        ipAddr: window.location.hostname,
      });

      // Redirect the user to the VN Pay payment gateway
      console.log(response);
      window.open(response.data.url, "_blank");
    } catch (error) {
      console.error('VN Pay payment error:', error);
      // Handle the payment error
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay with VN Pay</button>
    </div>
  );
};

export default VNPayComponent;
