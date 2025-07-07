import { lazy, Suspense } from "react";
import MainLayout from "../layouts/MainLayout";
import { PATHS } from "../config/path";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Home = lazy(() => import("../pages/Home"));

const DefaultRoutes = {
    path: PATHS.home.path,
    element: <MainLayout />,
    children: [
        {
            path: "",
            element: (
                <Suspense fallback={<> </>}>
                    <Home />
                </Suspense>
            )
        },
        {
            path: PATHS.home.childrens.dashboard.path,
            element: (
                <Suspense fallback={<> </>}>
                    <Dashboard />
                </Suspense>
            )
        }
    ]
};

export default DefaultRoutes;