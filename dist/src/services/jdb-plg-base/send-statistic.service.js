/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var SendStatisticService = /** @class */ (function () {
    function SendStatisticService() {
        this.emitStatistic = new Subject();
        this.StatisticOutPut$ = this.emitStatistic.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SendStatisticService.prototype.emitStatisticData = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value.length !== 0) {
            this.emitStatistic.next(value);
        }
    };
    SendStatisticService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SendStatisticService.ctorParameters = function () { return []; };
    return SendStatisticService;
}());
export { SendStatisticService };
if (false) {
    /** @type {?} */
    SendStatisticService.prototype.emitStatistic;
    /** @type {?} */
    SendStatisticService.prototype.StatisticOutPut$;
}
//# sourceMappingURL=send-statistic.service.js.map