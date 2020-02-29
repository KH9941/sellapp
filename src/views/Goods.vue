<template>
  <div class="shopping">
    <div class="left leftshop">
      <ul class="content">
        <!-- <div :class="{a:true,b:c=d}"></div> 添加多个类名，且有一个为动态类名-->
        <div :class="{checked:item.name==i}" @click="clickLeft(item.name,i)" v-for="(item,i) in this.goodList" :key="item.id">{{ item.name }}</div>
      </ul>
    </div>
    <div class="right wrapper">
      <ul class="content">
        <div :id="i" v-for="(item,i) in this.goodList" :key="item.id">
          <div class="smalltitle">{{ item.name }}</div>
          <div class="food flex" v-for="(obj,i) in item.foods" :key="i">
            <div class="imgs">
              <img :src="obj.icon" alt />
            </div>
            <div>
              <h3>{{ obj.name }}</h3>
              <div class="hide description">{{obj.description}}</div>
              <div>月售{{obj.sellCount}}份 ，好评率{{obj.rating}}%</div>
              <div>
                <span class="price">￥{{obj.price}}</span>
                <span v-show="obj.oldPrice">
                  ￥
                  <del>{{obj.oldPrice}}</del>
                </span>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { getGooods } from "../api/api";
export default {
  data() {
    return {
      goodList: [],
      i:''
    };
  },
  created() {
    getGooods().then(res => {
      this.goodList = res.data.data;
    });
  },
  mounted() {
    this.rightDiv=new BScroll(document.querySelector(".wrapper"));
    new BScroll(document.querySelector(".leftshop"), {
      click: true
    });
  },
  methods: {
    clickLeft(v,index) {
      this.i=v;
      this.rightDiv.scrollToElement(document.getElementById(index),500)
    }
  }
};
</script>

<style lang="less" scoped>
.shopping {
  display: flex;
  flex: 1;
  overflow: hidden;
  .left {
    flex: 0 0 70px;
    div {
      background: #f4f5f7;
      padding: 16px 5px;
    }
    div:hover {
      background: #fff;
    }
    .checked{
      background: #fff
    }
  }
  .right {
    flex: 1;
    overflow-y: scroll;
    .smalltitle {
      background: #f4f5f7;
      border-left: 1px solid #ccc;
      padding: 5px;
    }
    .food {
      padding: 10px 15px;
      border-bottom: 1px solid #ccc;
      align-items: center;
      .imgs {
        flex: 0 0 60px;
        height: 60px;
        margin-right: 10px;
      }
      .description {
        width: 160px;
      }
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>