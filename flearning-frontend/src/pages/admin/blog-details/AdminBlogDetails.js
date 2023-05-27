import AppInput from "../../../components/AppInput/AppInput";
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import HandThumbUpIcon from '@heroicons/react/24/solid/HandThumbUpIcon';

import { Button, Card, CardContent, CardHeader, Container, Dialog, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, Stack, SvgIcon } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import blogSlice, { updateBlog } from "../../../redux/blogSlice";
import { ACTION_TYPE } from "../../../constants/constants";
import { Box, spacing } from "@mui/system";
import AppTextArea from "../../../components/AppInput/AppTextArea";
import Question from "../../../components/Question";
import AppSelect from "../../../components/AppInput/AppSelect";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import { insertQuestion, updateQuestion } from "../../../redux/questionSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../constants/route.constants";
import AppInputNumber from "../../../components/AppInput/AppInputNumber";
import AppCheckBox from "../../../components/AppInput/AppCheckBox";
import FileUploader from "../../../components/FileUploader";

const AdminBlogDetails = ({ blog, categories }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [disableSubmit, setDisableSubmit] = React.useState(false);
    const {setIsRefreshSpecific } = blogSlice.actions;
    const [isViewImage, setIsViewImage] = React.useState(true);
    const [currentFile, setCurrentFile] = React.useState(null);
    const [previewUrl, setPreviewUrl] = React.useState('');
    const [openQuestionModal, setOpenQuestionModal] = React.useState(false);
    const [actionType, setActionType] = React.useState(ACTION_TYPE.INSERT);
    const [currentQuestion, setCurrentQuestion] = React.useState();
    const [question, setQuestion] = React.useState({
        blog_description: '',
        answer_1: '',
        answer_2: '',
        answer_3: '',
        answer_4: '',
        correct_answer: 0,
        blog_id: blog?.blog_id
    });


    const [values, setValues] = React.useState({
        blog_avatar_url: blog?.blog_avatar_url,
        blog_id: blog?.blog_id,
        blog_name: blog?.blog_name,
        blog_description: blog?.blog_description,
        blog_category_id: blog?.blog_category_id,
        status: blog?.status,
    });

    React.useEffect(() => {
        setValues({
            blog_avatar_url: blog?.blog_avatar_url,
            blog_id: blog?.blog_id,
            blog_name: blog?.blog_name,
            blog_description: blog?.blog_description,
            blog_category_id: blog?.blog_category_id,
            status: blog?.status,

        });
    }, [blog])



    const handleChangeValue = (key, value) => {
        setValues(prevValues => ({
            ...prevValues,
            [key]: value
        }));
    };

    const handleChangeQuestionValue = (key, value) => {
        setQuestion(prevValues => ({
            ...prevValues,
            [key]: value
        }));
    }

    const handleUpdateBlog = () => {
        dispatch(updateBlog(values));
    }

    const handleSubmitQuestion = () => {

        if (question.blog_description.trim() === '') {
            toast.warning("Chưa nhập mô tả câu hỏi");
            return;
        }

        if (question.answer_1.trim() === ''
            || question.answer_2.trim() === ''
            || question.answer_3.trim() === ''
            || question.answer_4.trim() === ''
        ) {
            toast.warning("Chưa nhập đủ câu trả lời");
            return;
        }

        if (question.correct_answer === 0) {
            toast.warning("Chưa chọn trả lời đúng");
            return;
        }


        if (actionType === ACTION_TYPE.UPDATE) {
            dispatch(updateQuestion(question));
        } else {
            dispatch(insertQuestion(question));
        }


        dispatch(setIsRefreshSpecific(true));

        setOpenQuestionModal(false);
    }

    React.useEffect(() => {
        if (currentFile !== null) {
            setValues(prevValues => ({
                ...prevValues,
                blog_avatar_url: currentFile.url
            }));
            setDisableSubmit(false);
        }
    }, [currentFile])

    React.useEffect(() => {

        if (openQuestionModal === false) {
            setQuestion({
                blog_description: '',
                answer_1: '',
                answer_2: '',
                answer_3: '',
                answer_4: '',
                correct_answer: 0,
                blog_id: blog?.blog_id
            });

            setCurrentQuestion(null);
        }
    }, [openQuestionModal])



    const handleReturnToList = () => {
        navigate(ROUTE_CONSTANTS.ADMIN_BLOG_PAGE);
    }

    React.useEffect(() => {
        if (currentQuestion !== null && currentQuestion !== undefined) {
            setOpenQuestionModal(true);
            setActionType(ACTION_TYPE.UPDATE);
            setQuestion({
                blog_description: currentQuestion?.blog_description,
                answer_1: currentQuestion?.answer_1,
                answer_2: currentQuestion?.answer_2,
                answer_3: currentQuestion?.answer_3,
                answer_4: currentQuestion?.answer_4,
                correct_answer: currentQuestion?.correct_answer,
                blog_id: blog?.blog_id,
                question_id: currentQuestion.question_id,
            })
        }
    }, [currentQuestion]);

    return (
        <>
            <Box className='ml-72 mt-4'
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 0
                }}>
                <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "row", height: 620 }}>
                    <Card className="w-full h-full mr-4" sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
                        <CardContent>
                            <Stack direction={"column"} spacing={2}>
                                <div >
                                    <Button variant="contained" className='bg-primary' onClick={() => {
                                        setOpenQuestionModal(true);
                                        setActionType(ACTION_TYPE.INSERT);
                                    }} >
                                        <SvgIcon sx={{ mr: 1 }}>
                                            <PlusIcon />
                                        </SvgIcon> Thêm mới mục 
                                    </Button>
                                </div>
                                <Stack direction={"column"} sx={{ overflow: "auto", height: 600 }} spacing={0}>
                                    {blog?.blog_details?.map((question, key) => {
                                        return <></>;
                                    })}
                                </Stack>

                            </Stack>
                        </CardContent>
                    </Card>
                    <Card sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }} className=" w-[500px] h-full flex flex-col rounded bg-white bg-clip-border text-gray-700 shadow-md">
                        <div
                            onMouseLeave={() => setIsViewImage(true)}
                            onMouseEnter={() => setIsViewImage(false)}
                            className="h-full overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                            <img
                                className={`${isViewImage === false ? 'hidden' : 'block'}`}
                                src={previewUrl !== '' && previewUrl !== undefined ? previewUrl : values.blog_avatar_url}
                                alt="img-blur-shadow"

                            />
                            <div className={`${isViewImage === true ? 'hidden' : 'block'} pt-6` }>
                                <FileUploader
                                    id={"update-blog-image"}
                                    setDisableSubmit={setDisableSubmit}
                                    setCurrentFile={setCurrentFile}
                                    firebaseFolderName={"course/images"} setPreviewUrl={setPreviewUrl} />
                            </div>
                        </div>
                        <div className="p-4 h-full">
                            <Stack spacing={2} direction={"column"} className="h-full">
                                <AppInput value={values.blog_name} title={"blog_name"} handleChangeValue={handleChangeValue} placeholder={"Tiêu đề"} />
                                <AppSelect value={values.blog_category_id} data={categories} title={"blog_category_id"} display={"name"} placeholder={"Chọn loại tin tức"} handleChangeValue={handleChangeValue} />
                                <AppCheckBox value={values?.status} title={"status"} handleChangeValue={handleChangeValue} placeholder={"Công khai"} />
                                <AppTextArea height={"h-[120px]"} value={values.blog_description} title={"blog_description"} handleChangeValue={handleChangeValue} placeholder={"Mô tả"} />
                            </Stack>
                        </div>
                        <Stack className="m-4" direction={"row"} spacing={2} >
                            <Button disabled={disableSubmit} onClick={handleReturnToList} color='success' variant="contained" className='w-[150px]'>
                                <SvgIcon className='mr-2' >
                                    <ArrowLeftIcon />
                                </SvgIcon> Trở lại
                            </Button>
                            <Button disabled={disableSubmit} variant="contained" onClick={handleUpdateBlog} className='bg-primary w-[150px]'>
                                <SvgIcon className="mr-2">
                                    <HandThumbUpIcon />
                                </SvgIcon> Lưu
                            </Button>
                        </Stack>
                    </Card>
                </Container>
            </Box>
            <Dialog open={openQuestionModal} fullWidth maxWidth="md" >
                <DialogTitle sx={{ textTransform: "uppercase" }}>Thêm mới câu hỏi</DialogTitle>
                <DialogContent sx={{ p: 4 }}>
                    <Stack sx={{ mt: 3 }} direction={"column"} spacing={4}>

                        <AppTextArea height={"h-[150px]"} value={question.blog_description} title={"blog_description"} handleChangeValue={handleChangeQuestionValue} placeholder={"Mô tả câu hỏi"} />
                        <Stack direction={"column"} spacing={2}>
                            <Stack direction={"row"} spacing={2}>
                                <AppInput
                                    value={question.answer_1}
                                    title={'answer_1'}
                                    handleChangeValue={handleChangeQuestionValue}
                                    placeholder={"Nhập câu trả lời 1"} />
                                <AppInput
                                    value={question.answer_2}
                                    title={'answer_2'}
                                    handleChangeValue={handleChangeQuestionValue}
                                    placeholder={"Nhập câu trả lời 2"} />
                            </Stack>
                            <Stack direction={"row"} spacing={2}>
                                <AppInput
                                    value={question.answer_3}
                                    title={'answer_3'}
                                    handleChangeValue={handleChangeQuestionValue}
                                    placeholder={"Nhập câu trả lời 3"} />
                                <AppInput
                                    value={question.answer_4}
                                    title={'answer_4'}
                                    handleChangeValue={handleChangeQuestionValue}
                                    placeholder={"Nhập câu trả lời 4"} />
                            </Stack>
                        </Stack>
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Chọn câu trả lời đúng</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={question.correct_answer}
                                    label="Chọn câu trả lời đúng"
                                    onChange={(e) => handleChangeQuestionValue("correct_answer", e.target.value)}
                                >
                                    <MenuItem value={1}>Câu trả lời 1</MenuItem>
                                    <MenuItem value={2}>Câu trả lời 2</MenuItem>
                                    <MenuItem value={3}>Câu trả lời 3</MenuItem>
                                    <MenuItem value={3}>Câu trả lời 4</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <Stack direction={"row"} spacing={2} className="flex flex-row justify-end w-full" >
                            <Button disabled={disableSubmit} color='error' variant="contained" className=' w-[150px]' onClick={() => setOpenQuestionModal(false)}>

                                <SvgIcon className='mr-2'>
                                    <XMarkIcon />
                                </SvgIcon> Hủy
                            </Button>
                            <Button disabled={disableSubmit} onClick={handleSubmitQuestion} color='primary' variant="contained" className='w-[150px] ml-3'>
                                <SvgIcon className='mr-2'>
                                    <HandThumbUpIcon />
                                </SvgIcon> Lưu
                            </Button>
                        </Stack>
                    </Stack>
                </DialogContent>
            </Dialog>
        </>
    )


}

export default AdminBlogDetails;