<template>
  <goods-list :GoodsList = "recommend">
    <goods-list-item />
  </goods-list>
</template>

<script>
import GoodsList from "components/content/goodsList/GoodsList.vue";
import GoodsListItem from "components/content/goodsList/GoodsListItem.vue";

export default {
  components: { GoodsList, GoodsListItem },
  name: "DetailGoodsList",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>


<style scoped>
</style>