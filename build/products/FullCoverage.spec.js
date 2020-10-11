"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FullCoverage_1 = require("./FullCoverage");
describe('Full Coverage', function () {
    it('should increase price by one on sale', function () {
        var product = new FullCoverage_1.FullCoverage(10, 20);
        product.updatePrice();
        expect(product.price).toEqual(21);
    });
    it('should increase price by two after sale', function () {
        var product = new FullCoverage_1.FullCoverage(0, 20);
        product.updatePrice();
        expect(product.price).toEqual(22);
    });
    it('should decrease sell in by one after update', function () {
        var product = new FullCoverage_1.FullCoverage(0, 20);
        product.updatePrice();
        expect(product.sellIn).toEqual(-1);
    });
});
