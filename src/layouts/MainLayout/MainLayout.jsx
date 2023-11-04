import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar/Navbar";
import MyFooter from "../../pages/shared/Footer/MyFooter";


const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <MyFooter />
        </>
    );
};

export default MainLayout;