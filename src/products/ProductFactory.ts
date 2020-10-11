import { FullCoverage } from './FullCoverage';
import { MegaCoverage } from './MegaCoverage';
import { SpecialFullCoverage } from './SpecialFullCoverage';
import { SuperSale } from './SuperSale';
import { PeakCoverage } from './PeakCoverage';
import { Product } from './Product';

export class ProductFactory {
  static getInstance({
    name,
    sellIn,
    price,
  }: {
    name: string;
    sellIn: number;
    price: number;
  }): Product {
    switch (name) {
      case 'Mega Coverage':
        return new MegaCoverage(sellIn);
      case 'Full Coverage':
        return new FullCoverage(sellIn, price);
      case 'Special Full Coverage':
        return new SpecialFullCoverage(sellIn, price);
      case 'Super Sale':
        return new SuperSale(sellIn, price);
      case 'Peak Coverage':
        return new PeakCoverage(sellIn, price);
      default:
        return new Product(name, sellIn, price);
    }
  }
}
