<template>
  <better-scroll ref="scroll" class="CartList" :pullUpLoad="true">
    <cart-list-item v-for="(item,index) in goods" :index = "index" :key="item.url" :good="item" />
  </better-scroll>
</template>

<script>
import BetterScroll from "components/common/scroll/BetterScroll.vue";

import CartListItem from "./CartListItem.vue";
export default {
  name: "CartList",
  components: { BetterScroll, CartListItem },
  data() {
    return {
      goods: this.$store.state.goodsCart,
    };
  },
  activated() {
    console.log(this.$refs.scroll.refresh);
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.CartList {
  height: calc(100% - 44px - 49px - 40px);
}
</style>