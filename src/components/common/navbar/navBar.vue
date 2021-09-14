<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>

export default {
  name: "navBar",
  components: {
    
  },
};
</script>
<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 44px;
  line-height: 44px;
  z-index: 999;
}
.left,.right {
  width: 60px;
}
.center {
  flex: 1;
  text-align: center;
}
</style>