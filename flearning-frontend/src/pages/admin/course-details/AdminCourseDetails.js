import AppCheckBox from "../../../components/AppInput/AppCheckBox";
import AppInput from "../../../components/AppInput/AppInput";
import CourseChapter from "../../../components/Course/CourseChapter";
import CourseChapterModal from "../../../components/Course/CourseChapterModal";
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import HandThumbUpIcon from '@heroicons/react/24/solid/HandThumbUpIcon';

import { Button, Card, CardContent, Container, Stack, SvgIcon } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../constants/route.constants";
import { useDispatch } from "react-redux";
import { updateCourse } from "../../../redux/courseSlice";
import { ACTION_TYPE } from "../../../constants/constants";
import { Box } from "@mui/system";
import AppTextArea from "../../../components/AppInput/AppTextArea";

const AdminCourseDetails = ({ course }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const course_id = params.get('course_id');

    console.log("course: ", course);
    React.useEffect(() => {
        if (course_id === null || course_id === '') {
            navigate(ROUTE_CONSTANTS.ERROR_PAGE);
        }
    }, [course_id, navigate]);


    const [values, setValues] = React.useState({
        course_id: course.course_id,
        course_avatar_url: course.course_avatar_url,
        course_name: course.course_name,
        description: course.description,
        duration: course.duration,
        price: course.price,
        status: course.status,
    });

    const [isAddChapter, setIsAddChapter] = React.useState(false);
    const [actionTypeChapter, setActionTypeChapter] = React.useState(ACTION_TYPE.INSERT);
    const [currentChapter, setCurrentChapter] = React.useState();

    const handleChangeValue = (key, value) => {
        setValues(prevValues => ({
            ...prevValues,
            [key]: value
        }));
    };

    const handleUpdateCourse = () => {
        dispatch(updateCourse(values));
    }


    const handleCloseAddModal = () => {
        setIsAddChapter(false);
    }
    return <Box className='ml-72 mt-4'
        component="main"
        sx={{
            flexGrow: 1,
            py: 0
        }}>
        <Container maxWidth="xl" sx={{display: "flex", flexDirection: "row"}}>
            <Card className="w-full mr-4 h-5/6" sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
                <CardContent>
                    <Stack direction={"column"} spacing={2}>
                        <div >
                            <Button variant="contained" className='bg-primary' onClick={() => setIsAddChapter(true)}>
                                <SvgIcon sx={{ mr: 1 }}>
                                    <PlusIcon />
                                </SvgIcon> Thêm mới chương
                            </Button>
                        </div>
                        <Stack direction={"column"} sx={{ overflow: "auto", height: 500 }} spacing={0}>
                            {course.chapters.map((chapter) => {
                                return <CourseChapter setCurrentChapter={setCurrentChapter} setActionTypeChapter={setActionTypeChapter} setIsAddChapter={setIsAddChapter} chapter={chapter} />
                            })}
                        </Stack>

                        <CourseChapterModal currentChapter={currentChapter} actionTypeChapter={actionTypeChapter} courseId={course_id} isOpenModal={isAddChapter} handleCloseModal={handleCloseAddModal} />
                    </Stack>
                </CardContent>
            </Card>
            <Card sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }} className=" w-[500px] h-5/6 flex w-96 flex-col rounded bg-white bg-clip-border text-gray-700 shadow-md">
                <div className=" overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img src={values.course_avatar_url} alt="img-blur-shadow" />
                </div>
                <div className="p-4">
                    <Stack spacing={2} direction={"column"}>
                        <AppInput value={values.course_name} title={"course_name"} handleChangeValue={handleChangeValue} placeholder={"Tên khóa học"} />
                        <AppInput value={values.duration} title={"duration"} handleChangeValue={handleChangeValue} placeholder={"Thời gian học (tháng)"} />
                        <AppInput value={values.price} title={"price"} handleChangeValue={handleChangeValue} placeholder={"Giá (vnd)"} />
                        <AppTextArea height={"h-150px"} value={values.description} title={"description"} handleChangeValue={handleChangeValue} placeholder={"Mô tả"} />
                        <AppCheckBox placeholder={"Trạng thái"} title={"status"} value={values.status} handleChangeValue={handleChangeValue} />
                    </Stack>
                </div>
                <div className="p-6 pt-0">
                    <Button variant="contained" onClick={handleUpdateCourse} className='bg-primary'>
                        <SvgIcon className="mr-2">
                            <HandThumbUpIcon />
                        </SvgIcon> Lưu
                    </Button>
                </div>
            </Card>
        </Container>
    </Box>
}

export default AdminCourseDetails;