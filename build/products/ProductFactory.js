"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFactory = void 0;
var FullCoverage_1 = require("./FullCoverage");
var MegaCoverage_1 = require("./MegaCoverage");
var SpecialFullCoverage_1 = require("./SpecialFullCoverage");
var SuperSale_1 = require("./SuperSale");
var PeakCoverage_1 = require("./PeakCoverage");
var Product_1 = require("./Product");
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.getInstance = function (_a) {
        var name = _a.name, sellIn = _a.sellIn, price = _a.price;
        switch (name) {
            case 'Mega Coverage':
                return new MegaCoverage_1.MegaCoverage(sellIn);
            case 'Full Coverage':
                return new FullCoverage_1.FullCoverage(sellIn, price);
            case 'Special Full Coverage':
                return new SpecialFullCoverage_1.SpecialFullCoverage(sellIn, price);
            case 'Super Sale':
                return new SuperSale_1.SuperSale(sellIn, price);
            case 'Peak Coverage':
                return new PeakCoverage_1.PeakCoverage(sellIn, price);
            default:
                return new Product_1.Product(name, sellIn, price);
        }
    };
    return ProductFactory;
}());
exports.ProductFactory = ProductFactory;
