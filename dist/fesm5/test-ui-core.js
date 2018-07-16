import { Component, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver, Injector, Output, EventEmitter, ElementRef, Renderer, animate, style, transition, trigger, state, HostListener, Directive, Renderer2, TemplateRef, forwardRef, ContentChild, ViewEncapsulation, Injectable, Pipe, NgModule } from '@angular/core';
import { __assign } from 'tslib';
import { trigger as trigger$1, state as state$1, style as style$1, animate as animate$1, transition as transition$1 } from '@angular/animations';
import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                    template: "<div class=\"toast-wraper\">\n  {{msg}}\n</div>\n",
                    styles: [".toast-wraper{position:fixed;border-radius:5px;min-width:160px;max-width:190px;padding:30px 10px;text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:10001;background:rgba(0,0,0,.7);color:#fff;word-break:break-all}"]
                },] },
    ];
    /** @nocollapse */
    JdbPlgToastComponent.ctorParameters = function () { return []; };
    JdbPlgToastComponent.propDecorators = {
        "msg": [{ type: Input },],
    };
    return JdbPlgToastComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
     */
    /**
     *
     * @param {?} ChildComponent
     * @param {?} attrs
     * @param {?} title
     * @param {?=} comId
     * @param {?=} isCloseFlag
     * @return {?}
     */
    JdbTabComponent.prototype.addItem = /**
     *
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
            isCloseFlag: isCloseFlag
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
                    template: "<div class=\"tab-wraper\">\n    <div class=\"tab-nav-wraper\">\n        <div class=\"tab-item\" *ngFor=\"let item of items;let i = index;\" [ngClass]=\"{'tab-selected':i == curTabIndex}\" title='{{item.title}}'>\n            <div (click)=\"tabChange(i)\" class=\"tab-text\"> {{item.title}}</div>\n            <span class=\"close-btn\" (click)=\"removeTab(i)\" *ngIf=\"i !== 0 && item.isCloseFlag != true\">&times;</span>\n        </div>\n    </div>\n    <div class=\"tab-content-wraper\">\n        <div #tabContent class=\"place-holder\"></div>\n    </div>\n</div>\n",
                    styles: [".tab-wraper{display:flex;flex-direction:column}.tab-nav-wraper{display:flex}.tab-nav-wraper .tab-item{width:120px;font-size:13px;display:flex;justify-content:center;background:#f0f1f5;border:1px solid #afb0b3;border-bottom:none;margin-right:5px;height:30px;border-radius:2px 2px 0 0;text-align:center;position:relative;cursor:pointer}.tab-nav-wraper .tab-item .tab-text{color:#7d7e80;white-space:nowrap;overflow:hidden;vertical-align:middle;text-overflow:ellipsis;padding:5px 20px 0}.tab-nav-wraper .tab-item.tab-selected{background:#fff;border:none;border-top:3px solid #3f69f2}.tab-nav-wraper .tab-item.tab-selected .tab-text{color:#3f69f2;padding-top:3px}.tab-nav-wraper .tab-item .close-btn{position:absolute;top:0;right:8px;font-size:24px;cursor:pointer;color:#999;font-weight:100}.tab-content-wraper{box-shadow:1px 1px 1px 1px #afb0b3;background:#fff}.tab-content-wraper .place-holder{width:0;height:0}"]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                    template: "<div>\n    <div class=\"img-mask\" (click)=\"closeModel()\">\n        <!-- \u906E\u7F69\u5C42 -->\n    </div>\n    <div class=\"img-content\">\n          <span class=\"close\" (click)=\"closeModel()\">\n            <img src=\"/assets/images/close-x.png\" alt=\"\">\n          </span>\n          <img [src]=\"pictureUrl\" alt=\"\" style=\"max-height: 600px;max-width: 800px;\">\n    </div>\n</div>\n",
                    styles: ["@charset \"UTF-8\";.img-mask{width:100%;height:100%;background:#000;position:fixed;top:0;left:0;-moz-opacity:.3;opacity:.8;z-index:9998;display:block}.img-content{background-color:#d7d8db;position:fixed;width:800px;height:600px;margin-left:-400px;left:50%;margin-top:-300px;top:50%;line-height:600px;border:1px solid #e1e2e6;z-index:9999;text-align:center;box-sizing:border-box;font-size:0;border:none}.img-content .close{position:absolute;width:22px;height:22px;border-radius:11px;background-color:#e7e8e9;top:8px;right:8px;z-index:9999;text-align:center;line-height:8px}.img-content img{vertical-align:middle}"]
                },] },
    ];
    /** @nocollapse */
    ShowPictureComponent.ctorParameters = function () { return []; };
    ShowPictureComponent.propDecorators = {
        "pictureUrl": [{ type: Input },],
        "update": [{ type: Output },],
    };
    return ShowPictureComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ imgContent = this.imgContent.nativeElement;
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
        var /** @type {?} */ image = new Image();
        image.onload = function () {
            // 获取当前加载图片宽高
            var /** @type {?} */ w = image.width;
            var /** @type {?} */ h = image.height;
            var /** @type {?} */ hRatio;
            var /** @type {?} */ wRatio;
            // 设置默认比例以及容器宽高
            var /** @type {?} */ imgRate = w / h; // 图片宽高比
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
        var /** @type {?} */ rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
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
        var /** @type {?} */ rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
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
        var /** @type {?} */ rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
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
        var /** @type {?} */ rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
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
        var /** @type {?} */ rate = 'scale(1,1) rotate(0deg)';
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
                    template: "<div class=\"picture-viewer\">\n    <div class=\"img-mask\" *ngIf=\"_jdbMaster\" (click)=\"closeModel()\">\n        <!-- \u906E\u7F69\u5C42 -->\n    </div>\n    <div #imgContent [ngClass]=\"{'img-content-componet':jdbShowType==2}\" class=\"img-content\">\n        <!-- \u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE -->\n        <div class=\"close\" *ngIf=\"_jdbClear\" (click)=\"closeModel()\">\n            <span class=\"icon-close\"></span>\n        </div>\n\n        <!-- \u56FE\u7247box -->\n        <ul class=\"img-box\" #img>\n            <!-- <li *ngFor=\"let item of pictureList;let i=index\" [@imgMove]=\"ImgState(i)\">\n                <img appDragDirective \u00A0[src]=\"item.imgUrl\" alt=\"\" style=\"max-height: 600px;max-width: 800px;\">\n            </li> -->\n        </ul>\n        <!-- \u4E0A\u4E00\u9875\u4E0B\u4E00\u9875 -->\n        <div [hidden]=\"current==0\" class=\"prev-page\" (click)=\"Prev()\">\n            <span class=\"icon-pagination-prev\"></span>\n        </div>\n        <div [hidden]=\"current==pictureList.length-1\" class=\"next-page\" (click)=\"Next()\">\n            <span class=\"icon-pagination-next\"></span>\n        </div>\n\n        <!-- \u53F3\u4E0B\u89D2\u9875\u7801 -->\n        <div class=\"img-index\">{{current+1}}/{{pictureList.length}}</div>\n        <!-- \u7F29\u653E\u65CB\u8F6C\u6309\u94AE\u7EC4 -->\n        <div class=\"btn-box\">\n            <span [ngClass]=\"{'hover-disabled':imgOperate.num===4}\" class=\"icon-picture-zoom-in scale-big\" (click)=\"scaleBig()\"></span>\n            <span [ngClass]=\"{'hover-disabled':imgOperate.num==0.5}\" class=\"icon-picture-zoom-out  scale-small\" (click)=\"scaleSmall()\"></span>\n            <span class=\"icon-picture-counterclockwise routate-ni\" (click)=\"routateNi()\"></span>\n            <span class=\"icon-picture-clockwise routate-shun\" (click)=\"routateShun()\"></span>\n        </div>\n    </div>\n</div>",
                    styles: ["@charset \"UTF-8\";.picture-viewer .img-mask{width:100%;height:100%;background:#000;position:fixed;top:0;left:0;-moz-opacity:.3;opacity:.8;z-index:9998;display:block}.picture-viewer .img-content{background-color:#d7d8db;position:fixed;left:50%;top:50%;border:1px solid #ccc;z-index:9999;text-align:center;box-sizing:border-box;border:none}.picture-viewer .img-content .close{position:absolute;width:22px;height:22px;border-radius:11px;border:1px solid #fff;background-color:rgba(255,255,255,.7);top:8px;right:8px;z-index:9999;text-align:center;line-height:8px}.picture-viewer .img-content .close .icon-close{display:block;margin-top:1px;margin-left:1px;font-size:18px}.picture-viewer .img-content .img-box{position:absolute;left:0;width:100%;height:100%;overflow:hidden}.picture-viewer .img-content .img-box li{background-color:#d7d8db;position:absolute;z-index:11;height:100%;width:100%;transition:.1s}.picture-viewer .img-content .img-box li img{position:absolute;display:block;margin:auto;transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s}.picture-viewer .img-content a{position:absolute;top:50%;margin-top:-30px;width:60px;height:60px;z-index:400;background:url(/assets/images/CXicon.png) 0 0/192px 144px no-repeat}.picture-viewer .img-content .next{right:20px;background-position:-54px -78px}.picture-viewer .img-content .prev{left:20px;background-position:-54px -6px}.picture-viewer .img-content .next:hover{background-position:-126px -78px}.picture-viewer .img-content .prev:hover{background-position:-126px -6px}.picture-viewer .img-content .next-page,.picture-viewer .img-content .prev-page{position:absolute;top:50%;margin-top:-30px;width:60px;height:60px;z-index:400;border-radius:50%;background-color:rgba(0,0,0,.2)}.picture-viewer .img-content .next-page span,.picture-viewer .img-content .prev-page span{display:block;margin-top:6px;color:rgba(255,255,255,.4);font-size:48px}.picture-viewer .img-content .prev-page{left:20px}.picture-viewer .img-content .next-page{right:20px}.picture-viewer .img-content .next-page:hover,.picture-viewer .img-content .prev-page:hover{background-color:rgba(0,0,0,.7)}.picture-viewer .img-content .next-page:hover span,.picture-viewer .img-content .prev-page:hover span{color:#fff}.picture-viewer .img-content .img-index{position:absolute;bottom:15px;right:22px;z-index:101;color:#323233;font-size:16px;height:22px;line-height:22px;width:42px;text-align:center;border-radius:2px;background:rgba(215,216,219,.7)}.picture-viewer .img-content .btn-box{position:absolute;z-index:109;bottom:12px;left:50%;margin-left:-73px;padding:3px 5px;height:30px;width:147px;background:rgba(0,0,0,.5);border-radius:2px;color:rgba(255,255,255,.4)}.picture-viewer .img-content .btn-box span{float:left;margin:0 5px}.picture-viewer .img-content .btn-box .routate-ni:hover,.picture-viewer .img-content .btn-box .routate-shun:hover,.picture-viewer .img-content .btn-box .scale-big:hover,.picture-viewer .img-content .btn-box .scale-small:hover{color:#fff}.picture-viewer .img-content .btn-box .hover-disabled:hover{color:rgba(255,255,255,.4)}.picture-viewer .img-content-componet{position:relative;top:0;left:0;margin:0}"],
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
        { type: Renderer, },
    ]; };
    PictureViewerComponent.propDecorators = {
        "pictureList": [{ type: Input },],
        "update": [{ type: Output },],
        "imgBox": [{ type: ViewChild, args: ['img',] },],
        "imgContent": [{ type: ViewChild, args: ['imgContent',] },],
        "maxWidth": [{ type: Input },],
        "maxHeight": [{ type: Input },],
        "jdbShowType": [{ type: Input },],
        "jdbMaster": [{ type: Input },],
        "jdbClear": [{ type: Input },],
        "jdbCurrent": [{ type: Input },],
    };
    return PictureViewerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DragDirective = /** @class */ (function () {
    function DragDirective(elem, render) {
        //
        this.elem = elem;
        this.render = render;
        this.isDown = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DragDirective.prototype.onMousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ wRate = localStorage.getItem('dragWidth');
        var /** @type {?} */ hRate = localStorage.getItem('dragHeight');
        this.isDown = true;
        this.disLeft = this.elem.nativeElement.offsetLeft;
        this.disTop = this.elem.nativeElement.offsetTop;
        this.disX = event.clientX;
        this.disY = event.clientY;
        event.target.style.cursor = 'move';
        // event.preventDefault();
    };
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
            var /** @type {?} */ newdisX = event.clientX - this.disX;
            var /** @type {?} */ newdisY = event.clientY - this.disY;
            this.elem.nativeElement.style.left = newdisX + this.disLeft + 'px';
            this.elem.nativeElement.style.top = newdisY + this.disTop + 'px';
        }
        return false;
    };
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
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    DragDirective.propDecorators = {
        "onMousedown": [{ type: HostListener, args: ['mousedown', ['$event'],] },],
        "onMousemove": [{ type: HostListener, args: ['mousemove', ['$event'],] },],
        "onMouseup": [{ type: HostListener, args: ['mouseup', ['$event'],] },],
        "onMouseleave": [{ type: HostListener, args: ['mouseleave', ['$event'],] },],
    };
    return DragDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                var /** @type {?} */ optionsArr_1 = [];
                value.forEach(function (elem) {
                    var /** @type {?} */ obj = {
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
        // 如果当前页码大于尾页，则等于尾页
        // if (this._current > this._lastIndex) {
        //   this.jdbPageIndex = this._lastIndex;
        //   this.jdbPageIndexChange.emit(this.jdbPageIndex);
        // }
        var /** @type {?} */ tmpPages = [];
        if (this._lastIndex <= 9) {
            // 若总页数不超过9，则全部展示在页面上
            for (var /** @type {?} */ i = 2; i <= this._lastIndex - 1; i++) {
                tmpPages.push({
                    index: i
                });
            }
        }
        else {
            var /** @type {?} */ current = +this._current;
            var /** @type {?} */ left = Math.max(2, current - 2);
            var /** @type {?} */ right = Math.min(current + 2, this._lastIndex - 1);
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
            for (var /** @type {?} */ i = left; i <= right; i++) {
                tmpPages.push({ index: i });
            }
        }
        this.pages = tmpPages;
    };
    // status为true表示页码切换，num表示页码，false表示条数切换，num表示条数
    /**
     * @param {?} status
     * @param {?} num
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.dataChange = /**
     * @param {?} status
     * @param {?} num
     * @return {?}
     */
    function (status, num) {
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
     * @param {?} pageSize
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.jumpBefore = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.dataChange(true, this._current - Math.round(pageSize / 2));
    };
    // 点击右箭头
    /**
     * @param {?} pageSize
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.jumpAfter = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.dataChange(true, this._current + Math.round(pageSize / 2));
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
        var /** @type {?} */ reg = /^[0-9]*$/;
        return reg.test(obj);
    };
    JdbPlgPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-pagination',
                    template: "<div class=\"jdb-plg-pagination\">\n    <!-- \u603B\u6761\u6570 -->\n    <span *ngIf=\"_showTotal\" class=\"total-box\">\n      \u5171{{_total}}\u6761\n    </span>\n\n    <div class=\"operate-box\">\n        <!-- \u6761\u6570\u5207\u6362 -->\n        <div class=\"jdb-plg-pagination-options\" *ngIf=\"_showPageSize\">\n            <app-jdb-plg-select (ngModelChange)=\"dataChange(false,$event)\" [jdbSize]=\"'small'\" [jdbWidth]=\"'90px'\" [(ngModel)]=\"_pageSize\" [jdbSelectList]=\"_options\"></app-jdb-plg-select>\n        </div>\n        <!-- \u57FA\u672C\u5206\u9875\u6837\u5F0F -->\n        <ul *ngIf=\"!_jdbSimple\" class=\"base-pagination\">\n            <!-- \u4E0A\u4E00\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-prev\" title=\"\u4E0A\u4E00\u9875\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_current-1)\">\n                <span class=\"jdbIcon icon-pagination-prev\"></span>\n            </li>\n            <!-- \u9996\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-first\" title=\"\u9996\u9875\" [ngClass]=\"{'active':_current===_firstIndex}\" (click)=\"dataChange(true,_firstIndex)\">\n                {{_firstIndex}}\n            </li>\n            <!-- \u7701\u7565\u53F7 -->\n            <li class=\"jdb-plg-pagination-forward\" *ngIf=\"(_lastIndex >9)&&(_current-4>_firstIndex)\" (click)=\"jumpBefore(_pageSize)\">\n                <span class=\"icon-pagination-more\"></span>\n                <span class=\"icon-pagination-jump-prev\"></span>\n            </li>\n            <!-- \u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-pager\" *ngFor=\"let page of pages\" [ngClass]=\"{'active':_current===page.index}\" (click)=\"dataChange(true,page.index)\">\n                {{page.index}}\n            </li>\n            <!-- \u7701\u7565\u53F7 -->\n            <li class=\"jdb-plg-pagination-backward\" *ngIf=\"(_lastIndex >9)&&(_current+4<_lastIndex)\" (click)=\"jumpAfter(_pageSize)\">\n                <span class=\"icon-pagination-more\"></span>\n                <span class=\"icon-pagination-jump-next\"></span>\n            </li>\n            <!-- \u5C3E\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-last\" *ngIf=\"(_lastIndex>0)&&(_lastIndex!==_firstIndex)\" title=\"\u5C3E\u9875\" [ngClass]=\"{'active':_current===_lastIndex}\" (click)=\"dataChange(true,_lastIndex)\">\n                {{_lastIndex}}\n            </li>\n            <!-- \u4E0B\u4E00\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-next\" title=\"\u4E0B\u4E00\u9875\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_current+1)\">\n                <span class=\"jdbIcon icon-pagination-next\"></span>\n            </li>\n        </ul>\n        <!-- \u7B80\u5355\u5206\u9875\u6837\u5F0F -->\n        <div class=\"simple-pagination\" *ngIf=\"_jdbSimple\">\n            <div class=\"left-box\">\n                <span class=\"icon-pagination-first\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_firstIndex)\"></span>\n                <span class=\"icon-pagination-prev\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_current-1)\"></span>\n            </div>\n            <div class=\"center-box\">\n                {{_current}} / {{_lastIndex}}\n            </div>\n            <div class=\"right-box\">\n                <span class=\"icon-pagination-next\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_current+1)\"></span>\n                <span class=\"icon-pagination-last\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_lastIndex)\"></span>\n            </div>\n        </div>\n        <!-- \u5FEB\u901F\u8DF3\u8F6C -->\n        <div *ngIf=\"_showQuickJump\" class=\"quick-jumper\">\n            \u7B2C\n            <input #inputJump type=\"text\" [(ngModel)]=\"quickJumpPage\" (keyup.enter)=\"quickJump()\" appOnlyNumber=\"true\"> \u9875\n            <button (click)=\"quickJump()\">\u8DF3\u8F6C</button>\n        </div>\n    </div>\n</div>",
                    styles: [".jdb-plg-pagination{height:24px;display:inline-block}.jdb-plg-pagination .total-box{float:left;margin-right:30px;height:24px;line-height:24px;font-size:12px;color:#323233}.jdb-plg-pagination .operate-box{float:right}.jdb-plg-pagination .operate-box .jdb-plg-pagination-options{float:left;margin-right:30px}.jdb-plg-pagination .operate-box .base-pagination{float:left;overflow:hidden}.jdb-plg-pagination .operate-box .base-pagination li{position:relative;float:left;margin-right:5px;padding:0 5px;height:24px;min-width:24px;line-height:24px;text-align:center;border-radius:2px;color:#323233;border:1px solid #afb0b3;cursor:pointer;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;background:#fff}.jdb-plg-pagination .operate-box .base-pagination .disabled{background:#f0f1f5;color:#bfc0c4;border:1px solid #e1e2e6}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward{border:none;padding:0;background:0 0}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward .icon-pagination-jump-next,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward .icon-pagination-jump-prev,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward .icon-pagination-jump-next,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward .icon-pagination-jump-prev{color:#3f69f2;display:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward:hover .icon-pagination-jump-prev{display:block}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward:hover .icon-pagination-more{display:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward:hover .icon-pagination-jump-next{display:block}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward:hover .icon-pagination-more{display:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-first:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-last:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-next:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-pager:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-prev:hover{color:#4d76ff;border:1px solid #4d76ff}.jdb-plg-pagination .operate-box .base-pagination .active,.jdb-plg-pagination .operate-box .base-pagination .active:hover{background:#4d76ff;color:#fff;border:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-next,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-prev{padding:0}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-next .jdbIcon,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-prev .jdbIcon{font-size:22px}.jdb-plg-pagination .operate-box .simple-pagination{float:left;overflow:hidden}.jdb-plg-pagination .operate-box .simple-pagination .center-box,.jdb-plg-pagination .operate-box .simple-pagination .left-box,.jdb-plg-pagination .operate-box .simple-pagination .right-box{overflow:hidden;float:left}.jdb-plg-pagination .operate-box .simple-pagination .center-box span,.jdb-plg-pagination .operate-box .simple-pagination .left-box span,.jdb-plg-pagination .operate-box .simple-pagination .right-box span{float:left;line-height:24px;text-align:center;height:24px;width:24px}.jdb-plg-pagination .operate-box .simple-pagination .center-box span:first-child,.jdb-plg-pagination .operate-box .simple-pagination .left-box span:first-child,.jdb-plg-pagination .operate-box .simple-pagination .right-box span:first-child{margin-right:1px}.jdb-plg-pagination .operate-box .simple-pagination .center-box .disabled,.jdb-plg-pagination .operate-box .simple-pagination .left-box .disabled,.jdb-plg-pagination .operate-box .simple-pagination .right-box .disabled{color:#d7d8db}.jdb-plg-pagination .operate-box .simple-pagination .center-box span:hover,.jdb-plg-pagination .operate-box .simple-pagination .left-box span:hover,.jdb-plg-pagination .operate-box .simple-pagination .right-box span:hover{color:#4d76ff}.jdb-plg-pagination .operate-box .simple-pagination .center-box{width:50px;height:24px;line-height:24px;text-align:center}.jdb-plg-pagination .operate-box .quick-jumper{float:left;margin-left:20px}.jdb-plg-pagination .operate-box .quick-jumper button,.jdb-plg-pagination .operate-box .quick-jumper input{text-align:center;width:40px;height:24px;border-radius:3px;border:1px solid #e1e2e6;outline:0}.jdb-plg-pagination .operate-box .quick-jumper button{margin-left:15px;float:right}.jdb-plg-pagination .operate-box .quick-jumper input{ime-mode:disabled}"]
                },] },
    ];
    /** @nocollapse */
    JdbPlgPaginationComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    JdbPlgPaginationComponent.propDecorators = {
        "jdbPageSizeChange": [{ type: Output },],
        "jdbPageIndexChange": [{ type: Output },],
        "inputJump": [{ type: ViewChild, args: ['inputJump',] },],
        "jdbShowTotal": [{ type: Input },],
        "jdbTotal": [{ type: Input },],
        "jdbPageIndex": [{ type: Input },],
        "jdbShowPageSize": [{ type: Input },],
        "jdbPageSize": [{ type: Input },],
        "jdbSizeOptions": [{ type: Input },],
        "jdbShowQuickJump": [{ type: Input },],
        "jdbSimple": [{ type: Input },],
    };
    return JdbPlgPaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                    selector: '[app-jdb-plg-button]',
                    template: "<i class=\"jdb-icon-loading action\" *ngIf=\"loading\"></i>\n<ng-content></ng-content>",
                    styles: ["@-webkit-keyframes loadingCircle{0%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loadingCircle{0%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host.jdb-plg-btn{font-weight:500;white-space:nowrap;cursor:pointer;outline:0}:host.jdb-plg-btn .action{display:inline-block;vertical-align:middle}:host.jdb-plg-btn .action:before{display:inline-block;-webkit-animation:1s linear infinite loadingCircle;animation:1s linear infinite loadingCircle}:host.jdb-plg-btn .action2{display:inline-block;-webkit-transform:translateY(-37%);transform:translateY(-37%)}:host.large{min-width:120px;line-height:40px;border-radius:4px;padding:0 16px}:host.default{min-width:100px;line-height:30px;border-radius:3px;padding:0 12px}:host.small{min-width:60px;line-height:24px;border-radius:2px;padding:0 10px}:host.small .action{width:24px;height:24px}:host.primary{background-color:#3f69f2;color:#fff;border:1px solid #3f69f2}:host.primary:hover{background-color:#4d76ff;border:1px solid #4d76ff}:host.primary:active{background-color:#264199;border:1px solid #264199}:host.primary:disabled{background-color:#aabbf2;border:1px solid #aabbf2}:host.gray{background-color:#f0f1f5;color:#575757;border:1px solid #d7d8db}:host.gray:hover{background-color:#fff}:host.gray:active{background-color:#d7d8db}:host.gray:disabled{background-color:#f0f1f5}:host.danger{background-color:#f84a4a;color:#fff;border:1px solid #f84a4a}:host.danger:hover{background-color:#f66;border:1px solid #f66}:host.danger:active{background-color:#c32929;border:1px solid #c32929}:host.danger:disabled{background-color:#e6bcbc;border:1px solid #e6bcbc}:host.buleline{background-color:#fff;color:#3f69f2;border:1px solid #3f69f2}:host.buleline:hover{background-color:#ebf0fe}:host.buleline:active{background-color:#d7d8db}:host.buleline:disabled{color:#afb0b3;border:1px solid #afb0b3;background-color:#f0f1f5}:host.white{background-color:#fff;color:#575757;border:1px solid #afb0b3}:host.white:hover{background-color:#f0f1f5}:host.white:active{background-color:#d7d8db}:host.white:disabled{color:#afb0b3;border:1px solid #afb0b3;background-color:#f0f1f5}:host.loading_disable{background-color:#aabbf2;border:1px solid #aabbf2;pointer-events:none}"]
                },] },
    ];
    /** @nocollapse */
    JdbPlgButtonComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    JdbPlgButtonComponent.propDecorators = {
        "jdbSize": [{ type: Input },],
        "jdbType": [{ type: Input },],
        "jdbLoading": [{ type: Input },],
    };
    return JdbPlgButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                        trigger$1('optionsState', [
                            state$1('showM', style$1({
                                transform: 'translate(-50%, -50%)',
                                opacity: '1',
                            })),
                            state$1('hideM', style$1({
                                transform: 'translate(-50%, -80%)',
                                opacity: '0',
                            })),
                            transition$1('showM <=> hideM', animate$1('200ms ease-out'))
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ e = /** @type {?} */ (event);
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
            var /** @type {?} */ ch = String.fromCharCode(e.keyCode);
            var /** @type {?} */ regEx = new RegExp(this.regexStr);
            if (regEx.test(ch)) {
                return;
            }
            else {
                e.preventDefault();
            }
        }
    };
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
        { type: ElementRef, },
    ]; };
    OnlyNumberDirective.propDecorators = {
        "appOnlyNumber": [{ type: Input },],
        "onKeyDown": [{ type: HostListener, args: ['keydown', ['$event'],] },],
        "onKeyUp": [{ type: HostListener, args: ['keyup', ['$event'],] },],
    };
    return OnlyNumberDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbSureDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbSureDisabled;
        },
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
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._selectList = value;
            // 循环数组，判断是否需要展示带有图片下拉框
            if (this._selectList) {
                this._selectList.forEach(function (element) {
                    if (element.imgUrl) {
                        _this._showImgBox = true;
                    }
                });
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
    function () {
    };
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
        if (this._jdbClear && !this._jdbDisabled) {
            // 监听输入框元素，若有内容时则滑上显示x
            this.renderer2.listen(this.inputDom.nativeElement, 'mouseenter', function () {
                // 若输入框不存在内容，则不做任何操作
                if (_this._jdbMode === 'chooseOne' || _this._jdbMode === 'chooseNum') {
                    if (!_this.inputText || _this.show) {
                        return;
                    }
                }
                else if (_this._jdbMode === 'chooseMore') {
                    if (_this.inputText.length === 0 || _this.show) {
                        return;
                    }
                }
                _this.isShowClear = true;
                _this.renderer.setElementClass(_this.inputDom.nativeElement, 'jdb-plg-select-active', _this.show);
            });
            this.renderer2.listen(this.inputDom.nativeElement, 'mouseleave', function () {
                // 若输入框不存在内容，则不做任何操作
                if (_this._jdbMode === 'chooseOne' || _this._jdbMode === 'chooseNum') {
                    if (!_this.inputText || _this.show) {
                        return;
                    }
                }
                else if (_this._jdbMode === 'chooseMore') {
                    if (_this.inputText.length === 0 || _this.show) {
                        return;
                    }
                }
                _this.isShowClear = false;
                _this.renderer.setElementClass(_this.inputDom.nativeElement, 'jdb-plg-select-active', _this.show);
            });
        }
    };
    /**
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this._jdbMode === 'chooseOne') {
            this.inputText = '';
        }
        else if (this._jdbMode === 'chooseMore') {
            this.inputText = [];
        }
        else if (this._jdbMode === 'chooseNum') {
            this.inputText = 0;
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
        var _a, _b;
        if (this._jdbMode === 'chooseMore') {
            this._classMap = (_a = {},
                _a["" + this._size] = true,
                _a["jdb-plg-select-bottom-" + this._size] = this.inputText.length !== 0,
                _a['jdb-plg-select-disabled'] = this._jdbDisabled,
                _a[this.jdbClassName] = true,
                _a);
        }
        else {
            this._classMap = (_b = {},
                _b["" + this._size] = true,
                _b['jdb-plg-select-disabled'] = this._jdbDisabled,
                _b[this.jdbClassName] = true,
                _b);
        }
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
        var /** @type {?} */ offetTop = this.getTop(this.inputDom.nativeElement); // 元素offetTop
        var /** @type {?} */ scrollTop = this.getScrollTop(this.inputDom.nativeElement.parentElement);
        var /** @type {?} */ clientHeight = document.documentElement.clientHeight || document.body.clientHeight; // 屏幕高度
        var /** @type {?} */ elemHeight = this.inputDom.nativeElement.clientHeight; // 元素高度
        var /** @type {?} */ paddingHeight;
        if (this.jdbSize === 'small') {
            paddingHeight = 2;
        }
        else if (this.jdbSize === 'large') {
            paddingHeight = 9;
        }
        else if (this.jdbSize === 'middle') {
            paddingHeight = 5;
        }
        var /** @type {?} */ flexHeight = clientHeight - offetTop - elemHeight - paddingHeight + scrollTop; // 剩余高度
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
        // 若有初始项，则需要处理一下
        // if (this._jdbMode === 'chooseOne') {
        //   this.forOneStart(value);
        // } else if (this._jdbMode === 'chooseMore') {
        //   this.forMoreStart(value);
        //   this.setClassMap();
        // } else if (this._jdbMode === 'chooseNum') {
        //   this.forNumStart(value);
        // }
        if (value === null || value === '' || value === undefined) {
            // 若传入值为null，则清空数据
            if (this._jdbMode === 'chooseMore') {
                this.inputText = [];
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
    function (fn) {
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
    };
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
        value = value.split(',');
        value.forEach(function (item) {
            _this._selectList.forEach(function (elem) {
                if (elem[_this._optionValue] === item) {
                    // inputText为输入框中展示的内容
                    var /** @type {?} */ text = _this._optionText;
                    var /** @type {?} */ value_1 = _this._optionValue;
                    _this.inputText.push({
                        text: elem[_this._optionText],
                        value: elem[_this._optionValue]
                    });
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
        value = value.split(',');
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
        var /** @type {?} */ flag = false;
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
        // inputText为输入框中展示的内容
        var /** @type {?} */ text = this._optionText;
        var /** @type {?} */ value = this._optionValue;
        this.inputText.push({
            text: item[this._optionText],
            value: item[this._optionValue]
        });
        // this._chooseMoreArray为传出去的数据
        this._chooseMoreArray.push(item[this._optionValue]);
        this.ngModelValue = this._chooseMoreArray.toString();
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
        var /** @type {?} */ flag = false;
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
        this.ngModelValue = this._chooseMoreArray.toString();
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
        var /** @type {?} */ flag = false;
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
        this.ngModelValue = this._chooseMoreArray.toString();
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
        var /** @type {?} */ offset = e.offsetTop;
        if (e.offsetParent != null) {
            //解析translateY
            if (e.style.transform) {
                var /** @type {?} */ ret = this.parseTranslateY(e.style.transform);
                offset += ret.isPercent ? e.clientHeight * ret.translateY / 100 : ret.translateY;
            }
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
        var /** @type {?} */ offset = e.scrollTop;
        if (e.parentElement != null) {
            offset += this.getScrollTop(e.parentElement);
        }
        return offset;
    };
    //正则解析translateY
    /**
     * @param {?} val
     * @return {?}
     */
    JdbPlgSelectComponent.prototype.parseTranslateY = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var /** @type {?} */ reg = /\(([^()]+)\)/g;
        var /** @type {?} */ translate = reg.exec(val)[1];
        var /** @type {?} */ translatArr = translate.split(',');
        var /** @type {?} */ translateY;
        var /** @type {?} */ isPercent;
        //如果不包含translate
        if (val.indexOf('translate') === -1) {
            return {
                isPercent: false,
                translateY: 0
            };
        }
        //判断是translate还是translateY
        if (translatArr.length === 2) {
            translateY = translate.split(',')[1];
        }
        else if (translatArr.length === 1 && val.indexOf('translateY') !== -1) {
            translateY = translate;
        }
        //判断是百分比还是px
        if (translateY.indexOf('px') !== -1) {
            //截取px
            isPercent = false;
            translateY = Number(translateY.slice(0, -2));
        }
        else if (translateY.indexOf('%') !== -1) {
            isPercent = true;
            translateY = Number(translateY.slice(0, -1));
        }
        //返回百分比或普通number值
        return {
            isPercent: isPercent,
            translateY: translateY
        };
    };
    JdbPlgSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-select',
                    template: "<!-- \u5355\u9009 -->\n<div *ngIf=\"_jdbMode=='chooseOne'\" #inputDom class=\"jdb-plg-select-one\" (click)=\"dialogShow($event)\" [ngClass]=\"_classMap\" [ngStyle]=\"{'width':_width}\">\n    <!-- placeHolder -->\n    <div class=\"jdb-plg-select-placeholder\" [hidden]=\"inputText!=''\">{{_placeHolder}}</div>\n    <!-- \u5355\u9009 -->\n    <!-- <span class=\"chooseOne\" [hidden]=\"inputText==''\">{{inputText}}</span> -->\n    <input class=\"chooseOne chooseOneInput\" [hidden]=\"inputText==''\" type=\"text\" [(ngModel)]=\"inputText\" readonly>\n    <ul #optionList [ngClass]=\"{ 'options-show':show, 'options-no-margin':!spaceFlex} \" class=\"options \">\n        <!-- \u5355\u9009 -->\n        <li *ngFor=\"let option of _selectList \" (click)=\"item($event,option) \" [ngClass]=\"{active:ngModelValue===option[_optionValue],disabled:option[_jdbItemDisabled] === _jdbSureDisabled} \">\n            <img class=\"img-box\" *ngIf=\"_showImgBox&&option.imgUrl\" [src]=\"option.imgUrl\" alt=\"\">\n            <span class=\"img-box\" *ngIf=\"_showImgBox&&!option.imgUrl\"></span>\n            <span class=\"text-box\">{{_optionText=='option'?option:option[_optionText]}}</span>\n        </li>\n    </ul>\n    <!-- \u6E05\u7A7A\u56FE\u6807 -->\n    <span class=\"close-icon icon-empty \" [hidden]=\"!isShowClear \" (click)=\"clearInputText($event) \"></span>\n    <!-- \u5355\u9009\u65F6\u4E0B\u62C9\u56FE\u6807 -->\n    <span class=\"select-icon icon-select-arrow \" [hidden]=\"isShowClear \"></span>\n</div>\n\n<!-- \u591A\u9009 -->\n<div *ngIf=\"_jdbMode=='chooseMore' \" #inputDom class=\"jdb-plg-select-more \" (click)=\"dialogShow($event) \" [ngClass]=\"_classMap \" [ngStyle]=\"{ 'width':_width} \">\n    <!-- placeHolder -->\n    <div class=\"jdb-plg-select-placeholder \" [hidden]=\"inputText.length !=0 \">{{_placeHolder}}</div>\n    <!-- \u591A\u9009item -->\n    <ul class=\"chooseMore \">\n        <li *ngFor=\"let item of inputText \">\n            {{item.text}}\n            <span class=\"item-delete icon-close \" (click)=\"deleteMoreItem($event,item) \"></span>\n        </li>\n    </ul>\n    <ul #optionList [ngClass]=\"{ 'options-show':show, 'options-no-margin':!spaceFlex} \" class=\"options \">\n        <li class=\"choose-more \" *ngFor=\"let option of _selectList \" (click)=\"chooseMore($event,option) \" [ngClass]=\"{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} \">\n            <!-- {{_optionText=='option'?option:option[_optionText]}} -->\n            <img class=\"img-box\" *ngIf=\"_showImgBox&&option.imgUrl\" [src]=\"option.imgUrl\" alt=\"\">\n            <span class=\"img-box\" *ngIf=\"_showImgBox&&!option.imgUrl\"></span>\n            <span class=\"text-box\">{{_optionText=='option'?option:option[_optionText]}}</span>\n            <span [hidden]=\"!moreIndex(option) \" class=\"choose-right icon-selected \"></span>\n        </li>\n    </ul>\n    <!-- \u6E05\u7A7A\u56FE\u6807 -->\n    <span class=\"close-icon icon-empty \" [hidden]=\"!isShowClear \" (click)=\"clearInputText($event) \"></span>\n</div>\n\n<!-- \u9009\u4E2D\u51E0\u9879 -->\n<div *ngIf=\"_jdbMode=='chooseNum' \" #inputDom class=\"jdb-plg-select-num \" (click)=\"dialogShow($event) \" [ngClass]=\"_classMap \" [ngStyle]=\"{ 'width':_width} \">\n    <!-- placeHolder -->\n    <div class=\"jdb-plg-select-placeholder \" [hidden]=\"inputText!=0 \">{{_placeHolder}}</div>\n    <span class=\"choose-tip \" [hidden]=\"inputText==0 \">\u5DF2\u9009\u4E2D{{inputText}}\u9879</span>\n    <ul #optionList [ngClass]=\"{ 'options-show':show, 'options-no-margin':!spaceFlex} \" class=\"options \">\n        <li class=\"choose-more \" *ngFor=\"let option of _selectList \" (click)=\"numClick($event,option) \" [ngClass]=\"{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} \">\n            <!-- {{_optionText=='option'?option:option[_optionText]}} -->\n            <img class=\"img-box\" *ngIf=\"_showImgBox&&option.imgUrl\" [src]=\"option.imgUrl\" alt=\"\">\n            <span class=\"img-box\" *ngIf=\"_showImgBox&&!option.imgUrl\"></span>\n            <span class=\"text-box\">{{_optionText=='option'?option:option[_optionText]}}</span>\n            <span [hidden]=\"!moreIndex(option) \" class=\"choose-right icon-selected \"></span>\n        </li>\n    </ul>\n    <!-- \u6E05\u7A7A\u56FE\u6807 -->\n    <span class=\"close-icon icon-empty \" [hidden]=\"!isShowClear \" (click)=\"clearInputText($event) \"></span>\n    <span class=\"select-icon icon-select-arrow \" [hidden]=\"isShowClear \"></span>\n</div>\n\n<!-- \u906E\u7F69\u5C42 -->\n<div class=\"jdb-plg-select-master \" *ngIf=\"show \"></div>",
                    styles: [".jdb-plg-select-more,.jdb-plg-select-num,.jdb-plg-select-one{position:relative;display:inline-block;width:200px;border:1px solid #afb0b3;border-radius:2px;background:#fff;text-align:left;cursor:pointer}.jdb-plg-select-more .jdb-plg-select-placeholder,.jdb-plg-select-num .jdb-plg-select-placeholder,.jdb-plg-select-one .jdb-plg-select-placeholder{color:#afb0b3;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.jdb-plg-select-more .options,.jdb-plg-select-num .options,.jdb-plg-select-one .options{position:absolute;overflow-y:scroll;z-index:9999;opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:0 0;transform-origin:0 0;left:-1px;border:1px solid #afb0b3;width:100%;max-height:190px;background:#fff}.jdb-plg-select-more .options li,.jdb-plg-select-num .options li,.jdb-plg-select-one .options li{padding:5px 12px;min-height:30px;color:#323233}.jdb-plg-select-more .options li:hover,.jdb-plg-select-num .options li:hover,.jdb-plg-select-one .options li:hover{background-color:#f0f1f5;color:#323233}.jdb-plg-select-more .options li .choose-right,.jdb-plg-select-num .options li .choose-right,.jdb-plg-select-one .options li .choose-right{float:right;margin-top:-2px}.jdb-plg-select-more .options li .img-box,.jdb-plg-select-num .options li .img-box,.jdb-plg-select-one .options li .img-box{display:inline-block;vertical-align:middle;height:18px;width:18px}.jdb-plg-select-more .options li .text-box,.jdb-plg-select-num .options li .text-box,.jdb-plg-select-one .options li .text-box{display:inline-block;vertical-align:middle}.jdb-plg-select-more .options .choose-more,.jdb-plg-select-num .options .choose-more,.jdb-plg-select-one .options .choose-more{margin-bottom:1px}.jdb-plg-select-more .options .active,.jdb-plg-select-more .options .active:hover,.jdb-plg-select-num .options .active,.jdb-plg-select-num .options .active:hover,.jdb-plg-select-one .options .active,.jdb-plg-select-one .options .active:hover{background-color:#3f69f2;color:#fff}.jdb-plg-select-more .options .disabled,.jdb-plg-select-num .options .disabled,.jdb-plg-select-one .options .disabled{background-color:none;color:#afb0b3;cursor:not-allowed}.jdb-plg-select-more .options .disabled:hover,.jdb-plg-select-num .options .disabled:hover,.jdb-plg-select-one .options .disabled:hover{background-color:none;color:#afb0b3}.jdb-plg-select-more .options-show,.jdb-plg-select-num .options-show,.jdb-plg-select-one .options-show{opacity:1;-webkit-transform:scaleY(1);transform:scaleY(1)}.jdb-plg-select-more .close-icon,.jdb-plg-select-num .close-icon,.jdb-plg-select-one .close-icon{position:absolute;right:5px;top:50%;margin-top:-12px;color:#7d7e80}.jdb-plg-select-more .close-icon:hover,.jdb-plg-select-num .close-icon:hover,.jdb-plg-select-one .close-icon:hover{color:#323233}.jdb-plg-select-more .select-icon,.jdb-plg-select-num .select-icon,.jdb-plg-select-one .select-icon{position:absolute;right:5px;top:50%;margin-top:-12px}.jdb-plg-select-one .chooseOne{color:#333}.jdb-plg-select-one .chooseOneInput{border:none;height:100%;width:100%;padding-right:18px}.jdb-plg-select-more .chooseMore li,.jdb-plg-select-num .chooseMore li{position:relative;display:inline-block;margin-right:5px;padding:0 5px;height:22px;font-size:13px;border:1px solid #d7d8db;border-radius:2px;color:#333;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.jdb-plg-select-more .chooseMore li .item-delete,.jdb-plg-select-num .chooseMore li .item-delete{font-size:12px}.jdb-plg-select-active{border:1px solid #3f69f2}.jdb-plg-select-disabled{background:#f0f1f5}.small{min-height:24px;padding:2px 10px;font-size:12px}.small .options{margin-top:7px}.small .options-no-margin{margin:0}.middle{min-height:30px;padding:5px 10px;font-size:13px}.middle .options{margin-top:10px}.middle .options-no-margin{margin:0}.middle .choose-tip,.middle .chooseOne,.middle .jdb-plg-select-placeholder{height:18px;line-height:18px}.middle .choose-tip,.middle .chooseOne{display:block}.middle .chooseMore li{margin-bottom:3px}.large{min-height:40px;padding:9px 10px;font-size:14px}.large .options{margin-top:14px}.large .options-no-margin{margin:0}.large .choose-tip,.large .chooseOne,.large .jdb-plg-select-placeholder{height:20px;line-height:20px}.large .choose-tip,.large .chooseOne{display:block}.large .chooseMore li{margin-bottom:8px}.jdb-plg-select-bottom-middle{padding:3px 10px 0}.jdb-plg-select-bottom-large{padding:8px 10px 0}.jdb-plg-select-master{position:fixed;top:0;bottom:0;left:0;width:100%;background:0 0;z-index:9998}"],
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
        { type: Renderer2, },
        { type: Renderer, },
    ]; };
    JdbPlgSelectComponent.propDecorators = {
        "jdbClassName": [{ type: Input },],
        "jdbItemDisabled": [{ type: Input },],
        "jdbSureDisabled": [{ type: Input },],
        "jdbPlaceHolder": [{ type: Input },],
        "jdbClear": [{ type: Input },],
        "jdbSelectList": [{ type: Input },],
        "jdbSize": [{ type: Input },],
        "jdbWidth": [{ type: Input },],
        "jdbOptionText": [{ type: Input },],
        "jdbOptionValue": [{ type: Input },],
        "jdbDisabled": [{ type: Input },],
        "jdbMode": [{ type: Input },],
        "inputDom": [{ type: ViewChild, args: ['inputDom',] },],
        "optionList": [{ type: ViewChild, args: ['optionList',] },],
    };
    return JdbPlgSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    var /** @type {?} */ jsonObj = {};
    try {
        jsonObj = JSON.parse(value);
    }
    catch (/** @type {?} */ e) {
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
    var /** @type {?} */ parts = [];
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
            for (var /** @type {?} */ key in toSerialize) {
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
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ hasOwnProperty = Object.prototype.hasOwnProperty;
var /** @type {?} */ propIsEnumerable = Object.prototype.propertyIsEnumerable;
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
    var /** @type {?} */ from;
    var /** @type {?} */ to = toObject(target);
    var /** @type {?} */ symbols;
    for (var /** @type {?} */ s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var /** @type {?} */ key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if ((/** @type {?} */ (Object)).getOwnPropertySymbols) {
            symbols = (/** @type {?} */ (Object)).getOwnPropertySymbols(from);
            for (var /** @type {?} */ i = 0; i < symbols.length; i++) {
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
 * @suppress {checkTypes} checked by tsc
 */
var JdbPlgBaseService = /** @class */ (function () {
    function JdbPlgBaseService(http, componentFactoryResolver, route) {
        this.http = http;
        this.componentFactoryResolver = componentFactoryResolver;
        this.route = route;
    }
    // 处理不同环境的Url，在原来的基础上做了优化
    // getUrl(apiName: string) {
    //   let api = APIS[apiName];
    //   if (ENV == 'serve' && api.serve) {
    //     return api.serve;
    //   }
    //   if (api.host && api.host[ENV]) {
    //     return api.host[ENV] + api.path;
    //   }
    //   return DEFAULTHOST[ENV] + api.path;
    // }
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
    };
    /**
     * @param {?} msg
     * @param {?=} delayTime
     * @return {?}
     */
    JdbPlgBaseService.prototype.toast = /**
     * @param {?} msg
     * @param {?=} delayTime
     * @return {?}
     */
    function (msg, delayTime) {
        if (delayTime === void 0) { delayTime = 3000; }
        //通过ComponentFactoryResolver 创建出动态组件的实例
        var /** @type {?} */ childComponent = this.componentFactoryResolver.resolveComponentFactory(JdbPlgToastComponent);
        var /** @type {?} */ comInstance = this.vRef.createComponent(childComponent);
        comInstance.instance.msg = msg;
        comInstance.changeDetectorRef.detectChanges();
        setTimeout(function () {
            comInstance.destroy();
        }, delayTime);
    };
    /**
     * @return {?}
     */
    JdbPlgBaseService.prototype.test = /**
     * @return {?}
     */
    function () {
        alert('jdb services....');
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
        var /** @type {?} */ time = new Date().getTime();
        var /** @type {?} */ loginToken;
        var /** @type {?} */ loginWay;
        var /** @type {?} */ orgUid;
        if (options && options.tokenObj) {
            loginToken = localStorage.getItem(options.tokenObj.loginToken);
            loginWay = localStorage.getItem(options.tokenObj.loginWay);
            orgUid = localStorage.getItem(options.tokenObj.orgUid);
        }
        var /** @type {?} */ loginObj = {};
        var /** @type {?} */ data = {};
        var /** @type {?} */ currentRoute = location.hash.split('/')[1];
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
        data = jQueryLikeParamSerializer(data);
        var /** @type {?} */ headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var /** @type {?} */ reqUrl = apiName;
        var /** @type {?} */ requestoptions = new RequestOptions({
            headers: headers,
            method: 'post',
            body: data || {}
        });
        console.log(this.http);
        return this.http.request(reqUrl, requestoptions)
            .map(function (res) { return res.json(); })
            .filter(function (res) {
            //校验接口返回的数据结构格式
            if (!(res.hasOwnProperty('data') && res.hasOwnProperty('error'))) {
                _this.toast('系统接口格式错误！');
                options && options.reset && options.reset();
                return false;
            }
            if (options.fns && options.fns.length != 0) {
                var /** @type {?} */ len = options.fns.length;
                for (var /** @type {?} */ i = 0; i < len; i++) {
                    var /** @type {?} */ fn = options.fns[i];
                    if (res.error && res.error.returnCode * 1 === fn.returnCode && currentRoute != 'login') {
                        fn.callback();
                    }
                }
            }
            if (res.error && res.error.returnCode * 1 == 0) {
                return true;
            }
            //兼容登录组件中qrcodeApi和loginApi两个接口老的写法
            if (typeof (options) === 'boolean') {
                if (options) {
                    _this.toast(res && res.error && res.error.returnUserMessage);
                    return false;
                }
                else {
                    return true;
                }
            }
            //是否拦截处理
            if (options.isIntercept) {
                _this.toast(res && res.error && res.error.returnUserMessage);
                return false;
            }
            else {
                return true;
            }
        })
            .catch(function (error) {
            return Observable.throw(error || 'Server error');
        });
    };
    /**
     * @param {?} apiName
     * @param {?} dataObj
     * @return {?}
     */
    JdbPlgBaseService.prototype.postJSON = /**
     * @param {?} apiName
     * @param {?} dataObj
     * @return {?}
     */
    function (apiName, dataObj) {
        // let headers = new Headers({
        //     'Content-Type': 'application/json',
        //     'withCredentials': true
        // });
        var /** @type {?} */ headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        headers.append('Content-Type', 'application/json;charset=utf-8');
        // headers.append('withCredentials','true');
        // let urlData = new URLSearchParams();
        // if (Object.keys(dataObj).length > 0) {
        //     for (let key in dataObj) {
        //         urlData.append(key, dataObj[key]);
        //     }
        // }
        // let loanMarketToken = Cookie.get('loanMarketToken');
        // urlData.append('loanMarketToken', loanMarketToken);
        var /** @type {?} */ reqUrl = apiName;
        // let requestoptions = new RequestOptions({
        //     method: RequestMethod.Post,
        //     url: reqUrl,
        //     headers: headers,
        //     body: testData
        // })
        var /** @type {?} */ options = new RequestOptions({
            headers: headers,
            method: 'post',
            url: reqUrl,
            body: dataObj || {}
        });
        return this.http.request(reqUrl, options)
            .map(function (res) { return res.json(); })
            .filter(function (res) {
            if (res.error && res.error.returnCode * 1 == 0) {
                return true;
            }
            else {
                return false;
            }
        })
            .catch(function (error) {
            return Observable.throw(error || 'Server error');
        });
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
            var /** @type {?} */ date = new Date(stamp).toJSON();
            return date.split('T')[0];
        }
        return null;
    };
    /**
     * @param {?} apiName
     * @param {?} params
     * @return {?}
     */
    JdbPlgBaseService.prototype.export = /**
     * @param {?} apiName
     * @param {?} params
     * @return {?}
     */
    function (apiName, params) {
        var /** @type {?} */ cookieStr = Cookie.get('loginInfo');
        var /** @type {?} */ cookieObj = {};
        var /** @type {?} */ cookieData = {};
        if (cookieStr) {
            try {
                cookieObj = JSON.parse(cookieStr);
                cookieData = {
                    loginToken: cookieObj.loginToken,
                    employeeId: cookieObj.empId
                };
            }
            catch (/** @type {?} */ e) {
                console.log('parse cookie error...');
            }
        }
        var /** @type {?} */ paramsObj = objectAssign({}, cookieData, params);
        var /** @type {?} */ url = apiName + '?';
        for (var /** @type {?} */ key in paramsObj) {
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
        var /** @type {?} */ arr = {};
        var /** @type {?} */ reader = new FileReader();
        reader.onload = function (e) {
            var /** @type {?} */ data = e.target.result;
            //加载图片获取图片真实宽度和高度
            var /** @type {?} */ image = new Image();
            image.onload = function () {
                var /** @type {?} */ width = image.width;
                var /** @type {?} */ height = image.height;
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
        { type: Http, },
        { type: ComponentFactoryResolver, },
        { type: Router, },
    ]; };
    return JdbPlgBaseService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ aLength = lists.length;
        var /** @type {?} */ mLength = lines - aLength;
        var /** @type {?} */ fillObj = { unShowOpt: flag };
        var /** @type {?} */ keys;
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
            for (var /** @type {?} */ i = 0; i < mLength; i++) {
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
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        return phoneReg.test(number);
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
        //通过ComponentFactoryResolver 创建出动态组件的实例
        var /** @type {?} */ childComponent = this.componentFactoryResolver.resolveComponentFactory(JdbPlgToastComponent);
        var /** @type {?} */ comInstance = this.vRef.createComponent(childComponent);
        comInstance.instance.msg = msg;
        comInstance.changeDetectorRef.detectChanges();
        setTimeout(function () {
            comInstance.destroy();
        }, delayTime);
    };
    // 从数组删除指定元素
    /**
     * @param {?} list
     * @param {?=} node
     * @return {?}
     */
    CommonMethodService.prototype.removeNodeFromArray = /**
     * @param {?} list
     * @param {?=} node
     * @return {?}
     */
    function (list, node) {
        if (!node) {
            return list;
        }
        outFor: for (var /** @type {?} */ i = 0, /** @type {?} */ j = list.length; i < j; i++) {
            if (list[i] === node) {
                list.splice(i, 1);
                break outFor;
            }
        }
        return list;
    };
    CommonMethodService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CommonMethodService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
    ]; };
    return CommonMethodService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                    template: "<div class=\"jdb-plg-table-error\">\n    {{tableErrorText}}\n</div>",
                    styles: [".jdb-plg-table-error{-webkit-transform:translateX(-50%);transform:translateX(-50%);position:absolute;top:90px;left:50%}"]
                },] },
    ];
    /** @nocollapse */
    JdbPlgTableErrorComponent.ctorParameters = function () { return []; };
    JdbPlgTableErrorComponent.propDecorators = {
        "tableErrorText": [{ type: Input },],
    };
    return JdbPlgTableErrorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MDL_MODULES = [
    ShowPictureComponent,
    PictureViewerComponent,
    DragDirective,
    JdbPlgPaginationComponent,
    JdbPlgButtonComponent,
    JdbPlgDialogComponent,
    JdbPlgSelectComponent,
    JdbPlgInputComponent,
    JdbTabComponent,
    JdbPlgTableErrorComponent,
    ProvinceReformPipe,
    AmountReformPipe
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
                        JdbPlgSelectComponent,
                        JdbPlgButtonComponent,
                        JdbPlgDialogComponent,
                        JdbPlgInputComponent,
                        JdbPlgTableErrorComponent,
                        ProvinceReformPipe,
                        AmountReformPipe
                    ],
                    providers: [JdbPlgBaseService, CommonMethodService, FillTableService],
                    entryComponents: [JdbPlgToastComponent]
                },] },
    ];
    return JdbPlgUiModule;
}());
// TODO 暴露服务方式

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { JdbPlgUiModule, JdbPlgBaseService, FillTableService, CommonMethodService, JdbPlgButtonComponent, JdbPlgDialogComponent, JdbPlgInputComponent, JdbPlgPaginationComponent, JdbPlgSelectComponent, JdbTabComponent, JdbPlgTableErrorComponent, JdbPlgToastComponent, PictureViewerComponent, ShowPictureComponent, DragDirective as ɵa, OnlyNumberDirective as ɵd, AmountReformPipe as ɵc, ProvinceReformPipe as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC11aS1jb3JlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLXRvYXN0L2pkYi1wbGctdG9hc3QuY29tcG9uZW50LnRzIiwibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLXRhYi9qZGItdGFiLmNvbXBvbmVudC50cyIsIm5nOi8vQHRlc3QtdWkvY29yZS9jb3JlL2NvbXBvbmVudHMvc2hvdy1waWN0dXJlL3Nob3ctcGljdHVyZS5jb21wb25lbnQudHMiLCJuZzovL0B0ZXN0LXVpL2NvcmUvY29yZS9jb21wb25lbnRzL3BpY3R1cmUtdmlld2VyL3BpY3R1cmUtdmlld2VyLmNvbXBvbmVudC50cyIsIm5nOi8vQHRlc3QtdWkvY29yZS9jb3JlL2RpcmVjdGl2ZS9kcmFnLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHRlc3QtdWkvY29yZS9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy1wYWdpbmF0aW9uL2pkYi1wbGctcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCJuZzovL0B0ZXN0LXVpL2NvcmUvY29yZS9jb21wb25lbnRzL2pkYi1wbGctYnV0dG9uL2pkYi1wbGctYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vQHRlc3QtdWkvY29yZS9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy1kaWFsb2cvamRiLXBsZy1kaWFsb2cuY29tcG9uZW50LnRzIiwibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvZGlyZWN0aXZlL29ubHktbnVtYmVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHRlc3QtdWkvY29yZS9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy1zZWxlY3QvamRiLXBsZy1zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLWlucHV0L2pkYi1wbGctaW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL3F1ZXJ5LXN0cmluZy50cyIsIm5nOi8vQHRlc3QtdWkvY29yZS9jb3JlL3NlcnZpY2VzL2pkYi1wbGctYmFzZS9vYmplY3QtYXNzaWduLnRzIiwibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2pkYi1wbGctYmFzZS5zZXJ2aWNlLnRzIiwibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2ZpbGwtdGFibGUuc2VydmljZS50cyIsIm5nOi8vQHRlc3QtdWkvY29yZS9jb3JlL3NlcnZpY2VzL2pkYi1wbGctYmFzZS9jb21tb24tbWV0aG9kLnNlcnZpY2UudHMiLCJuZzovL0B0ZXN0LXVpL2NvcmUvY29yZS9jb21wb25lbnRzL2pkYi1wbGctdGFibGUtZXJyb3IvamRiLXBsZy10YWJsZS1lcnJvci5jb21wb25lbnQudHMiLCJuZzovL0B0ZXN0LXVpL2NvcmUvY29yZS9waXBlL3Byb3ZpbmNlLXJlZm9ybS5waXBlLnRzIiwibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvcGlwZS9hbW91bnQtcmVmb3JtLnBpcGUudHMiLCJuZzovL0B0ZXN0LXVpL2NvcmUvamRiLXBsZy11aS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWpkYi1wbGctdG9hc3QnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ0b2FzdC13cmFwZXJcIj5cbiAge3ttc2d9fVxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLnRvYXN0LXdyYXBlcntwb3NpdGlvbjpmaXhlZDtib3JkZXItcmFkaXVzOjVweDttaW4td2lkdGg6MTYwcHg7bWF4LXdpZHRoOjE5MHB4O3BhZGRpbmc6MzBweCAxMHB4O3RleHQtYWxpZ246Y2VudGVyO2xlZnQ6NTAlO3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3otaW5kZXg6MTAwMDE7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC43KTtjb2xvcjojZmZmO3dvcmQtYnJlYWs6YnJlYWstYWxsfWBdXG59KVxuZXhwb3J0IGNsYXNzIEpkYlBsZ1RvYXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBtc2c6c3RyaW5nID0gXCJcIjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cblxuXG5cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE9uSW5pdCwgSW5wdXQsXG4gICAgVmlld0NvbnRhaW5lclJlZixcbiAgICBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsXG4gICAgQ29tcG9uZW50UmVmLFxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBJbmplY3RvcixcbiAgICBPbkRlc3Ryb3ksXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamRiLXRhYicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidGFiLXdyYXBlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0YWItbmF2LXdyYXBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtcztsZXQgaSA9IGluZGV4O1wiIFtuZ0NsYXNzXT1cInsndGFiLXNlbGVjdGVkJzppID09IGN1clRhYkluZGV4fVwiIHRpdGxlPSd7e2l0ZW0udGl0bGV9fSc+XG4gICAgICAgICAgICA8ZGl2IChjbGljayk9XCJ0YWJDaGFuZ2UoaSlcIiBjbGFzcz1cInRhYi10ZXh0XCI+IHt7aXRlbS50aXRsZX19PC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlLWJ0blwiIChjbGljayk9XCJyZW1vdmVUYWIoaSlcIiAqbmdJZj1cImkgIT09IDAgJiYgaXRlbS5pc0Nsb3NlRmxhZyAhPSB0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50LXdyYXBlclwiPlxuICAgICAgICA8ZGl2ICN0YWJDb250ZW50IGNsYXNzPVwicGxhY2UtaG9sZGVyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYC50YWItd3JhcGVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnRhYi1uYXYtd3JhcGVye2Rpc3BsYXk6ZmxleH0udGFiLW5hdi13cmFwZXIgLnRhYi1pdGVte3dpZHRoOjEyMHB4O2ZvbnQtc2l6ZToxM3B4O2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6I2YwZjFmNTtib3JkZXI6MXB4IHNvbGlkICNhZmIwYjM7Ym9yZGVyLWJvdHRvbTpub25lO21hcmdpbi1yaWdodDo1cHg7aGVpZ2h0OjMwcHg7Ym9yZGVyLXJhZGl1czoycHggMnB4IDAgMDt0ZXh0LWFsaWduOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTtjdXJzb3I6cG9pbnRlcn0udGFiLW5hdi13cmFwZXIgLnRhYi1pdGVtIC50YWItdGV4dHtjb2xvcjojN2Q3ZTgwO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dmVydGljYWwtYWxpZ246bWlkZGxlO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7cGFkZGluZzo1cHggMjBweCAwfS50YWItbmF2LXdyYXBlciAudGFiLWl0ZW0udGFiLXNlbGVjdGVke2JhY2tncm91bmQ6I2ZmZjtib3JkZXI6bm9uZTtib3JkZXItdG9wOjNweCBzb2xpZCAjM2Y2OWYyfS50YWItbmF2LXdyYXBlciAudGFiLWl0ZW0udGFiLXNlbGVjdGVkIC50YWItdGV4dHtjb2xvcjojM2Y2OWYyO3BhZGRpbmctdG9wOjNweH0udGFiLW5hdi13cmFwZXIgLnRhYi1pdGVtIC5jbG9zZS1idG57cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6OHB4O2ZvbnQtc2l6ZToyNHB4O2N1cnNvcjpwb2ludGVyO2NvbG9yOiM5OTk7Zm9udC13ZWlnaHQ6MTAwfS50YWItY29udGVudC13cmFwZXJ7Ym94LXNoYWRvdzoxcHggMXB4IDFweCAxcHggI2FmYjBiMztiYWNrZ3JvdW5kOiNmZmZ9LnRhYi1jb250ZW50LXdyYXBlciAucGxhY2UtaG9sZGVye3dpZHRoOjA7aGVpZ2h0OjB9YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBKZGJUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgLy8gQFZpZXdDaGlsZCgndGFiQ29udGVudCcpIHRhYkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgndGFiQ29udGVudCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSB0YXJnZXQ7XG4gICAgQE91dHB1dCgpIG9uVGFiQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblRhYlJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25Ub3BDb21Nc2cgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgaXRlbXMgPSBbXTtcbiAgICB0YWJDb21zID0gW107XG4gICAgdGFiU3ViczogYW55O1xuICAgIGN1clRhYkluZGV4ID0gMDtcbiAgICB0YWJJZENvbU1hcCA9IHt9O1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICBwdWJsaWMgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICApIHsgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIENoaWxkQ29tcG9uZW50XG4gICAgICogQHBhcmFtIGF0dHJzOntcbiAgICAgKiAgICAgcHJvcGVyeTp2YWx1ZVxuICAgICAqIF1cbiAgICAgKiB0aXRsZTpzdHJpbmdcbiAgICAgKiBpc0Nsb3NlRmxhZ1xuICAgICAqL1xuICAgIGFkZEl0ZW0oQ2hpbGRDb21wb25lbnQ6IGFueSwgYXR0cnM6IGFueSwgdGl0bGU6IHN0cmluZywgY29tSWQ6IGFueSA9IFwiXCIsIGlzQ2xvc2VGbGFnOiBib29sZWFuID0gZmFsc2UpIHtcblxuICAgICAgICBpZiAoY29tSWQgJiYgdGhpcy50YWJJZENvbU1hcFtjb21JZF0pIHtcbiAgICAgICAgICAgIGxldCBjb206IGFueSA9IHRoaXMudGFiSWRDb21NYXBbY29tSWRdO1xuICAgICAgICAgICAgdGhpcy50YWJDaGFuZ2UoY29tLmluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KENoaWxkQ29tcG9uZW50KTtcbiAgICAgICAgdmFyIGNvbUluc3RhbmNlID0gdGhpcy50YXJnZXQuY3JlYXRlQ29tcG9uZW50KGNoaWxkQ29tcG9uZW50KTtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhdHRycyk7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBpc0Nsb3NlRmxhZzogaXNDbG9zZUZsYWdcbiAgICAgICAgfSk7XG4gICAgICAgIGtleXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbUluc3RhbmNlLmluc3RhbmNlW3ZhbHVlXSA9IGF0dHJzW3ZhbHVlXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFiQ29tcy5wdXNoKGNvbUluc3RhbmNlKTtcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRPbmVDb21IaWRlKHRoaXMuY3VyVGFiSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YWJTdWJzID0gY29tSW5zdGFuY2UuaW5zdGFuY2VbJ29uVG9wQ29tTXNnJ10gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMudGFiU3Vicy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uVG9wQ29tTXNnLmVtaXQodmFsdWUpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmN1clRhYkluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICBpZiAoY29tSWQpIHtcbiAgICAgICAgICAgIHRoaXMudGFiSWRDb21NYXBbY29tSWRdID0ge1xuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmN1clRhYkluZGV4LFxuICAgICAgICAgICAgICAgIGNvbUluc3RhbmNlOiBjb21JbnN0YW5jZS5pbnN0YW5jZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21JbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldE9uZUNvbUhpZGUodGFiSW5kZXgpIHtcbiAgICAgICAgdGhpcy50YWJDb21zW3RhYkluZGV4XS5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldE9uZUNvbVNob3codGFiSW5kZXgpIHtcbiAgICAgICAgdGhpcy50YWJDb21zW3RhYkluZGV4XS5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgdGFiQ2hhbmdlKGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLmN1clRhYkluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0T25lQ29tSGlkZSh0aGlzLmN1clRhYkluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRPbmVDb21TaG93KGluZGV4KTtcbiAgICAgICAgdGhpcy5jdXJUYWJJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLm9uVGFiQ2hhbmdlLmVtaXQoaW5kZXgpO1xuICAgICAgICB0aGlzLnRhYkNvbXNbaW5kZXhdLmluc3RhbmNlLnRhYlJlZnJlc2ggJiYgdGhpcy50YWJDb21zW2luZGV4XS5pbnN0YW5jZS50YWJSZWZyZXNoKHt9KTtcbiAgICAgICAgLy8gdGhpcy50YWJDb21zW2luZGV4XS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgc2V0T25lVGFiU2hvdyhpbmRleCkge1xuICAgICAgICB0aGlzLnRhYkNoYW5nZShpbmRleCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFiKGluZGV4KSB7XG4gICAgICAgIHRoaXMudGFiQ29tc1tpbmRleF0uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnRhYkNvbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpZiAoaW5kZXggPD0gdGhpcy5jdXJUYWJJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5jdXJUYWJJbmRleC0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1clRhYkluZGV4IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJUYWJJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRPbmVDb21TaG93KHRoaXMuY3VyVGFiSW5kZXgpO1xuICAgICAgICB0aGlzLm9uVGFiUmVtb3ZlLmVtaXQoaW5kZXgpO1xuICAgICAgICBsZXQgdGFiSWRDb21NYXAgPSB0aGlzLnRhYklkQ29tTWFwO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGFiSWRDb21NYXApIHtcbiAgICAgICAgICAgIGlmICh0YWJJZENvbU1hcFtrZXldLmluZGV4ID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRhYklkQ29tTWFwW2tleV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlbW92ZVRhYkJ5SWQoaWQ6c3RyaW5nKSB7XG4gICAgICAgIGxldCB0YWJJZENvbU1hcCA9IHRoaXMudGFiSWRDb21NYXA7XG4gICAgICAgIGZvcihsZXQga2V5IGluIHRhYklkQ29tTWFwKSB7XG4gICAgICAgICAgICBpZihrZXkgPT0gaWQpICB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUYWIodGFiSWRDb21NYXBba2V5XVsnaW5kZXgnXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgLy8gdGhpcy50YXJnZXQuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaG93LXBpY3R1cmUnLFxuICB0ZW1wbGF0ZTogYDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cImltZy1tYXNrXCIgKGNsaWNrKT1cImNsb3NlTW9kZWwoKVwiPlxuICAgICAgICA8IS0tIMOpwoHCrsOnwr3CqcOlwrHCgiAtLT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRlbnRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cImNsb3NlTW9kZWwoKVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9jbG9zZS14LnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwicGljdHVyZVVybFwiIGFsdD1cIlwiIHN0eWxlPVwibWF4LWhlaWdodDogNjAwcHg7bWF4LXdpZHRoOiA4MDBweDtcIj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYEBjaGFyc2V0IFwiVVRGLThcIjsuaW1nLW1hc2t7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOiMwMDA7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowOy1tb3otb3BhY2l0eTouMztvcGFjaXR5Oi44O3otaW5kZXg6OTk5ODtkaXNwbGF5OmJsb2NrfS5pbWctY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q4ZGI7cG9zaXRpb246Zml4ZWQ7d2lkdGg6ODAwcHg7aGVpZ2h0OjYwMHB4O21hcmdpbi1sZWZ0Oi00MDBweDtsZWZ0OjUwJTttYXJnaW4tdG9wOi0zMDBweDt0b3A6NTAlO2xpbmUtaGVpZ2h0OjYwMHB4O2JvcmRlcjoxcHggc29saWQgI2UxZTJlNjt6LWluZGV4Ojk5OTk7dGV4dC1hbGlnbjpjZW50ZXI7Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtc2l6ZTowO2JvcmRlcjpub25lfS5pbWctY29udGVudCAuY2xvc2V7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjJweDtoZWlnaHQ6MjJweDtib3JkZXItcmFkaXVzOjExcHg7YmFja2dyb3VuZC1jb2xvcjojZTdlOGU5O3RvcDo4cHg7cmlnaHQ6OHB4O3otaW5kZXg6OTk5OTt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDo4cHh9LmltZy1jb250ZW50IGltZ3t2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9YF1cbn0pXG5leHBvcnQgY2xhc3MgU2hvd1BpY3R1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwaWN0dXJlVXJsOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHtzdGF0dXM6IGJvb2xlYW59PigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cbiAgY2xvc2VNb2RlbCgpe1xuICAgIHRoaXMudXBkYXRlLmVtaXQoe3N0YXR1czogZmFsc2V9KVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIsXG4gIGFuaW1hdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcGljdHVyZS12aWV3ZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwaWN0dXJlLXZpZXdlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWctbWFza1wiICpuZ0lmPVwiX2pkYk1hc3RlclwiIChjbGljayk9XCJjbG9zZU1vZGVsKClcIj5cbiAgICAgICAgPCEtLSDDqcKBwq7Dp8K9wqnDpcKxwoIgLS0+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAjaW1nQ29udGVudCBbbmdDbGFzc109XCJ7J2ltZy1jb250ZW50LWNvbXBvbmV0JzpqZGJTaG93VHlwZT09Mn1cIiBjbGFzcz1cImltZy1jb250ZW50XCI+XG4gICAgICAgIDwhLS0gw6XCj8Kzw6TCuMKKw6jCp8KSw6XChcKzw6nCl8Ktw6bCjMKJw6nCksKuIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VcIiAqbmdJZj1cIl9qZGJDbGVhclwiIChjbGljayk9XCJjbG9zZU1vZGVsKClcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1jbG9zZVwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSDDpcKbwr7Dp8KJwodib3ggLS0+XG4gICAgICAgIDx1bCBjbGFzcz1cImltZy1ib3hcIiAjaW1nPlxuICAgICAgICAgICAgPCEtLSA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGljdHVyZUxpc3Q7bGV0IGk9aW5kZXhcIiBbQGltZ01vdmVdPVwiSW1nU3RhdGUoaSlcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGFwcERyYWdEaXJlY3RpdmUgw4LCoFtzcmNdPVwiaXRlbS5pbWdVcmxcIiBhbHQ9XCJcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDYwMHB4O21heC13aWR0aDogODAwcHg7XCI+XG4gICAgICAgICAgICA8L2xpPiAtLT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPCEtLSDDpMK4worDpMK4woDDqcKhwrXDpMK4wovDpMK4woDDqcKhwrUgLS0+XG4gICAgICAgIDxkaXYgW2hpZGRlbl09XCJjdXJyZW50PT0wXCIgY2xhc3M9XCJwcmV2LXBhZ2VcIiAoY2xpY2spPVwiUHJldigpXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1wcmV2XCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBbaGlkZGVuXT1cImN1cnJlbnQ9PXBpY3R1cmVMaXN0Lmxlbmd0aC0xXCIgY2xhc3M9XCJuZXh0LXBhZ2VcIiAoY2xpY2spPVwiTmV4dCgpXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1uZXh0XCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIMOlwo/Cs8OkwrjCi8OowqfCksOpwqHCtcOnwqDCgSAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltZy1pbmRleFwiPnt7Y3VycmVudCsxfX0ve3twaWN0dXJlTGlzdC5sZW5ndGh9fTwvZGl2PlxuICAgICAgICA8IS0tIMOnwrzCqcOmwpTCvsOmwpfCi8Oowr3CrMOmwozCicOpwpLCrsOnwrvChCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ib3hcIj5cbiAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsnaG92ZXItZGlzYWJsZWQnOmltZ09wZXJhdGUubnVtPT09NH1cIiBjbGFzcz1cImljb24tcGljdHVyZS16b29tLWluIHNjYWxlLWJpZ1wiIChjbGljayk9XCJzY2FsZUJpZygpXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwieydob3Zlci1kaXNhYmxlZCc6aW1nT3BlcmF0ZS5udW09PTAuNX1cIiBjbGFzcz1cImljb24tcGljdHVyZS16b29tLW91dCAgc2NhbGUtc21hbGxcIiAoY2xpY2spPVwic2NhbGVTbWFsbCgpXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBpY3R1cmUtY291bnRlcmNsb2Nrd2lzZSByb3V0YXRlLW5pXCIgKGNsaWNrKT1cInJvdXRhdGVOaSgpXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBpY3R1cmUtY2xvY2t3aXNlIHJvdXRhdGUtc2h1blwiIChjbGljayk9XCJyb3V0YXRlU2h1bigpXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2BAY2hhcnNldCBcIlVURi04XCI7LnBpY3R1cmUtdmlld2VyIC5pbWctbWFza3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6IzAwMDtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7LW1vei1vcGFjaXR5Oi4zO29wYWNpdHk6Ljg7ei1pbmRleDo5OTk4O2Rpc3BsYXk6YmxvY2t9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q4ZGI7cG9zaXRpb246Zml4ZWQ7bGVmdDo1MCU7dG9wOjUwJTtib3JkZXI6MXB4IHNvbGlkICNjY2M7ei1pbmRleDo5OTk5O3RleHQtYWxpZ246Y2VudGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6bm9uZX0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5jbG9zZXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyMnB4O2hlaWdodDoyMnB4O2JvcmRlci1yYWRpdXM6MTFweDtib3JkZXI6MXB4IHNvbGlkICNmZmY7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KTt0b3A6OHB4O3JpZ2h0OjhweDt6LWluZGV4Ojk5OTk7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6OHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLmNsb3NlIC5pY29uLWNsb3Nle2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDoxcHg7bWFyZ2luLWxlZnQ6MXB4O2ZvbnQtc2l6ZToxOHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLmltZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVufS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLmltZy1ib3ggbGl7YmFja2dyb3VuZC1jb2xvcjojZDdkOGRiO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTE7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTt0cmFuc2l0aW9uOi4xc30ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5pbWctYm94IGxpIGltZ3twb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjFzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4xczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMXMsLXdlYmtpdC10cmFuc2Zvcm0gLjFzfS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgYXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO21hcmdpbi10b3A6LTMwcHg7d2lkdGg6NjBweDtoZWlnaHQ6NjBweDt6LWluZGV4OjQwMDtiYWNrZ3JvdW5kOnVybCgvYXNzZXRzL2ltYWdlcy9DWGljb24ucG5nKSAwIDAvMTkycHggMTQ0cHggbm8tcmVwZWF0fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLm5leHR7cmlnaHQ6MjBweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi01NHB4IC03OHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLnByZXZ7bGVmdDoyMHB4O2JhY2tncm91bmQtcG9zaXRpb246LTU0cHggLTZweH0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5uZXh0OmhvdmVye2JhY2tncm91bmQtcG9zaXRpb246LTEyNnB4IC03OHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLnByZXY6aG92ZXJ7YmFja2dyb3VuZC1wb3NpdGlvbjotMTI2cHggLTZweH0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5uZXh0LXBhZ2UsLnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAucHJldi1wYWdle3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bWFyZ2luLXRvcDotMzBweDt3aWR0aDo2MHB4O2hlaWdodDo2MHB4O3otaW5kZXg6NDAwO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMil9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAubmV4dC1wYWdlIHNwYW4sLnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAucHJldi1wYWdlIHNwYW57ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOjZweDtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KTtmb250LXNpemU6NDhweH0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5wcmV2LXBhZ2V7bGVmdDoyMHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLm5leHQtcGFnZXtyaWdodDoyMHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLm5leHQtcGFnZTpob3ZlciwucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5wcmV2LXBhZ2U6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC43KX0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5uZXh0LXBhZ2U6aG92ZXIgc3BhbiwucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5wcmV2LXBhZ2U6aG92ZXIgc3Bhbntjb2xvcjojZmZmfS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLmltZy1pbmRleHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MTVweDtyaWdodDoyMnB4O3otaW5kZXg6MTAxO2NvbG9yOiMzMjMyMzM7Zm9udC1zaXplOjE2cHg7aGVpZ2h0OjIycHg7bGluZS1oZWlnaHQ6MjJweDt3aWR0aDo0MnB4O3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1yYWRpdXM6MnB4O2JhY2tncm91bmQ6cmdiYSgyMTUsMjE2LDIxOSwuNyl9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAuYnRuLWJveHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwOTtib3R0b206MTJweDtsZWZ0OjUwJTttYXJnaW4tbGVmdDotNzNweDtwYWRkaW5nOjNweCA1cHg7aGVpZ2h0OjMwcHg7d2lkdGg6MTQ3cHg7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41KTtib3JkZXItcmFkaXVzOjJweDtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5idG4tYm94IHNwYW57ZmxvYXQ6bGVmdDttYXJnaW46MCA1cHh9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAuYnRuLWJveCAucm91dGF0ZS1uaTpob3ZlciwucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5idG4tYm94IC5yb3V0YXRlLXNodW46aG92ZXIsLnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAuYnRuLWJveCAuc2NhbGUtYmlnOmhvdmVyLC5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLmJ0bi1ib3ggLnNjYWxlLXNtYWxsOmhvdmVye2NvbG9yOiNmZmZ9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAuYnRuLWJveCAuaG92ZXItZGlzYWJsZWQ6aG92ZXJ7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudC1jb21wb25ldHtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MDtsZWZ0OjA7bWFyZ2luOjB9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdpbWdNb3ZlJywgW1xuICAgICAgLyoqIMOkwrjCjcOmwpjCvsOnwqTCuiAqL1xuICAgICAgc3RhdGUoJ29mZicsIHN0eWxlKHsgJ2Rpc3BsYXknOiAnbm9uZScsICd6LWluZGV4JzogJzAnLCAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoMCknIH0pKSxcbiAgICAgIC8qKiDDpMK4worDpMK4woDDpcK8wqDDpcKbwr7Dp8KJwocgKi9cbiAgICAgIHN0YXRlKCdwcmV2Jywgc3R5bGUoe1xuICAgICAgICAnei1pbmRleCc6ICcxJyxcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKC0xMDAlKSdcbiAgICAgIH0pKSxcbiAgICAgIC8qKiDDpMK4wovDpMK4woDDpcK8wqDDpcKbwr7Dp8KJwocgKi9cbiAgICAgIHN0YXRlKCduZXh0Jywgc3R5bGUoeyAnei1pbmRleCc6ICcyJywgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKDEwMCUpJyB9KSksXG4gICAgICAvKiogw6XCvcKTw6XCicKNw6XCm8K+w6fCicKHICovXG4gICAgICBzdGF0ZSgnb24nLCBzdHlsZSh7ICd6LWluZGV4JzogJzMnLCAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoMCknIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ByZXY9Pm9uJywgW1xuICAgICAgICBhbmltYXRlKCcwLjNzIGVhc2UtaW4nKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCduZXh0PT5vbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMC4zcyBlYXNlLWluJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignb249PnByZXYnLCBbXG4gICAgICAgIGFuaW1hdGUoJzAuM3MgZWFzZS1pbicpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ29uPT5uZXh0JywgW1xuICAgICAgICBhbmltYXRlKCcwLjNzIGVhc2UtaW4nKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBpY3R1cmVWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcGljdHVyZUxpc3Q6IGFueSA9IFtdO1xuICBAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx7IHN0YXR1czogYm9vbGVhbiB9PigpO1xuICAvLyBASW5wdXQoKSBjdXJyZW50OiBudW1iZXIgPSAwO1xuICBAVmlld0NoaWxkKCdpbWcnKSBpbWdCb3g6IEVsZW1lbnRSZWY7ICAvLyDDpcKbwr7Dp8KJwofDp8KIwrbDqMKKwoLDp8KCwrlcbiAgQFZpZXdDaGlsZCgnaW1nQ29udGVudCcpIGltZ0NvbnRlbnQ6IEVsZW1lbnRSZWY7IC8vIMOlwq7CucOlwpnCqMOlwoXCg8OnwrTCoFxuICAvLyDDqMKuwr7Dp8K9wq7DpcKuwrnDpcKZwqjDp8KawoTDqcK7wpjDqMKuwqTDpcKuwr3DqcKrwpjDr8K8wozDpcKPwq/DqcKAwoLDqcKFwo0gw6XCj8Kvw6nChcKNw6fCvcKuw6XCscKew6bCgMKnXG4gIEBJbnB1dCgpIG1heFdpZHRoOiBudW1iZXIgPSA4MDA7XG4gIEBJbnB1dCgpIG1heEhlaWdodDogbnVtYmVyID0gNjAwO1xuICBASW5wdXQoKSBqZGJTaG93VHlwZTogbnVtYmVyID0gMTsgLy8gw6bCmMKvw6bCtcKuw6XCscKCw6jCv8KYw6bCmMKvw6XCtcKMw6XChcKlw6fCu8KEw6TCu8K2w6/CvMKMw6nCu8KYw6jCrsKkw6TCuMK6McOvwrzCjMOkwr3CnMOkwrjCusOmwrXCrsOlwrHCgsOvwrzCjMOowovCpcOkwrjCujLDr8K8wozDpcKIwpnDqMKhwqjDp8KkwrrDpsKYwq/DpcK1wozDpcKFwqXDp8K7woTDpMK7wrZcblxuICBfamRiTWFzdGVyID0gdHJ1ZTsgLy8gw6bCmMKvw6XCkMKmw6nCnMKAw6jCpsKBbWFzdGVyw6nCgcKuw6fCvcKpw6/CvMKMw6nCu8KYw6jCrsKkw6nCnMKAw6jCpsKBw6nCgcKuw6fCvcKpw6XCscKCXG4gIF9qZGJDbGVhciA9IHRydWU7Ly8gw6bCmMKvw6XCkMKmw6nCnMKAw6jCpsKBw6bCjMKJw6nCksKuw6XCj8KJw6/CvMKMw6nCu8KYw6jCrsKkw6nCnMKAw6jCpsKBXG4gIGRyYWdTdGF0dXMgPSBmYWxzZTtcbiAgY3VycmVudCA9IDA7IC8vIMOlwrHClcOnwqTCusOlwpvCvsOnwonCh8OkwrjCi8OmwqDCh8OvwrzCjMOpwrvCmMOowq7CpMOkwrjCujBcblxuICBlbGVtOiBhbnk7XG5cbiAgaW1nT3BlcmF0ZSA9IHtcbiAgICBudW06IDEsXG4gICAgZGVnbnVtOiAwXG4gIH07XG5cblxuICBASW5wdXQoKVxuICBzZXQgamRiTWFzdGVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5famRiTWFzdGVyID0gdGhpcy50b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGpkYk1hc3RlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5famRiTWFzdGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGpkYkNsZWFyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5famRiQ2xlYXIgPSB0aGlzLnRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgamRiQ2xlYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2pkYkNsZWFyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGpkYkN1cnJlbnQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA+IHRoaXMucGljdHVyZUxpc3QubGVuZ3RoIHx8IHZhbHVlIDwgMCkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgamRiQ3VycmVudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVsZW0gPSB0aGlzLmltZ0JveC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuOyAgLy8gw6bCicKAw6bCnMKJw6fCmsKEbGlcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLnBpY3R1cmVMaXN0KSB7XG4gICAgICB0aGlzLnBpY3R1cmVMaXN0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbihpbmRleCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyDDqMKuwr7Dp8K9wq7DpcKFwoPDp8K0wqDDpsKgwrfDpcK8wo9cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGltZ0NvbnRlbnQgPSB0aGlzLmltZ0NvbnRlbnQubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShpbWdDb250ZW50LCAnaGVpZ2h0JywgdGhpcy5tYXhIZWlnaHQgKyAncHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShpbWdDb250ZW50LCAnd2lkdGgnLCB0aGlzLm1heFdpZHRoICsgJ3B4Jyk7XG5cbiAgICBpZiAodGhpcy5qZGJTaG93VHlwZSA9PSAxKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShpbWdDb250ZW50LCAnbWFyZ2luLWxlZnQnLCAtIHRoaXMubWF4V2lkdGggLyAyICsgJ3B4Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShpbWdDb250ZW50LCAnbWFyZ2luLXRvcCcsIC0gdGhpcy5tYXhIZWlnaHQgLyAyICsgJ3B4Jyk7XG4gICAgfVxuICB9XG5cbiAgLy8gw6nCh8KNw6fCvcKuw6XCm8K+w6fCicKHw6TCvcKNw6fCvcKuXG4gIHJlc2V0UG9zaXRpb24oaW5kZXgpIHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIC8vIMOowo7Ct8Olwo/ClsOlwr3Ck8OlwonCjcOlworCoMOowr3CvcOlwpvCvsOnwonCh8Olwq7CvcOpwqvCmFxuICAgICAgbGV0IHcgPSBpbWFnZS53aWR0aDtcbiAgICAgIGxldCBoID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgbGV0IGhSYXRpbztcbiAgICAgIGxldCB3UmF0aW87XG4gICAgICAvLyDDqMKuwr7Dp8K9wq7DqcK7wpjDqMKuwqTDpsKvwpTDpMK+wovDpMK7wqXDpcKPworDpcKuwrnDpcKZwqjDpcKuwr3DqcKrwphcbiAgICAgIGNvbnN0IGltZ1JhdGUgPSB3IC8gaDsgLy8gw6XCm8K+w6fCicKHw6XCrsK9w6nCq8KYw6bCr8KUXG4gICAgICAvLyBjb25zdCBtYXhXaWR0aCA9IDgwMDtcbiAgICAgIC8vIGNvbnN0IG1heEhlaWdodCA9IDYwMDtcbiAgICAgIHdSYXRpbyA9IHRoaXMubWF4V2lkdGggLyB3O1xuICAgICAgaFJhdGlvID0gdGhpcy5tYXhIZWlnaHQgLyBoO1xuXG4gICAgICBpZiAod1JhdGlvID4gMSAmJiBoUmF0aW8gPiAxKSB7XG4gICAgICAgIC8vIMOkwrjCpMOowoDChcOmwq/ClMOkwr7Ci8Olwp3Ch8OlwqTCp8OkwrrCjjHDqMKhwqjDp8KkwrrDpcKbwr7DpMK4wrrDpcKwwo/DpcKbwr7Dr8K8wozDpcKuwr3DqcKrwpjDpsKcwqrDqMK+wr7DpcKIwrA4MDAqNjAwLMOlwojCmcOlwo/ClsOlwo7Cn8OlwpvCvsOlwqTCp8OlwrDCj1xuICAgICAgICB3ID0gdztcbiAgICAgICAgaCA9IGg7XG4gICAgICB9IGVsc2UgaWYgKHdSYXRpbyA8IDEgJiYgaFJhdGlvIDwgMSkge1xuICAgICAgICAvLyDDpMK4wqTDqMKAwoXDpsKvwpTDpMK+wovDpcKdwofDpcKwwo/DpMK6wo4xw6jCocKow6fCpMK6w6XCm8K+w6TCuMK6w6XCpMKnw6XCm8K+w6/CvMKMw6XCrsK9w6nCq8KYw6jCvsK+w6XCiMKwODAwKjYwMCzDpcKIwpnDpcKPwpbDpcKuwrnDpcKZwqjDpcKkwqfDpcKwwo9cbiAgICAgICAgaWYgKGltZ1JhdGUgPiAxKSB7XG4gICAgICAgICAgLy8gw6XCrsK9w6XCm8K+XG4gICAgICAgICAgdyA9IHRoaXMubWF4V2lkdGg7XG4gICAgICAgICAgaCA9IHcgLyBpbWdSYXRlO1xuICAgICAgICB9IGVsc2UgaWYgKGltZ1JhdGUgPCAxKSB7XG4gICAgICAgICAgLy8gw6nClcK/w6XCm8K+XG4gICAgICAgICAgaCA9IHRoaXMubWF4SGVpZ2h0O1xuICAgICAgICAgIHcgPSBoICogaW1nUmF0ZTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKHdSYXRpbyA+IDEgJiYgaFJhdGlvIDwgMSkge1xuICAgICAgICAvLyDDqMKhwqjDp8KkwrrDpMK4wrrDqcKVwr/DpcKbwr7Dp8KJwofDr8K8wozDpcKIwpnDqcKrwpjDpMK4wro2MDDDr8K8wozDpcKuwr3Dp8KtwonDpsKvwpTDpMK+wovDp8K8wqnDpsKUwr7DpcKPwpbDpcKAwrxcbiAgICAgICAgaCA9IHRoaXMubWF4SGVpZ2h0O1xuICAgICAgICB3ID0gdyAqIGhSYXRpbztcbiAgICAgIH0gZWxzZSBpZiAod1JhdGlvIDwgMSAmJiBoUmF0aW8gPiAxKSB7XG4gICAgICAgIC8vIMOowqHCqMOnwqTCusOkwrjCusOlwq7CvcOlwpvCvsOnwonCh8OvwrzCjMOlwojCmcOlwq7CvcOkwrjCujgwMMOvwrzCjMOpwqvCmMOnwq3CicOmwq/ClMOkwr7Ci8OnwrzCqcOmwpTCvsOlwo/ClsOlwoDCvFxuICAgICAgICBoID0gaCAqIHdSYXRpbztcbiAgICAgICAgdyA9IHRoaXMubWF4V2lkdGg7XG4gICAgICB9XG5cbiAgICAgIC8vIMOowq7CvsOnwr3CrsOlwpvCvsOnwonCh8OlwrHClcOnwqTCusOlwq7CvcOpwqvCmFxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbGVtW2luZGV4XS5jaGlsZHJlblswXSwgJ2hlaWdodCcsIGggKyAncHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVtpbmRleF0uY2hpbGRyZW5bMF0sICd3aWR0aCcsIHcgKyAncHgnKTtcblxuICAgICAgaWYgKHcgPT09IHRoaXMubWF4V2lkdGggJiYgaCA9PT0gdGhpcy5tYXhIZWlnaHQpIHtcbiAgICAgICAgLy8gw6jCrsK+w6fCvcKuw6XCm8K+w6fCicKHw6TCvcKNw6fCvcKuw6TCvcK/w6XChcK2w6XCnsKCw6fCm8K0w6bCsMK0w6XCucKzw6XCscKFw6TCuMKtXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVtpbmRleF0uY2hpbGRyZW5bMF0sICd0b3AnLCAnMHB4Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVtpbmRleF0uY2hpbGRyZW5bMF0sICdsZWZ0JywgJzBweCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gw6jCrsK+w6fCvcKuw6XCm8K+w6fCicKHw6TCvcKNw6fCvcKuw6TCvcK/w6XChcK2w6XCnsKCw6fCm8K0w6bCsMK0w6XCucKzw6XCscKFw6TCuMKtXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVtpbmRleF0uY2hpbGRyZW5bMF0sICd0b3AnLCAodGhpcy5tYXhIZWlnaHQgLSBoKSAvIDIgKyAncHgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbGVtW2luZGV4XS5jaGlsZHJlblswXSwgJ2xlZnQnLCAodGhpcy5tYXhXaWR0aCAtIHcpIC8gMiArICdweCcpO1xuICAgICAgfVxuXG4gICAgfTtcbiAgICBpbWFnZS5zcmMgPSB0aGlzLnBpY3R1cmVMaXN0W2luZGV4XS5pbWdVcmw7XG4gIH1cblxuICAvLyDDpcKIwofDpsKNwqLDpcKKwqjDp8KUwrtcbiAgSW1nU3RhdGUoaW5kZXgpIHtcbiAgICBpZiAodGhpcy5waWN0dXJlTGlzdCAmJiB0aGlzLnBpY3R1cmVMaXN0Lmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaW5kZXggPT09IDAgPyAnb24nIDpcbiAgICAgICAgICBpbmRleCA9PT0gMSA/ICduZXh0JyA6XG4gICAgICAgICAgICBpbmRleCA9PT0gdGhpcy5waWN0dXJlTGlzdC5sZW5ndGggLSAxID8gJ3ByZXYnIDpcbiAgICAgICAgICAgICAgJ29mZic7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudCA9PT0gdGhpcy5waWN0dXJlTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybiBpbmRleCA9PT0gdGhpcy5waWN0dXJlTGlzdC5sZW5ndGggLSAxID8gJ29uJyA6XG4gICAgICAgICAgaW5kZXggPT09IHRoaXMucGljdHVyZUxpc3QubGVuZ3RoIC0gMiA/ICdwcmV2JyA6XG4gICAgICAgICAgICBpbmRleCA9PT0gMCA/ICduZXh0JyA6XG4gICAgICAgICAgICAgICdvZmYnO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChpbmRleCAtIHRoaXMuY3VycmVudCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdvbic7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gJ25leHQnO1xuICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgIHJldHVybiAncHJldic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdvZmYnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ29mZic7XG4gICAgfVxuICB9XG5cbiAgLy8gw6TCuMKLw6TCuMKAw6XCvMKgw6XCm8K+XG4gIE5leHQoKSB7XG4gICAgdGhpcy5yZXNldEltZ0RhdGEoKTtcbiAgICB0aGlzLmN1cnJlbnQgPSAodGhpcy5jdXJyZW50ICsgMSkgJSB0aGlzLnBpY3R1cmVMaXN0Lmxlbmd0aDtcbiAgICB0aGlzLnJlc2V0UG9zaXRpb24odGhpcy5jdXJyZW50IC0gMSk7XG4gICAgLy8gw6TCv8Kuw6bClMK5w6fCisK2w6bCgMKBw6/CvMKMw6TCvcK/w6bCi8KWw6XCisKow6XCm8K+w6fCicKHw6XCm8Kew6XCiMKww6XCjsKfw6bCncKlw6TCvcKNw6fCvcKuXG4gICAgLy8gdGhpcy5kcmFnU3RhdHVzID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIMOkwrjCisOkwrjCgMOlwrzCoMOlwpvCvlxuICBQcmV2KCkge1xuICAgIHRoaXMucmVzZXRJbWdEYXRhKCk7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50IC0gMSA8IDAgPyB0aGlzLnBpY3R1cmVMaXN0Lmxlbmd0aCAtIDEgOiB0aGlzLmN1cnJlbnQgLSAxO1xuICAgIHRoaXMucmVzZXRQb3NpdGlvbih0aGlzLmN1cnJlbnQgKyAxKTtcbiAgICAvLyDDpMK/wq7DpsKUwrnDp8KKwrbDpsKAwoHDr8K8wozDpMK9wr/DpsKLwpbDpcKKwqjDpcKbwr7Dp8KJwofDpcKbwp7DpcKIwrDDpcKOwp/DpsKdwqXDpMK9wo3Dp8K9wq5cbiAgICAvLyB0aGlzLmRyYWdTdGF0dXMgPSB0cnVlO1xuICB9XG5cbiAgLy8gw6XChcKzw6nCl8Ktw6XCm8K+w6fCicKHw6bCn8Klw6fCnMKLw6XCmcKoIF9fw6XChcKzw6nCl8Ktw6XCvMK5w6bCocKGw6XCkMKOw6XChsKNw6bCrMKhw6bCicKTw6XCvMKAw6bCicKAw6bCnMKJw6bCi8KWw6bCi8K9w6XCkMKOw6fCmsKEw6TCvcKNw6fCvcKuw6nCg8K9w6TCvMKaw6jCh8Kqw6XCisKow6XCvcKSw6TCuMK6w6/CvMKMw6XCm8Kgw6TCuMK6w6jCp8Kmw6XCj8KRw6TCusKGb25DaGFuZ2Vzw6bClsK5w6bCs8KVXG4gIGNsb3NlTW9kZWwoKSB7XG4gICAgdGhpcy5yZXNldEltZ0RhdGEoKTtcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHsgc3RhdHVzOiBmYWxzZSB9KTtcbiAgfVxuXG4gIC8vIMOmwpTCvsOlwqTCpyA1MCUgMTAwJSAyMDAlIDQwMCVcbiAgc2NhbGVCaWcoKSB7XG4gICAgdGhpcy5pbWdPcGVyYXRlLm51bSA9IHRoaXMuaW1nT3BlcmF0ZS5udW0gKiAyO1xuICAgIGlmICh0aGlzLmltZ09wZXJhdGUubnVtID4gNCkge1xuICAgICAgdGhpcy5pbWdPcGVyYXRlLm51bSA9IDQ7XG4gICAgfVxuICAgIGNvbnN0IHJhdGUgPSAnc2NhbGUoJyArIDEgKiB0aGlzLmltZ09wZXJhdGUubnVtICsgJywnICsgMSAqIHRoaXMuaW1nT3BlcmF0ZS5udW0gKyAnKSByb3RhdGUoJyArICgtdGhpcy5pbWdPcGVyYXRlLmRlZ251bSAqIDkwKSArICdkZWcpJztcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmVsZW1bdGhpcy5jdXJyZW50XS5jaGlsZHJlblswXSwgJ3RyYW5zZm9ybScsIHJhdGUpO1xuICB9XG5cbiAgLy8gw6fCvMKpw6XCsMKPXG4gIHNjYWxlU21hbGwoKSB7XG4gICAgdGhpcy5pbWdPcGVyYXRlLm51bSA9IHRoaXMuaW1nT3BlcmF0ZS5udW0gLyAyO1xuICAgIGlmICh0aGlzLmltZ09wZXJhdGUubnVtIDwgMSkge1xuICAgICAgdGhpcy5pbWdPcGVyYXRlLm51bSA9IDAuNTtcbiAgICB9XG4gICAgY29uc3QgcmF0ZSA9ICdzY2FsZSgnICsgMSAqIHRoaXMuaW1nT3BlcmF0ZS5udW0gKyAnLCcgKyAxICogdGhpcy5pbWdPcGVyYXRlLm51bSArICcpIHJvdGF0ZSgnICsgKC10aGlzLmltZ09wZXJhdGUuZGVnbnVtICogOTApICsgJ2RlZyknO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVt0aGlzLmN1cnJlbnRdLmNoaWxkcmVuWzBdLCAndHJhbnNmb3JtJywgcmF0ZSk7XG4gIH1cblxuICAvLyDDqcKAwobDpsKXwrbDqcKSwojDpsKXwovDqMK9wqxcbiAgcm91dGF0ZU5pKCkge1xuICAgIHRoaXMuaW1nT3BlcmF0ZS5kZWdudW0rKztcbiAgICBjb25zdCByYXRlID0gJ3NjYWxlKCcgKyAxICogdGhpcy5pbWdPcGVyYXRlLm51bSArICcsJyArIDEgKiB0aGlzLmltZ09wZXJhdGUubnVtICsgJykgcm90YXRlKCcgKyAoLXRoaXMuaW1nT3BlcmF0ZS5kZWdudW0gKiA5MCkgKyAnZGVnKSc7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmVsZW1bdGhpcy5jdXJyZW50XS5jaGlsZHJlblswXSwgJ3RyYW5zZm9ybScsIHJhdGUpO1xuICB9XG5cbiAgLy8gw6nCocK6w6bCl8K2w6nCksKIw6bCl8KLw6jCvcKsXG4gIHJvdXRhdGVTaHVuKCkge1xuICAgIHRoaXMuaW1nT3BlcmF0ZS5kZWdudW0tLTtcblxuICAgIGNvbnN0IHJhdGUgPSAnc2NhbGUoJyArIDEgKiB0aGlzLmltZ09wZXJhdGUubnVtICsgJywnICsgMSAqIHRoaXMuaW1nT3BlcmF0ZS5udW0gKyAnKSByb3RhdGUoJyArICgtdGhpcy5pbWdPcGVyYXRlLmRlZ251bSAqIDkwKSArICdkZWcpJztcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVt0aGlzLmN1cnJlbnRdLmNoaWxkcmVuWzBdLCAndHJhbnNmb3JtJywgcmF0ZSk7XG4gIH1cblxuICAvLyDDqcKHwo3Dp8K9wq7DpcKbwr7Dp8KJwofDpsKVwrDDpsKNwq5cbiAgcmVzZXRJbWdEYXRhKCkge1xuICAgIHRoaXMuaW1nT3BlcmF0ZSA9IHtcbiAgICAgIG51bTogMSxcbiAgICAgIGRlZ251bTogMFxuICAgIH07XG4gICAgY29uc3QgcmF0ZSA9ICdzY2FsZSgxLDEpIHJvdGF0ZSgwZGVnKSc7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbGVtW3RoaXMuY3VycmVudF0uY2hpbGRyZW5bMF0sICd0cmFuc2l0aW9uJywgJ3RyYW5zZm9ybSAwLjJzIGxpbmVhciAwLjRzJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbGVtW3RoaXMuY3VycmVudF0uY2hpbGRyZW5bMF0sICd0cmFuc2Zvcm0nLCByYXRlKTtcbiAgfVxuXG4gIC8vIMOowr3CrMOmwo3CosOkwrjCumJvb2xlYW4sw6XCjcKzw6XCrsKew6fCjsKww6bCnMKJw6jCv8KZw6TCuMKqw6XCrcKXw6bCrsK1w6XCsMKxw6jCrsKkw6TCuMK6w6TCuMK6dHJ1ZSzDpsKywqHDpsKcwonDpcKNwrPDpMK4wrpmYWxzZVxuICB0b0Jvb2xlYW4odmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICcnIHx8ICh2YWx1ZSAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnBpY3R1cmVMaXN0ID0gbnVsbDtcbiAgICB0aGlzLmltZ0JveCA9IG51bGw7XG4gICAgdGhpcy5pbWdDb250ZW50ID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBFbGVtZW50UmVmLFxuICAgIERpcmVjdGl2ZSxcbiAgICBDb21wb25lbnQsXG4gICAgUmVuZGVyZXIsXG4gICAgT25Jbml0LFxuICAgIElucHV0LFxuICAgIEFmdGVyQ29udGVudEluaXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2ltZ1thcHBEcmFnRGlyZWN0aXZlXSdcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ0RpcmVjdGl2ZSB7XG4gICAgb2xkTGVmdDogc3RyaW5nO1xuICAgIG9sZFRvcDogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBpc0Rvd24gPSBmYWxzZTtcbiAgICBwcml2YXRlIGRpc1g7XG4gICAgcHJpdmF0ZSBkaXNZO1xuICAgIHByaXZhdGUgZGlzTGVmdDtcbiAgICBwcml2YXRlIGRpc1RvcDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVsZW06IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlclxuICAgICkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8vIMOnwoLCucOlwofCu8OkwrrCi8OkwrvCtlxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pIG9uTW91c2Vkb3duKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHdSYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RyYWdXaWR0aCcpO1xuICAgICAgICBjb25zdCBoUmF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkcmFnSGVpZ2h0Jyk7XG4gICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmRpc0xlZnQgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgICAgICB0aGlzLmRpc1RvcCA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcDtcblxuICAgICAgICB0aGlzLmRpc1ggPSBldmVudC5jbGllbnRYO1xuICAgICAgICB0aGlzLmRpc1kgPSBldmVudC5jbGllbnRZO1xuICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8vIMOnwpvCkcOlwpDCrMOnwqfCu8OlworCqMOkwrrCi8OkwrvCtsOkwrrCi8OkwrvCtlxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbW92ZScsIFsnJGV2ZW50J10pIG9uTW91c2Vtb3ZlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIMOlwojCpMOmwpbCrcOowq/CpcOlwoXCg8OnwrTCoMOmwpjCr8OlwpDCpsOowqLCq8OnwoLCucOlwofCu8OkwrrChsOjwoDCglxuXG4gICAgICAgIGlmICh0aGlzLmlzRG93bikge1xuICAgICAgICAgICAgY29uc3QgbmV3ZGlzWCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLmRpc1g7XG4gICAgICAgICAgICBjb25zdCBuZXdkaXNZID0gZXZlbnQuY2xpZW50WSAtIHRoaXMuZGlzWTtcbiAgICAgICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSBuZXdkaXNYICsgdGhpcy5kaXNMZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IG5ld2Rpc1kgKyB0aGlzLmRpc1RvcCArICdweCc7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cblxuICAgIH1cblxuICAgIC8vIMOnwpvCkcOlwpDCrGRvY3VtZW50w6fCpsK7w6XCvMKAw6TCusKLw6TCu8K2XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJywgWyckZXZlbnQnXSkgb25Nb3VzZXVwKCkge1xuICAgICAgICAvLyDDpcKPwqrDp8KUwqjDpcK9wpPDpcKFwoPDp8K0wqDDp8KnwrvDpcKKwqjDqMK/wofDpMK6wobDr8K8wozDp8KmwrvDpcK8woDDpcKHwr3DpsKVwrDDpMK9wpPDpsKJwo3DpMK8wprDqMKnwqbDpcKPwpHDo8KAwoJcbiAgICAgICAgaWYgKHRoaXMuaXNEb3duKSB7XG4gICAgICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kaXNMZWZ0ID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIHRoaXMuZGlzVG9wID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gw6fCm8KRw6XCkMKsw6XChcKDw6fCtMKgw6fCpsK7w6XCvMKAw6TCusKLw6TCu8K2XG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsnJGV2ZW50J10pIG9uTW91c2VsZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vQ2FsbGVkIG9uY2UsIGJlZm9yZSB0aGUgaW5zdGFuY2UgaXMgZGVzdHJveWVkLlxuICAgICAgICAvL0FkZCAnaW1wbGVtZW50cyBPbkRlc3Ryb3knIHRvIHRoZSBjbGFzcy5cbiAgICAgICAgXG4gICAgfVxufVxuIiwiXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWpkYi1wbGctcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImpkYi1wbGctcGFnaW5hdGlvblwiPlxuICAgIDwhLS0gw6bCgMK7w6bCncKhw6bClcKwIC0tPlxuICAgIDxzcGFuICpuZ0lmPVwiX3Nob3dUb3RhbFwiIGNsYXNzPVwidG90YWwtYm94XCI+XG4gICAgICDDpcKFwrF7e190b3RhbH19w6bCncKhXG4gICAgPC9zcGFuPlxuXG4gICAgPGRpdiBjbGFzcz1cIm9wZXJhdGUtYm94XCI+XG4gICAgICAgIDwhLS0gw6bCncKhw6bClcKww6XCiMKHw6bCjcKiIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLW9wdGlvbnNcIiAqbmdJZj1cIl9zaG93UGFnZVNpemVcIj5cbiAgICAgICAgICAgIDxhcHAtamRiLXBsZy1zZWxlY3QgKG5nTW9kZWxDaGFuZ2UpPVwiZGF0YUNoYW5nZShmYWxzZSwkZXZlbnQpXCIgW2pkYlNpemVdPVwiJ3NtYWxsJ1wiIFtqZGJXaWR0aF09XCInOTBweCdcIiBbKG5nTW9kZWwpXT1cIl9wYWdlU2l6ZVwiIFtqZGJTZWxlY3RMaXN0XT1cIl9vcHRpb25zXCI+PC9hcHAtamRiLXBsZy1zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIMOlwp/CusOmwpzCrMOlwojChsOpwqHCtcOmwqDCt8OlwrzCjyAtLT5cbiAgICAgICAgPHVsICpuZ0lmPVwiIV9qZGJTaW1wbGVcIiBjbGFzcz1cImJhc2UtcGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgPCEtLSDDpMK4worDpMK4woDDqcKhwrXDpsKMwonDqcKSwq4gLS0+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJqZGItcGxnLXBhZ2luYXRpb24tcHJldlwiIHRpdGxlPVwiw6TCuMKKw6TCuMKAw6nCocK1XCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6X2N1cnJlbnQ9PT1fZmlyc3RJbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLF9jdXJyZW50LTEpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJqZGJJY29uIGljb24tcGFnaW5hdGlvbi1wcmV2XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS0gw6nCpsKWw6nCocK1w6bCjMKJw6nCksKuIC0tPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLWZpcnN0XCIgdGl0bGU9XCLDqcKmwpbDqcKhwrVcIiBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6X2N1cnJlbnQ9PT1fZmlyc3RJbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLF9maXJzdEluZGV4KVwiPlxuICAgICAgICAgICAgICAgIHt7X2ZpcnN0SW5kZXh9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS0gw6fCnMKBw6fClcKlw6XCj8K3IC0tPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLWZvcndhcmRcIiAqbmdJZj1cIihfbGFzdEluZGV4ID45KSYmKF9jdXJyZW50LTQ+X2ZpcnN0SW5kZXgpXCIgKGNsaWNrKT1cImp1bXBCZWZvcmUoX3BhZ2VTaXplKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1wYWdpbmF0aW9uLW1vcmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBhZ2luYXRpb24tanVtcC1wcmV2XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS0gw6bCjMKJw6nCksKuIC0tPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLXBhZ2VyXCIgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXNcIiBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6X2N1cnJlbnQ9PT1wYWdlLmluZGV4fVwiIChjbGljayk9XCJkYXRhQ2hhbmdlKHRydWUscGFnZS5pbmRleClcIj5cbiAgICAgICAgICAgICAgICB7e3BhZ2UuaW5kZXh9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS0gw6fCnMKBw6fClcKlw6XCj8K3IC0tPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLWJhY2t3YXJkXCIgKm5nSWY9XCIoX2xhc3RJbmRleCA+OSkmJihfY3VycmVudCs0PF9sYXN0SW5kZXgpXCIgKGNsaWNrKT1cImp1bXBBZnRlcihfcGFnZVNpemUpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBhZ2luYXRpb24tbW9yZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1qdW1wLW5leHRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPCEtLSDDpcKwwr7DqcKhwrXDpsKMwonDqcKSwq4gLS0+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJqZGItcGxnLXBhZ2luYXRpb24tbGFzdFwiICpuZ0lmPVwiKF9sYXN0SW5kZXg+MCkmJihfbGFzdEluZGV4IT09X2ZpcnN0SW5kZXgpXCIgdGl0bGU9XCLDpcKwwr7DqcKhwrVcIiBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6X2N1cnJlbnQ9PT1fbGFzdEluZGV4fVwiIChjbGljayk9XCJkYXRhQ2hhbmdlKHRydWUsX2xhc3RJbmRleClcIj5cbiAgICAgICAgICAgICAgICB7e19sYXN0SW5kZXh9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS0gw6TCuMKLw6TCuMKAw6nCocK1w6bCjMKJw6nCksKuIC0tPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLW5leHRcIiB0aXRsZT1cIsOkwrjCi8OkwrjCgMOpwqHCtVwiIFtuZ0NsYXNzXT1cInsnZGlzYWJsZWQnOl9jdXJyZW50PT09X2xhc3RJbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLF9jdXJyZW50KzEpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJqZGJJY29uIGljb24tcGFnaW5hdGlvbi1uZXh0XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPCEtLSDDp8KuwoDDpcKNwpXDpcKIwobDqcKhwrXDpsKgwrfDpcK8wo8gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGUtcGFnaW5hdGlvblwiICpuZ0lmPVwiX2pkYlNpbXBsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYm94XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBhZ2luYXRpb24tZmlyc3RcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzpfY3VycmVudD09PV9maXJzdEluZGV4fVwiIChjbGljayk9XCJkYXRhQ2hhbmdlKHRydWUsX2ZpcnN0SW5kZXgpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1wYWdpbmF0aW9uLXByZXZcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzpfY3VycmVudD09PV9maXJzdEluZGV4fVwiIChjbGljayk9XCJkYXRhQ2hhbmdlKHRydWUsX2N1cnJlbnQtMSlcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXItYm94XCI+XG4gICAgICAgICAgICAgICAge3tfY3VycmVudH19IC8ge3tfbGFzdEluZGV4fX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWJveFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1wYWdpbmF0aW9uLW5leHRcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzpfY3VycmVudD09PV9sYXN0SW5kZXh9XCIgKGNsaWNrKT1cImRhdGFDaGFuZ2UodHJ1ZSxfY3VycmVudCsxKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1sYXN0XCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6X2N1cnJlbnQ9PT1fbGFzdEluZGV4fVwiIChjbGljayk9XCJkYXRhQ2hhbmdlKHRydWUsX2xhc3RJbmRleClcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gw6XCv8Krw6nCgMKfw6jCt8Kzw6jCvcKsIC0tPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiX3Nob3dRdWlja0p1bXBcIiBjbGFzcz1cInF1aWNrLWp1bXBlclwiPlxuICAgICAgICAgICAgw6fCrMKsXG4gICAgICAgICAgICA8aW5wdXQgI2lucHV0SnVtcCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwicXVpY2tKdW1wUGFnZVwiIChrZXl1cC5lbnRlcik9XCJxdWlja0p1bXAoKVwiIGFwcE9ubHlOdW1iZXI9XCJ0cnVlXCI+IMOpwqHCtVxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicXVpY2tKdW1wKClcIj7DqMK3wrPDqMK9wqw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLmpkYi1wbGctcGFnaW5hdGlvbntoZWlnaHQ6MjRweDtkaXNwbGF5OmlubGluZS1ibG9ja30uamRiLXBsZy1wYWdpbmF0aW9uIC50b3RhbC1ib3h7ZmxvYXQ6bGVmdDttYXJnaW4tcmlnaHQ6MzBweDtoZWlnaHQ6MjRweDtsaW5lLWhlaWdodDoyNHB4O2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiMzMjMyMzN9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3h7ZmxvYXQ6cmlnaHR9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmpkYi1wbGctcGFnaW5hdGlvbi1vcHRpb25ze2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjMwcHh9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbntmbG9hdDpsZWZ0O292ZXJmbG93OmhpZGRlbn0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIGxpe3Bvc2l0aW9uOnJlbGF0aXZlO2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjVweDtwYWRkaW5nOjAgNXB4O2hlaWdodDoyNHB4O21pbi13aWR0aDoyNHB4O2xpbmUtaGVpZ2h0OjI0cHg7dGV4dC1hbGlnbjpjZW50ZXI7Ym9yZGVyLXJhZGl1czoycHg7Y29sb3I6IzMyMzIzMztib3JkZXI6MXB4IHNvbGlkICNhZmIwYjM7Y3Vyc29yOnBvaW50ZXI7LW1vei11c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2JhY2tncm91bmQ6I2ZmZn0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5kaXNhYmxlZHtiYWNrZ3JvdW5kOiNmMGYxZjU7Y29sb3I6I2JmYzBjNDtib3JkZXI6MXB4IHNvbGlkICNlMWUyZTZ9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWJhY2t3YXJkLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1mb3J3YXJke2JvcmRlcjpub25lO3BhZGRpbmc6MDtiYWNrZ3JvdW5kOjAgMH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tYmFja3dhcmQgLmljb24tcGFnaW5hdGlvbi1qdW1wLW5leHQsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWJhY2t3YXJkIC5pY29uLXBhZ2luYXRpb24tanVtcC1wcmV2LC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1mb3J3YXJkIC5pY29uLXBhZ2luYXRpb24tanVtcC1uZXh0LC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1mb3J3YXJkIC5pY29uLXBhZ2luYXRpb24tanVtcC1wcmV2e2NvbG9yOiMzZjY5ZjI7ZGlzcGxheTpub25lfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1mb3J3YXJkOmhvdmVyIC5pY29uLXBhZ2luYXRpb24tanVtcC1wcmV2e2Rpc3BsYXk6YmxvY2t9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWZvcndhcmQ6aG92ZXIgLmljb24tcGFnaW5hdGlvbi1tb3Jle2Rpc3BsYXk6bm9uZX0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tYmFja3dhcmQ6aG92ZXIgLmljb24tcGFnaW5hdGlvbi1qdW1wLW5leHR7ZGlzcGxheTpibG9ja30uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tYmFja3dhcmQ6aG92ZXIgLmljb24tcGFnaW5hdGlvbi1tb3Jle2Rpc3BsYXk6bm9uZX0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tZmlyc3Q6aG92ZXIsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWxhc3Q6aG92ZXIsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLW5leHQ6aG92ZXIsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLXBhZ2VyOmhvdmVyLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1wcmV2OmhvdmVye2NvbG9yOiM0ZDc2ZmY7Ym9yZGVyOjFweCBzb2xpZCAjNGQ3NmZmfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmFjdGl2ZSwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5hY3RpdmU6aG92ZXJ7YmFja2dyb3VuZDojNGQ3NmZmO2NvbG9yOiNmZmY7Ym9yZGVyOm5vbmV9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLW5leHQsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLXByZXZ7cGFkZGluZzowfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1uZXh0IC5qZGJJY29uLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1wcmV2IC5qZGJJY29ue2ZvbnQtc2l6ZToyMnB4fS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbntmbG9hdDpsZWZ0O292ZXJmbG93OmhpZGRlbn0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLmNlbnRlci1ib3gsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5sZWZ0LWJveCwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLnJpZ2h0LWJveHtvdmVyZmxvdzpoaWRkZW47ZmxvYXQ6bGVmdH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLmNlbnRlci1ib3ggc3BhbiwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLmxlZnQtYm94IHNwYW4sLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5yaWdodC1ib3ggc3BhbntmbG9hdDpsZWZ0O2xpbmUtaGVpZ2h0OjI0cHg7dGV4dC1hbGlnbjpjZW50ZXI7aGVpZ2h0OjI0cHg7d2lkdGg6MjRweH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLmNlbnRlci1ib3ggc3BhbjpmaXJzdC1jaGlsZCwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLmxlZnQtYm94IHNwYW46Zmlyc3QtY2hpbGQsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5yaWdodC1ib3ggc3BhbjpmaXJzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MXB4fS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAuY2VudGVyLWJveCAuZGlzYWJsZWQsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5sZWZ0LWJveCAuZGlzYWJsZWQsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5yaWdodC1ib3ggLmRpc2FibGVke2NvbG9yOiNkN2Q4ZGJ9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5jZW50ZXItYm94IHNwYW46aG92ZXIsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5sZWZ0LWJveCBzcGFuOmhvdmVyLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAucmlnaHQtYm94IHNwYW46aG92ZXJ7Y29sb3I6IzRkNzZmZn0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLmNlbnRlci1ib3h7d2lkdGg6NTBweDtoZWlnaHQ6MjRweDtsaW5lLWhlaWdodDoyNHB4O3RleHQtYWxpZ246Y2VudGVyfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5xdWljay1qdW1wZXJ7ZmxvYXQ6bGVmdDttYXJnaW4tbGVmdDoyMHB4fS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5xdWljay1qdW1wZXIgYnV0dG9uLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5xdWljay1qdW1wZXIgaW5wdXR7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6NDBweDtoZWlnaHQ6MjRweDtib3JkZXItcmFkaXVzOjNweDtib3JkZXI6MXB4IHNvbGlkICNlMWUyZTY7b3V0bGluZTowfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5xdWljay1qdW1wZXIgYnV0dG9ue21hcmdpbi1sZWZ0OjE1cHg7ZmxvYXQ6cmlnaHR9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnF1aWNrLWp1bXBlciBpbnB1dHtpbWUtbW9kZTpkaXNhYmxlZH1gXVxufSlcbmV4cG9ydCBjbGFzcyBKZGJQbGdQYWdpbmF0aW9uQ29tcG9uZW50IHtcbiAgX3RvdGFsOiBudW1iZXI7IC8vIMOmwoDCu8Omwp3CocOmwpXCsFxuICBfY3VycmVudCA9IDE7IC8vIMOlwr3Ck8OlwonCjcOpwqHCtcOnwqDCgcOpwrvCmMOowq7CpMOkwrjCujFcbiAgX3BhZ2VTaXplID0gMTA7IC8vIMOpwrvCmMOowq7CpMOmwp3CocOmwpXCsFxuICBfZmlyc3RJbmRleCA9IDE7ICAvLyDDqcKmwpbDqcKhwrXDqcK7wpjDqMKuwqTDpMK4wroxXG4gIF9sYXN0SW5kZXggPSBJbmZpbml0eTsgIC8vIMOlwrDCvsOpwqHCtcOpwrvCmMOowq7CpMOkwrjCusOmwpfCoMOnwqnCt1xuICBfc2hvd1RvdGFsID0gZmFsc2U7ICAvLyDDpsKYwq/DpcKQwqbDpcKxwpXDp8KkwrrDpsKAwrvDpsKVwrDDr8K8wozDqcK7wpjDqMKuwqTDpMK4wo3DpcKxwpXDp8KkwrpcbiAgX3Nob3dQYWdlU2l6ZSA9IGZhbHNlOyAvLyDDpsKYwq/DpcKQwqbDpcKxwpXDp8KkwrrDqcKhwrXDp8KgwoHDpcKIwofDpsKNwqLDr8K8wozDqcK7wpjDqMKuwqTDpMK4wo3DpcKxwpXDp8KkwrpcbiAgX3Nob3dRdWlja0p1bXAgPSBmYWxzZTsgLy8gw6bCmMKvw6XCkMKmw6XCscKVw6fCpMK6w6XCv8Krw6nCgMKfw6jCt8Kzw6jCvcKsw6/CvMKMw6nCu8KYw6jCrsKkw6TCuMKNw6XCscKVw6fCpMK6XG4gIHBhZ2VzID0gW107ICAvLyDDqcKhwrXDp8KgwoHDpsKVwrDDp8K7woRcbiAgLy8gX29wdGlvbnMgPSBbMTAsIDIwLCAzMCwgNDAsIDUwXTsgLy8gc2VsZWN0w6nCu8KYw6jCrsKkw6bClcKww6fCu8KEXG4gIC8vIHNlbGVjdMOpwrvCmMOowq7CpMOmwpXCsMOnwrvChFxuICBfb3B0aW9ucyA9IFtcbiAgICB7IHZhbHVlOiAxMCwgdGV4dDogJzEww6bCncKhL8OpwqHCtScgfSxcbiAgICB7IHZhbHVlOiAyMCwgdGV4dDogJzIww6bCncKhL8OpwqHCtScgfSxcbiAgICB7IHZhbHVlOiAzMCwgdGV4dDogJzMww6bCncKhL8OpwqHCtScgfSxcbiAgICB7IHZhbHVlOiA0MCwgdGV4dDogJzQww6bCncKhL8OpwqHCtScgfSxcbiAgICB7IHZhbHVlOiA1MCwgdGV4dDogJzUww6bCncKhL8OpwqHCtScgfVxuICBdO1xuXG4gIHF1aWNrSnVtcFBhZ2U6IGFueTsgLy8gw6XCv8Krw6nCgMKfw6jCt8Kzw6jCvcKsw6nCocK1w6fCoMKBXG4gIGhpc1FpY3VrUGFnZTogYW55OyAgLy8gw6XCjsKGw6XCj8Kyw6XCv8Krw6nCgMKfw6jCt8Kzw6jCvcKsw6nCocK1w6fCoMKBXG4gIF9qZGJTaW1wbGUgPSBmYWxzZTsgLy8gw6bCmMKvw6XCkMKmw6TCuMK6w6fCrsKAw6XCjcKVw6XCiMKGw6nCocK1w6/CvMKMw6nCu8KYw6jCrsKkw6TCuMK6w6XCn8K6w6bCnMKsw6XCiMKGw6nCocK1XG5cbiAgQE91dHB1dCgpIGpkYlBhZ2VTaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgIC8vIMOmwp3CocOmwpXCsMOlwojCh8Omwo3CoiAgw6XCkcK9w6XCkMKNw6TCuMKOw6XCscKew6bCgMKnw6fCm8K4w6XChcKzXG4gIEBPdXRwdXQoKSBqZGJQYWdlSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAgLy8gw6nCocK1w6fCoMKBw6XCiMKHw6bCjcKiXG5cbiAgQFZpZXdDaGlsZCgnaW5wdXRKdW1wJykgcHJpdmF0ZSBpbnB1dEp1bXA6IEVsZW1lbnRSZWY7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIC8vIMOmwpjCr8OlwpDCpsOlwrHClcOnwqTCusOmwoDCu8OmwpXCsMOmwqDCh8Onwq3CvlxuICBASW5wdXQoKVxuICBzZXQgamRiU2hvd1RvdGFsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1RvdGFsID0gdGhpcy50b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGpkYlNob3dUb3RhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1RvdGFsO1xuICB9XG5cbiAgLy8gw6bClcKww6bCjcKuw6bCgMK7w6bClcKwXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJUb3RhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgLy8gw6jCi8Klw6TCvMKgw6XChcKlw6XCgMK8w6XCksKMw6XCvcKTw6XCicKNdG90YWzDpMK4woDDqMKHwrTDr8K8wozDpcKIwpnDpMK4wo3DqMKnwqbDpcKPwpHDpsKTwo3DpMK9wpxcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX3RvdGFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3RvdGFsID0gdmFsdWU7XG4gICAgdGhpcy5zZXRQYWdlTm8oKTtcbiAgfVxuXG4gIGdldCBqZGJUb3RhbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbDtcbiAgfVxuXG4gIC8vIGpkYlBhZ2VJbmRleMOkwrjCjl9jdXJyZW50w6XChcKzw6jCgcKUw6/CvMKMw6jCocKow6fCpMK6w6nCocK1w6fCoMKBXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJQYWdlSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9jdXJyZW50ID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPiB0aGlzLl9sYXN0SW5kZXggfHwgdmFsdWUgPCB0aGlzLl9maXJzdEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnQgPSBOdW1iZXIodmFsdWUpO1xuICAgIHRoaXMuc2V0UGFnZU5vKCk7XG4gIH1cblxuICBnZXQgamRiUGFnZUluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnQ7XG4gIH1cblxuICAvLyDDpsKYwq/DpcKQwqbDpcKxwpXDp8KkwrrDpcKIwofDpsKNwqLDpsKdwqHDpsKVwrBzZWxlY3RcbiAgQElucHV0KClcbiAgc2V0IGpkYlNob3dQYWdlU2l6ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dQYWdlU2l6ZSA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBqZGJTaG93UGFnZVNpemUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQYWdlU2l6ZTtcbiAgfVxuXG4gIC8vIMOpwrvCmMOowq7CpMOmwp3CocOmwpXCsFxuICBASW5wdXQoKVxuICBzZXQgamRiUGFnZVNpemUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fcGFnZVNpemUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcGFnZVNpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldFBhZ2VObygpO1xuICB9XG5cbiAgZ2V0IGpkYlBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG5cbiAgLy8gw6nCu8KYw6jCrsKkw6TCuMKLw6bCi8KJw6nCgMKJw6bCi8Kpw6bCncKhw6bClcKww6bClcKww6fCu8KEXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJTaXplT3B0aW9ucyh2YWx1ZSkge1xuICAgIC8vIMOowovCpcOkwrzCoMOlwoXCpcOlwoDCvMOlwpLCjMOlwr3Ck8OlwonCjXRvdGFsw6TCuMKAw6jCh8K0w6/CvMKMw6XCiMKZw6TCuMKNw6jCp8Kmw6XCj8KRw6bCk8KNw6TCvcKcXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLl9vcHRpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gw6XCiMKkw6bClsKtw6bCmMKvw6XCkMKmw6TCuMK6w6bClcKww6fCu8KEXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnNBcnIgPSBbXTtcbiAgICAgIHZhbHVlLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICB2YWx1ZTogZWxlbSxcbiAgICAgICAgICB0ZXh0OiBlbGVtICsgJ8Omwp3CoS/DqcKhwrUnXG4gICAgICAgIH07XG4gICAgICAgIG9wdGlvbnNBcnIucHVzaChvYmopO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9uc0FycjtcbiAgICB9XG4gIH1cblxuICBnZXQgamRiU2l6ZU9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICAvLyDDpsKYwq/DpcKQwqbDpcKxwpXDp8KkwrrDpcK/wqvDqcKAwp/DqMK3wrPDqMK9wqzDqcKhwrXDqcKdwqJcbiAgQElucHV0KClcbiAgc2V0IGpkYlNob3dRdWlja0p1bXAodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93UXVpY2tKdW1wID0gdGhpcy50b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGpkYlNob3dRdWlja0p1bXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dRdWlja0p1bXA7XG4gIH1cblxuICAvLyDDpcKIwobDqcKhwrXDpsKgwrfDpcK8wo9cbiAgQElucHV0KClcbiAgc2V0IGpkYlNpbXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2pkYlNpbXBsZSA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBqZGJTaW1wbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuamRiU2ltcGxlO1xuICB9XG5cbiAgLy8gw6XCiMKbw6XCu8K6w6nCocK1w6fCoMKBXG4gIHNldFBhZ2VObygpIHtcbiAgICAvLyDDpcKQwpHDpMK4worDpcKPwpbDpsKVwrRcbiAgICB0aGlzLl9sYXN0SW5kZXggPSBNYXRoLmNlaWwodGhpcy5fdG90YWwgLyB0aGlzLl9wYWdlU2l6ZSk7XG4gICAgLy8gw6XCpsKCw6bCnsKcw6XCvcKTw6XCicKNw6nCocK1w6fCoMKBw6XCpMKnw6TCusKOw6XCsMK+w6nCocK1w6/CvMKMw6XCiMKZw6fCrcKJw6TCusKOw6XCsMK+w6nCocK1XG4gICAgLy8gaWYgKHRoaXMuX2N1cnJlbnQgPiB0aGlzLl9sYXN0SW5kZXgpIHtcbiAgICAvLyAgIHRoaXMuamRiUGFnZUluZGV4ID0gdGhpcy5fbGFzdEluZGV4O1xuICAgIC8vICAgdGhpcy5qZGJQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLmpkYlBhZ2VJbmRleCk7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgdG1wUGFnZXMgPSBbXTtcblxuICAgIGlmICh0aGlzLl9sYXN0SW5kZXggPD0gOSkge1xuICAgICAgLy8gw6jCi8Klw6bCgMK7w6nCocK1w6bClcKww6TCuMKNw6jCtsKFw6jCv8KHOcOvwrzCjMOlwojCmcOlwoXCqMOpwoPCqMOlwrHClcOnwqTCusOlwpzCqMOpwqHCtcOpwp3CosOkwrjCilxuICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gdGhpcy5fbGFzdEluZGV4IC0gMTsgaSsrKSB7XG4gICAgICAgIHRtcFBhZ2VzLnB1c2goe1xuICAgICAgICAgIGluZGV4OiBpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gK3RoaXMuX2N1cnJlbnQ7XG4gICAgICBsZXQgbGVmdCA9IE1hdGgubWF4KDIsIGN1cnJlbnQgLSAyKTtcbiAgICAgIGxldCByaWdodCA9IE1hdGgubWluKGN1cnJlbnQgKyAyLCB0aGlzLl9sYXN0SW5kZXggLSAxKTtcblxuICAgICAgLy8gw6fCicK5w6bCrsKKw6XCpMKEw6fCkMKGw6bCrcKjw6bClcKww6fCrMKsw6TCusKUw6TCuMKqw6bClcKww6XCksKMw6XCgMKSw6bClcKww6fCrMKsw6TCusKUw6TCuMKqw6bClcKwXG4gICAgICBpZiAoY3VycmVudCA9PT0gNSkge1xuICAgICAgICBsZWZ0ID0gMjtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gdGhpcy5fbGFzdEluZGV4IC0gNCkge1xuICAgICAgICByaWdodCA9IHRoaXMuX2xhc3RJbmRleCAtIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50IC0gMSA8PSAzKSB7XG4gICAgICAgIHJpZ2h0ID0gNztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2xhc3RJbmRleCAtIGN1cnJlbnQgPD0gMykge1xuICAgICAgICBsZWZ0ID0gdGhpcy5fbGFzdEluZGV4IC0gNjtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICB0bXBQYWdlcy5wdXNoKHsgaW5kZXg6IGkgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wYWdlcyA9IHRtcFBhZ2VzO1xuICB9XG5cbiAgLy8gc3RhdHVzw6TCuMK6dHJ1ZcOowqHCqMOnwqTCusOpwqHCtcOnwqDCgcOlwojCh8Omwo3CosOvwrzCjG51bcOowqHCqMOnwqTCusOpwqHCtcOnwqDCgcOvwrzCjGZhbHNlw6jCocKow6fCpMK6w6bCncKhw6bClcKww6XCiMKHw6bCjcKiw6/CvMKMbnVtw6jCocKow6fCpMK6w6bCncKhw6bClcKwXG4gIGRhdGFDaGFuZ2Uoc3RhdHVzOiBib29sZWFuLCBudW06IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGlmIChudW0gPT09IHRoaXMuX2ZpcnN0SW5kZXggLSAxIHx8IG51bSA9PT0gdGhpcy5fbGFzdEluZGV4ICsgMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyDDpsK4woXDp8KpwrrDqMK+wpPDpcKFwqXDpsKhwobDpcKGwoXDpcKuwrlcbiAgICAgIHRoaXMucXVpY2tKdW1wUGFnZSA9ICcnO1xuICAgICAgdGhpcy5qZGJQYWdlSW5kZXggPSBudW07XG4gICAgICB0aGlzLmpkYlBhZ2VJbmRleENoYW5nZS5lbWl0KHRoaXMuamRiUGFnZUluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gw6bCuMKFw6fCqcK6w6jCvsKTw6XChcKlw6bCocKGw6XChsKFw6XCrsK5XG4gICAgICB0aGlzLnF1aWNrSnVtcFBhZ2UgPSAnJztcbiAgICAgIHRoaXMuamRiUGFnZVNpemUgPSBudW07XG4gICAgICB0aGlzLmpkYlBhZ2VTaXplQ2hhbmdlLmVtaXQobnVtKTtcblxuICAgICAgLy8gw6XCiMKHw6bCjcKiw6nCocK1w6bClcKww6TCucKLw6XCkMKOw6nCnMKAw6jCpsKBw6XCsMKGw6nCocK1w6fCoMKBw6nCh8KNw6fCvcKuw6TCuMK6MVxuICAgICAgdGhpcy5qZGJQYWdlSW5kZXggPSAxO1xuICAgICAgdGhpcy5qZGJQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLmpkYlBhZ2VJbmRleCk7XG4gICAgICB0aGlzLnNldFBhZ2VObygpO1xuICAgIH1cbiAgICAvLyB0aGlzLnNldFBhZ2VObygpO1xuICB9XG5cbiAgLy8gw6fCgsK5w6XCh8K7w6jCt8Kzw6jCvcKsw6bCjMKJw6nCksKuw6XCv8Krw6nCgMKfw6jCt8Kzw6jCvcKsXG4gIHF1aWNrSnVtcCgpIHtcbiAgICAvLyDDqMKLwqXDpsKYwq/DqMK+wpPDpcKFwqXDp8KawoTDqcKhwrXDp8KgwoHDpcKkwqfDpMK6wo7DpsKcwoDDpcKQwo7DpMK4woDDqcKhwrXDqcKhwrXDp8KgwoHDr8K8wozDpcKNwrPDqMK2woXDpcKHwrrDqMKMwoPDpcKbwrTDpMK4wo3DpcKtwpjDpcKcwqjDr8K8wozDpcKIwpnDpsK4woXDp8KpwrrDqcKhwrXDp8KgwoHDr8K8wozDpcK5wrbDpMK9wr/DqMK+wpPDpcKFwqXDpsKhwobDqMKOwrfDpcKPwpbDp8KEwqbDp8KCwrlcbiAgICBpZiAodGhpcy5xdWlja0p1bXBQYWdlID4gdGhpcy5fbGFzdEluZGV4KSB7XG4gICAgICB0aGlzLmlucHV0SnVtcC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLnF1aWNrSnVtcFBhZ2UgPSAnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDDqMKLwqXDqMK+wpPDpcKFwqXDpMK4wrrDp8KpwrrDr8K8wozDpcKIwpnDpMK4wo3DqMKDwr3DqMK3wrPDqMK9wqxcbiAgICBpZiAoIXRoaXMucXVpY2tKdW1wUGFnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuamRiUGFnZUluZGV4ID0gdGhpcy5xdWlja0p1bXBQYWdlO1xuICAgIHRoaXMuamRiUGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5qZGJQYWdlSW5kZXgpO1xuICB9XG5cbiAgLy8gw6fCgsK5w6XCh8K7w6XCt8Kmw6fCrsKtw6XCpMK0KMOkwrjCusOkwrvCgMOkwrnCiMOkwr3Cv8OnwpTCqMOmwp3CocOmwpXCsMOpwpnCpMOkwrvCpTLDpcKRwqIpXG4gIGp1bXBCZWZvcmUocGFnZVNpemUpIHtcbiAgICB0aGlzLmRhdGFDaGFuZ2UodHJ1ZSwgdGhpcy5fY3VycmVudCAtIE1hdGgucm91bmQocGFnZVNpemUgLyAyKSk7XG4gIH1cblxuICAvLyDDp8KCwrnDpcKHwrvDpcKPwrPDp8Kuwq3DpcKkwrRcbiAganVtcEFmdGVyKHBhZ2VTaXplKSB7XG4gICAgdGhpcy5kYXRhQ2hhbmdlKHRydWUsIHRoaXMuX2N1cnJlbnQgKyBNYXRoLnJvdW5kKHBhZ2VTaXplIC8gMikpO1xuICB9XG5cbiAgLy8gw6jCvcKsw6bCjcKiw6TCuMK6Ym9vbGVhbizDpcKNwrPDpcKuwp7Dp8KOwrDDpsKcwonDqMK/wpnDpMK4wqrDpcKtwpfDpsKuwrXDpcKwwrHDqMKuwqTDpMK4wrrDpMK4wrp0cnVlLMOmwrLCocOmwpzCicOlwo3Cs8OkwrjCumZhbHNlXG4gIHRvQm9vbGVhbih2YWx1ZTogYm9vbGVhbiB8IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJycgfHwgKHZhbHVlICYmIHZhbHVlICE9PSAnZmFsc2UnKTtcbiAgfVxuXG4gIC8vIMOmwqDCocOpwqrCjMOmwpjCr8OlwpDCpsOkwrjCusOnwrrCr8OmwpXCsMOlwq3Cl1xuICBpc051bWJlcihvYmopIHtcbiAgICBjb25zdCByZWcgPSAvXlswLTldKiQvO1xuICAgIHJldHVybiByZWcudGVzdChvYmopO1xuICB9XG5cbn1cblxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBidXR0b25TaXplID0gJ3NtYWxsJyB8ICdsYXJnZScgfCAnZGVmYXVsdCc7XG5leHBvcnQgdHlwZSBidXR0b25UeXBlID0gJ3ByaW1hcnknIHwgJ2dyYXknIHwgJ2RhbmdlcicgfCAnYnVsZWxpbmUnIHwgJ3doaXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2FwcC1qZGItcGxnLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYDxpIGNsYXNzPVwiamRiLWljb24tbG9hZGluZyBhY3Rpb25cIiAqbmdJZj1cImxvYWRpbmdcIj48L2k+XG48bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVzOiBbYEAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nQ2lyY2xlezAley13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgbG9hZGluZ0NpcmNsZXswJXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX06aG9zdC5qZGItcGxnLWJ0bntmb250LXdlaWdodDo1MDA7d2hpdGUtc3BhY2U6bm93cmFwO2N1cnNvcjpwb2ludGVyO291dGxpbmU6MH06aG9zdC5qZGItcGxnLWJ0biAuYWN0aW9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX06aG9zdC5qZGItcGxnLWJ0biAuYWN0aW9uOmJlZm9yZXtkaXNwbGF5OmlubGluZS1ibG9jazstd2Via2l0LWFuaW1hdGlvbjoxcyBsaW5lYXIgaW5maW5pdGUgbG9hZGluZ0NpcmNsZTthbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGxvYWRpbmdDaXJjbGV9Omhvc3QuamRiLXBsZy1idG4gLmFjdGlvbjJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMzclKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMzclKX06aG9zdC5sYXJnZXttaW4td2lkdGg6MTIwcHg7bGluZS1oZWlnaHQ6NDBweDtib3JkZXItcmFkaXVzOjRweDtwYWRkaW5nOjAgMTZweH06aG9zdC5kZWZhdWx0e21pbi13aWR0aDoxMDBweDtsaW5lLWhlaWdodDozMHB4O2JvcmRlci1yYWRpdXM6M3B4O3BhZGRpbmc6MCAxMnB4fTpob3N0LnNtYWxse21pbi13aWR0aDo2MHB4O2xpbmUtaGVpZ2h0OjI0cHg7Ym9yZGVyLXJhZGl1czoycHg7cGFkZGluZzowIDEwcHh9Omhvc3Quc21hbGwgLmFjdGlvbnt3aWR0aDoyNHB4O2hlaWdodDoyNHB4fTpob3N0LnByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojM2Y2OWYyO2NvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjM2Y2OWYyfTpob3N0LnByaW1hcnk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNGQ3NmZmO2JvcmRlcjoxcHggc29saWQgIzRkNzZmZn06aG9zdC5wcmltYXJ5OmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMyNjQxOTk7Ym9yZGVyOjFweCBzb2xpZCAjMjY0MTk5fTpob3N0LnByaW1hcnk6ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojYWFiYmYyO2JvcmRlcjoxcHggc29saWQgI2FhYmJmMn06aG9zdC5ncmF5e2JhY2tncm91bmQtY29sb3I6I2YwZjFmNTtjb2xvcjojNTc1NzU3O2JvcmRlcjoxcHggc29saWQgI2Q3ZDhkYn06aG9zdC5ncmF5OmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZn06aG9zdC5ncmF5OmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q4ZGJ9Omhvc3QuZ3JheTpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmMGYxZjV9Omhvc3QuZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2Y4NGE0YTtjb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2Y4NGE0YX06aG9zdC5kYW5nZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjY2O2JvcmRlcjoxcHggc29saWQgI2Y2Nn06aG9zdC5kYW5nZXI6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2MzMjkyOTtib3JkZXI6MXB4IHNvbGlkICNjMzI5Mjl9Omhvc3QuZGFuZ2VyOmRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2U2YmNiYztib3JkZXI6MXB4IHNvbGlkICNlNmJjYmN9Omhvc3QuYnVsZWxpbmV7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMzZjY5ZjI7Ym9yZGVyOjFweCBzb2xpZCAjM2Y2OWYyfTpob3N0LmJ1bGVsaW5lOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ViZjBmZX06aG9zdC5idWxlbGluZTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZDdkOGRifTpob3N0LmJ1bGVsaW5lOmRpc2FibGVke2NvbG9yOiNhZmIwYjM7Ym9yZGVyOjFweCBzb2xpZCAjYWZiMGIzO2JhY2tncm91bmQtY29sb3I6I2YwZjFmNX06aG9zdC53aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzU3NTc1Nztib3JkZXI6MXB4IHNvbGlkICNhZmIwYjN9Omhvc3Qud2hpdGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjBmMWY1fTpob3N0LndoaXRlOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q4ZGJ9Omhvc3Qud2hpdGU6ZGlzYWJsZWR7Y29sb3I6I2FmYjBiMztib3JkZXI6MXB4IHNvbGlkICNhZmIwYjM7YmFja2dyb3VuZC1jb2xvcjojZjBmMWY1fTpob3N0LmxvYWRpbmdfZGlzYWJsZXtiYWNrZ3JvdW5kLWNvbG9yOiNhYWJiZjI7Ym9yZGVyOjFweCBzb2xpZCAjYWFiYmYyO3BvaW50ZXItZXZlbnRzOm5vbmV9YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBKZGJQbGdCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIF9lbDogSFRNTEVsZW1lbnQ7XG4gIG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBfcHJlZml4Q2xzID0gJ2pkYi1wbGctYnRuJztcbiAgc2l6ZTogYnV0dG9uU2l6ZTsgICAgICAgICAgICAvLyBzaXplw6fCmsKEw6XCgMK8ICdzbWFsbCcgw6PCgMKBICdsYXJnZScgw6PCgMKBICdkZWZhdWx0J1xuICB0eXBlOiBidXR0b25UeXBlOyAgICAgICAgICAgIC8vIHR5cGXDp8KawoTDpcKAwrwgJ3ByaW1hcnknIMOjwoDCgSAnZ3JheScgw6PCgMKBICdkYW5nZXInw6PCgMKBJ2J1bGVsaW5lJyDDo8KAwoEnd2hpdGUnXG4gIGxvYWRpbmc6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgZ2V0IGpkYlNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgfVxuICBzZXQgamRiU2l6ZSh2YWx1ZTogYnV0dG9uU2l6ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJ2RlZmF1bHQnO1xuICAgIH1cbiAgICB0aGlzLnNpemUgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbCwgdGhpcy5zaXplKTtcbiAgICB0aGlzLl9zZXRDbGFzc01hcCh0aGlzLmxvYWRpbmcpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGpkYlR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuICBzZXQgamRiVHlwZSh2YWx1ZTogYnV0dG9uVHlwZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJ3ByaW1hcnknO1xuICAgIH1cbiAgICB0aGlzLnR5cGUgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbCwgdGhpcy50eXBlKTtcbiAgICB0aGlzLl9zZXRDbGFzc01hcCh0aGlzLmxvYWRpbmcpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGpkYkxvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGluZztcbiAgfVxuXG4gIHNldCBqZGJMb2FkaW5nKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSA9PT0gJycgfHwgKHZhbHVlICYmIHZhbHVlICE9PSAnZmFsc2UnKTtcbiAgICB0aGlzLmxvYWRpbmcgPSB2YWx1ZTtcbiAgICB0aGlzLl9zZXRDbGFzc01hcCh0aGlzLmxvYWRpbmcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXG4gICAgdGhpcy5fZWwgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwsIHRoaXMuX3ByZWZpeENscyk7XG4gIH1cbiAgX3NldENsYXNzTWFwKGxvYWRpbmcpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbCwgJ3VuZGVmaW5lZCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLCB0aGlzLnNpemUpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLCB0aGlzLnR5cGUpO1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbCwgJ2xvYWRpbmdfZGlzYWJsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbCwgJ2xvYWRpbmdfZGlzYWJsZScpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgT3V0cHV0LFxuICBJbnB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBJbmplY3QsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFRlbXBsYXRlUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFR5cGUsXG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWpkYi1wbGctZGlhbG9nJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IFtuZ0NsYXNzXT1cIl9jdXN0b21DbGFzc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJfbWFza0NsYXNzXCIgW25nQ2xhc3NdPVwieydoaWQnOiFfdmlzaWJsZX1cIiBbc3R5bGUuekluZGV4XT1cIjEwMDBcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiamRiLW1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBbbmdDbGFzc109XCJ7J2hpZCc6IV92aXNpYmxlfVwiIFtuZ1N0eWxlXT1cInsnZGlzcGFseSc6IV92aXNpYmxlfVwiIChjbGljayk9XCJjbG9zZU1vZGFsKCRldmVudClcIiBjbGFzcz1cIl93cmFwQ2xhc3NcIiBbbmdDbGFzc109XCJfd3JhcENsYXNzXCIgW3N0eWxlLnpJbmRleF09XCIxMDAwXCIgW2F0dHIuYXJpYS1tb2RhbElkXT1cIm1vZGFsSWRcIj5cbiAgICAgICAgPGRpdiAjbW9kYWxfY29udGVudCBjbGFzcz1cIm1vZGFsXCIgW0BvcHRpb25zU3RhdGVdPVwiX3N0YXRlXCIgW25nU3R5bGVdPVwiX2JvZHlTdHlsZU1hcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiX2Nsb3NlYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWwtY2xvc2VcIiAoY2xpY2spPVwiY2xpY2tDYW5jZWwoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPHNwYW4gY2xhc3M9XCJtb2RhbC1jbG9zZS14XCI+PC9zcGFuPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tY2xvc2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCIgKm5nSWY9XCJfdGl0bGV8fF90aXRsZVRwbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBbYXR0ci5pZF09XCJtb2RhbElkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e190aXRsZX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIl90aXRsZVRwbHx8ZGVmYXVsdFRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRDb250ZW50Pnt7X2NvbnRlbnR9fTwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJfY29udGVudFRwbHx8ZGVmYXVsdENvbnRlbnRcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI21vZGFsX2NvbXBvbmVudD48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIiAqbmdJZj1cIiFfZm9vdGVySGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmFsdXRGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIV9pc0NvbmZpcm1cIiBhcHAtamRiLXBsZy1idXR0b24gW2pkYlNpemVdPVwiJ2RlZmF1bHQnXCIgW2pkYlR5cGVdPVwiJ3doaXRlJ1wiIChjbGljayk9XCJjbGlja0NhbmNlbCgkZXZlbnQpXCI+PHNwYW4+e3tfY2FuY2VsVGV4dHx8J8Olwo/ClsOmwrbCiCd9fTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhX2lzQ29uZmlybVwiIGNsYXNzPVwicmlnaHQtYnRuXCIgYXBwLWpkYi1wbGctYnV0dG9uIFtqZGJTaXplXT1cIidkZWZhdWx0J1wiIFtqZGJUeXBlXT1cIidwcmltYXJ5J1wiIChjbGljayk9XCJjbGlja09rKCRldmVudClcIj48c3Bhbj57e19va1RleHR8fCfDp8Khwq7DqMKuwqQnfX08L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2lzQ29uZmlybVwiIGNsYXNzPVwicmlnaHQtYnRuXCIgYXBwLWpkYi1wbGctYnV0dG9uIFtqZGJTaXplXT1cIidkZWZhdWx0J1wiIFtqZGJUeXBlXT1cIidwcmltYXJ5J1wiIChjbGljayk9XCJjbGlja09rKCRldmVudClcIiAoY2xpY2spPVwiY2xpY2tPaygkZXZlbnQpXCI+PHNwYW4+e3tfUm9nZXJUZXh0fX08L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJfZm9vdGVyVHBsfHxkZWZhbHV0Rm9vdGVyXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHRhYmluZGV4PVwiMFwiIHN0eWxlPVwid2lkdGg6MHB4O2hlaWdodDowcHg7b3ZlcmZsb3c6aGlkZGVuO1wiPmFhYTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5fbWFza0NsYXNze3Bvc2l0aW9uOmZpeGVkO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNSl9Ll9tYXNrQ2xhc3MuaGlke2Rpc3BsYXk6bm9uZX0uX3dyYXBDbGFzc3twb3NpdGlvbjpmaXhlZDtvdmVyZmxvdzphdXRvO3RvcDowO2xlZnQ6MDtib3R0b206MDtyaWdodDowO3otaW5kZXg6MTAwMDstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDtvdXRsaW5lOjB9Ll93cmFwQ2xhc3MuaGlke2Rpc3BsYXk6bm9uZX0ubW9kYWx7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7dG9wOjUwJTtiYWNrZ3JvdW5kOiNmZmZ9Lm1vZGFsLWhlYWRlcntiYWNrZ3JvdW5kOiNmMGYxZjU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2Q3ZDhkYjtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjNweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czozcHh9Lm1vZGFsLXRpdGxle21hcmdpbjowO2ZvbnQtc2l6ZToxNnB4O2xpbmUtaGVpZ2h0OjQwcHg7Y29sb3I6IzMyMzIzMzt0ZXh0LWFsaWduOmNlbnRlcn0ubW9kYWwtY2xvc2V7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyOm5vbmU7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDtiYWNrZ3JvdW5kOjAgMDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowO3otaW5kZXg6MTA7bGluZS1oZWlnaHQ6MTt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojMDAwO291dGxpbmU6MH0ubW9kYWwtY2xvc2UteHtkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O2xpbmUtaGVpZ2h0OjQwcHg7Zm9udC1zaXplOjE2cHg7YmFja2dyb3VuZC1zaXplOmNvdmVyfS5tb2RhbC1jbG9zZS14OmhvdmVye3RyYW5zaXRpb246Y29sb3IgLjNzIGVhc2U7Y29sb3I6IzAwMH0ubW9kYWwtYm9keXtwYWRkaW5nOjQwcHg7YmFja2dyb3VuZDojZmZmO292ZXJmbG93OmhpZGRlbn0ubW9kYWwtZm9vdGVye3BhZGRpbmc6NDBweCAwO2JhY2tncm91bmQ6I2ZmZjtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHg7dGV4dC1hbGlnbjpjZW50ZXJ9Lm1vZGFsLWZvb3RlciAucmlnaHQtYnRue21hcmdpbi1sZWZ0OjIwcHh9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdvcHRpb25zU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnc2hvd00nLCBzdHlsZSh7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgLy8gZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdoaWRlTScsIHN0eWxlKHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC04MCUpJyxcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAvLyBkaXNwbGF5OiAnbm9uZScsXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdzaG93TSA8PT4gaGlkZU0nLCBhbmltYXRlKCcyMDBtcyBlYXNlLW91dCcpKVxuICAgIF0pXVxufSlcbmV4cG9ydCBjbGFzcyBKZGJQbGdEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIF9jdXN0b21DbGFzcyA9ICcnO1xuICBfbWFza0NsYXNzID0gJyc7XG4gIF9ib2R5U3R5bGVNYXA7XG4gIG1vZGFsSWQ6IG51bWJlcjtcbiAgX3Zpc2libGUgPSBmYWxzZTtcbiAgX3RpdGxlID0gJyc7XG4gIF9jbG9zZWFibGUgPSB0cnVlO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBfY29udGVudDogc3RyaW5nIHwgVHlwZTxhbnk+O1xuICBfY29udGVudFRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIF9hbmltYXRpb25TdGF0dXMgPSAnMTEnO1xuICBfYm9keUNsYXNzOiBzdHJpbmc7XG4gIF93aWR0aCA9ICc0MDBweCc7XG4gIF9mb290ZXJIaWRlID0gZmFsc2U7XG4gIF9pc0NvbmZpcm0gPSBmYWxzZTtcbiAgX29rVGV4dCA9ICcnO1xuICBfY2FuY2VsVGV4dCA9ICcnO1xuICBfUm9nZXJUZXh0ID0gJyc7XG4gIF9zdGF0ZSA9ICdoaWRlTSc7XG4gIF9mb290ZXJUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAVmlld0NoaWxkKCdtb2RhbF9jb250ZW50JykgY29udGVudEVsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdtb2RhbF9jb21wb25lbnQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgYm9keUVsOiBWaWV3Q29udGFpbmVyUmVmO1xuICBAT3V0cHV0KCkgTXZpc2liaWxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBNT25PazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgTU9uQ2FuY2VsOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyDDpcK8wrnDpsKhwobDpsKYwr7DqcKawpBcbiAgQElucHV0KClcbiAgc2V0IE12aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgdmlzaWJsZSA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fdmlzaWJsZSA9PT0gdmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Zpc2libGUgPSB2aXNpYmxlO1xuICAgIHRoaXMuTXZpc2liaWxlQ2hhbmdlLmVtaXQodGhpcy5fdmlzaWJsZSk7XG4gIH1cbiAgZ2V0IE12aXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG4gIC8vIMOpwprCkMOowpfCj2Zvb3RlclxuICBASW5wdXQoKVxuICBzZXQgTWZvb3RlckhpZGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgdmlzaWJsZSA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fdmlzaWJsZSA9PT0gdmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9mb290ZXJIaWRlID0gdmlzaWJsZTtcbiAgfVxuICBnZXQgTWZvb3RlckhpZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mb290ZXJIaWRlO1xuICB9XG4gIC8vIMOmwqDCh8OpwqLCmFxuICBASW5wdXQoKVxuICBzZXQgTXRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgTWNvbnRlbnQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX2NvbnRlbnRUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29udGVudCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgTWZvb3Rlcih2YWx1ZTpzdHJpbmd8VGVtcGxhdGVSZWY8dm9pZD4pe1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKXtcbiAgICAgIHRoaXMuX2Zvb3RlclRwbCA9IHZhbHVlO1xuICAgIH0gXG4gIH1cbiAgXG4gIC8vIMOowofCqsOlwq7CmsOkwrnCicOlwq7CvcOlwrrCplxuICBASW5wdXQoKVxuICBzZXQgTXdpZHRoKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB0aGlzLl93aWR0aCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSArICdweCcgOiB2YWx1ZTtcbiAgfVxuXG4gIC8vIMOlwq7CmsOkwr3CjW1vZGFsw6TCvcKNw6fCvcKuw6XCksKMw6bCoMK3w6XCvMKPXG4gIHNldFN0eWxlKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5jb250ZW50RWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9ib2R5U3R5bGVNYXAgPSB7XG4gICAgICAuLi57IHdpZHRoOiB0aGlzLl93aWR0aCB9XG4gICAgfTtcbiAgfVxuXG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lc2MnLCBbJyRldmVudCddKVxuICBvbkVzYyhlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5jbGlja0NhbmNlbChlKTtcbiAgfVxuXG4gIC8vIMOowofCqsOlwq7CmsOkwrnCicOmwqDCt8OlwrzCj1xuICBASW5wdXQoKVxuICBzZXQgTWNsYXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXN0b21DbGFzcyA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IE1Pa1RleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX29rVGV4dCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBNY2FuY2VsVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2FuY2VsVGV4dCA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBNUm9nZXJUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pc0NvbmZpcm0gPSB0cnVlO1xuICAgIHRoaXMuX1JvZ2VyVGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7IH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG4gIGNyZWF0ZUR5bmFtaWNDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPGFueT4pIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLl9jb250ZW50IGFzIFR5cGU8YW55Pik7XG4gICAgdGhpcy5ib2R5RWwuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuX3Zpc2libGUpIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gJ3Nob3dNJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRlbnRFbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuZm9jdXMoKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gJ2hpZGVNJztcbiAgICB9XG4gIH1cbiAgY2xpY2tDYW5jZWwoZSk6IHZvaWQge1xuICAgIHRoaXMuX3Zpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLl9zdGF0ZSA9ICdoaWRlTSc7XG4gICAgdGhpcy5NT25DYW5jZWwuZW1pdChlKTtcbiAgfVxuICBjbGlja09rKGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5NT25Paykge1xuICAgICAgdGhpcy5NT25Pay5lbWl0KGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl92aXNpYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdGF0ZSA9ICdoaWRlTSc7XG4gICAgfVxuICB9XG4gIGNsb3NlTW9kYWwoZSk6IHZvaWQge1xuICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAnZGlhbG9nJykge1xuICAgICAgdGhpcy5jbGlja0NhbmNlbChlKTtcbiAgICAgIHRoaXMuX3N0YXRlID0gJ2hpZGVNJztcbiAgICB9XG4gIH1cbiAgdG9Cb29sZWFuKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyB8fCAodmFsdWUgJiYgdmFsdWUgIT09IGZhbHNlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBPbmx5TnVtYmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgT25seU51bWJlckRpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG4gIHJlZ2V4U3RyID0gJ15bMC05XSokJztcbiAgQElucHV0KCkgYXBwT25seU51bWJlcjogYm9vbGVhbjtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgY29uc3QgZSA9IDxLZXlib2FyZEV2ZW50PmV2ZW50O1xuICAgIGlmICh0aGlzLmFwcE9ubHlOdW1iZXIpIHtcbiAgICAgIGlmIChbNDYsIDgsIDksIDI3LCAxMywgMTEwLCAxOTBdLmluZGV4T2YoZS5rZXlDb2RlKSAhPT0gLTEgfHxcbiAgICAgICAgLy8gQWxsb3c6IEN0cmwrQVxuICAgICAgICAoZS5rZXlDb2RlID09PSA2NSAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8XG4gICAgICAgIC8vIEFsbG93OiBDdHJsK0NcbiAgICAgICAgKGUua2V5Q29kZSA9PT0gNjcgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fFxuICAgICAgICAvLyBBbGxvdzogQ3RybCtWXG4gICAgICAgIChlLmtleUNvZGUgPT09IDg2ICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHxcbiAgICAgICAgLy8gQWxsb3c6IEN0cmwrWFxuICAgICAgICAoZS5rZXlDb2RlID09PSA4OCAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8XG4gICAgICAgIC8vIEFsbG93OiBob21lLCBlbmQsIGxlZnQsIHJpZ2h0XG4gICAgICAgIChlLmtleUNvZGUgPj0gMzUgJiYgZS5rZXlDb2RlIDw9IDM5KSkge1xuICAgICAgICAvLyBsZXQgaXQgaGFwcGVuLCBkb24ndCBkbyBhbnl0aGluZ1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKTtcbiAgICAgIGNvbnN0IHJlZ0V4ID0gbmV3IFJlZ0V4cCh0aGlzLnJlZ2V4U3RyKTtcbiAgICAgIGlmIChyZWdFeC50ZXN0KGNoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gw6jCp8Kjw6XChsKzw6TCuMKtw6bClsKHw6jCvsKTw6XChcKlw6bCs8KVw6jCvsKTw6XChcKlw6bCscKJw6XCrcKXw6nCl8Kuw6nCosKYXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSkgb25LZXlVcChldmVudCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICB9XG59XG4iLCIvKlxuICDDpMK4wovDpsKLwonDpsKhwobDpcKKwp/DqMKDwr3Dr8K8wppcbiAgw6fCp8KNw6fCscK7w6/CvMKaw6XCjcKVw6nCgMKJw6/CvMKMw6XCpMKaw6nCgMKJw6/CvMKMw6nCgMKJw6XCh8Kgw6nCocK5XG4gIMOmwqDCt8OlwrzCj8OvwrzCmsOpwqvCmMOlwrrCpiBtaWRkbGUgc21hbGwgbGFyZ2VcbiovXG5cbmltcG9ydCB7XG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFJlbmRlcmVyLFxuICBWaWV3Q2hpbGRyZW4sXG4gIE9uQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtamRiLXBsZy1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYDwhLS0gw6XCjcKVw6nCgMKJIC0tPlxuPGRpdiAqbmdJZj1cIl9qZGJNb2RlPT0nY2hvb3NlT25lJ1wiICNpbnB1dERvbSBjbGFzcz1cImpkYi1wbGctc2VsZWN0LW9uZVwiIChjbGljayk9XCJkaWFsb2dTaG93KCRldmVudClcIiBbbmdDbGFzc109XCJfY2xhc3NNYXBcIiBbbmdTdHlsZV09XCJ7J3dpZHRoJzpfd2lkdGh9XCI+XG4gICAgPCEtLSBwbGFjZUhvbGRlciAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiamRiLXBsZy1zZWxlY3QtcGxhY2Vob2xkZXJcIiBbaGlkZGVuXT1cImlucHV0VGV4dCE9JydcIj57e19wbGFjZUhvbGRlcn19PC9kaXY+XG4gICAgPCEtLSDDpcKNwpXDqcKAwokgLS0+XG4gICAgPCEtLSA8c3BhbiBjbGFzcz1cImNob29zZU9uZVwiIFtoaWRkZW5dPVwiaW5wdXRUZXh0PT0nJ1wiPnt7aW5wdXRUZXh0fX08L3NwYW4+IC0tPlxuICAgIDxpbnB1dCBjbGFzcz1cImNob29zZU9uZSBjaG9vc2VPbmVJbnB1dFwiIFtoaWRkZW5dPVwiaW5wdXRUZXh0PT0nJ1wiIHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJpbnB1dFRleHRcIiByZWFkb25seT5cbiAgICA8dWwgI29wdGlvbkxpc3QgW25nQ2xhc3NdPVwieyAnb3B0aW9ucy1zaG93JzpzaG93LCAnb3B0aW9ucy1uby1tYXJnaW4nOiFzcGFjZUZsZXh9IFwiIGNsYXNzPVwib3B0aW9ucyBcIj5cbiAgICAgICAgPCEtLSDDpcKNwpXDqcKAwokgLS0+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF9zZWxlY3RMaXN0IFwiIChjbGljayk9XCJpdGVtKCRldmVudCxvcHRpb24pIFwiIFtuZ0NsYXNzXT1cInthY3RpdmU6bmdNb2RlbFZhbHVlPT09b3B0aW9uW19vcHRpb25WYWx1ZV0sZGlzYWJsZWQ6b3B0aW9uW19qZGJJdGVtRGlzYWJsZWRdID09PSBfamRiU3VyZURpc2FibGVkfSBcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctYm94XCIgKm5nSWY9XCJfc2hvd0ltZ0JveCYmb3B0aW9uLmltZ1VybFwiIFtzcmNdPVwib3B0aW9uLmltZ1VybFwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbWctYm94XCIgKm5nSWY9XCJfc2hvd0ltZ0JveCYmIW9wdGlvbi5pbWdVcmxcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtYm94XCI+e3tfb3B0aW9uVGV4dD09J29wdGlvbic/b3B0aW9uOm9wdGlvbltfb3B0aW9uVGV4dF19fTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDwhLS0gw6bCuMKFw6fCqcK6w6XCm8K+w6bCoMKHIC0tPlxuICAgIDxzcGFuIGNsYXNzPVwiY2xvc2UtaWNvbiBpY29uLWVtcHR5IFwiIFtoaWRkZW5dPVwiIWlzU2hvd0NsZWFyIFwiIChjbGljayk9XCJjbGVhcklucHV0VGV4dCgkZXZlbnQpIFwiPjwvc3Bhbj5cbiAgICA8IS0tIMOlwo3ClcOpwoDCicOmwpfCtsOkwrjCi8OmwovCicOlwpvCvsOmwqDChyAtLT5cbiAgICA8c3BhbiBjbGFzcz1cInNlbGVjdC1pY29uIGljb24tc2VsZWN0LWFycm93IFwiIFtoaWRkZW5dPVwiaXNTaG93Q2xlYXIgXCI+PC9zcGFuPlxuPC9kaXY+XG5cbjwhLS0gw6XCpMKaw6nCgMKJIC0tPlxuPGRpdiAqbmdJZj1cIl9qZGJNb2RlPT0nY2hvb3NlTW9yZScgXCIgI2lucHV0RG9tIGNsYXNzPVwiamRiLXBsZy1zZWxlY3QtbW9yZSBcIiAoY2xpY2spPVwiZGlhbG9nU2hvdygkZXZlbnQpIFwiIFtuZ0NsYXNzXT1cIl9jbGFzc01hcCBcIiBbbmdTdHlsZV09XCJ7ICd3aWR0aCc6X3dpZHRofSBcIj5cbiAgICA8IS0tIHBsYWNlSG9sZGVyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJqZGItcGxnLXNlbGVjdC1wbGFjZWhvbGRlciBcIiBbaGlkZGVuXT1cImlucHV0VGV4dC5sZW5ndGggIT0wIFwiPnt7X3BsYWNlSG9sZGVyfX08L2Rpdj5cbiAgICA8IS0tIMOlwqTCmsOpwoDCiWl0ZW0gLS0+XG4gICAgPHVsIGNsYXNzPVwiY2hvb3NlTW9yZSBcIj5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGlucHV0VGV4dCBcIj5cbiAgICAgICAgICAgIHt7aXRlbS50ZXh0fX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1kZWxldGUgaWNvbi1jbG9zZSBcIiAoY2xpY2spPVwiZGVsZXRlTW9yZUl0ZW0oJGV2ZW50LGl0ZW0pIFwiPjwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDx1bCAjb3B0aW9uTGlzdCBbbmdDbGFzc109XCJ7ICdvcHRpb25zLXNob3cnOnNob3csICdvcHRpb25zLW5vLW1hcmdpbic6IXNwYWNlRmxleH0gXCIgY2xhc3M9XCJvcHRpb25zIFwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJjaG9vc2UtbW9yZSBcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF9zZWxlY3RMaXN0IFwiIChjbGljayk9XCJjaG9vc2VNb3JlKCRldmVudCxvcHRpb24pIFwiIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZSc6bW9yZUluZGV4KG9wdGlvbiksZGlzYWJsZWQ6b3B0aW9uW19qZGJJdGVtRGlzYWJsZWRdID09PSBfamRiU3VyZURpc2FibGVkfSBcIj5cbiAgICAgICAgICAgIDwhLS0ge3tfb3B0aW9uVGV4dD09J29wdGlvbic/b3B0aW9uOm9wdGlvbltfb3B0aW9uVGV4dF19fSAtLT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctYm94XCIgKm5nSWY9XCJfc2hvd0ltZ0JveCYmb3B0aW9uLmltZ1VybFwiIFtzcmNdPVwib3B0aW9uLmltZ1VybFwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbWctYm94XCIgKm5nSWY9XCJfc2hvd0ltZ0JveCYmIW9wdGlvbi5pbWdVcmxcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtYm94XCI+e3tfb3B0aW9uVGV4dD09J29wdGlvbic/b3B0aW9uOm9wdGlvbltfb3B0aW9uVGV4dF19fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIFtoaWRkZW5dPVwiIW1vcmVJbmRleChvcHRpb24pIFwiIGNsYXNzPVwiY2hvb3NlLXJpZ2h0IGljb24tc2VsZWN0ZWQgXCI+PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPCEtLSDDpsK4woXDp8KpwrrDpcKbwr7DpsKgwocgLS0+XG4gICAgPHNwYW4gY2xhc3M9XCJjbG9zZS1pY29uIGljb24tZW1wdHkgXCIgW2hpZGRlbl09XCIhaXNTaG93Q2xlYXIgXCIgKGNsaWNrKT1cImNsZWFySW5wdXRUZXh0KCRldmVudCkgXCI+PC9zcGFuPlxuPC9kaXY+XG5cbjwhLS0gw6nCgMKJw6TCuMKtw6XCh8Kgw6nCocK5IC0tPlxuPGRpdiAqbmdJZj1cIl9qZGJNb2RlPT0nY2hvb3NlTnVtJyBcIiAjaW5wdXREb20gY2xhc3M9XCJqZGItcGxnLXNlbGVjdC1udW0gXCIgKGNsaWNrKT1cImRpYWxvZ1Nob3coJGV2ZW50KSBcIiBbbmdDbGFzc109XCJfY2xhc3NNYXAgXCIgW25nU3R5bGVdPVwieyAnd2lkdGgnOl93aWR0aH0gXCI+XG4gICAgPCEtLSBwbGFjZUhvbGRlciAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiamRiLXBsZy1zZWxlY3QtcGxhY2Vob2xkZXIgXCIgW2hpZGRlbl09XCJpbnB1dFRleHQhPTAgXCI+e3tfcGxhY2VIb2xkZXJ9fTwvZGl2PlxuICAgIDxzcGFuIGNsYXNzPVwiY2hvb3NlLXRpcCBcIiBbaGlkZGVuXT1cImlucHV0VGV4dD09MCBcIj7DpcK3wrLDqcKAwonDpMK4wq17e2lucHV0VGV4dH19w6nCocK5PC9zcGFuPlxuICAgIDx1bCAjb3B0aW9uTGlzdCBbbmdDbGFzc109XCJ7ICdvcHRpb25zLXNob3cnOnNob3csICdvcHRpb25zLW5vLW1hcmdpbic6IXNwYWNlRmxleH0gXCIgY2xhc3M9XCJvcHRpb25zIFwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJjaG9vc2UtbW9yZSBcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF9zZWxlY3RMaXN0IFwiIChjbGljayk9XCJudW1DbGljaygkZXZlbnQsb3B0aW9uKSBcIiBbbmdDbGFzc109XCJ7ICdhY3RpdmUnOm1vcmVJbmRleChvcHRpb24pLGRpc2FibGVkOm9wdGlvbltfamRiSXRlbURpc2FibGVkXSA9PT0gX2pkYlN1cmVEaXNhYmxlZH0gXCI+XG4gICAgICAgICAgICA8IS0tIHt7X29wdGlvblRleHQ9PSdvcHRpb24nP29wdGlvbjpvcHRpb25bX29wdGlvblRleHRdfX0gLS0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWJveFwiICpuZ0lmPVwiX3Nob3dJbWdCb3gmJm9wdGlvbi5pbWdVcmxcIiBbc3JjXT1cIm9wdGlvbi5pbWdVcmxcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW1nLWJveFwiICpuZ0lmPVwiX3Nob3dJbWdCb3gmJiFvcHRpb24uaW1nVXJsXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJveFwiPnt7X29wdGlvblRleHQ9PSdvcHRpb24nP29wdGlvbjpvcHRpb25bX29wdGlvblRleHRdfX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBbaGlkZGVuXT1cIiFtb3JlSW5kZXgob3B0aW9uKSBcIiBjbGFzcz1cImNob29zZS1yaWdodCBpY29uLXNlbGVjdGVkIFwiPjwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDwhLS0gw6bCuMKFw6fCqcK6w6XCm8K+w6bCoMKHIC0tPlxuICAgIDxzcGFuIGNsYXNzPVwiY2xvc2UtaWNvbiBpY29uLWVtcHR5IFwiIFtoaWRkZW5dPVwiIWlzU2hvd0NsZWFyIFwiIChjbGljayk9XCJjbGVhcklucHV0VGV4dCgkZXZlbnQpIFwiPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cInNlbGVjdC1pY29uIGljb24tc2VsZWN0LWFycm93IFwiIFtoaWRkZW5dPVwiaXNTaG93Q2xlYXIgXCI+PC9zcGFuPlxuPC9kaXY+XG5cbjwhLS0gw6nCgcKuw6fCvcKpw6XCscKCIC0tPlxuPGRpdiBjbGFzcz1cImpkYi1wbGctc2VsZWN0LW1hc3RlciBcIiAqbmdJZj1cInNob3cgXCI+PC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5qZGItcGxnLXNlbGVjdC1tb3JlLC5qZGItcGxnLXNlbGVjdC1udW0sLmpkYi1wbGctc2VsZWN0LW9uZXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyMDBweDtib3JkZXI6MXB4IHNvbGlkICNhZmIwYjM7Ym9yZGVyLXJhZGl1czoycHg7YmFja2dyb3VuZDojZmZmO3RleHQtYWxpZ246bGVmdDtjdXJzb3I6cG9pbnRlcn0uamRiLXBsZy1zZWxlY3QtbW9yZSAuamRiLXBsZy1zZWxlY3QtcGxhY2Vob2xkZXIsLmpkYi1wbGctc2VsZWN0LW51bSAuamRiLXBsZy1zZWxlY3QtcGxhY2Vob2xkZXIsLmpkYi1wbGctc2VsZWN0LW9uZSAuamRiLXBsZy1zZWxlY3QtcGxhY2Vob2xkZXJ7Y29sb3I6I2FmYjBiMzstbW96LXVzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucywuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25ze3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93LXk6c2Nyb2xsO3otaW5kZXg6OTk5OTtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVZKDApO3RyYW5zZm9ybTpzY2FsZVkoMCk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgMDt0cmFuc2Zvcm0tb3JpZ2luOjAgMDtsZWZ0Oi0xcHg7Ym9yZGVyOjFweCBzb2xpZCAjYWZiMGIzO3dpZHRoOjEwMCU7bWF4LWhlaWdodDoxOTBweDtiYWNrZ3JvdW5kOiNmZmZ9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgbGksLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyBsaSwuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zIGxpe3BhZGRpbmc6NXB4IDEycHg7bWluLWhlaWdodDozMHB4O2NvbG9yOiMzMjMyMzN9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgbGk6aG92ZXIsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyBsaTpob3ZlciwuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zIGxpOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YwZjFmNTtjb2xvcjojMzIzMjMzfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5vcHRpb25zIGxpIC5jaG9vc2UtcmlnaHQsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyBsaSAuY2hvb3NlLXJpZ2h0LC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnMgbGkgLmNob29zZS1yaWdodHtmbG9hdDpyaWdodDttYXJnaW4tdG9wOi0ycHh9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgbGkgLmltZy1ib3gsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyBsaSAuaW1nLWJveCwuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zIGxpIC5pbWctYm94e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtoZWlnaHQ6MThweDt3aWR0aDoxOHB4fS5qZGItcGxnLXNlbGVjdC1tb3JlIC5vcHRpb25zIGxpIC50ZXh0LWJveCwuamRiLXBsZy1zZWxlY3QtbnVtIC5vcHRpb25zIGxpIC50ZXh0LWJveCwuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zIGxpIC50ZXh0LWJveHtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgLmNob29zZS1tb3JlLC5qZGItcGxnLXNlbGVjdC1udW0gLm9wdGlvbnMgLmNob29zZS1tb3JlLC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnMgLmNob29zZS1tb3Jle21hcmdpbi1ib3R0b206MXB4fS5qZGItcGxnLXNlbGVjdC1tb3JlIC5vcHRpb25zIC5hY3RpdmUsLmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgLmFjdGl2ZTpob3ZlciwuamRiLXBsZy1zZWxlY3QtbnVtIC5vcHRpb25zIC5hY3RpdmUsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyAuYWN0aXZlOmhvdmVyLC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnMgLmFjdGl2ZSwuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zIC5hY3RpdmU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojM2Y2OWYyO2NvbG9yOiNmZmZ9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgLmRpc2FibGVkLC5qZGItcGxnLXNlbGVjdC1udW0gLm9wdGlvbnMgLmRpc2FibGVkLC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnMgLmRpc2FibGVke2JhY2tncm91bmQtY29sb3I6bm9uZTtjb2xvcjojYWZiMGIzO2N1cnNvcjpub3QtYWxsb3dlZH0uamRiLXBsZy1zZWxlY3QtbW9yZSAub3B0aW9ucyAuZGlzYWJsZWQ6aG92ZXIsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyAuZGlzYWJsZWQ6aG92ZXIsLmpkYi1wbGctc2VsZWN0LW9uZSAub3B0aW9ucyAuZGlzYWJsZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpub25lO2NvbG9yOiNhZmIwYjN9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMtc2hvdywuamRiLXBsZy1zZWxlY3QtbnVtIC5vcHRpb25zLXNob3csLmpkYi1wbGctc2VsZWN0LW9uZSAub3B0aW9ucy1zaG93e29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVkoMSk7dHJhbnNmb3JtOnNjYWxlWSgxKX0uamRiLXBsZy1zZWxlY3QtbW9yZSAuY2xvc2UtaWNvbiwuamRiLXBsZy1zZWxlY3QtbnVtIC5jbG9zZS1pY29uLC5qZGItcGxnLXNlbGVjdC1vbmUgLmNsb3NlLWljb257cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6NXB4O3RvcDo1MCU7bWFyZ2luLXRvcDotMTJweDtjb2xvcjojN2Q3ZTgwfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5jbG9zZS1pY29uOmhvdmVyLC5qZGItcGxnLXNlbGVjdC1udW0gLmNsb3NlLWljb246aG92ZXIsLmpkYi1wbGctc2VsZWN0LW9uZSAuY2xvc2UtaWNvbjpob3Zlcntjb2xvcjojMzIzMjMzfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5zZWxlY3QtaWNvbiwuamRiLXBsZy1zZWxlY3QtbnVtIC5zZWxlY3QtaWNvbiwuamRiLXBsZy1zZWxlY3Qtb25lIC5zZWxlY3QtaWNvbntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDo1cHg7dG9wOjUwJTttYXJnaW4tdG9wOi0xMnB4fS5qZGItcGxnLXNlbGVjdC1vbmUgLmNob29zZU9uZXtjb2xvcjojMzMzfS5qZGItcGxnLXNlbGVjdC1vbmUgLmNob29zZU9uZUlucHV0e2JvcmRlcjpub25lO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7cGFkZGluZy1yaWdodDoxOHB4fS5qZGItcGxnLXNlbGVjdC1tb3JlIC5jaG9vc2VNb3JlIGxpLC5qZGItcGxnLXNlbGVjdC1udW0gLmNob29zZU1vcmUgbGl7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0OjVweDtwYWRkaW5nOjAgNXB4O2hlaWdodDoyMnB4O2ZvbnQtc2l6ZToxM3B4O2JvcmRlcjoxcHggc29saWQgI2Q3ZDhkYjtib3JkZXItcmFkaXVzOjJweDtjb2xvcjojMzMzOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uamRiLXBsZy1zZWxlY3QtbW9yZSAuY2hvb3NlTW9yZSBsaSAuaXRlbS1kZWxldGUsLmpkYi1wbGctc2VsZWN0LW51bSAuY2hvb3NlTW9yZSBsaSAuaXRlbS1kZWxldGV7Zm9udC1zaXplOjEycHh9LmpkYi1wbGctc2VsZWN0LWFjdGl2ZXtib3JkZXI6MXB4IHNvbGlkICMzZjY5ZjJ9LmpkYi1wbGctc2VsZWN0LWRpc2FibGVke2JhY2tncm91bmQ6I2YwZjFmNX0uc21hbGx7bWluLWhlaWdodDoyNHB4O3BhZGRpbmc6MnB4IDEwcHg7Zm9udC1zaXplOjEycHh9LnNtYWxsIC5vcHRpb25ze21hcmdpbi10b3A6N3B4fS5zbWFsbCAub3B0aW9ucy1uby1tYXJnaW57bWFyZ2luOjB9Lm1pZGRsZXttaW4taGVpZ2h0OjMwcHg7cGFkZGluZzo1cHggMTBweDtmb250LXNpemU6MTNweH0ubWlkZGxlIC5vcHRpb25ze21hcmdpbi10b3A6MTBweH0ubWlkZGxlIC5vcHRpb25zLW5vLW1hcmdpbnttYXJnaW46MH0ubWlkZGxlIC5jaG9vc2UtdGlwLC5taWRkbGUgLmNob29zZU9uZSwubWlkZGxlIC5qZGItcGxnLXNlbGVjdC1wbGFjZWhvbGRlcntoZWlnaHQ6MThweDtsaW5lLWhlaWdodDoxOHB4fS5taWRkbGUgLmNob29zZS10aXAsLm1pZGRsZSAuY2hvb3NlT25le2Rpc3BsYXk6YmxvY2t9Lm1pZGRsZSAuY2hvb3NlTW9yZSBsaXttYXJnaW4tYm90dG9tOjNweH0ubGFyZ2V7bWluLWhlaWdodDo0MHB4O3BhZGRpbmc6OXB4IDEwcHg7Zm9udC1zaXplOjE0cHh9LmxhcmdlIC5vcHRpb25ze21hcmdpbi10b3A6MTRweH0ubGFyZ2UgLm9wdGlvbnMtbm8tbWFyZ2lue21hcmdpbjowfS5sYXJnZSAuY2hvb3NlLXRpcCwubGFyZ2UgLmNob29zZU9uZSwubGFyZ2UgLmpkYi1wbGctc2VsZWN0LXBsYWNlaG9sZGVye2hlaWdodDoyMHB4O2xpbmUtaGVpZ2h0OjIwcHh9LmxhcmdlIC5jaG9vc2UtdGlwLC5sYXJnZSAuY2hvb3NlT25le2Rpc3BsYXk6YmxvY2t9LmxhcmdlIC5jaG9vc2VNb3JlIGxpe21hcmdpbi1ib3R0b206OHB4fS5qZGItcGxnLXNlbGVjdC1ib3R0b20tbWlkZGxle3BhZGRpbmc6M3B4IDEwcHggMH0uamRiLXBsZy1zZWxlY3QtYm90dG9tLWxhcmdle3BhZGRpbmc6OHB4IDEwcHggMH0uamRiLXBsZy1zZWxlY3QtbWFzdGVye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDAlO2JhY2tncm91bmQ6MCAwO3otaW5kZXg6OTk5OH1gXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgey8vIMOmwrPCqMOlwobCjMOmwojCkMOkwrjCusOowqHCqMOlwo3ClcOmwo7Cp8OkwrvCtlxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBKZGJQbGdTZWxlY3RDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSmRiUGxnU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBfc2VsZWN0TGlzdDogYW55O1xuICBfc2l6ZSA9ICdtaWRkbGUnO1xuICBfd2lkdGg6IHN0cmluZztcbiAgX29wdGlvblRleHQgPSAndGV4dCc7ICAvLyDDqcK7wpjDqMKuwqTDpcKAwrxcbiAgX29wdGlvblZhbHVlID0gJ3ZhbHVlJzsgLy8gw6nCu8KYw6jCrsKkw6XCgMK8XG4gIF9vcHRpb25Qb3NpdGlvbjogc3RyaW5nO1xuICBpc1Nob3dDbGVhciA9IGZhbHNlOyAvLyDDpsKYwq/DpcKQwqbDpcKxwpXDp8KkwrrDpsK4woXDp8Kpwrp4XG4gIF9qZGJDbGVhciA9IGZhbHNlO1xuICBfamRiRGlzYWJsZWQgPSBmYWxzZTsgLy8gw6nCu8KYw6jCrsKkw6bCnMKqw6fCpsKBw6fClMKoXG4gIF9qZGJNb2RlID0gJ2Nob29zZU9uZSc7XG4gIF9wbGFjZUhvbGRlciA9ICfDqMKvwrfDqcKAwonDpsKLwqknO1xuICBfY2hvb3NlTW9yZUFycmF5ID0gW107IC8vIMOlwqTCmsOpwoDCicOpwoDCicOkwrjCrcOlwoXCg8OnwrTCoMOmwpXCsMOnwrvChFxuICBfY2xhc3NNYXAgPSB7fTtcbiAgbGlzdEhlaWdodDogbnVtYmVyO1xuICBzYXZhSGVpZ2h0ID0gdHJ1ZTtcbiAgc3BhY2VGbGV4ID0gdHJ1ZTsgIC8vIMOmwpjCr8OlwpDCpsOmwpzCicOlwonCqcOkwr3CmcOnwqnCusOpwpfCtMOvwrzCjMOpwrvCmMOowq7CpMOmwpzCiVxuICBfc2hvd0ltZ0JveCA9IGZhbHNlOyAvLyDDpMK4wovDpsKLwonDpsKhwobDpsKYwq/DpcKQwqbDpcK4wqbDpcKbwr7Dp8KJwodcbiAgX2pkYkl0ZW1EaXNhYmxlZCA9ICdkaXNhYmxlZCc7IC8vIMOpwrvCmMOowq7CpMOkwrjCumRpc2FibGVkXG4gIF9qZGJTdXJlRGlzYWJsZWQgPSAyOyAvLyDDpMK4wroxw6bCmMKvw6XCkMKvw6fClMKoIDLDpsKYwq/Dp8KmwoHDp8KUwqhcbiAgX2pkYk5vRGlzYWJsZWQgPSAxOyAvLyDDpMK4wroyw6jCocKow6fCpMK6w6TCuMKNw6fCpsKBw6fClMKoXG5cbiAgLy8gw6jCh8Kqw6XCrsKaw6TCucKJw6fCscK7w6XCkMKNXG4gIEBJbnB1dCgpIGpkYkNsYXNzTmFtZSA9ICcnO1xuXG4gIC8vIMOpwoDCicOpwqHCucOkwrjCrcOmwp/CkMOpwqHCucOnwqbCgcOnwpTCqMOlwq3Cl8Omwq7CtVxuICBASW5wdXQoKVxuICBzZXQgamRiSXRlbURpc2FibGVkKHZhbHVlKSB7XG4gICAgdGhpcy5famRiSXRlbURpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGpkYkl0ZW1EaXNhYmxlZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9qZGJJdGVtRGlzYWJsZWQ7XG4gIH1cblxuICAvLyDDqcKAwonDqcKhwrnDpMK4wq3DpsKfwpDDqcKhwrnDp8Khwq7DqMKuwqTDp8KmwoHDp8KUwqhcbiAgQElucHV0KClcbiAgc2V0IGpkYlN1cmVEaXNhYmxlZCh2YWx1ZSkge1xuICAgIHRoaXMuX2pkYlN1cmVEaXNhYmxlZCA9IHZhbHVlO1xuICB9XG4gIGdldCBqZGJTdXJlRGlzYWJsZWQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5famRiU3VyZURpc2FibGVkO1xuICB9XG5cbiAgLy8gLy8gw6nCgMKJw6nCocK5w6TCuMKtw6bCn8KQw6nCocK5w6TCuMKNw6fCpsKBw6fClMKoXG4gIC8vIEBJbnB1dCgpXG4gIC8vIHNldCBqZGJOb0Rpc2FibGVkKHZhbHVlKSB7XG4gIC8vICAgdGhpcy5famRiTm9EaXNhYmxlZCA9IHZhbHVlO1xuICAvLyB9XG4gIC8vIGdldCBqZGJOb0Rpc2FibGVkKCk6IGFueSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX2pkYk5vRGlzYWJsZWQ7XG4gIC8vIH1cblxuICAvLyDDqcKAwonDqcKhwrnDpMK4wq3DpsKfwpDDqcKhwrnDp8Khwq7DqMKuwqTDp8KmwoHDp8KUwqhcbiAgQElucHV0KClcbiAgc2V0IGpkYlBsYWNlSG9sZGVyKHZhbHVlKSB7XG4gICAgdGhpcy5fcGxhY2VIb2xkZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgamRiUGxhY2VIb2xkZXIoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VIb2xkZXI7XG4gIH1cblxuICAvLyDDpsKYwq/DpcKQwqbDqcKcwoDDqMKmwoHDpsKYwr7Dp8KkwrrDpsK4woXDp8KpwrpcbiAgQElucHV0KClcbiAgc2V0IGpkYkNsZWFyKHZhbHVlKSB7XG4gICAgdGhpcy5famRiQ2xlYXIgPSB0aGlzLnRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgZ2V0IGpkYkNsZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9qZGJDbGVhcjtcbiAgfVxuXG4gIC8vIMOkwrjCi8OmwovCicOmwqHChsOmwpXCsMOnwrvChMOvwrzCjMOlwr/ChcOlwobCmVxuICBASW5wdXQoKVxuICBzZXQgamRiU2VsZWN0TGlzdCh2YWx1ZSkge1xuICAgIHRoaXMuX3NlbGVjdExpc3QgPSB2YWx1ZTtcblxuICAgIC8vIMOlwr7CqsOnwo7Cr8OmwpXCsMOnwrvChMOvwrzCjMOlwojCpMOmwpbCrcOmwpjCr8OlwpDCpsOpwpzCgMOowqbCgcOlwrHClcOnwqTCusOlwrjCpsOmwpzCicOlwpvCvsOnwonCh8OkwrjCi8OmwovCicOmwqHChlxuICAgIGlmICh0aGlzLl9zZWxlY3RMaXN0KSB7XG4gICAgICB0aGlzLl9zZWxlY3RMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmltZ1VybCkge1xuICAgICAgICAgIHRoaXMuX3Nob3dJbWdCb3ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZ2V0IGpkYlNlbGVjdExpc3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0TGlzdDtcbiAgfVxuXG4gIC8vIMOkwrjCi8OmwovCicOmwqHChsOlwrDCusOlwq/CuMOvwrzCjMOpwrvCmMOowq7CpMOkwrjCusOpwqvCmMOlwrrCpjMwcHjDr8K8wptzbWFsbMOkwrjCujI0cHgsbGFyZ2XDpMK4wro0MHB4O1xuICBASW5wdXQoKVxuICBzZXQgamRiU2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgamRiU2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgLy8gw6jCh8Kqw6XCrsKaw6TCucKJw6XCrsK9w6XCusKmXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJXaWR0aCh2YWx1ZSkge1xuICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGpkYldpZHRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9XG5cbiAgLy8gw6XCscKVw6fCpMK6w6XCnMKow6nCocK1w6nCncKiw6XChsKFw6XCrsK5w6XCrcKXw6bCrsK1w6XCkMKNw6fCp8KwXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJPcHRpb25UZXh0KHZhbHVlKSB7XG4gICAgdGhpcy5fb3B0aW9uVGV4dCA9IHZhbHVlO1xuICB9XG4gIGdldCBqZGJPcHRpb25UZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvblRleHQ7XG4gIH1cblxuICAvLyDDqMK/wpTDpcKbwp7Dp8K7wplzZXJ2ZcOlwq/CucOlwrrClMOlwq3Cl8Omwq7CtcOlwpDCjcOnwqfCsFxuICBASW5wdXQoKVxuICBzZXQgamRiT3B0aW9uVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl9vcHRpb25WYWx1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBqZGJPcHRpb25WYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25WYWx1ZTtcbiAgfVxuXG4gIC8vIMOkwrjCi8OmwovCicOmwqHChsOnwqbCgcOnwpTCqFxuICBASW5wdXQoKVxuICBzZXQgamRiRGlzYWJsZWQodmFsdWUpIHtcbiAgICB0aGlzLl9qZGJEaXNhYmxlZCA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgamRiRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2pkYkRpc2FibGVkO1xuICB9XG5cbiAgLy8gc2VsZWN0w6bCqMKhw6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6TCuMK6w6XCjcKVw6nCgMKJw6/CvMKMY2hvb3NlTW9yZcOlwqTCmsOpwoDCiVxuICBASW5wdXQoKVxuICBzZXQgamRiTW9kZSh2YWx1ZSkge1xuICAgIHRoaXMuX2pkYk1vZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgamRiTW9kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9qZGJNb2RlO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXREb20nKSBpbnB1dERvbTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnb3B0aW9uTGlzdCcpIG9wdGlvbkxpc3Q6IEVsZW1lbnRSZWY7XG5cbiAgc2hvdyA9IGZhbHNlO1xuICBpbnB1dFRleHQ6IGFueTtcbiAgbmdNb2RlbFZhbHVlID0gJyc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBcblxuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1saWZlLWN5Y2xlLWludGVyZmFjZVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gw6fCgsK5w6XCh8K7w6nCmcKkw6TCuMKLw6bCi8KJw6bCocKGw6TCu8Klw6XCpMKWw6TCvcKNw6fCvcKuw6/CvMKMw6TCuMKLw6bCi8KJw6bCocKGw6nCmsKQw6jCl8KPXG4gICAgdGhpcy5yZW5kZXJlcjIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5pbnB1dERvbS5uYXRpdmVFbGVtZW50LCAnamRiLXBsZy1zZWxlY3QtYWN0aXZlJywgdGhpcy5zaG93KTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl9qZGJDbGVhciAmJiAhdGhpcy5famRiRGlzYWJsZWQpIHtcbiAgICAgIC8vIMOnwpvCkcOlwpDCrMOowr7Ck8OlwoXCpcOmwqHChsOlwoXCg8OnwrTCoMOvwrzCjMOowovCpcOmwpzCicOlwobChcOlwq7CucOmwpfCtsOlwojCmcOmwrvCkcOkwrjCisOmwpjCvsOnwqTCunhcbiAgICAgIHRoaXMucmVuZGVyZXIyLmxpc3Rlbih0aGlzLmlucHV0RG9tLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAvLyDDqMKLwqXDqMK+wpPDpcKFwqXDpsKhwobDpMK4wo3DpcKtwpjDpcKcwqjDpcKGwoXDpcKuwrnDr8K8wozDpcKIwpnDpMK4wo3DpcKBwprDpMK7wrvDpMK9wpXDpsKTwo3DpMK9wpxcblxuICAgICAgICBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU9uZScgfHwgdGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU51bScpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaW5wdXRUZXh0IHx8IHRoaXMuc2hvdykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTW9yZScpIHtcbiAgICAgICAgICBpZiAodGhpcy5pbnB1dFRleHQubGVuZ3RoID09PSAwIHx8IHRoaXMuc2hvdykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNTaG93Q2xlYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RG9tLm5hdGl2ZUVsZW1lbnQsICdqZGItcGxnLXNlbGVjdC1hY3RpdmUnLCB0aGlzLnNob3cpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlbmRlcmVyMi5saXN0ZW4odGhpcy5pbnB1dERvbS5uYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgLy8gw6jCi8Klw6jCvsKTw6XChcKlw6bCocKGw6TCuMKNw6XCrcKYw6XCnMKow6XChsKFw6XCrsK5w6/CvMKMw6XCiMKZw6TCuMKNw6XCgcKaw6TCu8K7w6TCvcKVw6bCk8KNw6TCvcKcXG4gICAgICAgIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlT25lJyB8fCB0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTnVtJykge1xuICAgICAgICAgIGlmICghdGhpcy5pbnB1dFRleHQgfHwgdGhpcy5zaG93KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VNb3JlJykge1xuICAgICAgICAgIGlmICh0aGlzLmlucHV0VGV4dC5sZW5ndGggPT09IDAgfHwgdGhpcy5zaG93KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1Nob3dDbGVhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RG9tLm5hdGl2ZUVsZW1lbnQsICdqZGItcGxnLXNlbGVjdC1hY3RpdmUnLCB0aGlzLnNob3cpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU9uZScpIHtcbiAgICAgIHRoaXMuaW5wdXRUZXh0ID0gJyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTW9yZScpIHtcbiAgICAgIHRoaXMuaW5wdXRUZXh0ID0gW107XG4gICAgfSBlbHNlIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTnVtJykge1xuICAgICAgdGhpcy5pbnB1dFRleHQgPSAwO1xuICAgIH1cbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBzZXRDbGFzc01hcCgpIHtcbiAgICBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU1vcmUnKSB7XG4gICAgICB0aGlzLl9jbGFzc01hcCA9IHtcbiAgICAgICAgW2Ake3RoaXMuX3NpemV9YF06IHRydWUsXG4gICAgICAgIFtgamRiLXBsZy1zZWxlY3QtYm90dG9tLSR7dGhpcy5fc2l6ZX1gXTogdGhpcy5pbnB1dFRleHQubGVuZ3RoICE9PSAwLFxuICAgICAgICBbJ2pkYi1wbGctc2VsZWN0LWRpc2FibGVkJ106IHRoaXMuX2pkYkRpc2FibGVkLFxuICAgICAgICBbdGhpcy5qZGJDbGFzc05hbWVdOiB0cnVlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jbGFzc01hcCA9IHtcbiAgICAgICAgW2Ake3RoaXMuX3NpemV9YF06IHRydWUsXG4gICAgICAgIFsnamRiLXBsZy1zZWxlY3QtZGlzYWJsZWQnXTogdGhpcy5famRiRGlzYWJsZWQsXG4gICAgICAgIFt0aGlzLmpkYkNsYXNzTmFtZV06IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLy8gw6fCgsK5w6XCh8K7eMOvwrzCjMOmwrjChcOnwqnCusOlwobChcOlwq7CuVxuICBjbGVhcklucHV0VGV4dChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlT25lJykge1xuICAgICAgdGhpcy5pbnB1dFRleHQgPSAnJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VNb3JlJykge1xuICAgICAgdGhpcy5pbnB1dFRleHQgPSBbXTtcbiAgICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheSA9IFtdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU51bScpIHtcbiAgICAgIHRoaXMuaW5wdXRUZXh0ID0gMDtcbiAgICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmlzU2hvd0NsZWFyID0gIXRoaXMuaXNTaG93Q2xlYXI7XG5cbiAgICAvLyDDpsK4woXDp8KpwrrDpcKQwo7DqMK+wpPDpcKFwqXDqcKcwoDDqMKmwoHDqcKHwo3DpsKWwrDDpcKRworDp8KfwqXDp8KIwrbDp8K7woTDpMK7wrZcbiAgICB0aGlzLm5nTW9kZWxWYWx1ZSA9ICcnO1xuICAgIHRoaXMub25DaGFuZ2UoJycpO1xuXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLy8gw6fCgsK5w6XCh8K7w6jCvsKTw6XChcKlw6bCocKGw6TCuMKLw6bCi8KJw6jCj8Kcw6XCjcKVw6bCmMK+w6nCmsKQXG4gIGRpYWxvZ1Nob3coZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgLy8gw6jCi8Klw6XCpMKWw6TCvsKnw6fCu8KEw6TCu8K2w6XCkcKKw6fCn8Klw6fCpsKBw6fClMKow6/CvMKMw6XCiMKZw6fCgsK5w6XCh8K7w6bCssKhw6bCnMKJw6TCu8K7w6TCvcKVw6bClcKIw6bCnsKcXG4gICAgaWYgKHRoaXMuX2pkYkRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNTaG93Q2xlYXIgPSBmYWxzZTtcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuaW5wdXREb20ubmF0aXZlRWxlbWVudCwgJ2pkYi1wbGctc2VsZWN0LWFjdGl2ZScsIHRoaXMuc2hvdyk7XG4gICAgdGhpcy5vcHRpb25Qb3NpdGlvbih0aGlzLm9wdGlvbkxpc3QubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICB9XG5cbiAgLy8gw6bCtcKuw6XCscKCw6XCh8K6w6fCjsKww6bCmMKvw6XCnMKow6jCvsKTw6XChcKlw6bCocKGw6TCuMKKw6bClsK5w6jCv8KYw6bCmMKvw6TCuMKLw6bClsK5XG4gIG9wdGlvblBvc2l0aW9uKGxpc3RIZWlnaHQpIHtcbiAgICBjb25zdCBvZmZldFRvcCA9IHRoaXMuZ2V0VG9wKHRoaXMuaW5wdXREb20ubmF0aXZlRWxlbWVudCk7ICAvLyDDpcKFwoPDp8K0wqBvZmZldFRvcFxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKHRoaXMuaW5wdXREb20ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0OyAvLyDDpcKxwo/DpcK5wpXDqcKrwpjDpcK6wqZcbiAgICBjb25zdCBlbGVtSGVpZ2h0ID0gdGhpcy5pbnB1dERvbS5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDsgLy8gw6XChcKDw6fCtMKgw6nCq8KYw6XCusKmXG4gICAgbGV0IHBhZGRpbmdIZWlnaHQ7XG4gICAgaWYgKHRoaXMuamRiU2l6ZSA9PT0gJ3NtYWxsJykge1xuICAgICAgcGFkZGluZ0hlaWdodCA9IDI7XG4gICAgfSBlbHNlIGlmICh0aGlzLmpkYlNpemUgPT09ICdsYXJnZScpIHtcbiAgICAgIHBhZGRpbmdIZWlnaHQgPSA5O1xuICAgIH0gZWxzZSBpZiAodGhpcy5qZGJTaXplID09PSAnbWlkZGxlJykge1xuICAgICAgcGFkZGluZ0hlaWdodCA9IDU7XG4gICAgfVxuICAgIGNvbnN0IGZsZXhIZWlnaHQgPSBjbGllbnRIZWlnaHQgLSBvZmZldFRvcCAtIGVsZW1IZWlnaHQgLSBwYWRkaW5nSGVpZ2h0ICsgc2Nyb2xsVG9wOyAvLyDDpcKJwqnDpMK9wpnDqcKrwpjDpcK6wqZcbiAgICBpZiAoZmxleEhlaWdodCA8IGxpc3RIZWlnaHQpIHtcbiAgICAgIC8vIMOnwqnCusOpwpfCtMOkwrjCjcOowrbCs1xuICAgICAgdGhpcy5zcGFjZUZsZXggPSBmYWxzZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMub3B0aW9uTGlzdC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtLW9yaWdpbicsICcxMDAlIDEwMCUnKTtcbiAgICAgIGlmIChsaXN0SGVpZ2h0IDwgMTg4KSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMub3B0aW9uTGlzdC5uYXRpdmVFbGVtZW50LCAndG9wJywgLSBsaXN0SGVpZ2h0IC0gNSArICdweCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5vcHRpb25MaXN0Lm5hdGl2ZUVsZW1lbnQsICd0b3AnLCAtMTkwIC0gcGFkZGluZ0hlaWdodCArICdweCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNwYWNlRmxleCA9IHRydWU7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLm9wdGlvbkxpc3QubmF0aXZlRWxlbWVudCwgJ3RvcCcsICcnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMub3B0aW9uTGlzdC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtLW9yaWdpbicsICcwJSAwJScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIMOowofCqsOlwq7CmsOkwrnCicOowqHCqMOlwo3ClSDDpMK4wo7Dp8KIwrbDp8K7woTDpMK7wrbDp8KawoRuZ01vZGVsw6fCu8KRw6XCrsKaw6jCtcK3w6bCncKlXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubmdNb2RlbFZhbHVlID0gdmFsdWU7XG5cbiAgICAvLyDDqMKLwqXDpsKcwonDpcKIwp3DpcKnwovDqcKhwrnDr8K8wozDpcKIwpnDqcKcwoDDqMKmwoHDpcKkwoTDp8KQwobDpMK4woDDpMK4wotcbiAgICAvLyBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU9uZScpIHtcbiAgICAvLyAgIHRoaXMuZm9yT25lU3RhcnQodmFsdWUpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU1vcmUnKSB7XG4gICAgLy8gICB0aGlzLmZvck1vcmVTdGFydCh2YWx1ZSk7XG4gICAgLy8gICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTnVtJykge1xuICAgIC8vICAgdGhpcy5mb3JOdW1TdGFydCh2YWx1ZSk7XG4gICAgLy8gfVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gw6jCi8Klw6TCvMKgw6XChcKlw6XCgMK8w6TCuMK6bnVsbMOvwrzCjMOlwojCmcOmwrjChcOnwqnCusOmwpXCsMOmwo3CrlxuICAgICAgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VNb3JlJykge1xuICAgICAgICB0aGlzLmlucHV0VGV4dCA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbnB1dFRleHQgPSAnJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VPbmUnKSB7XG4gICAgICAgIHRoaXMuZm9yT25lU3RhcnQodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTW9yZScpIHtcbiAgICAgICAgdGhpcy5mb3JNb3JlU3RhcnQodmFsdWUpO1xuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VOdW0nKSB7XG4gICAgICAgIHRoaXMuZm9yTnVtU3RhcnQodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLy8gw6XCjcKVw6nCgMKJw6/CvMKMw6jCi8Klw6bCnMKJw6XCiMKdw6XCp8KLw6nCgMKJw6nCocK5w6/CvMKMw6XCiMKZw6nCgcKNw6XCjsKGw6bClcKww6fCu8KEXG4gIGZvck9uZVN0YXJ0KHZhbHVlKSB7XG4gICAgdGhpcy5fc2VsZWN0TGlzdC5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgaWYgKGVsZW1bdGhpcy5fb3B0aW9uVmFsdWVdID09PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLmlucHV0VGV4dCA9IGVsZW1bdGhpcy5fb3B0aW9uVGV4dF07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyDDpcKkwprDqcKAwonDr8K8wozDqMKLwqXDpsKcwonDpcKIwp3DpcKnwovDpcKAwrzDpcKIwpnDqcKBwo3DpcKOwobDpsKVwrDDp8K7woRcbiAgZm9yTW9yZVN0YXJ0KHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpO1xuXG4gICAgdmFsdWUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHRoaXMuX3NlbGVjdExpc3QuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgaWYgKGVsZW1bdGhpcy5fb3B0aW9uVmFsdWVdID09PSBpdGVtKSB7XG4gICAgICAgICAgLy8gaW5wdXRUZXh0w6TCuMK6w6jCvsKTw6XChcKlw6bCocKGw6TCuMKtw6XCscKVw6fCpMK6w6fCmsKEw6XChsKFw6XCrsK5XG4gICAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuX29wdGlvblRleHQ7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9vcHRpb25WYWx1ZTtcbiAgICAgICAgICB0aGlzLmlucHV0VGV4dC5wdXNoKHtcbiAgICAgICAgICAgIHRleHQ6IGVsZW1bdGhpcy5fb3B0aW9uVGV4dF0sXG4gICAgICAgICAgICB2YWx1ZTogZWxlbVt0aGlzLl9vcHRpb25WYWx1ZV1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIHRoaXMuX2Nob29zZU1vcmVBcnJhecOkwrjCusOkwrzCoMOlwofCusOlwo7Cu8OnwprChMOmwpXCsMOmwo3CrlxuICAgICAgICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheS5wdXNoKGVsZW1bdGhpcy5fb3B0aW9uVmFsdWVdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gw6nCgMKJw6XCh8Kgw6nCocK5XG4gIGZvck51bVN0YXJ0KHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpO1xuICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICB0aGlzLl9zZWxlY3RMaXN0LmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGlmIChlbGVtW3RoaXMuX29wdGlvblZhbHVlXSA9PT0gaXRlbSkge1xuICAgICAgICAgIHRoaXMuaW5wdXRUZXh0Kys7XG4gICAgICAgICAgdGhpcy5fY2hvb3NlTW9yZUFycmF5LnB1c2goZWxlbVt0aGlzLl9vcHRpb25WYWx1ZV0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyDDpcKNwpXDqcKAwonDpsKfwpDDpMK4woDDpcKFwoPDp8K0wqDDp8KCwrnDpcKHwrtcbiAgaXRlbShlLCBpdGVtKSB7XG4gICAgLy8gw6nCmMK7w6bCrcKiw6TCusKLw6TCu8K2w6XChsKSw6bCs8KhXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIC8vIMOlwojCpMOmwpbCrXNob3fDpsKYwq/DpcKQwqbDpMK4wrp0cnVlXG4gICAgaWYgKCF0aGlzLnNob3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gw6XCiMKkw6bClsKtw6jCr8Klw6nCocK5w6bCmMKvw6XCkMKmw6XCj8Kvw6fCgsK5w6XCh8K7XG4gICAgaWYgKGl0ZW1bdGhpcy5famRiSXRlbURpc2FibGVkXSA9PT0gdGhpcy5famRiU3VyZURpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dFRleHQgPSBpdGVtW3RoaXMuX29wdGlvblRleHRdO1xuICAgIHRoaXMuc2hvdyA9ICF0aGlzLnNob3c7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5pbnB1dERvbS5uYXRpdmVFbGVtZW50LCAnamRiLXBsZy1zZWxlY3QtYWN0aXZlJywgdGhpcy5zaG93KTtcblxuICAgIHRoaXMubmdNb2RlbFZhbHVlID0gaXRlbVt0aGlzLl9vcHRpb25WYWx1ZV07XG4gICAgdGhpcy5vbkNoYW5nZShpdGVtW3RoaXMuX29wdGlvblZhbHVlXSk7XG4gIH1cblxuICAvLyDDpcKkwprDqcKAwonDpcKFwoPDp8K0wqDDp8KCwrnDpcKHwrtcbiAgY2hvb3NlTW9yZShlLCBpdGVtKSB7XG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICAvLyDDqcKYwrvDpsKtwqLDpMK6wovDpMK7wrbDpcKGwpLDpsKzwqFcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgLy8gw6XCiMKkw6bClsKtc2hvd8OmwpjCr8OlwpDCpsOkwrjCunRydWVcbiAgICBpZiAoIXRoaXMuc2hvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIMOlwojCpMOmwpbCrcOowq/CpcOpwqHCucOmwpjCr8OlwpDCpsOlwo/Cr8OnwoLCucOlwofCu1xuICAgIGlmIChpdGVtW3RoaXMuX2pkYkl0ZW1EaXNhYmxlZF0gPT09IHRoaXMuX2pkYlN1cmVEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIMOlwojCpMOmwpbCrcOmwpjCr8OlwpDCpsOlwq3CmMOlwpzCqFxuICAgIHRoaXMuaW5wdXRUZXh0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudFt0aGlzLl9vcHRpb25WYWx1ZV0gPT09IGl0ZW1bdGhpcy5fb3B0aW9uVmFsdWVdKSB7XG4gICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZmxhZykge1xuICAgICAgdGhpcy5kZWxldGVNb3JlSXRlbShlLCBpdGVtKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpbnB1dFRleHTDpMK4wrrDqMK+wpPDpcKFwqXDpsKhwobDpMK4wq3DpcKxwpXDp8KkwrrDp8KawoTDpcKGwoXDpcKuwrlcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5fb3B0aW9uVGV4dDtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX29wdGlvblZhbHVlO1xuICAgIHRoaXMuaW5wdXRUZXh0LnB1c2goe1xuICAgICAgdGV4dDogaXRlbVt0aGlzLl9vcHRpb25UZXh0XSxcbiAgICAgIHZhbHVlOiBpdGVtW3RoaXMuX29wdGlvblZhbHVlXVxuICAgIH0pO1xuXG4gICAgLy8gdGhpcy5fY2hvb3NlTW9yZUFycmF5w6TCuMK6w6TCvMKgw6XCh8K6w6XCjsK7w6fCmsKEw6bClcKww6bCjcKuXG4gICAgdGhpcy5fY2hvb3NlTW9yZUFycmF5LnB1c2goaXRlbVt0aGlzLl9vcHRpb25WYWx1ZV0pO1xuICAgIHRoaXMubmdNb2RlbFZhbHVlID0gdGhpcy5fY2hvb3NlTW9yZUFycmF5LnRvU3RyaW5nKCk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLl9jaG9vc2VNb3JlQXJyYXkpO1xuICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLy8gw6nCgMKJw6TCuMKtw6XCpMKaw6XCsMKRw6nCocK5bGnDp8KCwrnDpcKHwrtcbiAgbnVtQ2xpY2soZSwgaXRlbSkge1xuICAgIGxldCBmbGFnID0gZmFsc2U7XG4gICAgLy8gw6nCmMK7w6bCrcKiw6TCusKLw6TCu8K2w6XChsKSw6bCs8KhXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIC8vIMOlwojCpMOmwpbCrXNob3fDpsKYwq/DpcKQwqbDpMK4wrp0cnVlXG4gICAgaWYgKCF0aGlzLnNob3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDDpcKIwqTDpsKWwq3DqMKvwqXDqcKhwrnDpsKYwq/DpcKQwqbDpcKPwq/Dp8KCwrnDpcKHwrtcbiAgICBpZiAoaXRlbVt0aGlzLl9qZGJJdGVtRGlzYWJsZWRdID09PSB0aGlzLl9qZGJTdXJlRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDDpcKIwqTDpsKWwq3DpsKYwq/DpcKQwqbDp8KCwrnDpcKHwrvDqMK/wodcbiAgICB0aGlzLl9jaG9vc2VNb3JlQXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50ID09PSBpdGVtW3RoaXMuX29wdGlvblZhbHVlXSkge1xuICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY2hvb3NlTW9yZUFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZmxhZykge1xuICAgICAgdGhpcy5pbnB1dFRleHQtLTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0VGV4dCsrO1xuICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgdGhpcy5fY2hvb3NlTW9yZUFycmF5LnB1c2goaXRlbVt0aGlzLl9vcHRpb25WYWx1ZV0pO1xuICAgIHRoaXMubmdNb2RlbFZhbHVlID0gdGhpcy5fY2hvb3NlTW9yZUFycmF5LnRvU3RyaW5nKCk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLl9jaG9vc2VNb3JlQXJyYXkpO1xuICB9XG5cbiAgLy8gw6XCiMKkw6bClsKtw6bCn8KQw6TCuMKAw6nCocK5w6bCmMKvw6XCkMKmw6XCrcKYw6XCnMKow6TCusKOaW5wdXRUZXh0w6TCuMKtXG4gIG1vcmVJbmRleChpdGVtKSB7XG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICB0aGlzLl9jaG9vc2VNb3JlQXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50ID09PSBpdGVtW3RoaXMuX29wdGlvblZhbHVlXSkge1xuICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmbGFnO1xuICB9XG5cbiAgLy8gw6XCiMKgw6nCmcKkw6bCn8KQw6TCuMKAw6nCocK5XG4gIGRlbGV0ZU1vcmVJdGVtKGUsIGl0ZW0pIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLl9qZGJEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXRUZXh0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudFt0aGlzLl9vcHRpb25WYWx1ZV0gPT09IGl0ZW1bdGhpcy5fb3B0aW9uVmFsdWVdKSB7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgPT09IGl0ZW1bdGhpcy5fb3B0aW9uVmFsdWVdKSB7XG4gICAgICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5uZ01vZGVsVmFsdWUgPSB0aGlzLl9jaG9vc2VNb3JlQXJyYXkudG9TdHJpbmcoKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuX2Nob29zZU1vcmVBcnJheSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLy8gw6jCvcKsw6bCjcKiw6TCuMK6Ym9vbGVhbizDpcKNwrPDpcKuwp7Dp8KOwrDDpsKcwonDqMK/wpnDpMK4wqrDpcKtwpfDpsKuwrXDpcKwwrHDqMKuwqTDpMK4wrrDpMK4wrp0cnVlLMOmwrLCocOmwpzCicOlwo3Cs8OkwrjCumZhbHNlXG4gIHRvQm9vbGVhbih2YWx1ZTogYm9vbGVhbiB8IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJycgfHwgKHZhbHVlICYmIHZhbHVlICE9PSAnZmFsc2UnKTtcbiAgfVxuXG4gIC8vIMOowq7CocOnwq7Cl8Omwp/CkMOlwoXCg8OnwrTCoMOnwprChG9mZmV0VG9wXG4gIGdldFRvcChlKSB7XG4gICAgbGV0IG9mZnNldCA9IGUub2Zmc2V0VG9wO1xuICAgIGlmIChlLm9mZnNldFBhcmVudCAhPSBudWxsKSB7XG4gICAgICAvL8OowqfCo8Omwp7CkHRyYW5zbGF0ZVlcbiAgICAgIGlmIChlLnN0eWxlLnRyYW5zZm9ybSkge1xuICAgICAgICBsZXQgcmV0ID0gdGhpcy5wYXJzZVRyYW5zbGF0ZVkoZS5zdHlsZS50cmFuc2Zvcm0pO1xuICAgICAgICBvZmZzZXQgKz0gcmV0LmlzUGVyY2VudCA/IGUuY2xpZW50SGVpZ2h0ICogcmV0LnRyYW5zbGF0ZVkgLyAxMDAgOiByZXQudHJhbnNsYXRlWTtcbiAgICAgIH1cbiAgICAgIG9mZnNldCArPSB0aGlzLmdldFRvcChlLm9mZnNldFBhcmVudCk7XG4gICAgfVxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICAvLyDDqMKuwqHDp8KuwpfDpsKfwpDDpcKFwoPDp8K0wqDDp8KawoRzY3JvbGxUb3BcbiAgZ2V0U2Nyb2xsVG9wKGUpIHtcbiAgICBsZXQgb2Zmc2V0ID0gZS5zY3JvbGxUb3A7XG4gICAgaWYgKGUucGFyZW50RWxlbWVudCAhPSBudWxsKSB7XG4gICAgICBvZmZzZXQgKz0gdGhpcy5nZXRTY3JvbGxUb3AoZS5wYXJlbnRFbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIC8vw6bCrcKjw6XCiMKZw6jCp8Kjw6bCnsKQdHJhbnNsYXRlWVxuICBwYXJzZVRyYW5zbGF0ZVkodmFsKSB7XG4gICAgbGV0IHJlZyA9IC9cXCgoW14oKV0rKVxcKS9nO1xuICAgIGxldCB0cmFuc2xhdGUgPSByZWcuZXhlYyh2YWwpWzFdO1xuICAgIGxldCB0cmFuc2xhdEFyciA9IHRyYW5zbGF0ZS5zcGxpdCgnLCcpO1xuICAgIGxldCB0cmFuc2xhdGVZO1xuICAgIGxldCBpc1BlcmNlbnQ7XG4gICAgLy/DpcKmwoLDpsKewpzDpMK4wo3DpcKMwoXDpcKQwqt0cmFuc2xhdGVcbiAgICBpZiAodmFsLmluZGV4T2YoJ3RyYW5zbGF0ZScpID09PSAtMSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNQZXJjZW50OiBmYWxzZSxcbiAgICAgICAgdHJhbnNsYXRlWTogMFxuICAgICAgfVxuICAgIH1cbiAgICAvL8OlwojCpMOmwpbCrcOmwpjCr3RyYW5zbGF0ZcOowr/CmMOmwpjCr3RyYW5zbGF0ZVlcbiAgICBpZiAodHJhbnNsYXRBcnIubGVuZ3RoID09PSAyKSB7XG4gICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlLnNwbGl0KCcsJylbMV07XG4gICAgfSBlbHNlIGlmICh0cmFuc2xhdEFyci5sZW5ndGggPT09IDEgJiYgdmFsLmluZGV4T2YoJ3RyYW5zbGF0ZVknKSAhPT0gLTEpIHtcbiAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGU7XG4gICAgfVxuICAgIC8vw6XCiMKkw6bClsKtw6bCmMKvw6fCmcK+w6XCiMKGw6bCr8KUw6jCv8KYw6bCmMKvcHhcbiAgICBpZiAodHJhbnNsYXRlWS5pbmRleE9mKCdweCcpICE9PSAtMSkge1xuICAgICAgLy/DpsKIwqrDpcKPwpZweFxuICAgICAgaXNQZXJjZW50ID0gZmFsc2U7XG4gICAgICB0cmFuc2xhdGVZID0gTnVtYmVyKHRyYW5zbGF0ZVkuc2xpY2UoMCwgLTIpKTtcbiAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZVkuaW5kZXhPZignJScpICE9PSAtMSkge1xuICAgICAgaXNQZXJjZW50ID0gdHJ1ZTtcbiAgICAgIHRyYW5zbGF0ZVkgPSBOdW1iZXIodHJhbnNsYXRlWS5zbGljZSgwLCAtMSkpO1xuICAgIH1cbiAgICAvL8Oowr/ClMOlwpvCnsOnwpnCvsOlwojChsOmwq/ClMOmwojClsOmwpnCrsOpwoDCmm51bWJlcsOlwoDCvFxuICAgIHJldHVybiB7XG4gICAgICBpc1BlcmNlbnQsXG4gICAgICB0cmFuc2xhdGVZXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsRXZlbnRFbWl0dGVyLFRlbXBsYXRlUmVmLElucHV0LE91dHB1dCxFbGVtZW50UmVmLENvbnRlbnRDaGlsZCxmb3J3YXJkUmVmICxIb3N0TGlzdGVuZXIsVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2RlbCxDb250cm9sVmFsdWVBY2Nlc3NvcixOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtamRiLXBsZy1pbnB1dCcsXG4gICAgdGVtcGxhdGU6IGA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCIgKm5nSWY9XCJfYWRkT25Db250ZW50QmVmb3JlXCI+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIl9hZGRPbkNvbnRlbnRCZWZvcmVcIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuPC9zcGFuPlxuPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIl90eXBlPT0ndGV4dCdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtdGV4dC13cmFwXCIgW25nQ2xhc3NdPVwiX2lucHV0V3JhcENsYXNzXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtcHJlZml4XCIgKm5nSWY9XCJfcHJlZml4Q29udGVudFwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIl9wcmVmaXhDb250ZW50XCI+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxpbnB1dCAoYmx1cik9XCJfZW1pdEJsdXIoJGV2ZW50KVwiIChmb2N1cyk9XCJfZW1pdEZvY3VzKCRldmVudClcIiBbZGlzYWJsZWRdPVwiX2Rpc2FibGVkXCIgW3JlYWRvbmx5XT1cIl9yZWFkb25seVwiIFthdHRyLnR5cGVdPVwiX3R5cGVcIiBjbGFzcz1cImlucHV0XCIgW25nQ2xhc3NdPVwiX2NsYXNzTWFwXCIgW2F0dHIucGxhY2Vob2xkZXJdPVwiX3BsYWNlSG9sZGVyXCIgWyhuZ01vZGVsKV09XCJqZGJWYWx1ZVwiIFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiIG1heGxlbmd0aD1cInt7amRiTWF4TGVuZ3RofX1cIlxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWNsZWFyXCIgKm5nSWY9XCJfY2xlYXIgJiYgX3ZhbHVlICYmIF90eXBlPT0ndGV4dCdcIiAoY2xpY2spPVwiY2xlYXJUeHQoKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJjbG9zZS1pY29uIGljb24tZW1wdHlcIj48L2k+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtaW5wdXQtc3VmZml4XCIgKm5nSWY9XCJfc3VmZml4Q29udGVudFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uZm9udCBpY29uLWd1YW5iaTJmaWxsXCI+PC9pPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIl9zdWZmaXhDb250ZW50XCI+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWVycm9yLXRpcFwiICpuZ0lmPVwiamRiRXJyb3IgJiYgX2Vycm9yQ29udGVudFwiPlxuICAgICAgICA8aSBjbGFzcz1cImljb24tbWVzc2FnZS1lcnJvciBlcnJvci10aXBcIj48L2k+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIl9lcnJvckNvbnRlbnRcIj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG48c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCIgKm5nSWY9XCJfYWRkT25Db250ZW50QWZ0ZXJcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJfYWRkT25Db250ZW50QWZ0ZXJcIj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG48L3NwYW4+XG48bmctdGVtcGxhdGUgW25nSWZdPVwiX3R5cGU9PSd0ZXh0YXJlYSdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtdGV4dC13cmFwXCI+XG4gICAgICAgIDx0ZXh0YXJlYSAoYmx1cik9XCJfZW1pdEJsdXIoJGV2ZW50KVwiIChmb2N1cyk9XCJfZW1pdEZvY3VzKCRldmVudClcIiAoaW5wdXQpPVwidGV4dGFyZWFPbkNoYW5nZSgkZXZlbnQpXCIgI2lucHV0VGV4dGFyZWEgW2Rpc2FibGVkXT1cIl9kaXNhYmxlZFwiIFtyZWFkb25seV09XCJfcmVhZG9ubHlcIiB0eXBlPVwidGV4dGFyZWFcIiBjbGFzcz1cImlucHV0IGlucHV0LXRleHRhcmVhXCIgW25nQ2xhc3NdPVwiX2NsYXNzTWFwXCIgW2F0dHIucGxhY2Vob2xkZXJdPVwiamRiUGxhY2VIb2xkZXJcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJqZGJWYWx1ZVwiIG1heGxlbmd0aD1cInt7amRiTWF4TGVuZ3RofX1cIiBbc3R5bGUud2lkdGhdPVwid2lkdGhcIj48L3RleHRhcmVhPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRhcmVhLXdjLXRpcFwiIFtuZ0NsYXNzXT1cInsndGV4dGFyZWEtd2MtdGlwLXJlZCc6IGpkYlZhbHVlJiZqZGJWYWx1ZS5sZW5ndGggPT0gamRiTWF4TGVuZ3RofVwiICpuZ0lmPVwiamRiTWF4TGVuZ3RoICYmICFfZGlzYWJsZWQgJiYhX3JlYWRvbmx5XCI+e3soamRiVmFsdWUmJmpkYlZhbHVlLmxlbmd0aCl8fDB9fS97e2pkYk1heExlbmd0aH19PC9zcGFuPlxuICAgIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5gLFxuICAgIHN0eWxlczogW2AuaW5wdXQtdGV4dC13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5pbnB1dHtoZWlnaHQ6MzBweDt3aWR0aDozMDBweDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjYWZiMGIzO2JvcmRlci1yYWRpdXM6MnB4O2ZvbnQtc2l6ZToxM3B4O3BhZGRpbmc6MCAxMHB4O2xpbmUtaGVpZ2h0OjMwcHg7Y29sb3I6IzMzM30uaW5wdXQ6Zm9jdXN7b3V0bGluZTowO2JvcmRlci1jb2xvcjojM2Y2OWYyfWlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiNhZmIwYjN9LnByZWZpeCAuaW5wdXR7cGFkZGluZy1sZWZ0OjMwcHh9LmlucHV0LXRleHRhcmVhe3dpZHRoOjMwMHB4O2hlaWdodDo4MHB4O292ZXJmbG93LXk6YXV0bztmb250LXNpemU6MTNweDtjb2xvcjojMDAwO2xpbmUtaGVpZ2h0OjIwcHh9LmlucHV0LWRpc2FibGVke2JhY2tncm91bmQ6I2YwZjFmNTtjb2xvcjojN2Q3ZTgwfS5kaXNhYmxlZCAuaW5wdXR7Y29sb3I6IzdkN2U4MH0uaW5wdXQtdGV4dC1sZ3toZWlnaHQ6NDBweDtmb250LXNpemU6MTRweH0uaW5wdXQtdGV4dC1zbXtoZWlnaHQ6MjRweDtmb250LXNpemU6MTJweH0uaW5wdXQtdGV4dGFyZWEtbGd7aGVpZ2h0OjEyMHB4O2ZvbnQtc2l6ZToxNHB4fS5pbnB1dC10ZXh0YXJlYS1zbXtoZWlnaHQ6ODBweDtmb250LXNpemU6MTJweH0uaW5wdXQtZXJyb3J7Ym9yZGVyLWNvbG9yOiNmODRhNGF9LmlucHV0LWNsZWFye3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjVweDt0b3A6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7aGVpZ2h0OjI0cHh9LmlucHV0LXByZWZpeHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7bGVmdDo3cHh9LmlucHV0LWVycm9yLXRpcHtjb2xvcjojZjg0YTRhO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjIwcHg7bWF4LXdpZHRoOjIwMHB4fS5lcnJvci10aXB7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MjBweH0udGV4dGFyZWEtd2MtdGlwe3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTo1cHg7cmlnaHQ6MTBweDtmb250LXNpemU6MTJweDtjb2xvcjojN2Q3ZTgwfS50ZXh0YXJlYS13Yy10aXAtcmVke2NvbG9yOiNmODRhNGF9YF0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEpkYlBsZ0lucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxufSlcblxuZXhwb3J0IGNsYXNzIEpkYlBsZ0lucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LENvbnRyb2xWYWx1ZUFjY2Vzc29ye1xuICAgIF92YWx1ZSA9ICcnO1xuICAgIF90eXBlPSAndGV4dCc7XG4gICAgX3BsYWNlSG9sZGVyPSAnJztcbiAgICBfc2l6ZT0gJ2RlZmF1bHQnO1xuICAgIF9kaXNhYmxlZCA9IGZhbHNlO1xuICAgIF9yZWFkb25seSA9IGZhbHNlO1xuICAgIF9lcnJvciA9IGZhbHNlO1xuICAgIF9jbGFzc01hcDogYW55O1xuICAgIF9pbnB1dFdyYXBDbGFzczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIF9jbGVhciA9IGZhbHNlO1xuICAgIF9tYXhsZW5ndGg6IG51bWJlcjtcbiAgICBfYXV0b1Byb21wdERhdGE6IEFycmF5PGFueT4gPSBbXTtcbiAgICAgX2NvbXBvc2luZyA9IGZhbHNlO1xuICAgICBASW5wdXQoKSB3aWR0aD0gJzMwMHB4JztcbiAgICAvLyBuZ01vZGVsIEFjY2Vzc1xuICAgIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gICAgQENvbnRlbnRDaGlsZCgnamRiRXJyb3JDb250ZW50JykgIF9lcnJvckNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZCggJ2FkZENvbnRlbnRCZWZvcmUnICkgX2FkZE9uQ29udGVudEJlZm9yZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKCdhZGRDb250ZW50QWZ0ZXInKSBfYWRkT25Db250ZW50QWZ0ZXI6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZCgncHJlZml4Q29udGVudCcpIF9wcmVmaXhDb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoJ3N1ZmZpeENvbnRlbnQnKSBfc3VmZml4Q29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAT3V0cHV0KCkgamRiQmx1cjogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBqZGJGb2N1czogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIHRoaXMuX2lucHV0V3JhcENsYXNzID1bYGlucHV0LXRleHQtd3JhcC0ke3RoaXMuX3NpemV9YF07XG4gICAgICAgIGlmICggdGhpcy5fcHJlZml4Q29udGVudCApIHtcbiAgICAgICAgICAgIHRoaXMuX2lucHV0V3JhcENsYXNzLnB1c2goJ3ByZWZpeCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY29tcG9zaXRpb25zdGFydCcsIFsgJyRldmVudCcgXSlcbiAgICBjb21wb3NpdGlvblN0YXJ0KGU6IENvbXBvc2l0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9zaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjb21wb3NpdGlvbmVuZCcsIFsgJyRldmVudCcgXSlcbiAgICBjb21wb3NpdGlvbkVuZChlOiBDb21wb3NpdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvc2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBqZGJUeXBlKHR5cGU6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBnZXQgamRiVHlwZSgpOiBzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGpkYlBsYWNlSG9sZGVyKHBsYWNlSG9sZGVyOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9wbGFjZUhvbGRlciA9IHBsYWNlSG9sZGVyO1xuICAgIH1cbiAgICBnZXQgamRiUGxhY2VIb2xkZXIoKTogc3RyaW5ne1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2VIb2xkZXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgamRiU2l6ZShzaXplOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9zaXplID0ge2xhcmdlOiAnbGcnLHNtYWxsOiAnc20nfVtzaXplXTtcbiAgICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgICBnZXQgamRiU2l6ZSgpOiBzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGpkYkRpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKXtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSB0aGlzLnRvQm9vbGVhbihkaXNhYmxlZCk7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gICAgZ2V0IGpkYkRpc2FibGVkKCk6IGJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBqZGJSZWFkb25seShyZWFkb25seTogYm9vbGVhbil7XG4gICAgICAgIHRoaXMuX3JlYWRvbmx5ID0gdGhpcy50b0Jvb2xlYW4ocmVhZG9ubHkpO1xuICAgIH1cbiAgICBnZXQgamRiUmVhZG9ubHkoKTogYm9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRvbmx5O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGpkYlZhbHVlKHZhbHVlOiBzdHJpbmcpe1xuICAgICAgICBpZiAoKHRoaXMuX3ZhbHVlID09PSB2YWx1ZSkgfHwgKCh0aGlzLl92YWx1ZSA9PSBudWxsKSAmJiAodmFsdWUgPT0gbnVsbCkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLl9jb21wb3NpbmcpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGpkYlZhbHVlKCk6IHN0cmluZ3tcbiAgICAgICAgaWYodGhpcy5fdmFsdWUgPT0gJzAnKXtcbiAgICAgICAgICAgIHJldHVybiAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlIHx8ICcnO1xuICAgIH1cbiAgICBASW5wdXQoKVxuICAgIHNldCBqZGJFcnJvcih2YWx1ZTogYm9vbGVhbil7XG4gICAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy50b0Jvb2xlYW4odmFsdWUpO1xuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfVxuICAgIGdldCBqZGJFcnJvcigpOiBib29sZWFue1xuICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgfVxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGpkYkNsZWFyKHZhbHVlOiBib29sZWFuKXtcbiAgICAgICAgdGhpcy5fY2xlYXIgPSB0aGlzLnRvQm9vbGVhbih2YWx1ZSk7XG4gICAgfVxuICAgIGdldCBqZGJDbGVhcigpOiBib29sZWFue1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xlYXI7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgamRiTWF4TGVuZ3RoKHZhbHVlOiBudW1iZXIpe1xuICAgICAgICB0aGlzLl9tYXhsZW5ndGggPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGpkYk1heExlbmd0aCgpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhsZW5ndGg7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgamRiUHJvbXB0RGF0YSh2YWx1ZTogQXJyYXk8YW55Pil7XG4gICAgICAgIHRoaXMuX2F1dG9Qcm9tcHREYXRhID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBqZGJQcm9tcHREYXRhKCk6IEFycmF5PGFueT57XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRvUHJvbXB0RGF0YTtcbiAgICB9XG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgfVxuICAgIF9lbWl0Qmx1cigkZXZlbnQpIHtcbiAgICAgICAgdGhpcy5qZGJCbHVyLmVtaXQoJGV2ZW50KTtcbiAgICB9XG5cbiAgICBfZW1pdEZvY3VzKCRldmVudCkge1xuICAgICAgICB0aGlzLmpkYkZvY3VzLmVtaXQoJGV2ZW50KTtcbiAgICB9XG4gICAgdGV4dGFyZWFPbkNoYW5nZSgkZXZlbnQpe1xuXG4gICAgfVxuICAgIHNldENsYXNzTWFwKCkge1xuICAgICAgICB0aGlzLl9jbGFzc01hcCA9IHtcbiAgICAgICAgICAgIFsgYGlucHV0LSR7dGhpcy5fdHlwZX0tJHt0aGlzLl9zaXplfWAgXTogdHJ1ZSxcbiAgICAgICAgICAgIFsgJ2lucHV0LWRpc2FibGVkJyBdOiB0aGlzLl9kaXNhYmxlZCxcbiAgICAgICAgICAgIFsnaW5wdXQtZXJyb3InXTogdGhpcy5fZXJyb3JcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xlYXJUeHQoKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoJycpO1xuICAgIH1cblxuICAgIHRvQm9vbGVhbih2YWx1ZTogYm9vbGVhbiB8IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09ICcnIHx8ICh2YWx1ZSAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbn1cblxuZnVuY3Rpb24gaXNEYXRlKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IERhdGVdXCI7XG59XG5cbmZ1bmN0aW9uIHRvSnNvbih2YWx1ZSkge1xuICAgIHZhciBqc29uT2JqID0ge307XG4gICAgdHJ5IHtcbiAgICAgICAganNvbk9iaiA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvIGpzb24gcGFyc2UgZXJyb3InKTtcbiAgICB9XG4gICAgcmV0dXJuIGpzb25PYmo7XG59XG5mdW5jdGlvbiBzZXJpYWxpemVWYWx1ZSh2KSB7XG4gICAgaWYgKGlzT2JqZWN0KHYpKSB7XG4gICAgICAgIHJldHVybiBpc0RhdGUodikgPyB2LnRvSVNPU3RyaW5nKCkgOiB0b0pzb24odik7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZnVuY3Rpb24gZW5jb2RlVXJpUXVlcnkodmFsLCBwY3RFbmNvZGVTcGFjZXM/KSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgICAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICAgICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICAgICAgcmVwbGFjZSgvJTIwL2csIChwY3RFbmNvZGVTcGFjZXMgPyAnJTIwJyA6ICcrJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24galF1ZXJ5TGlrZVBhcmFtU2VyaWFsaXplcihwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcykgcmV0dXJuICcnO1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuICAgIHNlcmlhbGl6ZShwYXJhbXMsICcnLCB0cnVlKTtcbiAgICByZXR1cm4gcGFydHMuam9pbignJicpO1xuXG4gICAgZnVuY3Rpb24gc2VyaWFsaXplKHRvU2VyaWFsaXplOiBhbnksIHByZWZpeDogYW55LCB0b3BMZXZlbD86IGFueSkge1xuICAgICAgICBpZiAoaXNBcnJheSh0b1NlcmlhbGl6ZSkpIHtcbiAgICAgICAgICAgIHRvU2VyaWFsaXplLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZSh2YWx1ZSwgcHJlZml4ICsgJ1snICsgKGlzT2JqZWN0KHZhbHVlKSA/IGluZGV4IDogJycpICsgJ10nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHRvU2VyaWFsaXplKSAmJiAhaXNEYXRlKHRvU2VyaWFsaXplKSkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRvU2VyaWFsaXplKSB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplKHRvU2VyaWFsaXplW2tleV0sIHByZWZpeCArXG4gICAgICAgICAgICAgICAgICAgICh0b3BMZXZlbCA/ICcnIDogJy4nKSArXG4gICAgICAgICAgICAgICAgICAgIGtleSArXG4gICAgICAgICAgICAgICAgICAgICh0b3BMZXZlbCA/ICcnIDogJycpKTtcblxuICAgICAgICAgICAgICAgIC8vIHNlcmlhbGl6ZSh0b1NlcmlhbGl6ZVtrZXldLCBwcmVmaXggK1xuICAgICAgICAgICAgICAgIC8vICAgICAodG9wTGV2ZWwgPyAnJyA6ICdbJykgK1xuICAgICAgICAgICAgICAgIC8vICAgICBrZXkgK1xuICAgICAgICAgICAgICAgIC8vICAgICAodG9wTGV2ZWwgPyAnJyA6ICddJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHMucHVzaChlbmNvZGVVcmlRdWVyeShwcmVmaXgpICsgJz0nICtcbiAgICAgICAgICAgICAgICAodG9TZXJpYWxpemUgPT0gbnVsbCA/ICcnIDogZW5jb2RlVXJpUXVlcnkoc2VyaWFsaXplVmFsdWUodG9TZXJpYWxpemUpKSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuY29uc3QgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5leHBvcnQgZnVuY3Rpb24gdG9PYmplY3QodmFsOiBhbnkpIHtcbiAgaWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdCh2YWwpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEFzc2lnbih0YXJnZXQ6IGFueSwgLi4uc291cmNlOiBhbnlbXSkge1xuICBsZXQgZnJvbTogYW55O1xuICBjb25zdCB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIGxldCBzeW1ib2xzOiBhbnk7XG4gIGZvciAobGV0IHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG4gICAgZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGZyb20pIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcbiAgICAgICAgdG9ba2V5XSA9IGZyb21ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCg8YW55Pk9iamVjdCkuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBzeW1ib2xzID0gKDxhbnk+T2JqZWN0KS5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuICAgICAgICAgIHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdG87XG59XG4iLCJpbXBvcnQge0Nvb2tpZX0gZnJvbSAnbmcyLWNvb2tpZXMvbmcyLWNvb2tpZXMnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3RNZXRob2QsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuLy8gaW1wb3J0IHtlbnZpcm9ubWVudH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7SmRiUGxnVG9hc3RDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvamRiLXBsZy10b2FzdC9qZGItcGxnLXRvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge2pRdWVyeUxpa2VQYXJhbVNlcmlhbGl6ZXJ9IGZyb20gJy4vcXVlcnktc3RyaW5nJztcbmltcG9ydCB7b2JqZWN0QXNzaWdufSBmcm9tICcuL29iamVjdC1hc3NpZ24nO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIGNvbnN0IERFRkFVTFRIT1NUID0gZW52aXJvbm1lbnQuYXBpQ29uZmlnLmRlZmF1bHRIb3N0O1xuLy8gY29uc3QgQVBJUyA9IGVudmlyb25tZW50LmFwaUNvbmZpZy5hcGlzO1xuLy8gY29uc3QgRU5WID0gZW52aXJvbm1lbnQuZW52O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmRiUGxnQmFzZVNlcnZpY2Uge1xuICB2UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcHJpdmF0ZSByb3V0ZTogUm91dGVyKSB7XG4gIH1cblxuICAvLyDDpcKkwoTDp8KQwobDpMK4wo3DpcKQwozDp8KOwq/DpcKiwoPDp8KawoRVcmzDr8K8wozDpcKcwqjDpcKOwp/DpsKdwqXDp8KawoTDpcKfwrrDp8KhwoDDpMK4worDpcKBwprDpMK6wobDpMK8wpjDpcKMwpZcbiAgLy8gZ2V0VXJsKGFwaU5hbWU6IHN0cmluZykge1xuICAvLyAgIGxldCBhcGkgPSBBUElTW2FwaU5hbWVdO1xuICAvLyAgIGlmIChFTlYgPT0gJ3NlcnZlJyAmJiBhcGkuc2VydmUpIHtcbiAgLy8gICAgIHJldHVybiBhcGkuc2VydmU7XG4gIC8vICAgfVxuICAvLyAgIGlmIChhcGkuaG9zdCAmJiBhcGkuaG9zdFtFTlZdKSB7XG4gIC8vICAgICByZXR1cm4gYXBpLmhvc3RbRU5WXSArIGFwaS5wYXRoO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gREVGQVVMVEhPU1RbRU5WXSArIGFwaS5wYXRoO1xuICAvLyB9XG5cbiAgc2V0Um9vdFZpZXdDb250YWluZXJSZWYodlJlZikge1xuICAgIHRoaXMudlJlZiA9IHZSZWY7XG5cbiAgfVxuXG4gIHRvYXN0KG1zZywgZGVsYXlUaW1lID0gMzAwMCkge1xuICAgIC8vw6nCgMKaw6jCv8KHQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIMOlwojCm8OlwrvCusOlwofCusOlworCqMOmwoDCgcOnwrvChMOkwrvCtsOnwprChMOlwq7CnsOkwr7Ci1xuICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoSmRiUGxnVG9hc3RDb21wb25lbnQpO1xuICAgIGxldCBjb21JbnN0YW5jZSA9IHRoaXMudlJlZi5jcmVhdGVDb21wb25lbnQoY2hpbGRDb21wb25lbnQpO1xuICAgIGNvbUluc3RhbmNlLmluc3RhbmNlLm1zZyA9IG1zZztcbiAgICBjb21JbnN0YW5jZS5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb21JbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfSwgZGVsYXlUaW1lKTtcbiAgfVxuXG4gIHRlc3QoKSB7XG4gICAgYWxlcnQoJ2pkYiBzZXJ2aWNlcy4uLi4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gYXBpTmFtZVxuICAgKiBAcGFyYW0gZGF0YU9ialxuICAgKiBAcGFyYW0gaXNJbnRlcmNlcHQgw6bCmMKvw6XCkMKmw6bCi8Kmw6bCiMKqw6XCpMKEw6fCkMKGcmV0dXJuQ29kZSAhPSAwIMOnwprChMOmwoPChcOlwobCtVxuICAgKi9cbiAgcG9zdChhcGlOYW1lLCBkYXRhT2JqLCBvcHRpb25zKSB7XG4gICAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBsZXQgbG9naW5Ub2tlbjtcbiAgICBsZXQgbG9naW5XYXk7XG4gICAgbGV0IG9yZ1VpZDtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnRva2VuT2JqKSB7XG4gICAgICBsb2dpblRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ob3B0aW9ucy50b2tlbk9iai5sb2dpblRva2VuKTtcbiAgICAgIGxvZ2luV2F5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ob3B0aW9ucy50b2tlbk9iai5sb2dpbldheSk7XG4gICAgICBvcmdVaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvcHRpb25zLnRva2VuT2JqLm9yZ1VpZCk7XG4gICAgfVxuICAgIGxldCBsb2dpbk9iajogYW55ID0ge307XG4gICAgbGV0IGRhdGE6IGFueSA9IHt9O1xuICAgIGxldCBjdXJyZW50Um91dGUgPSBsb2NhdGlvbi5oYXNoLnNwbGl0KCcvJylbMV07XG4gICAgaWYgKGxvZ2luVG9rZW4pIHtcbiAgICAgIGlmIChvcmdVaWQpIHtcbiAgICAgICAgbG9naW5PYmogPSB7XG4gICAgICAgICAgJ2xvZ2luVG9rZW4nOiBsb2dpblRva2VuLFxuICAgICAgICAgICdsb2dpbldheSc6IGxvZ2luV2F5LFxuICAgICAgICAgICdvcmdVaWQnOiBvcmdVaWQsXG4gICAgICAgICAgJ2pkYkRoVHJhY2VJZCc6IHRpbWUgKyAnLScgKyBwYXJzZUludChNYXRoLnJhbmRvbSgpICogKDEwMDAwMCArIDEpICsgMSArICcnKVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9naW5PYmogPSB7XG4gICAgICAgICAgJ2xvZ2luVG9rZW4nOiBsb2dpblRva2VuLFxuICAgICAgICAgICdsb2dpbldheSc6IGxvZ2luV2F5LFxuICAgICAgICAgICdqZGJEaFRyYWNlSWQnOiB0aW1lICsgJy0nICsgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqICgxMDAwMDAgKyAxKSArIDEgKyAnJylcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZGF0YSA9IG9iamVjdEFzc2lnbih7fSwgbG9naW5PYmosIGRhdGFPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gb2JqZWN0QXNzaWduKHt9LCBkYXRhT2JqKTtcbiAgICB9XG4gICAgZGF0YSA9IGpRdWVyeUxpa2VQYXJhbVNlcmlhbGl6ZXIoZGF0YSk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICBsZXQgcmVxVXJsID0gYXBpTmFtZTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHJlcXVlc3RvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGJvZHk6IGRhdGEgfHwge31cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmh0dHApO1xuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChyZXFVcmwsIHJlcXVlc3RvcHRpb25zKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5maWx0ZXIoKHJlczogYW55KSA9PiB7XG5cbiAgICAgICAgLy/DpsKgwqHDqcKqwozDpsKOwqXDpcKPwqPDqMK/wpTDpcKbwp7Dp8KawoTDpsKVwrDDpsKNwq7Dp8K7wpPDpsKewoTDpsKgwrzDpcK8wo9cbiAgICAgICAgaWYoIShyZXMuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSAmJiByZXMuaGFzT3duUHJvcGVydHkoJ2Vycm9yJykpKXtcbiAgICAgICAgICAgdGhpcy50b2FzdCgnw6fCs8K7w6fCu8Kfw6bCjsKlw6XCj8Kjw6bCoMK8w6XCvMKPw6nClMKZw6jCr8Kvw6/CvMKBJyk7XG4gICAgICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5yZXNldCAmJiBvcHRpb25zLnJlc2V0KCk7XG4gICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5mbnMgJiYgb3B0aW9ucy5mbnMubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICBsZXQgbGVuID0gb3B0aW9ucy5mbnMubGVuZ3RoO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmbiA9IG9wdGlvbnMuZm5zW2ldO1xuICAgICAgICAgICAgaWYgKHJlcy5lcnJvciAmJiByZXMuZXJyb3IucmV0dXJuQ29kZSAqIDEgPT09IGZuLnJldHVybkNvZGUgJiYgY3VycmVudFJvdXRlICE9ICdsb2dpbicpIHtcbiAgICAgICAgICAgICAgZm4uY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcy5lcnJvciAmJiByZXMuZXJyb3IucmV0dXJuQ29kZSAqIDEgPT0gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vw6XChcK8w6XCrsK5w6fCmcK7w6XCvcKVw6fCu8KEw6TCu8K2w6TCuMKtcXJjb2RlQXBpw6XCksKMbG9naW5BcGnDpMK4wqTDpMK4wqrDpsKOwqXDpcKPwqPDqMKAwoHDp8KawoTDpcKGwpnDpsKzwpVcbiAgICAgICAgaWYodHlwZW9mKG9wdGlvbnMpID09PSAnYm9vbGVhbicpe1xuICAgICAgICAgIGlmKG9wdGlvbnMpe1xuICAgICAgICAgICAgdGhpcy50b2FzdChyZXMgJiYgcmVzLmVycm9yICYmIHJlcy5lcnJvci5yZXR1cm5Vc2VyTWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/DpsKYwq/DpcKQwqbDpsKLwqbDpsKIwqrDpcKkwoTDp8KQwoZcbiAgICAgICAgaWYob3B0aW9ucy5pc0ludGVyY2VwdCl7XG4gICAgICAgICAgdGhpcy50b2FzdChyZXMgJiYgcmVzLmVycm9yICYmIHJlcy5lcnJvci5yZXR1cm5Vc2VyTWVzc2FnZSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHBvc3RKU09OKGFwaU5hbWUsIGRhdGFPYmopIHtcbiAgICAvLyBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAvLyAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAvLyAgICAgJ3dpdGhDcmVkZW50aWFscyc6IHRydWVcbiAgICAvLyB9KTtcblxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAvLyBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcblxuICAgIC8vIGhlYWRlcnMuYXBwZW5kKCd3aXRoQ3JlZGVudGlhbHMnLCd0cnVlJyk7XG4gICAgLy8gbGV0IHVybERhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgLy8gaWYgKE9iamVjdC5rZXlzKGRhdGFPYmopLmxlbmd0aCA+IDApIHtcbiAgICAvLyAgICAgZm9yIChsZXQga2V5IGluIGRhdGFPYmopIHtcbiAgICAvLyAgICAgICAgIHVybERhdGEuYXBwZW5kKGtleSwgZGF0YU9ialtrZXldKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAvLyBsZXQgbG9hbk1hcmtldFRva2VuID0gQ29va2llLmdldCgnbG9hbk1hcmtldFRva2VuJyk7XG4gICAgLy8gdXJsRGF0YS5hcHBlbmQoJ2xvYW5NYXJrZXRUb2tlbicsIGxvYW5NYXJrZXRUb2tlbik7XG5cbiAgICBsZXQgcmVxVXJsID0gYXBpTmFtZTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgLy8gbGV0IHJlcXVlc3RvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAvLyAgICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlBvc3QsXG4gICAgLy8gICAgIHVybDogcmVxVXJsLFxuICAgIC8vICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgIC8vICAgICBib2R5OiB0ZXN0RGF0YVxuICAgIC8vIH0pXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgdXJsOiByZXFVcmwsXG4gICAgICBib2R5OiBkYXRhT2JqIHx8IHt9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcVVybCwgb3B0aW9ucylcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXG4gICAgICAuZmlsdGVyKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzLmVycm9yICYmIHJlcy5lcnJvci5yZXR1cm5Db2RlICogMSA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGFtcDJzdHJpbmcoc3RhbXApIHtcbiAgICBpZiAoc3RhbXApIHtcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoc3RhbXApLnRvSlNPTigpO1xuICAgICAgcmV0dXJuIGRhdGUuc3BsaXQoJ1QnKVswXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBleHBvcnQoYXBpTmFtZSwgcGFyYW1zKSB7XG4gICAgbGV0IGNvb2tpZVN0ciA9IENvb2tpZS5nZXQoJ2xvZ2luSW5mbycpO1xuICAgIGxldCBjb29raWVPYmo6IGFueSA9IHt9O1xuICAgIGxldCBjb29raWVEYXRhOiBhbnkgPSB7fTtcbiAgICBpZiAoY29va2llU3RyKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb29raWVPYmogPSBKU09OLnBhcnNlKGNvb2tpZVN0cik7XG4gICAgICAgIGNvb2tpZURhdGEgPSB7XG4gICAgICAgICAgbG9naW5Ub2tlbjogY29va2llT2JqLmxvZ2luVG9rZW4sXG4gICAgICAgICAgZW1wbG95ZWVJZDogY29va2llT2JqLmVtcElkXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygncGFyc2UgY29va2llIGVycm9yLi4uJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHBhcmFtc09iaiA9IG9iamVjdEFzc2lnbih7fSwgY29va2llRGF0YSwgcGFyYW1zKTtcbiAgICBsZXQgdXJsID0gYXBpTmFtZSArICc/JztcbiAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zT2JqKSB7XG4gICAgICBpZiAocGFyYW1zT2JqW2tleV0pIHtcbiAgICAgICAgdXJsICs9IGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNPYmpba2V5XSkgKyAnJic7XG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICB9XG5cbiAgZ2V0UGljU2l6ZShmaWxlKSB7XG4gICAgbGV0IGFyciA9IHt9O1xuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgICBsZXQgZGF0YSA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgIC8vw6XCisKgw6jCvcK9w6XCm8K+w6fCicKHw6jCjsK3w6XCj8KWw6XCm8K+w6fCicKHw6fCnMKfw6XCrsKew6XCrsK9w6XCusKmw6XCksKMw6nCq8KYw6XCusKmXG4gICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgICAgIGFyciA9IHtcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICB3aWR0aDogd2lkdGhcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgIH07XG4gICAgICBpbWFnZS5zcmMgPSBkYXRhO1xuICAgIH07XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGxUYWJsZVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbiAgICAvKlxuICAgICAgICBsaW5lczpudW1iZXIgIMOowqHCqMOmwqDCvMOlwrHClcOnwqTCusOnwprChMOowqHCjMOmwpXCsFxuICAgICAgICBsaXN0czpBcnJheTxhbnk+ICDDpcK8woLDpsKtwqXDqMKOwrfDpcKPwpbDp8KawoTDpsKVwrDDpsKNwq5cbiAgICAgICAgZmxhZzpib29sZWFuICDDpsKYwq/DpcKQwqbDpcKcwqjDp8KpwrrDp8KZwr3DqMKhwozDpsKgwo/DpcKxwpXDp8KkwrrDpsKTwo3DpMK9wpzDpsKMwonDqcKSwq4sw6nCu8KYw6jCrsKkw6XCj8KWdW5TaG93T3B0w6XCrcKXw6bCrsK1XG4gICAgKi9cbiAgICBmaWxsVGFibGUobGluZXM6IG51bWJlciwgbGlzdHM6QXJyYXk8YW55PiwgZmxhZz86Ym9vbGVhbikge1xuICAgICAgICBsaW5lcyA9IGxpbmVzIHx8IDEwO1xuICAgICAgICBsaXN0cyA9IGxpc3RzIHx8IFtdO1xuICAgICAgICBmbGFnID0gZmxhZyB8fCB0cnVlO1xuICAgICAgICBsZXQgYUxlbmd0aCA9IGxpc3RzLmxlbmd0aDtcbiAgICAgICAgbGV0IG1MZW5ndGggPSBsaW5lcyAtIGFMZW5ndGg7XG4gICAgICAgIGxldCBmaWxsT2JqID0ge3VuU2hvd09wdDpmbGFnfTtcbiAgICAgICAgbGV0IGtleXM7XG4gICAgICAgIGlmIChhTGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBsaXN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudW5TaG93T3B0ID0gIWZsYWc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhsaXN0c1swXSk7XG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQgIT09IFwidW5TaG93T3B0XCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbE9ialtlbGVtZW50XSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChsaXN0c1swXVtlbGVtZW50XSkgPT0gXCJbb2JqZWN0IEFycmF5XVwiID8gW10gOiAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhTGVuZ3RoICE9PSAwICYmIG1MZW5ndGg+MCkge1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxtTGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgbGlzdHMucHVzaChmaWxsT2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdHM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtKZGJQbGdUb2FzdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9qZGItcGxnLXRvYXN0L2pkYi1wbGctdG9hc3QuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbW1vbk1ldGhvZFNlcnZpY2Uge1xuXG4gIHZSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgKSB7XG4gIH1cblxuICAvKsOlwrjCuMOnwpTCqMOlwoXCrMOlwoXCscOmwpbCucOmwrPClSovXG5cbiAgLyrDqcKqwozDqMKvwoHDpsKJwovDpsKcwrrDpcKPwrfDpsKYwq/DpcKQwqbDpcKQwojDpsKzwpVcbiAgKiBudW1iZXIgw6bCoMKhw6nCqsKMw6fCmsKEw6bCicKLw6bCnMK6w6XCj8K3w6fCoMKBKi9cbiAgdGVzdFBob25lTnVtYmVyKG51bWJlcjogc3RyaW5nKSB7XG4gICAgY29uc3QgcGhvbmVSZWcgPSAvXlsxXVszLDQsNSw3LDhdWzAtOV17OX0kLztcbiAgICByZXR1cm4gcGhvbmVSZWcudGVzdChudW1iZXIpO1xuICB9XG5cblxuICBzZXRSb290Vmlld0NvbnRhaW5lclJlZih2UmVmKSB7XG4gICAgdGhpcy52UmVmID0gdlJlZjtcbiAgfVxuXG4gIHRvYXN0KG1zZywgZGVsYXlUaW1lID0gMzAwMCkge1xuICAgIC8vw6nCgMKaw6jCv8KHQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIMOlwojCm8OlwrvCusOlwofCusOlworCqMOmwoDCgcOnwrvChMOkwrvCtsOnwprChMOlwq7CnsOkwr7Ci1xuICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoSmRiUGxnVG9hc3RDb21wb25lbnQpO1xuICAgIGxldCBjb21JbnN0YW5jZSA9IHRoaXMudlJlZi5jcmVhdGVDb21wb25lbnQoY2hpbGRDb21wb25lbnQpO1xuICAgIGNvbUluc3RhbmNlLmluc3RhbmNlLm1zZyA9IG1zZztcbiAgICBjb21JbnN0YW5jZS5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb21JbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfSwgZGVsYXlUaW1lKTtcblxuICB9XG5cbiAgLy8gw6TCu8KOw6bClcKww6fCu8KEw6XCiMKgw6nCmcKkw6bCjMKHw6XCrsKaw6XChcKDw6fCtMKgXG4gIHJlbW92ZU5vZGVGcm9tQXJyYXkobGlzdCwgbm9kZT8pIHtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgICBvdXRGb3I6XG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSBsaXN0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IG5vZGUpIHtcbiAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrIG91dEZvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1qZGItcGxnLXRhYmxlLWVycm9yJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiamRiLXBsZy10YWJsZS1lcnJvclwiPlxuICAgIHt7dGFibGVFcnJvclRleHR9fVxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5qZGItcGxnLXRhYmxlLWVycm9yey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7cG9zaXRpb246YWJzb2x1dGU7dG9wOjkwcHg7bGVmdDo1MCV9YF1cbn0pXG5leHBvcnQgY2xhc3MgSmRiUGxnVGFibGVFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLypcbiAgICDDpcKKwp/DqMKDwr3Dr8K8wprDpcKuwp7Dp8KOwrDDqMKhwqjDpsKgwrzDpsKKwqXDqcKUwpnDpsKWwofDpsKhwojDpsKwwrTDpcK5wrPDpcKxwoXDpMK4wq1cbiAgKi9cblxuICBASW5wdXQoKSB0YWJsZUVycm9yVGV4dCA9ICfDpsKawoLDpsKXwqDDpsKVwrDDpsKNwq4nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgUGlwZSxQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtuYW1lOidwcm92aW5jZVJlZm9ybVBpcGUnfSlcbmV4cG9ydCBjbGFzcyBQcm92aW5jZVJlZm9ybVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xuICAgIHRyYW5zZm9ybSh2YWw6YW55KTphbnl7XG4gICAgICAgIGlmKHZhbC5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWwuam9pbignw6PCgMKBJyk7XG4gICAgfVxufSIsImltcG9ydCB7IFBpcGUsUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7bmFtZTonYW1vdW50UmVmb3JtUGlwZSd9KVxuZXhwb3J0IGNsYXNzIEFtb3VudFJlZm9ybVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xuICAgIHRyYW5zZm9ybSh2YWw6YW55KTpzdHJpbmd7XG4gICAgICAgIGlmKHZhbCA9PT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gJzAuMDAnO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF2YWwpe1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodmFsLzEwMCkudG9GaXhlZCgyKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBKZGJQbGdUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctdG9hc3QvamRiLXBsZy10b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSmRiVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy10YWIvamRiLXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hvd1BpY3R1cmVDb21wb25lbnQgfSBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9zaG93LXBpY3R1cmUvc2hvdy1waWN0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaWN0dXJlVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvcGljdHVyZS12aWV3ZXIvcGljdHVyZS12aWV3ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERyYWdEaXJlY3RpdmUgfSBmcm9tICcuL2NvcmUvZGlyZWN0aXZlL2RyYWcuZGlyZWN0aXZlJztcbmltcG9ydCB7IEpkYlBsZ1BhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLXBhZ2luYXRpb24vamRiLXBsZy1wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEpkYlBsZ0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctYnV0dG9uL2pkYi1wbGctYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKZGJQbGdEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLWRpYWxvZy9qZGItcGxnLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT25seU51bWJlckRpcmVjdGl2ZSB9IGZyb20gJy4vY29yZS9kaXJlY3RpdmUvb25seS1udW1iZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IEpkYlBsZ1NlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctc2VsZWN0L2pkYi1wbGctc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKZGJQbGdJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctaW5wdXQvamRiLXBsZy1pbnB1dC5jb21wb25lbnQnO1xuLy9pbXBvcnQgeyBKZGJQbGdBdXRvY29tcGxldGVEaXJlY3RpdmUgfSBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLWF1dG9jb21wbGV0ZS9qZGItcGxnLWF1dG9jb21wbGV0ZS5kaXJlY3RpdmUnO1xuLy9pbXBvcnQgeyBKZGJQbGdBdXRvY29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLWF1dG9jb21wbGV0ZS9qZGItcGxnLWF1dG9jb21wbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSmRiUGxnQmFzZVNlcnZpY2UgfSBmcm9tICcuL2NvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2pkYi1wbGctYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7IEZpbGxUYWJsZVNlcnZpY2UgfSBmcm9tICcuL2NvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2ZpbGwtdGFibGUuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25NZXRob2RTZXJ2aWNlIH0gZnJvbSAnLi9jb3JlL3NlcnZpY2VzL2pkYi1wbGctYmFzZS9jb21tb24tbWV0aG9kLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBKZGJQbGdUYWJsZUVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy10YWJsZS1lcnJvci9qZGItcGxnLXRhYmxlLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm92aW5jZVJlZm9ybVBpcGUgfSBmcm9tICcuL2NvcmUvcGlwZS9wcm92aW5jZS1yZWZvcm0ucGlwZSc7XG5pbXBvcnQgeyBBbW91bnRSZWZvcm1QaXBlIH0gZnJvbSAnLi9jb3JlL3BpcGUvYW1vdW50LXJlZm9ybS5waXBlJztcblxuXG4vLyBleHBvcnQgKiBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLWF1dG9jb21wbGV0ZS9qZGItcGxnLWF1dG9jb21wbGV0ZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy1idXR0b24vamRiLXBsZy1idXR0b24uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctZGlhbG9nL2pkYi1wbGctZGlhbG9nLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLWlucHV0L2pkYi1wbGctaW5wdXQuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctcGFnaW5hdGlvbi9qZGItcGxnLXBhZ2luYXRpb24uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctc2VsZWN0L2pkYi1wbGctc2VsZWN0LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLXRhYi9qZGItdGFiLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLXRhYmxlLWVycm9yL2pkYi1wbGctdGFibGUtZXJyb3IuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctdG9hc3QvamRiLXBsZy10b2FzdC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvcGljdHVyZS12aWV3ZXIvcGljdHVyZS12aWV3ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9jb21wb25lbnRzL3Nob3ctcGljdHVyZS9zaG93LXBpY3R1cmUuY29tcG9uZW50JztcblxuXG5jb25zdCBNRExfTU9EVUxFUyA9IFtcbiAgU2hvd1BpY3R1cmVDb21wb25lbnQsXG4gIFBpY3R1cmVWaWV3ZXJDb21wb25lbnQsXG4gIERyYWdEaXJlY3RpdmUsXG4gIEpkYlBsZ1BhZ2luYXRpb25Db21wb25lbnQsXG4gIEpkYlBsZ0J1dHRvbkNvbXBvbmVudCxcbiAgSmRiUGxnRGlhbG9nQ29tcG9uZW50LFxuICBKZGJQbGdTZWxlY3RDb21wb25lbnQsXG4gIEpkYlBsZ0lucHV0Q29tcG9uZW50LFxuIC8vIEpkYlBsZ0F1dG9jb21wbGV0ZURpcmVjdGl2ZSxcbiAgLy9KZGJQbGdBdXRvY29tcGxldGVDb21wb25lbnQsXG4gIEpkYlRhYkNvbXBvbmVudCxcbiAgSmRiUGxnVGFibGVFcnJvckNvbXBvbmVudCxcbiAgUHJvdmluY2VSZWZvcm1QaXBlLFxuICBBbW91bnRSZWZvcm1QaXBlXG5dO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IE1ETF9NT0RVTEVTLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBKZGJQbGdUb2FzdENvbXBvbmVudCxcbiAgICBKZGJUYWJDb21wb25lbnQsXG4gICAgU2hvd1BpY3R1cmVDb21wb25lbnQsXG4gICAgUGljdHVyZVZpZXdlckNvbXBvbmVudCxcbiAgICBEcmFnRGlyZWN0aXZlLFxuICAgIEpkYlBsZ1BhZ2luYXRpb25Db21wb25lbnQsXG4gICAgT25seU51bWJlckRpcmVjdGl2ZSxcbiAgICBKZGJQbGdTZWxlY3RDb21wb25lbnQsXG4gICAgSmRiUGxnQnV0dG9uQ29tcG9uZW50LFxuICAgIEpkYlBsZ0RpYWxvZ0NvbXBvbmVudCxcbiAgICBKZGJQbGdJbnB1dENvbXBvbmVudCxcbiAgICAvL0pkYlBsZ0F1dG9jb21wbGV0ZURpcmVjdGl2ZSxcbiAgICAvL0pkYlBsZ0F1dG9jb21wbGV0ZUNvbXBvbmVudCxcbiAgICBKZGJQbGdUYWJsZUVycm9yQ29tcG9uZW50LFxuICAgIFByb3ZpbmNlUmVmb3JtUGlwZSxcbiAgICBBbW91bnRSZWZvcm1QaXBlXG4gIF0sXG4gIHByb3ZpZGVyczogW0pkYlBsZ0Jhc2VTZXJ2aWNlLCBDb21tb25NZXRob2RTZXJ2aWNlLCBGaWxsVGFibGVTZXJ2aWNlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbSmRiUGxnVG9hc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEpkYlBsZ1VpTW9kdWxlIHsgXG4gICAgLyoqXG4vLyAgICAqIEBkZXByZWNhdGVkIFVzZSBgTmdab3Jyb0FudGRNb2R1bGVgIGluc3RlYWQuXG4vLyAgICAqL1xuLy8gICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgbmdNb2R1bGU6IEpkYlBsZ1VpTW9kdWxlXG4vLyAgICAgfTtcbi8vICAgfVxufVxuZXhwb3J0IHsgSmRiUGxnQmFzZVNlcnZpY2UgfSBmcm9tICcuL2NvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2pkYi1wbGctYmFzZS5zZXJ2aWNlJztcbmV4cG9ydCB7IEZpbGxUYWJsZVNlcnZpY2UgfSBmcm9tICcuL2NvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2ZpbGwtdGFibGUuc2VydmljZSc7XG5leHBvcnQge0NvbW1vbk1ldGhvZFNlcnZpY2V9IGZyb20gJy4vY29yZS9zZXJ2aWNlcy9qZGItcGxnLWJhc2UvY29tbW9uLW1ldGhvZC5zZXJ2aWNlJztcblxuLy8gVE9ETyDDpsKawrTDqcKcwrLDpsKcwo3DpcKKwqHDpsKWwrnDpcK8wo9cbiJdLCJuYW1lcyI6WyJ0cmlnZ2VyIiwic3RhdGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJhbmltYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0lBYUU7bUJBRHNCLEVBQUU7S0FFdEI7Ozs7SUFFRix1Q0FBUTs7O0lBQVI7S0FDQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxtREFHWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxvUkFBb1IsQ0FBQztpQkFDL1I7Ozs7O3dCQUdFLEtBQUs7OytCQVpSOzs7Ozs7O0FDQUE7SUE0Q0kseUJBQ1ksMEJBQ0Q7UUFEQyw2QkFBd0IsR0FBeEIsd0JBQXdCO1FBQ3pCLGNBQVMsR0FBVCxTQUFTOzJCQVZJLElBQUksWUFBWSxFQUFFOzJCQUNsQixJQUFJLFlBQVksRUFBRTsyQkFDbEIsSUFBSSxZQUFZLEVBQUU7cUJBQ2xDLEVBQUU7dUJBQ0EsRUFBRTsyQkFFRSxDQUFDOzJCQUNELEVBQUU7S0FJWDs7OztJQUdMLGtDQUFROzs7SUFBUjtLQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBWUQsaUNBQU87Ozs7Ozs7OztJQUFQLFVBQVEsY0FB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