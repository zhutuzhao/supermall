export function debounce(func, delay) {
  let timer = null; //设置初始值为null
  return function(...args) {
    //返回一个新的函数
    if (timer) clearTimeout(timer); //每次调用这个函数，都会去判断是否还有timer，有(之前的没执行)就取消掉
    timer = setTimeout(() => {
      //设置定时器，到一定时间就执行需要防抖执行的函数
      func.apply(this, args);
    }, delay);
  };
}
