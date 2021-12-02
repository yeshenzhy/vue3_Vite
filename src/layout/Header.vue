<!--
 * @Author: zhy
 * @Date: 2021-11-23 14:59:30
 * @Description: header头部
 * @LastEditTime: 2021-11-23 19:03:14
-->

<template>
    <div class="wrapper">
        <img class="logo"  :src="logo" alt="">
        <img class="title" :src="title" alt="">
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import logo from '@/assets/image/layout/logo.png';
import title from '@/assets/image/layout/title.png';

onMounted(() => {
});
onBeforeUnmount(() => {
});
</script>
<style lang='scss' scoped>
.wrapper {
  .logo {
    position: fixed;
    left: vw(2457);
    top: vh(21);
    width: vw(84);
    height: vw(84);
  }
  .title {
    position: fixed;
    left: vw(2509);
    top: vh(32);
    width: vw(819);
    height: vw(57);
  }
}
</style>
