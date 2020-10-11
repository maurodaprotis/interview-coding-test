import { Product } from './Product';

export class SpecialFullCoverage extends Product {
  constructor(sellIn: number, price: number) {
    super(`Special Full Coverage`, sellIn, price);
  }

  private getPriceIncrement(): number {
    if (this.sellIn >= 10) {
      return 1;
    }
    if (this.sellIn < 10 && this.sellIn >= 5) {
      return 2;
    }
    return 3;
  }

  updatePrice(): SpecialFullCoverage {
    this.substractOneDay();
    this.price = this.isOnSale()
      ? this.price + this.getPriceIncrement()
      : this.MIN_PRICE;

    return this;
  }
}
