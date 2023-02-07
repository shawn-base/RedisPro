import { BASEENV } from "./base.env";

export const PROD = {
    build: {
        outDir: 'dist',
        assetsDir: 'src',
        chunkSizeWarningLimit: 600,
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    return "vendor";
                },
            },
        },
    },
    optimizeDeps: {
        exclude: [],
    },
    define: {
        // "process.env.NODE_ENV": `"${mode}"`,
    },
    ...BASEENV
};