import {
  Product,
  MegaCoverage,
  FullCoverage,
  SpecialFullCoverage,
  SuperSale,
  PeakCoverage,
  ProductFactory,
} from './index';

describe('ProductFactory', () => {
  it('should instantiate default product', () => {
    const instance = ProductFactory.getInstance(
      new Product('Medium Coverage', 10, 10)
    );

    expect(instance).toBeInstanceOf(Product);
  });
  it('should instantiate Mega Coverage product', () => {
    const instance = ProductFactory.getInstance(
      new Product('Mega Coverage', 10, 10)
    );

    expect(instance).toBeInstanceOf(MegaCoverage);
  });
  it('should instantiate Full Coverage product', () => {
    const instance = ProductFactory.getInstance(
      new Product('Full Coverage', 10, 10)
    );

    expect(instance).toBeInstanceOf(FullCoverage);
  });
  it('should instantiate Special Full Coverage product', () => {
    const instance = ProductFactory.getInstance(
      new Product('Special Full Coverage', 10, 10)
    );

    expect(instance).toBeInstanceOf(SpecialFullCoverage);
  });
  it('should instantiate Super Sale product', () => {
    const instance = ProductFactory.getInstance(
      new Product('Super Sale', 10, 10)
    );

    expect(instance).toBeInstanceOf(SuperSale);
  });
  it('should instantiate Peak Coverage product', () => {
    const instance = ProductFactory.getInstance(
      new Product('Peak Coverage', 10, 10)
    );

    expect(instance).toBeInstanceOf(PeakCoverage);
  });
});
