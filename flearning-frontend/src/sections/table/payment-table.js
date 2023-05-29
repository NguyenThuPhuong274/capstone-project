import { format } from 'date-fns';
import React from 'react';
import {
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Chip,
  Typography,
  SvgIcon
} from '@mui/material';
import EyeIcon from '@heroicons/react/24/solid/EyeIcon';

import { Scrollbar } from '../../components/ScrollBar';

export const PaymentTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange,
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    user,
    courses,
    setIsOpenModal,
    setCurrentPayment
  } = props;

  return (<>
    <Card sx={{ height: 450, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}   >
      <Scrollbar>
        <Box sx={{ minWidth: 800, maxHeight: 450 }}>
          <Table stickyHeader >
            <TableHead>
              <TableRow>

                <TableCell>
                  Khóa học
                </TableCell>
                <TableCell>
                  Giá
                </TableCell>
                <TableCell>
                  Ngày mua
                </TableCell>
                <TableCell>
                  Trạng thái
                </TableCell>
                <TableCell>
                  Hành động
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((payment) => {


                return (
                  <TableRow
                    hover
                    key={payment?.payment_id}
                  >

                    <TableCell>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                      >

                        <Typography sx={{ width: 150 }} variant="subtitle2">
                          {courses?.find((c) => c.course_id === payment.course_id).course_name}
                        </Typography>
                      </Stack>
                    </TableCell>




                    <TableCell>
                      {new Intl.NumberFormat('vi-VN').format(Number(payment?.amount)) + '₫'}
                    </TableCell>
                    <TableCell>
                      {new Date(payment?.created_date).toLocaleDateString()}
                    </TableCell>
                    <TableCell sx={{ width: 150 }}>
                      <Chip color='success' label={"Đã thanh toán"} />
                    </TableCell>
                    <TableCell sx={{ width: 250 }}>
                      <Button color='primary' variant='contained' onClick={() => {
                        setIsOpenModal(true);
                        setCurrentPayment(payment);
                      }}>
                        <SvgIcon sx={{ mr: 1 }}>
                          <EyeIcon />
                        </SvgIcon> Xem Thông Tin
                      </Button>
                    </TableCell>

                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>

    </Card>

    <Card sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
      <TablePagination
        component="div"
        count={count}
        onPageChange={(event, number) => onPageChange(number)}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        labelDisplayedRows={({ from, to, count }) => `Hiện thị từ ${from}-${to} trong tổng số ${count} bản ghi`}
        boundaryCount={4}
        labelRowsPerPage={"Số bản ghi"}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  </>
  );
};

