<template>
  <div id="box">
    <div class="top">
      <div class="left">
        <img :src="topList.avatar" alt />
      </div>
      <div class="right">
        <div class="flex">
          <div class="logo">
            <img src="../assets/imgs/brand@2x.png" alt />
          </div>
          <h3>{{topList.name}}</h3>
        </div>
        <div>{{topList.description}}/{{topList.deliveryTime}}分钟送达</div>
        <div class="hide">
          <span v-for="item in topList.supports" :key="item.id">{{ item.description }},</span>
        </div>
      </div>
      <div class="number">
        {{topList.deliveryPrice}}个
        <Icon type="ios-arrow-forward" />
      </div>
    </div>
    <div class="bulletin flex">
      <img class="ad" src="../assets/imgs/bulletin@2x.png" alt />
      <div class="flex1 hide">{{topList.bulletin}}</div>
      <div class="icon">
        <Icon type="ios-arrow-forward" />
      </div>
    </div>
    <div class="banner">
      <div :class="{selcted:i==1}" @click="btn(1,'Goods')" >商品</div>
      <div :class="{selcted:i==2}" @click="btn(2,'Evaluate')" >评论</div>
      <div :class="{selcted:i==3}" @click="btn(3,'Merchant')" >商家</div>
    </div>
    <router-view></router-view>
    <div style="height:50px"></div>
    <div class="shopCar flex">
      <div>
        <div>
          <img src="../assets/imgs/购物车.png" alt />
        </div>￥0
      </div>
      <div class="flex1 center">另需配送费￥4元</div>
      <div class="center">￥20元起送</div>
    </div>
  </div>
</template>

<script>
import { getGoods } from "../api/api";
export default {
  data() {
    return {
      topList: [],
      i:1
    };
  },
  created() {
    getGoods().then(res => {
      this.topList = res.data.data;
    });
    
  },
  mounted() {
    this.$router.history.push('/Goods')
  },
  methods:{
    btn(i,hash){
      this.i=i
      this.$router.push(hash)
    }
  }
};
</script>

<style lang="less" scoped>
#box {
  display: flex;
  flex-direction: column;
  .bulletin {
    padding: 0.5rem;
    background: #3d3532;
    color: #fff;
    .ad {
      height: 100%;
      width: 40px;
      margin-right: 5px;
    }
    .icon {
      flex: 0 0 10px;
    }
  }
  .logo {
    flex: 0 0 40px;
    height: 25px;
    margin-right: 6px;
  }
  .selcted {
    color: red !important;
  }
}
.top {
  background: #4e443c;
  position: relative;
  height: 100px;
  display: flex;
  padding: 1rem;
  flex: 0 0 100px;
  .left {
    flex: 0 0 80px;
  }
  .right {
    flex: 1;
    padding: 0 1rem;
    color: #fff;
  }
  .hide {
    width: 200px;
  }
  .number {
    position: absolute;
    right: 0.5rem;
    bottom: 1rem;
    color: #fff;
    background: #312a2b;
    padding: 0.2rem 0.4rem;
    border-radius: 0.8rem;
  }
}
.banner {
  display: flex;
  justify-content: space-around;
  padding: 0.8rem 0;
  border-bottom: 1px solid #ccc;
}
.shopCar {
  background: #141c27;
  height: 50px;
  position: fixed;
  bottom: 0;
  width: 100%;
  line-height: 50px;
  color: rgb(172, 158, 158);
  & > div:nth-child(1) {
    font-size: 20px;
    flex: 0 0 30%;
    position: relative;
    text-align: right;
    font-weight: bold;
    padding-right: 10px;
    & > div:first-child {
      background: black;
      position: absolute;
      top: -1rem;
      left: 1rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }
  }
  & > div:nth-child(3) {
    background: #2b343b;
    flex: 0 0 30%;
    font-weight: bold;
  }
  & > div:nth-child(2) {
    border-left: 1px solid #242c37;
  }
}
</style>