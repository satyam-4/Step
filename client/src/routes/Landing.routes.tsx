import { lazy, Suspense } from "react";
import LandingLayout from "../layouts/LandingLayout";
import { PATHS } from "../config/path";

const Home = lazy(() => import("../pages/Home"));

const LandingRoute = {
    path: PATHS.home.path,
    element: <LandingLayout />,
    children: [
        {
            index: true,
            element: (
                <Suspense fallback={<> </>}>
                    <Home />
                </Suspense>
            )
        }
    ]
};

export default LandingRoute;