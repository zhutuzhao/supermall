<template>
  <div class="detail">
    <detail-navbar class="detail-nav" />
    <better-scroll
      :pullUpLoad="true"
      :probeType="3"
      class="detail-scroll"
      ref="detail_scroll"
    >
      <detail-swapper :topImg="topImg" />
      <detail-good :good="good" />
      <detail-shop :shop="shop" />
      <detail-goods-info :goodsInfo="goodsInfo" @infoImgLoad="infoImgLoad" />
    </better-scroll>
  </div>
</template>

<script>
import DetailNavbar from "./childComs/DetailNavbar.vue";
import DetailSwapper from "./childComs/DetailSwapper.vue";
import DetailGood from "./childComs/DetailGood.vue";
import DetailShop from "./childComs/DetailShop.vue";
import DetailGoodsInfo from "./childComs/DetailGoodsInfo.vue";

import BetterScroll from "components/common/scroll/BetterScroll.vue";

import { getHomeMutildata, getHomeRecommend } from "network/home.js";
import { shop, good } from "network/detail.js";
import {debounce} from "common/utils.js";

export default {
  name: "Detail",
  components: {
    DetailNavbar,
    DetailSwapper,
    DetailGood,
    DetailShop,
    BetterScroll,
    DetailGoodsInfo,
  },
  data() {
    return {
      url: null,
      topImg: [],
      shop: {},
      good: {},
      goodsInfo: [],
      detailRefresh:null
    };
  },
  created() {
    this.url = this.$route.params.url;
    this.getTopImg();
    this.good = new good(
      {
        title: "CSS实现文本超过部分，超出两行，超出部分省略号显示",
      },
      {
        n_price: 38.88,
        o_price: 68.88,
        activities: "活动价",
      },
      { sells: "5000", collect: "520", time: 72 }
    );
    this.shop = new shop(
      {
        url: "http://img5.adesk.com/5bfce16de7bce72f297f9294?sign=965dc233d0137f9c5ae00c51e92b1b1a&t=6146f7bf",
      },
      {
        total_sell: "5.8万",
        total_goods: "108",
        introduce_pef: 4.64,
        price_pef: 4.85,
        quality_pef: 4.62,
      },
      { url: "https://www.baidu.com" }
    );
    getHomeRecommend().then((res) => {
      this.goodsInfo = res.data.data;
    });
  },
  mounted() {
    this.detailRefresh = debounce(this.$refs.detail_scroll.refresh, 300);
  },
  methods: {
    getTopImg() {
      getHomeMutildata().then((res) => {
        this.topImg = res.data.data;
      });
    },
    infoImgLoad() {
      this.detailRefresh();
    },
  },
};
</script>

<style scoped>
.detail {
  height: 100vh;
}
.detail-nav {
  background-color: #fff;
  z-index: 999;
}
.detail-scroll {
  position: relative;
  height: calc(100% - 44px);
  background-color: #fff;
  z-index: 999;
}
</style>