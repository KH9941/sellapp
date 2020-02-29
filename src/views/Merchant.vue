<template>
  <div>
    <div id="box" class="wrapper">
      <ul class="content">
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  mounted() {
    new BScroll(document.querySelector(".wrapper"));
  }
};
</script>

<style lang="less" scoped>
#box {
  height: 100px;
  background: lightcyan;
  overflow: hidden;
}
</style>