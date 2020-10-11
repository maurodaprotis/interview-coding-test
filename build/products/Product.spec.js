"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
describe('Product', function () {
    it('should max price at fifty', function () {
        var product = new Product_1.Product('Product', 10, 100);
        expect(product.price).toEqual(50);
    });
    it('should min price at zero', function () {
        var product = new Product_1.Product('Product', 10, -100);
        expect(product.price).toEqual(0);
    });
    it('should decrease price by one on sale', function () {
        var product = new Product_1.Product('Product', 1, 20);
        product.updatePrice();
        expect(product.price).toEqual(19);
    });
    it('should decrease price by two after sale', function () {
        var product = new Product_1.Product('Product', 0, 20);
        product.updatePrice();
        expect(product.price).toEqual(18);
    });
    it('should decrease sell in by one after update', function () {
        var product = new Product_1.Product('Product', 0, 20);
        product.updatePrice();
        expect(product.sellIn).toEqual(-1);
    });
});
