/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewChild, Output, Input, ElementRef, EventEmitter, ViewContainerRef, Type, ComponentFactoryResolver, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
var JdbPlgDialogComponent = /** @class */ (function () {
    function JdbPlgDialogComponent(resolver, renderer) {
        this.resolver = resolver;
        this.renderer = renderer;
        this._visible = false;
        this._title = '提示';
        this._customClass = '';
        this._maskClass = '';
        this._closeable = true;
        this._footer = true;
        this._isConfirm = false;
        this._okText = '';
        this._cancelText = '';
        this._state = '';
        this._closeType = 'mask';
        this._componentParams = {};
        this._text = '';
        this._class = '';
        this._style = null;
        this.onClose = new EventEmitter();
        this.onOk = new EventEmitter();
        this.onCancel = new EventEmitter();
    }
    Object.defineProperty(JdbPlgDialogComponent.prototype, "visible", {
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
            this._visible = value;
            //控制切入和切出动画
            if (this._visible) {
                this._state = 'showM';
            }
            else {
                this._state = 'hideM';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "_width", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._bodyStyleMap = {
                width: value
            };
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
        //判断_contentTpl是不是组件实例
        if (this._contentTpl instanceof Type) {
            this.createDynamicComponent(/** @type {?} */ (this._contentTpl));
        }
        else {
            this.createDynamicDom();
        }
    };
    //创建文本模板内容
    /**
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.createDynamicDom = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ insertDiv = this.renderer.createElement('div');
        var /** @type {?} */ text = this.renderer.createText(this._text);
        this.renderer.addClass(insertDiv, this._class);
        this.renderer.appendChild(insertDiv, text);
        if (this._style) {
            for (var /** @type {?} */ key in this._style) {
                this.renderer.setStyle(insertDiv, key, this._style[key]);
            }
        }
        this.renderer.appendChild(document.querySelector('._modalTextBody'), insertDiv);
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
        //生成组件工厂函数
        var /** @type {?} */ factory = this.resolver.resolveComponentFactory(component);
        //生成组件实例
        this.contentComponentRef = this.bodyEl.createComponent(factory);
        //模板的输入属性
        for (var /** @type {?} */ key in this._componentParams) {
            this.contentComponentRef.instance[key] = this._componentParams[key];
        }
        //立刻执行一次变更检测
        this.contentComponentRef.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        //动态组件实例存在 插入到视图容器中
        if (this.contentComponentRef) {
            this.bodyEl.insert(this.contentComponentRef.hostView);
        }
    };
    //关闭弹框
    /**
     * @param {?} e
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.closeModel = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onClose.emit(e);
        this._state = 'hideM';
    };
    //确认弹框
    /**
     * @param {?} e
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.confirmModel = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onOk.emit(e);
        this._state = 'hideM';
    };
    //取消弹框
    /**
     * @param {?} e
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.cancelModel = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onCancel.emit(e);
        this._state = 'hideM';
    };
    //点击遮罩关闭
    /**
     * @param {?} e
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.cusCloseModal = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var /** @type {?} */ flag = this.isChildOf(e.target, this.contentEl.nativeElement);
        if (this._closeType === 'mask' && !flag) {
            this.onClose.emit(e);
            this._state = 'hideM';
        }
    };
    //阻止冒泡
    // selfCloseModal(e: MouseEvent): void {
    //   e.stopPropagation();
    //   e.cancelBubble = true;
    // }
    /**
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    JdbPlgDialogComponent.prototype.isChildOf = /**
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    function (child, parent) {
        var /** @type {?} */ parentNode;
        if (child && parent) {
            parentNode = child.parentNode;
            while (parentNode) {
                if (parent === parentNode) {
                    return true;
                }
                parentNode = parentNode.parentNode;
            }
        }
        return false;
    };
    JdbPlgDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-dialog',
                    template: "<div [ngClass]=\"_customClass\"> <div class=\"_maskClass\" [ngClass]=\"{'hid':!_visible}\" [style.zIndex]=\"1000\"></div> <div class=\"jdb-modal\" tabindex=\"-1\" role=\"dialog\" [ngClass]=\"{'hid':!_visible}\" [ngStyle]=\"{'dispaly':!_visible}\" (click)=\"cusCloseModal($event)\" class=\"_wrapClass\" [ngClass]=\"_wrapClass\" [style.zIndex]=\"1000\"> <div #modal_content class=\"modal\" [@optionsState]=\"_state\" [ngStyle]=\"_bodyStyleMap\"> <div class=\"modal-content\"> <ng-template [ngIf]=\"_closeable\"> <button class=\"modal-close\" style=\"outline: none\" (click)=\"closeModel($event)\"> <span class=\"icon-close\"></span> </button> </ng-template> <div class=\"modal-header\" *ngIf=\"_title\"> <div class=\"modal-title\" [attr.id]=\"modalId\">{{_title}}</div> </div> <div class=\"modal-body _modalTextBody\"> <ng-template #modal_component></ng-template> <ng-template #modal_text></ng-template> </div> <div class=\"modal-footer\" *ngIf=\"_footer\"> <button *ngIf=\"!_isConfirm\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'gray'\" (click)=\"cancelModel($event)\"><span>{{_cancelText}}</span></button> <button *ngIf=\"!_isConfirm\" class=\"right-btn\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'primary'\" (click)=\"confirmModel($event)\"><span>{{_okText}}</span></button> <button *ngIf=\"_isConfirm\" class=\"right-btn confirm-btn\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'primary'\" (click)=\"confirmModel($event)\"><span>{{_okText}}</span></button> </div> </div> </div> </div> </div>",
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
        { type: Renderer2, },
    ]; };
    JdbPlgDialogComponent.propDecorators = {
        "contentEl": [{ type: ViewChild, args: ['modal_content',] },],
        "textEl": [{ type: ViewChild, args: ['modal_text',] },],
        "bodyEl": [{ type: ViewChild, args: ['modal_component', { read: ViewContainerRef },] },],
        "onClose": [{ type: Output },],
        "onOk": [{ type: Output },],
        "onCancel": [{ type: Output },],
        "_contentTpl": [{ type: Input },],
        "visible": [{ type: Input },],
        "_width": [{ type: Input },],
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
    JdbPlgDialogComponent.prototype._visible;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._title;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._bodyStyleMap;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._customClass;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._maskClass;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._closeable;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._content;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._footer;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._isConfirm;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._okText;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._cancelText;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._state;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._closeType;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._componentParams;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._text;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._class;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._style;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.contentComponentRef;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.contentEl;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.textEl;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.bodyEl;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.onClose;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.onOk;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.onCancel;
    /** @type {?} */
    JdbPlgDialogComponent.prototype._contentTpl;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.resolver;
    /** @type {?} */
    JdbPlgDialogComponent.prototype.renderer;
}
//# sourceMappingURL=jdb-plg-dialog.component.js.map