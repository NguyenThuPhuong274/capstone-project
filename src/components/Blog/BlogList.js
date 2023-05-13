
import SingleBlog from "../../components/Blog/SingleBlog";
import {
    Button, Stack, SvgIcon
    , InputAdornment, OutlinedInput,
} from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import PencilIcon from '@heroicons/react/24/solid/PencilIcon';
import React from "react";
import { useNavigate } from "react-router-dom";

const BlogList = ({ blogData }) => {
    const navigate = useNavigate();
    const [isOpenModal, setIsOpenModal] = React.useState(false);

    const handleAction = (id) => {
        navigate("/");
    }

    return <>
        <div className="p-2 pt-3 pb-0">
            <Stack direction="row" justifyContent="space-between">
                <OutlinedInput
                    defaultValue=""
                    fullWidth
                    placeholder="Tìm kiếm tin tức"
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
                        Thêm mới tin tức
                    </Button>
                </div>
            </Stack>
        </div>
        <section className="pt-[10px] pb-[10px]">
            <div className="container p-2">
                <div className="-mx-4 flex flex-wrap justify-center">
                    {blogData.map((blog) => (
                        <div
                            key={blog.id}
                            className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                        >
                            <SingleBlog
                                actionTitle="Chỉnh sửa"
                                blog={blog}
                                icon={<PencilIcon />}
                                handleAction={handleAction}
                            />
                        </div>
                    ))}
                </div>

                <div
                    className="wow fadeInUp -mx-4 flex flex-wrap"
                    data-wow-delay=".15s"
                >
                    {/* <Pagination totalPages={10} currentPage={currentPage} onPageChange={onPageChange} /> */}
                </div>
            </div>
        </section></>
}

export default BlogList;