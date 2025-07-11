import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="w-screen h-screen">
            <Header />
            <div className="px-10 py-5 h-[calc(100%-60px)] flex gap-5 bg-zinc-100">
                    <Sidebar />
                    <Outlet />
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default AppLayout