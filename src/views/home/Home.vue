<!--
 * @Author: zhy
 * @Date: 2021-11-22 18:31:11
 * @Description: 首页
 * @LastEditTime: 2021-11-30 21:05:33
-->
<template>
    <div class="wrapper">
        <Header></Header>
        <Module :customComponents="customComponents" :customConfigure="customConfigure"></Module>
    </div>
</template>

<script setup>
import {
    getCurrentInstance, defineAsyncComponent, reactive, onMounted, onBeforeUnmount, markRaw,
} from 'vue';
import Header from '@/layout/Header.vue';
import Module from '@/layout/Module.vue';

const { proxy: { wh2px } } = getCurrentInstance();
// 动态组件
const customComponents = markRaw([
    defineAsyncComponent(() => import('@/views/home/components/Park1.vue')),
]);
// 动态组件对应配置
const customConfigure = reactive([
    {
        props: {
            classify: '摄像头',
            title: '摄像头总数',
        },
        style: {
            height: wh2px({ h: 370 }),
            width: wh2px({ w: 2232 }),
            left: wh2px({ w: 930 }),
            bottom: wh2px({ h: 124 }),
        },
    },
]);
// 组件加载
onMounted(() => {
});
// 组件卸载之前
onBeforeUnmount(() => {
});
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background: url('@/assets/image/layout/bg_layout.png') no-repeat;
  background-size: 100% 100%;
}
</style>
