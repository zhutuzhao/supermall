<template>
  <div class="detail-goods-info">
    <img
      class="info-img"
      v-for="item in goodsInfo"
      :key="item.imgurl"
      :src="item.imgurl"
      alt=""
      @load="infoImgLoad"
    />
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {
  },
  methods: {
    infoImgLoad() {
      this.$emit('infoImgLoad')
    },
  },
};
</script>

<style scoped>
.info-img {
  width: 100%;
}
</style>