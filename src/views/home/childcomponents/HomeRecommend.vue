<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommend" :key="item.imgurl">
      <a :href="item.imgurl">
        <img v-lazy="item.imgurl" alt="" />
        <div>{{ index }}</div></a>
    </div>
  </div>
</template>

<script>
import {getHomeRecommend} from "network/home"
export default {
  name: "HomeRecommend",
  data(){
    return{
      recommend:[]
    }
  },
  created(){
    getHomeRecommend().then(res=>{
      this.recommend = res.data.data
    })
  }
};
</script>

<style scoped>
.recommend{
  display: flex;
  border-bottom: 5px solid #eee;
}
.recommend-item{
  flex: 1;
  text-align: center;
}
.recommend-item img{
  width: 70px;
  height: 70px;
  margin: 10px 0;
  border-radius: 50%;
}
</style>