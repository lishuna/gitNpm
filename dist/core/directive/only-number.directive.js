"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OnlyNumberDirective = (function () {
    function OnlyNumberDirective(el) {
        this.el = el;
        this.regexStr = '^[0-9]*$';
    }
    OnlyNumberDirective.prototype.onKeyDown = function (event) {
        var e = event;
        if (this.appOnlyNumber) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                (e.keyCode === 65 && e.ctrlKey === true) ||
                (e.keyCode === 67 && e.ctrlKey === true) ||
                (e.keyCode === 86 && e.ctrlKey === true) ||
                (e.keyCode === 88 && e.ctrlKey === true) ||
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                return;
            }
            var ch = String.fromCharCode(e.keyCode);
            var regEx = new RegExp(this.regexStr);
            if (regEx.test(ch)) {
                return;
            }
            else {
                e.preventDefault();
            }
        }
    };
    OnlyNumberDirective.prototype.onKeyUp = function (event) {
        this.el.nativeElement.value = this.el.nativeElement.value.replace(/\D/g, '');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], OnlyNumberDirective.prototype, "appOnlyNumber", void 0);
    __decorate([
        core_1.HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OnlyNumberDirective.prototype, "onKeyDown", null);
    __decorate([
        core_1.HostListener('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OnlyNumberDirective.prototype, "onKeyUp", null);
    OnlyNumberDirective = __decorate([
        core_1.Directive({
            selector: '[appOnlyNumber]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], OnlyNumberDirective);
    return OnlyNumberDirective;
}());
exports.OnlyNumberDirective = OnlyNumberDirective;
//# sourceMappingURL=only-number.directive.js.map