import { Dialog, DialogTitle, DialogContent, Container, Button, Stack } from "@mui/material";
import AppInput from "../AppInput/AppInput";
import React from "react";

const CourseChapterModal = ({
    isOpenModal,
    handleCloseModal
}) => {


    const [values, setValues] = React.useState({
        chapterTitle: '',
        description: '',
    });

    const handleChangeValue = (key, value) => {
        setValues(prevValues => ({
            ...prevValues,
            [key]: value
        }));
    };



    return <>
        <Dialog open={isOpenModal} >
            <DialogTitle sx={{p: 2}} >THÊM MỚI CHƯƠNG</DialogTitle>
            <DialogContent sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', p: 0, pb: 2, width: 600 }} dividers>
                <Container sx={{ p: 0 }} className='mt-5' maxWidth="lg">
                    <Stack direction={"column"} spacing={2}>
                        <AppInput
                            value={values}
                            title={'chapterTitle'}
                            handleChangeValue={handleChangeValue}
                            placeholder={"Nhập tên chương"} />
                        <AppInput
                            value={values}
                            title={'description'}
                            handleChangeValue={handleChangeValue}
                            placeholder={"Nhập mô tả"} />
                    </Stack>
                    <div className='flex justify-end mt-5'>
                        <Button variant="contained" className='bg-cteal mr-3' onClick={handleCloseModal}>
                            Hủy
                        </Button>
                        <Button variant="contained" className='bg-primary'>
                            Lưu
                        </Button>
                    </div>
                </Container>
            </DialogContent>

        </Dialog>
    </>
}

export default CourseChapterModal;