<template>
  <div>
    <swiper class="HomeSwiper">
      <swiper-item v-for="item in banners" :key="item.imgurl">
        <a :href="item.imgurl">
          <img v-lazy="item.imgurl" alt="" @load="imgLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name:'HomeSwiper',
  props:{
    banners:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components:{
    Swiper, SwiperItem
  },
  methods:{
    imgLoad(){
      this.$emit('imgLoad')
    }
  }
};
</script>

<style scoped>

</style>