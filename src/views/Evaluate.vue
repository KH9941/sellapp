<template>
  <div class="flex1 Evaluate">
    <div class="composite flex">
      <div>
        <h2>3.9</h2>
        <div>综合评分</div>
        <div>高于周边商家69.2%</div>
      </div>
      <div>
        <div>服务态度</div>
        <div>服务态度</div>
        <div>送达时间</div>
      </div>
    </div>
    <div class="enter"></div>
    <div class="review">
      <div class="flex" v-for="item in this.list" :key="item.id">
        <div class="left">
          <img :src="item.avatar" />
        </div>
        <div class="right">
            <div>{{ item.username }}</div>
            <div><Rate disabled v-model="item.score" /> <span v-show="item.deliveryTime">{{item.deliveryTime}}分钟送达</span> </div>
            <div>{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRating } from "../api/api";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    getRating().then(res => {
      console.log(res.data.data);
      this.list = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.Evaluate{
  overflow: hidden;
}
.composite {
  height: 100px;
  padding: 10px;
  & > div:first-child {
    text-align: center;
    margin-right: 20px;
  }
  & > div:nth-child(2) {
    flex: 1;
    line-height: 26px;
  }
}
.enter {
  background: rgb(221, 216, 216);
  height: 20px;
}
.review {
  & > div {
    padding: 10px;
  }
  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  .left {
    flex: 0 0 60px;
  }
  .right{
      .ivu-rate {
          font-size: 12px
      }
  }
}
</style>