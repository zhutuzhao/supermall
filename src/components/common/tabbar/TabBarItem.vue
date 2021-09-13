<template>
  <div @click="btnClick" class="tabbaritem">
    <div v-if="!isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <div :class="{ active: isActive }" :style="[ activeStyle ]">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  components: {},
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'#ff5777'
    }
  },
  data() {
    return {
      // isActive: false,
      // path:'/About'
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive ?{color:this.activeColor} :{}
    }
  },
  methods: {
    btnClick() {
      this.$router.push(this.path);
    },
  },
};
</script>
<style>
.tabbaritem {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabbaritem img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active {
  color: #ff5777;
} */
</style>