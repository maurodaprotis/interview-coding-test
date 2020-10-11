"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe('ProductFactory', function () {
    it('should instantiate default product', function () {
        var instance = index_1.ProductFactory.getInstance(new index_1.Product('Medium Coverage', 10, 10));
        expect(instance).toBeInstanceOf(index_1.Product);
    });
    it('should instantiate Mega Coverage product', function () {
        var instance = index_1.ProductFactory.getInstance(new index_1.Product('Mega Coverage', 10, 10));
        expect(instance).toBeInstanceOf(index_1.MegaCoverage);
    });
    it('should instantiate Full Coverage product', function () {
        var instance = index_1.ProductFactory.getInstance(new index_1.Product('Full Coverage', 10, 10));
        expect(instance).toBeInstanceOf(index_1.FullCoverage);
    });
    it('should instantiate Special Full Coverage product', function () {
        var instance = index_1.ProductFactory.getInstance(new index_1.Product('Special Full Coverage', 10, 10));
        expect(instance).toBeInstanceOf(index_1.SpecialFullCoverage);
    });
    it('should instantiate Super Sale product', function () {
        var instance = index_1.ProductFactory.getInstance(new index_1.Product('Super Sale', 10, 10));
        expect(instance).toBeInstanceOf(index_1.SuperSale);
    });
    it('should instantiate Peak Coverage product', function () {
        var instance = index_1.ProductFactory.getInstance(new index_1.Product('Peak Coverage', 10, 10));
        expect(instance).toBeInstanceOf(index_1.PeakCoverage);
    });
});
