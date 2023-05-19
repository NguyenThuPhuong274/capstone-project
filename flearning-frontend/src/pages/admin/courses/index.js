import { useState } from 'react';
import {
  Box, Button, Container, Stack, Dialog, DialogTitle, Grid
  , DialogContent, Card, CardContent, Divider, SvgIcon
} from '@mui/material';
import { CoursesTable } from '../../../sections/course/courses-table';
import { CourseTopBar } from '../../../sections/course/course-topbar';
import { CourseProfileDetails } from "../../../components/Course/CourseProfileDetails";
import Pagination from "../../../components/Pagination";
import React from "react";
import FileUploader from '../../../components/FileUploader';
import CourseImageDefault from "../../../assets/images/course/course-default.png";
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon';
import HandThumbUpIcon from '@heroicons/react/24/solid/HandThumbUpIcon';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from '../../../redux/userSlice';
import { getCourses, insertCourse } from '../../../redux/courseSlice';
import AdminCourses from './AdminCourses';

const now = new Date();

const AdminCoursesPage = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.data);
  const isRefreshCourse = useSelector(
    (state) => state.course.isRefresh
  );

  const { setCurrentPage } = userSlice.actions;

  React.useEffect(() => {
    dispatch(getCourses());
  }, [isRefreshCourse])

  React.useEffect(() => {
    dispatch(setCurrentPage("Quản lý khóa học"));
  }, [])

  return (
    <>

     <AdminCourses courses={courses} />
    </>
  );
};


export default AdminCoursesPage;
