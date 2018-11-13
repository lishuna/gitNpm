/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, forwardRef, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var JdbPlgSwitchComponent = /** @class */ (function () {
    function JdbPlgSwitchComponent() {
        this.checked = false;
        this.prefixCls = 'jdb-switch';
        this._jdbLoading = false;
        this._jdbDisabled = false;
        this._jdbControl = false;
        this._jdbSize = 'default';
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
    }
    Object.defineProperty(JdbPlgSwitchComponent.prototype, "jdbCheckedText", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbCheckedText;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbCheckedText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSwitchComponent.prototype, "jdbUncheckedText", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbUncheckedText;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbUncheckedText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSwitchComponent.prototype, "jdbLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbLoading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbLoading = Boolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSwitchComponent.prototype, "jdbDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbDisabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbDisabled = Boolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSwitchComponent.prototype, "jdbSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbSize = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSwitchComponent.prototype, "jdbControl", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbControl;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbControl = Boolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} ev
     * @return {?}
     */
    JdbPlgSwitchComponent.prototype.onClick = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (!this.jdbDisabled && !this.jdbLoading && !this.jdbControl) {
            this.updateSwitchStatus(!this.checked, true);
        }
    };
    /**
     * 更新开关状态
     * @param {boolean} value
     * @param {boolean} isEmit
     */
    /**
     * 更新开关状态
     * @param {?} value
     * @param {?} isEmit
     * @return {?}
     */
    JdbPlgSwitchComponent.prototype.updateSwitchStatus = /**
     * 更新开关状态
     * @param {?} value
     * @param {?} isEmit
     * @return {?}
     */
    function (value, isEmit) {
        if (this.checked === value) {
            return;
        }
        this.checked = value;
        this.setClassMap();
        if (isEmit) {
            this.onChange(this.checked);
        }
    };
    /**
     * @return {?}
     */
    JdbPlgSwitchComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.outBoxClass = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-checked"] = this.checked,
            _a[this.prefixCls + "-loading"] = this.jdbLoading,
            _a[this.prefixCls + "-disabled"] = this.jdbDisabled,
            _a[this.prefixCls + "-small"] = this.jdbSize === 'small',
            _a);
    };
    // 实现ControlValueAccessor接口方法
    /**
     * @param {?} value
     * @return {?}
     */
    JdbPlgSwitchComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.updateSwitchStatus(value, false);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    JdbPlgSwitchComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    JdbPlgSwitchComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    JdbPlgSwitchComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.jdbDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    JdbPlgSwitchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    JdbPlgSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-switch',
                    template: "<span [ngClass]=\"outBoxClass\"> <span class=\"inner-content\"> <ng-container *ngIf=\"checked\"> {{jdbCheckedText}} </ng-container> <ng-container *ngIf=\"!checked\"> {{jdbUncheckedText}} </ng-container> </span> </span> ",
                    // styleUrls: ['./jdb-plg-switch.component.scss'],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return JdbPlgSwitchComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    JdbPlgSwitchComponent.propDecorators = {
        "jdbCheckedText": [{ type: Input },],
        "jdbUncheckedText": [{ type: Input },],
        "jdbLoading": [{ type: Input },],
        "jdbDisabled": [{ type: Input },],
        "jdbSize": [{ type: Input },],
        "jdbControl": [{ type: Input },],
        "onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return JdbPlgSwitchComponent;
}());
export { JdbPlgSwitchComponent };
function JdbPlgSwitchComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    JdbPlgSwitchComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    JdbPlgSwitchComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    JdbPlgSwitchComponent.propDecorators;
    /** @type {?} */
    JdbPlgSwitchComponent.prototype.outBoxClass;
    /** @type {?} */
    JdbPlgSwitchComponent.prototype.checked;
    /** @type {?} */
    JdbPlgSwitchComponent.prototype.prefixCls;
    /** @type {?} */
    JdbPlgSwitchComponent.prototype._jdbCheckedText;
    /** @type {?} */
    JdbPlgSwitchComponent.prototype._jdbUncheckedText;
    /** @type {?} */
    JdbPlgSwitchComponent.prototype._jdbLoading;
    /** @type {?} */
    JdbPlgSwitchComponent.prototype._jdbDisabled;
    /** @type {?} */
    JdbPlgSwitchComponent.prototype._jdbControl;
    /** @type {?} */
    JdbPlgSwitchComponent.prototype._jdbSize;
    /** @type {?} */
    JdbPlgSwitchComponent.prototype.onChange;
    /** @type {?} */
    JdbPlgSwitchComponent.prototype.onTouched;
}
//# sourceMappingURL=jdb-plg-switch.component.js.map