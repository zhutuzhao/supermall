<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div class="center" slot="center">购物街</div>
    </nav-bar>
    <tab-contral
      :titles="['好物分享', '名牌推荐', '平价优品']"
      @tabClick="goodstype"
      ref="tabContral1"
      v-show="isFixed"
      class="tabContral1"
    />
    <better-scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @pullingUp="contentPullingUp"
    >
      <home-swiper :banners="banners" @imgLoad="imgLoad" />
      <home-recommend />
      <feature-view />
      <tab-contral
        :titles="['好物分享', '名牌推荐', '平价优品']"
        @tabClick="goodstype"
        ref="tabContral2"
      />
      <goods-list :GoodsList="goods[type].list" />
    </better-scroll>
    <back-top @click.native="topClick" v-if="isShowTop" />
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar.vue";
import TabContral from "components/content/tabContral/TabContral.vue";
import GoodsList from "components/content/goodsList/GoodsList.vue";
import BetterScroll from "components/common/scroll/BetterScroll.vue";
// import BackTop from "components/content/backTop/BackTop.vue";

import HomeSwiper from "views/home/childcomponents/HomeSwiper.vue";
import HomeRecommend from "views/home/childcomponents/HomeRecommend.vue";
import FeatureView from "views/home/childcomponents/FeatureView.vue";

import { getHomeGoods, getHomeMutildata } from "network/home";

import { debounce } from "common/utils.js";
import { imgOnloadListener,backTopMixin } from "common/mixin.js";
export default {
  name: "Home",
  components: {
    navBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabContral,
    GoodsList,
    BetterScroll,
    // BackTop,
  },
  mixins: [imgOnloadListener,backTopMixin],
  data() {
    return {
      type: "pop",
      banners: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      // isShowTop: false,
      isFixed: false,
      tabContralHeight: 0,
      scrollPosition: 0,
      // refresh_w: null,
    };
  },
  created() {
    this.getHomeMutildata_m();
    this.getGoods_m("pop");
    this.getGoods_m("sell");
    this.getGoods_m("new");
  },
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh, 3000);
    // // this.$bus.$on("imgOnload", () => {
    // //   refresh(); //闭包，refresh不会被清理
    // //   console.log("imgOnloadOn");
    // // });
    // this.refresh_w = () => {
    //   refresh();
    //   console.log("imgOnloadOn-ho");
    // };
    // // this.$bus.$on("imgOnload", this.refresh_w);
  },
  methods: {
    getHomeMutildata_m() {
      getHomeMutildata().then((res) => {
        this.banners = res.data.data;
      });
    },
    getGoods_m(type) {
      //可以在这里获取页数
      getHomeGoods(type).then((res) => {
        this.goods[type].list.push(...res.data.data);
        this.goods[type].page++;
      });
    },
    goodstype(index) {
      this.$refs.tabContral1.currentIndex = index;
      this.$refs.tabContral2.currentIndex = index;
      switch (index) {
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "new";
          break;
        case 2:
          this.type = "sell";
          break;
      }
    },
    // topClick() {
    //   this.$refs.scroll.scrollTo(0, 0, 800);
    // },
    contentScroll(option) {
      this.isShowTop = -option.y > 500;
      this.isFixed = -option.y > this.tabContralHeight;
    },
    contentPullingUp() {
      // console.log('132');
      this.getGoods_m(this.type);
    },
    imgLoad() {
      this.tabContralHeight = this.$refs.tabContral2.$el.offsetTop;
    },
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.scrollPosition, 0);
    this.$bus.$on("imgOnload", this.refresh_w);
  },
  deactivated() {
    this.scrollPosition = this.$refs.scroll.bs.y;
    console.log("deactivated");
    this.$bus.$off("imgOnload", this.refresh_w);
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
}
.center {
  color: #fff;
}
.tabContral1 {
  position: relative;
  z-index: 999;
}
.content {
  position: absolute;
  right: 0;
  left: 0;
  height: calc(100% - 93px);
  top: 44px;
}
</style>