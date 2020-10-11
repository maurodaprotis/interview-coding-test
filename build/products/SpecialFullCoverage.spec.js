"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("../../src/products");
describe('Special Full Coverage', function () {
    it('should increase price by one when more than or ten of sale left', function () {
        var product = new products_1.SpecialFullCoverage(11, 20);
        product.updatePrice();
        expect(product.price).toEqual(21);
    });
    it('should increase price by two when between ten and five days of sale left', function () {
        var product = new products_1.SpecialFullCoverage(10, 20);
        product.updatePrice();
        expect(product.price).toEqual(22);
    });
    it('should increase price by one when less than 5 of sale left', function () {
        var product = new products_1.SpecialFullCoverage(1, 20);
        product.updatePrice();
        expect(product.price).toEqual(23);
    });
    it('should drop price after sale', function () {
        var product = new products_1.SpecialFullCoverage(0, 20);
        product.updatePrice();
        expect(product.price).toEqual(0);
    });
    it('should decrease sell in by one after update', function () {
        var product = new products_1.SpecialFullCoverage(0, 20);
        product.updatePrice();
        expect(product.sellIn).toEqual(-1);
    });
});
