/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Injector, Output, EventEmitter, } from '@angular/core';
var JdbTabComponent = /** @class */ (function () {
    function JdbTabComponent(componentFactoryResolver, _injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this._injector = _injector;
        this.onTabChange = new EventEmitter();
        this.onTabRemove = new EventEmitter();
        this.onTopComMsg = new EventEmitter();
        this.items = [];
        this.tabComs = [];
        this.curTabIndex = 0;
        this.tabIdComMap = {};
    }
    /**
     * @return {?}
     */
    JdbTabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     *
     * @param ChildComponent
     * @param attrs:{
     *     propery:value
     * ]
     * title:string
     * isCloseFlag
     * @description: tab切换的样式作为可配置功能拓展，主要是通过类名设置，提供主题名theme和色调搭配 style:
     * 一、theme说明：
     * - text-纯文本
     * - trapezoid-梯形
     * - rectangle-长方形
     * - 待以后添加
     * 二、style说明：
     * 1、纯文本的一般情况下是没有边框和背景色的，所以格式遵循：'形状'-'初始字体颜色''激活字体颜色''边框色''边框长还是短'
     * - text garyBlackBlueLong（文本的默认样式）
     * - text garyBlackBlueShort
     * 2、图形一般情况下有边框和背景色：
     * （格式严格遵循：'形状'-'初始背景色''激活背景色''边框色''边框长还是短': 比如 'rectangle grayWhiteBlueLong')
     * - rectangle grayWhiteBlueLong: 长方形-灰色 白色 蓝边 长。这也是默认的tab样式
     * - trapezoid grayWhite: 梯形-灰色 白色。说明梯形的tab没有 边框的颜色效果
     * （如果倒数几个配置均不需要，则用nonono，直接省略不写：'trapezoid-grayWhite'））
     * （但是如果是中间有配置项为no，则不能省略 no。书写为：'trapezoid-noNoBlueLong'）
     * @example:
     * this.lefTopTab.addItem(ChildrenComponent, {
     *     theme: {
     *      height: 40,
     *      name: 'trapezoid',
     *      style: 'grayWhite',
     *      borderLength: 'long' / 'short'
     *     }
     *   }, '主页', '', true);
     * @extends:
     * 如果颜色配置遇到'light'，表示设置透明；
     * 三、borderLength说明：
     * ‘long'-长边框，此时隐藏元素
     * ‘short'-短边框，此时显示元素
     */
    /**
     *
     * \@description: tab切换的样式作为可配置功能拓展，主要是通过类名设置，提供主题名theme和色调搭配 style:
     * 一、theme说明：
     * - text-纯文本
     * - trapezoid-梯形
     * - rectangle-长方形
     * - 待以后添加
     * 二、style说明：
     * 1、纯文本的一般情况下是没有边框和背景色的，所以格式遵循：'形状'-'初始字体颜色''激活字体颜色''边框色''边框长还是短'
     * - text garyBlackBlueLong（文本的默认样式）
     * - text garyBlackBlueShort
     * 2、图形一般情况下有边框和背景色：
     * （格式严格遵循：'形状'-'初始背景色''激活背景色''边框色''边框长还是短': 比如 'rectangle grayWhiteBlueLong')
     * - rectangle grayWhiteBlueLong: 长方形-灰色 白色 蓝边 长。这也是默认的tab样式
     * - trapezoid grayWhite: 梯形-灰色 白色。说明梯形的tab没有 边框的颜色效果
     * （如果倒数几个配置均不需要，则用nonono，直接省略不写：'trapezoid-grayWhite'））
     * （但是如果是中间有配置项为no，则不能省略 no。书写为：'trapezoid-noNoBlueLong'）
     * \@example:
     * this.lefTopTab.addItem(ChildrenComponent, {
     *     theme: {
     *      height: 40,
     *      name: 'trapezoid',
     *      style: 'grayWhite',
     *      borderLength: 'long' / 'short'
     *     }
     *   }, '主页', '', true);
     * \@extends:
     * 如果颜色配置遇到'light'，表示设置透明；
     * 三、borderLength说明：
     * ‘long'-长边框，此时隐藏元素
     * ‘short'-短边框，此时显示元素
     * @param {?} ChildComponent
     * @param {?} attrs
     * @param {?} title
     * @param {?=} comId
     * @param {?=} isCloseFlag
     * @return {?}
     */
    JdbTabComponent.prototype.addItem = /**
     *
     * \@description: tab切换的样式作为可配置功能拓展，主要是通过类名设置，提供主题名theme和色调搭配 style:
     * 一、theme说明：
     * - text-纯文本
     * - trapezoid-梯形
     * - rectangle-长方形
     * - 待以后添加
     * 二、style说明：
     * 1、纯文本的一般情况下是没有边框和背景色的，所以格式遵循：'形状'-'初始字体颜色''激活字体颜色''边框色''边框长还是短'
     * - text garyBlackBlueLong（文本的默认样式）
     * - text garyBlackBlueShort
     * 2、图形一般情况下有边框和背景色：
     * （格式严格遵循：'形状'-'初始背景色''激活背景色''边框色''边框长还是短': 比如 'rectangle grayWhiteBlueLong')
     * - rectangle grayWhiteBlueLong: 长方形-灰色 白色 蓝边 长。这也是默认的tab样式
     * - trapezoid grayWhite: 梯形-灰色 白色。说明梯形的tab没有 边框的颜色效果
     * （如果倒数几个配置均不需要，则用nonono，直接省略不写：'trapezoid-grayWhite'））
     * （但是如果是中间有配置项为no，则不能省略 no。书写为：'trapezoid-noNoBlueLong'）
     * \@example:
     * this.lefTopTab.addItem(ChildrenComponent, {
     *     theme: {
     *      height: 40,
     *      name: 'trapezoid',
     *      style: 'grayWhite',
     *      borderLength: 'long' / 'short'
     *     }
     *   }, '主页', '', true);
     * \@extends:
     * 如果颜色配置遇到'light'，表示设置透明；
     * 三、borderLength说明：
     * ‘long'-长边框，此时隐藏元素
     * ‘short'-短边框，此时显示元素
     * @param {?} ChildComponent
     * @param {?} attrs
     * @param {?} title
     * @param {?=} comId
     * @param {?=} isCloseFlag
     * @return {?}
     */
    function (ChildComponent, attrs, title, comId, isCloseFlag) {
        var _this = this;
        if (comId === void 0) { comId = ""; }
        if (isCloseFlag === void 0) { isCloseFlag = false; }
        if (comId && this.tabIdComMap[comId]) {
            var /** @type {?} */ com = this.tabIdComMap[comId];
            this.tabChange(com.index);
            return;
        }
        var /** @type {?} */ childComponent = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
        var /** @type {?} */ comInstance = this.target.createComponent(childComponent);
        var /** @type {?} */ keys = Object.keys(attrs);
        this.items.push({
            title: title,
            isCloseFlag: isCloseFlag,
            theme: (attrs.theme ? (attrs.theme.name ? attrs.theme.name : null) : null),
            style: (attrs.theme ? (attrs.theme.style ? attrs.theme.style : null) : null),
            height: (attrs.theme ? (attrs.theme.height ? attrs.theme.height : null) : null),
            borderLength: (attrs.theme ? (attrs.theme.borderLength ? attrs.theme.borderLength : null) : null)
        });
        keys.forEach(function (value) {
            comInstance.instance[value] = attrs[value];
        });
        this.tabComs.push(comInstance);
        if (this.items.length > 1) {
            this.setOneComHide(this.curTabIndex);
        }
        this.tabSubs = comInstance.instance['onTopComMsg'] = new EventEmitter();
        this.tabSubs.subscribe(function (value) {
            _this.onTopComMsg.emit(value);
        });
        this.curTabIndex = this.items.length - 1;
        if (comId) {
            this.tabIdComMap[comId] = {
                index: this.curTabIndex,
                comInstance: comInstance.instance
            };
        }
        return comInstance;
    };
    /**
     * @param {?} tabIndex
     * @return {?}
     */
    JdbTabComponent.prototype.setOneComHide = /**
     * @param {?} tabIndex
     * @return {?}
     */
    function (tabIndex) {
        this.tabComs[tabIndex].location.nativeElement.style.display = "none";
    };
    /**
     * @param {?} tabIndex
     * @return {?}
     */
    JdbTabComponent.prototype.setOneComShow = /**
     * @param {?} tabIndex
     * @return {?}
     */
    function (tabIndex) {
        this.tabComs[tabIndex].location.nativeElement.style.display = "block";
    };
    /**
     * @param {?} index
     * @return {?}
     */
    JdbTabComponent.prototype.tabChange = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.curTabIndex === index) {
            return;
        }
        this.setOneComHide(this.curTabIndex);
        this.setOneComShow(index);
        this.curTabIndex = index;
        this.onTabChange.emit(index);
        this.tabComs[index].instance.tabRefresh && this.tabComs[index].instance.tabRefresh({});
        // this.tabComs[index].destroy();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    JdbTabComponent.prototype.setOneTabShow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.tabChange(index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    JdbTabComponent.prototype.removeTab = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.tabComs[index].destroy();
        this.tabComs.splice(index, 1);
        this.items.splice(index, 1);
        if (index <= this.curTabIndex) {
            this.curTabIndex--;
        }
        if (this.curTabIndex < 0) {
            this.curTabIndex = 0;
        }
        this.setOneComShow(this.curTabIndex);
        this.onTabRemove.emit(index);
        var /** @type {?} */ tabIdComMap = this.tabIdComMap;
        for (var /** @type {?} */ key in tabIdComMap) {
            if (tabIdComMap[key].index == index) {
                delete tabIdComMap[key];
                break;
            }
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    JdbTabComponent.prototype.removeTabById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var /** @type {?} */ tabIdComMap = this.tabIdComMap;
        for (var /** @type {?} */ key in tabIdComMap) {
            if (key == id) {
                this.removeTab(tabIdComMap[key]['index']);
                break;
            }
        }
    };
    /**
     * @return {?}
     */
    JdbTabComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.target) {
            // this.target.destroy();
            this.target.clear();
        }
    };
    JdbTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jdb-tab',
                    template: "<div class=\"tab-wraper\"> <div class=\"tab-nav-wraper\"> <div *ngFor=\"let item of items;let i = index;\" class=\"tab-item {{item.theme}} {{item.style}} tab-item-hei{{item.height}}\" [ngClass]=\"{'tab-selected':i == curTabIndex, 'trapezoid1':item.theme === 'trapezoid'&&(i == 0)}\" title='{{item.title}}'> <div (click)=\"tabChange(i)\" class=\"tab-text\" [ngClass]=\"{'trapezoid-div':item.theme === 'trapezoid'}\"> {{item.title}}</div> <span class=\"close-btn\" (click)=\"removeTab(i)\" *ngIf=\"i !== 0 && item.isCloseFlag != true\">&times;</span> <div *ngIf=\"item.borderLength === 'short'\" class=\"self-border\"></div> </div> </div> <div class=\"tab-content-wraper\"> <div #tabContent class=\"place-holder\"></div> </div> </div> ",
                },] },
    ];
    /** @nocollapse */
    JdbTabComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
        { type: Injector, },
    ]; };
    JdbTabComponent.propDecorators = {
        "target": [{ type: ViewChild, args: ['tabContent', { read: ViewContainerRef },] },],
        "onTabChange": [{ type: Output },],
        "onTabRemove": [{ type: Output },],
        "onTopComMsg": [{ type: Output },],
    };
    return JdbTabComponent;
}());
export { JdbTabComponent };
function JdbTabComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    JdbTabComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    JdbTabComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    JdbTabComponent.propDecorators;
    /** @type {?} */
    JdbTabComponent.prototype.target;
    /** @type {?} */
    JdbTabComponent.prototype.onTabChange;
    /** @type {?} */
    JdbTabComponent.prototype.onTabRemove;
    /** @type {?} */
    JdbTabComponent.prototype.onTopComMsg;
    /** @type {?} */
    JdbTabComponent.prototype.items;
    /** @type {?} */
    JdbTabComponent.prototype.tabComs;
    /** @type {?} */
    JdbTabComponent.prototype.tabSubs;
    /** @type {?} */
    JdbTabComponent.prototype.curTabIndex;
    /** @type {?} */
    JdbTabComponent.prototype.tabIdComMap;
    /** @type {?} */
    JdbTabComponent.prototype.componentFactoryResolver;
    /** @type {?} */
    JdbTabComponent.prototype._injector;
}
//# sourceMappingURL=jdb-tab.component.js.map