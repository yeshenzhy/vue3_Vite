/*
 * @Author: zhy
 * @Date: 2021-11-23 10:15:18
 * @Description:
 * @LastEditTime: 2021-11-23 18:42:37
 */
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import highcharts3d from 'highcharts/highcharts-3d';
import highcharts from 'highcharts';

import App from './App.vue';
import router from './router';
import store from './store';
import 'element-plus/dist/index.css';

highcharts3d(highcharts);
const app = createApp(App);
app.use(ElementPlus);
app.use(store).use(router).mount('#app');
// 获取原型
const prototype = app.config.globalProperties;
/**
 * @description: 按比例计算不同分辨率转px
 * @param {*} w: 宽度,h高度
 * @return {*}
 */
prototype.wh2px = ({ w, h }) => {
    const width = 5760;
    const height = 1080;
    const rWidth = document.body.clientWidth || document.body.offsetWidth;
    const rHeight = document.body.clientHeight || document.body.offsetHeight;
    if (w) {
        return rWidth * w / width;
    }
    if (h) {
        return rHeight * h / height;
    }
    return false;
};
