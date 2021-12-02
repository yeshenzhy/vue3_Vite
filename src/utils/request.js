/*
 * @Author: zhy
 * @Date: 2021-11-22 20:36:03
 * @Description: axios 请求封装
 * @LastEditTime: 2021-11-23 10:59:09
 */

import axios from 'axios';
import ServerConfig from '@/utils/server-config';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// 创建axios实例
const service = axios.create({
    // 超时
    timeout: 100000,
});

// axios中请求配置有baseURL选项，表示请求URL公共部分
service.defaults.baseURL = ServerConfig.getServerUrl();
// request拦截器
service.interceptors.request.use(
    (config) => config,
    (error) => {
        Promise.reject(error);
    },
);

// 响应拦截器
service.interceptors.response.use((res) => {
    const { code } = res.data;
    if (code !== 200) {
        // Message.error(res.data.message)
        return Promise.reject(res.data);
    }
    return res.data;
},
(error) => Promise.reject(error));
export default service;
