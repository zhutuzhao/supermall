<template>
  <div ref="wrapper" class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "BetterScroll",
  data() {
    return {
      bs: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    setTimeout(() => {
      this.bs = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad,
      });
      this.bs.on("scroll", (option) => {
        this.$emit("scroll", option);
      });
      this.bs.on("pullingUp", () => {
        this.$emit("pullingUp");
        setTimeout(() => {
          this.bs.finishPullUp();
        }, 2000);
      });
    }, 1000);
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.bs&&this.bs.scrollTo(x, y, time);
    },
    refresh(){
      this.bs&&this.bs.refresh();
    }
  },
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>