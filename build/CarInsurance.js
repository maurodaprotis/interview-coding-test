"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarInsurance = void 0;
var products_1 = require("./products");
var CarInsurance = /** @class */ (function () {
    function CarInsurance(products) {
        if (products === void 0) { products = []; }
        this.products = products.map(products_1.ProductFactory.getInstance);
    }
    CarInsurance.prototype.updatePrice = function () {
        var updatedProducts = this.products.map(function (p) { return p.updatePrice(); });
        this.products = updatedProducts;
        return this.products;
    };
    return CarInsurance;
}());
exports.CarInsurance = CarInsurance;
exports.CarInsurance = CarInsurance;
