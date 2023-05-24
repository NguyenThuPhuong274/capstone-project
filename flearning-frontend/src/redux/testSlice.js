
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { testServices } from "../services";
import { toast } from 'react-toastify';

export const insertTest = createAsyncThunk("insert-test", async (test) => {
  const response = await testServices.insertTest(test);
  return response;
});

export const updateTest = createAsyncThunk("update-test", async (test) => {
  const response = await testServices.updateTest(test);
  return response;
});
export const deleteTest = createAsyncThunk("delete-test", async (test) => {
  const response = await testServices.deleteTest(test);
  return response;
});

export const getTests = createAsyncThunk("get-testes", async () => {
  const response = await testServices.getTests();
  return response;
});




const testSlice = createSlice({
  name: "test",
  initialState: {
    data: [],
    isRefresh: false,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(updateTest.fulfilled, (state, action) => {
      toast.success("Cập nhật bài kiểm tra thành công");
      state.isRefresh = true;
    });
    builder.addCase(insertTest.fulfilled, (state, action) => {
      toast.success("Thêm bài kiểm tra thành công");
      state.isRefresh = true;
      });
    builder.addCase(deleteTest.fulfilled, (state, action) => {
      toast.success("Xóa bài kiểm tra thành công");
      state.isRefresh = true;
      });
    builder.addCase(getTests.fulfilled, (state, action) => {
      state.data = action.payload;
      // console.log("get tests from db: ",  action.payload);
      // toast.success("Lấy dữ liệu thành công");
      state.isRefresh = false;
    });
  },
});

export default testSlice;
