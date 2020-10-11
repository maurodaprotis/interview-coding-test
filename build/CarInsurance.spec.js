"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarInsurance_1 = require("./CarInsurance");
var products_1 = require("./products");
describe('CarInsurance', function () {
    it('should return an empty array on update without products', function () {
        var carInsurance = new CarInsurance_1.CarInsurance();
        var products = carInsurance.updatePrice();
        expect(products.length).toEqual(0);
    });
    it('should update provided products', function () {
        var carInsurance = new CarInsurance_1.CarInsurance([
            new products_1.Product('Low Coverage', 10, 10),
        ]);
        var products = carInsurance.updatePrice();
        expect(products.length).toEqual(1);
        expect(products[0].price).toEqual(9);
        expect(products[0].sellIn).toEqual(9);
    });
});
