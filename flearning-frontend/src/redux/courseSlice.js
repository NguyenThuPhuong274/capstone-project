
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { courseServices } from "../services";
import { toast } from 'react-toastify';

export const insertCourse = createAsyncThunk("insert-course", async (course) => {
  const response = await courseServices.insertCourse(course);
  return response;
});
export const updateCourse = createAsyncThunk("update-course", async (course) => {
  const response = await courseServices.updateCourse(course);
  return response;
});
export const getCourses = createAsyncThunk("get-courses", async () => {
  const response = await courseServices.getCourses();
  return response;
});




const courseSlice = createSlice({
  name: "course",
  initialState: {

  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(insertCourse.fulfilled, (state, action) => {
      toast.success("Thêm khóa học thành công");
    });
    builder.addCase(updateCourse.fulfilled, (state, action) => {
      toast.success("Cập nhật khóa học thành công");
    });

    builder.addCase(getCourses.fulfilled, (state, action) => {
      toast.success("Cập nhật khóa học thành công");
    });


  },
});

export default courseSlice;
