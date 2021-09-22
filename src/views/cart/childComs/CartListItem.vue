<template>
  <div class="CartListItem">
    <div class="item-selector">
      <CheckButton :isChecked="good.isChecked" @click.native="checkClick" />
    </div>
    <div class="item-img">
      <img :src="good.img.imgurl" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ good.title.title }}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{ good.price }}</div>
        <div class="item-count right">x{{ good.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
export default {
  name: "CartListItem",
  props: {
    good: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
      default: null,
    },
  },
  components: { CheckButton },
  methods: {
    checkClick() {
      this.$store.commit("changeIschecked", this.index);
    },
  },
};
</script>

<style scoped>
.CartListItem {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>