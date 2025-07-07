export const PATHS = {
    auth: {
        signUp: {
            path: "/auth/signup"
        },
        signIn: {
            path: "/auth/signin"
        }
    },
    home: {
        path: "/"
    },
} as const;

export type PathType = typeof PATHS;