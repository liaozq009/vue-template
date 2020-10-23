<template>
  <div class="hello">
    <h1>我是一个H5页面</h1>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="danger">主要按钮</van-button>
    <!-- 将该组件绑定到 this.$refs.checkbox 上 -->
    <!-- <van-checkbox v-model="checked" ref="checkbox">
      复选框
    </van-checkbox> -->
    <van-tabbar :safe-area-inset-bottom="true">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o">文章</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import Vue from 'vue';
// import { Button } from "vant";
// Vue.use(Button);
export default {
  name: "HelloWorld",
  // components: {
  //   [Button.name]: Button
  // },
  props: {
    msg: String
  },
  data() {
    return {
      checked: false,
    }
  },
  // 注意：组件挂载后才能访问到 ref 对象
  mounted() {
    // this.$refs.checkbox.toggle();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1 {
  font-size: 30px;
  color: @theme;
}
</style>
