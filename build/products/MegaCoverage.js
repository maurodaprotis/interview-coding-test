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
exports.MegaCoverage = void 0;
var Product_1 = require("./Product");
var MegaCoverage = /** @class */ (function (_super) {
    __extends(MegaCoverage, _super);
    function MegaCoverage(sellIn) {
        return _super.call(this, "Mega Coverage", sellIn, MegaCoverage.FIXED_PRICE) || this;
    }
    Object.defineProperty(MegaCoverage.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (_) {
            this._price = MegaCoverage.FIXED_PRICE;
        },
        enumerable: false,
        configurable: true
    });
    MegaCoverage.prototype.updatePrice = function () {
        return this;
    };
    MegaCoverage.FIXED_PRICE = 80;
    return MegaCoverage;
}(Product_1.Product));
exports.MegaCoverage = MegaCoverage;
exports.MegaCoverage = MegaCoverage;
