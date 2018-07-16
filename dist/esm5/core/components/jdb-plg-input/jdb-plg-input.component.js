/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, TemplateRef, Input, Output, ContentChild, forwardRef, HostListener, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var JdbPlgInputComponent = /** @class */ (function () {
    function JdbPlgInputComponent() {
        this._value = '';
        this._type = 'text';
        this._placeHolder = '';
        this._size = 'default';
        this._disabled = false;
        this._readonly = false;
        this._error = false;
        this._inputWrapClass = [];
        this._clear = false;
        this._autoPromptData = [];
        this._composing = false;
        this.width = '300px';
        // ngModel Access
        this.onChange = function () { return null; };
        this.jdbBlur = new EventEmitter();
        this.jdbFocus = new EventEmitter();
    }
    /**
     * @return {?}
     */
    JdbPlgInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this._inputWrapClass =[`input-text-wrap-${this._size}`];
        if (this._prefixContent) {
            this._inputWrapClass.push('prefix');
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    JdbPlgInputComponent.prototype.compositionStart = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this._composing = true;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    JdbPlgInputComponent.prototype.compositionEnd = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this._composing = false;
        this.onChange(this._value);
    };
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbPlaceHolder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placeHolder;
        },
        set: /**
         * @param {?} placeHolder
         * @return {?}
         */
        function (placeHolder) {
            this._placeHolder = placeHolder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            this._size = { large: 'lg', small: 'sm' }[size];
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            this._disabled = this.toBoolean(disabled);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbReadonly", {
        get: /**
         * @return {?}
         */
        function () {
            return this._readonly;
        },
        set: /**
         * @param {?} readonly
         * @return {?}
         */
        function (readonly) {
            this._readonly = this.toBoolean(readonly);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbValue", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._value == '0') {
                return '0';
            }
            return this._value || '';
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if ((this._value === value) || ((this._value == null) && (value == null))) {
                return;
            }
            this._value = value;
            if (!this._composing) {
                this.onChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbError", {
        get: /**
         * @return {?}
         */
        function () {
            return this._error;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._error = this.toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbClear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._clear;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._clear = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbMaxLength", {
        get: /**
         * @return {?}
         */
        function () {
            return this._maxlength;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxlength = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbPromptData", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoPromptData;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoPromptData = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    JdbPlgInputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    JdbPlgInputComponent.prototype.registerOnChange = /**
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
    JdbPlgInputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    JdbPlgInputComponent.prototype._emitBlur = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.jdbBlur.emit($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    JdbPlgInputComponent.prototype._emitFocus = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.jdbFocus.emit($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    JdbPlgInputComponent.prototype.textareaOnChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
    };
    /**
     * @return {?}
     */
    JdbPlgInputComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this._classMap = (_a = {},
            _a["input-" + this._type + "-" + this._size] = true,
            _a['input-disabled'] = this._disabled,
            _a['input-error'] = this._error,
            _a);
    };
    /**
     * @return {?}
     */
    JdbPlgInputComponent.prototype.clearTxt = /**
     * @return {?}
     */
    function () {
        this._value = '';
        this.onChange('');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    JdbPlgInputComponent.prototype.toBoolean = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value === '' || (value && value !== 'false');
    };
    JdbPlgInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-input',
                    template: "<span class=\"input-group-addon\" *ngIf=\"_addOnContentBefore\">\n    <ng-template [ngTemplateOutlet]=\"_addOnContentBefore\">\n    </ng-template>\n</span>\n<ng-template [ngIf]=\"_type=='text'\">\n    <div class=\"input-text-wrap\" [ngClass]=\"_inputWrapClass\">\n        <span class=\"input-prefix\" *ngIf=\"_prefixContent\">\n            <ng-template [ngTemplateOutlet]=\"_prefixContent\">\n            </ng-template>\n        </span>\n        <input (blur)=\"_emitBlur($event)\" (focus)=\"_emitFocus($event)\" [disabled]=\"_disabled\" [readonly]=\"_readonly\" [attr.type]=\"_type\" class=\"input\" [ngClass]=\"_classMap\" [attr.placeholder]=\"_placeHolder\" [(ngModel)]=\"jdbValue\" [style.width]=\"width\" maxlength=\"{{jdbMaxLength}}\"\n        />\n        <span class=\"input-clear\" *ngIf=\"_clear && _value && _type=='text'\" (click)=\"clearTxt()\">\n            <i class=\"close-icon icon-empty\"></i>\n        </span>\n        <span class=\"ant-input-suffix\" *ngIf=\"_suffixContent\">\n            <i class=\"iconfont icon-guanbi2fill\"></i>\n            <ng-template [ngTemplateOutlet]=\"_suffixContent\">\n            </ng-template>\n        </span>\n    </div>\n    <div class=\"input-error-tip\" *ngIf=\"jdbError && _errorContent\">\n        <i class=\"icon-message-error error-tip\"></i>\n        <span>\n            <ng-template [ngTemplateOutlet]=\"_errorContent\">\n            </ng-template>\n        </span>\n    </div>\n</ng-template>\n<span class=\"input-group-addon\" *ngIf=\"_addOnContentAfter\">\n      <ng-template [ngTemplateOutlet]=\"_addOnContentAfter\">\n      </ng-template>\n</span>\n<ng-template [ngIf]=\"_type=='textarea'\">\n    <div class=\"input-text-wrap\">\n        <textarea (blur)=\"_emitBlur($event)\" (focus)=\"_emitFocus($event)\" (input)=\"textareaOnChange($event)\" #inputTextarea [disabled]=\"_disabled\" [readonly]=\"_readonly\" type=\"textarea\" class=\"input input-textarea\" [ngClass]=\"_classMap\" [attr.placeholder]=\"jdbPlaceHolder\"\n            [(ngModel)]=\"jdbValue\" maxlength=\"{{jdbMaxLength}}\" [style.width]=\"width\"></textarea>\n        <span class=\"textarea-wc-tip\" [ngClass]=\"{'textarea-wc-tip-red': jdbValue&&jdbValue.length == jdbMaxLength}\" *ngIf=\"jdbMaxLength && !_disabled &&!_readonly\">{{(jdbValue&&jdbValue.length)||0}}/{{jdbMaxLength}}</span>\n    </div>\n</ng-template>",
                    styles: [".input-text-wrap{position:relative;display:inline-block}.input{height:30px;width:300px;background:#fff;border:1px solid #afb0b3;border-radius:2px;font-size:13px;padding:0 10px;line-height:30px;color:#333}.input:focus{outline:0;border-color:#3f69f2}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#afb0b3}.prefix .input{padding-left:30px}.input-textarea{width:300px;height:80px;overflow-y:auto;font-size:13px;color:#000;line-height:20px}.input-disabled{background:#f0f1f5;color:#7d7e80}.disabled .input{color:#7d7e80}.input-text-lg{height:40px;font-size:14px}.input-text-sm{height:24px;font-size:12px}.input-textarea-lg{height:120px;font-size:14px}.input-textarea-sm{height:80px;font-size:12px}.input-error{border-color:#f84a4a}.input-clear{position:absolute;right:5px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:24px}.input-prefix{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:7px}.input-error-tip{color:#f84a4a;font-size:12px;line-height:20px;max-width:200px}.error-tip{font-size:16px;line-height:20px}.textarea-wc-tip{position:absolute;bottom:5px;right:10px;font-size:12px;color:#7d7e80}.textarea-wc-tip-red{color:#f84a4a}"],
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return JdbPlgInputComponent; }),
                            multi: true
                        }
                    ],
                },] },
    ];
    /** @nocollapse */
    JdbPlgInputComponent.propDecorators = {
        "width": [{ type: Input },],
        "_errorContent": [{ type: ContentChild, args: ['jdbErrorContent',] },],
        "_addOnContentBefore": [{ type: ContentChild, args: ['addContentBefore',] },],
        "_addOnContentAfter": [{ type: ContentChild, args: ['addContentAfter',] },],
        "_prefixContent": [{ type: ContentChild, args: ['prefixContent',] },],
        "_suffixContent": [{ type: ContentChild, args: ['suffixContent',] },],
        "jdbBlur": [{ type: Output },],
        "jdbFocus": [{ type: Output },],
        "compositionStart": [{ type: HostListener, args: ['compositionstart', ['$event'],] },],
        "compositionEnd": [{ type: HostListener, args: ['compositionend', ['$event'],] },],
        "jdbType": [{ type: Input },],
        "jdbPlaceHolder": [{ type: Input },],
        "jdbSize": [{ type: Input },],
        "jdbDisabled": [{ type: Input },],
        "jdbReadonly": [{ type: Input },],
        "jdbValue": [{ type: Input },],
        "jdbError": [{ type: Input },],
        "jdbClear": [{ type: Input },],
        "jdbMaxLength": [{ type: Input },],
        "jdbPromptData": [{ type: Input },],
    };
    return JdbPlgInputComponent;
}());
export { JdbPlgInputComponent };
function JdbPlgInputComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    JdbPlgInputComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    JdbPlgInputComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    JdbPlgInputComponent.propDecorators;
    /** @type {?} */
    JdbPlgInputComponent.prototype._value;
    /** @type {?} */
    JdbPlgInputComponent.prototype._type;
    /** @type {?} */
    JdbPlgInputComponent.prototype._placeHolder;
    /** @type {?} */
    JdbPlgInputComponent.prototype._size;
    /** @type {?} */
    JdbPlgInputComponent.prototype._disabled;
    /** @type {?} */
    JdbPlgInputComponent.prototype._readonly;
    /** @type {?} */
    JdbPlgInputComponent.prototype._error;
    /** @type {?} */
    JdbPlgInputComponent.prototype._classMap;
    /** @type {?} */
    JdbPlgInputComponent.prototype._inputWrapClass;
    /** @type {?} */
    JdbPlgInputComponent.prototype._clear;
    /** @type {?} */
    JdbPlgInputComponent.prototype._maxlength;
    /** @type {?} */
    JdbPlgInputComponent.prototype._autoPromptData;
    /** @type {?} */
    JdbPlgInputComponent.prototype._composing;
    /** @type {?} */
    JdbPlgInputComponent.prototype.width;
    /** @type {?} */
    JdbPlgInputComponent.prototype.onChange;
    /** @type {?} */
    JdbPlgInputComponent.prototype._errorContent;
    /** @type {?} */
    JdbPlgInputComponent.prototype._addOnContentBefore;
    /** @type {?} */
    JdbPlgInputComponent.prototype._addOnContentAfter;
    /** @type {?} */
    JdbPlgInputComponent.prototype._prefixContent;
    /** @type {?} */
    JdbPlgInputComponent.prototype._suffixContent;
    /** @type {?} */
    JdbPlgInputComponent.prototype.jdbBlur;
    /** @type {?} */
    JdbPlgInputComponent.prototype.jdbFocus;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRiLXBsZy1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVzdC11aS9jb3JlLyIsInNvdXJjZXMiOlsiY29yZS9jb21wb25lbnRzL2pkYi1wbGctaW5wdXQvamRiLXBsZy1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsWUFBWSxFQUFDLFdBQVcsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFZLFlBQVksRUFBQyxVQUFVLEVBQUUsWUFBWSxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFKLE9BQU8sRUFBK0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O3NCQXdEbkUsRUFBRTtxQkFDSixNQUFNOzRCQUNDLEVBQUU7cUJBQ1QsU0FBUzt5QkFDSixLQUFLO3lCQUNMLEtBQUs7c0JBQ1IsS0FBSzsrQkFFbUIsRUFBRTtzQkFDMUIsS0FBSzsrQkFFZ0IsRUFBRTswQkFDbEIsS0FBSztxQkFDRixPQUFPOzt3QkFFWSxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUk7dUJBTUEsSUFBSSxZQUFZLEVBQUU7d0JBQ2pCLElBQUksWUFBWSxFQUFFOzs7OztJQUVqRSx1Q0FBUTs7O0lBQVI7O1FBRUksSUFBSyxJQUFJLENBQUMsY0FBYyxFQUFHO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0o7Ozs7O0lBR0QsK0NBQWdCOzs7O2NBQUMsQ0FBbUI7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7OztJQUkzQiw2Q0FBYzs7OztjQUFDLENBQW1CO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzswQkFJM0IseUNBQU87Ozs7UUFHWDtZQUNJLE9BQU8sSUFB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RUFBcEIsQ0FBb0IsQ0FBQzs0QkFDbkQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7Ozs7MEJBZ0JLLEtBQUs7a0NBR04sWUFBWSxTQUFDLGlCQUFpQjt3Q0FDOUIsWUFBWSxTQUFFLGtCQUFrQjt1Q0FDaEMsWUFBWSxTQUFDLGlCQUFpQjttQ0FDOUIsWUFBWSxTQUFDLGVBQWU7bUNBQzVCLFlBQVksU0FBQyxlQUFlOzRCQUM1QixNQUFNOzZCQUNOLE1BQU07cUNBU04sWUFBWSxTQUFDLGtCQUFrQixFQUFFLENBQUUsUUFBUSxDQUFFO21DQUs3QyxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBRSxRQUFRLENBQUU7NEJBTTNDLEtBQUs7bUNBUUwsS0FBSzs0QkFRTCxLQUFLO2dDQVNMLEtBQUs7Z0NBU0wsS0FBSzs2QkFRTCxLQUFLOzZCQWdCTCxLQUFLOzZCQVFMLEtBQUs7aUNBUUwsS0FBSztrQ0FRTCxLQUFLOzsrQkFyTFY7O1NBd0RhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LEV2ZW50RW1pdHRlcixUZW1wbGF0ZVJlZixJbnB1dCxPdXRwdXQsRWxlbWVudFJlZixDb250ZW50Q2hpbGQsZm9yd2FyZFJlZiAsSG9zdExpc3RlbmVyLFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kZWwsQ29udHJvbFZhbHVlQWNjZXNzb3IsTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWpkYi1wbGctaW5wdXQnLFxuICAgIHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiICpuZ0lmPVwiX2FkZE9uQ29udGVudEJlZm9yZVwiPlxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJfYWRkT25Db250ZW50QmVmb3JlXCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbjwvc3Bhbj5cbjxuZy10ZW1wbGF0ZSBbbmdJZl09XCJfdHlwZT09J3RleHQnXCI+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0LXRleHQtd3JhcFwiIFtuZ0NsYXNzXT1cIl9pbnB1dFdyYXBDbGFzc1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LXByZWZpeFwiICpuZ0lmPVwiX3ByZWZpeENvbnRlbnRcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJfcHJlZml4Q29udGVudFwiPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aW5wdXQgKGJsdXIpPVwiX2VtaXRCbHVyKCRldmVudClcIiAoZm9jdXMpPVwiX2VtaXRGb2N1cygkZXZlbnQpXCIgW2Rpc2FibGVkXT1cIl9kaXNhYmxlZFwiIFtyZWFkb25seV09XCJfcmVhZG9ubHlcIiBbYXR0ci50eXBlXT1cIl90eXBlXCIgY2xhc3M9XCJpbnB1dFwiIFtuZ0NsYXNzXT1cIl9jbGFzc01hcFwiIFthdHRyLnBsYWNlaG9sZGVyXT1cIl9wbGFjZUhvbGRlclwiIFsobmdNb2RlbCldPVwiamRiVmFsdWVcIiBbc3R5bGUud2lkdGhdPVwid2lkdGhcIiBtYXhsZW5ndGg9XCJ7e2pkYk1heExlbmd0aH19XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1jbGVhclwiICpuZ0lmPVwiX2NsZWFyICYmIF92YWx1ZSAmJiBfdHlwZT09J3RleHQnXCIgKGNsaWNrKT1cImNsZWFyVHh0KClcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiY2xvc2UtaWNvbiBpY29uLWVtcHR5XCI+PC9pPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LWlucHV0LXN1ZmZpeFwiICpuZ0lmPVwiX3N1ZmZpeENvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1ndWFuYmkyZmlsbFwiPjwvaT5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJfc3VmZml4Q29udGVudFwiPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1lcnJvci10aXBcIiAqbmdJZj1cImpkYkVycm9yICYmIF9lcnJvckNvbnRlbnRcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJpY29uLW1lc3NhZ2UtZXJyb3IgZXJyb3ItdGlwXCI+PC9pPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJfZXJyb3JDb250ZW50XCI+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiICpuZ0lmPVwiX2FkZE9uQ29udGVudEFmdGVyXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiX2FkZE9uQ29udGVudEFmdGVyXCI+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuPC9zcGFuPlxuPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIl90eXBlPT0ndGV4dGFyZWEnXCI+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0LXRleHQtd3JhcFwiPlxuICAgICAgICA8dGV4dGFyZWEgKGJsdXIpPVwiX2VtaXRCbHVyKCRldmVudClcIiAoZm9jdXMpPVwiX2VtaXRGb2N1cygkZXZlbnQpXCIgKGlucHV0KT1cInRleHRhcmVhT25DaGFuZ2UoJGV2ZW50KVwiICNpbnB1dFRleHRhcmVhIFtkaXNhYmxlZF09XCJfZGlzYWJsZWRcIiBbcmVhZG9ubHldPVwiX3JlYWRvbmx5XCIgdHlwZT1cInRleHRhcmVhXCIgY2xhc3M9XCJpbnB1dCBpbnB1dC10ZXh0YXJlYVwiIFtuZ0NsYXNzXT1cIl9jbGFzc01hcFwiIFthdHRyLnBsYWNlaG9sZGVyXT1cImpkYlBsYWNlSG9sZGVyXCJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiamRiVmFsdWVcIiBtYXhsZW5ndGg9XCJ7e2pkYk1heExlbmd0aH19XCIgW3N0eWxlLndpZHRoXT1cIndpZHRoXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0YXJlYS13Yy10aXBcIiBbbmdDbGFzc109XCJ7J3RleHRhcmVhLXdjLXRpcC1yZWQnOiBqZGJWYWx1ZSYmamRiVmFsdWUubGVuZ3RoID09IGpkYk1heExlbmd0aH1cIiAqbmdJZj1cImpkYk1heExlbmd0aCAmJiAhX2Rpc2FibGVkICYmIV9yZWFkb25seVwiPnt7KGpkYlZhbHVlJiZqZGJWYWx1ZS5sZW5ndGgpfHwwfX0ve3tqZGJNYXhMZW5ndGh9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+YCxcbiAgICBzdHlsZXM6IFtgLmlucHV0LXRleHQtd3JhcHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9ja30uaW5wdXR7aGVpZ2h0OjMwcHg7d2lkdGg6MzAwcHg7YmFja2dyb3VuZDojZmZmO2JvcmRlcjoxcHggc29saWQgI2FmYjBiMztib3JkZXItcmFkaXVzOjJweDtmb250LXNpemU6MTNweDtwYWRkaW5nOjAgMTBweDtsaW5lLWhlaWdodDozMHB4O2NvbG9yOiMzMzN9LmlucHV0OmZvY3Vze291dGxpbmU6MDtib3JkZXItY29sb3I6IzNmNjlmMn1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcix0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojYWZiMGIzfS5wcmVmaXggLmlucHV0e3BhZGRpbmctbGVmdDozMHB4fS5pbnB1dC10ZXh0YXJlYXt3aWR0aDozMDBweDtoZWlnaHQ6ODBweDtvdmVyZmxvdy15OmF1dG87Zm9udC1zaXplOjEzcHg7Y29sb3I6IzAwMDtsaW5lLWhlaWdodDoyMHB4fS5pbnB1dC1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNmMGYxZjU7Y29sb3I6IzdkN2U4MH0uZGlzYWJsZWQgLmlucHV0e2NvbG9yOiM3ZDdlODB9LmlucHV0LXRleHQtbGd7aGVpZ2h0OjQwcHg7Zm9udC1zaXplOjE0cHh9LmlucHV0LXRleHQtc217aGVpZ2h0OjI0cHg7Zm9udC1zaXplOjEycHh9LmlucHV0LXRleHRhcmVhLWxne2hlaWdodDoxMjBweDtmb250LXNpemU6MTRweH0uaW5wdXQtdGV4dGFyZWEtc217aGVpZ2h0OjgwcHg7Zm9udC1zaXplOjEycHh9LmlucHV0LWVycm9ye2JvcmRlci1jb2xvcjojZjg0YTRhfS5pbnB1dC1jbGVhcntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDo1cHg7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO2hlaWdodDoyNHB4fS5pbnB1dC1wcmVmaXh7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO2xlZnQ6N3B4fS5pbnB1dC1lcnJvci10aXB7Y29sb3I6I2Y4NGE0YTtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoyMHB4O21heC13aWR0aDoyMDBweH0uZXJyb3ItdGlwe2ZvbnQtc2l6ZToxNnB4O2xpbmUtaGVpZ2h0OjIwcHh9LnRleHRhcmVhLXdjLXRpcHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206NXB4O3JpZ2h0OjEwcHg7Zm9udC1zaXplOjEycHg7Y29sb3I6IzdkN2U4MH0udGV4dGFyZWEtd2MtdGlwLXJlZHtjb2xvcjojZjg0YTRhfWBdLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBKZGJQbGdJbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBKZGJQbGdJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCxDb250cm9sVmFsdWVBY2Nlc3NvcntcbiAgICBfdmFsdWUgPSAnJztcbiAgICBfdHlwZT0gJ3RleHQnO1xuICAgIF9wbGFjZUhvbGRlcj0gJyc7XG4gICAgX3NpemU9ICdkZWZhdWx0JztcbiAgICBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBfcmVhZG9ubHkgPSBmYWxzZTtcbiAgICBfZXJyb3IgPSBmYWxzZTtcbiAgICBfY2xhc3NNYXA6IGFueTtcbiAgICBfaW5wdXRXcmFwQ2xhc3M6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBfY2xlYXIgPSBmYWxzZTtcbiAgICBfbWF4bGVuZ3RoOiBudW1iZXI7XG4gICAgX2F1dG9Qcm9tcHREYXRhOiBBcnJheTxhbnk+ID0gW107XG4gICAgIF9jb21wb3NpbmcgPSBmYWxzZTtcbiAgICAgQElucHV0KCkgd2lkdGg9ICczMDBweCc7XG4gICAgLy8gbmdNb2RlbCBBY2Nlc3NcbiAgICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICAgIEBDb250ZW50Q2hpbGQoJ2pkYkVycm9yQ29udGVudCcpICBfZXJyb3JDb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoICdhZGRDb250ZW50QmVmb3JlJyApIF9hZGRPbkNvbnRlbnRCZWZvcmU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZCgnYWRkQ29udGVudEFmdGVyJykgX2FkZE9uQ29udGVudEFmdGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoJ3ByZWZpeENvbnRlbnQnKSBfcHJlZml4Q29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKCdzdWZmaXhDb250ZW50JykgX3N1ZmZpeENvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQE91dHB1dCgpIGpkYkJsdXI6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgamRiRm9jdXM6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyB0aGlzLl9pbnB1dFdyYXBDbGFzcyA9W2BpbnB1dC10ZXh0LXdyYXAtJHt0aGlzLl9zaXplfWBdO1xuICAgICAgICBpZiAoIHRoaXMuX3ByZWZpeENvbnRlbnQgKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dFdyYXBDbGFzcy5wdXNoKCdwcmVmaXgnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NvbXBvc2l0aW9uc3RhcnQnLCBbICckZXZlbnQnIF0pXG4gICAgY29tcG9zaXRpb25TdGFydChlOiBDb21wb3NpdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvc2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCBbICckZXZlbnQnIF0pXG4gICAgY29tcG9zaXRpb25FbmQoZTogQ29tcG9zaXRpb25FdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb3NpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgamRiVHlwZSh0eXBlOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICB9XG4gICAgZ2V0IGpkYlR5cGUoKTogc3RyaW5ne1xuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBqZGJQbGFjZUhvbGRlcihwbGFjZUhvbGRlcjogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fcGxhY2VIb2xkZXIgPSBwbGFjZUhvbGRlcjtcbiAgICB9XG4gICAgZ2V0IGpkYlBsYWNlSG9sZGVyKCk6IHN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlSG9sZGVyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGpkYlNpemUoc2l6ZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IHtsYXJnZTogJ2xnJyxzbWFsbDogJ3NtJ31bc2l6ZV07XG4gICAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gICAgZ2V0IGpkYlNpemUoKTogc3RyaW5ne1xuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBqZGJEaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbil7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gdGhpcy50b0Jvb2xlYW4oZGlzYWJsZWQpO1xuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfVxuICAgIGdldCBqZGJEaXNhYmxlZCgpOiBib29sZWFue1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgamRiUmVhZG9ubHkocmVhZG9ubHk6IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLl9yZWFkb25seSA9IHRoaXMudG9Cb29sZWFuKHJlYWRvbmx5KTtcbiAgICB9XG4gICAgZ2V0IGpkYlJlYWRvbmx5KCk6IGJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkb25seTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBqZGJWYWx1ZSh2YWx1ZTogc3RyaW5nKXtcbiAgICAgICAgaWYgKCh0aGlzLl92YWx1ZSA9PT0gdmFsdWUpIHx8ICgodGhpcy5fdmFsdWUgPT0gbnVsbCkgJiYgKHZhbHVlID09IG51bGwpKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fY29tcG9zaW5nKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBqZGJWYWx1ZSgpOiBzdHJpbmd7XG4gICAgICAgIGlmKHRoaXMuX3ZhbHVlID09ICcwJyl7XG4gICAgICAgICAgICByZXR1cm4gJzAnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZSB8fCAnJztcbiAgICB9XG4gICAgQElucHV0KClcbiAgICBzZXQgamRiRXJyb3IodmFsdWU6IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLl9lcnJvciA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgICBnZXQgamRiRXJyb3IoKTogYm9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xuICAgIH1cbiAgICBASW5wdXQoKVxuICAgIHNldCBqZGJDbGVhcih2YWx1ZTogYm9vbGVhbil7XG4gICAgICAgIHRoaXMuX2NsZWFyID0gdGhpcy50b0Jvb2xlYW4odmFsdWUpO1xuICAgIH1cbiAgICBnZXQgamRiQ2xlYXIoKTogYm9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsZWFyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGpkYk1heExlbmd0aCh2YWx1ZTogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5fbWF4bGVuZ3RoID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBqZGJNYXhMZW5ndGgoKTogbnVtYmVye1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4bGVuZ3RoO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGpkYlByb21wdERhdGEodmFsdWU6IEFycmF5PGFueT4pe1xuICAgICAgICB0aGlzLl9hdXRvUHJvbXB0RGF0YSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgamRiUHJvbXB0RGF0YSgpOiBBcnJheTxhbnk+e1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0b1Byb21wdERhdGE7XG4gICAgfVxuICAgIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIH1cbiAgICBfZW1pdEJsdXIoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuamRiQmx1ci5lbWl0KCRldmVudCk7XG4gICAgfVxuXG4gICAgX2VtaXRGb2N1cygkZXZlbnQpIHtcbiAgICAgICAgdGhpcy5qZGJGb2N1cy5lbWl0KCRldmVudCk7XG4gICAgfVxuICAgIHRleHRhcmVhT25DaGFuZ2UoJGV2ZW50KXtcblxuICAgIH1cbiAgICBzZXRDbGFzc01hcCgpIHtcbiAgICAgICAgdGhpcy5fY2xhc3NNYXAgPSB7XG4gICAgICAgICAgICBbIGBpbnB1dC0ke3RoaXMuX3R5cGV9LSR7dGhpcy5fc2l6ZX1gIF06IHRydWUsXG4gICAgICAgICAgICBbICdpbnB1dC1kaXNhYmxlZCcgXTogdGhpcy5fZGlzYWJsZWQsXG4gICAgICAgICAgICBbJ2lucHV0LWVycm9yJ106IHRoaXMuX2Vycm9yXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNsZWFyVHh0KCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCcnKTtcbiAgICB9XG5cbiAgICB0b0Jvb2xlYW4odmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSAnJyB8fCAodmFsdWUgJiYgdmFsdWUgIT09ICdmYWxzZScpO1xuICAgIH1cbn1cbiJdfQ==