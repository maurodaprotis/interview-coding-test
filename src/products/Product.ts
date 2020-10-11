export class Product {
  readonly MAX_PRICE: number = 50;
  readonly MIN_PRICE: number = 0;

  name: string;

  sellIn: number;

  _price = 0;

  constructor(name: string, sellIn: number, price: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  get price(): number {
    return this._price;
  }

  set price(p: number) {
    this._price =
      p < this.MIN_PRICE ? this.MIN_PRICE : Math.min(p, this.MAX_PRICE);
  }

  protected substractOneDay(): void {
    this.sellIn = this.sellIn - 1;
  }

  protected isOnSale(): boolean {
    return this.sellIn >= 0;
  }

  public updatePrice(): Product {
    this.substractOneDay();
    this.price = this.isOnSale() ? this.price - 1 : this.price - 2;

    return this;
  }
}
