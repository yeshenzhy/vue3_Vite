<!--
 * @Author: zhy
 * @Date: 2021-11-23 19:17:43
 * @Description:
 * @LastEditTime: 2021-11-23 21:26:47
-->
<template>
    <div class="wrapper">111</div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, watch } from 'vue';

const props = defineProps({
    classify: {
        type: String,
        default: '',
    },
});
watch(
    () => props.classify,
    () => {
    },
);

onMounted(() => {
});
onBeforeUnmount(() => {
});
</script>
<style lang='scss' scoped>
</style>
