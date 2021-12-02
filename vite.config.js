/*
 * @Author: zhy
 * @Date: 2021-11-30 15:43:56
 * @Description:
 * @LastEditTime: 2021-11-30 20:20:10
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const { resolve } = require('path');

// const dev = loadEnv(mode, process.cwd());// 获取环境变量
const config = () => defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    },
    // optimizeDeps: {
    //     exclude: ['highcharts'],
    // },
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    build: {
        sourcemap: false,
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData:
                `
                  @import "@/style/global.scss";
                  @import "@/style/reset.scss";
                `,
            },
        },
    },
});
export default config;
