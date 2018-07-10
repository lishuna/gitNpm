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
var FillTableService = (function () {
    function FillTableService() {
    }
    FillTableService.prototype.fillTable = function (lines, lists, flag) {
        lines = lines || 10;
        lists = lists || [];
        flag = flag || true;
        var aLength = lists.length;
        var mLength = lines - aLength;
        var fillObj = { unShowOpt: flag };
        var keys;
        if (aLength !== 0) {
            lists.forEach(function (element) {
                element.unShowOpt = !flag;
            });
            keys = Object.keys(lists[0]);
            if (keys.length !== 0) {
                keys.forEach(function (element) {
                    if (element !== "unShowOpt") {
                        fillObj[element] = Object.prototype.toString.call(lists[0][element]) == "[object Array]" ? [] : '';
                    }
                });
            }
        }
        if (aLength !== 0 && mLength > 0) {
            for (var i = 0; i < mLength; i++) {
                lists.push(fillObj);
            }
        }
        return lists;
    };
    FillTableService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FillTableService);
    return FillTableService;
}());
exports.FillTableService = FillTableService;
