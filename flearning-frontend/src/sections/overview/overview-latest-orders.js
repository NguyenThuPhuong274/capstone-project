import { format } from 'date-fns';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Chip,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from '../../components/ScrollBar';
import EyeIcon from '@heroicons/react/24/solid/EyeIcon';
import { useNavigate } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../../constants/route.constants';

export const OverviewLatestOrders = (props) => {
  const navigate = useNavigate();
  const { payments = [], sx } = props;
  const getInvoiceId = (id) => {
    const idStr = new String(id);

    let str = "#00000";
    const result = str.slice(0, str.length - idStr.length);
    console.log(result);
    return result + id;

  }
  return (
    <>
      <Card sx={sx}>
        <CardHeader title="10 Giao Dịch Mới Nhất" />
        <Box sx={{ minWidth: 800, maxHeight: 450, overflow: "auto" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>
                  Hóa đơn
                </TableCell>
                <TableCell>
                  Người mua
                </TableCell>
                <TableCell sortDirection="desc">
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
            <TableBody  >
              {payments.map((payment) => {

                return (
                  <TableRow
                    hover
                    key={payment.payment_id}
                  >

                    <TableCell>
                      {getInvoiceId(payment.payment_id)}
                    </TableCell>
                    <TableCell>
                      {payment.name}
                    </TableCell>
                    <TableCell sx={{ width: 200 }}>
                      {new Date(payment.created_date).toLocaleDateString()}
                    </TableCell>
                    <TableCell sx={{ width: 200 }}>
                      <Chip color='success' variant='conatined' label="Đã thanh toán" />
                    </TableCell>
                    <TableCell sx={{ width: 150 }} >
                      <Button variant='contained' color='primary' size='small' >
                        <SvgIcon>
                          <EyeIcon />
                        </SvgIcon>
                      </Button>
                    </TableCell>

                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button
            color="inherit"
            endIcon={(
              <SvgIcon fontSize="small">
                <ArrowRightIcon />
              </SvgIcon>
            )}
            size="small"
            variant="text"
            onClick={() => navigate(ROUTE_CONSTANTS.ADMIN_INVOICE_PAGE)}
          >
            Xem tất cả
          </Button>
        </CardActions>
      </Card>

    </>
  );
};
