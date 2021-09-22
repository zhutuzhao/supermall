import { debounce } from "./utils";
import BackTop from "components/content/backTop/BackTop.vue";

export const imgOnloadListener = {
  data() {
    return {
      refresh_w: null
    };
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 3000);
    this.refresh_w = () => {
      refresh();
      console.log("imgOnloadOn");
    };
  }
};
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowTop: false
    };
  },
  methods: {
    topClick() {
      this.$refs.scroll.scrollTo(0, 0, 800);
    }
  }
};
