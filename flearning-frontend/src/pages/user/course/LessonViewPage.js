import { useLocation, useNavigate } from "react-router-dom";
import LessonDetails from "./LessonDetails";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getCourseById } from "../../../redux/courseSlice";
import { getLessonsDone } from "../../../redux/lessonSlice";
import { getTestsDone } from "../../../redux/testSlice";
import SmoothScrollUp from "../../../components/Common/SmoothScrollUp";

const LessonViewPage = () => {
    const user = useSelector((state) => state.authen.user);
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const course_id = params.get('course_id');
    const dispatch = useDispatch();

    const course = useSelector((state) => state.course.specific);
    const lessonsDone = useSelector((state) => state.lesson.lessons_done);
    const testsDone = useSelector((state) => state.test.tests_done);

    const isRefresh = useSelector((state) => state.course.isRefreshSpecific);

    React.useEffect(() => {
        dispatch(getCourseById({ course_id: course_id }));
        dispatch(getLessonsDone({ email: user?.email, course_id: course_id }));
        dispatch(getTestsDone({ email: user?.email, course_id: course_id }));
    }, [isRefresh])


    return (
        <>
            <SmoothScrollUp />
            <LessonDetails course={course} lessonsDone={lessonsDone} testsDone={testsDone} user={user} />
        </>
    )
};

export default LessonViewPage;