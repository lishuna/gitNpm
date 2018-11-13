/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var FillTableService = /** @class */ (function () {
    function FillTableService() {
    }
    /*
        lines:number  表格展示的行数
        lists:Array<any>  异步获取的数据
        flag:boolean  是否在空白行栏展示操作按钮,默认取unShowOpt字段
    */
    /**
     * @param {?} lines
     * @param {?} lists
     * @param {?=} flag
     * @return {?}
     */
    FillTableService.prototype.fillTable = /**
     * @param {?} lines
     * @param {?} lists
     * @param {?=} flag
     * @return {?}
     */
    function (lines, lists, flag) {
        lines = lines || 10;
        lists = lists || [];
        flag = flag || true;
        /** @type {?} */
        var aLength = lists.length;
        /** @type {?} */
        var mLength = lines - aLength;
        /** @type {?} */
        var fillObj = { unShowOpt: flag };
        /** @type {?} */
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
    FillTableService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FillTableService.ctorParameters = function () { return []; };
    return FillTableService;
}());
export { FillTableService };
//# sourceMappingURL=fill-table.service.js.map