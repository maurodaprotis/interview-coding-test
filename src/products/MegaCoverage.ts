import { Product } from './Product';

export class MegaCoverage extends Product {
  private static FIXED_PRICE = 80;
  constructor(sellIn: number) {
    super(`Mega Coverage`, sellIn, MegaCoverage.FIXED_PRICE);
  }

  set price(_: number) {
    this._price = MegaCoverage.FIXED_PRICE;
  }

  get price(): number {
    return this._price;
  }

  updatePrice(): MegaCoverage {
    return this;
  }
}
