<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners = "banners" />
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar.vue";
import HomeSwiper from './childcomponents/HomeSwiper.vue'

import { getHomeMutildata } from "network/home";

export default {
  name: "Home",
  components: {
    navBar,HomeSwiper
  },
  data() {
    return {
      banners: [],
    };
  },
  created() {
    getHomeMutildata().then((res) => {
      this.banners = res.data.data;
    });
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