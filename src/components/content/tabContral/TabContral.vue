<template>
  <div class="TabContral">
    <div
      class="item-contral"
      v-for="(item, index) in titles"
      :class="{ active: index == currentIndex }"
      :key="item"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContral",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.$emit("tabClick",index);
    },
  },
};
</script>

<style scoped>
.TabContral {
  display: flex;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #fff;
}
.TabContral .item-contral {
  flex: 1;
}
.TabContral .active {
  color: var(--color-high-text);
}
.TabContral .active span {
  padding: 3px;
  border-bottom: 2px solid var(--color-high-text);
}
</style>