import { defineConfig } from 'vite';
import { DEV } from './env/dev.env.js'
import { PROD } from './env/prod.env.js'

export default defineConfig(({ command, mode, ssrBuild }) => {
    console.log('============ Vite Env Config: ', command, mode, ssrBuild);
    if (command === 'serve') {
        // dev配置
        return DEV;
    } else {
        // build配置
        return PROD
    }
});
