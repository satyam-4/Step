import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const LandingLayout = () => {
    return (
        <div className="w-screen h-screen">
            <Header />
            <Outlet />
        </div>
    );
};

export default LandingLayout;