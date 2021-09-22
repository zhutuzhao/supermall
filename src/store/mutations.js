export default {
  //mutations唯一的目的是为了修改state里面的状态，且能跟踪事件
  //所以mutations里面的方法尽量单一，方便以后调试可以知道具体操作是什么
  //因为下面的是有可能有两种操作，而方法是一个，所以尽量将他拆开
  // addGoods(state, payload) {
  //   // state.goodsCart.push(payload);
  //   let isHave = false;
  //   for (let i in state.goodsCart) {
  //     if (state.goodsCart[i].url == payload.url) {
  //       state.goodsCart[i].count++;
  //       isHave = true;
  //     }
  //   }
  //   if (state.goodsCart.length == 0 || !isHave) {
  //     payload.count = 1;
  //     state.goodsCart.push(payload);
  //   }
  // }
  changeIschecked(state, payload) {
    state.goodsCart[payload].isChecked = !state.goodsCart[payload].isChecked;
  },
  addCount(state, payload) {
    state.goodsCart[payload].count++;
  },
  addToCart(state, payload) {
    payload.count = 1;
    payload.isChecked = true;
    state.goodsCart.push(payload);
  },
  all_checked(state, payload) {
    state.goodsCart.map(item => (item.isChecked = true));
  },
  n_all_checked(state, payload) {
    state.goodsCart.map(item => (item.isChecked = false));
  }
};
