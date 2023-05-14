import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
  } from '@mui/material';
  
  const user = {
    avatar: '/assets/avatars/avatar-anika-visser.png',
  };
  
  export const CourseAvatar = () => (
    <Card sx={{height: 350, mr:1, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 250,
              mb: 2,
              width: 250
            }}
          />
         
      
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          fullWidth
          variant="text"
        >
          Tải ảnh lên
        </Button>
      </CardActions>
    </Card>
  );
  