<template>
  <div class="CartNav">
    <nav-bar>
      <div slot="center">购物车({{ goodsLength_alias }})</div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "CartNav",
  components: {
    navBar,
  },
  methods: {},
  computed: {
    // goodsLength(){
    //   return this.$store.getters.goodsLength
    // }
    
    //两种语法
    // ...mapGetters(["goodsLength"]),

    //可以给getters自定义名字
    ...mapGetters({
      goodsLength_alias: "goodsLength"
    })
  }
};
</script>

<style scoped>
.CartNav {
  background-color: rgb(241, 122, 122);
  color: #fff;
}
</style>

