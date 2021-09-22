<template>
  <div class="detail">
    <!-- <h2>{{ this.$store.state.goodsCart }}</h2> -->
    <detail-navbar
      class="detail-nav"
      ref="detailNav"
      @titleClick="titleClick"
    />
    <better-scroll
      :probeType="3"
      :pullUpLoad="true"
      class="detail-scroll"
      ref="scroll"
      @scroll="detailScroll"
    >
      <detail-swapper :topImg="topImg" />
      <detail-good :good="good" />
      <detail-shop ref="good_detail" :shop="shop" />
      <detail-goods-info
        ref="comment"
        :goodsInfo="goodsInfo"
        @infoImgLoad="infoImgLoad"
      />
      <detail-goods-list ref="recommend" :recommend="recommend" />
    </better-scroll>
    <detail-bottom-bar @addClick="addClick" />
    <back-top @click.native="topClick" v-if="isShowTop" />
    <!-- <toast /> -->
  </div>
</template>

<script>
import DetailNavbar from "./childComs/DetailNavbar.vue";
import DetailSwapper from "./childComs/DetailSwapper.vue";
import DetailGood from "./childComs/DetailGood.vue";
import DetailShop from "./childComs/DetailShop.vue";
import DetailGoodsInfo from "./childComs/DetailGoodsInfo.vue";
import DetailGoodsList from "./childComs/DetailGoodsList.vue";
import DetailBottomBar from "./childComs/DetailBottomBar.vue";

import BetterScroll from "components/common/scroll/BetterScroll.vue";
// import BackTop from "components/content/backTop/BackTop.vue";

import {
  getHomeGoods,
  getHomeMutildata,
  getHomeRecommend,
} from "network/home.js";
import { shop, good } from "network/detail.js";
import { debounce } from "common/utils.js";
import { imgOnloadListener, backTopMixin } from "common/mixin.js";

import { mapActions } from "vuex";
// import Toast from "../../components/common/toast/Toast.vue";

export default {
  name: "Detail",
  components: {
    DetailNavbar,
    DetailSwapper,
    DetailGood,
    DetailShop,
    BetterScroll,
    DetailGoodsInfo,
    DetailGoodsList,
    DetailBottomBar,
    // Toast,
    // BackTop,
  },
  mixins: [imgOnloadListener, backTopMixin],
  data() {
    return {
      url: null,
      topImg: [],
      shop: {},
      good: {},
      goodsInfo: [],
      detailRefresh: null,
      recommend: null,
      itemTopY: [],
      getItemTop: null,
      itemTopYLen: 0,
      currentIndex: 0,
      isShowTop: false,
      // nowTop:0
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
    getHomeGoods().then((res) => {
      this.recommend = res.data.data;
      // console.log(this.recommend);
    });
  },
  mounted() {
    this.detailRefresh = debounce(this.$refs.scroll.refresh, 300);
    // console.log();
    // const refresh = debounce(this.$refs.scroll.refresh, 3000);
    // // this.$bus.$on("imgOnload", () => {
    // //   refresh(); //闭包，refresh不会被清理
    // //   console.log("imgOnloadOn");
    // // });
    // this.refresh_w = () => {
    //   refresh();
    //   console.log("imgOnloadOn-de");
    // };
    this.$bus.$on("imgOnload", this.refresh_w);

    this.getItemTop = debounce(() => {
      this.itemTopY[0] = 0;
      this.itemTopY[1] = this.$refs.good_detail.$el.offsetTop;
      this.itemTopY[2] = this.$refs.comment.$el.offsetTop;
      this.itemTopY[3] = this.$refs.recommend.$el.offsetTop;
      //第三版
      this.itemTopY[4] = Number.MAX_VALUE;

      console.log(this.itemTopY);
      this.itemTopYLen = this.itemTopY.length;
    }, 3000);
  },
  methods: {
    ...mapActions(["addGoods"]),
    getTopImg() {
      getHomeMutildata().then((res) => {
        this.topImg = res.data.data;
      });
    },
    infoImgLoad() {
      this.detailRefresh();
      // console.log('infoImgLoad');
      this.getItemTop();
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.itemTopY[index], 500);
    },
    // this.getItemTop=
    //   // this.$nextTick(() => {
    //   debounce(() => {
    //     this.itemTopY[0] = 0;
    //     this.itemTopY[1] = this.$refs.good_detail.$el.offsetTop;
    //     this.itemTopY[2] = this.$refs.comment.$el.offsetTop;
    //     this.itemTopY[3] = this.$refs.recommend.$el.offsetTop;
    //     console.log(this.itemTopY);
    //   }, 3000);
    //   // });
    // // },
    //第一版
    // detailScroll(option) {
    //   if (-option.y < this.itemTopY[1]) {
    //     console.log(0);
    //   } else if (-option.y < this.itemTopY[2]) {
    //     console.log(1);
    //   } else if (-option.y < this.itemTopY[3]) {
    //     console.log(2);
    //   } else {
    //     console.log(3);
    //   }
    // },
    //第二版
    // detailScroll(option) {
    //   for (let i in this.itemTopY) {
    //     if (
    //       i != this.currentIndex &&
    //       ((-option.y > this.itemTopY[i - 0] &&
    //         -option.y < this.itemTopY[i - -1]) ||
    //         (i == this.itemTopYLen - 1 && -option.y > this.itemTopY[i - 0]))
    //     ) {
    //       console.log(i);
    //       this.currentIndex = i;
    //       this.$refs.detailNav.currentIndex = this.currentIndex;
    //     }
    //     // console.log(i);
    //   }
    // },

    //第三版
    detailScroll(option) {
      for (let i = 0; i < this.itemTopYLen - 1; i++) {
        if (
          i != this.currentIndex &&
          -option.y > this.itemTopY[i - 0] &&
          -option.y < this.itemTopY[i - -1]
        ) {
          console.log(i);
          this.currentIndex = i;
          this.$refs.detailNav.currentIndex = this.currentIndex;
        }
      }
      this.isShowTop = -option.y > 500;
    },
    addClick() {
      // console.log('addClick-detail');
      const goods_add = {
        url: this.url,
        img: this.topImg[0],
        title: this.good.title,
        price: this.good.prices.n_price,
      };
      // this.$store.dispatch("addGoods", goods_add).then((res) => {
      //   console.log(res);
      // });
      this.addGoods(goods_add).then((res) => {
        console.log(res);
        console.log(this);
        this.$toast.show(res, 5000);
      });
      console.log("不是回调里面的");
    },
    // topClick() {
    //   this.$refs.scroll.scrollTo(0, 0, 800);
    // },
  },
  destroyed() {
    console.log("destroyed");
    this.$bus.$off("imgOnload", this.refresh_w);
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
  height: calc(100% - 44px - 49px);
  background-color: #fff;
  z-index: 999;
}
</style>