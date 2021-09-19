<template>
  <div class="goods-list">
    <goods-list-item v-for="item in GoodsList" :key="item.imgurl" :goodsListItem ="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name:'GoodsList',
  data(){
    return{

    }
  },
  props:{
    GoodsList:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components:{
    GoodsListItem
  },
  methods:{
  }
}
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>