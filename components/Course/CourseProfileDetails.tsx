import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';
import AppInput from '../AppInput/AppInput';
import AppSelect from '../AppInput/AppSelect';
import AppCheckBox from '../AppInput/AppCheckBox';
import AppTextArea from '../AppInput/AppTextArea';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  },
  {
    value: 'los-angeles',
    label: 'Los Angeles'
  }
];

export const CourseProfileDetails = () => {
  const [values, setValues] = useState({
    title: '',
    level: '',
    description: '',
    duration: 0,
    price: 0,
    status: false,
  });

  const handleChangeValue = (key, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [key]: value
    }));
  };



  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <Card sx={{ ml: 2, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }} >
      
      <CardContent sx={{ pb: 5}} >
        <CardHeader title="Thông tin khóa học" />
      <Grid
            container
            spacing={3}
          >
            <Grid
            
              xs={12}
              md={6}
            >
             <AppInput value={values} title={"title"} handleChangeValue={handleChangeValue} placeholder={"Tên khóa học"} />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
            <AppSelect data={[1, 2, 3, 4, 5]} placeholder="Chọn cấp độ" />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
             <AppInput value={values} title={"duration"} handleChangeValue={handleChangeValue}  placeholder={"Thời gian học (tháng)"} />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <AppInput value={values} title={"price"} handleChangeValue={handleChangeValue}  placeholder={"Giá (vnd)"} />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <AppInput value={values} title={"description"} handleChangeValue={handleChangeValue}  placeholder={"Mô tả khóa học"} />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <AppCheckBox />
            </Grid>
           
          </Grid>
      </CardContent>
      <Divider />
    </Card>
     
  );
};
