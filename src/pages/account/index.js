import { useState } from 'react';
import {
  Box, Button, Container, Stack, Dialog, DialogTitle, Grid
  , DialogContent, Card, CardContent, Divider, SvgIcon, CardHeader, Avatar
} from '@mui/material';
import { CourseProfileDetails } from "../../components/Course/CourseProfileDetails";
import React from "react";
import FileUploader from '../../components/FileUploader';
import CourseImageDefault from "../../assets/images/course/course-default.png";
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon';
import HandThumbUpIcon from '@heroicons/react/24/solid/HandThumbUpIcon';
import Breadcrumb from '../../components/Common/Breadcrumb';
import AppInput from '../../components/AppInput/AppInput';
import AppCheckBox from '../../components/AppInput/AppCheckBox';
const AccountPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [currentFile, setCurrentFile] = React.useState(null);
  const [previewUrl, setPreviewUrl] = React.useState(null);
  const [values, setValues] = useState({
    title: '',
    description: '',
    duration: 0,
    price: 0,
    status: false,
  });

  const handleCloseModal = () => {
    setIsOpenModal(false);
  }



  // React.useEffect(() => {
  //   alert(currentFile?.url);
  // }, [currentFile]);


  const handleChangeValue = (key, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [key]: value
    }));
  };

  return <>
    <Breadcrumb
      pageName="Thông tin cá nhân"
      description="Cập nhật thông tin cá nhân của bạn"
    />
    <Container className='mt-12 mb-12' sx={{ height: 400 }}>
      <Stack spacing={3}>

        <div >
          <Grid
          style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}
            container
            spacing={3}
          >
            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <Card sx={{ pt: 2, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}  className=" w-96 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className='w-full flex justify-center' >
                  <Avatar src={previewUrl == null ? CourseImageDefault : previewUrl}
                    sx={{ width: 200, height: 200 }}
                  />
                </div>
                <Divider className='h-4' />
                <FileUploader

                  setCurrentFile={setCurrentFile}
                  firebaseFolderName={"course/images"} setPreviewUrl={setPreviewUrl} />
              </Card>

            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={8}
            >
              <Card sx={{ ml: 3, pt: 2, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }} >

                <CardContent className='h-[350px]' sx={{ pb: 5 }} >
                  <CardHeader title="Thông tin cá nhân" />
                  <Stack direction={"row"} spacing={2}>
                    <AppInput height={""} value={values} title={"name"} handleChangeValue={handleChangeValue} placeholder={"Tên đầy đủ"} />
                    <AppInput height={""} value={values} title={"phone"} handleChangeValue={handleChangeValue} placeholder={"Số điện thoại"} />
                    <div className=" pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      "Email"
                    </div>
                  </Stack>
                </CardContent>
                <Divider />
              </Card>

            </Grid>
          </Grid>
        </div>
        <div className='w-full flex justify-end'>
          <Button color='primary' variant="contained" className='w-[150px] ml-3'>
            <SvgIcon className='mr-2'>
              <HandThumbUpIcon />
            </SvgIcon> Lưu
          </Button>
        </div>
      </Stack>
    </Container>
  </>
};



export default AccountPage;
