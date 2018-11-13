/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, TemplateRef, Input, Output, ElementRef, ContentChild, forwardRef, HostListener, ViewEncapsulation, Renderer2, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var JdbPlgInputComponent = /** @class */ (function () {
    function JdbPlgInputComponent(render) {
        this.render = render;
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
     * @return {?}
     */
    JdbPlgInputComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.clearBtnEl) {
            this.render.setStyle(this.clearBtnEl.nativeElement, 'top', this.inputEl.nativeElement.height / 2);
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
                    template: "<span class=\"input-group-addon\" *ngIf=\"_addOnContentBefore\"> <ng-template [ngTemplateOutlet]=\"_addOnContentBefore\"> </ng-template> </span> <ng-template [ngIf]=\"_type=='text'\"> <div class=\"input-text-wrap\" [ngClass]=\"_inputWrapClass\"> <span class=\"input-prefix\" *ngIf=\"_prefixContent\"> <ng-template [ngTemplateOutlet]=\"_prefixContent\"> </ng-template> </span> <span class=\"input-content\"> <input (blur)=\"_emitBlur($event)\" (focus)=\"_emitFocus($event)\" [disabled]=\"_disabled\" [readonly]=\"_readonly\" [attr.id]=\"jdbId\" [attr.type]=\"_type\" class=\"input\" [ngClass]=\"_classMap\" [attr.placeholder]=\"_placeHolder\" [(ngModel)]=\"jdbValue\" [style.width]=\"width\" maxlength=\"{{jdbMaxLength}}\" #input /> <span class=\"input-clear\" *ngIf=\"_clear && _value && _type=='text'\" (click)=\"clearTxt()\"> <i class=\"close-icon icon-empty\"></i> </span> </span> <span class=\"ant-input-suffix\" *ngIf=\"_suffixContent\"> <i class=\"iconfont icon-guanbi2fill\"></i> <ng-template [ngTemplateOutlet]=\"_suffixContent\"> </ng-template> </span> <div class=\"input-error-tip\" *ngIf=\"jdbError && _errorContent\" [style.width]=\"width\"> <i class=\"icon-message-error error-tip\"></i> <p class=\"input-error-content\"> <ng-template [ngTemplateOutlet]=\"_errorContent\"> </ng-template> </p> </div> </div> </ng-template> <span class=\"input-group-addon\" *ngIf=\"_addOnContentAfter\"> <ng-template [ngTemplateOutlet]=\"_addOnContentAfter\"> </ng-template> </span> <ng-template [ngIf]=\"_type=='textarea'\"> <div class=\"input-text-wrap\"> <textarea (blur)=\"_emitBlur($event)\" (focus)=\"_emitFocus($event)\" (input)=\"textareaOnChange($event)\" [attr.id]=\"jdbId\" #inputTextarea [disabled]=\"_disabled\" [readonly]=\"_readonly\" type=\"textarea\" class=\"input input-textarea\" [ngClass]=\"_classMap\" [attr.placeholder]=\"jdbPlaceHolder\" [(ngModel)]=\"jdbValue\" maxlength=\"{{jdbMaxLength}}\" [style.width]=\"width\"></textarea> <span class=\"textarea-wc-tip\" [ngClass]=\"{'textarea-wc-tip-red': jdbValue&&jdbValue.length == jdbMaxLength}\" *ngIf=\"jdbMaxLength && !_disabled &&!_readonly\">{{(jdbValue&&jdbValue.length)||0}}/{{jdbMaxLength}}</span> </div> </ng-template>",
                    // styleUrls: ['./jdb-plg-input.component.scss'],
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
    JdbPlgInputComponent.ctorParameters = function () { return [
        { type: Renderer2, },
    ]; };
    JdbPlgInputComponent.propDecorators = {
        "width": [{ type: Input },],
        "_errorContent": [{ type: ContentChild, args: ['jdbErrorContent',] },],
        "_addOnContentBefore": [{ type: ContentChild, args: ['addContentBefore',] },],
        "_addOnContentAfter": [{ type: ContentChild, args: ['addContentAfter',] },],
        "_prefixContent": [{ type: ContentChild, args: ['prefixContent',] },],
        "_suffixContent": [{ type: ContentChild, args: ['suffixContent',] },],
        "jdbBlur": [{ type: Output },],
        "jdbFocus": [{ type: Output },],
        "inputEl": [{ type: ViewChild, args: ['input',] },],
        "clearBtnEl": [{ type: ViewChild, args: ['clearBtn',] },],
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
    /** @type {?} */
    JdbPlgInputComponent.prototype.inputEl;
    /** @type {?} */
    JdbPlgInputComponent.prototype.clearBtnEl;
    /** @type {?} */
    JdbPlgInputComponent.prototype.render;
}
//# sourceMappingURL=jdb-plg-input.component.js.map