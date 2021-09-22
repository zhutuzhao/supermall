<template>
  <div class="Cart">
    <cart-nav />
    <cart-list />
    <cart-bottom-bar/>
  </div>
</template>

<script>
import CartNav from "./childComs/CartNav.vue";
import CartList from "./childComs/CartList.vue";
import CartBottomBar from './childComs/CartBottomBar.vue';
export default {
  name: "Cart",
  components: {
    CartNav,
    CartList,
    CartBottomBar,
  },
};
</script>

<style scoped>
.Cart {
  height: 100vh;
}
</style>
