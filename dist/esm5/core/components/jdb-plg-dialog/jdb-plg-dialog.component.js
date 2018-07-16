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
                    template: "<div [ngClass]=\"_customClass\">\n    <div class=\"_maskClass\" [ngClass]=\"{'hid':!_visible}\" [style.zIndex]=\"1000\"></div>\n    <div class=\"jdb-modal\" tabindex=\"-1\" role=\"dialog\" [ngClass]=\"{'hid':!_visible}\" [ngStyle]=\"{'dispaly':!_visible}\" (click)=\"closeModal($event)\" class=\"_wrapClass\" [ngClass]=\"_wrapClass\" [style.zIndex]=\"1000\" [attr.aria-modalId]=\"modalId\">\n        <div #modal_content class=\"modal\" [@optionsState]=\"_state\" [ngStyle]=\"_bodyStyleMap\">\n            <div class=\"modal-content\">\n                <ng-template [ngIf]=\"_closeable\">\n                    <button class=\"modal-close\" (click)=\"clickCancel($event)\">\n                      <!-- <span class=\"modal-close-x\"></span> -->\n                      <span class=\"icon-close\"></span>\n                    </button>\n                </ng-template>\n\n                <div class=\"modal-header\" *ngIf=\"_title||_titleTpl\">\n                    <div class=\"modal-title\" [attr.id]=\"modalId\">\n                        <ng-template #defaultTitle>\n                            {{_title}}\n                        </ng-template>\n                        <ng-template [ngTemplateOutlet]=\"_titleTpl||defaultTitle\">\n                        </ng-template>\n                    </div>\n                </div>\n                <div class=\"modal-body\">\n                    <ng-template #defaultContent>{{_content}}</ng-template>\n                    <ng-template [ngTemplateOutlet]=\"_contentTpl||defaultContent\"></ng-template>\n                    <ng-template #modal_component></ng-template>\n                </div>\n                <div class=\"modal-footer\" *ngIf=\"!_footerHide\">\n                    <ng-template #defalutFooter>\n                        <button *ngIf=\"!_isConfirm\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'white'\" (click)=\"clickCancel($event)\"><span>{{_cancelText||'\u53D6\u6D88'}}</span></button>\n                        <button *ngIf=\"!_isConfirm\" class=\"right-btn\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'primary'\" (click)=\"clickOk($event)\"><span>{{_okText||'\u786E\u8BA4'}}</span></button>\n                        <button *ngIf=\"_isConfirm\" class=\"right-btn\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'primary'\" (click)=\"clickOk($event)\" (click)=\"clickOk($event)\"><span>{{_RogerText}}</span></button>\n                    </ng-template>\n                    <ng-template [ngTemplateOutlet]=\"_footerTpl||defalutFooter\"></ng-template>\n                </div>\n                <div tabindex=\"0\" style=\"width:0px;height:0px;overflow:hidden;\">aaa</div>\n            </div>\n        </div>\n    </div>\n</div>",
                    styles: ["._maskClass{position:fixed;top:0;bottom:0;left:0;right:0;height:100%;background:rgba(0,0,0,.5)}._maskClass.hid{display:none}._wrapClass{position:fixed;overflow:auto;top:0;left:0;bottom:0;right:0;z-index:1000;-webkit-overflow-scrolling:touch;outline:0}._wrapClass.hid{display:none}.modal{position:absolute;left:50%;top:50%;background:#fff}.modal-header{background:#f0f1f5;border-bottom:1px solid #d7d8db;border-top-left-radius:3px;border-top-right-radius:3px}.modal-title{margin:0;font-size:16px;line-height:40px;color:#323233;text-align:center}.modal-close{cursor:pointer;border:none;width:40px;height:40px;background:0 0;position:absolute;right:0;top:0;z-index:10;line-height:1;text-decoration:none;color:#000;outline:0}.modal-close-x{display:inline-block;text-align:center;width:20px;height:20px;line-height:40px;font-size:16px;background-size:cover}.modal-close-x:hover{transition:color .3s ease;color:#000}.modal-body{padding:40px;background:#fff;overflow:hidden}.modal-footer{padding:40px 0;background:#fff;border-bottom-left-radius:3px;border-bottom-right-radius:3px;text-align:center}.modal-footer .right-btn{margin-left:20px}"],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRiLXBsZy1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlc3QtdWkvY29yZS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9qZGItcGxnLWRpYWxvZy9qZGItcGxnLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUlULFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUlMLFVBQVUsRUFDVixZQUFZLEVBRVosV0FBVyxFQUNYLFlBQVksRUFDWixnQkFBZ0IsRUFHaEIsd0JBQXdCLEVBQ3pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBOEsvRSwrQkFBb0IsUUFBa0M7UUFBbEMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7NEJBbkh2QyxFQUFFOzBCQUNKLEVBQUU7d0JBR0osS0FBSztzQkFDUCxFQUFFOzBCQUNFLElBQUk7Z0NBSUUsSUFBSTtzQkFFZCxPQUFPOzJCQUNGLEtBQUs7MEJBQ04sS0FBSzt1QkFDUixFQUFFOzJCQUNFLEVBQUU7MEJBQ0gsRUFBRTtzQkFDTixPQUFPOytCQUltQyxJQUFJLFlBQVksRUFBRTtxQkFDekIsSUFBSSxZQUFZLEVBQUU7eUJBQ0UsSUFBSSxZQUFZLEVBQUU7S0EyRnZCOzBCQXhGdkQsMkNBQVE7Ozs7UUFTWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7Ozs7a0JBWFksS0FBYztZQUN6QixxQkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO2dCQUM3QixPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUN4QixJ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QkFDVixPQUFPLENBQUMsY0FBYyxFQUFFOzRCQUN0QixLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztnQ0FDbkIsU0FBUyxFQUFFLHVCQUF1QjtnQ0FDbEMsT0FBTyxFQUFFLEdBQUc7NkJBRWIsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO2dDQUNuQixTQUFTLEVBQUUsdUJBQXVCO2dDQUNsQyxPQUFPLEVBQUUsR0FBRzs2QkFFYixDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3lCQUN6RCxDQUFDO3FCQUFDO2lCQUNOOzs7O2dCQTNEQyx3QkFBd0I7Ozs4QkFpRnZCLFNBQVMsU0FBQyxlQUFlOzJCQUN6QixTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7b0NBQ3ZELE1BQU07MEJBQ04sTUFBTTs4QkFDTixNQUFNOzZCQUVOLEtBQUs7aUNBY0wsS0FBSzsyQkFZTCxLQUFLOzZCQVFMLEtBQUs7NEJBUUwsS0FBSzsyQkFRTCxLQUFLOzBCQWNMLFlBQVksU0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkJBTXRDLEtBQUs7NEJBS0wsS0FBSztnQ0FJTCxLQUFLOytCQUlMLEtBQUs7O2dDQTdMUjs7U0ErRWEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBPdXRwdXQsXG4gIElucHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIEluamVjdCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgVGVtcGxhdGVSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVHlwZSxcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtamRiLXBsZy1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYDxkaXYgW25nQ2xhc3NdPVwiX2N1c3RvbUNsYXNzXCI+XG4gICAgPGRpdiBjbGFzcz1cIl9tYXNrQ2xhc3NcIiBbbmdDbGFzc109XCJ7J2hpZCc6IV92aXNpYmxlfVwiIFtzdHlsZS56SW5kZXhdPVwiMTAwMFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJqZGItbW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIFtuZ0NsYXNzXT1cInsnaGlkJzohX3Zpc2libGV9XCIgW25nU3R5bGVdPVwieydkaXNwYWx5JzohX3Zpc2libGV9XCIgKGNsaWNrKT1cImNsb3NlTW9kYWwoJGV2ZW50KVwiIGNsYXNzPVwiX3dyYXBDbGFzc1wiIFtuZ0NsYXNzXT1cIl93cmFwQ2xhc3NcIiBbc3R5bGUuekluZGV4XT1cIjEwMDBcIiBbYXR0ci5hcmlhLW1vZGFsSWRdPVwibW9kYWxJZFwiPlxuICAgICAgICA8ZGl2ICNtb2RhbF9jb250ZW50IGNsYXNzPVwibW9kYWxcIiBbQG9wdGlvbnNTdGF0ZV09XCJfc3RhdGVcIiBbbmdTdHlsZV09XCJfYm9keVN0eWxlTWFwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJfY2xvc2VhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbC1jbG9zZVwiIChjbGljayk9XCJjbGlja0NhbmNlbCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cIm1vZGFsLWNsb3NlLXhcIj48L3NwYW4+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1jbG9zZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIiAqbmdJZj1cIl90aXRsZXx8X3RpdGxlVHBsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC10aXRsZVwiIFthdHRyLmlkXT1cIm1vZGFsSWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7X3RpdGxlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiX3RpdGxlVHBsfHxkZWZhdWx0VGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdENvbnRlbnQ+e3tfY29udGVudH19PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIl9jb250ZW50VHBsfHxkZWZhdWx0Q29udGVudFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbW9kYWxfY29tcG9uZW50PjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiICpuZ0lmPVwiIV9mb290ZXJIaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYWx1dEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhX2lzQ29uZmlybVwiIGFwcC1qZGItcGxnLWJ1dHRvbiBbamRiU2l6ZV09XCInZGVmYXVsdCdcIiBbamRiVHlwZV09XCInd2hpdGUnXCIgKGNsaWNrKT1cImNsaWNrQ2FuY2VsKCRldmVudClcIj48c3Bhbj57e19jYW5jZWxUZXh0fHwn5Y+W5raIJ319PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFfaXNDb25maXJtXCIgY2xhc3M9XCJyaWdodC1idG5cIiBhcHAtamRiLXBsZy1idXR0b24gW2pkYlNpemVdPVwiJ2RlZmF1bHQnXCIgW2pkYlR5cGVdPVwiJ3ByaW1hcnknXCIgKGNsaWNrKT1cImNsaWNrT2soJGV2ZW50KVwiPjxzcGFuPnt7X29rVGV4dHx8J+ehruiupCd9fTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfaXNDb25maXJtXCIgY2xhc3M9XCJyaWdodC1idG5cIiBhcHAtamRiLXBsZy1idXR0b24gW2pkYlNpemVdPVwiJ2RlZmF1bHQnXCIgW2pkYlR5cGVdPVwiJ3ByaW1hcnknXCIgKGNsaWNrKT1cImNsaWNrT2soJGV2ZW50KVwiIChjbGljayk9XCJjbGlja09rKCRldmVudClcIj48c3Bhbj57e19Sb2dlclRleHR9fTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIl9mb290ZXJUcGx8fGRlZmFsdXRGb290ZXJcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgdGFiaW5kZXg9XCIwXCIgc3R5bGU9XCJ3aWR0aDowcHg7aGVpZ2h0OjBweDtvdmVyZmxvdzpoaWRkZW47XCI+YWFhPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLl9tYXNrQ2xhc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41KX0uX21hc2tDbGFzcy5oaWR7ZGlzcGxheTpub25lfS5fd3JhcENsYXNze3Bvc2l0aW9uOmZpeGVkO292ZXJmbG93OmF1dG87dG9wOjA7bGVmdDowO2JvdHRvbTowO3JpZ2h0OjA7ei1pbmRleDoxMDAwOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO291dGxpbmU6MH0uX3dyYXBDbGFzcy5oaWR7ZGlzcGxheTpub25lfS5tb2RhbHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO2JhY2tncm91bmQ6I2ZmZn0ubW9kYWwtaGVhZGVye2JhY2tncm91bmQ6I2YwZjFmNTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZDdkOGRiO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6M3B4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweH0ubW9kYWwtdGl0bGV7bWFyZ2luOjA7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6NDBweDtjb2xvcjojMzIzMjMzO3RleHQtYWxpZ246Y2VudGVyfS5tb2RhbC1jbG9zZXtjdXJzb3I6cG9pbnRlcjtib3JkZXI6bm9uZTt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O2JhY2tncm91bmQ6MCAwO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjA7ei1pbmRleDoxMDtsaW5lLWhlaWdodDoxO3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiMwMDA7b3V0bGluZTowfS5tb2RhbC1jbG9zZS14e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7bGluZS1oZWlnaHQ6NDBweDtmb250LXNpemU6MTZweDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJ9Lm1vZGFsLWNsb3NlLXg6aG92ZXJ7dHJhbnNpdGlvbjpjb2xvciAuM3MgZWFzZTtjb2xvcjojMDAwfS5tb2RhbC1ib2R5e3BhZGRpbmc6NDBweDtiYWNrZ3JvdW5kOiNmZmY7b3ZlcmZsb3c6aGlkZGVufS5tb2RhbC1mb290ZXJ7cGFkZGluZzo0MHB4IDA7YmFja2dyb3VuZDojZmZmO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6M3B4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweDt0ZXh0LWFsaWduOmNlbnRlcn0ubW9kYWwtZm9vdGVyIC5yaWdodC1idG57bWFyZ2luLWxlZnQ6MjBweH1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ29wdGlvbnNTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdzaG93TScsIHN0eWxlKHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAvLyBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2hpZGVNJywgc3R5bGUoe1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTgwJSknLFxuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgIC8vIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3Nob3dNIDw9PiBoaWRlTScsIGFuaW1hdGUoJzIwMG1zIGVhc2Utb3V0JykpXG4gICAgXSldXG59KVxuZXhwb3J0IGNsYXNzIEpkYlBsZ0RpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgX2N1c3RvbUNsYXNzID0gJyc7XG4gIF9tYXNrQ2xhc3MgPSAnJztcbiAgX2JvZHlTdHlsZU1hcDtcbiAgbW9kYWxJZDogbnVtYmVyO1xuICBfdmlzaWJsZSA9IGZhbHNlO1xuICBfdGl0bGUgPSAnJztcbiAgX2Nsb3NlYWJsZSA9IHRydWU7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIF9jb250ZW50OiBzdHJpbmcgfCBUeXBlPGFueT47XG4gIF9jb250ZW50VHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgX2FuaW1hdGlvblN0YXR1cyA9ICcxMSc7XG4gIF9ib2R5Q2xhc3M6IHN0cmluZztcbiAgX3dpZHRoID0gJzQwMHB4JztcbiAgX2Zvb3RlckhpZGUgPSBmYWxzZTtcbiAgX2lzQ29uZmlybSA9IGZhbHNlO1xuICBfb2tUZXh0ID0gJyc7XG4gIF9jYW5jZWxUZXh0ID0gJyc7XG4gIF9Sb2dlclRleHQgPSAnJztcbiAgX3N0YXRlID0gJ2hpZGVNJztcbiAgX2Zvb3RlclRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBWaWV3Q2hpbGQoJ21vZGFsX2NvbnRlbnQnKSBjb250ZW50RWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21vZGFsX2NvbXBvbmVudCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBib2R5RWw6IFZpZXdDb250YWluZXJSZWY7XG4gIEBPdXRwdXQoKSBNdmlzaWJpbGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIE1Pbk9rOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBNT25DYW5jZWw6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIOW8ueahhuaYvumakFxuICBASW5wdXQoKVxuICBzZXQgTXZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB2aXNpYmxlID0gdGhpcy50b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl92aXNpYmxlID09PSB2aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdmlzaWJsZSA9IHZpc2libGU7XG4gICAgdGhpcy5NdmlzaWJpbGVDaGFuZ2UuZW1pdCh0aGlzLl92aXNpYmxlKTtcbiAgfVxuICBnZXQgTXZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cbiAgLy8g6ZqQ6JePZm9vdGVyXG4gIEBJbnB1dCgpXG4gIHNldCBNZm9vdGVySGlkZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB2aXNpYmxlID0gdGhpcy50b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl92aXNpYmxlID09PSB2aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Zvb3RlckhpZGUgPSB2aXNpYmxlO1xuICB9XG4gIGdldCBNZm9vdGVySGlkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvb3RlckhpZGU7XG4gIH1cbiAgLy8g5qCH6aKYXG4gIEBJbnB1dCgpXG4gIHNldCBNdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBNY29udGVudCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fY29udGVudFRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb250ZW50ID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBNZm9vdGVyKHZhbHVlOnN0cmluZ3xUZW1wbGF0ZVJlZjx2b2lkPil7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpe1xuICAgICAgdGhpcy5fZm9vdGVyVHBsID0gdmFsdWU7XG4gICAgfSBcbiAgfVxuICBcbiAgLy8g6Ieq5a6a5LmJ5a695bqmXG4gIEBJbnB1dCgpXG4gIHNldCBNd2lkdGgodmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMuX3dpZHRoID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlICsgJ3B4JyA6IHZhbHVlO1xuICB9XG5cbiAgLy8g5a6a5L2NbW9kYWzkvY3nva7lkozmoLflvI9cbiAgc2V0U3R5bGUoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmNvbnRlbnRFbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX2JvZHlTdHlsZU1hcCA9IHtcbiAgICAgIC4uLnsgd2lkdGg6IHRoaXMuX3dpZHRoIH1cbiAgICB9O1xuICB9XG5cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVzYycsIFsnJGV2ZW50J10pXG4gIG9uRXNjKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNsaWNrQ2FuY2VsKGUpO1xuICB9XG5cbiAgLy8g6Ieq5a6a5LmJ5qC35byPXG4gIEBJbnB1dCgpXG4gIHNldCBNY2xhc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2N1c3RvbUNsYXNzID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgTU9rVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2tUZXh0ID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IE1jYW5jZWxUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYW5jZWxUZXh0ID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IE1Sb2dlclRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lzQ29uZmlybSA9IHRydWU7XG4gICAgdGhpcy5fUm9nZXJUZXh0ID0gdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cbiAgY3JlYXRlRHluYW1pY0NvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8YW55Pikge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuX2NvbnRlbnQgYXMgVHlwZTxhbnk+KTtcbiAgICB0aGlzLmJvZHlFbC5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIFxuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5fdmlzaWJsZSkge1xuICAgICAgdGhpcy5fc3RhdGUgPSAnc2hvd00nO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29udGVudEVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5mb2N1cygpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RhdGUgPSAnaGlkZU0nO1xuICAgIH1cbiAgfVxuICBjbGlja0NhbmNlbChlKTogdm9pZCB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuX3N0YXRlID0gJ2hpZGVNJztcbiAgICB0aGlzLk1PbkNhbmNlbC5lbWl0KGUpO1xuICB9XG4gIGNsaWNrT2soZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLk1Pbk9rKSB7XG4gICAgICB0aGlzLk1Pbk9rLmVtaXQoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Zpc2libGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N0YXRlID0gJ2hpZGVNJztcbiAgICB9XG4gIH1cbiAgY2xvc2VNb2RhbChlKTogdm9pZCB7XG4gICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICdkaWFsb2cnKSB7XG4gICAgICB0aGlzLmNsaWNrQ2FuY2VsKGUpO1xuICAgICAgdGhpcy5fc3RhdGUgPSAnaGlkZU0nO1xuICAgIH1cbiAgfVxuICB0b0Jvb2xlYW4odmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICcnIHx8ICh2YWx1ZSAmJiB2YWx1ZSAhPT0gZmFsc2UpO1xuICB9XG59XG4iXX0=