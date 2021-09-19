<template>
  <div class="detail-good">
    <h3 class="title">{{ this.good.title.title }}</h3>
    <div class="price">
      <span class="n_price">{{ "￥" + this.good.prices.n_price }}</span>
      <span class="o_price">{{ "￥" + this.good.prices.o_price }}</span>
      <span class="activities">{{ this.good.prices.activities }}</span>
    </div>
    <div class="o_info">
        <div class="sells">{{'销量' + this.good.o_info.sells}}</div>
        <div class="collect">{{'收藏' + this.good.o_info.collect}}</div>
        <div class="time">{{this.good.o_info.time + '小时到货'}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGood",
  props: {
    good: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    // console.log(this.good);
  },
};
</script>

<style scoped>
.detail-good{
  border-bottom: 5px solid #eee;
}
.title {
  text-indent: 8px;
  font-size: 16px;
  font-weight: 500;
  color: black;
}
.price{
    margin: 10px 0;
}
.price span{
    margin-right: 10px;
}
.n_price {
  font-size: 30px;
  color: red;
}
.o_price {
  text-decoration-line: line-through;
}
.o_info{
    display: flex;
}

.o_info div{
    flex: 1;
    text-align: center;
}
</style>