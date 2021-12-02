<!--
 * @Author: zhy
 * @Date: 2021-11-30 11:10:57
 * @Description:
 * @LastEditTime: 2021-11-30 12:34:53
-->
<template>
    <div class="wrapper">
        <div class="box"></div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    data() {
        return {
            count: 0,
        };
    },
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  .box {
    width: vw(800);
    height: vh(400);
    background: blue;
  }
}
</style>
