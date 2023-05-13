import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import {
  Box, Button, Container, Stack, Dialog, DialogTitle, Grid
  , DialogContent
} from '@mui/material';
import { useSelection } from '../../../hooks/use-selection';
import { applyPagination } from '../../../utils/apply-pagination';
import { CoursesTable } from '../../../sections/course/courses-table';
import { CourseTopBar } from '../../../sections/course/course-topbar';
import { CourseAvatar } from "@/components/Course/CourseAvatar";
import { CourseProfileDetails } from "@/components/Course/CourseProfileDetails";


const now = new Date();

const data = [
  {
    id: '5e887ac47eed253091be10cb',
    title: 'Khóa học N1',
    description: 'Mô tả khóa học ',
    lessons: 12,
    level: 1,
    status: true,
    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    title: 'Khóa học N2',
    description: 'Mô tả khóa học ',
    lessons: 12,
    level: 2,
    duration: 6,
    status: true,

    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    title: 'Khóa học N3',
    description: 'Mô tả khóa học ',
    lessons: 12,
    level: 3,
    duration: 6, status: false,

    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e86809283e28b96d2d38537',
    title: 'Khóa học N4',
    description: 'Mô tả khóa học ',
    lessons: 12,
    level: 4,
    duration: 6, status: true,

    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    title: 'Khóa học N4 nâng cao',
    description: 'Mô tả khóa học ',
    lessons: 12,
    level: 5,
    duration: 6, status: true,

    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    title: 'Khóa học N2 nâng cao',
    description: 'Mô tả khóa học ',
    lessons: 12,
    duration: 6, status: true,

    level: 2,
    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    title: 'Khóa học N1 nâng cao',
    description: 'Mô tả khóa học ',
    lessons: 12,
    duration: 6, status: true,

    level: 2,
    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',
    title: 'Khóa học N6 nâng cao',
    description: 'Mô tả khóa học ',
    lessons: 12,
    level: 3,
    duration: 6, status: true,

    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e8877da9a65442b11551975',
    title: 'Khóa học N6',
    description: 'Mô tả khóa học ',
    lessons: 12,
    level: 4,

    duration: 6, status: true,

    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    title: 'Khóa học N3 nâng cao',
    description: 'Mô tả khóa học ',
    lessons: 12,
    duration: 6, status: true,

    level: 4,
    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  }
];

const useCourses = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCourseIds = (courses) => {
  return useMemo(
    () => {
      return courses.map((courses) => courses.id);
    },
    [courses]
  );
};

const AdminCoursesPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const courses = useCourses(page, rowsPerPage);
  const coursesIds = useCourseIds(courses);
  const coursesSelection = useSelection(coursesIds);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  }

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  return (
    <>
      <Head>
        <title>
          Courses
        </title>
      </Head>
      <Box
        className='ml-72'
        component="main"
        sx={{
          flexGrow: 1,
          py: 0
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              className='w-full'
              direction="row"
              justifyContent="space-between"
              spacing={1}
            >



            </Stack>
            <CourseTopBar setIsOpenModal={setIsOpenModal} />

            <CoursesTable
              count={data.length}
              items={courses}
              onDeselectAll={coursesSelection.handleDeselectAll}
              onDeselectOne={coursesSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={coursesSelection.handleSelectAll}
              onSelectOne={coursesSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}

              selected={coursesSelection.selected}
            />
          </Stack>
        </Container>
      </Box>


      <Dialog maxWidth open={isOpenModal} onClose={handleCloseModal}>
        <DialogTitle >THÊM MỚI KHÓA HỌC</DialogTitle>
        <DialogContent sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }} dividers>
          <Container className='mt-10' maxWidth="lg" sx={{ height: 500 }}>
            <Stack spacing={3}>

              <div>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    xs={12}
                    md={6}
                    lg={4}
                  >
                    <CourseAvatar />
                  </Grid>
                  <Grid
                    xs={12}
                    md={6}
                    lg={8}
                  >
                    <CourseProfileDetails />
                  </Grid>
                </Grid>
              </div>
              <div className='w-full flex justify-end'>
                <Button variant="contained" className='bg-cteal mr-3' onClick={handleCloseModal}>
                  Hủy
                </Button>
                <Button variant="contained" className='bg-primary'>
                  Lưu
                </Button>
              </div>
            </Stack>
          </Container>
        </DialogContent>

      </Dialog>
    </>
  );
};


export default AdminCoursesPage;
