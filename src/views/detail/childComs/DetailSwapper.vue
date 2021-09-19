<template>
    <swiper class="detail-swiper">
        <swiper-item v-for="item in topImg" :key="item.ingurl">
            <img :src="item.imgurl" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'
export default {
    name:"DetailSwapper",
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImg:{
            type:Array,
            default(){
                return []
            }
        }
    },
    
}
</script>

<style scoped>
.detail-swiper{
    height: 300px;
}
</style>