<template>
  <div id="toast" v-show="isShow">{{ message }}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(mess, delayer) {
      this.message = mess;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, delayer);
    },
  },
};
</script>

<style scoped>
#toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 20px;
  height: 40px;
  line-height: 30px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  z-index: 999;
}
</style>