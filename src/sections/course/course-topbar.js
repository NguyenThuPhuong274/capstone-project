import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Button,Stack, Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';

export const CourseTopBar = ({ setIsOpenModal }) => (
  <Card sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
    <Stack direction="row" justifyContent="space-between">
      <OutlinedInput
        defaultValue=""
        fullWidth
        placeholder="Tìm kiếm khóa học"
        startAdornment={(
          <InputAdornment position="start">
            <SvgIcon
              color="action"
              fontSize="small"
            >
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        )}

        sx={{ maxWidth: 300 }}
      />
      <div>
        <Button
          onClick={() => setIsOpenModal(true)}
          className='bg-primary'
          startIcon={(
            <SvgIcon fontSize="small">
              <PlusIcon />
            </SvgIcon>
          )}
          variant="contained"
        >
          Thêm mới khóa học
        </Button>
      </div>
    </Stack>

  </Card>
);
