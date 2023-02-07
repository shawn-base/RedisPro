import { BASEENV } from "./base.env";

export const DEV = {
    server: {
        host: true,
        port: 3030,
        open: 'localhost:3030',
        cors: true
    },
    define: {
        // "process.env.NODE_ENV": `"${mode}"`,
    },
    ...BASEENV
};