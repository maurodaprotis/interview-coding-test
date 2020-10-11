"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MegaCoverage_1 = require("./MegaCoverage");
describe('Mega Coverage', function () {
    it('should always have price at eighty', function () {
        var product = new MegaCoverage_1.MegaCoverage(10);
        expect(product.price).toEqual(80);
    });
    it('should not alter the price after update', function () {
        var product = new MegaCoverage_1.MegaCoverage(0);
        product.updatePrice();
        expect(product.price).toEqual(80);
    });
    it('should not decrement sell in after update', function () {
        var product = new MegaCoverage_1.MegaCoverage(0);
        product.updatePrice();
        expect(product.sellIn).toEqual(0);
    });
});
