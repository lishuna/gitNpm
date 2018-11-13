/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, Output, Input, ElementRef, EventEmitter, ViewContainerRef, Type, ComponentFactoryResolver, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
var JdbPlgNewDialogComponent = /** @class */ (function () {
    function JdbPlgNewDialogComponent(resolver, renderer) {
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
    Object.defineProperty(JdbPlgNewDialogComponent.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        //弹框显示隐藏
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
    Object.defineProperty(JdbPlgNewDialogComponent.prototype, "_width", {
        //弹框宽度
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
    JdbPlgNewDialogComponent.prototype.ngOnInit = /**
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
    JdbPlgNewDialogComponent.prototype.createDynamicDom = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var insertDiv = this.renderer.createElement('div');
        /** @type {?} */
        var text = this.renderer.createText(this._text);
        this.renderer.addClass(insertDiv, this._class);
        this.renderer.appendChild(insertDiv, text);
        if (this._style) {
            for (var key in this._style) {
                this.renderer.setStyle(insertDiv, key, this._style[key]);
            }
        }
        this.renderer.appendChild(document.querySelector('._modalTextBody'), insertDiv);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    JdbPlgNewDialogComponent.prototype.createDynamicComponent = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var factory = this.resolver.resolveComponentFactory(component);
        //生成组件实例
        this.contentComponentRef = this.bodyEl.createComponent(factory);
        //模板的输入属性
        for (var key in this._componentParams) {
            this.contentComponentRef.instance[key] = this._componentParams[key];
        }
        //立刻执行一次变更检测
        this.contentComponentRef.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    JdbPlgNewDialogComponent.prototype.ngAfterViewInit = /**
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
    JdbPlgNewDialogComponent.prototype.closeModel = /**
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
    JdbPlgNewDialogComponent.prototype.confirmModel = /**
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
    JdbPlgNewDialogComponent.prototype.cancelModel = /**
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
    JdbPlgNewDialogComponent.prototype.cusCloseModal = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var flag = this.isChildOf(e.target, this.contentEl.nativeElement);
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
    JdbPlgNewDialogComponent.prototype.isChildOf = /**
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    function (child, parent) {
        /** @type {?} */
        var parentNode;
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
    JdbPlgNewDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-new-dialog',
                    template: "<div [ngClass]=\"_customClass\"> <div class=\"_newMaskClass\" [ngClass]=\"{'hid':!_visible}\" [style.zIndex]=\"900\"></div> <div class=\"jdb-modal\" tabindex=\"-1\" role=\"dialog\" [ngClass]=\"{'hid':!_visible}\" [ngStyle]=\"{'dispaly':!_visible}\" (click)=\"cusCloseModal($event)\" class=\"_newWrapClass\" [ngClass]=\"_newWrapClass\" [style.zIndex]=\"900\"> <div #modal_content class=\"new-modal\" [@optionsState]=\"_state\" [ngStyle]=\"_bodyStyleMap\"> <div class=\"modal-content\"> <ng-template [ngIf]=\"_closeable\"> <button class=\"new-modal-close\" style=\"outline: none\" (click)=\"closeModel($event)\"> <span class=\"icon-close\"></span> </button> </ng-template> <div class=\"new-modal-header\" *ngIf=\"_title\"> <div class=\"new-modal-title\" [attr.id]=\"modalId\">{{_title}}</div> </div> <div class=\"new-modal-body _modalTextBody\"> <ng-template #modal_component></ng-template> <ng-template #modal_text></ng-template> </div> <div class=\"new-modal-footer\" *ngIf=\"_footer\"> <button *ngIf=\"!_isConfirm\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'gray'\" (click)=\"cancelModel($event)\"><span>{{_cancelText}}</span></button> <button *ngIf=\"!_isConfirm\" class=\"right-btn\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'primary'\" (click)=\"confirmModel($event)\"><span>{{_okText}}</span></button> <button *ngIf=\"_isConfirm\" class=\"right-btn confirm-btn\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'primary'\" (click)=\"confirmModel($event)\"><span>{{_okText}}</span></button> </div> </div> </div> </div> </div>",
                    animations: [
                        trigger('optionsState', [
                            state('showM', style({
                                opacity: '1',
                            })),
                            state('hideM', style({
                                opacity: '0',
                            })),
                            transition('showM <=> hideM', animate('200ms ease-out'))
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    JdbPlgNewDialogComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: Renderer2 }
    ]; };
    JdbPlgNewDialogComponent.propDecorators = {
        contentEl: [{ type: ViewChild, args: ['modal_content',] }],
        textEl: [{ type: ViewChild, args: ['modal_text',] }],
        bodyEl: [{ type: ViewChild, args: ['modal_component', { read: ViewContainerRef },] }],
        onClose: [{ type: Output }],
        onOk: [{ type: Output }],
        onCancel: [{ type: Output }],
        _contentTpl: [{ type: Input }],
        visible: [{ type: Input }],
        _width: [{ type: Input }]
    };
    return JdbPlgNewDialogComponent;
}());
export { JdbPlgNewDialogComponent };
if (false) {
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._visible;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._title;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._bodyStyleMap;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._customClass;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._maskClass;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._closeable;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._content;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._footer;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._isConfirm;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._okText;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._cancelText;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._state;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._closeType;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._componentParams;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._text;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._class;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._style;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype.contentComponentRef;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype.contentEl;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype.textEl;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype.bodyEl;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype.onClose;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype.onOk;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype.onCancel;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype._contentTpl;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype.resolver;
    /** @type {?} */
    JdbPlgNewDialogComponent.prototype.renderer;
}
//# sourceMappingURL=jdb-plg-new-dialog.component.js.map