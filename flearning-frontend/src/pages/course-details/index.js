import { useLocation, useNavigate } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getCourseById, getCourses } from "../../redux/courseSlice";

const CourseDetailPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const course_id = params.get('course_id');
    const dispatch = useDispatch();

    const course = useSelector((state) => state.course.specific);
   
    React.useEffect(() => {
        dispatch(getCourseById({ course_id: course_id }));
    }, [])

    return <>
        <CourseDetails course={course} />
    </>
}

export default CourseDetailPage;