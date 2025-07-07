export const PATHS = {
    auth: {
        path: "/auth",
        childrens: {
            signUp: {
                path: "/signup"
            },
            signIn: {
                path: "/signin"
            }
        }
    },
    home: {
        path: "/",
        childrens: {
            dashboard: {
                path: "/dashboard"
            }
        }
    },
} as const;

export type PathType = typeof PATHS;