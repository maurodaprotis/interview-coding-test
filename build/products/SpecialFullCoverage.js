"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialFullCoverage = void 0;
var Product_1 = require("./Product");
var SpecialFullCoverage = /** @class */ (function (_super) {
    __extends(SpecialFullCoverage, _super);
    function SpecialFullCoverage(sellIn, price) {
        return _super.call(this, "Special Full Coverage", sellIn, price) || this;
    }
    SpecialFullCoverage.prototype.getPriceIncrement = function () {
        if (this.sellIn >= 10) {
            return 1;
        }
        if (this.sellIn < 10 && this.sellIn >= 5) {
            return 2;
        }
        return 3;
    };
    SpecialFullCoverage.prototype.updatePrice = function () {
        this.substractOneDay();
        this.price = this.isOnSale()
            ? this.price + this.getPriceIncrement()
            : this.MIN_PRICE;
        return this;
    };
    return SpecialFullCoverage;
}(Product_1.Product));
exports.SpecialFullCoverage = SpecialFullCoverage;
exports.SpecialFullCoverage = SpecialFullCoverage;
