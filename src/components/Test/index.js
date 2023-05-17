import { AppBar, Button, Dialog, IconButton, List, Toolbar, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import React from "react";
import ConfirmDialog from "../Confirm";
const Transition = React.forwardRef(function Transition(
    props,
    ref
) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const TestDialog = (props) => {
    const { isOpen, setIsOpen } = props;
    const [openReturnConfirm, setOpenReturnConfirm] = React.useState(false);
    const [openSubmitConfirm, setOpenSubmitConfirm] = React.useState(false);

    const handleSubmitTest = () => {

    }

    const handleClose = () => {

        setIsOpen(false)
    }
    const handleConfirmReturnAction = (value) => {
        if (value == true) {
            setOpenReturnConfirm(false);
            setIsOpen(false);
        } else {
            setOpenReturnConfirm(false);
        }
    }
    const handleConfirmSubmitAction = (value) => {
        if (value == true) {
            setOpenSubmitConfirm(false);
            setIsOpen(false);
        } else {
            setOpenSubmitConfirm(false);
        }
    }

    const handleOpenConfirm = () => {
        setOpenReturnConfirm(true)
    }

    return <>
        <Dialog
            fullScreen
            open={isOpen}
            onClose={handleOpenConfirm}
            sx={{ zIndex: 999 }}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleOpenConfirm}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1, cursor: "pointer" }} onClick={handleOpenConfirm} variant="h6" component="div">
                        Trở lại khóa học
                    </Typography>
                    <Button autoFocus color="inherit" onClick={() => setOpenSubmitConfirm(true)}>
                        Nộp bài
                    </Button>
                </Toolbar>
            </AppBar>

        </Dialog>

        <ConfirmDialog
            isOpen={openReturnConfirm}
            title={"Quay trở lại khóa học"}
            description={"Dữ liệu về bài kiểm tra sẽ bị mất? Bạn có muốn tiếp tục?"} handleAction={handleConfirmReturnAction} />

        <ConfirmDialog
            isOpen={openSubmitConfirm}
            title={"Nộp bài kiểm tra"}
            description={"Bài kiểm tra sẽ được nộp? Bạn có muốn tiếp tục?"} handleAction={handleConfirmSubmitAction} />
    </>
}

export default TestDialog;