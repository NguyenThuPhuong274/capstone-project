
import React from "react";
import CourseCarousel from "./CourseCarousel";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../redux/courseSlice";

const Course = () => {

  const dispatch = useDispatch();

  const courses = useSelector((state) => state.course.data);

  React.useEffect(() => {
    dispatch(getCourses());
  }, [])

  return (
    <CourseCarousel data={ courses} />
  )

};

export default Course;
