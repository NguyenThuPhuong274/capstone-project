
import { useDispatch, useSelector } from "react-redux";
import CourseList from "./CourseList";
import React from "react";
import { getCourses } from "../../redux/courseSlice";

const CoursePage = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.data);

  React.useEffect(() => {
    dispatch(getCourses());
  }, [])

  return (
    <>
      <CourseList data={courses} />
    </>
  );
};

export default CoursePage;
