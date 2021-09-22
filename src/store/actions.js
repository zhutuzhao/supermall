export default {
  addGoods({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      let isHave = false;
      for (let i in state.goodsCart) {
        if (state.goodsCart[i].url == payload.url) {
          commit("addCount", i);
          isHave = true;
          resolve("addCount");
        }
      }
      if (state.goodsCart.length == 0 || !isHave) {
        commit("addToCart", payload);
        resolve("addToCart");
      }
    });
  }
};
