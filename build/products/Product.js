"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, sellIn, price) {
        this.MAX_PRICE = 50;
        this.MIN_PRICE = 0;
        this._price = 0;
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (p) {
            this._price =
                p < this.MIN_PRICE ? this.MIN_PRICE : Math.min(p, this.MAX_PRICE);
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.substractOneDay = function () {
        this.sellIn = this.sellIn - 1;
    };
    Product.prototype.isOnSale = function () {
        return this.sellIn >= 0;
    };
    Product.prototype.updatePrice = function () {
        this.substractOneDay();
        this.price = this.isOnSale() ? this.price - 1 : this.price - 2;
        return this;
    };
    return Product;
}());
exports.Product = Product;
exports.Product = Product;
