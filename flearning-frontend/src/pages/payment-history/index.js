import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/Common/Breadcrumb";
import SmoothScrollUp from "../../components/Common/SmoothScrollUp";
import Contact from "../../components/Contact";
import React from "react";
import { getPayments } from "../../redux/paymentSlice";
import ListPayment from "../../components/Payment/ListPayment";

const PaymentHistoryPage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.authen.user);
    const payments = useSelector((state) => state.payment.list);
    const isRefresh = useSelector((state) => state.payment.isRefresh);
    const courses = useSelector((state) => state.course.data);


    React.useEffect(() => {
        dispatch(getPayments({ email: user?.email }));
    }, [isRefresh]);

    console.log(payments);

    return (
        <>
            <SmoothScrollUp />

            <Breadcrumb
                pageName="Lịch sử giao dịch"
                description="Xem thông tin các giao dịch mà bạn thanh toán"
            />

            <ListPayment data={payments} user={user} courses={courses} />

        </>
    );
};

export default PaymentHistoryPage;
