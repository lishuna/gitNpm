/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { JdbPlgNewDialogComponent } from '../../components/jdb-plg-new-dialog/jdb-plg-new-dialog.component';
/**
 * @record
 */
export function Options() { }
/**
 * 自定义父容器类，可选
 * @type {?|undefined}
 */
Options.prototype.customClass;
/**
 * 自定义遮罩类，可选
 * @type {?|undefined}
 */
Options.prototype.maskClass;
/**
 * 自定义模态框主体样式，可选
 * @type {?|undefined}
 */
Options.prototype.bodyStyle;
/**
 * 控制模态框显示/隐藏
 * true隐藏 fasle显示
 * 可选
 * @type {?|undefined}
 */
Options.prototype.visible;
/**
 * 弹框标题，可选
 * @type {?|undefined}
 */
Options.prototype.title;
/**
 * 是否显示右上角关闭按钮，默认显示
 * true隐藏 false不显示
 * 可选
 * @type {?|undefined}
 */
Options.prototype.closeable;
/**
 * 模态框内容模板，必选
 * @type {?|undefined}
 */
Options.prototype.component;
/**
 * 默认内容为文本
 * 组件模板component和文本模板同时配置
 * 优先显示组件模板
 * @type {?|undefined}
 */
Options.prototype.text;
/**
 * 当默认内容为文本时，设置文本的类名
 * @type {?|undefined}
 */
Options.prototype.class;
/**
 * 当默认内容为文本时，设置文本的样式
 * class和style同时配置
 * 优先显示style
 * @type {?|undefined}
 */
Options.prototype.style;
/**
 * 模板参数
 * @type {?|undefined}
 */
Options.prototype.componentParams;
/**
 * 模态框宽度
 * 默认400px
 * @type {?|undefined}
 */
Options.prototype.width;
/**
 * 是否显示/隐藏底部按钮，默认显示
 * true显示 false隐藏
 * @type {?|undefined}
 */
Options.prototype.footer;
/**
 * 是否是确认模态框，默认不是
 * true是 false不是
 * @type {?|undefined}
 */
Options.prototype.isConfirm;
/**
 * 确认按钮文案
 * @type {?|undefined}
 */
Options.prototype.okText;
/**
 * 取消按钮文案
 * @type {?|undefined}
 */
Options.prototype.cancelText;
/**
 * 自定义弹框关闭类型，默认为mask
 * mask:点击除模态框区域以外的位置关闭模态框
 * custom:自主触发关闭操作
 * 可选
 * @type {?|undefined}
 */
Options.prototype.closeType;
/**
 * 视图容器
 * 必选
 * @type {?}
 */
Options.prototype.container;
/**
 * 监听右上角关闭事件，默认为关闭模态框，没有额外的动作
 * 可选
 * @type {?|undefined}
 */
Options.prototype.onClose;
/**
 * 监听确认事件，默认为关闭模态框，没有额外的动作
 * 可选
 * @type {?|undefined}
 */
Options.prototype.onOk;
/**
 * 监听取消事件，默认为关闭模态框，没有额外的动作
 * 可选
 * @type {?|undefined}
 */
Options.prototype.onCancel;
var JdbModalService = /** @class */ (function () {
    function JdbModalService(componentFactoryResolver) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this._componentRefList = [];
        this._options = {
            customClass: '',
            maskClass: '',
            bodyStyle: null,
            visible: false,
            title: '',
            closeable: true,
            component: null,
            text: '',
            componentParams: {},
            width: null,
            footer: true,
            container: null,
            isConfirm: false,
            okText: '',
            cancelText: '',
            class: '',
            style: null,
            onClose: function () {
                _this.destroy();
            },
            onOk: function () {
                _this.destroy();
            },
            onCancel: function () {
                _this.destroy();
            }
        };
    }
    //动态创建模态框,返回模态框实例
    /**
     * @param {?} options
     * @return {?}
     */
    JdbModalService.prototype.create = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        this._options = {
            customClass: '',
            maskClass: '',
            bodyStyle: null,
            visible: false,
            title: '',
            closeable: true,
            component: null,
            text: '',
            componentParams: {},
            width: null,
            footer: true,
            container: null,
            isConfirm: false,
            okText: '',
            cancelText: '',
            class: '',
            style: null,
            onClose: function () {
                _this.destroy();
            },
            onOk: function () {
                _this.destroy();
            },
            onCancel: function () {
                _this.destroy();
            }
        };
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(JdbPlgNewDialogComponent);
        /** @type {?} */
        var componentRef = options.container.createComponent(componentFactory);
        this._componentRefList.push(componentRef);
        //assign配置
        if (options) {
            Object.assign(this._options, options);
        }
        this.assignProps(componentRef);
        //获取组件实例的根节点并append到body上
        window.document.body.appendChild(/** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]));
        return componentRef;
    };
    //模态框实例上添加属性
    /**
     * @param {?} componentRef
     * @return {?}
     */
    JdbModalService.prototype.assignProps = /**
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        /** @type {?} */
        var _options = this._options;
        /** @type {?} */
        var ins = componentRef.instance;
        ins.visible = _options.visible || true;
        ins._title = _options.title || '提示';
        ins._width = _options.width ? _options.width + "px" : '400px';
        ins._state = 'showM';
        ins._contentTpl = _options.component;
        ins._componentParams = _options.componentParams;
        ins._customClass = _options.customClass;
        ins._maskClass = _options.maskClass;
        ins._isConfirm = _options.isConfirm;
        ins._okText = _options.okText || '确认';
        ins._cancelText = _options.cancelText || '取消';
        ins._footer = _options.footer;
        ins._closeable = _options.closeable;
        ins._closeType = _options.closeType || 'mask';
        ins._text = _options.text || 'hello';
        ins._class = _options.class || 'defaultTextClass';
        ins._style = _options.style;
        ins.onClose.subscribe(function (e) {
            _options.onClose();
        });
        ins.onOk.subscribe(function (e) {
            _options.onOk();
        });
        ins.onCancel.subscribe(function (e) {
            _options.onCancel();
        });
    };
    //销毁模态框
    /**
     * @return {?}
     */
    JdbModalService.prototype.destroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var len = this._componentRefList.length - 1;
        if (this._componentRefList[len]) {
            this._componentRefList[len].destroy();
        }
        this._componentRefList.pop();
    };
    //triggerOk
    /**
     * @return {?}
     */
    JdbModalService.prototype.triggerOk = /**
     * @return {?}
     */
    function () {
        this._options.onOk();
    };
    //triggerClose
    /**
     * @return {?}
     */
    JdbModalService.prototype.triggerClose = /**
     * @return {?}
     */
    function () {
        this._options.onClose();
    };
    //triggerCancel
    /**
     * @return {?}
     */
    JdbModalService.prototype.triggerCancel = /**
     * @return {?}
     */
    function () {
        this._options.onCancel();
    };
    JdbModalService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    JdbModalService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    return JdbModalService;
}());
export { JdbModalService };
if (false) {
    /** @type {?} */
    JdbModalService.prototype.componentRef;
    /** @type {?} */
    JdbModalService.prototype._componentRefList;
    /** @type {?} */
    JdbModalService.prototype._options;
    /** @type {?} */
    JdbModalService.prototype.componentFactoryResolver;
}
//# sourceMappingURL=jdb-modal.service.js.map