<template>
    <div class="DetailBottomBar">
        <div class="bar_left">
            <div class="left_item">客服</div>
            <div class="left_item">店铺</div>
            <div class="left_item">收藏</div>
        </div>
        <div class="bar_right">
            <div class="right_item" @click="addClick">加入购物车</div>
            <div class="right_item">购买</div>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailBottomBar",
    methods:{
        addClick(){
            // console.log('addClick');
            this.$emit('addClick')
        }
    }
}
</script>

<style scoped>
.DetailBottomBar{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    height: 49px;
    text-align: center;
    line-height: 49px;
    /* color: ; */
    font-size: 18px;
    font-weight: 600;
    background-color: #fff;
    z-index: 1000;
}
.bar_left,.bar_right{
    display: flex;
    flex: 1;
}
.left_item,.right_item{
    flex: 1;
}
.right_item:first-child{
    background-color: rgb(248, 248, 62);
}
.right_item:last-child{
    background-color: rgb(231, 82, 82);
}
</style>