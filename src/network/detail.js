export class good {
  constructor(title, prices, o_info) {
    this.title = title;
    this.prices = prices;
    this.o_info = o_info;
  }
}

export class shop {
  constructor(s_info, sells, to_shop) {
    this.s_info = s_info;
    this.sells = sells;
    this.to_shop = to_shop;
  }
}
