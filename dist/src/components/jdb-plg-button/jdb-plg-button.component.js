/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Renderer2, ElementRef } from '@angular/core';
var JdbPlgButtonComponent = /** @class */ (function () {
    function JdbPlgButtonComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._prefixCls = 'jdb-plg-btn';
        this._el = this._elementRef.nativeElement;
        this.nativeElement = this._elementRef.nativeElement;
        this._renderer.addClass(this._el, this._prefixCls);
    }
    Object.defineProperty(JdbPlgButtonComponent.prototype, "jdbSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                value = 'default';
            }
            this.size = value;
            // this._renderer.addClass(this._el, this.size);
            this._setClassMap(this.loading);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgButtonComponent.prototype, "jdbType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                value = 'primary';
            }
            this.type = value;
            // this._renderer.addClass(this._el, this.type);
            this._setClassMap(this.loading);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgButtonComponent.prototype, "jdbLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this.loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = value === '' || (value && value !== 'false');
            this.loading = value;
            this._setClassMap(this.loading);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} loading
     * @return {?}
     */
    JdbPlgButtonComponent.prototype._setClassMap = /**
     * @param {?} loading
     * @return {?}
     */
    function (loading) {
        this._renderer.removeClass(this._el, 'undefined');
        this._renderer.addClass(this._el, this.size);
        this._renderer.addClass(this._el, this.type);
        if (loading) {
            this._renderer.addClass(this._el, 'loading_disable');
        }
        else {
            this._renderer.removeClass(this._el, 'loading_disable');
        }
    };
    /**
     * @return {?}
     */
    JdbPlgButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    JdbPlgButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: '[app-jdb-plg-button]',
                    template: "<i class=\"jdb-icon-loading action\" *ngIf=\"loading\"></i> <ng-content></ng-content>",
                    styleUrls: ['./jdb-plg-button.component.scss']
                },] },
    ];
    /** @nocollapse */
    JdbPlgButtonComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    JdbPlgButtonComponent.propDecorators = {
        "jdbSize": [{ type: Input },],
        "jdbType": [{ type: Input },],
        "jdbLoading": [{ type: Input },],
    };
    return JdbPlgButtonComponent;
}());
export { JdbPlgButtonComponent };
function JdbPlgButtonComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    JdbPlgButtonComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    JdbPlgButtonComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    JdbPlgButtonComponent.propDecorators;
    /** @type {?} */
    JdbPlgButtonComponent.prototype._el;
    /** @type {?} */
    JdbPlgButtonComponent.prototype.nativeElement;
    /** @type {?} */
    JdbPlgButtonComponent.prototype._prefixCls;
    /** @type {?} */
    JdbPlgButtonComponent.prototype.size;
    /** @type {?} */
    JdbPlgButtonComponent.prototype.type;
    /** @type {?} */
    JdbPlgButtonComponent.prototype.loading;
    /** @type {?} */
    JdbPlgButtonComponent.prototype._elementRef;
    /** @type {?} */
    JdbPlgButtonComponent.prototype._renderer;
}
//# sourceMappingURL=jdb-plg-button.component.js.map