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
exports.FullCoverage = void 0;
var Product_1 = require("./Product");
var FullCoverage = /** @class */ (function (_super) {
    __extends(FullCoverage, _super);
    function FullCoverage(sellIn, price) {
        return _super.call(this, "Full Coverage", sellIn, price) || this;
    }
    FullCoverage.prototype.updatePrice = function () {
        this.substractOneDay();
        this.price = this.isOnSale() ? this.price + 1 : this.price + 2;
        return this;
    };
    return FullCoverage;
}(Product_1.Product));
exports.FullCoverage = FullCoverage;
exports.FullCoverage = FullCoverage;
