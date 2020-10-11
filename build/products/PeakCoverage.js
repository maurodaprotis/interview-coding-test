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
exports.PeakCoverage = void 0;
var Product_1 = require("./Product");
/*
 * Peak Coverage would increase the price until sellIns date approaches
 * and after that would decrease it's price
 */
var PeakCoverage = /** @class */ (function (_super) {
    __extends(PeakCoverage, _super);
    function PeakCoverage(sellIn, price) {
        return _super.call(this, "Peak Coverage", sellIn, price) || this;
    }
    PeakCoverage.prototype.updatePrice = function () {
        this.substractOneDay();
        this.price = this.isOnSale() ? this.price + 1 : this.price - 1;
        return this;
    };
    return PeakCoverage;
}(Product_1.Product));
exports.PeakCoverage = PeakCoverage;
exports.PeakCoverage = PeakCoverage;
