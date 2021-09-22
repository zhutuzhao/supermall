<template>
  <div class="CartBottomBar">
    <div class="check-all">
      <check-button
        class="check-btn"
        :isChecked="isAllChecked"
        @click.native="all_click"
      />全选
    </div>
    <div class="cacl">合计：￥{{ totalPrice }}</div>
    <div class="toCompute">去计算({{ totalNum }})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
export default {
  name: "CartBottomBar",
  data() {
    return {};
  },
  components: { CheckButton },
  computed: {
    totalPrice() {
      return (
        this.$store.state.goodsCart.length &&
        this.$store.state.goodsCart
          .filter((item) => item.isChecked)
          .reduce((pre, n) => pre + n.price * n.count, 0)
          .toFixed(2)
      );
    },
    totalNum() {
      return this.$store.state.goodsCart.filter((item) => item.isChecked)
        .length;
    },
    isAllChecked() {
      if (!this.$store.state.goodsCart.length) return false;
      // return !this.$store.state.goodsCart.filter(n=>!n.isChecked).length
      return !this.$store.state.goodsCart.find((n) => !n.isChecked);
    },
  },
  methods: {
    all_click() {
      if (this.isAllChecked) {
        this.$store.commit("n_all_checked");
      } else {
        this.$store.commit("all_checked");
      }
    },
  },
  created() {},
};
</script>

<style scoped>
.CartBottomBar {
  display: flex;
  height: 40px;
  line-height: 40px;
}
.check-all {
  display: flex;
  width: 100px;
  align-items: center;
}
.check-btn {
  margin: 0 5px;
}
.cacl {
  flex: 1;
}
.toCompute {
  width: 100px;
  background-color: red;
  color: #fff;
}
</style>