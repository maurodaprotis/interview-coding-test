"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PeakCoverage_1 = require("./PeakCoverage");
describe('Peak Coverage', function () {
    it('should increase price by one on sale', function () {
        var product = new PeakCoverage_1.PeakCoverage(10, 20);
        product.updatePrice();
        expect(product.price).toEqual(21);
    });
    it('should decrease price by one after sale', function () {
        var product = new PeakCoverage_1.PeakCoverage(0, 20);
        product.updatePrice();
        expect(product.price).toEqual(19);
    });
    it('should decrease sell in by one after update', function () {
        var product = new PeakCoverage_1.PeakCoverage(0, 20);
        product.updatePrice();
        expect(product.sellIn).toEqual(-1);
    });
});
