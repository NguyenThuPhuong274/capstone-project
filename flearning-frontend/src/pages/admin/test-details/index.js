import { useLocation } from "react-router-dom";

const AdminTestDetailsPage = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const test_id = params.get('test_id');

    return <>

    </>;
}

export default AdminTestDetailsPage;