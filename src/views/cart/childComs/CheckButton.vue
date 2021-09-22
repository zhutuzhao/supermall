<template>
  <div>
    <div class="icon-selector" :class="{ 'selector-active': isChecked }">
      <div class="fake_img"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  data() {
    return {
      // checked:false
    };
  },
  props: {
    isChecked: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.icon-selector {
  position: relative;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}

.selector-active {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>
