<!--
 * @Author: zhy
 * @Date: 2021-11-23 18:48:36
 * @Description:
 * @LastEditTime: 2021-11-23 21:33:42
-->
<template>
    <div class="page-container">
        <!-- 自定义模块 -->
        <div class="custom-module" v-for="(module, index) in customConfigure" :key="index">
            <component
                class="custom-module-item"
                :is="customComponents[index]"
                v-bind="module.props"
                :style="{...assembleStyle(module.style)}">
            </component>
        </div>
    </div>
</template>

<script setup>
defineProps({
    customConfigure: {
        type: Array,
        default: () => [],
    },
    customComponents: {
        type: Array,
        default: () => [],
    },
});
const assembleStyle = (style) => {
    const obj = {};
    Object.keys(style).forEach((key) => {
        obj[key] = `${style[key]}px`;
    });
    return obj;
};
</script>
<style lang='scss' scoped>
.page-container {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    .custom-module {
      pointer-events: all;
      .custom-module-item {
          position: absolute;
          z-index: 10;
      }
    }
}

</style>
