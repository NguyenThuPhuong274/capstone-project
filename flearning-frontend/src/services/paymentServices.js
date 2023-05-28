import { API } from "../constants";
import axios from "axios";

 const paymentServices = {
  createPayment: async (payment) => {
    const response = await axios.post(API.MANAGE_PAYMENT + "/create", payment);
    return response.data;
  },
  insertPayment: async (payment) => {
    const response = await axios.post(API.MANAGE_PAYMENT + "/insert", payment);
    return response.data;
  },
  getPayments: async (payment) => {
    const response = await axios.post(API.MANAGE_PAYMENT + "/get", payment);
    return response.data;
  },
 
};

export default paymentServices;
