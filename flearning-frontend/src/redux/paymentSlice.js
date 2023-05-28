
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
        status: false
    },
    reducers: {
        resetPayment: (state, action) => {
            state.data = null;
            state.url = '';
            state.status = false;
        }
    },
    extraReducers: (builder) => {

        builder.addCase(createPayment.fulfilled, (state, action) => {
            const { data, url } = action.payload;
            state.url = url;
            state.data = data;
            // toast.success("Tạo thanh toán thành công");
        });
        builder.addCase(insertPayment.fulfilled, (state, action) => {
            state.data = null;
            state.url = '';
            state.status = true;
        });

        builder.addCase(getPayments.fulfilled, (state, action) => {
            state.list = action.payload;
        });

    },
});

export default paymentSlice;
