<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: "TabBar",
  components: {
    
  },
};
</script>
<style scoped>
.tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0px -2px 3px rgba(100, 100, 100, 0.08);
}
</style>