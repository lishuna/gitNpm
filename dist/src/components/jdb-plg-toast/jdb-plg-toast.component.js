/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var JdbPlgToastComponent = /** @class */ (function () {
    function JdbPlgToastComponent() {
        this.msg = "";
    }
    /**
     * @return {?}
     */
    JdbPlgToastComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    JdbPlgToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-toast',
                    template: "<div class=\"toast-wraper\" [innerHtml]=\"msg\"> </div> ",
                },] },
    ];
    /** @nocollapse */
    JdbPlgToastComponent.ctorParameters = function () { return []; };
    JdbPlgToastComponent.propDecorators = {
        msg: [{ type: Input }]
    };
    return JdbPlgToastComponent;
}());
export { JdbPlgToastComponent };
if (false) {
    /** @type {?} */
    JdbPlgToastComponent.prototype.msg;
}
//# sourceMappingURL=jdb-plg-toast.component.js.map