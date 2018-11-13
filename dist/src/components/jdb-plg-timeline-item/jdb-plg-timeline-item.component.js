/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var JdbPlgTimelineItemComponent = /** @class */ (function () {
    function JdbPlgTimelineItemComponent() {
        this.optTime = 0;
    }
    Object.defineProperty(JdbPlgTimelineItemComponent.prototype, "timeNum", {
        get: /**
         * @return {?}
         */
        function () {
            return this.optTime;
        },
        set: /**
         * @param {?} time
         * @return {?}
         */
        function (time) {
            if (!time) {
                time = 0;
            }
            this.optTime = time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgTimelineItemComponent.prototype, "lastItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isLast;
        },
        set: /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this.isLast = item;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    JdbPlgTimelineItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    JdbPlgTimelineItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-timeline-item',
                    template: "<div class=\"timeline-item\"> <div class=\"timeline-item-tail\" [ngClass]=\"{'timeline-item-tail-last': isLast}\"></div> <div class=\"timeline-item-circle\"></div> <div class=\"timeline-item-content\"> <div class=\"timeline-cardBox\" [ngStyle]=\"{'width': cardBoxWidth,'background': cardBgc}\"> <div class=\"timeline-arrow\"> <em></em> <span [ngStyle]=\"{'border-right-color': cardBgc}\"></span> </div> <ng-content></ng-content> </div> <p [ngStyle]=\"{'width': cardBoxWidth}\" class=\"timeline-buttom_time\" *ngIf=\"optTime\">{{optTime*1000 | date: \"y-MM-dd HH:mm:ss\"}}</p> </div> </div>",
                },] },
    ];
    /** @nocollapse */
    JdbPlgTimelineItemComponent.ctorParameters = function () { return []; };
    JdbPlgTimelineItemComponent.propDecorators = {
        "cardBoxWidth": [{ type: Input },],
        "cardBgc": [{ type: Input },],
        "timeNum": [{ type: Input },],
        "lastItem": [{ type: Input },],
    };
    return JdbPlgTimelineItemComponent;
}());
export { JdbPlgTimelineItemComponent };
function JdbPlgTimelineItemComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    JdbPlgTimelineItemComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    JdbPlgTimelineItemComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    JdbPlgTimelineItemComponent.propDecorators;
    /** @type {?} */
    JdbPlgTimelineItemComponent.prototype.isLast;
    /** @type {?} */
    JdbPlgTimelineItemComponent.prototype.optTime;
    /** @type {?} */
    JdbPlgTimelineItemComponent.prototype.cardBoxWidth;
    /** @type {?} */
    JdbPlgTimelineItemComponent.prototype.cardBgc;
}
//# sourceMappingURL=jdb-plg-timeline-item.component.js.map