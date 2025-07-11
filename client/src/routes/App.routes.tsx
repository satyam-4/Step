import { lazy, Suspense } from "react";
import AppLayout from "../layouts/AppLayout";
import { PATHS } from "../config/path";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const SetConstraints = lazy(() => import("../pages/SetConstraints"))

const AppRoutes = {
    path: PATHS.app.path,
    element: <AppLayout />,
    children: [
        {
            path: PATHS.app.childrens.dashboard.path,
            element: (
                <Suspense fallback={<> </>}>
                    <Dashboard />
                </Suspense>
            )
        },
        {
            path: PATHS.app.childrens.setConstraints.path,
            element: (
                <Suspense fallback={<> </>}>
                    <SetConstraints />
                </Suspense>
            )
        },
    ]
};

export default AppRoutes;