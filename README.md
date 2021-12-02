<!--
 * @Author: zhy
 * @Date: 2021-11-22 20:22:31
 * @Description: README.md
 * @LastEditTime: 2021-11-29 11:21:47
-->
### 项目目录结构
├─public ---------------------字体文件
│  ├─static ------------------静态文件
│  │  ├─font -----------------字体文件
│  │  └─style ----------------字体css样式
│  │
│  └─vendor ------------------API版本文件：thingjs版本、uearth版本等，无用旧版本请及时删除
│
├─api ------------------------接口请求文件
├─assets ---------------------项目资源文件
│  └─image -------------------项目图片资源（请按照模块划分）
│      └─layout --------------布局相关图片资源
├─components -----------------全局公共组件
├─hooks ----------------------自定义hook函数
├─layout ---------------------全局布局文件
├─router ---------------------路由
├─store ----------------------vuex目录
├─style ----------------------重置初始化css
├─utils ----------------------公共方法
└─views ----------------------项目页面文件
    └─home -------------------首页
        └─components

## 项目运行参考package.json中命令配置

* 安装依赖 npm install

* 开发本地运行 npm run serve

* 打包 npm run build

## 布局
* 自适应布局(5760*1080) vh, vw
* 布局采用动态组件(使用如下)
```
<template>
    <Module :customComponents="customComponents" :customConfigure="customConfigure"></Module>
</template>
import { reactive, markRaw, getCurrentInstance } from 'vue';
import Module from '@/layout/Module.vue';
const { proxy: { wh2px } } = getCurrentInstance();
// 动态组件Array
const customComponents = markRaw([
    defineAsyncComponent(() => import('@/views/home/components/Park1.vue')),
]);
// 动态组件对应配置Array
const customConfigure = reactive([
    {
        props: {
            ...
        },
        style: {
            height: wh2px({ h: 370 }),
            width: wh2px({ w: 2232 }),
            left: wh2px({ w: 930 }),
            bottom: wh2px({ h: 124 }),
        },
    },
]);
```
## 代码规范
[编码规约](https://github.com/airbnb/javascript)