
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { paymentServices } from "../services";
import { toast } from 'react-toastify';

export const createPayment = createAsyncThunk("create-payment", async (payment) => {
    const response = await paymentServices.createPayment(payment);
    return response;
});
export const insertPayment = createAsyncThunk("insert-payment", async (payment) => {
    const response = await paymentServices.insertPayment(payment);
    return response;
});
export const getPayments = createAsyncThunk("get-payment", async (payment) => {
    const response = await paymentServices.getPayments(payment);
    return response;
});


const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        data: null,
        list: [],
        url: '',
        isRefresh: false,
    },
    reducers: {
        resetPayment: (state, action) => {
            state.data = null;
            state.url = '';
            state.go_to_payment = 0;
            localStorage.removeItem("goToPayment");
        },

    },
    extraReducers: (builder) => {
        builder.addCase(createPayment.fulfilled, (state, action) => {
            const { data, url } = action.payload;
            state.url = url;
            state.data = data;
        });
        builder.addCase(insertPayment.fulfilled, (state, action) => {
            state.data = null;
            state.url = '';
            state.status = 0;
            state.isRefresh = true;
        });
        builder.addCase(getPayments.fulfilled, (state, action) => {
            state.list = action.payload;
            state.isRefresh = false;
        });
    },
});

export default paymentSlice;
