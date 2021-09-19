<template>
  <div class="goods-list-item" @click="goodClick">
    <img :src="goodsListItem.imgurl" alt="" @load="imgOnload">
    <div class="goods-info">
      <p>{{goodsListItem.imgurl}}</p>
      <span class="price">12</span><span>**34</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    goodsListItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgOnload(){
      this.$bus.$emit('imgOnload')
    },
    goodClick(){
      // console.log('跳转');
      this.$router.push('/Detail/'+this.goodsListItem.imgurl.substring(25,30))
    }
  }
}
</script>

<style scoped>
.goods-list-item{
  width: 48%;
  
}

.goods-list-item img{
  width: 100%;
  border-radius: 10px;
}
.goods-info {
  text-align: center;
}

.goods-info p{
  /* width: 100%; */
  height: 20px; 
  line-height: 20px;
  /* word-wrap: ; */
  text-overflow: ellipsis;
  overflow: hidden;
}

.goods-info span{
  margin: 0 5px;
}
.goods-info .price{
  /* margin: 0 5px; */
  color: var(--color-high-text);
}
</style>