/*
 * @Author: zhy
 * @Date: 2021-08-11 15:16:48
 * @Description:
 * @LastEditTime: 2021-11-30 21:04:21
 */

export default {
    getServerUrl() {
        if (!window.CONFIG.api) {
            if (import.meta.env.MODE === 'development') {
                return import.meta.env.VITE_APP_BASE_API;
            } if (import.meta.env.MODE === 'mock') {
                return import.meta.env.VITE_APP_MOCK_API;
            }
            return import.meta.env.VITE_APP_TARGET_API;
        }
        return window.CONFIG.api;
    },
    getSwaggerUrl() {
        if (!window.CONFIG.api) {
            return import.meta.env.VITE_APP_TARGET_API;
        }
        return window.CONFIG.api;
    },
};
