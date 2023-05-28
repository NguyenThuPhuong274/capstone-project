import Breadcrumb from "../../components/Common/Breadcrumb";
import SmoothScrollUp from "../../components/Common/SmoothScrollUp";
import Contact from "../../components/Contact";

const PaymentHistoryPage = () => {
    return (
        <>
            <SmoothScrollUp />

            <Breadcrumb
                pageName="Lịch sử giao dịch"
                description="Xem thông tin các giao dịch mà bạn thanh toán"
            />

        </>
    );
};

export default PaymentHistoryPage;
