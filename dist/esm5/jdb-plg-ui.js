import { Component, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver, Injector, Output, EventEmitter, ElementRef, Renderer, HostListener, Directive, Renderer2, TemplateRef, Type, forwardRef, ContentChild, ViewEncapsulation, Injectable, Pipe, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';
import { __assign } from 'tslib';
import { Subject, Observable } from 'rxjs';
import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var JdbPlgToastComponent = /** @class */ (function () {
    function JdbPlgToastComponent() {
        this.msg = "";
    }
    /**
     * @return {?}
     */
    JdbPlgToastComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    JdbPlgToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-toast',
                    template: "<div class=\"toast-wraper\" [innerHtml]=\"msg\"> </div> ",
                },] },
    ];
    /** @nocollapse */
    JdbPlgToastComponent.ctorParameters = function () { return []; };
    JdbPlgToastComponent.propDecorators = {
        msg: [{ type: Input }]
    };
    return JdbPlgToastComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var JdbTabComponent = /** @class */ (function () {
    function JdbTabComponent(componentFactoryResolver, _injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this._injector = _injector;
        this.onTabChange = new EventEmitter();
        this.onTabRemove = new EventEmitter();
        this.onTopComMsg = new EventEmitter();
        this.totalTipChange = new EventEmitter();
        this.items = [];
        this.tabComs = [];
        this.curTabIndex = 0;
        this.tabIdComMap = {};
        this.totalTip = {
            isShow: false
        };
    }
    /**
     * @return {?}
     */
    JdbTabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    JdbTabComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // console.log('changes:totalTip:' + this.totalTip);
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
        if (comId === void 0) { comId = ''; }
        if (isCloseFlag === void 0) { isCloseFlag = false; }
        if (comId && this.tabIdComMap[comId]) {
            /** @type {?} */
            var com = this.tabIdComMap[comId];
            this.tabChange(com.index);
            return;
        }
        /** @type {?} */
        var childComponent = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
        /** @type {?} */
        var comInstance = this.target.createComponent(childComponent);
        /** @type {?} */
        var keys = Object.keys(attrs);
        this.items.push({
            title: title,
            isCloseFlag: isCloseFlag,
            theme: attrs.theme ? (attrs.theme.name ? attrs.theme.name : null) : null,
            style: attrs.theme
                ? attrs.theme.style
                    ? attrs.theme.style
                    : null
                : null,
            height: attrs.theme
                ? attrs.theme.height
                    ? attrs.theme.height
                    : null
                : null,
            borderLength: attrs.theme
                ? attrs.theme.borderLength
                    ? attrs.theme.borderLength
                    : null
                : null
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
        this.tabComs[tabIndex].location.nativeElement.style.display = 'none';
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
        this.tabComs[tabIndex].location.nativeElement.style.display = 'block';
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
        this.tabComs[index].instance.tabRefresh &&
            this.tabComs[index].instance.tabRefresh({});
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
        /** @type {?} */
        var tabIdComMap = this.tabIdComMap;
        for (var key in tabIdComMap) {
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
        /** @type {?} */
        var tabIdComMap = this.tabIdComMap;
        for (var key in tabIdComMap) {
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
                    template: "<div class=\"tab-wraper\"> <div class=\"tab-nav-wraper\"> <div *ngFor=\"let item of items;let i = index;\" class=\"tab-item {{item.theme}} {{item.style}} tab-item-hei{{item.height}}\" [ngClass]=\"{'tab-selected':i == curTabIndex, 'trapezoid1':item.theme === 'trapezoid'&&(i == 0)}\" title='{{item.title}}'> <div (click)=\"tabChange(i)\" class=\"tab-text\" [ngClass]=\"{'trapezoid-div':item.theme === 'trapezoid'}\"> {{item.title}}<span *ngIf=\"totalTip.isShow ? totalTip.isShow : false\" class=\"tab-total\">{{totalTip[i]}}</span> </div> <span class=\"close-btn\" (click)=\"removeTab(i)\" *ngIf=\"i !== 0 && item.isCloseFlag != true\">&times;</span> <div *ngIf=\"item.borderLength === 'short'\" class=\"self-border\"></div> </div> </div> <div class=\"tab-content-wraper\"> <div #tabContent class=\"place-holder\"></div> </div> </div> "
                },] },
    ];
    /** @nocollapse */
    JdbTabComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: Injector }
    ]; };
    JdbTabComponent.propDecorators = {
        target: [{ type: ViewChild, args: ['tabContent', { read: ViewContainerRef },] }],
        onTabChange: [{ type: Output }],
        onTabRemove: [{ type: Output }],
        onTopComMsg: [{ type: Output }],
        totalTip: [{ type: Input }],
        totalTipChange: [{ type: Output }]
    };
    return JdbTabComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ShowPictureComponent = /** @class */ (function () {
    function ShowPictureComponent() {
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ShowPictureComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ShowPictureComponent.prototype.closeModel = /**
     * @return {?}
     */
    function () {
        this.update.emit({ status: false });
    };
    ShowPictureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-show-picture',
                    template: "<div> <div class=\"img-mask\" (click)=\"closeModel()\"> <!-- \u906E\u7F69\u5C42 --> </div> <div class=\"img-content\"> <span class=\"close\" (click)=\"closeModel()\"> <img src=\"/assets/images/close-x.png\" alt=\"\"> </span> <img [src]=\"pictureUrl\" alt=\"\" style=\"max-height: 600px;max-width: 800px;\"> </div> </div> ",
                },] },
    ];
    /** @nocollapse */
    ShowPictureComponent.ctorParameters = function () { return []; };
    ShowPictureComponent.propDecorators = {
        pictureUrl: [{ type: Input }],
        update: [{ type: Output }]
    };
    return ShowPictureComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PictureViewerComponent = /** @class */ (function () {
    function PictureViewerComponent(renderer) {
        this.renderer = renderer;
        this.pictureList = [];
        this.update = new EventEmitter();
        // 设置容器的默认宽高，可适配 可配置属性
        this.maxWidth = 800;
        this.maxHeight = 600;
        this.jdbShowType = 1;
        this._jdbMaster = true;
        this._jdbClear = true;
        this.dragStatus = false;
        this.current = 0;
        this.imgOperate = {
            num: 1,
            degnum: 0
        };
    }
    Object.defineProperty(PictureViewerComponent.prototype, "jdbMaster", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbMaster;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbMaster = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PictureViewerComponent.prototype, "jdbClear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbClear;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbClear = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PictureViewerComponent.prototype, "jdbCurrent", {
        get: /**
         * @return {?}
         */
        function () {
            return this.current;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value > this.pictureList.length || value < 0) {
                this.current = 0;
                return;
            }
            this.current = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PictureViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.elem = this.imgBox.nativeElement.children; // 所有的li
    };
    /**
     * @return {?}
     */
    PictureViewerComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.pictureList) {
            this.pictureList.forEach(function (element, index) {
                _this.resetPosition(index);
            });
        }
    };
    // 设置元素样式
    /**
     * @return {?}
     */
    PictureViewerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var imgContent = this.imgContent.nativeElement;
        this.renderer.setElementStyle(imgContent, 'height', this.maxHeight + 'px');
        this.renderer.setElementStyle(imgContent, 'width', this.maxWidth + 'px');
        if (this.jdbShowType == 1) {
            this.renderer.setElementStyle(imgContent, 'margin-left', -this.maxWidth / 2 + 'px');
            this.renderer.setElementStyle(imgContent, 'margin-top', -this.maxHeight / 2 + 'px');
        }
    };
    // 重置图片位置
    /**
     * @param {?} index
     * @return {?}
     */
    PictureViewerComponent.prototype.resetPosition = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        /** @type {?} */
        var image = new Image();
        image.onload = function () {
            /** @type {?} */
            var w = image.width;
            /** @type {?} */
            var h = image.height;
            /** @type {?} */
            var hRatio;
            /** @type {?} */
            var wRatio;
            /** @type {?} */
            var imgRate = w / h; // 图片宽高比
            // const maxWidth = 800;
            // const maxHeight = 600;
            wRatio = _this.maxWidth / w;
            hRatio = _this.maxHeight / h;
            if (wRatio > 1 && hRatio > 1) {
                // 两者比例均大于1表示图为小图，宽高未达到800*600,则取原图大小
                w = w;
                h = h;
            }
            else if (wRatio < 1 && hRatio < 1) {
                // 两者比例均小于1表示图为大图，宽高达到800*600,则取容器大小
                if (imgRate > 1) {
                    // 宽图
                    w = _this.maxWidth;
                    h = w / imgRate;
                }
                else if (imgRate < 1) {
                    // 长图
                    h = _this.maxHeight;
                    w = h * imgRate;
                }
            }
            else if (wRatio > 1 && hRatio < 1) {
                // 表示为长图片，则高为600，宽等比例缩放取值
                h = _this.maxHeight;
                w = w * hRatio;
            }
            else if (wRatio < 1 && hRatio > 1) {
                // 表示为宽图片，则宽为800，高等比例缩放取值
                h = h * wRatio;
                w = _this.maxWidth;
            }
            // 设置图片展示宽高
            // 设置图片展示宽高
            _this.renderer.setElementStyle(_this.elem[index].children[0], 'height', h + 'px');
            _this.renderer.setElementStyle(_this.elem[index].children[0], 'width', w + 'px');
            if (w === _this.maxWidth && h === _this.maxHeight) {
                // 设置图片位置使其垂直水平居中
                // 设置图片位置使其垂直水平居中
                _this.renderer.setElementStyle(_this.elem[index].children[0], 'top', '0px');
                _this.renderer.setElementStyle(_this.elem[index].children[0], 'left', '0px');
            }
            else {
                // 设置图片位置使其垂直水平居中
                // 设置图片位置使其垂直水平居中
                _this.renderer.setElementStyle(_this.elem[index].children[0], 'top', (_this.maxHeight - h) / 2 + 'px');
                _this.renderer.setElementStyle(_this.elem[index].children[0], 'left', (_this.maxWidth - w) / 2 + 'px');
            }
        };
        image.src = this.pictureList[index].imgUrl;
    };
    // 切换动画
    /**
     * @param {?} index
     * @return {?}
     */
    PictureViewerComponent.prototype.ImgState = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.pictureList && this.pictureList.length) {
            if (this.current === 0) {
                return index === 0 ? 'on' :
                    index === 1 ? 'next' :
                        index === this.pictureList.length - 1 ? 'prev' :
                            'off';
            }
            else if (this.current === this.pictureList.length - 1) {
                return index === this.pictureList.length - 1 ? 'on' :
                    index === this.pictureList.length - 2 ? 'prev' :
                        index === 0 ? 'next' :
                            'off';
            }
            switch (index - this.current) {
                case 0:
                    return 'on';
                case 1:
                    return 'next';
                case -1:
                    return 'prev';
                default:
                    return 'off';
            }
        }
        else {
            return 'off';
        }
    };
    // 下一张图
    /**
     * @return {?}
     */
    PictureViewerComponent.prototype.Next = /**
     * @return {?}
     */
    function () {
        this.resetImgData();
        this.current = (this.current + 1) % this.pictureList.length;
        this.resetPosition(this.current - 1);
        // 修改状态，使拖动图片回到原来位置
        // this.dragStatus = true;
    };
    // 上一张图
    /**
     * @return {?}
     */
    PictureViewerComponent.prototype.Prev = /**
     * @return {?}
     */
    function () {
        this.resetImgData();
        this.current = this.current - 1 < 0 ? this.pictureList.length - 1 : this.current - 1;
        this.resetPosition(this.current + 1);
        // 修改状态，使拖动图片回到原来位置
        // this.dragStatus = true;
    };
    // 关闭图片查看器 __关闭弹框后再次打开所有拖拽后的位置都会自动归为，因为触发了onChanges方法
    /**
     * @return {?}
     */
    PictureViewerComponent.prototype.closeModel = /**
     * @return {?}
     */
    function () {
        this.resetImgData();
        this.update.emit({ status: false });
    };
    // 放大 50% 100% 200% 400%
    /**
     * @return {?}
     */
    PictureViewerComponent.prototype.scaleBig = /**
     * @return {?}
     */
    function () {
        this.imgOperate.num = this.imgOperate.num * 2;
        if (this.imgOperate.num > 4) {
            this.imgOperate.num = 4;
        }
        /** @type {?} */
        var rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    };
    // 缩小
    /**
     * @return {?}
     */
    PictureViewerComponent.prototype.scaleSmall = /**
     * @return {?}
     */
    function () {
        this.imgOperate.num = this.imgOperate.num / 2;
        if (this.imgOperate.num < 1) {
            this.imgOperate.num = 0.5;
        }
        /** @type {?} */
        var rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    };
    // 逆时针旋转
    /**
     * @return {?}
     */
    PictureViewerComponent.prototype.routateNi = /**
     * @return {?}
     */
    function () {
        this.imgOperate.degnum++;
        /** @type {?} */
        var rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    };
    // 顺时针旋转
    /**
     * @return {?}
     */
    PictureViewerComponent.prototype.routateShun = /**
     * @return {?}
     */
    function () {
        this.imgOperate.degnum--;
        /** @type {?} */
        var rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    };
    // 重置图片数据
    /**
     * @return {?}
     */
    PictureViewerComponent.prototype.resetImgData = /**
     * @return {?}
     */
    function () {
        this.imgOperate = {
            num: 1,
            degnum: 0
        };
        /** @type {?} */
        var rate = 'scale(1,1) rotate(0deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transition', 'transform 0.2s linear 0.4s');
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    };
    // 转换为boolean,即实现有这个字段就认为为true,没有即为false
    /**
     * @param {?} value
     * @return {?}
     */
    PictureViewerComponent.prototype.toBoolean = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value === '' || (value && value !== 'false');
    };
    /**
     * @return {?}
     */
    PictureViewerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.pictureList = null;
        this.imgBox = null;
        this.imgContent = null;
        this.current = null;
    };
    PictureViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-picture-viewer',
                    template: "<div class=\"picture-viewer\"> <div class=\"img-mask\" *ngIf=\"_jdbMaster\" (click)=\"closeModel()\"> <!-- \u906E\u7F69\u5C42 --> </div> <div #imgContent [ngClass]=\"{'img-content-componet':jdbShowType==2}\" class=\"img-content\"> <!-- \u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE --> <div class=\"close\" *ngIf=\"_jdbClear\" (click)=\"closeModel()\"> <span class=\"icon-close\"></span> </div> <!-- \u56FE\u7247box --> <ul class=\"img-box\" #img> <li *ngFor=\"let item of pictureList;let i=index\" [@imgMove]=\"ImgState(i)\"> <img appDragDirective \u00A0[src]=\"item.imgUrl\" alt=\"\" style=\"max-height: 600px;max-width: 800px;\"> </li> </ul> <!-- \u4E0A\u4E00\u9875\u4E0B\u4E00\u9875 --> <div [hidden]=\"current==0\" class=\"prev-page\" (click)=\"Prev()\"> <span class=\"icon-pagination-prev\"></span> </div> <div [hidden]=\"current==pictureList.length-1\" class=\"next-page\" (click)=\"Next()\"> <span class=\"icon-pagination-next\"></span> </div> <!-- \u53F3\u4E0B\u89D2\u9875\u7801 --> <div class=\"img-index\">{{current+1}}/{{pictureList.length}}</div> <!-- \u7F29\u653E\u65CB\u8F6C\u6309\u94AE\u7EC4 --> <div class=\"btn-box\"> <span [ngClass]=\"{'hover-disabled':imgOperate.num===4}\" class=\"icon-picture-zoom-in scale-big\" (click)=\"scaleBig()\"></span> <span [ngClass]=\"{'hover-disabled':imgOperate.num==0.5}\" class=\"icon-picture-zoom-out  scale-small\" (click)=\"scaleSmall()\"></span> <span class=\"icon-picture-counterclockwise routate-ni\" (click)=\"routateNi()\"></span> <span class=\"icon-picture-clockwise routate-shun\" (click)=\"routateShun()\"></span> </div> </div> </div>",
                    // styleUrls: ['./picture-viewer.component.scss'],
                    animations: [
                        trigger('imgMove', [
                            /** 不显示 */
                            state('off', style({ 'display': 'none', 'z-index': '0', 'transform': 'translateX(0)' })),
                            /** 上一张图片 */
                            state('prev', style({
                                'z-index': '1',
                                'transform': 'translateX(-100%)'
                            })),
                            /** 下一张图片 */
                            state('next', style({ 'z-index': '2', 'transform': 'translateX(100%)' })),
                            /** 当前图片 */
                            state('on', style({ 'z-index': '3', 'transform': 'translateX(0)' })),
                            transition('prev=>on', [
                                animate('0.3s ease-in')
                            ]),
                            transition('next=>on', [
                                animate('0.3s ease-in')
                            ]),
                            transition('on=>prev', [
                                animate('0.3s ease-in')
                            ]),
                            transition('on=>next', [
                                animate('0.3s ease-in')
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    PictureViewerComponent.ctorParameters = function () { return [
        { type: Renderer }
    ]; };
    PictureViewerComponent.propDecorators = {
        pictureList: [{ type: Input }],
        update: [{ type: Output }],
        imgBox: [{ type: ViewChild, args: ['img',] }],
        imgContent: [{ type: ViewChild, args: ['imgContent',] }],
        maxWidth: [{ type: Input }],
        maxHeight: [{ type: Input }],
        jdbShowType: [{ type: Input }],
        jdbMaster: [{ type: Input }],
        jdbClear: [{ type: Input }],
        jdbCurrent: [{ type: Input }]
    };
    return PictureViewerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DragDirective = /** @class */ (function () {
    function DragDirective(elem, render) {
        //
        this.elem = elem;
        this.render = render;
        this.isDown = false;
    }
    // 点击事件
    /**
     * @param {?} event
     * @return {?}
     */
    DragDirective.prototype.onMousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var wRate = localStorage.getItem('dragWidth');
        /** @type {?} */
        var hRate = localStorage.getItem('dragHeight');
        this.isDown = true;
        this.disLeft = this.elem.nativeElement.offsetLeft;
        this.disTop = this.elem.nativeElement.offsetTop;
        this.disX = event.clientX;
        this.disY = event.clientY;
        event.target.style.cursor = 'move';
        // event.preventDefault();
    };
    // 监听移动事件事件
    /**
     * @param {?} event
     * @return {?}
     */
    DragDirective.prototype.onMousemove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        // 判断该元素是否被点击了。
        if (this.isDown) {
            /** @type {?} */
            var newdisX = event.clientX - this.disX;
            /** @type {?} */
            var newdisY = event.clientY - this.disY;
            this.elem.nativeElement.style.left = newdisX + this.disLeft + 'px';
            this.elem.nativeElement.style.top = newdisY + this.disTop + 'px';
        }
        return false;
    };
    // 监听document离开事件
    /**
     * @return {?}
     */
    DragDirective.prototype.onMouseup = /**
     * @return {?}
     */
    function () {
        // 只用当元素移动过了，离开函数体才会触发。
        if (this.isDown) {
            this.isDown = false;
            this.disLeft = this.elem.nativeElement.offsetLeft;
            this.disTop = this.elem.nativeElement.offsetTop;
        }
    };
    // 监听元素离开事件
    /**
     * @return {?}
     */
    DragDirective.prototype.onMouseleave = /**
     * @return {?}
     */
    function () {
        this.isDown = false;
    };
    /**
     * @return {?}
     */
    DragDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    };
    DragDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'img[appDragDirective]'
                },] },
    ];
    /** @nocollapse */
    DragDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer }
    ]; };
    DragDirective.propDecorators = {
        onMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
        onMousemove: [{ type: HostListener, args: ['mousemove', ['$event'],] }],
        onMouseup: [{ type: HostListener, args: ['mouseup', ['$event'],] }],
        onMouseleave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
    };
    return DragDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var JdbPlgPaginationComponent = /** @class */ (function () {
    function JdbPlgPaginationComponent(el, renderer2) {
        this.el = el;
        this.renderer2 = renderer2;
        this._current = 1;
        this._pageSize = 10;
        this._firstIndex = 1;
        this._lastIndex = Infinity;
        this._showTotal = false;
        this._showPageSize = false;
        this._showQuickJump = false;
        this.pages = [];
        // _options = [10, 20, 30, 40, 50]; // select默认数组
        // select默认数组
        this._options = [
            { value: 10, text: '10条/页' },
            { value: 20, text: '20条/页' },
            { value: 30, text: '30条/页' },
            { value: 40, text: '40条/页' },
            { value: 50, text: '50条/页' }
        ];
        this._jdbSimple = false;
        this._jdbSelectWidth = '90px';
        this.jdbPageSizeChange = new EventEmitter();
        this.jdbPageIndexChange = new EventEmitter();
    }
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbShowTotal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showTotal;
        },
        // 是否展示总数标签
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showTotal = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbTotal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._total;
        },
        // 数据总数
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // 若传入值和当前total一致，则不触发操作
            if (value === this._total) {
                return;
            }
            this._total = value;
            this.setPageNo();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbPageIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._current;
        },
        // jdbPageIndex与_current关联，表示页码
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._current === value) {
                return;
            }
            if (value > this._lastIndex || value < this._firstIndex) {
                return;
            }
            this._current = Number(value);
            this.setPageNo();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbShowPageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showPageSize;
        },
        // 是否展示切换条数select
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showPageSize = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbPageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSize;
        },
        // 默认条数
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === this._pageSize) {
                return;
            }
            this._pageSize = value;
            this.setPageNo();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbSizeOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        // 默认下拉选择条数数组
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // 若传入值和当前total一致，则不触发操作
            if (value === this._options) {
                return;
            }
            // 判断是否为数组
            if (Object.prototype.toString.call(value) === '[object Array]') {
                /** @type {?} */
                var optionsArr_1 = [];
                value.forEach(function (elem) {
                    /** @type {?} */
                    var obj = {
                        value: elem,
                        text: elem + '条/页'
                    };
                    optionsArr_1.push(obj);
                });
                this._options = optionsArr_1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbShowQuickJump", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showQuickJump;
        },
        // 是否展示快速跳转页面
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showQuickJump = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbSimple", {
        get: /**
         * @return {?}
         */
        function () {
            return this.jdbSimple;
        },
        // 分页样式
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbSimple = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbSelectWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbSelectWidth;
        },
        // 下拉框宽度设置，防止window系统出现滚动条位置不够
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbSelectWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    // 创建页码
    /**
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.setPageNo = /**
     * @return {?}
     */
    function () {
        // 向上取整
        this._lastIndex = Math.ceil(this._total / this._pageSize);
        /** @type {?} */
        var tmpPages = [];
        if (this._lastIndex <= 9) {
            // 若总页数不超过9，则全部展示在页面上
            for (var i = 2; i <= this._lastIndex - 1; i++) {
                tmpPages.push({
                    index: i
                });
            }
        }
        else {
            /** @type {?} */
            var current = +this._current;
            /** @type {?} */
            var left = Math.max(2, current - 2);
            /** @type {?} */
            var right = Math.min(current + 2, this._lastIndex - 1);
            // 特殊处理正数第五个数和倒数第五个数
            if (current === 5) {
                left = 2;
            }
            else if (current === this._lastIndex - 4) {
                right = this._lastIndex - 1;
            }
            if (current - 1 <= 3) {
                right = 7;
            }
            if (this._lastIndex - current <= 3) {
                left = this._lastIndex - 6;
            }
            for (var i = left; i <= right; i++) {
                tmpPages.push({ index: i });
            }
        }
        this.pages = tmpPages;
    };
    // status为true表示页码切换，num表示页码，false表示条数切换，num表示条数  e为$event
    /**
     * @param {?} status
     * @param {?} num
     * @param {?=} e
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.dataChange = /**
     * @param {?} status
     * @param {?} num
     * @param {?=} e
     * @return {?}
     */
    function (status, num, e) {
        if (e) {
            e.stopPropagation();
        }
        if (status) {
            if (num === this._firstIndex - 1 || num === this._lastIndex + 1) {
                return;
            }
            // 清空输入框内容
            this.quickJumpPage = '';
            this.jdbPageIndex = num;
            this.jdbPageIndexChange.emit(this.jdbPageIndex);
        }
        else {
            // 清空输入框内容
            this.quickJumpPage = '';
            this.jdbPageSize = num;
            this.jdbPageSizeChange.emit(num);
            // 切换页数之后需要将页码重置为1
            this.jdbPageIndex = 1;
            this.jdbPageIndexChange.emit(this.jdbPageIndex);
            this.setPageNo();
        }
        // this.setPageNo();
    };
    // 点击跳转按钮快速跳转
    /**
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.quickJump = /**
     * @return {?}
     */
    function () {
        // 若是输入的页码大于最后一页页码，即超出范围不存在，则清空页码，并使输入框获取焦点
        if (this.quickJumpPage > this._lastIndex) {
            this.inputJump.nativeElement.focus();
            this.quickJumpPage = '';
            return;
        }
        // 若输入为空，则不能跳转
        if (!this.quickJumpPage) {
            return;
        }
        this.jdbPageIndex = this.quickJumpPage;
        this.jdbPageIndexChange.emit(this.jdbPageIndex);
    };
    // 点击左箭头(为什么使用条数除以2呢)
    /**
     * @param {?} e
     * @param {?} pageSize
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.jumpBefore = /**
     * @param {?} e
     * @param {?} pageSize
     * @return {?}
     */
    function (e, pageSize) {
        this.dataChange(true, this._current - Math.round(pageSize / 2), e);
    };
    // 点击右箭头
    /**
     * @param {?} e
     * @param {?} pageSize
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.jumpAfter = /**
     * @param {?} e
     * @param {?} pageSize
     * @return {?}
     */
    function (e, pageSize) {
        this.dataChange(true, this._current + Math.round(pageSize / 2), e);
    };
    // 转换为boolean,即实现有这个字段就认为为true,没有即为false
    /**
     * @param {?} value
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.toBoolean = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value === '' || (value && value !== 'false');
    };
    // 校验是否为纯数字
    /**
     * @param {?} obj
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.isNumber = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /** @type {?} */
        var reg = /^[0-9]*$/;
        return reg.test(obj);
    };
    JdbPlgPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-pagination',
                    template: "<div class=\"jdb-plg-pagination\">\n    <!-- \u603B\u6761\u6570 -->\n    <span *ngIf=\"_showTotal\" class=\"total-box\">\n      \u5171{{_total}}\u6761\n    </span>\n\n    <div class=\"operate-box\">\n        <!-- \u6761\u6570\u5207\u6362 -->\n        <div class=\"jdb-plg-pagination-options\" *ngIf=\"_showPageSize\">\n            <app-jdb-plg-select (ngModelChange)=\"dataChange(false,$event)\" [jdbSize]=\"'small'\" [jdbWidth]=\"_jdbSelectWidth\" [(ngModel)]=\"_pageSize\" [jdbSelectList]=\"_options\"></app-jdb-plg-select>\n        </div>\n        <!-- \u57FA\u672C\u5206\u9875\u6837\u5F0F -->\n        <ul *ngIf=\"!_jdbSimple\" class=\"base-pagination\">\n            <!-- \u4E0A\u4E00\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-prev\" title=\"\u4E0A\u4E00\u9875\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_current-1,$event)\">\n                <span class=\"jdbIcon icon-pagination-prev\"></span>\n            </li>\n            <!-- \u9996\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-first\" title=\"\u9996\u9875\" [ngClass]=\"{'active':_current===_firstIndex}\" (click)=\"dataChange(true,_firstIndex,$event)\">\n                {{_firstIndex}}\n            </li>\n            <!-- \u7701\u7565\u53F7 -->\n            <li class=\"jdb-plg-pagination-forward\" *ngIf=\"(_lastIndex >9)&&(_current-4>_firstIndex)\" (click)=\"jumpBefore($event,_pageSize)\">\n                <span class=\"icon-pagination-more\"></span>\n                <span class=\"icon-pagination-jump-prev\"></span>\n            </li>\n            <!-- \u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-pager\" *ngFor=\"let page of pages\" [ngClass]=\"{'active':_current===page.index}\" (click)=\"dataChange(true,page.index,$event)\">\n                {{page.index}}\n            </li>\n            <!-- \u7701\u7565\u53F7 -->\n            <li class=\"jdb-plg-pagination-backward\" *ngIf=\"(_lastIndex >9)&&(_current+4<_lastIndex)\" (click)=\"jumpAfter($event,_pageSize)\">\n                <span class=\"icon-pagination-more\"></span>\n                <span class=\"icon-pagination-jump-next\"></span>\n            </li>\n            <!-- \u5C3E\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-last\" *ngIf=\"(_lastIndex>0)&&(_lastIndex!==_firstIndex)\" title=\"\u5C3E\u9875\" [ngClass]=\"{'active':_current===_lastIndex}\" (click)=\"dataChange(true,_lastIndex,$event)\">\n                {{_lastIndex}}\n            </li>\n            <!-- \u4E0B\u4E00\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-next\" title=\"\u4E0B\u4E00\u9875\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_current+1,$event)\">\n                <span class=\"jdbIcon icon-pagination-next\"></span>\n            </li>\n        </ul>\n        <!-- \u7B80\u5355\u5206\u9875\u6837\u5F0F -->\n        <div class=\"simple-pagination\" *ngIf=\"_jdbSimple\">\n            <div class=\"left-box\">\n                <span class=\"icon-pagination-first\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_firstIndex,$event)\"></span>\n                <span class=\"icon-pagination-prev\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_current-1,$event)\"></span>\n            </div>\n            <div class=\"center-box\">\n                {{_current}} / {{_lastIndex}}\n            </div>\n            <div class=\"right-box\">\n                <span class=\"icon-pagination-next\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_current+1,$event)\"></span>\n                <span class=\"icon-pagination-last\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_lastIndex,$event)\"></span>\n            </div>\n        </div>\n        <!-- \u5FEB\u901F\u8DF3\u8F6C -->\n        <div *ngIf=\"_showQuickJump\" class=\"quick-jumper\">\n            \u7B2C\n            <input #inputJump type=\"text\" [(ngModel)]=\"quickJumpPage\" (keyup.enter)=\"quickJump()\" appOnlyNumber=\"true\"> \u9875\n            <button (click)=\"quickJump()\">\u8DF3\u8F6C</button>\n        </div>\n    </div>\n</div>",
                },] },
    ];
    /** @nocollapse */
    JdbPlgPaginationComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    JdbPlgPaginationComponent.propDecorators = {
        jdbPageSizeChange: [{ type: Output }],
        jdbPageIndexChange: [{ type: Output }],
        inputJump: [{ type: ViewChild, args: ['inputJump',] }],
        jdbShowTotal: [{ type: Input }],
        jdbTotal: [{ type: Input }],
        jdbPageIndex: [{ type: Input }],
        jdbShowPageSize: [{ type: Input }],
        jdbPageSize: [{ type: Input }],
        jdbSizeOptions: [{ type: Input }],
        jdbShowQuickJump: [{ type: Input }],
        jdbSimple: [{ type: Input }],
        jdbSelectWidth: [{ type: Input }]
    };
    return JdbPlgPaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
                    selector: 'button[app-jdb-plg-button]',
                    template: "<i class=\"jdb-icon-loading action\" *ngIf=\"loading\"></i> <ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    JdbPlgButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    JdbPlgButtonComponent.propDecorators = {
        jdbSize: [{ type: Input }],
        jdbType: [{ type: Input }],
        jdbLoading: [{ type: Input }]
    };
    return JdbPlgButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        // 弹框显隐
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var visible = this.toBoolean(value);
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
        // 隐藏footer
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var visible = this.toBoolean(value);
            if (this._visible === visible) {
                return;
            }
            this._footerHide = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mtitle", {
        // 标题
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
        // 自定义宽度
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
        /** @type {?} */
        var el = this.contentEl.nativeElement;
        this._bodyStyleMap = __assign({ width: this._width });
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
        // 自定义样式
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
        /** @type {?} */
        var factory = this.resolver.resolveComponentFactory(/** @type {?} */ (this._content));
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
                    // styleUrls: ['./jdb-plg-dialog.component.scss'],
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
        { type: ComponentFactoryResolver }
    ]; };
    JdbPlgDialogComponent.propDecorators = {
        contentEl: [{ type: ViewChild, args: ['modal_content',] }],
        bodyEl: [{ type: ViewChild, args: ['modal_component', { read: ViewContainerRef },] }],
        MvisibileChange: [{ type: Output }],
        MOnOk: [{ type: Output }],
        MOnCancel: [{ type: Output }],
        Mvisible: [{ type: Input }],
        MfooterHiden: [{ type: Input }],
        Mtitle: [{ type: Input }],
        Mcontent: [{ type: Input }],
        Mfooter: [{ type: Input }],
        Mwidth: [{ type: Input }],
        onEsc: [{ type: HostListener, args: ['keydown.esc', ['$event'],] }],
        Mclass: [{ type: Input }],
        MOkText: [{ type: Input }],
        McancelText: [{ type: Input }],
        MRogerText: [{ type: Input }]
    };
    return JdbPlgDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var OnlyNumberDirective = /** @class */ (function () {
    function OnlyNumberDirective(el) {
        this.el = el;
        this.regexStr = '^[0-9]*$';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    OnlyNumberDirective.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var e = /** @type {?} */ (event);
        if (this.appOnlyNumber) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+V
                (e.keyCode === 86 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            /** @type {?} */
            var ch = String.fromCharCode(e.keyCode);
            /** @type {?} */
            var regEx = new RegExp(this.regexStr);
            if (regEx.test(ch)) {
                return;
            }
            else {
                e.preventDefault();
            }
        }
    };
    // 解决中文输入法输入汉字问题
    /**
     * @param {?} event
     * @return {?}
     */
    OnlyNumberDirective.prototype.onKeyUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.el.nativeElement.value = this.el.nativeElement.value.replace(/\D/g, '');
    };
    OnlyNumberDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appOnlyNumber]'
                },] },
    ];
    /** @nocollapse */
    OnlyNumberDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OnlyNumberDirective.propDecorators = {
        appOnlyNumber: [{ type: Input }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }]
    };
    return OnlyNumberDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WatermarkDirective = /** @class */ (function () {
    function WatermarkDirective(el, render) {
        this.el = el;
        this.render = render;
        this.draw$ = WatermarkDirective.drawSubject.asObservable();
    }
    /**
     * @method 设置水印渲染的文案。
     * @param callback 该参数为一个函数或字符串，该参数为函数时用户自定义生成文案的过程，这个回调函数最后应返回字符串，因为这个字符串将被渲染成水印。
     * 若该参数为字符串，则传入的字符串就是渲染的水印文案
     */
    /**
     * \@method 设置水印渲染的文案。
     * @param {?} callback 该参数为一个函数或字符串，该参数为函数时用户自定义生成文案的过程，这个回调函数最后应返回字符串，因为这个字符串将被渲染成水印。
     * 若该参数为字符串，则传入的字符串就是渲染的水印文案
     * @return {?}
     */
    WatermarkDirective.setText = /**
     * \@method 设置水印渲染的文案。
     * @param {?} callback 该参数为一个函数或字符串，该参数为函数时用户自定义生成文案的过程，这个回调函数最后应返回字符串，因为这个字符串将被渲染成水印。
     * 若该参数为字符串，则传入的字符串就是渲染的水印文案
     * @return {?}
     */
    function (callback) {
        if (typeof callback === 'string') {
            WatermarkDirective._text = callback;
        }
        else {
            WatermarkDirective._text = callback();
        }
        WatermarkDirective.drawSubject.next(true);
    };
    /**
     * @method 通过canvas渲染水印背景，然后设置到指令绑定的元素的背景，然后背景默认重复。
     * @extends 可以通过改变`fillText()`的个数来增加文案出现的次数。
     */
    /**
     * \@method 通过canvas渲染水印背景，然后设置到指令绑定的元素的背景，然后背景默认重复。
     * @return {?}
     */
    WatermarkDirective.prototype.draw = /**
     * \@method 通过canvas渲染水印背景，然后设置到指令绑定的元素的背景，然后背景默认重复。
     * @return {?}
     */
    function () {
        // const name = localStorage.getItem('cxNickName') || '';
        // const phone = localStorage.getItem('cxPhone') || '';
        // const str = `CXWEB-${name}${phone.slice(-4)}`;
        if (WatermarkDirective._text) {
            /** @type {?} */
            var node = document.createElement('canvas');
            node.width = 500;
            node.height = 200;
            node.style.display = 'none';
            /** @type {?} */
            var ctx = node.getContext('2d');
            ctx.rotate(-10 * Math.PI / 180);
            ctx.font = '16px microsoft yahei';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'Middle';
            ctx.fillText(WatermarkDirective._text, 0, 200);
            // ctx.fillText(str, 80, 150);
            ctx.fillText(WatermarkDirective._text, 165, 85);
            // ctx.fillText(str, 230, 160);
            ctx.fillText(WatermarkDirective._text, 300, 190);
            this.render.setStyle(this.el.nativeElement, 'backgroundImage', "url(" + node.toDataURL('image/png') + ")");
        }
        // this.render.setStyle(this.el.nativeElement, 'background', `red`);
    };
    /**
     * @return {?}
     */
    WatermarkDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.draw$.subscribe(function () {
            _this.draw();
        });
    };
    /**
     * @return {?}
     */
    WatermarkDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.draw(); // 调用渲染水印方法
    };
    /**
     * 水印渲染的文案，默认JDB
     */
    WatermarkDirective._text = '';
    WatermarkDirective.drawSubject = new Subject();
    WatermarkDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appWaterMark]'
                },] },
    ];
    /** @nocollapse */
    WatermarkDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return WatermarkDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var JdbPlgSelectComponent = /** @class */ (function () {
    function JdbPlgSelectComponent(renderer2, renderer) {
        this.renderer2 = renderer2;
        this.renderer = renderer;
        this._size = 'middle';
        this._optionText = 'text';
        this._optionValue = 'value';
        this.isShowClear = false;
        this._jdbClear = false;
        this._jdbDisabled = false;
        this._jdbMode = 'chooseOne';
        this._placeHolder = '请选择';
        this._chooseMoreArray = [];
        this._classMap = {};
        this.savaHeight = true;
        this.spaceFlex = true;
        this._showImgBox = false;
        this._jdbItemDisabled = 'disabled';
        this._jdbSureDisabled = 2;
        this._jdbNoDisabled = 1;
        this._jdbError = false;
        // 自定义类名
        this.jdbClassName = '';
        this.show = false;
        this.ngModelValue = '';
        this.onChange = function () { return null; };
    }
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbItemDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbItemDisabled;
        },
        // 选项中某项禁用字段
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbItemDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbError", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbError;
        },
        // 输入框是否处于报错状态
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbError = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbSureDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbSureDisabled;
        },
        // 选项中某项确认禁用
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbSureDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbPlaceHolder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placeHolder;
        },
        // // 选项中某项不禁用
        // @Input()
        // set jdbNoDisabled(value) {
        //   this._jdbNoDisabled = value;
        // }
        // get jdbNoDisabled(): any {
        //   return this._jdbNoDisabled;
        // }
        // 选项中某项确认禁用
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placeHolder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbClear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbClear;
        },
        // 是否需要显示清空
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbClear = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbSelectList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectList;
        },
        // 下拉框数组，必写
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            // 循环数组，判断是否需要展示带有图片下拉框
            if (value) {
                /** @type {?} */
                var arr_1 = [];
                value.forEach(function (element) {
                    /** @type {?} */
                    var type = typeof element;
                    if (type === 'string' || type === 'number') {
                        arr_1.push({
                            text: element,
                            value: element
                        });
                    }
                    else {
                        arr_1.push(element);
                        if (element.imgUrl) {
                            _this._showImgBox = true;
                        }
                    }
                });
                this._selectList = arr_1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        // 下拉框尺寸，默认为高度30px；small为24px,large为40px;
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._width;
        },
        // 自定义宽度
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbOptionText", {
        get: /**
         * @return {?}
         */
        function () {
            return this._optionText;
        },
        // 展示在页面内容字段名称
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._optionText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbOptionValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._optionValue;
        },
        // 返回给serve对应字段名称
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._optionValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbDisabled;
        },
        // 下拉框禁用
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbDisabled = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbMode;
        },
        // select模式，默认为单选，chooseMore多选
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbMode = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    // tslint:disable-next-line:use-life-cycle-interface
    /**
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // 点击除下拉框以外位置，下拉框隐藏
        this.renderer2.listen('document', 'click', function () {
            _this.show = false;
            _this.renderer.setElementClass(_this.inputDom.nativeElement, 'jdb-plg-select-active', _this.show);
        });
        // 监听输入框元素，若有内容时则滑上显示x
        this.renderer2.listen(this.inputDom.nativeElement, 'mouseenter', function () {
            if (_this._jdbClear && !_this._jdbDisabled) {
                // 若输入框不存在内容，则不做任何操作
                if (_this._jdbMode === 'chooseOne' && (_this.inputText === '' || _this.show)) {
                    return;
                }
                else if (_this._jdbMode === 'chooseNum' && (_this.inputText === 0 || _this.show)) {
                    return;
                }
                else if (_this._jdbMode === 'chooseMore' && (_this.inputText.length === 0 || _this.show)) {
                    return;
                }
                _this.isShowClear = true;
                _this.renderer.setElementClass(_this.inputDom.nativeElement, 'jdb-plg-select-active', _this.show);
            }
        });
        this.renderer2.listen(this.inputDom.nativeElement, 'mouseleave', function () {
            if (_this._jdbClear && !_this._jdbDisabled) {
                // 若输入框不存在内容，则不做任何操作
                if (_this._jdbMode === 'chooseOne' && (_this.inputText === '' || _this.show)) {
                    return;
                }
                else if (_this._jdbMode === 'chooseNum' && (_this.inputText === 0 || _this.show)) {
                    return;
                }
                else if (_this._jdbMode === 'chooseMore' && (_this.inputText.length === 0 || _this.show)) {
                    return;
                }
                _this.isShowClear = false;
                _this.renderer.setElementClass(_this.inputDom.nativeElement, 'jdb-plg-select-active', _this.show);
            }
        });
        // if (this._jdbClear && !this._jdbDisabled) {
        // 	// 监听输入框元素，若有内容时则滑上显示x
        // 	this.renderer2.listen(this.inputDom.nativeElement, 'mouseenter', () => {
        // 		// 若输入框不存在内容，则不做任何操作
        // 		if (this._jdbMode === 'chooseOne' && (this.inputText === '' || this.show)) {
        // 			return;
        // 		} else if (this._jdbMode === 'chooseNum' && (this.inputText === 0 || this.show)) {
        // 			return;
        // 		} else if (this._jdbMode === 'chooseMore' && (this.inputText.length === 0 || this.show)) {
        // 			return;
        // 		}
        // 		this.isShowClear = true;
        // 		this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
        // 	});
        // 	this.renderer2.listen(this.inputDom.nativeElement, 'mouseleave', () => {
        // 		// 若输入框不存在内容，则不做任何操作
        // 		if (this._jdbMode === 'chooseOne' && (this.inputText === '' || this.show)) {
        // 			return;
        // 		} else if (this._jdbMode === 'chooseNum' && (this.inputText === 0 || this.show)) {
        // 			return;
        // 		} else if (this._jdbMode === 'chooseMore' && (this.inputText.length === 0 || this.show)) {
        // 			return;
        // 		}
        // 		this.isShowClear = false;
        // 		this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
        // 	});
        // }
    };
    /**
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // 当数组取到后重新判断ngModel绑定的值，解决异步数据不回显问题
        if (this._selectList) {
            if (this.ngModelValue === null || this.ngModelValue === '' || this.ngModelValue === undefined) {
                // 若传入值为null，则清空数据
                if (this._jdbMode === 'chooseMore') {
                    this.inputText = [];
                    this._chooseMoreArray = [];
                }
                else if (this._jdbMode === 'chooseNum') {
                    this.inputText = 0;
                    this._chooseMoreArray = [];
                }
                else {
                    this.inputText = '';
                }
            }
            else {
                if (this._jdbMode === 'chooseOne') {
                    this.forOneStart(this.ngModelValue);
                }
                else if (this._jdbMode === 'chooseMore') {
                    this.forMoreStart(this.ngModelValue);
                    this.setClassMap();
                }
                else if (this._jdbMode === 'chooseNum') {
                    this.forNumStart(this.ngModelValue);
                }
            }
        }
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        if (this._jdbMode === 'chooseMore') {
            this._classMap = (_a = {},
                _a["" + this._size] = true,
                _a["jdb-plg-select-bottom-" + this._size] = this.inputText.length !== 0,
                _a['jdb-plg-select-disabled'] = this._jdbDisabled,
                _a[this.jdbClassName] = true,
                _a['jdb-plg-select-error'] = this._jdbError // 输入项报错标红
            ,
                _a);
        }
        else {
            this._classMap = (_b = {},
                _b["" + this._size] = true,
                _b['jdb-plg-select-disabled'] = this._jdbDisabled,
                _b[this.jdbClassName] = true,
                _b['jdb-plg-select-error'] = this._jdbError // 输入项报错标红
            ,
                _b);
        }
        var _a, _b;
    };
    // 点击x，清空内容
    /**
     * @param {?} e
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.clearInputText = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        if (this._jdbMode === 'chooseOne') {
            this.inputText = '';
        }
        else if (this._jdbMode === 'chooseMore') {
            this.inputText = [];
            this._chooseMoreArray = [];
        }
        else if (this._jdbMode === 'chooseNum') {
            this.inputText = 0;
            this._chooseMoreArray = [];
        }
        this.isShowClear = !this.isShowClear;
        // 清空后输入需要重新告知父组件
        this.ngModelValue = '';
        this.onChange('');
        this.setClassMap();
    };
    // 点击输入框下拉菜单显隐
    /**
     * @param {?} e
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.dialogShow = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        // 若外侧组件告知禁用，则点击没有任何效果
        if (this._jdbDisabled) {
            return;
        }
        this.isShowClear = false;
        this.show = !this.show;
        this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
        this.optionPosition(this.optionList.nativeElement.clientHeight);
    };
    // 浮层出现是在输入框上方还是下方
    /**
     * @param {?} listHeight
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.optionPosition = /**
     * @param {?} listHeight
     * @return {?}
     */
    function (listHeight) {
        /** @type {?} */
        var offetTop = this.getTop(this.inputDom.nativeElement);
        /** @type {?} */
        var scrollTop = this.getScrollTop(this.inputDom.nativeElement.parentElement);
        /** @type {?} */
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        /** @type {?} */
        var elemHeight = this.inputDom.nativeElement.clientHeight;
        /** @type {?} */
        var paddingHeight;
        if (this.jdbSize === 'small') {
            paddingHeight = 2;
        }
        else if (this.jdbSize === 'large') {
            paddingHeight = 9;
        }
        else if (this.jdbSize === 'middle') {
            paddingHeight = 5;
        }
        /** @type {?} */
        var flexHeight = clientHeight - offetTop - elemHeight - paddingHeight + scrollTop; // 剩余高度
        // console.log(
        // 	'元素offsetTop', offetTop,
        // 	'父元素scrollTop', scrollTop,
        // 	'元素高度', elemHeight,
        // 	'屏幕高度', clientHeight,
        // 	'计算后剩余高度', flexHeight,
        // 	'浮层元素高度', listHeight,
        // );
        if (flexHeight < listHeight) {
            // 空间不足
            this.spaceFlex = false;
            this.renderer.setElementStyle(this.optionList.nativeElement, 'transform-origin', '100% 100%');
            if (listHeight < 188) {
                this.renderer.setElementStyle(this.optionList.nativeElement, 'top', -listHeight - 5 + 'px');
            }
            else {
                this.renderer.setElementStyle(this.optionList.nativeElement, 'top', -190 - paddingHeight + 'px');
            }
        }
        else {
            this.spaceFlex = true;
            this.renderer.setElementStyle(this.optionList.nativeElement, 'top', '');
            this.renderer.setElementStyle(this.optionList.nativeElement, 'transform-origin', '0% 0%');
        }
    };
    // ControlValueAccessor 自定义表单 与父组件的ngModel绑定起来
    /**
     * @param {?} value
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.ngModelValue = value;
        if (value === null || value === '' || value === undefined) {
            // 若传入值为null，则清空数据
            if (this._jdbMode === 'chooseMore') {
                this.inputText = [];
                this._chooseMoreArray = [];
            }
            else if (this._jdbMode === 'chooseNum') {
                this.inputText = 0;
                this._chooseMoreArray = [];
            }
            else {
                this.inputText = '';
            }
        }
        else {
            if (this._jdbMode === 'chooseOne') {
                this.forOneStart(value);
            }
            else if (this._jdbMode === 'chooseMore') {
                this.forMoreStart(value);
                this.setClassMap();
            }
            else if (this._jdbMode === 'chooseNum') {
                this.forNumStart(value);
            }
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.registerOnChange = /**
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
    JdbPlgSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) { };
    // 单选，若有初始选项，则遍历数组
    /**
     * @param {?} value
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.forOneStart = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this._selectList.forEach(function (elem) {
            if (elem[_this._optionValue] === value) {
                _this.inputText = elem[_this._optionText];
            }
        });
    };
    // 多选，若有初始值则遍历数组
    /**
     * @param {?} value
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.forMoreStart = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        // 判断传入值类型 老版本为string,新版本为数组，兼容新老版本
        if (typeof value === 'string') {
            value = value.toString().split(',');
        }
        value.forEach(function (item) {
            _this._selectList.forEach(function (elem) {
                if (elem[_this._optionValue] === item) {
                    /** @type {?} */
                    var textName = _this._optionText;
                    /** @type {?} */
                    var valueName = _this._optionValue;
                    if (_this.jdbOptionText) {
                        textName = _this.jdbOptionText;
                    }
                    if (_this.jdbOptionValue) {
                        valueName = _this.jdbOptionValue;
                    }
                    /** @type {?} */
                    var obj = {};
                    obj[textName] = elem[_this._optionText];
                    obj[valueName] = elem[_this._optionValue];
                    _this.inputText.push(obj);
                    // this._chooseMoreArray为传出去的数据
                    // this._chooseMoreArray为传出去的数据
                    _this._chooseMoreArray.push(elem[_this._optionValue]);
                    return;
                }
            });
        });
    };
    // 选几项
    /**
     * @param {?} value
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.forNumStart = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        // 判断传入值类型 老版本为string,新版本为数组，兼容新老版本
        if (typeof value === 'string') {
            value = value.toString().split(',');
        }
        value.forEach(function (item) {
            _this._selectList.forEach(function (elem) {
                if (elem[_this._optionValue] === item) {
                    _this.inputText++;
                    _this._chooseMoreArray.push(elem[_this._optionValue]);
                    return;
                }
            });
        });
    };
    // 单选某一元素点击
    /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.item = /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    function (e, item) {
        // 阻止事件冒泡
        e.stopPropagation();
        // 判断show是否为true
        if (!this.show) {
            return;
        }
        // 判断该项是否可点击
        if (item[this._jdbItemDisabled] === this._jdbSureDisabled) {
            return;
        }
        this.inputText = item[this._optionText];
        this.show = !this.show;
        this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
        this.ngModelValue = item[this._optionValue];
        this.onChange(item[this._optionValue]);
    };
    // 多选元素点击
    /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.chooseMore = /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    function (e, item) {
        var _this = this;
        /** @type {?} */
        var flag = false;
        // 阻止事件冒泡
        e.stopPropagation();
        // 判断show是否为true
        if (!this.show) {
            return;
        }
        // 判断该项是否可点击
        if (item[this._jdbItemDisabled] === this._jdbSureDisabled) {
            return;
        }
        // 判断是否存在
        this.inputText.forEach(function (element, index) {
            if (element[_this._optionValue] === item[_this._optionValue]) {
                flag = true;
                return;
            }
        });
        if (flag) {
            this.deleteMoreItem(e, item);
            return;
        }
        /** @type {?} */
        var textName = this._optionText;
        /** @type {?} */
        var valueName = this._optionValue;
        if (this.jdbOptionText) {
            textName = this.jdbOptionText;
        }
        if (this.jdbOptionValue) {
            valueName = this.jdbOptionValue;
        }
        /** @type {?} */
        var obj = {};
        obj[textName] = item[this._optionText];
        obj[valueName] = item[this._optionValue];
        this.inputText.push(obj);
        // this._chooseMoreArray为传出去的数据
        this._chooseMoreArray.push(item[this._optionValue]);
        this.ngModelValue = this._chooseMoreArray; // 传出数据格式为数组
        this.onChange(this._chooseMoreArray);
        this.show = true;
        this.setClassMap();
    };
    // 选中多少项li点击
    /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.numClick = /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    function (e, item) {
        var _this = this;
        /** @type {?} */
        var flag = false;
        // 阻止事件冒泡
        e.stopPropagation();
        // 判断show是否为true
        if (!this.show) {
            return;
        }
        // 判断该项是否可点击
        if (item[this._jdbItemDisabled] === this._jdbSureDisabled) {
            return;
        }
        // 判断是否点击过
        this._chooseMoreArray.forEach(function (element, index) {
            if (element === item[_this._optionValue]) {
                flag = true;
                _this._chooseMoreArray.splice(index, 1);
                return;
            }
        });
        if (flag) {
            this.inputText--;
            return;
        }
        this.inputText++;
        this.show = true;
        this._chooseMoreArray.push(item[this._optionValue]);
        this.ngModelValue = this._chooseMoreArray; // 传出格式为数组
        this.onChange(this._chooseMoreArray);
    };
    // 判断某一项是否存在于inputText中
    /**
     * @param {?} item
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.moreIndex = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        /** @type {?} */
        var flag = false;
        this._chooseMoreArray.forEach(function (element, index) {
            if (element === item[_this._optionValue]) {
                flag = true;
                return;
            }
        });
        return flag;
    };
    // 删除某一项
    /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.deleteMoreItem = /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    function (e, item) {
        var _this = this;
        e.stopPropagation();
        if (this._jdbDisabled) {
            return;
        }
        this.inputText.forEach(function (element, index) {
            if (element[_this._optionValue] === item[_this._optionValue]) {
                _this.inputText.splice(index, 1);
                return;
            }
        });
        this._chooseMoreArray.forEach(function (element, index) {
            if (element === item[_this._optionValue]) {
                _this._chooseMoreArray.splice(index, 1);
                return;
            }
        });
        this.ngModelValue = this._chooseMoreArray; // 传出格式为数组
        this.onChange(this._chooseMoreArray);
        this.setClassMap();
    };
    // 转换为boolean,即实现有这个字段就认为为true,没有即为false
    /**
     * @param {?} value
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.toBoolean = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value === '' || (value && value !== 'false');
    };
    // 计算某元素的offetTop
    /**
     * @param {?} e
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.getTop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var offset = e.offsetTop;
        if (e.offsetParent != null) {
            offset += this.getTop(e.offsetParent);
        }
        return offset;
    };
    // 计算某元素的scrollTop
    /**
     * @param {?} e
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.getScrollTop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var offset = e.scrollTop;
        if (e.parentElement != null) {
            offset += this.getScrollTop(e.parentElement);
        }
        return offset;
    };
    JdbPlgSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-select',
                    template: "<!-- \u5355\u9009 --> <div *ngIf=\"_jdbMode=='chooseOne'\" #inputDom class=\"jdb-plg-select-one\" (click)=\"dialogShow($event)\" [ngClass]=\"_classMap\" [ngStyle]=\"{'width':_width}\"> <!-- placeHolder --> <div class=\"jdb-plg-select-placeholder\" [hidden]=\"inputText!==''\">{{_placeHolder}}</div> <!-- \u5355\u9009 --> <!-- <span class=\"chooseOne\" [hidden]=\"inputText==''\">{{inputText}}</span> --> <input class=\"chooseOne chooseOneInput\" [hidden]=\"inputText===''\" type=\"text\" [(ngModel)]=\"inputText\" readonly> <ul #optionList [ngClass]=\"{ 'options-show':show, 'options-no-margin':!spaceFlex} \" class=\"options \"> <!-- \u5355\u9009 --> <li *ngFor=\"let option of _selectList \" (click)=\"item($event,option) \" [ngClass]=\"{active:ngModelValue===option[_optionValue],disabled:option[_jdbItemDisabled] === _jdbSureDisabled} \"> <img class=\"img-box\" *ngIf=\"_showImgBox&&option.imgUrl\" [src]=\"option.imgUrl\" alt=\"\"> <span class=\"img-box\" *ngIf=\"_showImgBox&&!option.imgUrl\"></span> <span class=\"text-box\">{{_optionText=='option'?option:option[_optionText]}}</span> </li> </ul> <!-- \u6E05\u7A7A\u56FE\u6807 --> <span class=\"close-icon icon-empty \" [hidden]=\"!isShowClear \" (click)=\"clearInputText($event) \"></span> <!-- \u5355\u9009\u65F6\u4E0B\u62C9\u56FE\u6807 --> <span class=\"select-icon icon-select-arrow \" [hidden]=\"isShowClear \"></span> </div> <!-- \u591A\u9009 --> <div *ngIf=\"_jdbMode=='chooseMore' \" #inputDom class=\"jdb-plg-select-more \" (click)=\"dialogShow($event) \" [ngClass]=\"_classMap \" [ngStyle]=\"{ 'width':_width} \"> <!-- placeHolder --> <div class=\"jdb-plg-select-placeholder \" [hidden]=\"inputText.length !=0 \">{{_placeHolder}}</div> <!-- \u591A\u9009item --> <ul class=\"chooseMore \"> <li *ngFor=\"let item of inputText \"> {{item[_optionText]}} <span class=\"item-delete icon-close \" (click)=\"deleteMoreItem($event,item) \"></span> </li> </ul> <ul #optionList [ngClass]=\"{ 'options-show':show, 'options-no-margin':!spaceFlex} \" class=\"options \"> <li class=\"choose-more \" *ngFor=\"let option of _selectList \" (click)=\"chooseMore($event,option) \" [ngClass]=\"{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} \"> <!-- {{_optionText=='option'?option:option[_optionText]}} --> <img class=\"img-box\" *ngIf=\"_showImgBox&&option.imgUrl\" [src]=\"option.imgUrl\" alt=\"\"> <span class=\"img-box\" *ngIf=\"_showImgBox&&!option.imgUrl\"></span> <span class=\"text-box\">{{_optionText=='option'?option:option[_optionText]}}</span> <span [hidden]=\"!moreIndex(option) \" class=\"choose-right icon-selected \"></span> </li> </ul> <!-- \u6E05\u7A7A\u56FE\u6807 --> <span class=\"close-icon icon-empty \" [hidden]=\"!isShowClear \" (click)=\"clearInputText($event) \"></span> </div> <!-- \u9009\u4E2D\u51E0\u9879 --> <div *ngIf=\"_jdbMode=='chooseNum' \" #inputDom class=\"jdb-plg-select-num \" (click)=\"dialogShow($event) \" [ngClass]=\"_classMap \" [ngStyle]=\"{ 'width':_width} \"> <!-- placeHolder --> <div class=\"jdb-plg-select-placeholder \" [hidden]=\"inputText!==0 \">{{_placeHolder}}</div> <span class=\"choose-tip \" [hidden]=\"inputText===0 \">\u5DF2\u9009\u4E2D{{inputText}}\u9879</span> <ul #optionList [ngClass]=\"{ 'options-show':show, 'options-no-margin':!spaceFlex} \" class=\"options \"> <li class=\"choose-more \" *ngFor=\"let option of _selectList \" (click)=\"numClick($event,option) \" [ngClass]=\"{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} \"> <!-- {{_optionText=='option'?option:option[_optionText]}} --> <img class=\"img-box\" *ngIf=\"_showImgBox&&option.imgUrl\" [src]=\"option.imgUrl\" alt=\"\"> <span class=\"img-box\" *ngIf=\"_showImgBox&&!option.imgUrl\"></span> <span class=\"text-box\">{{_optionText=='option'?option:option[_optionText]}}</span> <span [hidden]=\"!moreIndex(option) \" class=\"choose-right icon-selected \"></span> </li> </ul> <!-- \u6E05\u7A7A\u56FE\u6807 --> <span class=\"close-icon icon-empty \" [hidden]=\"!isShowClear \" (click)=\"clearInputText($event) \"></span> <span class=\"select-icon icon-select-arrow \" [hidden]=\"isShowClear \"></span> </div> <!-- \u906E\u7F69\u5C42 --> <div class=\"jdb-plg-select-master \" *ngIf=\"show \"></div>",
                    // styleUrls: ['./jdb-plg-select.component.scss'],
                    providers: [
                        {
                            // 注册成为表单控件
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return JdbPlgSelectComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    JdbPlgSelectComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: Renderer }
    ]; };
    JdbPlgSelectComponent.propDecorators = {
        jdbClassName: [{ type: Input }],
        jdbItemDisabled: [{ type: Input }],
        jdbError: [{ type: Input }],
        jdbSureDisabled: [{ type: Input }],
        jdbPlaceHolder: [{ type: Input }],
        jdbClear: [{ type: Input }],
        jdbSelectList: [{ type: Input }],
        jdbSize: [{ type: Input }],
        jdbWidth: [{ type: Input }],
        jdbOptionText: [{ type: Input }],
        jdbOptionValue: [{ type: Input }],
        jdbDisabled: [{ type: Input }],
        jdbMode: [{ type: Input }],
        inputDom: [{ type: ViewChild, args: ['inputDom',] }],
        optionList: [{ type: ViewChild, args: ['optionList',] }]
    };
    return JdbPlgSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        this._classMap = (_a = {},
            _a["input-" + this._type + "-" + this._size] = true,
            _a['input-disabled'] = this._disabled,
            _a['input-error'] = this._error,
            _a);
        var _a;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    JdbPlgInputComponent.prototype.clearTxt = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
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
                    template: "<span class=\"input-group-addon\" *ngIf=\"_addOnContentBefore\"> <ng-template [ngTemplateOutlet]=\"_addOnContentBefore\"> </ng-template> </span> <ng-template [ngIf]=\"_type=='text'\"> <div class=\"input-text-wrap\" [ngClass]=\"_inputWrapClass\"> <span class=\"input-prefix\" *ngIf=\"_prefixContent\"> <ng-template [ngTemplateOutlet]=\"_prefixContent\"> </ng-template> </span> <span class=\"input-content\"> <input (blur)=\"_emitBlur($event)\" (focus)=\"_emitFocus($event)\" [disabled]=\"_disabled\" [readonly]=\"_readonly\" [attr.id]=\"jdbId\" [attr.type]=\"_type\" class=\"input\" [ngClass]=\"_classMap\" [attr.placeholder]=\"_placeHolder\" [(ngModel)]=\"jdbValue\" [style.width]=\"width\" maxlength=\"{{jdbMaxLength}}\" #input /> <span class=\"input-clear\" *ngIf=\"_clear && _value && _type=='text'\" (click)=\"clearTxt($event)\"> <i class=\"close-icon icon-empty\"></i> </span> </span> <span class=\"ant-input-suffix\" *ngIf=\"_suffixContent\"> <i class=\"iconfont icon-guanbi2fill\"></i> <ng-template [ngTemplateOutlet]=\"_suffixContent\"> </ng-template> </span> <div class=\"input-error-tip\" *ngIf=\"jdbError && _errorContent\" [style.width]=\"width\"> <i class=\"icon-message-error error-tip\"></i> <p class=\"input-error-content\"> <ng-template [ngTemplateOutlet]=\"_errorContent\"> </ng-template> </p> </div> </div> </ng-template> <span class=\"input-group-addon\" *ngIf=\"_addOnContentAfter\"> <ng-template [ngTemplateOutlet]=\"_addOnContentAfter\"> </ng-template> </span> <ng-template [ngIf]=\"_type=='textarea'\"> <div class=\"input-text-wrap\"> <textarea (blur)=\"_emitBlur($event)\" (focus)=\"_emitFocus($event)\" (input)=\"textareaOnChange($event)\" [attr.id]=\"jdbId\" #inputTextarea [disabled]=\"_disabled\" [readonly]=\"_readonly\" type=\"textarea\" class=\"input input-textarea\" [ngClass]=\"_classMap\" [attr.placeholder]=\"jdbPlaceHolder\" [(ngModel)]=\"jdbValue\" maxlength=\"{{jdbMaxLength}}\" [style.width]=\"width\"></textarea> <span class=\"textarea-wc-tip\" [ngClass]=\"{'textarea-wc-tip-red': jdbValue&&jdbValue.length == jdbMaxLength}\" *ngIf=\"jdbMaxLength && !_disabled &&!_readonly\">{{(jdbValue&&jdbValue.length)||0}}/{{jdbMaxLength}}</span> </div> </ng-template>",
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
        { type: Renderer2 }
    ]; };
    JdbPlgInputComponent.propDecorators = {
        width: [{ type: Input }],
        _errorContent: [{ type: ContentChild, args: ['jdbErrorContent',] }],
        _addOnContentBefore: [{ type: ContentChild, args: ['addContentBefore',] }],
        _addOnContentAfter: [{ type: ContentChild, args: ['addContentAfter',] }],
        _prefixContent: [{ type: ContentChild, args: ['prefixContent',] }],
        _suffixContent: [{ type: ContentChild, args: ['suffixContent',] }],
        jdbBlur: [{ type: Output }],
        jdbFocus: [{ type: Output }],
        inputEl: [{ type: ViewChild, args: ['input',] }],
        clearBtnEl: [{ type: ViewChild, args: ['clearBtn',] }],
        compositionStart: [{ type: HostListener, args: ['compositionstart', ['$event'],] }],
        compositionEnd: [{ type: HostListener, args: ['compositionend', ['$event'],] }],
        jdbType: [{ type: Input }],
        jdbPlaceHolder: [{ type: Input }],
        jdbSize: [{ type: Input }],
        jdbDisabled: [{ type: Input }],
        jdbReadonly: [{ type: Input }],
        jdbValue: [{ type: Input }],
        jdbError: [{ type: Input }],
        jdbClear: [{ type: Input }],
        jdbMaxLength: [{ type: Input }],
        jdbPromptData: [{ type: Input }]
    };
    return JdbPlgInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var keyCode = {
    UP: 38,
    DOWN: 40,
    ENTER: 13
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var JdbPlgAutocompleteComponent = /** @class */ (function () {
    function JdbPlgAutocompleteComponent(el, render) {
        this.el = el;
        this.render = render;
        this._searchParam = 'key';
        this._serverApi = '/';
        this._searchWord = '';
        this.searchResult = [];
        this._listShow = false;
        this.activeIndex = 0;
        this.ngModelValue = '';
        this.jdbPlaceHolder = '';
        this.width = '300px';
        this._dataSource = [];
        this.dataKey = 'value';
        this.dataVal = 'text';
        this.jdbDataAsyn = false;
        this.onSelected = new EventEmitter();
        this.onChange = function () { return null; };
    }
    /**
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.render.listen(this.el.nativeElement, 'input', this.debounce(function () {
            _this.activeIndex = -1;
            _this.inputHandle();
        }, 500, false));
        // 处理搜索框点击事件
        this.render.listen(this.el.nativeElement.querySelector('input[type="text"]'), 'click', function (evt) {
            _this.activeIndex = -1;
            if (!_this._searchWord) {
                _this.searchResult = _this.jdbDataSource;
            }
            else {
                _this.searchResult = _this.searchResult = _this.jdbDataSource.filter(function (obj) { return obj['text'].indexOf(_this._searchWord) !== -1; });
            }
            if (_this.searchResult.length > 0) {
                _this._listShow = true;
                setTimeout(function (_) {
                    _this.resetPopDirection(_this.el.nativeElement);
                }, 0);
            }
            evt.stopPropagation();
        });
        // 处理关闭搜索结果
        this.render.listen('document', 'click', function (evt) {
            _this._listShow = false;
        });
        this.render.listen(this.el.nativeElement.querySelector('input[type="text"]'), 'blur', function () {
            if ((_this.selectOne && _this._searchWord !== _this.selectOne.text) || !_this.selectOne) {
                _this._searchWord = '';
                _this.ngModelValue = '';
                _this.selectOne = null;
                _this.onChange('');
            }
        });
    };
    /**
     * @param {?} simples
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.ngOnChanges = /**
     * @param {?} simples
     * @return {?}
     */
    function (simples) {
    };
    // 键盘事件
    /**
     * @param {?} event
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.OnKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.which) {
            case keyCode.UP:
                this.activeIndex--;
                if (this.activeIndex < 0) {
                    this.activeIndex = this.searchResult.length - 1;
                }
                this.setSearchWord();
                break;
            case keyCode.DOWN:
                this.activeIndex++;
                if (this.activeIndex >= this.searchResult.length) {
                    this.activeIndex = 0;
                }
                this.setSearchWord();
                break;
            case keyCode.ENTER:
                /** @type {?} */
                var item = /** @type {?} */ (this.searchResult[this.activeIndex]);
                this.selectedItem(item, this.activeIndex);
                break;
            default:
                this.activeIndex = -1;
        }
    };
    // 粘贴事件
    /**
     * @param {?} event
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.OnPaste = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.inputHandle();
    };
    // 处理input和paste事件
    /**
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.inputHandle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._searchWord) {
            if (this.jdbDataAsyn) ;
            else {
                // 同步过滤处理
                this.searchResult = this.jdbDataSource.filter(function (obj) { return obj['text'].indexOf(_this._searchWord) !== -1; });
                // if (this.searchResult.length > 0) {
                //     this.selectOne = this.searchResult[this.activeIndex];
                // }
            }
            // 显示结果
            if (this.searchResult.length > 0) {
                this._listShow = true;
            }
            else {
                this._listShow = false;
            }
            // 要先让搜索结果展示，才能获取到相关高度，处理显示位置
            setTimeout(function (_) {
                _this.resetPopDirection(_this.el.nativeElement);
            }, 0);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.closePop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.selectOne && this._searchWord && this._listShow) {
            if (this._searchWord !== this.selectOne.text) {
                this.ngModelValue = '';
                this.onChange('');
                this.selectOne = null;
                this._searchWord = '';
            }
            else {
                this.onSelected.emit(this.selectOne.value);
                this.ngModelValue = this.selectOne.value;
                this.onChange(this.ngModelValue);
            }
        }
        this._listShow = false;
        // event.stopPropagation();
    };
    // 设置选中样式
    /**
     * @param {?} obj
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.setSelectClass = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (obj) {
            return this._searchWord === obj.text;
        }
        return;
    };
    // 设置文本框选中内容
    /**
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.setSearchWord = /**
     * @return {?}
     */
    function () {
        this.selectOne = /** @type {?} */ (this.searchResult[this.activeIndex]);
        this._searchWord = this.selectOne.text;
    };
    // 选中单个条目
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.selectedItem = /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (item, index) {
        this.activeIndex = index;
        this.selectOne = item;
        this._searchWord = item.text;
        this._listShow = false;
        this.onSelected.emit(this.selectOne.value);
        this.ngModelValue = this.selectOne.value;
        this.onChange(this.ngModelValue);
        event.stopPropagation();
    };
    // 查询接口
    // popupList() {
    //   this.searchResult = [];
    //   this.jdbPlgBaseApi.post(this._serverApi,
    //     { [this._searchParam]: this._searchWord }, false).subscribe(
    //     (res) => {
    //       if (+res.error.returnCode === 0) {
    //         res.data = res.data.map((obj, index) => ({
    //           value: obj[this.dataKey],
    //           text: obj[this.dataVal]
    //         }));
    //         this.searchResult = <AutoCompleteResult[]>res.data;
    //         this._listShow = true;
    //         // if (this.searchResult.length > 0) {
    //         //     this.selectOne = this.searchResult[this.activeIndex];
    //         // }
    //       }
    //     });
    // }
    // 函数防抖
    /**
     * @param {?} fn
     * @param {?} wait
     * @param {?} immediate
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.debounce = /**
     * @param {?} fn
     * @param {?} wait
     * @param {?} immediate
     * @return {?}
     */
    function (fn, wait, immediate) {
        /** @type {?} */
        var timeout;
        /** @type {?} */
        var args;
        /** @type {?} */
        var context;
        /** @type {?} */
        var timestamp;
        /** @type {?} */
        var result;
        /** @type {?} */
        var later = function () {
            /** @type {?} */
            var last = new Date().getTime() - timestamp;
            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last);
            }
            else {
                timeout = null;
                if (!immediate) {
                    result = fn.apply(context, args);
                    if (!timeout) {
                        context = args = null;
                    }
                }
            }
        };
        return function () {
            context = this;
            args = arguments;
            timestamp = new Date().getTime();
            /** @type {?} */
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) {
                result = fn.apply(context, args);
                context = args = null;
            }
            return result;
        };
    };
    // 设置弹出位置
    /**
     * @param {?} node
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.resetPopDirection = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var getOffsetTop = function (ele) {
            /** @type {?} */
            var top = ele.offsetTop;
            if (!ele.offsetParent) {
                top += getOffsetTop(ele.offsetParent);
            }
            return top;
        };
        /** @type {?} */
        var getScrollTop = function (ele) {
            /** @type {?} */
            var top = ele.scrollTop;
            if (!ele.parentElement) {
                top += getScrollTop(ele.parentElement);
            }
            return top;
        };
        /** @type {?} */
        var nodeTop = getOffsetTop(node);
        /** @type {?} */
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        /** @type {?} */
        var scrollTop = getScrollTop(node.parentElement);
        /** @type {?} */
        var popHeight = this.resultEle.nativeElement.offsetHeight || 250;
        /** @type {?} */
        var inputHeight = node.querySelector('input[type="text"]').offsetHeight;
        /** @type {?} */
        var lastDirect = clientHeight - (nodeTop - scrollTop) - popHeight - inputHeight;
        if (lastDirect <= 0) {
            this.render.addClass(this.resultEle.nativeElement, 'pop_top');
        }
        else {
            this.render.removeClass(this.resultEle.nativeElement, 'pop_top');
        }
    };
    // 清空文本框处理
    /**
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.changeInput = /**
     * @return {?}
     */
    function () {
        if (this._searchWord === '') {
            this.ngModelValue = '';
            this.onChange('');
        }
    };
    Object.defineProperty(JdbPlgAutocompleteComponent.prototype, "jdbDataSource", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataSource;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._dataSource = value;
            if (!this.jdbDataAsyn && this._dataSource.length > 0) {
                if (typeof this._dataSource[0] === 'string') {
                    this._dataSource = this._dataSource.map(function (val, index) { return ({
                        value: val,
                        text: val
                    }); });
                }
                else if (typeof this._dataSource[0] === 'object' && (this.dataKey !== 'value' || this.dataVal !== 'text')) {
                    this._dataSource = this._dataSource.map(function (obj, index) { return ({
                        value: obj[_this.dataKey],
                        text: obj[_this.dataVal]
                    }); });
                }
                this.searchResult = this._dataSource;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgAutocompleteComponent.prototype, "jdbSearchParam", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchParam;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._searchParam = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgAutocompleteComponent.prototype, "jdbServerApi", {
        get: /**
         * @return {?}
         */
        function () {
            return this._serverApi;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._serverApi = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.ngModelValue = value;
        if (this.ngModelValue === '') {
            this._searchWord = '';
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.registerOnChange = /**
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
    JdbPlgAutocompleteComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
    };
    JdbPlgAutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-autocomplete',
                    template: "<div class=\"autoprompt\"> <app-jdb-plg-input [jdbType]=\"'text'\" [jdbPlaceHolder]=\"jdbPlaceHolder\" [jdbClear]=\"true\" [(ngModel)]=\"_searchWord\" [width]=\"width\" (ngModelChange)=\"changeInput()\"> </app-jdb-plg-input> <ul #resultele [hidden]=\"!_listShow\" [style.width]=\"width\"> <li *ngFor=\"let item of searchResult;index as i\" [ngClass]=\"{'selected': activeIndex == i}\" (click)=\"selectedItem(item,i)\"> <p> {{item.text}} </p> </li> </ul> </div> <!-- <div class=\"autoprompt-mask\" [hidden]=\"!_listShow\" (click)=\"closePop($event)\"></div> -->",
                    // styleUrls: ['./jdb-plg-autocomplete.component.scss'],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return JdbPlgAutocompleteComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    JdbPlgAutocompleteComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    JdbPlgAutocompleteComponent.propDecorators = {
        resultEle: [{ type: ViewChild, args: ['resultele',] }],
        jdbPlaceHolder: [{ type: Input }],
        width: [{ type: Input }],
        dataKey: [{ type: Input }],
        dataVal: [{ type: Input }],
        jdbDataAsyn: [{ type: Input }],
        onSelected: [{ type: Output }],
        OnKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        OnPaste: [{ type: HostListener, args: ['paste', ['$event'],] }],
        jdbDataSource: [{ type: Input }],
        jdbSearchParam: [{ type: Input }],
        jdbServerApi: [{ type: Input }]
    };
    return JdbPlgAutocompleteComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommonMethodService = /** @class */ (function () {
    function CommonMethodService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /*常用公共方法*/
    /*验证手机号是否合法
    * number 校验的手机号码*/
    /**
     * @param {?} number
     * @return {?}
     */
    CommonMethodService.prototype.testPhoneNumber = /**
     * @param {?} number
     * @return {?}
     */
    function (number) {
        /** @type {?} */
        var phoneReg = /^[1][0-9]{10}$/;
        return phoneReg.test(number);
    };
    /*验证姓名是否合法
     name 校验的姓名*/
    /**
     * @param {?} name
     * @return {?}
     */
    CommonMethodService.prototype.testName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var nameReg = /^[\u4E00-\u9FA5·]{2,20}$/;
        return nameReg.test(name);
    };
    /*验证代偿金额是否为最大1亿，最小一元，只可以两位小数
    num单位为分*/
    /**
     * @param {?} num
     * @return {?}
     */
    CommonMethodService.prototype.testRepayAmount = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        /** @type {?} */
        var nameReg = /^([1-9][0-9]{2,9}|10000000000)$/;
        return nameReg.test(num);
    };
    /*数字格式化为千位分隔
    num单位为分*/
    /**
     * @param {?} num
     * @return {?}
     */
    CommonMethodService.prototype.numFormat = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        num = num / 100;
        return num.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
    };
    /**
     * @method 将'yyyy-MM-dd~yyyy-MM-dd'格式，转化为startTime、endTime（10位时间戳）
     * @param value 'yyyy-MM-dd~yyyy-MM-dd'格式字符串
     */
    /**
     * \@method 将'yyyy-MM-dd~yyyy-MM-dd'格式，转化为startTime、endTime（10位时间戳）
     * @param {?} value 'yyyy-MM-dd~yyyy-MM-dd'格式字符串
     * @return {?}
     */
    CommonMethodService.prototype.toTimestamp = /**
     * \@method 将'yyyy-MM-dd~yyyy-MM-dd'格式，转化为startTime、endTime（10位时间戳）
     * @param {?} value 'yyyy-MM-dd~yyyy-MM-dd'格式字符串
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var timeObj = {};
        if (value) {
            /** @type {?} */
            var arrDate = value.split('~');
            timeObj['startTime'] = new Date(arrDate[0]).getTime() / 1000;
            timeObj['endTime'] = new Date(arrDate[1]).getTime() / 1000;
        }
        else {
            timeObj['startTime'] = '';
            timeObj['endTime'] = '';
        }
        return timeObj;
    };
    /* 将时间戳转化为不同时间格式
    * @param time必传 10位的时间戳
    * @param type选传 默认'yyyy-MM-dd HH:mm:ss'格式  type为1 'yyyy-MM-dd HH:mm:ss'; type为2 'yyyy-MM-dd HH:mm'; type为3 'yyyy-MM-dd'; type为4 'yyyy-MM'; type为5 'yyyy';
    */
    /**
     * @param {?} time
     * @param {?=} type
     * @return {?}
     */
    CommonMethodService.prototype.toDate = /**
     * @param {?} time
     * @param {?=} type
     * @return {?}
     */
    function (time, type) {
        if (type === void 0) { type = 1; }
        /** @type {?} */
        var myDate = new Date(time * 1000);
        /** @type {?} */
        var year = myDate.getFullYear();
        /** @type {?} */
        var month = this.add0(myDate.getMonth() + 1);
        /** @type {?} */
        var day = this.add0(myDate.getDate());
        /** @type {?} */
        var hour = this.add0(myDate.getHours());
        /** @type {?} */
        var minute = this.add0(myDate.getMinutes());
        /** @type {?} */
        var second = this.add0(myDate.getSeconds());
        switch (type) {
            case 1:
                return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
            case 2:
                return year + "-" + month + "-" + day + " " + hour + ":" + minute;
            case 3:
                return year + "-" + month + "-" + day;
            case 4:
                return year + "-" + month;
            case 5:
                return "" + year;
        }
    };
    /**
     * @param {?} m
     * @return {?}
     */
    CommonMethodService.prototype.add0 = /**
     * @param {?} m
     * @return {?}
     */
    function (m) {
        return m < 10 ? "0" + +m : m;
    };
    /*
      参数1: 当前日期的前/后几天，n<0是为当前日期的后几天，反之为当前日期的前几天,默认为0;
      参数2: 拼接的符号，符号'-'(2018-07-16),符号'/'(2018/07/16),默认为'-';
      参数3: 是否返回的是时间戳格式，默认是时间戳格式
      返回值: n=0时，返回当前日期的数组，否则第一个元素为当前日期，第二个元素为目标日期。
    */
    /**
     * @param {?=} n
     * @param {?=} joinStr
     * @param {?=} isTimeStamp
     * @return {?}
     */
    CommonMethodService.prototype.getTarDate = /**
     * @param {?=} n
     * @param {?=} joinStr
     * @param {?=} isTimeStamp
     * @return {?}
     */
    function (n, joinStr, isTimeStamp) {
        if (n === void 0) { n = 0; }
        if (joinStr === void 0) { joinStr = '-'; }
        if (isTimeStamp === void 0) { isTimeStamp = true; }
        /** @type {?} */
        var date = new Date();
        /** @type {?} */
        var tarYear;
        /** @type {?} */
        var tarMonth;
        /** @type {?} */
        var tarDay;
        /** @type {?} */
        var curYear;
        /** @type {?} */
        var curMonth;
        /** @type {?} */
        var curDay;
        /** @type {?} */
        var curDate;
        /** @type {?} */
        var tarDate;
        //获取当前年月日
        curYear = date.getFullYear();
        curMonth = date.getMonth() + 1;
        curDay = date.getDate();
        //获取当前前n天或后n天的年月日
        date.setDate(date.getDate() - n);
        tarYear = date.getFullYear();
        tarMonth = date.getMonth() + 1;
        tarDay = date.getDate();
        curDate = curYear + joinStr + (curMonth < 10 ? ('0' + curMonth) : curMonth) + joinStr + (curDay < 10 ? ('0' + curDay) : curDay);
        tarDate = tarYear + joinStr + (tarMonth < 10 ? ('0' + tarMonth) : tarMonth) + joinStr + (tarDay < 10 ? ('0' + tarDay) : tarDay);
        if (!isTimeStamp) {
            return n === 0 ? [curDate] : [curDate, tarDate];
        }
        if (joinStr !== '-') {
            /** @type {?} */
            var reg = new RegExp(joinStr, "g");
            curDate = curDate.replace(reg, '-');
            tarDate = tarDate.replace(reg, '-');
        }
        return n === 0 ? [new Date(curDate + ' 00:00:00').getTime()] : [new Date(curDate + ' 00:00:00').getTime(), new Date(tarDate + ' 23:59:59').getTime()];
    };
    /**
     * @param {?} vRef
     * @return {?}
     */
    CommonMethodService.prototype.setRootViewContainerRef = /**
     * @param {?} vRef
     * @return {?}
     */
    function (vRef) {
        this.vRef = vRef;
    };
    /**
     * @param {?} msg
     * @param {?=} delayTime
     * @return {?}
     */
    CommonMethodService.prototype.toast = /**
     * @param {?} msg
     * @param {?=} delayTime
     * @return {?}
     */
    function (msg, delayTime) {
        if (delayTime === void 0) { delayTime = 3000; }
        /** @type {?} */
        var childComponent = this.componentFactoryResolver.resolveComponentFactory(JdbPlgToastComponent);
        /** @type {?} */
        var comInstance = this.vRef.createComponent(childComponent);
        comInstance.instance.msg = msg;
        comInstance.changeDetectorRef.detectChanges();
        setTimeout(function () {
            comInstance.destroy();
        }, delayTime);
    };
    //方式丢失精度四种算法
    //乘法
    /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    CommonMethodService.prototype.accMul = /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    function (arg1, arg2) {
        /** @type {?} */
        var m = 0;
        /** @type {?} */
        var s1 = arg1.toString();
        /** @type {?} */
        var s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length;
        }
        catch (e) { }
        try {
            m += s2.split(".")[1].length;
        }
        catch (e) { }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    };
    //除法
    /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    CommonMethodService.prototype.accDiv = /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    function (arg1, arg2) {
        /** @type {?} */
        var t1 = 0;
        /** @type {?} */
        var t2 = 0;
        /** @type {?} */
        var r1;
        /** @type {?} */
        var r2;
        try {
            t1 = arg1.toString().split(".")[1].length;
        }
        catch (e) { }
        try {
            t2 = arg2.toString().split(".")[1].length;
        }
        catch (e) { }
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return this.accMul((r1 / r2), Math.pow(10, t2 - t1));
    };
    //加法
    /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    CommonMethodService.prototype.accAdd = /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    function (arg1, arg2) {
        /** @type {?} */
        var r1;
        /** @type {?} */
        var r2;
        /** @type {?} */
        var m;
        try {
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1 * m + arg2 * m) / m;
    };
    //减法
    /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    CommonMethodService.prototype.accSubtr = /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    function (arg1, arg2) {
        /** @type {?} */
        var r1;
        /** @type {?} */
        var r2;
        /** @type {?} */
        var m;
        /** @type {?} */
        var n;
        try {
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        n = (r1 >= r2) ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    };
    CommonMethodService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CommonMethodService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    return CommonMethodService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} obj
 * @return {?}
 */
function isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
}
/**
 * @param {?} obj
 * @return {?}
 */
function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}
/**
 * @param {?} obj
 * @return {?}
 */
function isDate(obj) {
    return Object.prototype.toString.call(obj) === "[object Date]";
}
/**
 * @param {?} value
 * @return {?}
 */
function toJson(value) {
    /** @type {?} */
    var jsonObj = {};
    try {
        jsonObj = JSON.parse(value);
    }
    catch (e) {
        console.log('to json parse error');
    }
    return jsonObj;
}
/**
 * @param {?} v
 * @return {?}
 */
function serializeValue(v) {
    if (isObject(v)) {
        return isDate(v) ? v.toISOString() : toJson(v);
    }
    return v;
}
/**
 * @param {?} val
 * @param {?=} pctEncodeSpaces
 * @return {?}
 */
function encodeUriQuery(val, pctEncodeSpaces) {
    return encodeURIComponent(val).
        replace(/%40/gi, '@').
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
}
/**
 * @param {?} params
 * @return {?}
 */
function jQueryLikeParamSerializer(params) {
    if (!params)
        return '';
    /** @type {?} */
    var parts = [];
    serialize(params, '', true);
    return parts.join('&');
    /**
     * @param {?} toSerialize
     * @param {?} prefix
     * @param {?=} topLevel
     * @return {?}
     */
    function serialize(toSerialize, prefix, topLevel) {
        if (isArray(toSerialize)) {
            toSerialize.forEach(function (value, index) {
                serialize(value, prefix + '[' + (isObject(value) ? index : '') + ']');
            });
        }
        else if (isObject(toSerialize) && !isDate(toSerialize)) {
            for (var key in toSerialize) {
                serialize(toSerialize[key], prefix +
                    (topLevel ? '' : '.') +
                    key +
                    (topLevel ? '' : ''));
                // serialize(toSerialize[key], prefix +
                //     (topLevel ? '' : '[') +
                //     key +
                //     (topLevel ? '' : ']'));
            }
        }
        else {
            parts.push(encodeUriQuery(prefix) + '=' +
                (toSerialize == null ? '' : encodeUriQuery(serializeValue(toSerialize))));
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/** @type {?} */
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
/**
 * @param {?} val
 * @return {?}
 */
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
/**
 * @param {?} target
 * @param {...?} source
 * @return {?}
 */
function objectAssign(target) {
    var source = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        source[_i - 1] = arguments[_i];
    }
    /** @type {?} */
    var from;
    /** @type {?} */
    var to = toObject(target);
    /** @type {?} */
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if ((/** @type {?} */ (Object)).getOwnPropertySymbols) {
            symbols = (/** @type {?} */ (Object)).getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SendStatisticService = /** @class */ (function () {
    function SendStatisticService() {
        this.emitStatistic = new Subject();
        this.StatisticOutPut$ = this.emitStatistic.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SendStatisticService.prototype.emitStatisticData = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value.length !== 0) {
            this.emitStatistic.next(value);
        }
    };
    SendStatisticService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SendStatisticService.ctorParameters = function () { return []; };
    return SendStatisticService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var statisticList = [];
var JdbPlgBaseService = /** @class */ (function () {
    function JdbPlgBaseService(http, commonService, sendStatisticService) {
        var _this = this;
        this.http = http;
        this.commonService = commonService;
        this.sendStatisticService = sendStatisticService;
        this.timer = null;
        //收集的每一个接口的数据结构
        this.newStatisticData = {
            from: '',
            operator: '',
            memberId: '',
            service: {
                apiException: {
                    requestTime: null,
                    url: '',
                    params: null,
                    resCode: null,
                    resMessage: '',
                    errorMessage: ''
                }
            }
        };
        //收集的每一个接口的公共信息
        this.baseObj = {
            from: null,
            operator: null,
            memberId: null,
        };
        if (this.timer) {
            clearInterval(this.timer);
        }
        //轮询去发送数据，并清空队列
        this.timer = setInterval(function () {
            _this.sendStatisticService.emitStatisticData(statisticList);
            statisticList = [];
        }, 10000);
    }
    /**
     * @param {?} vRef
     * @return {?}
     */
    JdbPlgBaseService.prototype.setRootViewContainerRef = /**
     * @param {?} vRef
     * @return {?}
     */
    function (vRef) {
        this.vRef = vRef;
        this.commonService.setRootViewContainerRef(vRef);
    };
    /**
     *
     * @param apiName
     * @param dataObj
     * @param isIntercept 是否拦截处理returnCode != 0 的情况
     */
    /**
     *
     * @param {?} apiName
     * @param {?} dataObj
     * @param {?} options
     * @return {?}
     */
    JdbPlgBaseService.prototype.post = /**
     *
     * @param {?} apiName
     * @param {?} dataObj
     * @param {?} options
     * @return {?}
     */
    function (apiName, dataObj, options) {
        var _this = this;
        /** @type {?} */
        var time = new Date().getTime();
        /** @type {?} */
        var loginToken;
        /** @type {?} */
        var loginWay;
        /** @type {?} */
        var orgUid;
        /** @type {?} */
        var from;
        // 获取接口的apiException
        this.newStatisticData.service.apiException = {
            requestTime: null,
            url: '',
            params: null,
            resCode: null,
            resMessage: '',
            errorMessage: ''
        };
        /** @type {?} */
        var apiException = JSON.parse(JSON.stringify(this.newStatisticData.service.apiException));
        this.newStatisticData.service.apiException = apiException;
        if (options && options.tokenObj) {
            loginToken = localStorage.getItem(options.tokenObj.loginToken);
            loginWay = localStorage.getItem(options.tokenObj.loginWay);
            orgUid = localStorage.getItem(options.tokenObj.orgUid);
            from = localStorage.getItem(options.tokenObj.from);
        }
        /** @type {?} */
        var loginObj = {};
        /** @type {?} */
        var data = {};
        /** @type {?} */
        var currentRoute = location.hash.split('/')[1];
        if (loginToken) {
            if (orgUid) {
                loginObj = {
                    'loginToken': loginToken,
                    'loginWay': loginWay,
                    'orgUid': orgUid,
                    'jdbDhTraceId': time + '-' + parseInt(Math.random() * (100000 + 1) + 1 + '')
                };
            }
            else {
                loginObj = {
                    'loginToken': loginToken,
                    'loginWay': loginWay,
                    'jdbDhTraceId': time + '-' + parseInt(Math.random() * (100000 + 1) + 1 + '')
                };
            }
            data = objectAssign({}, loginObj, dataObj);
        }
        else {
            data = objectAssign({}, dataObj);
        }
        // 請求參數
        apiException.params = data;
        data = jQueryLikeParamSerializer(data);
        /** @type {?} */
        var headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        /** @type {?} */
        var requestoptions = {
            headers: headers
        };
        /** @type {?} */
        var reqUrl = apiName;
        //统计数据添加from和operator字段
        this.baseObj.from = from;
        this.baseObj.operator = localStorage.getItem('nickName');
        this.baseObj.memberId = localStorage.getItem('memberId');
        //统计数据添加请求url
        apiException.url = reqUrl;
        return this.http.post(reqUrl, data || {}, requestoptions)
            .pipe(filter(function (res) {
            // 根据joinTraceId是否为true 判断是否需要拼接日志号 （目前只有电催系统需要）
            if (currentRoute != 'login' && options && options.joinTraceId) {
                res.error.returnUserMessage = res.error.returnUserMessage + '<br/>(日志号:' + loginObj.jdbDhTraceId + ')';
            }
            /** @type {?} */
            var endTime = new Date().getTime();
            //统计接口请求时长
            apiException.requestTime = endTime - time;
            //校验接口返回的数据结构格式
            if (!(res.hasOwnProperty('data') && res.hasOwnProperty('error'))) {
                _this.commonService.toast('系统接口格式错误！');
                options && options.reset && options.reset();
                return false;
            }
            if (options.fns && options.fns.length != 0) {
                /** @type {?} */
                var len = options.fns.length;
                for (var i = 0; i < len; i++) {
                    /** @type {?} */
                    var fn = options.fns[i];
                    if (res.error && res.error.returnCode * 1 === fn.returnCode && currentRoute != 'login') {
                        fn.callback();
                    }
                }
            }
            if (res.error && res.error.returnCode * 1 == 0) {
                //统计数据添加returnCode，returnUserMessage信息
                apiException.resCode = res.error.returnCode;
                apiException.resMessage = res.error.returnUserMessage;
                //拷贝公共信息
                //拷贝公共信息
                _this.newStatisticData = Object.assign(_this.newStatisticData, _this.baseObj);
                //去除logDataApi、loginApi、qrcodeApi三个接口
                if (options && !options.noLog) {
                    statisticList.push(_this.newStatisticData);
                }
                return true;
            }
            // 统计数据添加returnCode，returnUserMessage信息
            apiException.resCode = res.error.returnCode;
            apiException.resMessage = res.error.returnUserMessage;
            _this.newStatisticData = Object.assign(_this.newStatisticData, _this.baseObj);
            if (options && !options.noLog) {
                statisticList.push(_this.newStatisticData);
            }
            //兼容登录组件中qrcodeApi和loginApi两个接口老的写法
            if (typeof (options) === 'boolean') {
                if (options) {
                    _this.commonService.toast(res && res.error && res.error.returnUserMessage);
                    return false;
                }
                else {
                    return true;
                }
            }
            //是否拦截处理
            if (options.isIntercept) {
                _this.commonService.toast(res && res.error && res.error.returnUserMessage);
                return false;
            }
            else {
                return true;
            }
        }))
            .pipe(catchError(function (error) {
            // 统计错误信息
            apiException.errorMessage = error;
            _this.newStatisticData = Object.assign(_this.newStatisticData, _this.baseObj);
            if (options && !options.noLog) {
                statisticList.push(_this.newStatisticData);
            }
            return Observable.throw(error || 'Server error');
        }));
    };
    /**
     * @param {?} stamp
     * @return {?}
     */
    JdbPlgBaseService.prototype.stamp2string = /**
     * @param {?} stamp
     * @return {?}
     */
    function (stamp) {
        if (stamp) {
            /** @type {?} */
            var date = new Date(stamp).toJSON();
            return date.split('T')[0];
        }
        return null;
    };
    /**
     * @param {?} apiName
     * @param {?} params
     * @return {?}
     */
    JdbPlgBaseService.prototype.download = /**
     * @param {?} apiName
     * @param {?} params
     * @return {?}
     */
    function (apiName, params) {
        /** @type {?} */
        var cookieData = {};
        /** @type {?} */
        var paramsObj = objectAssign({}, cookieData, params);
        /** @type {?} */
        var url = apiName + '?';
        for (var key in paramsObj) {
            if (paramsObj[key]) {
                url += key + '=' + encodeURIComponent(paramsObj[key]) + '&';
            }
        }
        window.location.href = url;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    JdbPlgBaseService.prototype.getPicSize = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var arr = {};
        /** @type {?} */
        var reader = new FileReader();
        reader.onload = function (e) {
            /** @type {?} */
            var data = e.target.result;
            /** @type {?} */
            var image = new Image();
            image.onload = function () {
                /** @type {?} */
                var width = image.width;
                /** @type {?} */
                var height = image.height;
                arr = {
                    height: height,
                    width: width
                };
                return arr;
            };
            image.src = data;
        };
        reader.readAsDataURL(file);
    };
    JdbPlgBaseService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    JdbPlgBaseService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: CommonMethodService },
        { type: SendStatisticService }
    ]; };
    return JdbPlgBaseService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FillTableService = /** @class */ (function () {
    function FillTableService() {
    }
    /*
        lines:number  表格展示的行数
        lists:Array<any>  异步获取的数据
        flag:boolean  是否在空白行栏展示操作按钮,默认取unShowOpt字段
    */
    /**
     * @param {?} lines
     * @param {?} lists
     * @param {?=} flag
     * @return {?}
     */
    FillTableService.prototype.fillTable = /**
     * @param {?} lines
     * @param {?} lists
     * @param {?=} flag
     * @return {?}
     */
    function (lines, lists, flag) {
        lines = lines || 10;
        lists = lists || [];
        flag = flag || true;
        /** @type {?} */
        var aLength = lists.length;
        /** @type {?} */
        var mLength = lines - aLength;
        /** @type {?} */
        var fillObj = { unShowOpt: flag };
        /** @type {?} */
        var keys;
        if (aLength !== 0) {
            lists.forEach(function (element) {
                element.unShowOpt = !flag;
            });
            keys = Object.keys(lists[0]);
            if (keys.length !== 0) {
                keys.forEach(function (element) {
                    if (element !== "unShowOpt") {
                        fillObj[element] = Object.prototype.toString.call(lists[0][element]) == "[object Array]" ? [] : '';
                    }
                });
            }
        }
        if (aLength !== 0 && mLength > 0) {
            for (var i = 0; i < mLength; i++) {
                lists.push(fillObj);
            }
        }
        return lists;
    };
    FillTableService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FillTableService.ctorParameters = function () { return []; };
    return FillTableService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var JdbPlgTableErrorComponent = /** @class */ (function () {
    function JdbPlgTableErrorComponent() {
        /*
            功能：实现表格报错文案水平居中
          */
        this.tableErrorText = '暂无数据';
    }
    /**
     * @return {?}
     */
    JdbPlgTableErrorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    JdbPlgTableErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-table-error',
                    template: "<div class=\"jdb-plg-table-error\"> {{tableErrorText}} </div>",
                },] },
    ];
    /** @nocollapse */
    JdbPlgTableErrorComponent.ctorParameters = function () { return []; };
    JdbPlgTableErrorComponent.propDecorators = {
        tableErrorText: [{ type: Input }]
    };
    return JdbPlgTableErrorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ProvinceReformPipe = /** @class */ (function () {
    function ProvinceReformPipe() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    ProvinceReformPipe.prototype.transform = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val.length === 0) {
            return '';
        }
        return val.join('、');
    };
    ProvinceReformPipe.decorators = [
        { type: Pipe, args: [{ name: 'provinceReformPipe' },] },
    ];
    return ProvinceReformPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AmountReformPipe = /** @class */ (function () {
    function AmountReformPipe() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    AmountReformPipe.prototype.transform = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val === 0) {
            return '0.00';
        }
        if (!val) {
            return '';
        }
        return (val / 100).toFixed(2);
    };
    AmountReformPipe.decorators = [
        { type: Pipe, args: [{ name: 'amountReformPipe' },] },
    ];
    return AmountReformPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var JdbPlgTimelineItemComponent = /** @class */ (function () {
    function JdbPlgTimelineItemComponent() {
        this.optTime = 0;
    }
    Object.defineProperty(JdbPlgTimelineItemComponent.prototype, "timeNum", {
        get: /**
         * @return {?}
         */
        function () {
            return this.optTime;
        },
        set: /**
         * @param {?} time
         * @return {?}
         */
        function (time) {
            if (!time) {
                time = 0;
            }
            this.optTime = time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgTimelineItemComponent.prototype, "lastItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isLast;
        },
        set: /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this.isLast = item;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    JdbPlgTimelineItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    JdbPlgTimelineItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-timeline-item',
                    template: "<div class=\"timeline-item\"> <div class=\"timeline-item-tail\" [ngClass]=\"{'timeline-item-tail-last': isLast}\"></div> <div class=\"timeline-item-circle\"></div> <div class=\"timeline-item-content\"> <div class=\"timeline-cardBox\" [ngStyle]=\"{'width': cardBoxWidth,'background': cardBgc}\"> <div class=\"timeline-arrow\"> <em></em> <span [ngStyle]=\"{'border-right-color': cardBgc}\"></span> </div> <ng-content></ng-content> </div> <p [ngStyle]=\"{'width': cardBoxWidth}\" class=\"timeline-buttom_time\" *ngIf=\"optTime\">{{optTime*1000 | date: \"y-MM-dd HH:mm:ss\"}}</p> </div> </div>",
                },] },
    ];
    /** @nocollapse */
    JdbPlgTimelineItemComponent.ctorParameters = function () { return []; };
    JdbPlgTimelineItemComponent.propDecorators = {
        cardBoxWidth: [{ type: Input }],
        cardBgc: [{ type: Input }],
        timeNum: [{ type: Input }],
        lastItem: [{ type: Input }]
    };
    return JdbPlgTimelineItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        this.outBoxClass = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-checked"] = this.checked,
            _a[this.prefixCls + "-loading"] = this.jdbLoading,
            _a[this.prefixCls + "-disabled"] = this.jdbDisabled,
            _a[this.prefixCls + "-small"] = this.jdbSize === 'small',
            _a);
        var _a;
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
    JdbPlgSwitchComponent.propDecorators = {
        jdbCheckedText: [{ type: Input }],
        jdbUncheckedText: [{ type: Input }],
        jdbLoading: [{ type: Input }],
        jdbDisabled: [{ type: Input }],
        jdbSize: [{ type: Input }],
        jdbControl: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return JdbPlgSwitchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MDL_MODULES = [
    ShowPictureComponent,
    PictureViewerComponent,
    DragDirective,
    WatermarkDirective,
    JdbPlgPaginationComponent,
    JdbPlgButtonComponent,
    JdbPlgDialogComponent,
    JdbPlgNewDialogComponent,
    JdbPlgSelectComponent,
    JdbPlgInputComponent,
    JdbPlgTimelineItemComponent,
    JdbPlgAutocompleteComponent,
    JdbTabComponent,
    JdbPlgTableErrorComponent,
    ProvinceReformPipe,
    AmountReformPipe,
    JdbPlgSwitchComponent
];
var JdbPlgUiModule = /** @class */ (function () {
    function JdbPlgUiModule() {
    }
    JdbPlgUiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    exports: MDL_MODULES,
                    declarations: [
                        JdbPlgToastComponent,
                        JdbTabComponent,
                        ShowPictureComponent,
                        PictureViewerComponent,
                        DragDirective,
                        JdbPlgPaginationComponent,
                        OnlyNumberDirective,
                        WatermarkDirective,
                        JdbPlgSelectComponent,
                        JdbPlgButtonComponent,
                        JdbPlgDialogComponent,
                        JdbPlgNewDialogComponent,
                        JdbPlgInputComponent,
                        JdbPlgTimelineItemComponent,
                        JdbPlgAutocompleteComponent,
                        JdbPlgTableErrorComponent,
                        ProvinceReformPipe,
                        AmountReformPipe,
                        JdbPlgSwitchComponent,
                    ],
                    providers: [JdbPlgBaseService, CommonMethodService, FillTableService, SendStatisticService, JdbModalService],
                    entryComponents: [JdbPlgToastComponent, JdbPlgNewDialogComponent, JdbPlgDialogComponent],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA
                    ]
                },] },
    ];
    return JdbPlgUiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { JdbPlgUiModule, JdbPlgBaseService, FillTableService, CommonMethodService, SendStatisticService, JdbModalService, jQueryLikeParamSerializer, JdbPlgAutocompleteComponent as ɵl, JdbPlgButtonComponent as ɵf, JdbPlgDialogComponent as ɵg, JdbPlgInputComponent as ɵj, JdbPlgNewDialogComponent as ɵh, JdbPlgPaginationComponent as ɵe, JdbPlgSelectComponent as ɵi, JdbPlgSwitchComponent as ɵq, JdbTabComponent as ɵm, JdbPlgTableErrorComponent as ɵn, JdbPlgTimelineItemComponent as ɵk, JdbPlgToastComponent as ɵr, PictureViewerComponent as ɵb, ShowPictureComponent as ɵa, DragDirective as ɵc, OnlyNumberDirective as ɵs, WatermarkDirective as ɵd, AmountReformPipe as ɵp, ProvinceReformPipe as ɵo };
//# sourceMappingURL=jdb-plg-ui.js.map
