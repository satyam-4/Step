export const PATHS = {
    auth: {
        path: "/auth",
        childrens: {
            signUp: {
                path: "signup"
            },
            signIn: {
                path: "signin"
            }
        }
    },
    home: {
        path: "/"
    },
    app: {
        path: "/app",
        childrens: {
            dashboard: {
                path: "dashboard"
            },
            setConstraints: {
                path: "set-constraints"
            }
        }
    } 
} as const;

export type PathType = typeof PATHS;