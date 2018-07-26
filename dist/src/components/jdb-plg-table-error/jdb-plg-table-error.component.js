/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var JdbPlgTableErrorComponent = /** @class */ (function () {
    function JdbPlgTableErrorComponent() {
        /*
            功能：实现表格报错文案水平居中
          */
        this.tableErrorText = '暂无数据';
    }
    /**
     * @return {?}
     */
    JdbPlgTableErrorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    JdbPlgTableErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-table-error',
                    template: "<div class=\"jdb-plg-table-error\"> {{tableErrorText}} </div>",
                    styleUrls: ['./jdb-plg-table-error.component.scss']
                },] },
    ];
    /** @nocollapse */
    JdbPlgTableErrorComponent.ctorParameters = function () { return []; };
    JdbPlgTableErrorComponent.propDecorators = {
        "tableErrorText": [{ type: Input },],
    };
    return JdbPlgTableErrorComponent;
}());
export { JdbPlgTableErrorComponent };
function JdbPlgTableErrorComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    JdbPlgTableErrorComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    JdbPlgTableErrorComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    JdbPlgTableErrorComponent.propDecorators;
    /** @type {?} */
    JdbPlgTableErrorComponent.prototype.tableErrorText;
}
//# sourceMappingURL=jdb-plg-table-error.component.js.map