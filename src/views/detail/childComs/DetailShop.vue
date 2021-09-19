<template>
  <div class="detail-shop">
    <div class="s_info">
      <img :src="this.shop.s_info.url" alt="" /><span>{{
        this.shop.s_info.url.substring(25, 30)
      }}</span>
    </div>
    <div class="sells">
      <div class="left">
        <span>{{ this.shop.sells.total_sell }}</span>
        <span>{{ this.shop.sells.total_goods }}</span>
      </div>
      <div class="right">
        <div>{{ this.shop.sells.introduce_pef }}</div>
        <div>{{ this.shop.sells.price_pef }}</div>
        <div>{{ this.shop.sells.quality_pef }}</div>
      </div>
    </div>
    <button class="to_shop" :key="this.shop.to_shop.url">去该店铺</button>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    // console.log(this.shop);
  },
};
</script>

<style scoped>
.detail-shop {
  border-bottom: 5px solid #eee;
}
.s_info img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.s_info span {
  position: relative;
  bottom: 20px;
  left: 20px;
  color: #000;
  font-size: 18px;
}
.sells {
  display: flex;
  height: 60px;
  line-height: 60px;
}
.left,
.right {
  flex: 1;
  font-size: 20px;
  text-align: center;
}
.right{
    line-height: 20px;
}
.to_shop{
    /* position: ; */
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 5px;
}
</style>