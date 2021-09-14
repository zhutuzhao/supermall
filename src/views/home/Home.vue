<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend />
    <feature-view />
    <tab-contral :titles="['好物分享', '名牌推荐', '平价优品']" />
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar.vue";
import TabContral from "components/content/tabContral/TabContral.vue";

import HomeSwiper from "views/home/childcomponents/HomeSwiper.vue";
import HomeRecommend from "views/home/childcomponents/HomeRecommend.vue";
import FeatureView from "views/home/childcomponents/FeatureView.vue";

import { getHomeGoods, getHomeMutildata } from "network/home";

export default {
  name: "Home",
  components: {
    navBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabContral,
  },
  data() {
    return {
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
    };
  },
  created() {
    this.getHomeMutildata_m();
    this.getGoods_m('pop');
    this.getGoods_m('sell');
    this.getGoods_m('new');
  },
  methods: {
    getHomeMutildata_m() {
      getHomeMutildata().then((res) => {
        this.banners = res.data.data;
      });
    },
    getGoods_m(type) {
      //可以在这里获取页数
      getHomeGoods(type).then(res=>{
        this.goods[type].list.push(...res.data.data)
        this.goods[type].page++;
      })
    },
  },
  // mounted() {
  //   getHomeMutildata().then((res) => {
  //     this.banners = res.data.data;
  //   });
  // },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
}
.center {
  color: #fff;
}
</style>