"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AmountReformPipe = (function () {
    function AmountReformPipe() {
    }
    AmountReformPipe.prototype.transform = function (val) {
        if (val === 0) {
            return '0.00';
        }
        if (!val) {
            return '';
        }
        return (val / 100).toFixed(2);
    };
    AmountReformPipe = __decorate([
        core_1.Pipe({ name: 'amountReformPipe' })
    ], AmountReformPipe);
    return AmountReformPipe;
}());
exports.AmountReformPipe = AmountReformPipe;
//# sourceMappingURL=amount-reform.pipe.js.map