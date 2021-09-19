<template>
  <div class="detail-nav">
    <nav-bar>
      <div slot="left" class="left-back" @click="backHome">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="center">
        <div
          class="nav-item"
          :class="{ active: index == currentIndex }"
          v-for="(item, index) in titles"
          :key="item"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/navBar.vue";
export default {
  name: "DetailNavbar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    backHome() {
      this.$router.back();
    },
    titleClick(index){
        this.currentIndex = index
    }
  },
};
</script>

<style scoped>
.center {
  display: flex;
}
.nav-item {
  flex: 1;
  font-size: 18px;
}
.left-back {
  padding-left: 20px;
  padding-top: 5px;
}
.active {
  color: var(--color-high-text);
}
</style>