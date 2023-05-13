import { format } from 'date-fns';
import PencilIcon from '@heroicons/react/24/solid/PencilIcon';

import {
  Avatar,
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
  Paper,
  Button,
  SvgIcon,
Chip,
  Typography
} from '@mui/material';
import { Scrollbar } from '@/components/scrollbar';
import { getInitials } from '@/utils/get-initials';

export const CoursesTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);

  return (<>
    <Card sx={{ maxHeight: 450, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}   >
      <Scrollbar>
        <Box sx={{ minWidth: 800, maxHeight: 450 }}>
          <Table stickyHeader >
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  Tên
                </TableCell>
                <TableCell>
                  Cấp độ
                </TableCell>
                <TableCell>
                  Thời gian
                </TableCell>
                <TableCell>
                  Giá 
                </TableCell>
                <TableCell>
                  Số bài học
                </TableCell>
                <TableCell>
                  Ngày tạo
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
              {items.map((course) => {
                const isSelected = selected.includes(course.id);
                const createdAt = format(course.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={course.id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(course.id);
                          } else {
                            onDeselectOne?.(course.id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                      >
                        <Avatar src={course.avatar}>
                          {getInitials(course.title)}
                        </Avatar>
                        <Typography variant="subtitle2">
                          {course.title}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                    <Chip color={'primary'} label={"N" + course.level} variant="outlined" />
                      
                    </TableCell>
                    <TableCell>
                      {course.duration} tháng
                    </TableCell>
                    <TableCell>
                      {course.price.toLocaleString('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                    </TableCell>
                    <TableCell>
                      {course.lessons}
                    </TableCell>
                    <TableCell>
                      {createdAt}
                    </TableCell>
                    <TableCell>
                     <Chip color={course.status ? 'secondary' : 'error'} label={course.status ? 'Công khai' : 'Khóa'} />
                    </TableCell>
                    <TableCell>
                <Button variant="contained" className='bg-primary' size='small'>
                <SvgIcon>
                  <PencilIcon />
                </SvgIcon> 
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
    
    <Card sx={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
    <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        labelDisplayedRows={({from, to, count}) => `Hiện thị từ ${from}-${to} trong tổng số ${count} bản ghi`}
        boundaryCount={4}
       labelRowsPerPage={"Số bản ghi"}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
    </>
  );
};


