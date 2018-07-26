/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, Output, Input, ElementRef, HostListener, TemplateRef, EventEmitter, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
var JdbPlgDialogComponent = /** @class */ (function () {
    function JdbPlgDialogComponent(resolver) {
        this.resolver = resolver;
        this._customClass = '';
        this._maskClass = '';
        this._visible = false;
        this._title = '';
        this._closeable = true;
        this._animationStatus = '11';
        this._width = '400px';
        this._footerHide = false;
        this._isConfirm = false;
        this._okText = '';
        this._cancelText = '';
        this._RogerText = '';
        this._state = 'hideM';
        this.MvisibileChange = new EventEmitter();
        this.MOnOk = new EventEmitter();
        this.MOnCancel = new EventEmitter();
    }
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mvisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ visible = this.toBoolean(value);
            if (this._visible === visible) {
                return;
            }
            this._visible = visible;
            this.MvisibileChange.emit(this._visible);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "MfooterHiden", {
        get: /**
         * @return {?}
         */
        function () {
            return this._footerHide;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ visible = this.toBoolean(value);
            if (this._visible === visible) {
                return;
            }
            this._footerHide = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mtitle", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._titleTpl = value;
            }
            else {
                this._title = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mcontent", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._contentTpl = value;
            }
            else {
                this._content = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mfooter", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._footerTpl = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mwidth", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._width = typeof value === 'number' ? value + 'px' : value;
        },
        enumerable: true,
        configurable: true
    });
    // 定位modal位置和样式
    /**
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.setStyle = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ el = this.contentEl.nativeElement;
        this._bodyStyleMap = tslib_1.__assign({ width: this._width });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.onEsc = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.clickCancel(e);
    };
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mclass", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._customClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "MOkText", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._okText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "McancelText", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._cancelText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "MRogerText", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isConfirm = true;
            this._RogerText = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setStyle();
    };
    /**
     * @param {?} component
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.createDynamicComponent = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        var /** @type {?} */ factory = this.resolver.resolveComponentFactory(/** @type {?} */ (this._content));
        this.bodyEl.createComponent(factory);
    };
    /**
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (this._visible) {
            this._state = 'showM';
            setTimeout(function () {
                _this.contentEl.nativeElement.parentNode.focus();
            }, 200);
        }
        else {
            this._state = 'hideM';
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.clickCancel = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this._visible = false;
        this._state = 'hideM';
        this.MOnCancel.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.clickOk = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.MOnOk) {
            this.MOnOk.emit(e);
        }
        else {
            this._visible = false;
            this._state = 'hideM';
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.closeModal = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if ((/** @type {?} */ (e.target)).getAttribute('role') === 'dialog') {
            this.clickCancel(e);
            this._state = 'hideM';
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.toBoolean = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value === '' || (value && value !== false);
    };
    JdbPlgDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-dialog',
                    template: "<div [ngClass]=\"_customClass\"> <div class=\"_maskClass\" [ngClass]=\"{'hid':!_visible}\" [style.zIndex]=\"1000\"></div> <div class=\"jdb-modal\" tabindex=\"-1\" role=\"dialog\" [ngClass]=\"{'hid':!_visible}\" [ngStyle]=\"{'dispaly':!_visible}\" (click)=\"closeModal($event)\" class=\"_wrapClass\" [ngClass]=\"_wrapClass\" [style.zIndex]=\"1000\" [attr.aria-modalId]=\"modalId\"> <div #modal_content class=\"modal\" [@optionsState]=\"_state\" [ngStyle]=\"_bodyStyleMap\"> <div class=\"modal-content\"> <ng-template [ngIf]=\"_closeable\"> <button class=\"modal-close\" (click)=\"clickCancel($event)\"> <!-- <span class=\"modal-close-x\"></span> --> <span class=\"icon-close\"></span> </button> </ng-template> <div class=\"modal-header\" *ngIf=\"_title||_titleTpl\"> <div class=\"modal-title\" [attr.id]=\"modalId\"> <ng-template #defaultTitle> {{_title}} </ng-template> <ng-template [ngTemplateOutlet]=\"_titleTpl||defaultTitle\"> </ng-template> </div> </div> <div class=\"modal-body\"> <ng-template #defaultContent>{{_content}}</ng-template> <ng-template [ngTemplateOutlet]=\"_contentTpl||defaultContent\"></ng-template> <ng-template #modal_component></ng-template> </div> <div class=\"modal-footer\" *ngIf=\"!_footerHide\"> <ng-template #defalutFooter> <button *ngIf=\"!_isConfirm\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'white'\" (click)=\"clickCancel($event)\"><span>{{_cancelText||'\u53D6\u6D88'}}</span></button> <button *ngIf=\"!_isConfirm\" class=\"right-btn\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'primary'\" (click)=\"clickOk($event)\"><span>{{_okText||'\u786E\u8BA4'}}</span></button> <button *ngIf=\"_isConfirm\" class=\"right-btn\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'primary'\" (click)=\"clickOk($event)\" (click)=\"clickOk($event)\"><span>{{_RogerText}}</span></button> </ng-template> <ng-template [ngTemplateOutlet]=\"_footerTpl||defalutFooter\"></ng-template> </div> <div tabindex=\"0\" style=\"width:0px;height:0px;overflow:hidden;\">aaa</div> </div> </div> </div> </div>",
                    styleUrls: ['./jdb-plg-dialog.component.scss'],
                    animations: [
                        trigger('optionsState', [
                            state('showM', style({
                                transform: 'translate(-50%, -50%)',
                                opacity: '1',
                            })),
                            state('hideM', style({
                                transform: 'translate(-50%, -80%)',
                                opacity: '0',
                            })),
                            transition('showM <=> hideM', animate('200ms ease-out'))
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    JdbPlgDialogComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
    ]; };
    JdbPlgDialogComponent.propDecorators = {
        "contentEl": [{ type: ViewChild, args: ['modal_content',] },],
        "bodyEl": [{ type: ViewChild, args: ['modal_component', { read: ViewContainerRef },] },],
        "MvisibileChange": [{ type: Output },],
        "MOnOk": [{ type: Output },],
        "MOnCancel": [{ type: Output },],
        "Mvisible": [{ type: Input },],
        "MfooterHiden": [{ type: Input },],
        "Mtitle": [{ type: Input },],
        "Mcontent": [{ type: Input },],
        "Mfooter": [{ type: Input },],
        "Mwidth": [{ type: Input },],
        "onEsc": [{ type: HostListener, args: ['keydown.esc', ['$event'],] },],
        "Mclass": [{ type: Input },],
        "MOkText": [{ type: Input },],
        "McancelText": [{ type: Input },],
        "MRogerText": [{ type: Input },],
    };
    return JdbPlgDialogComponent;
}());
export { JdbPlgDialogComponent };
function JdbPlgDialogComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    JdbPlgDialogComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    JdbPlgDialogComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    JdbPlgDialogComponent.propDecorators;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._customClass;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._maskClass;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._bodyStyleMap;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.modalId;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._visible;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._title;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._closeable;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._titleTpl;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._content;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._contentTpl;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._animationStatus;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._bodyClass;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._width;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._footerHide;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._isConfirm;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._okText;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._cancelText;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._RogerText;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._state;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._footerTpl;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.contentEl;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.bodyEl;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.MvisibileChange;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.MOnOk;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.MOnCancel;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.resolver;
}
//# sourceMappingURL=jdb-plg-dialog.component.js.map