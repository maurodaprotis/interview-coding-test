"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SuperSale_1 = require("./SuperSale");
describe('Super Sale', function () {
    it('should decrease price by two on sale', function () {
        var product = new SuperSale_1.SuperSale(10, 20);
        product.updatePrice();
        expect(product.price).toEqual(18);
    });
    it('should decrease price by two after sale', function () {
        var product = new SuperSale_1.SuperSale(0, 20);
        product.updatePrice();
        expect(product.price).toEqual(16);
    });
    it('should decrease sell in by one after update', function () {
        var product = new SuperSale_1.SuperSale(0, 20);
        product.updatePrice();
        expect(product.sellIn).toEqual(-1);
    });
});
