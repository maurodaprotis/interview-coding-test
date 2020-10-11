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
exports.SuperSale = void 0;
var Product_1 = require("./Product");
var SuperSale = /** @class */ (function (_super) {
    __extends(SuperSale, _super);
    function SuperSale(sellIn, price) {
        return _super.call(this, "Super Sale", sellIn, price) || this;
    }
    SuperSale.prototype.updatePrice = function () {
        this.substractOneDay();
        this.price = this.isOnSale() ? this.price - 2 : this.price - 4;
        return this;
    };
    return SuperSale;
}(Product_1.Product));
exports.SuperSale = SuperSale;
exports.SuperSale = SuperSale;
