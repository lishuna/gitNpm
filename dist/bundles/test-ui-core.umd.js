(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('@angular/forms'), require('ng2-cookies/ng2-cookies'), require('@angular/http'), require('rxjs/Rx'), require('@angular/router'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@test-ui/core', ['exports', '@angular/core', '@angular/animations', '@angular/forms', 'ng2-cookies/ng2-cookies', '@angular/http', 'rxjs/Rx', '@angular/router', '@angular/common'], factory) :
    (factory((global['test-ui'] = global['test-ui'] || {}, global['test-ui'].core = {}),global.ng.core,global.ng.animations,global.ng.forms,null,global.ng.http,global.rxjs.Rx,global.ng.router,global.ng.common));
}(this, (function (exports,core,animations,forms,ng2Cookies,http,Rx,router,common) { 'use strict';

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
            { type: core.Component, args: [{
                        selector: 'app-jdb-plg-toast',
                        template: "<div class=\"toast-wraper\">\n  {{msg}}\n</div>\n",
                        styles: [".toast-wraper{position:fixed;border-radius:5px;min-width:160px;max-width:190px;padding:30px 10px;text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:10001;background:rgba(0,0,0,.7);color:#fff;word-break:break-all}"]
                    },] },
        ];
        /** @nocollapse */
        JdbPlgToastComponent.ctorParameters = function () { return []; };
        JdbPlgToastComponent.propDecorators = {
            "msg": [{ type: core.Input },],
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
            this.onTabChange = new core.EventEmitter();
            this.onTabRemove = new core.EventEmitter();
            this.onTopComMsg = new core.EventEmitter();
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
                if (comId === void 0) {
                    comId = "";
                }
                if (isCloseFlag === void 0) {
                    isCloseFlag = false;
                }
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
                this.tabSubs = comInstance.instance['onTopComMsg'] = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'jdb-tab',
                        template: "<div class=\"tab-wraper\">\n    <div class=\"tab-nav-wraper\">\n        <div class=\"tab-item\" *ngFor=\"let item of items;let i = index;\" [ngClass]=\"{'tab-selected':i == curTabIndex}\" title='{{item.title}}'>\n            <div (click)=\"tabChange(i)\" class=\"tab-text\"> {{item.title}}</div>\n            <span class=\"close-btn\" (click)=\"removeTab(i)\" *ngIf=\"i !== 0 && item.isCloseFlag != true\">&times;</span>\n        </div>\n    </div>\n    <div class=\"tab-content-wraper\">\n        <div #tabContent class=\"place-holder\"></div>\n    </div>\n</div>\n",
                        styles: [".tab-wraper{display:flex;flex-direction:column}.tab-nav-wraper{display:flex}.tab-nav-wraper .tab-item{width:120px;font-size:13px;display:flex;justify-content:center;background:#f0f1f5;border:1px solid #afb0b3;border-bottom:none;margin-right:5px;height:30px;border-radius:2px 2px 0 0;text-align:center;position:relative;cursor:pointer}.tab-nav-wraper .tab-item .tab-text{color:#7d7e80;white-space:nowrap;overflow:hidden;vertical-align:middle;text-overflow:ellipsis;padding:5px 20px 0}.tab-nav-wraper .tab-item.tab-selected{background:#fff;border:none;border-top:3px solid #3f69f2}.tab-nav-wraper .tab-item.tab-selected .tab-text{color:#3f69f2;padding-top:3px}.tab-nav-wraper .tab-item .close-btn{position:absolute;top:0;right:8px;font-size:24px;cursor:pointer;color:#999;font-weight:100}.tab-content-wraper{box-shadow:1px 1px 1px 1px #afb0b3;background:#fff}.tab-content-wraper .place-holder{width:0;height:0}"]
                    },] },
        ];
        /** @nocollapse */
        JdbTabComponent.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver, },
                { type: core.Injector, },
            ];
        };
        JdbTabComponent.propDecorators = {
            "target": [{ type: core.ViewChild, args: ['tabContent', { read: core.ViewContainerRef },] },],
            "onTabChange": [{ type: core.Output },],
            "onTabRemove": [{ type: core.Output },],
            "onTopComMsg": [{ type: core.Output },],
        };
        return JdbTabComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ShowPictureComponent = /** @class */ (function () {
        function ShowPictureComponent() {
            this.update = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'app-show-picture',
                        template: "<div>\n    <div class=\"img-mask\" (click)=\"closeModel()\">\n        <!-- \u906E\u7F69\u5C42 -->\n    </div>\n    <div class=\"img-content\">\n          <span class=\"close\" (click)=\"closeModel()\">\n            <img src=\"/assets/images/close-x.png\" alt=\"\">\n          </span>\n          <img [src]=\"pictureUrl\" alt=\"\" style=\"max-height: 600px;max-width: 800px;\">\n    </div>\n</div>\n",
                        styles: ["@charset \"UTF-8\";.img-mask{width:100%;height:100%;background:#000;position:fixed;top:0;left:0;-moz-opacity:.3;opacity:.8;z-index:9998;display:block}.img-content{background-color:#d7d8db;position:fixed;width:800px;height:600px;margin-left:-400px;left:50%;margin-top:-300px;top:50%;line-height:600px;border:1px solid #e1e2e6;z-index:9999;text-align:center;box-sizing:border-box;font-size:0;border:none}.img-content .close{position:absolute;width:22px;height:22px;border-radius:11px;background-color:#e7e8e9;top:8px;right:8px;z-index:9999;text-align:center;line-height:8px}.img-content img{vertical-align:middle}"]
                    },] },
        ];
        /** @nocollapse */
        ShowPictureComponent.ctorParameters = function () { return []; };
        ShowPictureComponent.propDecorators = {
            "pictureUrl": [{ type: core.Input },],
            "update": [{ type: core.Output },],
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
            this.update = new core.EventEmitter();
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
             */ function () {
                return this._jdbMaster;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._jdbMaster = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PictureViewerComponent.prototype, "jdbClear", {
            get: /**
             * @return {?}
             */ function () {
                return this._jdbClear;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._jdbClear = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PictureViewerComponent.prototype, "jdbCurrent", {
            get: /**
             * @return {?}
             */ function () {
                return this.current;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: core.Component, args: [{
                        selector: 'app-picture-viewer',
                        template: "<div class=\"picture-viewer\">\n    <div class=\"img-mask\" *ngIf=\"_jdbMaster\" (click)=\"closeModel()\">\n        <!-- \u906E\u7F69\u5C42 -->\n    </div>\n    <div #imgContent [ngClass]=\"{'img-content-componet':jdbShowType==2}\" class=\"img-content\">\n        <!-- \u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE -->\n        <div class=\"close\" *ngIf=\"_jdbClear\" (click)=\"closeModel()\">\n            <span class=\"icon-close\"></span>\n        </div>\n\n        <!-- \u56FE\u7247box -->\n        <ul class=\"img-box\" #img>\n            <!-- <li *ngFor=\"let item of pictureList;let i=index\" [@imgMove]=\"ImgState(i)\">\n                <img appDragDirective \u00A0[src]=\"item.imgUrl\" alt=\"\" style=\"max-height: 600px;max-width: 800px;\">\n            </li> -->\n        </ul>\n        <!-- \u4E0A\u4E00\u9875\u4E0B\u4E00\u9875 -->\n        <div [hidden]=\"current==0\" class=\"prev-page\" (click)=\"Prev()\">\n            <span class=\"icon-pagination-prev\"></span>\n        </div>\n        <div [hidden]=\"current==pictureList.length-1\" class=\"next-page\" (click)=\"Next()\">\n            <span class=\"icon-pagination-next\"></span>\n        </div>\n\n        <!-- \u53F3\u4E0B\u89D2\u9875\u7801 -->\n        <div class=\"img-index\">{{current+1}}/{{pictureList.length}}</div>\n        <!-- \u7F29\u653E\u65CB\u8F6C\u6309\u94AE\u7EC4 -->\n        <div class=\"btn-box\">\n            <span [ngClass]=\"{'hover-disabled':imgOperate.num===4}\" class=\"icon-picture-zoom-in scale-big\" (click)=\"scaleBig()\"></span>\n            <span [ngClass]=\"{'hover-disabled':imgOperate.num==0.5}\" class=\"icon-picture-zoom-out  scale-small\" (click)=\"scaleSmall()\"></span>\n            <span class=\"icon-picture-counterclockwise routate-ni\" (click)=\"routateNi()\"></span>\n            <span class=\"icon-picture-clockwise routate-shun\" (click)=\"routateShun()\"></span>\n        </div>\n    </div>\n</div>",
                        styles: ["@charset \"UTF-8\";.picture-viewer .img-mask{width:100%;height:100%;background:#000;position:fixed;top:0;left:0;-moz-opacity:.3;opacity:.8;z-index:9998;display:block}.picture-viewer .img-content{background-color:#d7d8db;position:fixed;left:50%;top:50%;border:1px solid #ccc;z-index:9999;text-align:center;box-sizing:border-box;border:none}.picture-viewer .img-content .close{position:absolute;width:22px;height:22px;border-radius:11px;border:1px solid #fff;background-color:rgba(255,255,255,.7);top:8px;right:8px;z-index:9999;text-align:center;line-height:8px}.picture-viewer .img-content .close .icon-close{display:block;margin-top:1px;margin-left:1px;font-size:18px}.picture-viewer .img-content .img-box{position:absolute;left:0;width:100%;height:100%;overflow:hidden}.picture-viewer .img-content .img-box li{background-color:#d7d8db;position:absolute;z-index:11;height:100%;width:100%;transition:.1s}.picture-viewer .img-content .img-box li img{position:absolute;display:block;margin:auto;transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s}.picture-viewer .img-content a{position:absolute;top:50%;margin-top:-30px;width:60px;height:60px;z-index:400;background:url(/assets/images/CXicon.png) 0 0/192px 144px no-repeat}.picture-viewer .img-content .next{right:20px;background-position:-54px -78px}.picture-viewer .img-content .prev{left:20px;background-position:-54px -6px}.picture-viewer .img-content .next:hover{background-position:-126px -78px}.picture-viewer .img-content .prev:hover{background-position:-126px -6px}.picture-viewer .img-content .next-page,.picture-viewer .img-content .prev-page{position:absolute;top:50%;margin-top:-30px;width:60px;height:60px;z-index:400;border-radius:50%;background-color:rgba(0,0,0,.2)}.picture-viewer .img-content .next-page span,.picture-viewer .img-content .prev-page span{display:block;margin-top:6px;color:rgba(255,255,255,.4);font-size:48px}.picture-viewer .img-content .prev-page{left:20px}.picture-viewer .img-content .next-page{right:20px}.picture-viewer .img-content .next-page:hover,.picture-viewer .img-content .prev-page:hover{background-color:rgba(0,0,0,.7)}.picture-viewer .img-content .next-page:hover span,.picture-viewer .img-content .prev-page:hover span{color:#fff}.picture-viewer .img-content .img-index{position:absolute;bottom:15px;right:22px;z-index:101;color:#323233;font-size:16px;height:22px;line-height:22px;width:42px;text-align:center;border-radius:2px;background:rgba(215,216,219,.7)}.picture-viewer .img-content .btn-box{position:absolute;z-index:109;bottom:12px;left:50%;margin-left:-73px;padding:3px 5px;height:30px;width:147px;background:rgba(0,0,0,.5);border-radius:2px;color:rgba(255,255,255,.4)}.picture-viewer .img-content .btn-box span{float:left;margin:0 5px}.picture-viewer .img-content .btn-box .routate-ni:hover,.picture-viewer .img-content .btn-box .routate-shun:hover,.picture-viewer .img-content .btn-box .scale-big:hover,.picture-viewer .img-content .btn-box .scale-small:hover{color:#fff}.picture-viewer .img-content .btn-box .hover-disabled:hover{color:rgba(255,255,255,.4)}.picture-viewer .img-content-componet{position:relative;top:0;left:0;margin:0}"],
                        animations: [
                            core.trigger('imgMove', [
                                /** 不显示 */
                                core.state('off', core.style({ 'display': 'none', 'z-index': '0', 'transform': 'translateX(0)' })),
                                /** 上一张图片 */
                                core.state('prev', core.style({
                                    'z-index': '1',
                                    'transform': 'translateX(-100%)'
                                })),
                                /** 下一张图片 */
                                core.state('next', core.style({ 'z-index': '2', 'transform': 'translateX(100%)' })),
                                /** 当前图片 */
                                core.state('on', core.style({ 'z-index': '3', 'transform': 'translateX(0)' })),
                                core.transition('prev=>on', [
                                    core.animate('0.3s ease-in')
                                ]),
                                core.transition('next=>on', [
                                    core.animate('0.3s ease-in')
                                ]),
                                core.transition('on=>prev', [
                                    core.animate('0.3s ease-in')
                                ]),
                                core.transition('on=>next', [
                                    core.animate('0.3s ease-in')
                                ])
                            ])
                        ]
                    },] },
        ];
        /** @nocollapse */
        PictureViewerComponent.ctorParameters = function () {
            return [
                { type: core.Renderer, },
            ];
        };
        PictureViewerComponent.propDecorators = {
            "pictureList": [{ type: core.Input },],
            "update": [{ type: core.Output },],
            "imgBox": [{ type: core.ViewChild, args: ['img',] },],
            "imgContent": [{ type: core.ViewChild, args: ['imgContent',] },],
            "maxWidth": [{ type: core.Input },],
            "maxHeight": [{ type: core.Input },],
            "jdbShowType": [{ type: core.Input },],
            "jdbMaster": [{ type: core.Input },],
            "jdbClear": [{ type: core.Input },],
            "jdbCurrent": [{ type: core.Input },],
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
            { type: core.Directive, args: [{
                        selector: 'img[appDragDirective]'
                    },] },
        ];
        /** @nocollapse */
        DragDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        DragDirective.propDecorators = {
            "onMousedown": [{ type: core.HostListener, args: ['mousedown', ['$event'],] },],
            "onMousemove": [{ type: core.HostListener, args: ['mousemove', ['$event'],] },],
            "onMouseup": [{ type: core.HostListener, args: ['mouseup', ['$event'],] },],
            "onMouseleave": [{ type: core.HostListener, args: ['mouseleave', ['$event'],] },],
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
            this.jdbPageSizeChange = new core.EventEmitter();
            this.jdbPageIndexChange = new core.EventEmitter();
        }
        Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbShowTotal", {
            get: /**
             * @return {?}
             */ function () {
                return this._showTotal;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._showTotal = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbTotal", {
            get: /**
             * @return {?}
             */ function () {
                return this._total;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._current;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._showPageSize;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._showPageSize = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbPageSize", {
            get: /**
             * @return {?}
             */ function () {
                return this._pageSize;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._options;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._showQuickJump;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._showQuickJump = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbSimple", {
            get: /**
             * @return {?}
             */ function () {
                return this.jdbSimple;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: core.Component, args: [{
                        selector: 'app-jdb-plg-pagination',
                        template: "<div class=\"jdb-plg-pagination\">\n    <!-- \u603B\u6761\u6570 -->\n    <span *ngIf=\"_showTotal\" class=\"total-box\">\n      \u5171{{_total}}\u6761\n    </span>\n\n    <div class=\"operate-box\">\n        <!-- \u6761\u6570\u5207\u6362 -->\n        <div class=\"jdb-plg-pagination-options\" *ngIf=\"_showPageSize\">\n            <app-jdb-plg-select (ngModelChange)=\"dataChange(false,$event)\" [jdbSize]=\"'small'\" [jdbWidth]=\"'90px'\" [(ngModel)]=\"_pageSize\" [jdbSelectList]=\"_options\"></app-jdb-plg-select>\n        </div>\n        <!-- \u57FA\u672C\u5206\u9875\u6837\u5F0F -->\n        <ul *ngIf=\"!_jdbSimple\" class=\"base-pagination\">\n            <!-- \u4E0A\u4E00\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-prev\" title=\"\u4E0A\u4E00\u9875\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_current-1)\">\n                <span class=\"jdbIcon icon-pagination-prev\"></span>\n            </li>\n            <!-- \u9996\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-first\" title=\"\u9996\u9875\" [ngClass]=\"{'active':_current===_firstIndex}\" (click)=\"dataChange(true,_firstIndex)\">\n                {{_firstIndex}}\n            </li>\n            <!-- \u7701\u7565\u53F7 -->\n            <li class=\"jdb-plg-pagination-forward\" *ngIf=\"(_lastIndex >9)&&(_current-4>_firstIndex)\" (click)=\"jumpBefore(_pageSize)\">\n                <span class=\"icon-pagination-more\"></span>\n                <span class=\"icon-pagination-jump-prev\"></span>\n            </li>\n            <!-- \u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-pager\" *ngFor=\"let page of pages\" [ngClass]=\"{'active':_current===page.index}\" (click)=\"dataChange(true,page.index)\">\n                {{page.index}}\n            </li>\n            <!-- \u7701\u7565\u53F7 -->\n            <li class=\"jdb-plg-pagination-backward\" *ngIf=\"(_lastIndex >9)&&(_current+4<_lastIndex)\" (click)=\"jumpAfter(_pageSize)\">\n                <span class=\"icon-pagination-more\"></span>\n                <span class=\"icon-pagination-jump-next\"></span>\n            </li>\n            <!-- \u5C3E\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-last\" *ngIf=\"(_lastIndex>0)&&(_lastIndex!==_firstIndex)\" title=\"\u5C3E\u9875\" [ngClass]=\"{'active':_current===_lastIndex}\" (click)=\"dataChange(true,_lastIndex)\">\n                {{_lastIndex}}\n            </li>\n            <!-- \u4E0B\u4E00\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-next\" title=\"\u4E0B\u4E00\u9875\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_current+1)\">\n                <span class=\"jdbIcon icon-pagination-next\"></span>\n            </li>\n        </ul>\n        <!-- \u7B80\u5355\u5206\u9875\u6837\u5F0F -->\n        <div class=\"simple-pagination\" *ngIf=\"_jdbSimple\">\n            <div class=\"left-box\">\n                <span class=\"icon-pagination-first\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_firstIndex)\"></span>\n                <span class=\"icon-pagination-prev\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_current-1)\"></span>\n            </div>\n            <div class=\"center-box\">\n                {{_current}} / {{_lastIndex}}\n            </div>\n            <div class=\"right-box\">\n                <span class=\"icon-pagination-next\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_current+1)\"></span>\n                <span class=\"icon-pagination-last\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_lastIndex)\"></span>\n            </div>\n        </div>\n        <!-- \u5FEB\u901F\u8DF3\u8F6C -->\n        <div *ngIf=\"_showQuickJump\" class=\"quick-jumper\">\n            \u7B2C\n            <input #inputJump type=\"text\" [(ngModel)]=\"quickJumpPage\" (keyup.enter)=\"quickJump()\" appOnlyNumber=\"true\"> \u9875\n            <button (click)=\"quickJump()\">\u8DF3\u8F6C</button>\n        </div>\n    </div>\n</div>",
                        styles: [".jdb-plg-pagination{height:24px;display:inline-block}.jdb-plg-pagination .total-box{float:left;margin-right:30px;height:24px;line-height:24px;font-size:12px;color:#323233}.jdb-plg-pagination .operate-box{float:right}.jdb-plg-pagination .operate-box .jdb-plg-pagination-options{float:left;margin-right:30px}.jdb-plg-pagination .operate-box .base-pagination{float:left;overflow:hidden}.jdb-plg-pagination .operate-box .base-pagination li{position:relative;float:left;margin-right:5px;padding:0 5px;height:24px;min-width:24px;line-height:24px;text-align:center;border-radius:2px;color:#323233;border:1px solid #afb0b3;cursor:pointer;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;background:#fff}.jdb-plg-pagination .operate-box .base-pagination .disabled{background:#f0f1f5;color:#bfc0c4;border:1px solid #e1e2e6}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward{border:none;padding:0;background:0 0}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward .icon-pagination-jump-next,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward .icon-pagination-jump-prev,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward .icon-pagination-jump-next,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward .icon-pagination-jump-prev{color:#3f69f2;display:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward:hover .icon-pagination-jump-prev{display:block}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward:hover .icon-pagination-more{display:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward:hover .icon-pagination-jump-next{display:block}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward:hover .icon-pagination-more{display:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-first:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-last:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-next:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-pager:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-prev:hover{color:#4d76ff;border:1px solid #4d76ff}.jdb-plg-pagination .operate-box .base-pagination .active,.jdb-plg-pagination .operate-box .base-pagination .active:hover{background:#4d76ff;color:#fff;border:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-next,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-prev{padding:0}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-next .jdbIcon,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-prev .jdbIcon{font-size:22px}.jdb-plg-pagination .operate-box .simple-pagination{float:left;overflow:hidden}.jdb-plg-pagination .operate-box .simple-pagination .center-box,.jdb-plg-pagination .operate-box .simple-pagination .left-box,.jdb-plg-pagination .operate-box .simple-pagination .right-box{overflow:hidden;float:left}.jdb-plg-pagination .operate-box .simple-pagination .center-box span,.jdb-plg-pagination .operate-box .simple-pagination .left-box span,.jdb-plg-pagination .operate-box .simple-pagination .right-box span{float:left;line-height:24px;text-align:center;height:24px;width:24px}.jdb-plg-pagination .operate-box .simple-pagination .center-box span:first-child,.jdb-plg-pagination .operate-box .simple-pagination .left-box span:first-child,.jdb-plg-pagination .operate-box .simple-pagination .right-box span:first-child{margin-right:1px}.jdb-plg-pagination .operate-box .simple-pagination .center-box .disabled,.jdb-plg-pagination .operate-box .simple-pagination .left-box .disabled,.jdb-plg-pagination .operate-box .simple-pagination .right-box .disabled{color:#d7d8db}.jdb-plg-pagination .operate-box .simple-pagination .center-box span:hover,.jdb-plg-pagination .operate-box .simple-pagination .left-box span:hover,.jdb-plg-pagination .operate-box .simple-pagination .right-box span:hover{color:#4d76ff}.jdb-plg-pagination .operate-box .simple-pagination .center-box{width:50px;height:24px;line-height:24px;text-align:center}.jdb-plg-pagination .operate-box .quick-jumper{float:left;margin-left:20px}.jdb-plg-pagination .operate-box .quick-jumper button,.jdb-plg-pagination .operate-box .quick-jumper input{text-align:center;width:40px;height:24px;border-radius:3px;border:1px solid #e1e2e6;outline:0}.jdb-plg-pagination .operate-box .quick-jumper button{margin-left:15px;float:right}.jdb-plg-pagination .operate-box .quick-jumper input{ime-mode:disabled}"]
                    },] },
        ];
        /** @nocollapse */
        JdbPlgPaginationComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        JdbPlgPaginationComponent.propDecorators = {
            "jdbPageSizeChange": [{ type: core.Output },],
            "jdbPageIndexChange": [{ type: core.Output },],
            "inputJump": [{ type: core.ViewChild, args: ['inputJump',] },],
            "jdbShowTotal": [{ type: core.Input },],
            "jdbTotal": [{ type: core.Input },],
            "jdbPageIndex": [{ type: core.Input },],
            "jdbShowPageSize": [{ type: core.Input },],
            "jdbPageSize": [{ type: core.Input },],
            "jdbSizeOptions": [{ type: core.Input },],
            "jdbShowQuickJump": [{ type: core.Input },],
            "jdbSimple": [{ type: core.Input },],
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
             */ function () {
                return this.size;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this.type;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this.loading;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: core.Component, args: [{
                        selector: '[app-jdb-plg-button]',
                        template: "<i class=\"jdb-icon-loading action\" *ngIf=\"loading\"></i>\n<ng-content></ng-content>",
                        styles: ["@-webkit-keyframes loadingCircle{0%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loadingCircle{0%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host.jdb-plg-btn{font-weight:500;white-space:nowrap;cursor:pointer;outline:0}:host.jdb-plg-btn .action{display:inline-block;vertical-align:middle}:host.jdb-plg-btn .action:before{display:inline-block;-webkit-animation:1s linear infinite loadingCircle;animation:1s linear infinite loadingCircle}:host.jdb-plg-btn .action2{display:inline-block;-webkit-transform:translateY(-37%);transform:translateY(-37%)}:host.large{min-width:120px;line-height:40px;border-radius:4px;padding:0 16px}:host.default{min-width:100px;line-height:30px;border-radius:3px;padding:0 12px}:host.small{min-width:60px;line-height:24px;border-radius:2px;padding:0 10px}:host.small .action{width:24px;height:24px}:host.primary{background-color:#3f69f2;color:#fff;border:1px solid #3f69f2}:host.primary:hover{background-color:#4d76ff;border:1px solid #4d76ff}:host.primary:active{background-color:#264199;border:1px solid #264199}:host.primary:disabled{background-color:#aabbf2;border:1px solid #aabbf2}:host.gray{background-color:#f0f1f5;color:#575757;border:1px solid #d7d8db}:host.gray:hover{background-color:#fff}:host.gray:active{background-color:#d7d8db}:host.gray:disabled{background-color:#f0f1f5}:host.danger{background-color:#f84a4a;color:#fff;border:1px solid #f84a4a}:host.danger:hover{background-color:#f66;border:1px solid #f66}:host.danger:active{background-color:#c32929;border:1px solid #c32929}:host.danger:disabled{background-color:#e6bcbc;border:1px solid #e6bcbc}:host.buleline{background-color:#fff;color:#3f69f2;border:1px solid #3f69f2}:host.buleline:hover{background-color:#ebf0fe}:host.buleline:active{background-color:#d7d8db}:host.buleline:disabled{color:#afb0b3;border:1px solid #afb0b3;background-color:#f0f1f5}:host.white{background-color:#fff;color:#575757;border:1px solid #afb0b3}:host.white:hover{background-color:#f0f1f5}:host.white:active{background-color:#d7d8db}:host.white:disabled{color:#afb0b3;border:1px solid #afb0b3;background-color:#f0f1f5}:host.loading_disable{background-color:#aabbf2;border:1px solid #aabbf2;pointer-events:none}"]
                    },] },
        ];
        /** @nocollapse */
        JdbPlgButtonComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        JdbPlgButtonComponent.propDecorators = {
            "jdbSize": [{ type: core.Input },],
            "jdbType": [{ type: core.Input },],
            "jdbLoading": [{ type: core.Input },],
        };
        return JdbPlgButtonComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

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
            this.MvisibileChange = new core.EventEmitter();
            this.MOnOk = new core.EventEmitter();
            this.MOnCancel = new core.EventEmitter();
        }
        Object.defineProperty(JdbPlgDialogComponent.prototype, "Mvisible", {
            get: /**
             * @return {?}
             */ function () {
                return this._visible;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._footerHide;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function (value) {
                if (value instanceof core.TemplateRef) {
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
             */ function (value) {
                if (value instanceof core.TemplateRef) {
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
             */ function (value) {
                if (value instanceof core.TemplateRef) {
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
             */ function (value) {
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
             */ function (value) {
                this._customClass = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgDialogComponent.prototype, "MOkText", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._okText = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgDialogComponent.prototype, "McancelText", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._cancelText = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgDialogComponent.prototype, "MRogerText", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                if (( /** @type {?} */(e.target)).getAttribute('role') === 'dialog') {
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
            { type: core.Component, args: [{
                        selector: 'app-jdb-plg-dialog',
                        template: "<div [ngClass]=\"_customClass\">\n    <div class=\"_maskClass\" [ngClass]=\"{'hid':!_visible}\" [style.zIndex]=\"1000\"></div>\n    <div class=\"jdb-modal\" tabindex=\"-1\" role=\"dialog\" [ngClass]=\"{'hid':!_visible}\" [ngStyle]=\"{'dispaly':!_visible}\" (click)=\"closeModal($event)\" class=\"_wrapClass\" [ngClass]=\"_wrapClass\" [style.zIndex]=\"1000\" [attr.aria-modalId]=\"modalId\">\n        <div #modal_content class=\"modal\" [@optionsState]=\"_state\" [ngStyle]=\"_bodyStyleMap\">\n            <div class=\"modal-content\">\n                <ng-template [ngIf]=\"_closeable\">\n                    <button class=\"modal-close\" (click)=\"clickCancel($event)\">\n                      <!-- <span class=\"modal-close-x\"></span> -->\n                      <span class=\"icon-close\"></span>\n                    </button>\n                </ng-template>\n\n                <div class=\"modal-header\" *ngIf=\"_title||_titleTpl\">\n                    <div class=\"modal-title\" [attr.id]=\"modalId\">\n                        <ng-template #defaultTitle>\n                            {{_title}}\n                        </ng-template>\n                        <ng-template [ngTemplateOutlet]=\"_titleTpl||defaultTitle\">\n                        </ng-template>\n                    </div>\n                </div>\n                <div class=\"modal-body\">\n                    <ng-template #defaultContent>{{_content}}</ng-template>\n                    <ng-template [ngTemplateOutlet]=\"_contentTpl||defaultContent\"></ng-template>\n                    <ng-template #modal_component></ng-template>\n                </div>\n                <div class=\"modal-footer\" *ngIf=\"!_footerHide\">\n                    <ng-template #defalutFooter>\n                        <button *ngIf=\"!_isConfirm\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'white'\" (click)=\"clickCancel($event)\"><span>{{_cancelText||'\u53D6\u6D88'}}</span></button>\n                        <button *ngIf=\"!_isConfirm\" class=\"right-btn\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'primary'\" (click)=\"clickOk($event)\"><span>{{_okText||'\u786E\u8BA4'}}</span></button>\n                        <button *ngIf=\"_isConfirm\" class=\"right-btn\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'primary'\" (click)=\"clickOk($event)\" (click)=\"clickOk($event)\"><span>{{_RogerText}}</span></button>\n                    </ng-template>\n                    <ng-template [ngTemplateOutlet]=\"_footerTpl||defalutFooter\"></ng-template>\n                </div>\n                <div tabindex=\"0\" style=\"width:0px;height:0px;overflow:hidden;\">aaa</div>\n            </div>\n        </div>\n    </div>\n</div>",
                        styles: ["._maskClass{position:fixed;top:0;bottom:0;left:0;right:0;height:100%;background:rgba(0,0,0,.5)}._maskClass.hid{display:none}._wrapClass{position:fixed;overflow:auto;top:0;left:0;bottom:0;right:0;z-index:1000;-webkit-overflow-scrolling:touch;outline:0}._wrapClass.hid{display:none}.modal{position:absolute;left:50%;top:50%;background:#fff}.modal-header{background:#f0f1f5;border-bottom:1px solid #d7d8db;border-top-left-radius:3px;border-top-right-radius:3px}.modal-title{margin:0;font-size:16px;line-height:40px;color:#323233;text-align:center}.modal-close{cursor:pointer;border:none;width:40px;height:40px;background:0 0;position:absolute;right:0;top:0;z-index:10;line-height:1;text-decoration:none;color:#000;outline:0}.modal-close-x{display:inline-block;text-align:center;width:20px;height:20px;line-height:40px;font-size:16px;background-size:cover}.modal-close-x:hover{transition:color .3s ease;color:#000}.modal-body{padding:40px;background:#fff;overflow:hidden}.modal-footer{padding:40px 0;background:#fff;border-bottom-left-radius:3px;border-bottom-right-radius:3px;text-align:center}.modal-footer .right-btn{margin-left:20px}"],
                        animations: [
                            animations.trigger('optionsState', [
                                animations.state('showM', animations.style({
                                    transform: 'translate(-50%, -50%)',
                                    opacity: '1',
                                })),
                                animations.state('hideM', animations.style({
                                    transform: 'translate(-50%, -80%)',
                                    opacity: '0',
                                })),
                                animations.transition('showM <=> hideM', animations.animate('200ms ease-out'))
                            ])
                        ]
                    },] },
        ];
        /** @nocollapse */
        JdbPlgDialogComponent.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver, },
            ];
        };
        JdbPlgDialogComponent.propDecorators = {
            "contentEl": [{ type: core.ViewChild, args: ['modal_content',] },],
            "bodyEl": [{ type: core.ViewChild, args: ['modal_component', { read: core.ViewContainerRef },] },],
            "MvisibileChange": [{ type: core.Output },],
            "MOnOk": [{ type: core.Output },],
            "MOnCancel": [{ type: core.Output },],
            "Mvisible": [{ type: core.Input },],
            "MfooterHiden": [{ type: core.Input },],
            "Mtitle": [{ type: core.Input },],
            "Mcontent": [{ type: core.Input },],
            "Mfooter": [{ type: core.Input },],
            "Mwidth": [{ type: core.Input },],
            "onEsc": [{ type: core.HostListener, args: ['keydown.esc', ['$event'],] },],
            "Mclass": [{ type: core.Input },],
            "MOkText": [{ type: core.Input },],
            "McancelText": [{ type: core.Input },],
            "MRogerText": [{ type: core.Input },],
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
            { type: core.Directive, args: [{
                        selector: '[appOnlyNumber]'
                    },] },
        ];
        /** @nocollapse */
        OnlyNumberDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
            ];
        };
        OnlyNumberDirective.propDecorators = {
            "appOnlyNumber": [{ type: core.Input },],
            "onKeyDown": [{ type: core.HostListener, args: ['keydown', ['$event'],] },],
            "onKeyUp": [{ type: core.HostListener, args: ['keyup', ['$event'],] },],
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
             */ function () {
                return this._jdbItemDisabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._jdbItemDisabled = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbSureDisabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._jdbSureDisabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._jdbSureDisabled = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbPlaceHolder", {
            get: /**
             * @return {?}
             */ function () {
                return this._placeHolder;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._placeHolder = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbClear", {
            get: /**
             * @return {?}
             */ function () {
                return this._jdbClear;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._jdbClear = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbSelectList", {
            get: /**
             * @return {?}
             */ function () {
                return this._selectList;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._size;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._size = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbWidth", {
            get: /**
             * @return {?}
             */ function () {
                return this._width;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._width = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbOptionText", {
            get: /**
             * @return {?}
             */ function () {
                return this._optionText;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._optionText = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbOptionValue", {
            get: /**
             * @return {?}
             */ function () {
                return this._optionValue;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._optionValue = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbDisabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._jdbDisabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._jdbDisabled = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbMode", {
            get: /**
             * @return {?}
             */ function () {
                return this._jdbMode;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: core.Component, args: [{
                        selector: 'app-jdb-plg-select',
                        template: "<!-- \u5355\u9009 -->\n<div *ngIf=\"_jdbMode=='chooseOne'\" #inputDom class=\"jdb-plg-select-one\" (click)=\"dialogShow($event)\" [ngClass]=\"_classMap\" [ngStyle]=\"{'width':_width}\">\n    <!-- placeHolder -->\n    <div class=\"jdb-plg-select-placeholder\" [hidden]=\"inputText!=''\">{{_placeHolder}}</div>\n    <!-- \u5355\u9009 -->\n    <!-- <span class=\"chooseOne\" [hidden]=\"inputText==''\">{{inputText}}</span> -->\n    <input class=\"chooseOne chooseOneInput\" [hidden]=\"inputText==''\" type=\"text\" [(ngModel)]=\"inputText\" readonly>\n    <ul #optionList [ngClass]=\"{ 'options-show':show, 'options-no-margin':!spaceFlex} \" class=\"options \">\n        <!-- \u5355\u9009 -->\n        <li *ngFor=\"let option of _selectList \" (click)=\"item($event,option) \" [ngClass]=\"{active:ngModelValue===option[_optionValue],disabled:option[_jdbItemDisabled] === _jdbSureDisabled} \">\n            <img class=\"img-box\" *ngIf=\"_showImgBox&&option.imgUrl\" [src]=\"option.imgUrl\" alt=\"\">\n            <span class=\"img-box\" *ngIf=\"_showImgBox&&!option.imgUrl\"></span>\n            <span class=\"text-box\">{{_optionText=='option'?option:option[_optionText]}}</span>\n        </li>\n    </ul>\n    <!-- \u6E05\u7A7A\u56FE\u6807 -->\n    <span class=\"close-icon icon-empty \" [hidden]=\"!isShowClear \" (click)=\"clearInputText($event) \"></span>\n    <!-- \u5355\u9009\u65F6\u4E0B\u62C9\u56FE\u6807 -->\n    <span class=\"select-icon icon-select-arrow \" [hidden]=\"isShowClear \"></span>\n</div>\n\n<!-- \u591A\u9009 -->\n<div *ngIf=\"_jdbMode=='chooseMore' \" #inputDom class=\"jdb-plg-select-more \" (click)=\"dialogShow($event) \" [ngClass]=\"_classMap \" [ngStyle]=\"{ 'width':_width} \">\n    <!-- placeHolder -->\n    <div class=\"jdb-plg-select-placeholder \" [hidden]=\"inputText.length !=0 \">{{_placeHolder}}</div>\n    <!-- \u591A\u9009item -->\n    <ul class=\"chooseMore \">\n        <li *ngFor=\"let item of inputText \">\n            {{item.text}}\n            <span class=\"item-delete icon-close \" (click)=\"deleteMoreItem($event,item) \"></span>\n        </li>\n    </ul>\n    <ul #optionList [ngClass]=\"{ 'options-show':show, 'options-no-margin':!spaceFlex} \" class=\"options \">\n        <li class=\"choose-more \" *ngFor=\"let option of _selectList \" (click)=\"chooseMore($event,option) \" [ngClass]=\"{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} \">\n            <!-- {{_optionText=='option'?option:option[_optionText]}} -->\n            <img class=\"img-box\" *ngIf=\"_showImgBox&&option.imgUrl\" [src]=\"option.imgUrl\" alt=\"\">\n            <span class=\"img-box\" *ngIf=\"_showImgBox&&!option.imgUrl\"></span>\n            <span class=\"text-box\">{{_optionText=='option'?option:option[_optionText]}}</span>\n            <span [hidden]=\"!moreIndex(option) \" class=\"choose-right icon-selected \"></span>\n        </li>\n    </ul>\n    <!-- \u6E05\u7A7A\u56FE\u6807 -->\n    <span class=\"close-icon icon-empty \" [hidden]=\"!isShowClear \" (click)=\"clearInputText($event) \"></span>\n</div>\n\n<!-- \u9009\u4E2D\u51E0\u9879 -->\n<div *ngIf=\"_jdbMode=='chooseNum' \" #inputDom class=\"jdb-plg-select-num \" (click)=\"dialogShow($event) \" [ngClass]=\"_classMap \" [ngStyle]=\"{ 'width':_width} \">\n    <!-- placeHolder -->\n    <div class=\"jdb-plg-select-placeholder \" [hidden]=\"inputText!=0 \">{{_placeHolder}}</div>\n    <span class=\"choose-tip \" [hidden]=\"inputText==0 \">\u5DF2\u9009\u4E2D{{inputText}}\u9879</span>\n    <ul #optionList [ngClass]=\"{ 'options-show':show, 'options-no-margin':!spaceFlex} \" class=\"options \">\n        <li class=\"choose-more \" *ngFor=\"let option of _selectList \" (click)=\"numClick($event,option) \" [ngClass]=\"{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} \">\n            <!-- {{_optionText=='option'?option:option[_optionText]}} -->\n            <img class=\"img-box\" *ngIf=\"_showImgBox&&option.imgUrl\" [src]=\"option.imgUrl\" alt=\"\">\n            <span class=\"img-box\" *ngIf=\"_showImgBox&&!option.imgUrl\"></span>\n            <span class=\"text-box\">{{_optionText=='option'?option:option[_optionText]}}</span>\n            <span [hidden]=\"!moreIndex(option) \" class=\"choose-right icon-selected \"></span>\n        </li>\n    </ul>\n    <!-- \u6E05\u7A7A\u56FE\u6807 -->\n    <span class=\"close-icon icon-empty \" [hidden]=\"!isShowClear \" (click)=\"clearInputText($event) \"></span>\n    <span class=\"select-icon icon-select-arrow \" [hidden]=\"isShowClear \"></span>\n</div>\n\n<!-- \u906E\u7F69\u5C42 -->\n<div class=\"jdb-plg-select-master \" *ngIf=\"show \"></div>",
                        styles: [".jdb-plg-select-more,.jdb-plg-select-num,.jdb-plg-select-one{position:relative;display:inline-block;width:200px;border:1px solid #afb0b3;border-radius:2px;background:#fff;text-align:left;cursor:pointer}.jdb-plg-select-more .jdb-plg-select-placeholder,.jdb-plg-select-num .jdb-plg-select-placeholder,.jdb-plg-select-one .jdb-plg-select-placeholder{color:#afb0b3;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.jdb-plg-select-more .options,.jdb-plg-select-num .options,.jdb-plg-select-one .options{position:absolute;overflow-y:scroll;z-index:9999;opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:0 0;transform-origin:0 0;left:-1px;border:1px solid #afb0b3;width:100%;max-height:190px;background:#fff}.jdb-plg-select-more .options li,.jdb-plg-select-num .options li,.jdb-plg-select-one .options li{padding:5px 12px;min-height:30px;color:#323233}.jdb-plg-select-more .options li:hover,.jdb-plg-select-num .options li:hover,.jdb-plg-select-one .options li:hover{background-color:#f0f1f5;color:#323233}.jdb-plg-select-more .options li .choose-right,.jdb-plg-select-num .options li .choose-right,.jdb-plg-select-one .options li .choose-right{float:right;margin-top:-2px}.jdb-plg-select-more .options li .img-box,.jdb-plg-select-num .options li .img-box,.jdb-plg-select-one .options li .img-box{display:inline-block;vertical-align:middle;height:18px;width:18px}.jdb-plg-select-more .options li .text-box,.jdb-plg-select-num .options li .text-box,.jdb-plg-select-one .options li .text-box{display:inline-block;vertical-align:middle}.jdb-plg-select-more .options .choose-more,.jdb-plg-select-num .options .choose-more,.jdb-plg-select-one .options .choose-more{margin-bottom:1px}.jdb-plg-select-more .options .active,.jdb-plg-select-more .options .active:hover,.jdb-plg-select-num .options .active,.jdb-plg-select-num .options .active:hover,.jdb-plg-select-one .options .active,.jdb-plg-select-one .options .active:hover{background-color:#3f69f2;color:#fff}.jdb-plg-select-more .options .disabled,.jdb-plg-select-num .options .disabled,.jdb-plg-select-one .options .disabled{background-color:none;color:#afb0b3;cursor:not-allowed}.jdb-plg-select-more .options .disabled:hover,.jdb-plg-select-num .options .disabled:hover,.jdb-plg-select-one .options .disabled:hover{background-color:none;color:#afb0b3}.jdb-plg-select-more .options-show,.jdb-plg-select-num .options-show,.jdb-plg-select-one .options-show{opacity:1;-webkit-transform:scaleY(1);transform:scaleY(1)}.jdb-plg-select-more .close-icon,.jdb-plg-select-num .close-icon,.jdb-plg-select-one .close-icon{position:absolute;right:5px;top:50%;margin-top:-12px;color:#7d7e80}.jdb-plg-select-more .close-icon:hover,.jdb-plg-select-num .close-icon:hover,.jdb-plg-select-one .close-icon:hover{color:#323233}.jdb-plg-select-more .select-icon,.jdb-plg-select-num .select-icon,.jdb-plg-select-one .select-icon{position:absolute;right:5px;top:50%;margin-top:-12px}.jdb-plg-select-one .chooseOne{color:#333}.jdb-plg-select-one .chooseOneInput{border:none;height:100%;width:100%;padding-right:18px}.jdb-plg-select-more .chooseMore li,.jdb-plg-select-num .chooseMore li{position:relative;display:inline-block;margin-right:5px;padding:0 5px;height:22px;font-size:13px;border:1px solid #d7d8db;border-radius:2px;color:#333;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.jdb-plg-select-more .chooseMore li .item-delete,.jdb-plg-select-num .chooseMore li .item-delete{font-size:12px}.jdb-plg-select-active{border:1px solid #3f69f2}.jdb-plg-select-disabled{background:#f0f1f5}.small{min-height:24px;padding:2px 10px;font-size:12px}.small .options{margin-top:7px}.small .options-no-margin{margin:0}.middle{min-height:30px;padding:5px 10px;font-size:13px}.middle .options{margin-top:10px}.middle .options-no-margin{margin:0}.middle .choose-tip,.middle .chooseOne,.middle .jdb-plg-select-placeholder{height:18px;line-height:18px}.middle .choose-tip,.middle .chooseOne{display:block}.middle .chooseMore li{margin-bottom:3px}.large{min-height:40px;padding:9px 10px;font-size:14px}.large .options{margin-top:14px}.large .options-no-margin{margin:0}.large .choose-tip,.large .chooseOne,.large .jdb-plg-select-placeholder{height:20px;line-height:20px}.large .choose-tip,.large .chooseOne{display:block}.large .chooseMore li{margin-bottom:8px}.jdb-plg-select-bottom-middle{padding:3px 10px 0}.jdb-plg-select-bottom-large{padding:8px 10px 0}.jdb-plg-select-master{position:fixed;top:0;bottom:0;left:0;width:100%;background:0 0;z-index:9998}"],
                        providers: [
                            {
                                // 注册成为表单控件
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return JdbPlgSelectComponent; }),
                                multi: true
                            }
                        ]
                    },] },
        ];
        /** @nocollapse */
        JdbPlgSelectComponent.ctorParameters = function () {
            return [
                { type: core.Renderer2, },
                { type: core.Renderer, },
            ];
        };
        JdbPlgSelectComponent.propDecorators = {
            "jdbClassName": [{ type: core.Input },],
            "jdbItemDisabled": [{ type: core.Input },],
            "jdbSureDisabled": [{ type: core.Input },],
            "jdbPlaceHolder": [{ type: core.Input },],
            "jdbClear": [{ type: core.Input },],
            "jdbSelectList": [{ type: core.Input },],
            "jdbSize": [{ type: core.Input },],
            "jdbWidth": [{ type: core.Input },],
            "jdbOptionText": [{ type: core.Input },],
            "jdbOptionValue": [{ type: core.Input },],
            "jdbDisabled": [{ type: core.Input },],
            "jdbMode": [{ type: core.Input },],
            "inputDom": [{ type: core.ViewChild, args: ['inputDom',] },],
            "optionList": [{ type: core.ViewChild, args: ['optionList',] },],
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
            this.jdbBlur = new core.EventEmitter();
            this.jdbFocus = new core.EventEmitter();
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
             */ function () {
                return this._type;
            },
            set: /**
             * @param {?} type
             * @return {?}
             */ function (type) {
                this._type = type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbPlaceHolder", {
            get: /**
             * @return {?}
             */ function () {
                return this._placeHolder;
            },
            set: /**
             * @param {?} placeHolder
             * @return {?}
             */ function (placeHolder) {
                this._placeHolder = placeHolder;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbSize", {
            get: /**
             * @return {?}
             */ function () {
                return this._size;
            },
            set: /**
             * @param {?} size
             * @return {?}
             */ function (size) {
                this._size = { large: 'lg', small: 'sm' }[size];
                this.setClassMap();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbDisabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._disabled;
            },
            set: /**
             * @param {?} disabled
             * @return {?}
             */ function (disabled) {
                this._disabled = this.toBoolean(disabled);
                this.setClassMap();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbReadonly", {
            get: /**
             * @return {?}
             */ function () {
                return this._readonly;
            },
            set: /**
             * @param {?} readonly
             * @return {?}
             */ function (readonly) {
                this._readonly = this.toBoolean(readonly);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbValue", {
            get: /**
             * @return {?}
             */ function () {
                if (this._value == '0') {
                    return '0';
                }
                return this._value || '';
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._error;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._error = this.toBoolean(value);
                this.setClassMap();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbClear", {
            get: /**
             * @return {?}
             */ function () {
                return this._clear;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._clear = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbMaxLength", {
            get: /**
             * @return {?}
             */ function () {
                return this._maxlength;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._maxlength = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbPromptData", {
            get: /**
             * @return {?}
             */ function () {
                return this._autoPromptData;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: core.Component, args: [{
                        selector: 'app-jdb-plg-input',
                        template: "<span class=\"input-group-addon\" *ngIf=\"_addOnContentBefore\">\n    <ng-template [ngTemplateOutlet]=\"_addOnContentBefore\">\n    </ng-template>\n</span>\n<ng-template [ngIf]=\"_type=='text'\">\n    <div class=\"input-text-wrap\" [ngClass]=\"_inputWrapClass\">\n        <span class=\"input-prefix\" *ngIf=\"_prefixContent\">\n            <ng-template [ngTemplateOutlet]=\"_prefixContent\">\n            </ng-template>\n        </span>\n        <input (blur)=\"_emitBlur($event)\" (focus)=\"_emitFocus($event)\" [disabled]=\"_disabled\" [readonly]=\"_readonly\" [attr.type]=\"_type\" class=\"input\" [ngClass]=\"_classMap\" [attr.placeholder]=\"_placeHolder\" [(ngModel)]=\"jdbValue\" [style.width]=\"width\" maxlength=\"{{jdbMaxLength}}\"\n        />\n        <span class=\"input-clear\" *ngIf=\"_clear && _value && _type=='text'\" (click)=\"clearTxt()\">\n            <i class=\"close-icon icon-empty\"></i>\n        </span>\n        <span class=\"ant-input-suffix\" *ngIf=\"_suffixContent\">\n            <i class=\"iconfont icon-guanbi2fill\"></i>\n            <ng-template [ngTemplateOutlet]=\"_suffixContent\">\n            </ng-template>\n        </span>\n    </div>\n    <div class=\"input-error-tip\" *ngIf=\"jdbError && _errorContent\">\n        <i class=\"icon-message-error error-tip\"></i>\n        <span>\n            <ng-template [ngTemplateOutlet]=\"_errorContent\">\n            </ng-template>\n        </span>\n    </div>\n</ng-template>\n<span class=\"input-group-addon\" *ngIf=\"_addOnContentAfter\">\n      <ng-template [ngTemplateOutlet]=\"_addOnContentAfter\">\n      </ng-template>\n</span>\n<ng-template [ngIf]=\"_type=='textarea'\">\n    <div class=\"input-text-wrap\">\n        <textarea (blur)=\"_emitBlur($event)\" (focus)=\"_emitFocus($event)\" (input)=\"textareaOnChange($event)\" #inputTextarea [disabled]=\"_disabled\" [readonly]=\"_readonly\" type=\"textarea\" class=\"input input-textarea\" [ngClass]=\"_classMap\" [attr.placeholder]=\"jdbPlaceHolder\"\n            [(ngModel)]=\"jdbValue\" maxlength=\"{{jdbMaxLength}}\" [style.width]=\"width\"></textarea>\n        <span class=\"textarea-wc-tip\" [ngClass]=\"{'textarea-wc-tip-red': jdbValue&&jdbValue.length == jdbMaxLength}\" *ngIf=\"jdbMaxLength && !_disabled &&!_readonly\">{{(jdbValue&&jdbValue.length)||0}}/{{jdbMaxLength}}</span>\n    </div>\n</ng-template>",
                        styles: [".input-text-wrap{position:relative;display:inline-block}.input{height:30px;width:300px;background:#fff;border:1px solid #afb0b3;border-radius:2px;font-size:13px;padding:0 10px;line-height:30px;color:#333}.input:focus{outline:0;border-color:#3f69f2}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#afb0b3}.prefix .input{padding-left:30px}.input-textarea{width:300px;height:80px;overflow-y:auto;font-size:13px;color:#000;line-height:20px}.input-disabled{background:#f0f1f5;color:#7d7e80}.disabled .input{color:#7d7e80}.input-text-lg{height:40px;font-size:14px}.input-text-sm{height:24px;font-size:12px}.input-textarea-lg{height:120px;font-size:14px}.input-textarea-sm{height:80px;font-size:12px}.input-error{border-color:#f84a4a}.input-clear{position:absolute;right:5px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:24px}.input-prefix{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:7px}.input-error-tip{color:#f84a4a;font-size:12px;line-height:20px;max-width:200px}.error-tip{font-size:16px;line-height:20px}.textarea-wc-tip{position:absolute;bottom:5px;right:10px;font-size:12px;color:#7d7e80}.textarea-wc-tip-red{color:#f84a4a}"],
                        encapsulation: core.ViewEncapsulation.None,
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return JdbPlgInputComponent; }),
                                multi: true
                            }
                        ],
                    },] },
        ];
        /** @nocollapse */
        JdbPlgInputComponent.propDecorators = {
            "width": [{ type: core.Input },],
            "_errorContent": [{ type: core.ContentChild, args: ['jdbErrorContent',] },],
            "_addOnContentBefore": [{ type: core.ContentChild, args: ['addContentBefore',] },],
            "_addOnContentAfter": [{ type: core.ContentChild, args: ['addContentAfter',] },],
            "_prefixContent": [{ type: core.ContentChild, args: ['prefixContent',] },],
            "_suffixContent": [{ type: core.ContentChild, args: ['suffixContent',] },],
            "jdbBlur": [{ type: core.Output },],
            "jdbFocus": [{ type: core.Output },],
            "compositionStart": [{ type: core.HostListener, args: ['compositionstart', ['$event'],] },],
            "compositionEnd": [{ type: core.HostListener, args: ['compositionend', ['$event'],] },],
            "jdbType": [{ type: core.Input },],
            "jdbPlaceHolder": [{ type: core.Input },],
            "jdbSize": [{ type: core.Input },],
            "jdbDisabled": [{ type: core.Input },],
            "jdbReadonly": [{ type: core.Input },],
            "jdbValue": [{ type: core.Input },],
            "jdbError": [{ type: core.Input },],
            "jdbClear": [{ type: core.Input },],
            "jdbMaxLength": [{ type: core.Input },],
            "jdbPromptData": [{ type: core.Input },],
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
        catch ( /** @type {?} */e) {
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
            if (( /** @type {?} */(Object)).getOwnPropertySymbols) {
                symbols = ( /** @type {?} */(Object)).getOwnPropertySymbols(from);
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
        function JdbPlgBaseService(http$$1, componentFactoryResolver, route) {
            this.http = http$$1;
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
                if (delayTime === void 0) {
                    delayTime = 3000;
                }
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
                var /** @type {?} */ headers = new http.Headers();
                headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                var /** @type {?} */ reqUrl = apiName;
                var /** @type {?} */ requestoptions = new http.RequestOptions({
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
                    return Rx.Observable.throw(error || 'Server error');
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
                var /** @type {?} */ headers = new http.Headers();
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
                var /** @type {?} */ options = new http.RequestOptions({
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
                    return Rx.Observable.throw(error || 'Server error');
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
                var /** @type {?} */ cookieStr = ng2Cookies.Cookie.get('loginInfo');
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
                    catch ( /** @type {?} */e) {
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        JdbPlgBaseService.ctorParameters = function () {
            return [
                { type: http.Http, },
                { type: core.ComponentFactoryResolver, },
                { type: router.Router, },
            ];
        };
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
            { type: core.Injectable },
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
                if (delayTime === void 0) {
                    delayTime = 3000;
                }
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        CommonMethodService.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver, },
            ];
        };
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
            { type: core.Component, args: [{
                        selector: 'app-jdb-plg-table-error',
                        template: "<div class=\"jdb-plg-table-error\">\n    {{tableErrorText}}\n</div>",
                        styles: [".jdb-plg-table-error{-webkit-transform:translateX(-50%);transform:translateX(-50%);position:absolute;top:90px;left:50%}"]
                    },] },
        ];
        /** @nocollapse */
        JdbPlgTableErrorComponent.ctorParameters = function () { return []; };
        JdbPlgTableErrorComponent.propDecorators = {
            "tableErrorText": [{ type: core.Input },],
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
            { type: core.Pipe, args: [{ name: 'provinceReformPipe' },] },
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
            { type: core.Pipe, args: [{ name: 'amountReformPipe' },] },
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule
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

    exports.JdbPlgUiModule = JdbPlgUiModule;
    exports.JdbPlgBaseService = JdbPlgBaseService;
    exports.FillTableService = FillTableService;
    exports.CommonMethodService = CommonMethodService;
    exports.JdbPlgButtonComponent = JdbPlgButtonComponent;
    exports.JdbPlgDialogComponent = JdbPlgDialogComponent;
    exports.JdbPlgInputComponent = JdbPlgInputComponent;
    exports.JdbPlgPaginationComponent = JdbPlgPaginationComponent;
    exports.JdbPlgSelectComponent = JdbPlgSelectComponent;
    exports.JdbTabComponent = JdbTabComponent;
    exports.JdbPlgTableErrorComponent = JdbPlgTableErrorComponent;
    exports.JdbPlgToastComponent = JdbPlgToastComponent;
    exports.PictureViewerComponent = PictureViewerComponent;
    exports.ShowPictureComponent = ShowPictureComponent;
    exports.ɵa = DragDirective;
    exports.ɵd = OnlyNumberDirective;
    exports.ɵc = AmountReformPipe;
    exports.ɵb = ProvinceReformPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC11aS1jb3JlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHRlc3QtdWkvY29yZS9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy10b2FzdC9qZGItcGxnLXRvYXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHRlc3QtdWkvY29yZS9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy10YWIvamRiLXRhYi5jb21wb25lbnQudHMiLCJuZzovL0B0ZXN0LXVpL2NvcmUvY29yZS9jb21wb25lbnRzL3Nob3ctcGljdHVyZS9zaG93LXBpY3R1cmUuY29tcG9uZW50LnRzIiwibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvY29tcG9uZW50cy9waWN0dXJlLXZpZXdlci9waWN0dXJlLXZpZXdlci5jb21wb25lbnQudHMiLCJuZzovL0B0ZXN0LXVpL2NvcmUvY29yZS9kaXJlY3RpdmUvZHJhZy5kaXJlY3RpdmUudHMiLCJuZzovL0B0ZXN0LXVpL2NvcmUvY29yZS9jb21wb25lbnRzL2pkYi1wbGctcGFnaW5hdGlvbi9qZGItcGxnLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLWJ1dHRvbi9qZGItcGxnLWJ1dHRvbi5jb21wb25lbnQudHMiLG51bGwsIm5nOi8vQHRlc3QtdWkvY29yZS9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy1kaWFsb2cvamRiLXBsZy1kaWFsb2cuY29tcG9uZW50LnRzIiwibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvZGlyZWN0aXZlL29ubHktbnVtYmVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHRlc3QtdWkvY29yZS9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy1zZWxlY3QvamRiLXBsZy1zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLWlucHV0L2pkYi1wbGctaW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL3F1ZXJ5LXN0cmluZy50cyIsIm5nOi8vQHRlc3QtdWkvY29yZS9jb3JlL3NlcnZpY2VzL2pkYi1wbGctYmFzZS9vYmplY3QtYXNzaWduLnRzIiwibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2pkYi1wbGctYmFzZS5zZXJ2aWNlLnRzIiwibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2ZpbGwtdGFibGUuc2VydmljZS50cyIsIm5nOi8vQHRlc3QtdWkvY29yZS9jb3JlL3NlcnZpY2VzL2pkYi1wbGctYmFzZS9jb21tb24tbWV0aG9kLnNlcnZpY2UudHMiLCJuZzovL0B0ZXN0LXVpL2NvcmUvY29yZS9jb21wb25lbnRzL2pkYi1wbGctdGFibGUtZXJyb3IvamRiLXBsZy10YWJsZS1lcnJvci5jb21wb25lbnQudHMiLCJuZzovL0B0ZXN0LXVpL2NvcmUvY29yZS9waXBlL3Byb3ZpbmNlLXJlZm9ybS5waXBlLnRzIiwibmc6Ly9AdGVzdC11aS9jb3JlL2NvcmUvcGlwZS9hbW91bnQtcmVmb3JtLnBpcGUudHMiLCJuZzovL0B0ZXN0LXVpL2NvcmUvamRiLXBsZy11aS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWpkYi1wbGctdG9hc3QnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ0b2FzdC13cmFwZXJcIj5cbiAge3ttc2d9fVxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLnRvYXN0LXdyYXBlcntwb3NpdGlvbjpmaXhlZDtib3JkZXItcmFkaXVzOjVweDttaW4td2lkdGg6MTYwcHg7bWF4LXdpZHRoOjE5MHB4O3BhZGRpbmc6MzBweCAxMHB4O3RleHQtYWxpZ246Y2VudGVyO2xlZnQ6NTAlO3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3otaW5kZXg6MTAwMDE7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC43KTtjb2xvcjojZmZmO3dvcmQtYnJlYWs6YnJlYWstYWxsfWBdXG59KVxuZXhwb3J0IGNsYXNzIEpkYlBsZ1RvYXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBtc2c6c3RyaW5nID0gXCJcIjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cblxuXG5cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE9uSW5pdCwgSW5wdXQsXG4gICAgVmlld0NvbnRhaW5lclJlZixcbiAgICBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsXG4gICAgQ29tcG9uZW50UmVmLFxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBJbmplY3RvcixcbiAgICBPbkRlc3Ryb3ksXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamRiLXRhYicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidGFiLXdyYXBlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0YWItbmF2LXdyYXBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtcztsZXQgaSA9IGluZGV4O1wiIFtuZ0NsYXNzXT1cInsndGFiLXNlbGVjdGVkJzppID09IGN1clRhYkluZGV4fVwiIHRpdGxlPSd7e2l0ZW0udGl0bGV9fSc+XG4gICAgICAgICAgICA8ZGl2IChjbGljayk9XCJ0YWJDaGFuZ2UoaSlcIiBjbGFzcz1cInRhYi10ZXh0XCI+IHt7aXRlbS50aXRsZX19PC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlLWJ0blwiIChjbGljayk9XCJyZW1vdmVUYWIoaSlcIiAqbmdJZj1cImkgIT09IDAgJiYgaXRlbS5pc0Nsb3NlRmxhZyAhPSB0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50LXdyYXBlclwiPlxuICAgICAgICA8ZGl2ICN0YWJDb250ZW50IGNsYXNzPVwicGxhY2UtaG9sZGVyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYC50YWItd3JhcGVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnRhYi1uYXYtd3JhcGVye2Rpc3BsYXk6ZmxleH0udGFiLW5hdi13cmFwZXIgLnRhYi1pdGVte3dpZHRoOjEyMHB4O2ZvbnQtc2l6ZToxM3B4O2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6I2YwZjFmNTtib3JkZXI6MXB4IHNvbGlkICNhZmIwYjM7Ym9yZGVyLWJvdHRvbTpub25lO21hcmdpbi1yaWdodDo1cHg7aGVpZ2h0OjMwcHg7Ym9yZGVyLXJhZGl1czoycHggMnB4IDAgMDt0ZXh0LWFsaWduOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTtjdXJzb3I6cG9pbnRlcn0udGFiLW5hdi13cmFwZXIgLnRhYi1pdGVtIC50YWItdGV4dHtjb2xvcjojN2Q3ZTgwO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dmVydGljYWwtYWxpZ246bWlkZGxlO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7cGFkZGluZzo1cHggMjBweCAwfS50YWItbmF2LXdyYXBlciAudGFiLWl0ZW0udGFiLXNlbGVjdGVke2JhY2tncm91bmQ6I2ZmZjtib3JkZXI6bm9uZTtib3JkZXItdG9wOjNweCBzb2xpZCAjM2Y2OWYyfS50YWItbmF2LXdyYXBlciAudGFiLWl0ZW0udGFiLXNlbGVjdGVkIC50YWItdGV4dHtjb2xvcjojM2Y2OWYyO3BhZGRpbmctdG9wOjNweH0udGFiLW5hdi13cmFwZXIgLnRhYi1pdGVtIC5jbG9zZS1idG57cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6OHB4O2ZvbnQtc2l6ZToyNHB4O2N1cnNvcjpwb2ludGVyO2NvbG9yOiM5OTk7Zm9udC13ZWlnaHQ6MTAwfS50YWItY29udGVudC13cmFwZXJ7Ym94LXNoYWRvdzoxcHggMXB4IDFweCAxcHggI2FmYjBiMztiYWNrZ3JvdW5kOiNmZmZ9LnRhYi1jb250ZW50LXdyYXBlciAucGxhY2UtaG9sZGVye3dpZHRoOjA7aGVpZ2h0OjB9YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBKZGJUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgLy8gQFZpZXdDaGlsZCgndGFiQ29udGVudCcpIHRhYkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgndGFiQ29udGVudCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSB0YXJnZXQ7XG4gICAgQE91dHB1dCgpIG9uVGFiQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblRhYlJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25Ub3BDb21Nc2cgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgaXRlbXMgPSBbXTtcbiAgICB0YWJDb21zID0gW107XG4gICAgdGFiU3ViczogYW55O1xuICAgIGN1clRhYkluZGV4ID0gMDtcbiAgICB0YWJJZENvbU1hcCA9IHt9O1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICBwdWJsaWMgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICApIHsgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIENoaWxkQ29tcG9uZW50XG4gICAgICogQHBhcmFtIGF0dHJzOntcbiAgICAgKiAgICAgcHJvcGVyeTp2YWx1ZVxuICAgICAqIF1cbiAgICAgKiB0aXRsZTpzdHJpbmdcbiAgICAgKiBpc0Nsb3NlRmxhZ1xuICAgICAqL1xuICAgIGFkZEl0ZW0oQ2hpbGRDb21wb25lbnQ6IGFueSwgYXR0cnM6IGFueSwgdGl0bGU6IHN0cmluZywgY29tSWQ6IGFueSA9IFwiXCIsIGlzQ2xvc2VGbGFnOiBib29sZWFuID0gZmFsc2UpIHtcblxuICAgICAgICBpZiAoY29tSWQgJiYgdGhpcy50YWJJZENvbU1hcFtjb21JZF0pIHtcbiAgICAgICAgICAgIGxldCBjb206IGFueSA9IHRoaXMudGFiSWRDb21NYXBbY29tSWRdO1xuICAgICAgICAgICAgdGhpcy50YWJDaGFuZ2UoY29tLmluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KENoaWxkQ29tcG9uZW50KTtcbiAgICAgICAgdmFyIGNvbUluc3RhbmNlID0gdGhpcy50YXJnZXQuY3JlYXRlQ29tcG9uZW50KGNoaWxkQ29tcG9uZW50KTtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhdHRycyk7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBpc0Nsb3NlRmxhZzogaXNDbG9zZUZsYWdcbiAgICAgICAgfSk7XG4gICAgICAgIGtleXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbUluc3RhbmNlLmluc3RhbmNlW3ZhbHVlXSA9IGF0dHJzW3ZhbHVlXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFiQ29tcy5wdXNoKGNvbUluc3RhbmNlKTtcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRPbmVDb21IaWRlKHRoaXMuY3VyVGFiSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YWJTdWJzID0gY29tSW5zdGFuY2UuaW5zdGFuY2VbJ29uVG9wQ29tTXNnJ10gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMudGFiU3Vicy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uVG9wQ29tTXNnLmVtaXQodmFsdWUpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmN1clRhYkluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICBpZiAoY29tSWQpIHtcbiAgICAgICAgICAgIHRoaXMudGFiSWRDb21NYXBbY29tSWRdID0ge1xuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmN1clRhYkluZGV4LFxuICAgICAgICAgICAgICAgIGNvbUluc3RhbmNlOiBjb21JbnN0YW5jZS5pbnN0YW5jZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21JbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldE9uZUNvbUhpZGUodGFiSW5kZXgpIHtcbiAgICAgICAgdGhpcy50YWJDb21zW3RhYkluZGV4XS5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldE9uZUNvbVNob3codGFiSW5kZXgpIHtcbiAgICAgICAgdGhpcy50YWJDb21zW3RhYkluZGV4XS5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgdGFiQ2hhbmdlKGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLmN1clRhYkluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0T25lQ29tSGlkZSh0aGlzLmN1clRhYkluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRPbmVDb21TaG93KGluZGV4KTtcbiAgICAgICAgdGhpcy5jdXJUYWJJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLm9uVGFiQ2hhbmdlLmVtaXQoaW5kZXgpO1xuICAgICAgICB0aGlzLnRhYkNvbXNbaW5kZXhdLmluc3RhbmNlLnRhYlJlZnJlc2ggJiYgdGhpcy50YWJDb21zW2luZGV4XS5pbnN0YW5jZS50YWJSZWZyZXNoKHt9KTtcbiAgICAgICAgLy8gdGhpcy50YWJDb21zW2luZGV4XS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgc2V0T25lVGFiU2hvdyhpbmRleCkge1xuICAgICAgICB0aGlzLnRhYkNoYW5nZShpbmRleCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFiKGluZGV4KSB7XG4gICAgICAgIHRoaXMudGFiQ29tc1tpbmRleF0uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnRhYkNvbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpZiAoaW5kZXggPD0gdGhpcy5jdXJUYWJJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5jdXJUYWJJbmRleC0tO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1clRhYkluZGV4IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJUYWJJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRPbmVDb21TaG93KHRoaXMuY3VyVGFiSW5kZXgpO1xuICAgICAgICB0aGlzLm9uVGFiUmVtb3ZlLmVtaXQoaW5kZXgpO1xuICAgICAgICBsZXQgdGFiSWRDb21NYXAgPSB0aGlzLnRhYklkQ29tTWFwO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGFiSWRDb21NYXApIHtcbiAgICAgICAgICAgIGlmICh0YWJJZENvbU1hcFtrZXldLmluZGV4ID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRhYklkQ29tTWFwW2tleV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlbW92ZVRhYkJ5SWQoaWQ6c3RyaW5nKSB7XG4gICAgICAgIGxldCB0YWJJZENvbU1hcCA9IHRoaXMudGFiSWRDb21NYXA7XG4gICAgICAgIGZvcihsZXQga2V5IGluIHRhYklkQ29tTWFwKSB7XG4gICAgICAgICAgICBpZihrZXkgPT0gaWQpICB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUYWIodGFiSWRDb21NYXBba2V5XVsnaW5kZXgnXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgLy8gdGhpcy50YXJnZXQuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaG93LXBpY3R1cmUnLFxuICB0ZW1wbGF0ZTogYDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cImltZy1tYXNrXCIgKGNsaWNrKT1cImNsb3NlTW9kZWwoKVwiPlxuICAgICAgICA8IS0tIMOpwoHCrsOnwr3CqcOlwrHCgiAtLT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRlbnRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cImNsb3NlTW9kZWwoKVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9jbG9zZS14LnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwicGljdHVyZVVybFwiIGFsdD1cIlwiIHN0eWxlPVwibWF4LWhlaWdodDogNjAwcHg7bWF4LXdpZHRoOiA4MDBweDtcIj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYEBjaGFyc2V0IFwiVVRGLThcIjsuaW1nLW1hc2t7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOiMwMDA7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowOy1tb3otb3BhY2l0eTouMztvcGFjaXR5Oi44O3otaW5kZXg6OTk5ODtkaXNwbGF5OmJsb2NrfS5pbWctY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q4ZGI7cG9zaXRpb246Zml4ZWQ7d2lkdGg6ODAwcHg7aGVpZ2h0OjYwMHB4O21hcmdpbi1sZWZ0Oi00MDBweDtsZWZ0OjUwJTttYXJnaW4tdG9wOi0zMDBweDt0b3A6NTAlO2xpbmUtaGVpZ2h0OjYwMHB4O2JvcmRlcjoxcHggc29saWQgI2UxZTJlNjt6LWluZGV4Ojk5OTk7dGV4dC1hbGlnbjpjZW50ZXI7Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtc2l6ZTowO2JvcmRlcjpub25lfS5pbWctY29udGVudCAuY2xvc2V7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjJweDtoZWlnaHQ6MjJweDtib3JkZXItcmFkaXVzOjExcHg7YmFja2dyb3VuZC1jb2xvcjojZTdlOGU5O3RvcDo4cHg7cmlnaHQ6OHB4O3otaW5kZXg6OTk5OTt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDo4cHh9LmltZy1jb250ZW50IGltZ3t2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9YF1cbn0pXG5leHBvcnQgY2xhc3MgU2hvd1BpY3R1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwaWN0dXJlVXJsOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHtzdGF0dXM6IGJvb2xlYW59PigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cbiAgY2xvc2VNb2RlbCgpe1xuICAgIHRoaXMudXBkYXRlLmVtaXQoe3N0YXR1czogZmFsc2V9KVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIsXG4gIGFuaW1hdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcGljdHVyZS12aWV3ZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwaWN0dXJlLXZpZXdlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWctbWFza1wiICpuZ0lmPVwiX2pkYk1hc3RlclwiIChjbGljayk9XCJjbG9zZU1vZGVsKClcIj5cbiAgICAgICAgPCEtLSDDqcKBwq7Dp8K9wqnDpcKxwoIgLS0+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAjaW1nQ29udGVudCBbbmdDbGFzc109XCJ7J2ltZy1jb250ZW50LWNvbXBvbmV0JzpqZGJTaG93VHlwZT09Mn1cIiBjbGFzcz1cImltZy1jb250ZW50XCI+XG4gICAgICAgIDwhLS0gw6XCj8Kzw6TCuMKKw6jCp8KSw6XChcKzw6nCl8Ktw6bCjMKJw6nCksKuIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VcIiAqbmdJZj1cIl9qZGJDbGVhclwiIChjbGljayk9XCJjbG9zZU1vZGVsKClcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1jbG9zZVwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSDDpcKbwr7Dp8KJwodib3ggLS0+XG4gICAgICAgIDx1bCBjbGFzcz1cImltZy1ib3hcIiAjaW1nPlxuICAgICAgICAgICAgPCEtLSA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGljdHVyZUxpc3Q7bGV0IGk9aW5kZXhcIiBbQGltZ01vdmVdPVwiSW1nU3RhdGUoaSlcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGFwcERyYWdEaXJlY3RpdmUgw4LCoFtzcmNdPVwiaXRlbS5pbWdVcmxcIiBhbHQ9XCJcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDYwMHB4O21heC13aWR0aDogODAwcHg7XCI+XG4gICAgICAgICAgICA8L2xpPiAtLT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPCEtLSDDpMK4worDpMK4woDDqcKhwrXDpMK4wovDpMK4woDDqcKhwrUgLS0+XG4gICAgICAgIDxkaXYgW2hpZGRlbl09XCJjdXJyZW50PT0wXCIgY2xhc3M9XCJwcmV2LXBhZ2VcIiAoY2xpY2spPVwiUHJldigpXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1wcmV2XCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBbaGlkZGVuXT1cImN1cnJlbnQ9PXBpY3R1cmVMaXN0Lmxlbmd0aC0xXCIgY2xhc3M9XCJuZXh0LXBhZ2VcIiAoY2xpY2spPVwiTmV4dCgpXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1uZXh0XCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIMOlwo/Cs8OkwrjCi8OowqfCksOpwqHCtcOnwqDCgSAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltZy1pbmRleFwiPnt7Y3VycmVudCsxfX0ve3twaWN0dXJlTGlzdC5sZW5ndGh9fTwvZGl2PlxuICAgICAgICA8IS0tIMOnwrzCqcOmwpTCvsOmwpfCi8Oowr3CrMOmwozCicOpwpLCrsOnwrvChCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ib3hcIj5cbiAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsnaG92ZXItZGlzYWJsZWQnOmltZ09wZXJhdGUubnVtPT09NH1cIiBjbGFzcz1cImljb24tcGljdHVyZS16b29tLWluIHNjYWxlLWJpZ1wiIChjbGljayk9XCJzY2FsZUJpZygpXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwieydob3Zlci1kaXNhYmxlZCc6aW1nT3BlcmF0ZS5udW09PTAuNX1cIiBjbGFzcz1cImljb24tcGljdHVyZS16b29tLW91dCAgc2NhbGUtc21hbGxcIiAoY2xpY2spPVwic2NhbGVTbWFsbCgpXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBpY3R1cmUtY291bnRlcmNsb2Nrd2lzZSByb3V0YXRlLW5pXCIgKGNsaWNrKT1cInJvdXRhdGVOaSgpXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBpY3R1cmUtY2xvY2t3aXNlIHJvdXRhdGUtc2h1blwiIChjbGljayk9XCJyb3V0YXRlU2h1bigpXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2BAY2hhcnNldCBcIlVURi04XCI7LnBpY3R1cmUtdmlld2VyIC5pbWctbWFza3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6IzAwMDtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7LW1vei1vcGFjaXR5Oi4zO29wYWNpdHk6Ljg7ei1pbmRleDo5OTk4O2Rpc3BsYXk6YmxvY2t9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q4ZGI7cG9zaXRpb246Zml4ZWQ7bGVmdDo1MCU7dG9wOjUwJTtib3JkZXI6MXB4IHNvbGlkICNjY2M7ei1pbmRleDo5OTk5O3RleHQtYWxpZ246Y2VudGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6bm9uZX0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5jbG9zZXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyMnB4O2hlaWdodDoyMnB4O2JvcmRlci1yYWRpdXM6MTFweDtib3JkZXI6MXB4IHNvbGlkICNmZmY7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KTt0b3A6OHB4O3JpZ2h0OjhweDt6LWluZGV4Ojk5OTk7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6OHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLmNsb3NlIC5pY29uLWNsb3Nle2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDoxcHg7bWFyZ2luLWxlZnQ6MXB4O2ZvbnQtc2l6ZToxOHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLmltZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVufS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLmltZy1ib3ggbGl7YmFja2dyb3VuZC1jb2xvcjojZDdkOGRiO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTE7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTt0cmFuc2l0aW9uOi4xc30ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5pbWctYm94IGxpIGltZ3twb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjFzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4xczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMXMsLXdlYmtpdC10cmFuc2Zvcm0gLjFzfS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgYXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO21hcmdpbi10b3A6LTMwcHg7d2lkdGg6NjBweDtoZWlnaHQ6NjBweDt6LWluZGV4OjQwMDtiYWNrZ3JvdW5kOnVybCgvYXNzZXRzL2ltYWdlcy9DWGljb24ucG5nKSAwIDAvMTkycHggMTQ0cHggbm8tcmVwZWF0fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLm5leHR7cmlnaHQ6MjBweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi01NHB4IC03OHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLnByZXZ7bGVmdDoyMHB4O2JhY2tncm91bmQtcG9zaXRpb246LTU0cHggLTZweH0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5uZXh0OmhvdmVye2JhY2tncm91bmQtcG9zaXRpb246LTEyNnB4IC03OHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLnByZXY6aG92ZXJ7YmFja2dyb3VuZC1wb3NpdGlvbjotMTI2cHggLTZweH0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5uZXh0LXBhZ2UsLnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAucHJldi1wYWdle3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bWFyZ2luLXRvcDotMzBweDt3aWR0aDo2MHB4O2hlaWdodDo2MHB4O3otaW5kZXg6NDAwO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMil9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAubmV4dC1wYWdlIHNwYW4sLnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAucHJldi1wYWdlIHNwYW57ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOjZweDtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KTtmb250LXNpemU6NDhweH0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5wcmV2LXBhZ2V7bGVmdDoyMHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLm5leHQtcGFnZXtyaWdodDoyMHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLm5leHQtcGFnZTpob3ZlciwucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5wcmV2LXBhZ2U6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC43KX0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5uZXh0LXBhZ2U6aG92ZXIgc3BhbiwucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5wcmV2LXBhZ2U6aG92ZXIgc3Bhbntjb2xvcjojZmZmfS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLmltZy1pbmRleHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MTVweDtyaWdodDoyMnB4O3otaW5kZXg6MTAxO2NvbG9yOiMzMjMyMzM7Zm9udC1zaXplOjE2cHg7aGVpZ2h0OjIycHg7bGluZS1oZWlnaHQ6MjJweDt3aWR0aDo0MnB4O3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1yYWRpdXM6MnB4O2JhY2tncm91bmQ6cmdiYSgyMTUsMjE2LDIxOSwuNyl9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAuYnRuLWJveHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwOTtib3R0b206MTJweDtsZWZ0OjUwJTttYXJnaW4tbGVmdDotNzNweDtwYWRkaW5nOjNweCA1cHg7aGVpZ2h0OjMwcHg7d2lkdGg6MTQ3cHg7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41KTtib3JkZXItcmFkaXVzOjJweDtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5idG4tYm94IHNwYW57ZmxvYXQ6bGVmdDttYXJnaW46MCA1cHh9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAuYnRuLWJveCAucm91dGF0ZS1uaTpob3ZlciwucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5idG4tYm94IC5yb3V0YXRlLXNodW46aG92ZXIsLnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAuYnRuLWJveCAuc2NhbGUtYmlnOmhvdmVyLC5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLmJ0bi1ib3ggLnNjYWxlLXNtYWxsOmhvdmVye2NvbG9yOiNmZmZ9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAuYnRuLWJveCAuaG92ZXItZGlzYWJsZWQ6aG92ZXJ7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudC1jb21wb25ldHtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MDtsZWZ0OjA7bWFyZ2luOjB9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdpbWdNb3ZlJywgW1xuICAgICAgLyoqIMOkwrjCjcOmwpjCvsOnwqTCuiAqL1xuICAgICAgc3RhdGUoJ29mZicsIHN0eWxlKHsgJ2Rpc3BsYXknOiAnbm9uZScsICd6LWluZGV4JzogJzAnLCAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoMCknIH0pKSxcbiAgICAgIC8qKiDDpMK4worDpMK4woDDpcK8wqDDpcKbwr7Dp8KJwocgKi9cbiAgICAgIHN0YXRlKCdwcmV2Jywgc3R5bGUoe1xuICAgICAgICAnei1pbmRleCc6ICcxJyxcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKC0xMDAlKSdcbiAgICAgIH0pKSxcbiAgICAgIC8qKiDDpMK4wovDpMK4woDDpcK8wqDDpcKbwr7Dp8KJwocgKi9cbiAgICAgIHN0YXRlKCduZXh0Jywgc3R5bGUoeyAnei1pbmRleCc6ICcyJywgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKDEwMCUpJyB9KSksXG4gICAgICAvKiogw6XCvcKTw6XCicKNw6XCm8K+w6fCicKHICovXG4gICAgICBzdGF0ZSgnb24nLCBzdHlsZSh7ICd6LWluZGV4JzogJzMnLCAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoMCknIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ByZXY9Pm9uJywgW1xuICAgICAgICBhbmltYXRlKCcwLjNzIGVhc2UtaW4nKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCduZXh0PT5vbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMC4zcyBlYXNlLWluJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignb249PnByZXYnLCBbXG4gICAgICAgIGFuaW1hdGUoJzAuM3MgZWFzZS1pbicpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ29uPT5uZXh0JywgW1xuICAgICAgICBhbmltYXRlKCcwLjNzIGVhc2UtaW4nKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBpY3R1cmVWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcGljdHVyZUxpc3Q6IGFueSA9IFtdO1xuICBAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx7IHN0YXR1czogYm9vbGVhbiB9PigpO1xuICAvLyBASW5wdXQoKSBjdXJyZW50OiBudW1iZXIgPSAwO1xuICBAVmlld0NoaWxkKCdpbWcnKSBpbWdCb3g6IEVsZW1lbnRSZWY7ICAvLyDDpcKbwr7Dp8KJwofDp8KIwrbDqMKKwoLDp8KCwrlcbiAgQFZpZXdDaGlsZCgnaW1nQ29udGVudCcpIGltZ0NvbnRlbnQ6IEVsZW1lbnRSZWY7IC8vIMOlwq7CucOlwpnCqMOlwoXCg8OnwrTCoFxuICAvLyDDqMKuwr7Dp8K9wq7DpcKuwrnDpcKZwqjDp8KawoTDqcK7wpjDqMKuwqTDpcKuwr3DqcKrwpjDr8K8wozDpcKPwq/DqcKAwoLDqcKFwo0gw6XCj8Kvw6nChcKNw6fCvcKuw6XCscKew6bCgMKnXG4gIEBJbnB1dCgpIG1heFdpZHRoOiBudW1iZXIgPSA4MDA7XG4gIEBJbnB1dCgpIG1heEhlaWdodDogbnVtYmVyID0gNjAwO1xuICBASW5wdXQoKSBqZGJTaG93VHlwZTogbnVtYmVyID0gMTsgLy8gw6bCmMKvw6bCtcKuw6XCscKCw6jCv8KYw6bCmMKvw6XCtcKMw6XChcKlw6fCu8KEw6TCu8K2w6/CvMKMw6nCu8KYw6jCrsKkw6TCuMK6McOvwrzCjMOkwr3CnMOkwrjCusOmwrXCrsOlwrHCgsOvwrzCjMOowovCpcOkwrjCujLDr8K8wozDpcKIwpnDqMKhwqjDp8KkwrrDpsKYwq/DpcK1wozDpcKFwqXDp8K7woTDpMK7wrZcblxuICBfamRiTWFzdGVyID0gdHJ1ZTsgLy8gw6bCmMKvw6XCkMKmw6nCnMKAw6jCpsKBbWFzdGVyw6nCgcKuw6fCvcKpw6/CvMKMw6nCu8KYw6jCrsKkw6nCnMKAw6jCpsKBw6nCgcKuw6fCvcKpw6XCscKCXG4gIF9qZGJDbGVhciA9IHRydWU7Ly8gw6bCmMKvw6XCkMKmw6nCnMKAw6jCpsKBw6bCjMKJw6nCksKuw6XCj8KJw6/CvMKMw6nCu8KYw6jCrsKkw6nCnMKAw6jCpsKBXG4gIGRyYWdTdGF0dXMgPSBmYWxzZTtcbiAgY3VycmVudCA9IDA7IC8vIMOlwrHClcOnwqTCusOlwpvCvsOnwonCh8OkwrjCi8OmwqDCh8OvwrzCjMOpwrvCmMOowq7CpMOkwrjCujBcblxuICBlbGVtOiBhbnk7XG5cbiAgaW1nT3BlcmF0ZSA9IHtcbiAgICBudW06IDEsXG4gICAgZGVnbnVtOiAwXG4gIH07XG5cblxuICBASW5wdXQoKVxuICBzZXQgamRiTWFzdGVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5famRiTWFzdGVyID0gdGhpcy50b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGpkYk1hc3RlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5famRiTWFzdGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGpkYkNsZWFyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5famRiQ2xlYXIgPSB0aGlzLnRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgamRiQ2xlYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2pkYkNsZWFyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGpkYkN1cnJlbnQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA+IHRoaXMucGljdHVyZUxpc3QubGVuZ3RoIHx8IHZhbHVlIDwgMCkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgamRiQ3VycmVudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVsZW0gPSB0aGlzLmltZ0JveC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuOyAgLy8gw6bCicKAw6bCnMKJw6fCmsKEbGlcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLnBpY3R1cmVMaXN0KSB7XG4gICAgICB0aGlzLnBpY3R1cmVMaXN0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbihpbmRleCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyDDqMKuwr7Dp8K9wq7DpcKFwoPDp8K0wqDDpsKgwrfDpcK8wo9cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGltZ0NvbnRlbnQgPSB0aGlzLmltZ0NvbnRlbnQubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShpbWdDb250ZW50LCAnaGVpZ2h0JywgdGhpcy5tYXhIZWlnaHQgKyAncHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShpbWdDb250ZW50LCAnd2lkdGgnLCB0aGlzLm1heFdpZHRoICsgJ3B4Jyk7XG5cbiAgICBpZiAodGhpcy5qZGJTaG93VHlwZSA9PSAxKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShpbWdDb250ZW50LCAnbWFyZ2luLWxlZnQnLCAtIHRoaXMubWF4V2lkdGggLyAyICsgJ3B4Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShpbWdDb250ZW50LCAnbWFyZ2luLXRvcCcsIC0gdGhpcy5tYXhIZWlnaHQgLyAyICsgJ3B4Jyk7XG4gICAgfVxuICB9XG5cbiAgLy8gw6nCh8KNw6fCvcKuw6XCm8K+w6fCicKHw6TCvcKNw6fCvcKuXG4gIHJlc2V0UG9zaXRpb24oaW5kZXgpIHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIC8vIMOowo7Ct8Olwo/ClsOlwr3Ck8OlwonCjcOlworCoMOowr3CvcOlwpvCvsOnwonCh8Olwq7CvcOpwqvCmFxuICAgICAgbGV0IHcgPSBpbWFnZS53aWR0aDtcbiAgICAgIGxldCBoID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgbGV0IGhSYXRpbztcbiAgICAgIGxldCB3UmF0aW87XG4gICAgICAvLyDDqMKuwr7Dp8K9wq7DqcK7wpjDqMKuwqTDpsKvwpTDpMK+wovDpMK7wqXDpcKPworDpcKuwrnDpcKZwqjDpcKuwr3DqcKrwphcbiAgICAgIGNvbnN0IGltZ1JhdGUgPSB3IC8gaDsgLy8gw6XCm8K+w6fCicKHw6XCrsK9w6nCq8KYw6bCr8KUXG4gICAgICAvLyBjb25zdCBtYXhXaWR0aCA9IDgwMDtcbiAgICAgIC8vIGNvbnN0IG1heEhlaWdodCA9IDYwMDtcbiAgICAgIHdSYXRpbyA9IHRoaXMubWF4V2lkdGggLyB3O1xuICAgICAgaFJhdGlvID0gdGhpcy5tYXhIZWlnaHQgLyBoO1xuXG4gICAgICBpZiAod1JhdGlvID4gMSAmJiBoUmF0aW8gPiAxKSB7XG4gICAgICAgIC8vIMOkwrjCpMOowoDChcOmwq/ClMOkwr7Ci8Olwp3Ch8OlwqTCp8OkwrrCjjHDqMKhwqjDp8KkwrrDpcKbwr7DpMK4wrrDpcKwwo/DpcKbwr7Dr8K8wozDpcKuwr3DqcKrwpjDpsKcwqrDqMK+wr7DpcKIwrA4MDAqNjAwLMOlwojCmcOlwo/ClsOlwo7Cn8OlwpvCvsOlwqTCp8OlwrDCj1xuICAgICAgICB3ID0gdztcbiAgICAgICAgaCA9IGg7XG4gICAgICB9IGVsc2UgaWYgKHdSYXRpbyA8IDEgJiYgaFJhdGlvIDwgMSkge1xuICAgICAgICAvLyDDpMK4wqTDqMKAwoXDpsKvwpTDpMK+wovDpcKdwofDpcKwwo/DpMK6wo4xw6jCocKow6fCpMK6w6XCm8K+w6TCuMK6w6XCpMKnw6XCm8K+w6/CvMKMw6XCrsK9w6nCq8KYw6jCvsK+w6XCiMKwODAwKjYwMCzDpcKIwpnDpcKPwpbDpcKuwrnDpcKZwqjDpcKkwqfDpcKwwo9cbiAgICAgICAgaWYgKGltZ1JhdGUgPiAxKSB7XG4gICAgICAgICAgLy8gw6XCrsK9w6XCm8K+XG4gICAgICAgICAgdyA9IHRoaXMubWF4V2lkdGg7XG4gICAgICAgICAgaCA9IHcgLyBpbWdSYXRlO1xuICAgICAgICB9IGVsc2UgaWYgKGltZ1JhdGUgPCAxKSB7XG4gICAgICAgICAgLy8gw6nClcK/w6XCm8K+XG4gICAgICAgICAgaCA9IHRoaXMubWF4SGVpZ2h0O1xuICAgICAgICAgIHcgPSBoICogaW1nUmF0ZTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKHdSYXRpbyA+IDEgJiYgaFJhdGlvIDwgMSkge1xuICAgICAgICAvLyDDqMKhwqjDp8KkwrrDpMK4wrrDqcKVwr/DpcKbwr7Dp8KJwofDr8K8wozDpcKIwpnDqcKrwpjDpMK4wro2MDDDr8K8wozDpcKuwr3Dp8KtwonDpsKvwpTDpMK+wovDp8K8wqnDpsKUwr7DpcKPwpbDpcKAwrxcbiAgICAgICAgaCA9IHRoaXMubWF4SGVpZ2h0O1xuICAgICAgICB3ID0gdyAqIGhSYXRpbztcbiAgICAgIH0gZWxzZSBpZiAod1JhdGlvIDwgMSAmJiBoUmF0aW8gPiAxKSB7XG4gICAgICAgIC8vIMOowqHCqMOnwqTCusOkwrjCusOlwq7CvcOlwpvCvsOnwonCh8OvwrzCjMOlwojCmcOlwq7CvcOkwrjCujgwMMOvwrzCjMOpwqvCmMOnwq3CicOmwq/ClMOkwr7Ci8OnwrzCqcOmwpTCvsOlwo/ClsOlwoDCvFxuICAgICAgICBoID0gaCAqIHdSYXRpbztcbiAgICAgICAgdyA9IHRoaXMubWF4V2lkdGg7XG4gICAgICB9XG5cbiAgICAgIC8vIMOowq7CvsOnwr3CrsOlwpvCvsOnwonCh8OlwrHClcOnwqTCusOlwq7CvcOpwqvCmFxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbGVtW2luZGV4XS5jaGlsZHJlblswXSwgJ2hlaWdodCcsIGggKyAncHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVtpbmRleF0uY2hpbGRyZW5bMF0sICd3aWR0aCcsIHcgKyAncHgnKTtcblxuICAgICAgaWYgKHcgPT09IHRoaXMubWF4V2lkdGggJiYgaCA9PT0gdGhpcy5tYXhIZWlnaHQpIHtcbiAgICAgICAgLy8gw6jCrsK+w6fCvcKuw6XCm8K+w6fCicKHw6TCvcKNw6fCvcKuw6TCvcK/w6XChcK2w6XCnsKCw6fCm8K0w6bCsMK0w6XCucKzw6XCscKFw6TCuMKtXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVtpbmRleF0uY2hpbGRyZW5bMF0sICd0b3AnLCAnMHB4Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVtpbmRleF0uY2hpbGRyZW5bMF0sICdsZWZ0JywgJzBweCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gw6jCrsK+w6fCvcKuw6XCm8K+w6fCicKHw6TCvcKNw6fCvcKuw6TCvcK/w6XChcK2w6XCnsKCw6fCm8K0w6bCsMK0w6XCucKzw6XCscKFw6TCuMKtXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVtpbmRleF0uY2hpbGRyZW5bMF0sICd0b3AnLCAodGhpcy5tYXhIZWlnaHQgLSBoKSAvIDIgKyAncHgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbGVtW2luZGV4XS5jaGlsZHJlblswXSwgJ2xlZnQnLCAodGhpcy5tYXhXaWR0aCAtIHcpIC8gMiArICdweCcpO1xuICAgICAgfVxuXG4gICAgfTtcbiAgICBpbWFnZS5zcmMgPSB0aGlzLnBpY3R1cmVMaXN0W2luZGV4XS5pbWdVcmw7XG4gIH1cblxuICAvLyDDpcKIwofDpsKNwqLDpcKKwqjDp8KUwrtcbiAgSW1nU3RhdGUoaW5kZXgpIHtcbiAgICBpZiAodGhpcy5waWN0dXJlTGlzdCAmJiB0aGlzLnBpY3R1cmVMaXN0Lmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaW5kZXggPT09IDAgPyAnb24nIDpcbiAgICAgICAgICBpbmRleCA9PT0gMSA/ICduZXh0JyA6XG4gICAgICAgICAgICBpbmRleCA9PT0gdGhpcy5waWN0dXJlTGlzdC5sZW5ndGggLSAxID8gJ3ByZXYnIDpcbiAgICAgICAgICAgICAgJ29mZic7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudCA9PT0gdGhpcy5waWN0dXJlTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybiBpbmRleCA9PT0gdGhpcy5waWN0dXJlTGlzdC5sZW5ndGggLSAxID8gJ29uJyA6XG4gICAgICAgICAgaW5kZXggPT09IHRoaXMucGljdHVyZUxpc3QubGVuZ3RoIC0gMiA/ICdwcmV2JyA6XG4gICAgICAgICAgICBpbmRleCA9PT0gMCA/ICduZXh0JyA6XG4gICAgICAgICAgICAgICdvZmYnO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChpbmRleCAtIHRoaXMuY3VycmVudCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdvbic7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gJ25leHQnO1xuICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgIHJldHVybiAncHJldic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdvZmYnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ29mZic7XG4gICAgfVxuICB9XG5cbiAgLy8gw6TCuMKLw6TCuMKAw6XCvMKgw6XCm8K+XG4gIE5leHQoKSB7XG4gICAgdGhpcy5yZXNldEltZ0RhdGEoKTtcbiAgICB0aGlzLmN1cnJlbnQgPSAodGhpcy5jdXJyZW50ICsgMSkgJSB0aGlzLnBpY3R1cmVMaXN0Lmxlbmd0aDtcbiAgICB0aGlzLnJlc2V0UG9zaXRpb24odGhpcy5jdXJyZW50IC0gMSk7XG4gICAgLy8gw6TCv8Kuw6bClMK5w6fCisK2w6bCgMKBw6/CvMKMw6TCvcK/w6bCi8KWw6XCisKow6XCm8K+w6fCicKHw6XCm8Kew6XCiMKww6XCjsKfw6bCncKlw6TCvcKNw6fCvcKuXG4gICAgLy8gdGhpcy5kcmFnU3RhdHVzID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIMOkwrjCisOkwrjCgMOlwrzCoMOlwpvCvlxuICBQcmV2KCkge1xuICAgIHRoaXMucmVzZXRJbWdEYXRhKCk7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50IC0gMSA8IDAgPyB0aGlzLnBpY3R1cmVMaXN0Lmxlbmd0aCAtIDEgOiB0aGlzLmN1cnJlbnQgLSAxO1xuICAgIHRoaXMucmVzZXRQb3NpdGlvbih0aGlzLmN1cnJlbnQgKyAxKTtcbiAgICAvLyDDpMK/wq7DpsKUwrnDp8KKwrbDpsKAwoHDr8K8wozDpMK9wr/DpsKLwpbDpcKKwqjDpcKbwr7Dp8KJwofDpcKbwp7DpcKIwrDDpcKOwp/DpsKdwqXDpMK9wo3Dp8K9wq5cbiAgICAvLyB0aGlzLmRyYWdTdGF0dXMgPSB0cnVlO1xuICB9XG5cbiAgLy8gw6XChcKzw6nCl8Ktw6XCm8K+w6fCicKHw6bCn8Klw6fCnMKLw6XCmcKoIF9fw6XChcKzw6nCl8Ktw6XCvMK5w6bCocKGw6XCkMKOw6XChsKNw6bCrMKhw6bCicKTw6XCvMKAw6bCicKAw6bCnMKJw6bCi8KWw6bCi8K9w6XCkMKOw6fCmsKEw6TCvcKNw6fCvcKuw6nCg8K9w6TCvMKaw6jCh8Kqw6XCisKow6XCvcKSw6TCuMK6w6/CvMKMw6XCm8Kgw6TCuMK6w6jCp8Kmw6XCj8KRw6TCusKGb25DaGFuZ2Vzw6bClsK5w6bCs8KVXG4gIGNsb3NlTW9kZWwoKSB7XG4gICAgdGhpcy5yZXNldEltZ0RhdGEoKTtcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHsgc3RhdHVzOiBmYWxzZSB9KTtcbiAgfVxuXG4gIC8vIMOmwpTCvsOlwqTCpyA1MCUgMTAwJSAyMDAlIDQwMCVcbiAgc2NhbGVCaWcoKSB7XG4gICAgdGhpcy5pbWdPcGVyYXRlLm51bSA9IHRoaXMuaW1nT3BlcmF0ZS5udW0gKiAyO1xuICAgIGlmICh0aGlzLmltZ09wZXJhdGUubnVtID4gNCkge1xuICAgICAgdGhpcy5pbWdPcGVyYXRlLm51bSA9IDQ7XG4gICAgfVxuICAgIGNvbnN0IHJhdGUgPSAnc2NhbGUoJyArIDEgKiB0aGlzLmltZ09wZXJhdGUubnVtICsgJywnICsgMSAqIHRoaXMuaW1nT3BlcmF0ZS5udW0gKyAnKSByb3RhdGUoJyArICgtdGhpcy5pbWdPcGVyYXRlLmRlZ251bSAqIDkwKSArICdkZWcpJztcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmVsZW1bdGhpcy5jdXJyZW50XS5jaGlsZHJlblswXSwgJ3RyYW5zZm9ybScsIHJhdGUpO1xuICB9XG5cbiAgLy8gw6fCvMKpw6XCsMKPXG4gIHNjYWxlU21hbGwoKSB7XG4gICAgdGhpcy5pbWdPcGVyYXRlLm51bSA9IHRoaXMuaW1nT3BlcmF0ZS5udW0gLyAyO1xuICAgIGlmICh0aGlzLmltZ09wZXJhdGUubnVtIDwgMSkge1xuICAgICAgdGhpcy5pbWdPcGVyYXRlLm51bSA9IDAuNTtcbiAgICB9XG4gICAgY29uc3QgcmF0ZSA9ICdzY2FsZSgnICsgMSAqIHRoaXMuaW1nT3BlcmF0ZS5udW0gKyAnLCcgKyAxICogdGhpcy5pbWdPcGVyYXRlLm51bSArICcpIHJvdGF0ZSgnICsgKC10aGlzLmltZ09wZXJhdGUuZGVnbnVtICogOTApICsgJ2RlZyknO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVt0aGlzLmN1cnJlbnRdLmNoaWxkcmVuWzBdLCAndHJhbnNmb3JtJywgcmF0ZSk7XG4gIH1cblxuICAvLyDDqcKAwobDpsKXwrbDqcKSwojDpsKXwovDqMK9wqxcbiAgcm91dGF0ZU5pKCkge1xuICAgIHRoaXMuaW1nT3BlcmF0ZS5kZWdudW0rKztcbiAgICBjb25zdCByYXRlID0gJ3NjYWxlKCcgKyAxICogdGhpcy5pbWdPcGVyYXRlLm51bSArICcsJyArIDEgKiB0aGlzLmltZ09wZXJhdGUubnVtICsgJykgcm90YXRlKCcgKyAoLXRoaXMuaW1nT3BlcmF0ZS5kZWdudW0gKiA5MCkgKyAnZGVnKSc7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmVsZW1bdGhpcy5jdXJyZW50XS5jaGlsZHJlblswXSwgJ3RyYW5zZm9ybScsIHJhdGUpO1xuICB9XG5cbiAgLy8gw6nCocK6w6bCl8K2w6nCksKIw6bCl8KLw6jCvcKsXG4gIHJvdXRhdGVTaHVuKCkge1xuICAgIHRoaXMuaW1nT3BlcmF0ZS5kZWdudW0tLTtcblxuICAgIGNvbnN0IHJhdGUgPSAnc2NhbGUoJyArIDEgKiB0aGlzLmltZ09wZXJhdGUubnVtICsgJywnICsgMSAqIHRoaXMuaW1nT3BlcmF0ZS5udW0gKyAnKSByb3RhdGUoJyArICgtdGhpcy5pbWdPcGVyYXRlLmRlZ251bSAqIDkwKSArICdkZWcpJztcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVt0aGlzLmN1cnJlbnRdLmNoaWxkcmVuWzBdLCAndHJhbnNmb3JtJywgcmF0ZSk7XG4gIH1cblxuICAvLyDDqcKHwo3Dp8K9wq7DpcKbwr7Dp8KJwofDpsKVwrDDpsKNwq5cbiAgcmVzZXRJbWdEYXRhKCkge1xuICAgIHRoaXMuaW1nT3BlcmF0ZSA9IHtcbiAgICAgIG51bTogMSxcbiAgICAgIGRlZ251bTogMFxuICAgIH07XG4gICAgY29uc3QgcmF0ZSA9ICdzY2FsZSgxLDEpIHJvdGF0ZSgwZGVnKSc7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbGVtW3RoaXMuY3VycmVudF0uY2hpbGRyZW5bMF0sICd0cmFuc2l0aW9uJywgJ3RyYW5zZm9ybSAwLjJzIGxpbmVhciAwLjRzJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbGVtW3RoaXMuY3VycmVudF0uY2hpbGRyZW5bMF0sICd0cmFuc2Zvcm0nLCByYXRlKTtcbiAgfVxuXG4gIC8vIMOowr3CrMOmwo3CosOkwrjCumJvb2xlYW4sw6XCjcKzw6XCrsKew6fCjsKww6bCnMKJw6jCv8KZw6TCuMKqw6XCrcKXw6bCrsK1w6XCsMKxw6jCrsKkw6TCuMK6w6TCuMK6dHJ1ZSzDpsKywqHDpsKcwonDpcKNwrPDpMK4wrpmYWxzZVxuICB0b0Jvb2xlYW4odmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICcnIHx8ICh2YWx1ZSAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnBpY3R1cmVMaXN0ID0gbnVsbDtcbiAgICB0aGlzLmltZ0JveCA9IG51bGw7XG4gICAgdGhpcy5pbWdDb250ZW50ID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBFbGVtZW50UmVmLFxuICAgIERpcmVjdGl2ZSxcbiAgICBDb21wb25lbnQsXG4gICAgUmVuZGVyZXIsXG4gICAgT25Jbml0LFxuICAgIElucHV0LFxuICAgIEFmdGVyQ29udGVudEluaXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2ltZ1thcHBEcmFnRGlyZWN0aXZlXSdcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ0RpcmVjdGl2ZSB7XG4gICAgb2xkTGVmdDogc3RyaW5nO1xuICAgIG9sZFRvcDogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBpc0Rvd24gPSBmYWxzZTtcbiAgICBwcml2YXRlIGRpc1g7XG4gICAgcHJpdmF0ZSBkaXNZO1xuICAgIHByaXZhdGUgZGlzTGVmdDtcbiAgICBwcml2YXRlIGRpc1RvcDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVsZW06IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlclxuICAgICkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8vIMOnwoLCucOlwofCu8OkwrrCi8OkwrvCtlxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pIG9uTW91c2Vkb3duKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHdSYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RyYWdXaWR0aCcpO1xuICAgICAgICBjb25zdCBoUmF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkcmFnSGVpZ2h0Jyk7XG4gICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmRpc0xlZnQgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgICAgICB0aGlzLmRpc1RvcCA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcDtcblxuICAgICAgICB0aGlzLmRpc1ggPSBldmVudC5jbGllbnRYO1xuICAgICAgICB0aGlzLmRpc1kgPSBldmVudC5jbGllbnRZO1xuICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8vIMOnwpvCkcOlwpDCrMOnwqfCu8OlworCqMOkwrrCi8OkwrvCtsOkwrrCi8OkwrvCtlxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbW92ZScsIFsnJGV2ZW50J10pIG9uTW91c2Vtb3ZlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIMOlwojCpMOmwpbCrcOowq/CpcOlwoXCg8OnwrTCoMOmwpjCr8OlwpDCpsOowqLCq8OnwoLCucOlwofCu8OkwrrChsOjwoDCglxuXG4gICAgICAgIGlmICh0aGlzLmlzRG93bikge1xuICAgICAgICAgICAgY29uc3QgbmV3ZGlzWCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLmRpc1g7XG4gICAgICAgICAgICBjb25zdCBuZXdkaXNZID0gZXZlbnQuY2xpZW50WSAtIHRoaXMuZGlzWTtcbiAgICAgICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSBuZXdkaXNYICsgdGhpcy5kaXNMZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IG5ld2Rpc1kgKyB0aGlzLmRpc1RvcCArICdweCc7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cblxuICAgIH1cblxuICAgIC8vIMOnwpvCkcOlwpDCrGRvY3VtZW50w6fCpsK7w6XCvMKAw6TCusKLw6TCu8K2XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJywgWyckZXZlbnQnXSkgb25Nb3VzZXVwKCkge1xuICAgICAgICAvLyDDpcKPwqrDp8KUwqjDpcK9wpPDpcKFwoPDp8K0wqDDp8KnwrvDpcKKwqjDqMK/wofDpMK6wobDr8K8wozDp8KmwrvDpcK8woDDpcKHwr3DpsKVwrDDpMK9wpPDpsKJwo3DpMK8wprDqMKnwqbDpcKPwpHDo8KAwoJcbiAgICAgICAgaWYgKHRoaXMuaXNEb3duKSB7XG4gICAgICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kaXNMZWZ0ID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIHRoaXMuZGlzVG9wID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gw6fCm8KRw6XCkMKsw6XChcKDw6fCtMKgw6fCpsK7w6XCvMKAw6TCusKLw6TCu8K2XG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsnJGV2ZW50J10pIG9uTW91c2VsZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vQ2FsbGVkIG9uY2UsIGJlZm9yZSB0aGUgaW5zdGFuY2UgaXMgZGVzdHJveWVkLlxuICAgICAgICAvL0FkZCAnaW1wbGVtZW50cyBPbkRlc3Ryb3knIHRvIHRoZSBjbGFzcy5cbiAgICAgICAgXG4gICAgfVxufVxuIiwiXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWpkYi1wbGctcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImpkYi1wbGctcGFnaW5hdGlvblwiPlxuICAgIDwhLS0gw6bCgMK7w6bCncKhw6bClcKwIC0tPlxuICAgIDxzcGFuICpuZ0lmPVwiX3Nob3dUb3RhbFwiIGNsYXNzPVwidG90YWwtYm94XCI+XG4gICAgICDDpcKFwrF7e190b3RhbH19w6bCncKhXG4gICAgPC9zcGFuPlxuXG4gICAgPGRpdiBjbGFzcz1cIm9wZXJhdGUtYm94XCI+XG4gICAgICAgIDwhLS0gw6bCncKhw6bClcKww6XCiMKHw6bCjcKiIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLW9wdGlvbnNcIiAqbmdJZj1cIl9zaG93UGFnZVNpemVcIj5cbiAgICAgICAgICAgIDxhcHAtamRiLXBsZy1zZWxlY3QgKG5nTW9kZWxDaGFuZ2UpPVwiZGF0YUNoYW5nZShmYWxzZSwkZXZlbnQpXCIgW2pkYlNpemVdPVwiJ3NtYWxsJ1wiIFtqZGJXaWR0aF09XCInOTBweCdcIiBbKG5nTW9kZWwpXT1cIl9wYWdlU2l6ZVwiIFtqZGJTZWxlY3RMaXN0XT1cIl9vcHRpb25zXCI+PC9hcHAtamRiLXBsZy1zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIMOlwp/CusOmwpzCrMOlwojChsOpwqHCtcOmwqDCt8OlwrzCjyAtLT5cbiAgICAgICAgPHVsICpuZ0lmPVwiIV9qZGJTaW1wbGVcIiBjbGFzcz1cImJhc2UtcGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgPCEtLSDDpMK4worDpMK4woDDqcKhwrXDpsKMwonDqcKSwq4gLS0+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJqZGItcGxnLXBhZ2luYXRpb24tcHJldlwiIHRpdGxlPVwiw6TCuMKKw6TCuMKAw6nCocK1XCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6X2N1cnJlbnQ9PT1fZmlyc3RJbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLF9jdXJyZW50LTEpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJqZGJJY29uIGljb24tcGFnaW5hdGlvbi1wcmV2XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS0gw6nCpsKWw6nCocK1w6bCjMKJw6nCksKuIC0tPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLWZpcnN0XCIgdGl0bGU9XCLDqcKmwpbDqcKhwrVcIiBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6X2N1cnJlbnQ9PT1fZmlyc3RJbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLF9maXJzdEluZGV4KVwiPlxuICAgICAgICAgICAgICAgIHt7X2ZpcnN0SW5kZXh9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS0gw6fCnMKBw6fClcKlw6XCj8K3IC0tPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLWZvcndhcmRcIiAqbmdJZj1cIihfbGFzdEluZGV4ID45KSYmKF9jdXJyZW50LTQ+X2ZpcnN0SW5kZXgpXCIgKGNsaWNrKT1cImp1bXBCZWZvcmUoX3BhZ2VTaXplKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1wYWdpbmF0aW9uLW1vcmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBhZ2luYXRpb24tanVtcC1wcmV2XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS0gw6bCjMKJw6nCksKuIC0tPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLXBhZ2VyXCIgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXNcIiBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6X2N1cnJlbnQ9PT1wYWdlLmluZGV4fVwiIChjbGljayk9XCJkYXRhQ2hhbmdlKHRydWUscGFnZS5pbmRleClcIj5cbiAgICAgICAgICAgICAgICB7e3BhZ2UuaW5kZXh9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS0gw6fCnMKBw6fClcKlw6XCj8K3IC0tPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLWJhY2t3YXJkXCIgKm5nSWY9XCIoX2xhc3RJbmRleCA+OSkmJihfY3VycmVudCs0PF9sYXN0SW5kZXgpXCIgKGNsaWNrKT1cImp1bXBBZnRlcihfcGFnZVNpemUpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBhZ2luYXRpb24tbW9yZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1qdW1wLW5leHRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPCEtLSDDpcKwwr7DqcKhwrXDpsKMwonDqcKSwq4gLS0+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJqZGItcGxnLXBhZ2luYXRpb24tbGFzdFwiICpuZ0lmPVwiKF9sYXN0SW5kZXg+MCkmJihfbGFzdEluZGV4IT09X2ZpcnN0SW5kZXgpXCIgdGl0bGU9XCLDpcKwwr7DqcKhwrVcIiBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6X2N1cnJlbnQ9PT1fbGFzdEluZGV4fVwiIChjbGljayk9XCJkYXRhQ2hhbmdlKHRydWUsX2xhc3RJbmRleClcIj5cbiAgICAgICAgICAgICAgICB7e19sYXN0SW5kZXh9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS0gw6TCuMKLw6TCuMKAw6nCocK1w6bCjMKJw6nCksKuIC0tPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLW5leHRcIiB0aXRsZT1cIsOkwrjCi8OkwrjCgMOpwqHCtVwiIFtuZ0NsYXNzXT1cInsnZGlzYWJsZWQnOl9jdXJyZW50PT09X2xhc3RJbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLF9jdXJyZW50KzEpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJqZGJJY29uIGljb24tcGFnaW5hdGlvbi1uZXh0XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPCEtLSDDp8KuwoDDpcKNwpXDpcKIwobDqcKhwrXDpsKgwrfDpcK8wo8gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGUtcGFnaW5hdGlvblwiICpuZ0lmPVwiX2pkYlNpbXBsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYm94XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBhZ2luYXRpb24tZmlyc3RcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzpfY3VycmVudD09PV9maXJzdEluZGV4fVwiIChjbGljayk9XCJkYXRhQ2hhbmdlKHRydWUsX2ZpcnN0SW5kZXgpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1wYWdpbmF0aW9uLXByZXZcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzpfY3VycmVudD09PV9maXJzdEluZGV4fVwiIChjbGljayk9XCJkYXRhQ2hhbmdlKHRydWUsX2N1cnJlbnQtMSlcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXItYm94XCI+XG4gICAgICAgICAgICAgICAge3tfY3VycmVudH19IC8ge3tfbGFzdEluZGV4fX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWJveFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1wYWdpbmF0aW9uLW5leHRcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzpfY3VycmVudD09PV9sYXN0SW5kZXh9XCIgKGNsaWNrKT1cImRhdGFDaGFuZ2UodHJ1ZSxfY3VycmVudCsxKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1sYXN0XCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6X2N1cnJlbnQ9PT1fbGFzdEluZGV4fVwiIChjbGljayk9XCJkYXRhQ2hhbmdlKHRydWUsX2xhc3RJbmRleClcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gw6XCv8Krw6nCgMKfw6jCt8Kzw6jCvcKsIC0tPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiX3Nob3dRdWlja0p1bXBcIiBjbGFzcz1cInF1aWNrLWp1bXBlclwiPlxuICAgICAgICAgICAgw6fCrMKsXG4gICAgICAgICAgICA8aW5wdXQgI2lucHV0SnVtcCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwicXVpY2tKdW1wUGFnZVwiIChrZXl1cC5lbnRlcik9XCJxdWlja0p1bXAoKVwiIGFwcE9ubHlOdW1iZXI9XCJ0cnVlXCI+IMOpwqHCtVxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicXVpY2tKdW1wKClcIj7DqMK3wrPDqMK9wqw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLmpkYi1wbGctcGFnaW5hdGlvbntoZWlnaHQ6MjRweDtkaXNwbGF5OmlubGluZS1ibG9ja30uamRiLXBsZy1wYWdpbmF0aW9uIC50b3RhbC1ib3h7ZmxvYXQ6bGVmdDttYXJnaW4tcmlnaHQ6MzBweDtoZWlnaHQ6MjRweDtsaW5lLWhlaWdodDoyNHB4O2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiMzMjMyMzN9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3h7ZmxvYXQ6cmlnaHR9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmpkYi1wbGctcGFnaW5hdGlvbi1vcHRpb25ze2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjMwcHh9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbntmbG9hdDpsZWZ0O292ZXJmbG93OmhpZGRlbn0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIGxpe3Bvc2l0aW9uOnJlbGF0aXZlO2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjVweDtwYWRkaW5nOjAgNXB4O2hlaWdodDoyNHB4O21pbi13aWR0aDoyNHB4O2xpbmUtaGVpZ2h0OjI0cHg7dGV4dC1hbGlnbjpjZW50ZXI7Ym9yZGVyLXJhZGl1czoycHg7Y29sb3I6IzMyMzIzMztib3JkZXI6MXB4IHNvbGlkICNhZmIwYjM7Y3Vyc29yOnBvaW50ZXI7LW1vei11c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2JhY2tncm91bmQ6I2ZmZn0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5kaXNhYmxlZHtiYWNrZ3JvdW5kOiNmMGYxZjU7Y29sb3I6I2JmYzBjNDtib3JkZXI6MXB4IHNvbGlkICNlMWUyZTZ9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWJhY2t3YXJkLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1mb3J3YXJke2JvcmRlcjpub25lO3BhZGRpbmc6MDtiYWNrZ3JvdW5kOjAgMH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tYmFja3dhcmQgLmljb24tcGFnaW5hdGlvbi1qdW1wLW5leHQsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWJhY2t3YXJkIC5pY29uLXBhZ2luYXRpb24tanVtcC1wcmV2LC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1mb3J3YXJkIC5pY29uLXBhZ2luYXRpb24tanVtcC1uZXh0LC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1mb3J3YXJkIC5pY29uLXBhZ2luYXRpb24tanVtcC1wcmV2e2NvbG9yOiMzZjY5ZjI7ZGlzcGxheTpub25lfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1mb3J3YXJkOmhvdmVyIC5pY29uLXBhZ2luYXRpb24tanVtcC1wcmV2e2Rpc3BsYXk6YmxvY2t9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWZvcndhcmQ6aG92ZXIgLmljb24tcGFnaW5hdGlvbi1tb3Jle2Rpc3BsYXk6bm9uZX0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tYmFja3dhcmQ6aG92ZXIgLmljb24tcGFnaW5hdGlvbi1qdW1wLW5leHR7ZGlzcGxheTpibG9ja30uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tYmFja3dhcmQ6aG92ZXIgLmljb24tcGFnaW5hdGlvbi1tb3Jle2Rpc3BsYXk6bm9uZX0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tZmlyc3Q6aG92ZXIsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWxhc3Q6aG92ZXIsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLW5leHQ6aG92ZXIsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLXBhZ2VyOmhvdmVyLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1wcmV2OmhvdmVye2NvbG9yOiM0ZDc2ZmY7Ym9yZGVyOjFweCBzb2xpZCAjNGQ3NmZmfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmFjdGl2ZSwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5hY3RpdmU6aG92ZXJ7YmFja2dyb3VuZDojNGQ3NmZmO2NvbG9yOiNmZmY7Ym9yZGVyOm5vbmV9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLW5leHQsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLXByZXZ7cGFkZGluZzowfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1uZXh0IC5qZGJJY29uLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1wcmV2IC5qZGJJY29ue2ZvbnQtc2l6ZToyMnB4fS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbntmbG9hdDpsZWZ0O292ZXJmbG93OmhpZGRlbn0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLmNlbnRlci1ib3gsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5sZWZ0LWJveCwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLnJpZ2h0LWJveHtvdmVyZmxvdzpoaWRkZW47ZmxvYXQ6bGVmdH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLmNlbnRlci1ib3ggc3BhbiwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLmxlZnQtYm94IHNwYW4sLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5yaWdodC1ib3ggc3BhbntmbG9hdDpsZWZ0O2xpbmUtaGVpZ2h0OjI0cHg7dGV4dC1hbGlnbjpjZW50ZXI7aGVpZ2h0OjI0cHg7d2lkdGg6MjRweH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLmNlbnRlci1ib3ggc3BhbjpmaXJzdC1jaGlsZCwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLmxlZnQtYm94IHNwYW46Zmlyc3QtY2hpbGQsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5yaWdodC1ib3ggc3BhbjpmaXJzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MXB4fS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAuY2VudGVyLWJveCAuZGlzYWJsZWQsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5sZWZ0LWJveCAuZGlzYWJsZWQsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5yaWdodC1ib3ggLmRpc2FibGVke2NvbG9yOiNkN2Q4ZGJ9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5jZW50ZXItYm94IHNwYW46aG92ZXIsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5sZWZ0LWJveCBzcGFuOmhvdmVyLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAucmlnaHQtYm94IHNwYW46aG92ZXJ7Y29sb3I6IzRkNzZmZn0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLmNlbnRlci1ib3h7d2lkdGg6NTBweDtoZWlnaHQ6MjRweDtsaW5lLWhlaWdodDoyNHB4O3RleHQtYWxpZ246Y2VudGVyfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5xdWljay1qdW1wZXJ7ZmxvYXQ6bGVmdDttYXJnaW4tbGVmdDoyMHB4fS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5xdWljay1qdW1wZXIgYnV0dG9uLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5xdWljay1qdW1wZXIgaW5wdXR7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6NDBweDtoZWlnaHQ6MjRweDtib3JkZXItcmFkaXVzOjNweDtib3JkZXI6MXB4IHNvbGlkICNlMWUyZTY7b3V0bGluZTowfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5xdWljay1qdW1wZXIgYnV0dG9ue21hcmdpbi1sZWZ0OjE1cHg7ZmxvYXQ6cmlnaHR9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnF1aWNrLWp1bXBlciBpbnB1dHtpbWUtbW9kZTpkaXNhYmxlZH1gXVxufSlcbmV4cG9ydCBjbGFzcyBKZGJQbGdQYWdpbmF0aW9uQ29tcG9uZW50IHtcbiAgX3RvdGFsOiBudW1iZXI7IC8vIMOmwoDCu8Omwp3CocOmwpXCsFxuICBfY3VycmVudCA9IDE7IC8vIMOlwr3Ck8OlwonCjcOpwqHCtcOnwqDCgcOpwrvCmMOowq7CpMOkwrjCujFcbiAgX3BhZ2VTaXplID0gMTA7IC8vIMOpwrvCmMOowq7CpMOmwp3CocOmwpXCsFxuICBfZmlyc3RJbmRleCA9IDE7ICAvLyDDqcKmwpbDqcKhwrXDqcK7wpjDqMKuwqTDpMK4wroxXG4gIF9sYXN0SW5kZXggPSBJbmZpbml0eTsgIC8vIMOlwrDCvsOpwqHCtcOpwrvCmMOowq7CpMOkwrjCusOmwpfCoMOnwqnCt1xuICBfc2hvd1RvdGFsID0gZmFsc2U7ICAvLyDDpsKYwq/DpcKQwqbDpcKxwpXDp8KkwrrDpsKAwrvDpsKVwrDDr8K8wozDqcK7wpjDqMKuwqTDpMK4wo3DpcKxwpXDp8KkwrpcbiAgX3Nob3dQYWdlU2l6ZSA9IGZhbHNlOyAvLyDDpsKYwq/DpcKQwqbDpcKxwpXDp8KkwrrDqcKhwrXDp8KgwoHDpcKIwofDpsKNwqLDr8K8wozDqcK7wpjDqMKuwqTDpMK4wo3DpcKxwpXDp8KkwrpcbiAgX3Nob3dRdWlja0p1bXAgPSBmYWxzZTsgLy8gw6bCmMKvw6XCkMKmw6XCscKVw6fCpMK6w6XCv8Krw6nCgMKfw6jCt8Kzw6jCvcKsw6/CvMKMw6nCu8KYw6jCrsKkw6TCuMKNw6XCscKVw6fCpMK6XG4gIHBhZ2VzID0gW107ICAvLyDDqcKhwrXDp8KgwoHDpsKVwrDDp8K7woRcbiAgLy8gX29wdGlvbnMgPSBbMTAsIDIwLCAzMCwgNDAsIDUwXTsgLy8gc2VsZWN0w6nCu8KYw6jCrsKkw6bClcKww6fCu8KEXG4gIC8vIHNlbGVjdMOpwrvCmMOowq7CpMOmwpXCsMOnwrvChFxuICBfb3B0aW9ucyA9IFtcbiAgICB7IHZhbHVlOiAxMCwgdGV4dDogJzEww6bCncKhL8OpwqHCtScgfSxcbiAgICB7IHZhbHVlOiAyMCwgdGV4dDogJzIww6bCncKhL8OpwqHCtScgfSxcbiAgICB7IHZhbHVlOiAzMCwgdGV4dDogJzMww6bCncKhL8OpwqHCtScgfSxcbiAgICB7IHZhbHVlOiA0MCwgdGV4dDogJzQww6bCncKhL8OpwqHCtScgfSxcbiAgICB7IHZhbHVlOiA1MCwgdGV4dDogJzUww6bCncKhL8OpwqHCtScgfVxuICBdO1xuXG4gIHF1aWNrSnVtcFBhZ2U6IGFueTsgLy8gw6XCv8Krw6nCgMKfw6jCt8Kzw6jCvcKsw6nCocK1w6fCoMKBXG4gIGhpc1FpY3VrUGFnZTogYW55OyAgLy8gw6XCjsKGw6XCj8Kyw6XCv8Krw6nCgMKfw6jCt8Kzw6jCvcKsw6nCocK1w6fCoMKBXG4gIF9qZGJTaW1wbGUgPSBmYWxzZTsgLy8gw6bCmMKvw6XCkMKmw6TCuMK6w6fCrsKAw6XCjcKVw6XCiMKGw6nCocK1w6/CvMKMw6nCu8KYw6jCrsKkw6TCuMK6w6XCn8K6w6bCnMKsw6XCiMKGw6nCocK1XG5cbiAgQE91dHB1dCgpIGpkYlBhZ2VTaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgIC8vIMOmwp3CocOmwpXCsMOlwojCh8Omwo3CoiAgw6XCkcK9w6XCkMKNw6TCuMKOw6XCscKew6bCgMKnw6fCm8K4w6XChcKzXG4gIEBPdXRwdXQoKSBqZGJQYWdlSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAgLy8gw6nCocK1w6fCoMKBw6XCiMKHw6bCjcKiXG5cbiAgQFZpZXdDaGlsZCgnaW5wdXRKdW1wJykgcHJpdmF0ZSBpbnB1dEp1bXA6IEVsZW1lbnRSZWY7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIC8vIMOmwpjCr8OlwpDCpsOlwrHClcOnwqTCusOmwoDCu8OmwpXCsMOmwqDCh8Onwq3CvlxuICBASW5wdXQoKVxuICBzZXQgamRiU2hvd1RvdGFsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1RvdGFsID0gdGhpcy50b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGpkYlNob3dUb3RhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1RvdGFsO1xuICB9XG5cbiAgLy8gw6bClcKww6bCjcKuw6bCgMK7w6bClcKwXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJUb3RhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgLy8gw6jCi8Klw6TCvMKgw6XChcKlw6XCgMK8w6XCksKMw6XCvcKTw6XCicKNdG90YWzDpMK4woDDqMKHwrTDr8K8wozDpcKIwpnDpMK4wo3DqMKnwqbDpcKPwpHDpsKTwo3DpMK9wpxcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX3RvdGFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3RvdGFsID0gdmFsdWU7XG4gICAgdGhpcy5zZXRQYWdlTm8oKTtcbiAgfVxuXG4gIGdldCBqZGJUb3RhbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbDtcbiAgfVxuXG4gIC8vIGpkYlBhZ2VJbmRleMOkwrjCjl9jdXJyZW50w6XChcKzw6jCgcKUw6/CvMKMw6jCocKow6fCpMK6w6nCocK1w6fCoMKBXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJQYWdlSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9jdXJyZW50ID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPiB0aGlzLl9sYXN0SW5kZXggfHwgdmFsdWUgPCB0aGlzLl9maXJzdEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnQgPSBOdW1iZXIodmFsdWUpO1xuICAgIHRoaXMuc2V0UGFnZU5vKCk7XG4gIH1cblxuICBnZXQgamRiUGFnZUluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnQ7XG4gIH1cblxuICAvLyDDpsKYwq/DpcKQwqbDpcKxwpXDp8KkwrrDpcKIwofDpsKNwqLDpsKdwqHDpsKVwrBzZWxlY3RcbiAgQElucHV0KClcbiAgc2V0IGpkYlNob3dQYWdlU2l6ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dQYWdlU2l6ZSA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBqZGJTaG93UGFnZVNpemUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQYWdlU2l6ZTtcbiAgfVxuXG4gIC8vIMOpwrvCmMOowq7CpMOmwp3CocOmwpXCsFxuICBASW5wdXQoKVxuICBzZXQgamRiUGFnZVNpemUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fcGFnZVNpemUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcGFnZVNpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldFBhZ2VObygpO1xuICB9XG5cbiAgZ2V0IGpkYlBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG5cbiAgLy8gw6nCu8KYw6jCrsKkw6TCuMKLw6bCi8KJw6nCgMKJw6bCi8Kpw6bCncKhw6bClcKww6bClcKww6fCu8KEXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJTaXplT3B0aW9ucyh2YWx1ZSkge1xuICAgIC8vIMOowovCpcOkwrzCoMOlwoXCpcOlwoDCvMOlwpLCjMOlwr3Ck8OlwonCjXRvdGFsw6TCuMKAw6jCh8K0w6/CvMKMw6XCiMKZw6TCuMKNw6jCp8Kmw6XCj8KRw6bCk8KNw6TCvcKcXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLl9vcHRpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gw6XCiMKkw6bClsKtw6bCmMKvw6XCkMKmw6TCuMK6w6bClcKww6fCu8KEXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnNBcnIgPSBbXTtcbiAgICAgIHZhbHVlLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICB2YWx1ZTogZWxlbSxcbiAgICAgICAgICB0ZXh0OiBlbGVtICsgJ8Omwp3CoS/DqcKhwrUnXG4gICAgICAgIH07XG4gICAgICAgIG9wdGlvbnNBcnIucHVzaChvYmopO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9uc0FycjtcbiAgICB9XG4gIH1cblxuICBnZXQgamRiU2l6ZU9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICAvLyDDpsKYwq/DpcKQwqbDpcKxwpXDp8KkwrrDpcK/wqvDqcKAwp/DqMK3wrPDqMK9wqzDqcKhwrXDqcKdwqJcbiAgQElucHV0KClcbiAgc2V0IGpkYlNob3dRdWlja0p1bXAodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93UXVpY2tKdW1wID0gdGhpcy50b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGpkYlNob3dRdWlja0p1bXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dRdWlja0p1bXA7XG4gIH1cblxuICAvLyDDpcKIwobDqcKhwrXDpsKgwrfDpcK8wo9cbiAgQElucHV0KClcbiAgc2V0IGpkYlNpbXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2pkYlNpbXBsZSA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBqZGJTaW1wbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuamRiU2ltcGxlO1xuICB9XG5cbiAgLy8gw6XCiMKbw6XCu8K6w6nCocK1w6fCoMKBXG4gIHNldFBhZ2VObygpIHtcbiAgICAvLyDDpcKQwpHDpMK4worDpcKPwpbDpsKVwrRcbiAgICB0aGlzLl9sYXN0SW5kZXggPSBNYXRoLmNlaWwodGhpcy5fdG90YWwgLyB0aGlzLl9wYWdlU2l6ZSk7XG4gICAgLy8gw6XCpsKCw6bCnsKcw6XCvcKTw6XCicKNw6nCocK1w6fCoMKBw6XCpMKnw6TCusKOw6XCsMK+w6nCocK1w6/CvMKMw6XCiMKZw6fCrcKJw6TCusKOw6XCsMK+w6nCocK1XG4gICAgLy8gaWYgKHRoaXMuX2N1cnJlbnQgPiB0aGlzLl9sYXN0SW5kZXgpIHtcbiAgICAvLyAgIHRoaXMuamRiUGFnZUluZGV4ID0gdGhpcy5fbGFzdEluZGV4O1xuICAgIC8vICAgdGhpcy5qZGJQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLmpkYlBhZ2VJbmRleCk7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgdG1wUGFnZXMgPSBbXTtcblxuICAgIGlmICh0aGlzLl9sYXN0SW5kZXggPD0gOSkge1xuICAgICAgLy8gw6jCi8Klw6bCgMK7w6nCocK1w6bClcKww6TCuMKNw6jCtsKFw6jCv8KHOcOvwrzCjMOlwojCmcOlwoXCqMOpwoPCqMOlwrHClcOnwqTCusOlwpzCqMOpwqHCtcOpwp3CosOkwrjCilxuICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gdGhpcy5fbGFzdEluZGV4IC0gMTsgaSsrKSB7XG4gICAgICAgIHRtcFBhZ2VzLnB1c2goe1xuICAgICAgICAgIGluZGV4OiBpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gK3RoaXMuX2N1cnJlbnQ7XG4gICAgICBsZXQgbGVmdCA9IE1hdGgubWF4KDIsIGN1cnJlbnQgLSAyKTtcbiAgICAgIGxldCByaWdodCA9IE1hdGgubWluKGN1cnJlbnQgKyAyLCB0aGlzLl9sYXN0SW5kZXggLSAxKTtcblxuICAgICAgLy8gw6fCicK5w6bCrsKKw6XCpMKEw6fCkMKGw6bCrcKjw6bClcKww6fCrMKsw6TCusKUw6TCuMKqw6bClcKww6XCksKMw6XCgMKSw6bClcKww6fCrMKsw6TCusKUw6TCuMKqw6bClcKwXG4gICAgICBpZiAoY3VycmVudCA9PT0gNSkge1xuICAgICAgICBsZWZ0ID0gMjtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gdGhpcy5fbGFzdEluZGV4IC0gNCkge1xuICAgICAgICByaWdodCA9IHRoaXMuX2xhc3RJbmRleCAtIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50IC0gMSA8PSAzKSB7XG4gICAgICAgIHJpZ2h0ID0gNztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2xhc3RJbmRleCAtIGN1cnJlbnQgPD0gMykge1xuICAgICAgICBsZWZ0ID0gdGhpcy5fbGFzdEluZGV4IC0gNjtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICB0bXBQYWdlcy5wdXNoKHsgaW5kZXg6IGkgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wYWdlcyA9IHRtcFBhZ2VzO1xuICB9XG5cbiAgLy8gc3RhdHVzw6TCuMK6dHJ1ZcOowqHCqMOnwqTCusOpwqHCtcOnwqDCgcOlwojCh8Omwo3CosOvwrzCjG51bcOowqHCqMOnwqTCusOpwqHCtcOnwqDCgcOvwrzCjGZhbHNlw6jCocKow6fCpMK6w6bCncKhw6bClcKww6XCiMKHw6bCjcKiw6/CvMKMbnVtw6jCocKow6fCpMK6w6bCncKhw6bClcKwXG4gIGRhdGFDaGFuZ2Uoc3RhdHVzOiBib29sZWFuLCBudW06IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGlmIChudW0gPT09IHRoaXMuX2ZpcnN0SW5kZXggLSAxIHx8IG51bSA9PT0gdGhpcy5fbGFzdEluZGV4ICsgMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyDDpsK4woXDp8KpwrrDqMK+wpPDpcKFwqXDpsKhwobDpcKGwoXDpcKuwrlcbiAgICAgIHRoaXMucXVpY2tKdW1wUGFnZSA9ICcnO1xuICAgICAgdGhpcy5qZGJQYWdlSW5kZXggPSBudW07XG4gICAgICB0aGlzLmpkYlBhZ2VJbmRleENoYW5nZS5lbWl0KHRoaXMuamRiUGFnZUluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gw6bCuMKFw6fCqcK6w6jCvsKTw6XChcKlw6bCocKGw6XChsKFw6XCrsK5XG4gICAgICB0aGlzLnF1aWNrSnVtcFBhZ2UgPSAnJztcbiAgICAgIHRoaXMuamRiUGFnZVNpemUgPSBudW07XG4gICAgICB0aGlzLmpkYlBhZ2VTaXplQ2hhbmdlLmVtaXQobnVtKTtcblxuICAgICAgLy8gw6XCiMKHw6bCjcKiw6nCocK1w6bClcKww6TCucKLw6XCkMKOw6nCnMKAw6jCpsKBw6XCsMKGw6nCocK1w6fCoMKBw6nCh8KNw6fCvcKuw6TCuMK6MVxuICAgICAgdGhpcy5qZGJQYWdlSW5kZXggPSAxO1xuICAgICAgdGhpcy5qZGJQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLmpkYlBhZ2VJbmRleCk7XG4gICAgICB0aGlzLnNldFBhZ2VObygpO1xuICAgIH1cbiAgICAvLyB0aGlzLnNldFBhZ2VObygpO1xuICB9XG5cbiAgLy8gw6fCgsK5w6XCh8K7w6jCt8Kzw6jCvcKsw6bCjMKJw6nCksKuw6XCv8Krw6nCgMKfw6jCt8Kzw6jCvcKsXG4gIHF1aWNrSnVtcCgpIHtcbiAgICAvLyDDqMKLwqXDpsKYwq/DqMK+wpPDpcKFwqXDp8KawoTDqcKhwrXDp8KgwoHDpcKkwqfDpMK6wo7DpsKcwoDDpcKQwo7DpMK4woDDqcKhwrXDqcKhwrXDp8KgwoHDr8K8wozDpcKNwrPDqMK2woXDpcKHwrrDqMKMwoPDpcKbwrTDpMK4wo3DpcKtwpjDpcKcwqjDr8K8wozDpcKIwpnDpsK4woXDp8KpwrrDqcKhwrXDp8KgwoHDr8K8wozDpcK5wrbDpMK9wr/DqMK+wpPDpcKFwqXDpsKhwobDqMKOwrfDpcKPwpbDp8KEwqbDp8KCwrlcbiAgICBpZiAodGhpcy5xdWlja0p1bXBQYWdlID4gdGhpcy5fbGFzdEluZGV4KSB7XG4gICAgICB0aGlzLmlucHV0SnVtcC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLnF1aWNrSnVtcFBhZ2UgPSAnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDDqMKLwqXDqMK+wpPDpcKFwqXDpMK4wrrDp8KpwrrDr8K8wozDpcKIwpnDpMK4wo3DqMKDwr3DqMK3wrPDqMK9wqxcbiAgICBpZiAoIXRoaXMucXVpY2tKdW1wUGFnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuamRiUGFnZUluZGV4ID0gdGhpcy5xdWlja0p1bXBQYWdlO1xuICAgIHRoaXMuamRiUGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5qZGJQYWdlSW5kZXgpO1xuICB9XG5cbiAgLy8gw6fCgsK5w6XCh8K7w6XCt8Kmw6fCrsKtw6XCpMK0KMOkwrjCusOkwrvCgMOkwrnCiMOkwr3Cv8OnwpTCqMOmwp3CocOmwpXCsMOpwpnCpMOkwrvCpTLDpcKRwqIpXG4gIGp1bXBCZWZvcmUocGFnZVNpemUpIHtcbiAgICB0aGlzLmRhdGFDaGFuZ2UodHJ1ZSwgdGhpcy5fY3VycmVudCAtIE1hdGgucm91bmQocGFnZVNpemUgLyAyKSk7XG4gIH1cblxuICAvLyDDp8KCwrnDpcKHwrvDpcKPwrPDp8Kuwq3DpcKkwrRcbiAganVtcEFmdGVyKHBhZ2VTaXplKSB7XG4gICAgdGhpcy5kYXRhQ2hhbmdlKHRydWUsIHRoaXMuX2N1cnJlbnQgKyBNYXRoLnJvdW5kKHBhZ2VTaXplIC8gMikpO1xuICB9XG5cbiAgLy8gw6jCvcKsw6bCjcKiw6TCuMK6Ym9vbGVhbizDpcKNwrPDpcKuwp7Dp8KOwrDDpsKcwonDqMK/wpnDpMK4wqrDpcKtwpfDpsKuwrXDpcKwwrHDqMKuwqTDpMK4wrrDpMK4wrp0cnVlLMOmwrLCocOmwpzCicOlwo3Cs8OkwrjCumZhbHNlXG4gIHRvQm9vbGVhbih2YWx1ZTogYm9vbGVhbiB8IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJycgfHwgKHZhbHVlICYmIHZhbHVlICE9PSAnZmFsc2UnKTtcbiAgfVxuXG4gIC8vIMOmwqDCocOpwqrCjMOmwpjCr8OlwpDCpsOkwrjCusOnwrrCr8OmwpXCsMOlwq3Cl1xuICBpc051bWJlcihvYmopIHtcbiAgICBjb25zdCByZWcgPSAvXlswLTldKiQvO1xuICAgIHJldHVybiByZWcudGVzdChvYmopO1xuICB9XG5cbn1cblxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBidXR0b25TaXplID0gJ3NtYWxsJyB8ICdsYXJnZScgfCAnZGVmYXVsdCc7XG5leHBvcnQgdHlwZSBidXR0b25UeXBlID0gJ3ByaW1hcnknIHwgJ2dyYXknIHwgJ2RhbmdlcicgfCAnYnVsZWxpbmUnIHwgJ3doaXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2FwcC1qZGItcGxnLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYDxpIGNsYXNzPVwiamRiLWljb24tbG9hZGluZyBhY3Rpb25cIiAqbmdJZj1cImxvYWRpbmdcIj48L2k+XG48bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVzOiBbYEAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nQ2lyY2xlezAley13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgbG9hZGluZ0NpcmNsZXswJXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX06aG9zdC5qZGItcGxnLWJ0bntmb250LXdlaWdodDo1MDA7d2hpdGUtc3BhY2U6bm93cmFwO2N1cnNvcjpwb2ludGVyO291dGxpbmU6MH06aG9zdC5qZGItcGxnLWJ0biAuYWN0aW9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX06aG9zdC5qZGItcGxnLWJ0biAuYWN0aW9uOmJlZm9yZXtkaXNwbGF5OmlubGluZS1ibG9jazstd2Via2l0LWFuaW1hdGlvbjoxcyBsaW5lYXIgaW5maW5pdGUgbG9hZGluZ0NpcmNsZTthbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGxvYWRpbmdDaXJjbGV9Omhvc3QuamRiLXBsZy1idG4gLmFjdGlvbjJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMzclKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMzclKX06aG9zdC5sYXJnZXttaW4td2lkdGg6MTIwcHg7bGluZS1oZWlnaHQ6NDBweDtib3JkZXItcmFkaXVzOjRweDtwYWRkaW5nOjAgMTZweH06aG9zdC5kZWZhdWx0e21pbi13aWR0aDoxMDBweDtsaW5lLWhlaWdodDozMHB4O2JvcmRlci1yYWRpdXM6M3B4O3BhZGRpbmc6MCAxMnB4fTpob3N0LnNtYWxse21pbi13aWR0aDo2MHB4O2xpbmUtaGVpZ2h0OjI0cHg7Ym9yZGVyLXJhZGl1czoycHg7cGFkZGluZzowIDEwcHh9Omhvc3Quc21hbGwgLmFjdGlvbnt3aWR0aDoyNHB4O2hlaWdodDoyNHB4fTpob3N0LnByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojM2Y2OWYyO2NvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjM2Y2OWYyfTpob3N0LnByaW1hcnk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNGQ3NmZmO2JvcmRlcjoxcHggc29saWQgIzRkNzZmZn06aG9zdC5wcmltYXJ5OmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMyNjQxOTk7Ym9yZGVyOjFweCBzb2xpZCAjMjY0MTk5fTpob3N0LnByaW1hcnk6ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojYWFiYmYyO2JvcmRlcjoxcHggc29saWQgI2FhYmJmMn06aG9zdC5ncmF5e2JhY2tncm91bmQtY29sb3I6I2YwZjFmNTtjb2xvcjojNTc1NzU3O2JvcmRlcjoxcHggc29saWQgI2Q3ZDhkYn06aG9zdC5ncmF5OmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZn06aG9zdC5ncmF5OmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q4ZGJ9Omhvc3QuZ3JheTpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmMGYxZjV9Omhvc3QuZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2Y4NGE0YTtjb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2Y4NGE0YX06aG9zdC5kYW5nZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjY2O2JvcmRlcjoxcHggc29saWQgI2Y2Nn06aG9zdC5kYW5nZXI6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2MzMjkyOTtib3JkZXI6MXB4IHNvbGlkICNjMzI5Mjl9Omhvc3QuZGFuZ2VyOmRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2U2YmNiYztib3JkZXI6MXB4IHNvbGlkICNlNmJjYmN9Omhvc3QuYnVsZWxpbmV7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMzZjY5ZjI7Ym9yZGVyOjFweCBzb2xpZCAjM2Y2OWYyfTpob3N0LmJ1bGVsaW5lOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ViZjBmZX06aG9zdC5idWxlbGluZTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZDdkOGRifTpob3N0LmJ1bGVsaW5lOmRpc2FibGVke2NvbG9yOiNhZmIwYjM7Ym9yZGVyOjFweCBzb2xpZCAjYWZiMGIzO2JhY2tncm91bmQtY29sb3I6I2YwZjFmNX06aG9zdC53aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzU3NTc1Nztib3JkZXI6MXB4IHNvbGlkICNhZmIwYjN9Omhvc3Qud2hpdGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjBmMWY1fTpob3N0LndoaXRlOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q4ZGJ9Omhvc3Qud2hpdGU6ZGlzYWJsZWR7Y29sb3I6I2FmYjBiMztib3JkZXI6MXB4IHNvbGlkICNhZmIwYjM7YmFja2dyb3VuZC1jb2xvcjojZjBmMWY1fTpob3N0LmxvYWRpbmdfZGlzYWJsZXtiYWNrZ3JvdW5kLWNvbG9yOiNhYWJiZjI7Ym9yZGVyOjFweCBzb2xpZCAjYWFiYmYyO3BvaW50ZXItZXZlbnRzOm5vbmV9YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBKZGJQbGdCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIF9lbDogSFRNTEVsZW1lbnQ7XG4gIG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBfcHJlZml4Q2xzID0gJ2pkYi1wbGctYnRuJztcbiAgc2l6ZTogYnV0dG9uU2l6ZTsgICAgICAgICAgICAvLyBzaXplw6fCmsKEw6XCgMK8ICdzbWFsbCcgw6PCgMKBICdsYXJnZScgw6PCgMKBICdkZWZhdWx0J1xuICB0eXBlOiBidXR0b25UeXBlOyAgICAgICAgICAgIC8vIHR5cGXDp8KawoTDpcKAwrwgJ3ByaW1hcnknIMOjwoDCgSAnZ3JheScgw6PCgMKBICdkYW5nZXInw6PCgMKBJ2J1bGVsaW5lJyDDo8KAwoEnd2hpdGUnXG4gIGxvYWRpbmc6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgZ2V0IGpkYlNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgfVxuICBzZXQgamRiU2l6ZSh2YWx1ZTogYnV0dG9uU2l6ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJ2RlZmF1bHQnO1xuICAgIH1cbiAgICB0aGlzLnNpemUgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbCwgdGhpcy5zaXplKTtcbiAgICB0aGlzLl9zZXRDbGFzc01hcCh0aGlzLmxvYWRpbmcpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGpkYlR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuICBzZXQgamRiVHlwZSh2YWx1ZTogYnV0dG9uVHlwZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJ3ByaW1hcnknO1xuICAgIH1cbiAgICB0aGlzLnR5cGUgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbCwgdGhpcy50eXBlKTtcbiAgICB0aGlzLl9zZXRDbGFzc01hcCh0aGlzLmxvYWRpbmcpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGpkYkxvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGluZztcbiAgfVxuXG4gIHNldCBqZGJMb2FkaW5nKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSA9PT0gJycgfHwgKHZhbHVlICYmIHZhbHVlICE9PSAnZmFsc2UnKTtcbiAgICB0aGlzLmxvYWRpbmcgPSB2YWx1ZTtcbiAgICB0aGlzLl9zZXRDbGFzc01hcCh0aGlzLmxvYWRpbmcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXG4gICAgdGhpcy5fZWwgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwsIHRoaXMuX3ByZWZpeENscyk7XG4gIH1cbiAgX3NldENsYXNzTWFwKGxvYWRpbmcpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbCwgJ3VuZGVmaW5lZCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLCB0aGlzLnNpemUpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLCB0aGlzLnR5cGUpO1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbCwgJ2xvYWRpbmdfZGlzYWJsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbCwgJ2xvYWRpbmdfZGlzYWJsZScpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBPdXRwdXQsXG4gIElucHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIEluamVjdCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgVGVtcGxhdGVSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVHlwZSxcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtamRiLXBsZy1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYDxkaXYgW25nQ2xhc3NdPVwiX2N1c3RvbUNsYXNzXCI+XG4gICAgPGRpdiBjbGFzcz1cIl9tYXNrQ2xhc3NcIiBbbmdDbGFzc109XCJ7J2hpZCc6IV92aXNpYmxlfVwiIFtzdHlsZS56SW5kZXhdPVwiMTAwMFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJqZGItbW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIFtuZ0NsYXNzXT1cInsnaGlkJzohX3Zpc2libGV9XCIgW25nU3R5bGVdPVwieydkaXNwYWx5JzohX3Zpc2libGV9XCIgKGNsaWNrKT1cImNsb3NlTW9kYWwoJGV2ZW50KVwiIGNsYXNzPVwiX3dyYXBDbGFzc1wiIFtuZ0NsYXNzXT1cIl93cmFwQ2xhc3NcIiBbc3R5bGUuekluZGV4XT1cIjEwMDBcIiBbYXR0ci5hcmlhLW1vZGFsSWRdPVwibW9kYWxJZFwiPlxuICAgICAgICA8ZGl2ICNtb2RhbF9jb250ZW50IGNsYXNzPVwibW9kYWxcIiBbQG9wdGlvbnNTdGF0ZV09XCJfc3RhdGVcIiBbbmdTdHlsZV09XCJfYm9keVN0eWxlTWFwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJfY2xvc2VhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbC1jbG9zZVwiIChjbGljayk9XCJjbGlja0NhbmNlbCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cIm1vZGFsLWNsb3NlLXhcIj48L3NwYW4+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1jbG9zZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIiAqbmdJZj1cIl90aXRsZXx8X3RpdGxlVHBsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC10aXRsZVwiIFthdHRyLmlkXT1cIm1vZGFsSWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7X3RpdGxlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiX3RpdGxlVHBsfHxkZWZhdWx0VGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdENvbnRlbnQ+e3tfY29udGVudH19PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIl9jb250ZW50VHBsfHxkZWZhdWx0Q29udGVudFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbW9kYWxfY29tcG9uZW50PjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiICpuZ0lmPVwiIV9mb290ZXJIaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYWx1dEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhX2lzQ29uZmlybVwiIGFwcC1qZGItcGxnLWJ1dHRvbiBbamRiU2l6ZV09XCInZGVmYXVsdCdcIiBbamRiVHlwZV09XCInd2hpdGUnXCIgKGNsaWNrKT1cImNsaWNrQ2FuY2VsKCRldmVudClcIj48c3Bhbj57e19jYW5jZWxUZXh0fHwnw6XCj8KWw6bCtsKIJ319PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFfaXNDb25maXJtXCIgY2xhc3M9XCJyaWdodC1idG5cIiBhcHAtamRiLXBsZy1idXR0b24gW2pkYlNpemVdPVwiJ2RlZmF1bHQnXCIgW2pkYlR5cGVdPVwiJ3ByaW1hcnknXCIgKGNsaWNrKT1cImNsaWNrT2soJGV2ZW50KVwiPjxzcGFuPnt7X29rVGV4dHx8J8OnwqHCrsOowq7CpCd9fTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfaXNDb25maXJtXCIgY2xhc3M9XCJyaWdodC1idG5cIiBhcHAtamRiLXBsZy1idXR0b24gW2pkYlNpemVdPVwiJ2RlZmF1bHQnXCIgW2pkYlR5cGVdPVwiJ3ByaW1hcnknXCIgKGNsaWNrKT1cImNsaWNrT2soJGV2ZW50KVwiIChjbGljayk9XCJjbGlja09rKCRldmVudClcIj48c3Bhbj57e19Sb2dlclRleHR9fTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIl9mb290ZXJUcGx8fGRlZmFsdXRGb290ZXJcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgdGFiaW5kZXg9XCIwXCIgc3R5bGU9XCJ3aWR0aDowcHg7aGVpZ2h0OjBweDtvdmVyZmxvdzpoaWRkZW47XCI+YWFhPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLl9tYXNrQ2xhc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41KX0uX21hc2tDbGFzcy5oaWR7ZGlzcGxheTpub25lfS5fd3JhcENsYXNze3Bvc2l0aW9uOmZpeGVkO292ZXJmbG93OmF1dG87dG9wOjA7bGVmdDowO2JvdHRvbTowO3JpZ2h0OjA7ei1pbmRleDoxMDAwOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO291dGxpbmU6MH0uX3dyYXBDbGFzcy5oaWR7ZGlzcGxheTpub25lfS5tb2RhbHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO2JhY2tncm91bmQ6I2ZmZn0ubW9kYWwtaGVhZGVye2JhY2tncm91bmQ6I2YwZjFmNTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZDdkOGRiO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6M3B4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweH0ubW9kYWwtdGl0bGV7bWFyZ2luOjA7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6NDBweDtjb2xvcjojMzIzMjMzO3RleHQtYWxpZ246Y2VudGVyfS5tb2RhbC1jbG9zZXtjdXJzb3I6cG9pbnRlcjtib3JkZXI6bm9uZTt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O2JhY2tncm91bmQ6MCAwO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjA7ei1pbmRleDoxMDtsaW5lLWhlaWdodDoxO3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiMwMDA7b3V0bGluZTowfS5tb2RhbC1jbG9zZS14e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7bGluZS1oZWlnaHQ6NDBweDtmb250LXNpemU6MTZweDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJ9Lm1vZGFsLWNsb3NlLXg6aG92ZXJ7dHJhbnNpdGlvbjpjb2xvciAuM3MgZWFzZTtjb2xvcjojMDAwfS5tb2RhbC1ib2R5e3BhZGRpbmc6NDBweDtiYWNrZ3JvdW5kOiNmZmY7b3ZlcmZsb3c6aGlkZGVufS5tb2RhbC1mb290ZXJ7cGFkZGluZzo0MHB4IDA7YmFja2dyb3VuZDojZmZmO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6M3B4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweDt0ZXh0LWFsaWduOmNlbnRlcn0ubW9kYWwtZm9vdGVyIC5yaWdodC1idG57bWFyZ2luLWxlZnQ6MjBweH1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ29wdGlvbnNTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdzaG93TScsIHN0eWxlKHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAvLyBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2hpZGVNJywgc3R5bGUoe1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTgwJSknLFxuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgIC8vIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3Nob3dNIDw9PiBoaWRlTScsIGFuaW1hdGUoJzIwMG1zIGVhc2Utb3V0JykpXG4gICAgXSldXG59KVxuZXhwb3J0IGNsYXNzIEpkYlBsZ0RpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgX2N1c3RvbUNsYXNzID0gJyc7XG4gIF9tYXNrQ2xhc3MgPSAnJztcbiAgX2JvZHlTdHlsZU1hcDtcbiAgbW9kYWxJZDogbnVtYmVyO1xuICBfdmlzaWJsZSA9IGZhbHNlO1xuICBfdGl0bGUgPSAnJztcbiAgX2Nsb3NlYWJsZSA9IHRydWU7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIF9jb250ZW50OiBzdHJpbmcgfCBUeXBlPGFueT47XG4gIF9jb250ZW50VHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgX2FuaW1hdGlvblN0YXR1cyA9ICcxMSc7XG4gIF9ib2R5Q2xhc3M6IHN0cmluZztcbiAgX3dpZHRoID0gJzQwMHB4JztcbiAgX2Zvb3RlckhpZGUgPSBmYWxzZTtcbiAgX2lzQ29uZmlybSA9IGZhbHNlO1xuICBfb2tUZXh0ID0gJyc7XG4gIF9jYW5jZWxUZXh0ID0gJyc7XG4gIF9Sb2dlclRleHQgPSAnJztcbiAgX3N0YXRlID0gJ2hpZGVNJztcbiAgX2Zvb3RlclRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBWaWV3Q2hpbGQoJ21vZGFsX2NvbnRlbnQnKSBjb250ZW50RWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21vZGFsX2NvbXBvbmVudCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBib2R5RWw6IFZpZXdDb250YWluZXJSZWY7XG4gIEBPdXRwdXQoKSBNdmlzaWJpbGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIE1Pbk9rOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBNT25DYW5jZWw6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIMOlwrzCucOmwqHChsOmwpjCvsOpwprCkFxuICBASW5wdXQoKVxuICBzZXQgTXZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB2aXNpYmxlID0gdGhpcy50b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl92aXNpYmxlID09PSB2aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdmlzaWJsZSA9IHZpc2libGU7XG4gICAgdGhpcy5NdmlzaWJpbGVDaGFuZ2UuZW1pdCh0aGlzLl92aXNpYmxlKTtcbiAgfVxuICBnZXQgTXZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cbiAgLy8gw6nCmsKQw6jCl8KPZm9vdGVyXG4gIEBJbnB1dCgpXG4gIHNldCBNZm9vdGVySGlkZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB2aXNpYmxlID0gdGhpcy50b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl92aXNpYmxlID09PSB2aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Zvb3RlckhpZGUgPSB2aXNpYmxlO1xuICB9XG4gIGdldCBNZm9vdGVySGlkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvb3RlckhpZGU7XG4gIH1cbiAgLy8gw6bCoMKHw6nCosKYXG4gIEBJbnB1dCgpXG4gIHNldCBNdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBNY29udGVudCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fY29udGVudFRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb250ZW50ID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBNZm9vdGVyKHZhbHVlOnN0cmluZ3xUZW1wbGF0ZVJlZjx2b2lkPil7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpe1xuICAgICAgdGhpcy5fZm9vdGVyVHBsID0gdmFsdWU7XG4gICAgfSBcbiAgfVxuICBcbiAgLy8gw6jCh8Kqw6XCrsKaw6TCucKJw6XCrsK9w6XCusKmXG4gIEBJbnB1dCgpXG4gIHNldCBNd2lkdGgodmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMuX3dpZHRoID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlICsgJ3B4JyA6IHZhbHVlO1xuICB9XG5cbiAgLy8gw6XCrsKaw6TCvcKNbW9kYWzDpMK9wo3Dp8K9wq7DpcKSwozDpsKgwrfDpcK8wo9cbiAgc2V0U3R5bGUoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmNvbnRlbnRFbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX2JvZHlTdHlsZU1hcCA9IHtcbiAgICAgIC4uLnsgd2lkdGg6IHRoaXMuX3dpZHRoIH1cbiAgICB9O1xuICB9XG5cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVzYycsIFsnJGV2ZW50J10pXG4gIG9uRXNjKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNsaWNrQ2FuY2VsKGUpO1xuICB9XG5cbiAgLy8gw6jCh8Kqw6XCrsKaw6TCucKJw6bCoMK3w6XCvMKPXG4gIEBJbnB1dCgpXG4gIHNldCBNY2xhc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2N1c3RvbUNsYXNzID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgTU9rVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2tUZXh0ID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IE1jYW5jZWxUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYW5jZWxUZXh0ID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IE1Sb2dlclRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lzQ29uZmlybSA9IHRydWU7XG4gICAgdGhpcy5fUm9nZXJUZXh0ID0gdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cbiAgY3JlYXRlRHluYW1pY0NvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8YW55Pikge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuX2NvbnRlbnQgYXMgVHlwZTxhbnk+KTtcbiAgICB0aGlzLmJvZHlFbC5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIFxuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5fdmlzaWJsZSkge1xuICAgICAgdGhpcy5fc3RhdGUgPSAnc2hvd00nO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29udGVudEVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5mb2N1cygpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RhdGUgPSAnaGlkZU0nO1xuICAgIH1cbiAgfVxuICBjbGlja0NhbmNlbChlKTogdm9pZCB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuX3N0YXRlID0gJ2hpZGVNJztcbiAgICB0aGlzLk1PbkNhbmNlbC5lbWl0KGUpO1xuICB9XG4gIGNsaWNrT2soZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLk1Pbk9rKSB7XG4gICAgICB0aGlzLk1Pbk9rLmVtaXQoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Zpc2libGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N0YXRlID0gJ2hpZGVNJztcbiAgICB9XG4gIH1cbiAgY2xvc2VNb2RhbChlKTogdm9pZCB7XG4gICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICdkaWFsb2cnKSB7XG4gICAgICB0aGlzLmNsaWNrQ2FuY2VsKGUpO1xuICAgICAgdGhpcy5fc3RhdGUgPSAnaGlkZU0nO1xuICAgIH1cbiAgfVxuICB0b0Jvb2xlYW4odmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICcnIHx8ICh2YWx1ZSAmJiB2YWx1ZSAhPT0gZmFsc2UpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcE9ubHlOdW1iZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBPbmx5TnVtYmVyRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cbiAgcmVnZXhTdHIgPSAnXlswLTldKiQnO1xuICBASW5wdXQoKSBhcHBPbmx5TnVtYmVyOiBib29sZWFuO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKSBvbktleURvd24oZXZlbnQpIHtcbiAgICBjb25zdCBlID0gPEtleWJvYXJkRXZlbnQ+ZXZlbnQ7XG4gICAgaWYgKHRoaXMuYXBwT25seU51bWJlcikge1xuICAgICAgaWYgKFs0NiwgOCwgOSwgMjcsIDEzLCAxMTAsIDE5MF0uaW5kZXhPZihlLmtleUNvZGUpICE9PSAtMSB8fFxuICAgICAgICAvLyBBbGxvdzogQ3RybCtBXG4gICAgICAgIChlLmtleUNvZGUgPT09IDY1ICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHxcbiAgICAgICAgLy8gQWxsb3c6IEN0cmwrQ1xuICAgICAgICAoZS5rZXlDb2RlID09PSA2NyAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8XG4gICAgICAgIC8vIEFsbG93OiBDdHJsK1ZcbiAgICAgICAgKGUua2V5Q29kZSA9PT0gODYgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fFxuICAgICAgICAvLyBBbGxvdzogQ3RybCtYXG4gICAgICAgIChlLmtleUNvZGUgPT09IDg4ICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHxcbiAgICAgICAgLy8gQWxsb3c6IGhvbWUsIGVuZCwgbGVmdCwgcmlnaHRcbiAgICAgICAgKGUua2V5Q29kZSA+PSAzNSAmJiBlLmtleUNvZGUgPD0gMzkpKSB7XG4gICAgICAgIC8vIGxldCBpdCBoYXBwZW4sIGRvbid0IGRvIGFueXRoaW5nXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNoID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLmtleUNvZGUpO1xuICAgICAgY29uc3QgcmVnRXggPSBuZXcgUmVnRXhwKHRoaXMucmVnZXhTdHIpO1xuICAgICAgaWYgKHJlZ0V4LnRlc3QoY2gpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyDDqMKnwqPDpcKGwrPDpMK4wq3DpsKWwofDqMK+wpPDpcKFwqXDpsKzwpXDqMK+wpPDpcKFwqXDpsKxwonDpcKtwpfDqcKXwq7DqcKiwphcbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKSBvbktleVVwKGV2ZW50KSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gIH1cbn1cbiIsIi8qXG4gIMOkwrjCi8OmwovCicOmwqHChsOlworCn8OowoPCvcOvwrzCmlxuICDDp8Knwo3Dp8KxwrvDr8K8wprDpcKNwpXDqcKAwonDr8K8wozDpcKkwprDqcKAwonDr8K8wozDqcKAwonDpcKHwqDDqcKhwrlcbiAgw6bCoMK3w6XCvMKPw6/CvMKaw6nCq8KYw6XCusKmIG1pZGRsZSBzbWFsbCBsYXJnZVxuKi9cblxuaW1wb3J0IHtcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBmb3J3YXJkUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgUmVuZGVyZXIsXG4gIFZpZXdDaGlsZHJlbixcbiAgT25DaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1qZGItcGxnLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgPCEtLSDDpcKNwpXDqcKAwokgLS0+XG48ZGl2ICpuZ0lmPVwiX2pkYk1vZGU9PSdjaG9vc2VPbmUnXCIgI2lucHV0RG9tIGNsYXNzPVwiamRiLXBsZy1zZWxlY3Qtb25lXCIgKGNsaWNrKT1cImRpYWxvZ1Nob3coJGV2ZW50KVwiIFtuZ0NsYXNzXT1cIl9jbGFzc01hcFwiIFtuZ1N0eWxlXT1cInsnd2lkdGgnOl93aWR0aH1cIj5cbiAgICA8IS0tIHBsYWNlSG9sZGVyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJqZGItcGxnLXNlbGVjdC1wbGFjZWhvbGRlclwiIFtoaWRkZW5dPVwiaW5wdXRUZXh0IT0nJ1wiPnt7X3BsYWNlSG9sZGVyfX08L2Rpdj5cbiAgICA8IS0tIMOlwo3ClcOpwoDCiSAtLT5cbiAgICA8IS0tIDxzcGFuIGNsYXNzPVwiY2hvb3NlT25lXCIgW2hpZGRlbl09XCJpbnB1dFRleHQ9PScnXCI+e3tpbnB1dFRleHR9fTwvc3Bhbj4gLS0+XG4gICAgPGlucHV0IGNsYXNzPVwiY2hvb3NlT25lIGNob29zZU9uZUlucHV0XCIgW2hpZGRlbl09XCJpbnB1dFRleHQ9PScnXCIgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImlucHV0VGV4dFwiIHJlYWRvbmx5PlxuICAgIDx1bCAjb3B0aW9uTGlzdCBbbmdDbGFzc109XCJ7ICdvcHRpb25zLXNob3cnOnNob3csICdvcHRpb25zLW5vLW1hcmdpbic6IXNwYWNlRmxleH0gXCIgY2xhc3M9XCJvcHRpb25zIFwiPlxuICAgICAgICA8IS0tIMOlwo3ClcOpwoDCiSAtLT5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgX3NlbGVjdExpc3QgXCIgKGNsaWNrKT1cIml0ZW0oJGV2ZW50LG9wdGlvbikgXCIgW25nQ2xhc3NdPVwie2FjdGl2ZTpuZ01vZGVsVmFsdWU9PT1vcHRpb25bX29wdGlvblZhbHVlXSxkaXNhYmxlZDpvcHRpb25bX2pkYkl0ZW1EaXNhYmxlZF0gPT09IF9qZGJTdXJlRGlzYWJsZWR9IFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1ib3hcIiAqbmdJZj1cIl9zaG93SW1nQm94JiZvcHRpb24uaW1nVXJsXCIgW3NyY109XCJvcHRpb24uaW1nVXJsXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImltZy1ib3hcIiAqbmdJZj1cIl9zaG93SW1nQm94JiYhb3B0aW9uLmltZ1VybFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ib3hcIj57e19vcHRpb25UZXh0PT0nb3B0aW9uJz9vcHRpb246b3B0aW9uW19vcHRpb25UZXh0XX19PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPCEtLSDDpsK4woXDp8KpwrrDpcKbwr7DpsKgwocgLS0+XG4gICAgPHNwYW4gY2xhc3M9XCJjbG9zZS1pY29uIGljb24tZW1wdHkgXCIgW2hpZGRlbl09XCIhaXNTaG93Q2xlYXIgXCIgKGNsaWNrKT1cImNsZWFySW5wdXRUZXh0KCRldmVudCkgXCI+PC9zcGFuPlxuICAgIDwhLS0gw6XCjcKVw6nCgMKJw6bCl8K2w6TCuMKLw6bCi8KJw6XCm8K+w6bCoMKHIC0tPlxuICAgIDxzcGFuIGNsYXNzPVwic2VsZWN0LWljb24gaWNvbi1zZWxlY3QtYXJyb3cgXCIgW2hpZGRlbl09XCJpc1Nob3dDbGVhciBcIj48L3NwYW4+XG48L2Rpdj5cblxuPCEtLSDDpcKkwprDqcKAwokgLS0+XG48ZGl2ICpuZ0lmPVwiX2pkYk1vZGU9PSdjaG9vc2VNb3JlJyBcIiAjaW5wdXREb20gY2xhc3M9XCJqZGItcGxnLXNlbGVjdC1tb3JlIFwiIChjbGljayk9XCJkaWFsb2dTaG93KCRldmVudCkgXCIgW25nQ2xhc3NdPVwiX2NsYXNzTWFwIFwiIFtuZ1N0eWxlXT1cInsgJ3dpZHRoJzpfd2lkdGh9IFwiPlxuICAgIDwhLS0gcGxhY2VIb2xkZXIgLS0+XG4gICAgPGRpdiBjbGFzcz1cImpkYi1wbGctc2VsZWN0LXBsYWNlaG9sZGVyIFwiIFtoaWRkZW5dPVwiaW5wdXRUZXh0Lmxlbmd0aCAhPTAgXCI+e3tfcGxhY2VIb2xkZXJ9fTwvZGl2PlxuICAgIDwhLS0gw6XCpMKaw6nCgMKJaXRlbSAtLT5cbiAgICA8dWwgY2xhc3M9XCJjaG9vc2VNb3JlIFwiPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaW5wdXRUZXh0IFwiPlxuICAgICAgICAgICAge3tpdGVtLnRleHR9fVxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWRlbGV0ZSBpY29uLWNsb3NlIFwiIChjbGljayk9XCJkZWxldGVNb3JlSXRlbSgkZXZlbnQsaXRlbSkgXCI+PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPHVsICNvcHRpb25MaXN0IFtuZ0NsYXNzXT1cInsgJ29wdGlvbnMtc2hvdyc6c2hvdywgJ29wdGlvbnMtbm8tbWFyZ2luJzohc3BhY2VGbGV4fSBcIiBjbGFzcz1cIm9wdGlvbnMgXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImNob29zZS1tb3JlIFwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgX3NlbGVjdExpc3QgXCIgKGNsaWNrKT1cImNob29zZU1vcmUoJGV2ZW50LG9wdGlvbikgXCIgW25nQ2xhc3NdPVwieyAnYWN0aXZlJzptb3JlSW5kZXgob3B0aW9uKSxkaXNhYmxlZDpvcHRpb25bX2pkYkl0ZW1EaXNhYmxlZF0gPT09IF9qZGJTdXJlRGlzYWJsZWR9IFwiPlxuICAgICAgICAgICAgPCEtLSB7e19vcHRpb25UZXh0PT0nb3B0aW9uJz9vcHRpb246b3B0aW9uW19vcHRpb25UZXh0XX19IC0tPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1ib3hcIiAqbmdJZj1cIl9zaG93SW1nQm94JiZvcHRpb24uaW1nVXJsXCIgW3NyY109XCJvcHRpb24uaW1nVXJsXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImltZy1ib3hcIiAqbmdJZj1cIl9zaG93SW1nQm94JiYhb3B0aW9uLmltZ1VybFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ib3hcIj57e19vcHRpb25UZXh0PT0nb3B0aW9uJz9vcHRpb246b3B0aW9uW19vcHRpb25UZXh0XX19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gW2hpZGRlbl09XCIhbW9yZUluZGV4KG9wdGlvbikgXCIgY2xhc3M9XCJjaG9vc2UtcmlnaHQgaWNvbi1zZWxlY3RlZCBcIj48L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8IS0tIMOmwrjChcOnwqnCusOlwpvCvsOmwqDChyAtLT5cbiAgICA8c3BhbiBjbGFzcz1cImNsb3NlLWljb24gaWNvbi1lbXB0eSBcIiBbaGlkZGVuXT1cIiFpc1Nob3dDbGVhciBcIiAoY2xpY2spPVwiY2xlYXJJbnB1dFRleHQoJGV2ZW50KSBcIj48L3NwYW4+XG48L2Rpdj5cblxuPCEtLSDDqcKAwonDpMK4wq3DpcKHwqDDqcKhwrkgLS0+XG48ZGl2ICpuZ0lmPVwiX2pkYk1vZGU9PSdjaG9vc2VOdW0nIFwiICNpbnB1dERvbSBjbGFzcz1cImpkYi1wbGctc2VsZWN0LW51bSBcIiAoY2xpY2spPVwiZGlhbG9nU2hvdygkZXZlbnQpIFwiIFtuZ0NsYXNzXT1cIl9jbGFzc01hcCBcIiBbbmdTdHlsZV09XCJ7ICd3aWR0aCc6X3dpZHRofSBcIj5cbiAgICA8IS0tIHBsYWNlSG9sZGVyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJqZGItcGxnLXNlbGVjdC1wbGFjZWhvbGRlciBcIiBbaGlkZGVuXT1cImlucHV0VGV4dCE9MCBcIj57e19wbGFjZUhvbGRlcn19PC9kaXY+XG4gICAgPHNwYW4gY2xhc3M9XCJjaG9vc2UtdGlwIFwiIFtoaWRkZW5dPVwiaW5wdXRUZXh0PT0wIFwiPsOlwrfCssOpwoDCicOkwrjCrXt7aW5wdXRUZXh0fX3DqcKhwrk8L3NwYW4+XG4gICAgPHVsICNvcHRpb25MaXN0IFtuZ0NsYXNzXT1cInsgJ29wdGlvbnMtc2hvdyc6c2hvdywgJ29wdGlvbnMtbm8tbWFyZ2luJzohc3BhY2VGbGV4fSBcIiBjbGFzcz1cIm9wdGlvbnMgXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImNob29zZS1tb3JlIFwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgX3NlbGVjdExpc3QgXCIgKGNsaWNrKT1cIm51bUNsaWNrKCRldmVudCxvcHRpb24pIFwiIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZSc6bW9yZUluZGV4KG9wdGlvbiksZGlzYWJsZWQ6b3B0aW9uW19qZGJJdGVtRGlzYWJsZWRdID09PSBfamRiU3VyZURpc2FibGVkfSBcIj5cbiAgICAgICAgICAgIDwhLS0ge3tfb3B0aW9uVGV4dD09J29wdGlvbic/b3B0aW9uOm9wdGlvbltfb3B0aW9uVGV4dF19fSAtLT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctYm94XCIgKm5nSWY9XCJfc2hvd0ltZ0JveCYmb3B0aW9uLmltZ1VybFwiIFtzcmNdPVwib3B0aW9uLmltZ1VybFwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbWctYm94XCIgKm5nSWY9XCJfc2hvd0ltZ0JveCYmIW9wdGlvbi5pbWdVcmxcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtYm94XCI+e3tfb3B0aW9uVGV4dD09J29wdGlvbic/b3B0aW9uOm9wdGlvbltfb3B0aW9uVGV4dF19fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIFtoaWRkZW5dPVwiIW1vcmVJbmRleChvcHRpb24pIFwiIGNsYXNzPVwiY2hvb3NlLXJpZ2h0IGljb24tc2VsZWN0ZWQgXCI+PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPCEtLSDDpsK4woXDp8KpwrrDpcKbwr7DpsKgwocgLS0+XG4gICAgPHNwYW4gY2xhc3M9XCJjbG9zZS1pY29uIGljb24tZW1wdHkgXCIgW2hpZGRlbl09XCIhaXNTaG93Q2xlYXIgXCIgKGNsaWNrKT1cImNsZWFySW5wdXRUZXh0KCRldmVudCkgXCI+PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwic2VsZWN0LWljb24gaWNvbi1zZWxlY3QtYXJyb3cgXCIgW2hpZGRlbl09XCJpc1Nob3dDbGVhciBcIj48L3NwYW4+XG48L2Rpdj5cblxuPCEtLSDDqcKBwq7Dp8K9wqnDpcKxwoIgLS0+XG48ZGl2IGNsYXNzPVwiamRiLXBsZy1zZWxlY3QtbWFzdGVyIFwiICpuZ0lmPVwic2hvdyBcIj48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLmpkYi1wbGctc2VsZWN0LW1vcmUsLmpkYi1wbGctc2VsZWN0LW51bSwuamRiLXBsZy1zZWxlY3Qtb25le3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIwMHB4O2JvcmRlcjoxcHggc29saWQgI2FmYjBiMztib3JkZXItcmFkaXVzOjJweDtiYWNrZ3JvdW5kOiNmZmY7dGV4dC1hbGlnbjpsZWZ0O2N1cnNvcjpwb2ludGVyfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5qZGItcGxnLXNlbGVjdC1wbGFjZWhvbGRlciwuamRiLXBsZy1zZWxlY3QtbnVtIC5qZGItcGxnLXNlbGVjdC1wbGFjZWhvbGRlciwuamRiLXBsZy1zZWxlY3Qtb25lIC5qZGItcGxnLXNlbGVjdC1wbGFjZWhvbGRlcntjb2xvcjojYWZiMGIzOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uamRiLXBsZy1zZWxlY3QtbW9yZSAub3B0aW9ucywuamRiLXBsZy1zZWxlY3QtbnVtIC5vcHRpb25zLC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnN7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3cteTpzY3JvbGw7ei1pbmRleDo5OTk5O29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVkoMCk7dHJhbnNmb3JtOnNjYWxlWSgwKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCAwO3RyYW5zZm9ybS1vcmlnaW46MCAwO2xlZnQ6LTFweDtib3JkZXI6MXB4IHNvbGlkICNhZmIwYjM7d2lkdGg6MTAwJTttYXgtaGVpZ2h0OjE5MHB4O2JhY2tncm91bmQ6I2ZmZn0uamRiLXBsZy1zZWxlY3QtbW9yZSAub3B0aW9ucyBsaSwuamRiLXBsZy1zZWxlY3QtbnVtIC5vcHRpb25zIGxpLC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnMgbGl7cGFkZGluZzo1cHggMTJweDttaW4taGVpZ2h0OjMwcHg7Y29sb3I6IzMyMzIzM30uamRiLXBsZy1zZWxlY3QtbW9yZSAub3B0aW9ucyBsaTpob3ZlciwuamRiLXBsZy1zZWxlY3QtbnVtIC5vcHRpb25zIGxpOmhvdmVyLC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnMgbGk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjBmMWY1O2NvbG9yOiMzMjMyMzN9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgbGkgLmNob29zZS1yaWdodCwuamRiLXBsZy1zZWxlY3QtbnVtIC5vcHRpb25zIGxpIC5jaG9vc2UtcmlnaHQsLmpkYi1wbGctc2VsZWN0LW9uZSAub3B0aW9ucyBsaSAuY2hvb3NlLXJpZ2h0e2Zsb2F0OnJpZ2h0O21hcmdpbi10b3A6LTJweH0uamRiLXBsZy1zZWxlY3QtbW9yZSAub3B0aW9ucyBsaSAuaW1nLWJveCwuamRiLXBsZy1zZWxlY3QtbnVtIC5vcHRpb25zIGxpIC5pbWctYm94LC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnMgbGkgLmltZy1ib3h7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO2hlaWdodDoxOHB4O3dpZHRoOjE4cHh9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgbGkgLnRleHQtYm94LC5qZGItcGxnLXNlbGVjdC1udW0gLm9wdGlvbnMgbGkgLnRleHQtYm94LC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnMgbGkgLnRleHQtYm94e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uamRiLXBsZy1zZWxlY3QtbW9yZSAub3B0aW9ucyAuY2hvb3NlLW1vcmUsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyAuY2hvb3NlLW1vcmUsLmpkYi1wbGctc2VsZWN0LW9uZSAub3B0aW9ucyAuY2hvb3NlLW1vcmV7bWFyZ2luLWJvdHRvbToxcHh9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgLmFjdGl2ZSwuamRiLXBsZy1zZWxlY3QtbW9yZSAub3B0aW9ucyAuYWN0aXZlOmhvdmVyLC5qZGItcGxnLXNlbGVjdC1udW0gLm9wdGlvbnMgLmFjdGl2ZSwuamRiLXBsZy1zZWxlY3QtbnVtIC5vcHRpb25zIC5hY3RpdmU6aG92ZXIsLmpkYi1wbGctc2VsZWN0LW9uZSAub3B0aW9ucyAuYWN0aXZlLC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnMgLmFjdGl2ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMzZjY5ZjI7Y29sb3I6I2ZmZn0uamRiLXBsZy1zZWxlY3QtbW9yZSAub3B0aW9ucyAuZGlzYWJsZWQsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyAuZGlzYWJsZWQsLmpkYi1wbGctc2VsZWN0LW9uZSAub3B0aW9ucyAuZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjpub25lO2NvbG9yOiNhZmIwYjM7Y3Vyc29yOm5vdC1hbGxvd2VkfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5vcHRpb25zIC5kaXNhYmxlZDpob3ZlciwuamRiLXBsZy1zZWxlY3QtbnVtIC5vcHRpb25zIC5kaXNhYmxlZDpob3ZlciwuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zIC5kaXNhYmxlZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOm5vbmU7Y29sb3I6I2FmYjBiM30uamRiLXBsZy1zZWxlY3QtbW9yZSAub3B0aW9ucy1zaG93LC5qZGItcGxnLXNlbGVjdC1udW0gLm9wdGlvbnMtc2hvdywuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zLXNob3d7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWSgxKTt0cmFuc2Zvcm06c2NhbGVZKDEpfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5jbG9zZS1pY29uLC5qZGItcGxnLXNlbGVjdC1udW0gLmNsb3NlLWljb24sLmpkYi1wbGctc2VsZWN0LW9uZSAuY2xvc2UtaWNvbntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDo1cHg7dG9wOjUwJTttYXJnaW4tdG9wOi0xMnB4O2NvbG9yOiM3ZDdlODB9LmpkYi1wbGctc2VsZWN0LW1vcmUgLmNsb3NlLWljb246aG92ZXIsLmpkYi1wbGctc2VsZWN0LW51bSAuY2xvc2UtaWNvbjpob3ZlciwuamRiLXBsZy1zZWxlY3Qtb25lIC5jbG9zZS1pY29uOmhvdmVye2NvbG9yOiMzMjMyMzN9LmpkYi1wbGctc2VsZWN0LW1vcmUgLnNlbGVjdC1pY29uLC5qZGItcGxnLXNlbGVjdC1udW0gLnNlbGVjdC1pY29uLC5qZGItcGxnLXNlbGVjdC1vbmUgLnNlbGVjdC1pY29ue3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjVweDt0b3A6NTAlO21hcmdpbi10b3A6LTEycHh9LmpkYi1wbGctc2VsZWN0LW9uZSAuY2hvb3NlT25le2NvbG9yOiMzMzN9LmpkYi1wbGctc2VsZWN0LW9uZSAuY2hvb3NlT25lSW5wdXR7Ym9yZGVyOm5vbmU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtwYWRkaW5nLXJpZ2h0OjE4cHh9LmpkYi1wbGctc2VsZWN0LW1vcmUgLmNob29zZU1vcmUgbGksLmpkYi1wbGctc2VsZWN0LW51bSAuY2hvb3NlTW9yZSBsaXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6NXB4O3BhZGRpbmc6MCA1cHg7aGVpZ2h0OjIycHg7Zm9udC1zaXplOjEzcHg7Ym9yZGVyOjFweCBzb2xpZCAjZDdkOGRiO2JvcmRlci1yYWRpdXM6MnB4O2NvbG9yOiMzMzM7LW1vei11c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5jaG9vc2VNb3JlIGxpIC5pdGVtLWRlbGV0ZSwuamRiLXBsZy1zZWxlY3QtbnVtIC5jaG9vc2VNb3JlIGxpIC5pdGVtLWRlbGV0ZXtmb250LXNpemU6MTJweH0uamRiLXBsZy1zZWxlY3QtYWN0aXZle2JvcmRlcjoxcHggc29saWQgIzNmNjlmMn0uamRiLXBsZy1zZWxlY3QtZGlzYWJsZWR7YmFja2dyb3VuZDojZjBmMWY1fS5zbWFsbHttaW4taGVpZ2h0OjI0cHg7cGFkZGluZzoycHggMTBweDtmb250LXNpemU6MTJweH0uc21hbGwgLm9wdGlvbnN7bWFyZ2luLXRvcDo3cHh9LnNtYWxsIC5vcHRpb25zLW5vLW1hcmdpbnttYXJnaW46MH0ubWlkZGxle21pbi1oZWlnaHQ6MzBweDtwYWRkaW5nOjVweCAxMHB4O2ZvbnQtc2l6ZToxM3B4fS5taWRkbGUgLm9wdGlvbnN7bWFyZ2luLXRvcDoxMHB4fS5taWRkbGUgLm9wdGlvbnMtbm8tbWFyZ2lue21hcmdpbjowfS5taWRkbGUgLmNob29zZS10aXAsLm1pZGRsZSAuY2hvb3NlT25lLC5taWRkbGUgLmpkYi1wbGctc2VsZWN0LXBsYWNlaG9sZGVye2hlaWdodDoxOHB4O2xpbmUtaGVpZ2h0OjE4cHh9Lm1pZGRsZSAuY2hvb3NlLXRpcCwubWlkZGxlIC5jaG9vc2VPbmV7ZGlzcGxheTpibG9ja30ubWlkZGxlIC5jaG9vc2VNb3JlIGxpe21hcmdpbi1ib3R0b206M3B4fS5sYXJnZXttaW4taGVpZ2h0OjQwcHg7cGFkZGluZzo5cHggMTBweDtmb250LXNpemU6MTRweH0ubGFyZ2UgLm9wdGlvbnN7bWFyZ2luLXRvcDoxNHB4fS5sYXJnZSAub3B0aW9ucy1uby1tYXJnaW57bWFyZ2luOjB9LmxhcmdlIC5jaG9vc2UtdGlwLC5sYXJnZSAuY2hvb3NlT25lLC5sYXJnZSAuamRiLXBsZy1zZWxlY3QtcGxhY2Vob2xkZXJ7aGVpZ2h0OjIwcHg7bGluZS1oZWlnaHQ6MjBweH0ubGFyZ2UgLmNob29zZS10aXAsLmxhcmdlIC5jaG9vc2VPbmV7ZGlzcGxheTpibG9ja30ubGFyZ2UgLmNob29zZU1vcmUgbGl7bWFyZ2luLWJvdHRvbTo4cHh9LmpkYi1wbGctc2VsZWN0LWJvdHRvbS1taWRkbGV7cGFkZGluZzozcHggMTBweCAwfS5qZGItcGxnLXNlbGVjdC1ib3R0b20tbGFyZ2V7cGFkZGluZzo4cHggMTBweCAwfS5qZGItcGxnLXNlbGVjdC1tYXN0ZXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3dpZHRoOjEwMCU7YmFja2dyb3VuZDowIDA7ei1pbmRleDo5OTk4fWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7Ly8gw6bCs8Kow6XChsKMw6bCiMKQw6TCuMK6w6jCocKow6XCjcKVw6bCjsKnw6TCu8K2XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEpkYlBsZ1NlbGVjdENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBKZGJQbGdTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIF9zZWxlY3RMaXN0OiBhbnk7XG4gIF9zaXplID0gJ21pZGRsZSc7XG4gIF93aWR0aDogc3RyaW5nO1xuICBfb3B0aW9uVGV4dCA9ICd0ZXh0JzsgIC8vIMOpwrvCmMOowq7CpMOlwoDCvFxuICBfb3B0aW9uVmFsdWUgPSAndmFsdWUnOyAvLyDDqcK7wpjDqMKuwqTDpcKAwrxcbiAgX29wdGlvblBvc2l0aW9uOiBzdHJpbmc7XG4gIGlzU2hvd0NsZWFyID0gZmFsc2U7IC8vIMOmwpjCr8OlwpDCpsOlwrHClcOnwqTCusOmwrjChcOnwqnCunhcbiAgX2pkYkNsZWFyID0gZmFsc2U7XG4gIF9qZGJEaXNhYmxlZCA9IGZhbHNlOyAvLyDDqcK7wpjDqMKuwqTDpsKcwqrDp8KmwoHDp8KUwqhcbiAgX2pkYk1vZGUgPSAnY2hvb3NlT25lJztcbiAgX3BsYWNlSG9sZGVyID0gJ8Oowq/Ct8OpwoDCicOmwovCqSc7XG4gIF9jaG9vc2VNb3JlQXJyYXkgPSBbXTsgLy8gw6XCpMKaw6nCgMKJw6nCgMKJw6TCuMKtw6XChcKDw6fCtMKgw6bClcKww6fCu8KEXG4gIF9jbGFzc01hcCA9IHt9O1xuICBsaXN0SGVpZ2h0OiBudW1iZXI7XG4gIHNhdmFIZWlnaHQgPSB0cnVlO1xuICBzcGFjZUZsZXggPSB0cnVlOyAgLy8gw6bCmMKvw6XCkMKmw6bCnMKJw6XCicKpw6TCvcKZw6fCqcK6w6nCl8K0w6/CvMKMw6nCu8KYw6jCrsKkw6bCnMKJXG4gIF9zaG93SW1nQm94ID0gZmFsc2U7IC8vIMOkwrjCi8OmwovCicOmwqHChsOmwpjCr8OlwpDCpsOlwrjCpsOlwpvCvsOnwonCh1xuICBfamRiSXRlbURpc2FibGVkID0gJ2Rpc2FibGVkJzsgLy8gw6nCu8KYw6jCrsKkw6TCuMK6ZGlzYWJsZWRcbiAgX2pkYlN1cmVEaXNhYmxlZCA9IDI7IC8vIMOkwrjCujHDpsKYwq/DpcKQwq/Dp8KUwqggMsOmwpjCr8OnwqbCgcOnwpTCqFxuICBfamRiTm9EaXNhYmxlZCA9IDE7IC8vIMOkwrjCujLDqMKhwqjDp8KkwrrDpMK4wo3Dp8KmwoHDp8KUwqhcblxuICAvLyDDqMKHwqrDpcKuwprDpMK5wonDp8KxwrvDpcKQwo1cbiAgQElucHV0KCkgamRiQ2xhc3NOYW1lID0gJyc7XG5cbiAgLy8gw6nCgMKJw6nCocK5w6TCuMKtw6bCn8KQw6nCocK5w6fCpsKBw6fClMKow6XCrcKXw6bCrsK1XG4gIEBJbnB1dCgpXG4gIHNldCBqZGJJdGVtRGlzYWJsZWQodmFsdWUpIHtcbiAgICB0aGlzLl9qZGJJdGVtRGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgamRiSXRlbURpc2FibGVkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2pkYkl0ZW1EaXNhYmxlZDtcbiAgfVxuXG4gIC8vIMOpwoDCicOpwqHCucOkwrjCrcOmwp/CkMOpwqHCucOnwqHCrsOowq7CpMOnwqbCgcOnwpTCqFxuICBASW5wdXQoKVxuICBzZXQgamRiU3VyZURpc2FibGVkKHZhbHVlKSB7XG4gICAgdGhpcy5famRiU3VyZURpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGpkYlN1cmVEaXNhYmxlZCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9qZGJTdXJlRGlzYWJsZWQ7XG4gIH1cblxuICAvLyAvLyDDqcKAwonDqcKhwrnDpMK4wq3DpsKfwpDDqcKhwrnDpMK4wo3Dp8KmwoHDp8KUwqhcbiAgLy8gQElucHV0KClcbiAgLy8gc2V0IGpkYk5vRGlzYWJsZWQodmFsdWUpIHtcbiAgLy8gICB0aGlzLl9qZGJOb0Rpc2FibGVkID0gdmFsdWU7XG4gIC8vIH1cbiAgLy8gZ2V0IGpkYk5vRGlzYWJsZWQoKTogYW55IHtcbiAgLy8gICByZXR1cm4gdGhpcy5famRiTm9EaXNhYmxlZDtcbiAgLy8gfVxuXG4gIC8vIMOpwoDCicOpwqHCucOkwrjCrcOmwp/CkMOpwqHCucOnwqHCrsOowq7CpMOnwqbCgcOnwpTCqFxuICBASW5wdXQoKVxuICBzZXQgamRiUGxhY2VIb2xkZXIodmFsdWUpIHtcbiAgICB0aGlzLl9wbGFjZUhvbGRlciA9IHZhbHVlO1xuICB9XG4gIGdldCBqZGJQbGFjZUhvbGRlcigpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZUhvbGRlcjtcbiAgfVxuXG4gIC8vIMOmwpjCr8OlwpDCpsOpwpzCgMOowqbCgcOmwpjCvsOnwqTCusOmwrjChcOnwqnCulxuICBASW5wdXQoKVxuICBzZXQgamRiQ2xlYXIodmFsdWUpIHtcbiAgICB0aGlzLl9qZGJDbGVhciA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgamRiQ2xlYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2pkYkNsZWFyO1xuICB9XG5cbiAgLy8gw6TCuMKLw6bCi8KJw6bCocKGw6bClcKww6fCu8KEw6/CvMKMw6XCv8KFw6XChsKZXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJTZWxlY3RMaXN0KHZhbHVlKSB7XG4gICAgdGhpcy5fc2VsZWN0TGlzdCA9IHZhbHVlO1xuXG4gICAgLy8gw6XCvsKqw6fCjsKvw6bClcKww6fCu8KEw6/CvMKMw6XCiMKkw6bClsKtw6bCmMKvw6XCkMKmw6nCnMKAw6jCpsKBw6XCscKVw6fCpMK6w6XCuMKmw6bCnMKJw6XCm8K+w6fCicKHw6TCuMKLw6bCi8KJw6bCocKGXG4gICAgaWYgKHRoaXMuX3NlbGVjdExpc3QpIHtcbiAgICAgIHRoaXMuX3NlbGVjdExpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaW1nVXJsKSB7XG4gICAgICAgICAgdGhpcy5fc2hvd0ltZ0JveCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBnZXQgamRiU2VsZWN0TGlzdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RMaXN0O1xuICB9XG5cbiAgLy8gw6TCuMKLw6bCi8KJw6bCocKGw6XCsMK6w6XCr8K4w6/CvMKMw6nCu8KYw6jCrsKkw6TCuMK6w6nCq8KYw6XCusKmMzBweMOvwrzCm3NtYWxsw6TCuMK6MjRweCxsYXJnZcOkwrjCujQwcHg7XG4gIEBJbnB1dCgpXG4gIHNldCBqZGJTaXplKHZhbHVlKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBqZGJTaXplKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICAvLyDDqMKHwqrDpcKuwprDpMK5wonDpcKuwr3DpcK6wqZcbiAgQElucHV0KClcbiAgc2V0IGpkYldpZHRoKHZhbHVlKSB7XG4gICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgamRiV2lkdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cblxuICAvLyDDpcKxwpXDp8KkwrrDpcKcwqjDqcKhwrXDqcKdwqLDpcKGwoXDpcKuwrnDpcKtwpfDpsKuwrXDpcKQwo3Dp8KnwrBcbiAgQElucHV0KClcbiAgc2V0IGpkYk9wdGlvblRleHQodmFsdWUpIHtcbiAgICB0aGlzLl9vcHRpb25UZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGpkYk9wdGlvblRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uVGV4dDtcbiAgfVxuXG4gIC8vIMOowr/ClMOlwpvCnsOnwrvCmXNlcnZlw6XCr8K5w6XCusKUw6XCrcKXw6bCrsK1w6XCkMKNw6fCp8KwXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJPcHRpb25WYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuX29wdGlvblZhbHVlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGpkYk9wdGlvblZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvblZhbHVlO1xuICB9XG5cbiAgLy8gw6TCuMKLw6bCi8KJw6bCocKGw6fCpsKBw6fClMKoXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJEaXNhYmxlZCh2YWx1ZSkge1xuICAgIHRoaXMuX2pkYkRpc2FibGVkID0gdGhpcy50b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIGdldCBqZGJEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5famRiRGlzYWJsZWQ7XG4gIH1cblxuICAvLyBzZWxlY3TDpsKowqHDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDpMK4wrrDpcKNwpXDqcKAwonDr8K8woxjaG9vc2VNb3Jlw6XCpMKaw6nCgMKJXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJNb2RlKHZhbHVlKSB7XG4gICAgdGhpcy5famRiTW9kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBqZGJNb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2pkYk1vZGU7XG4gIH1cblxuICBAVmlld0NoaWxkKCdpbnB1dERvbScpIGlucHV0RG9tOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdvcHRpb25MaXN0Jykgb3B0aW9uTGlzdDogRWxlbWVudFJlZjtcblxuICBzaG93ID0gZmFsc2U7XG4gIGlucHV0VGV4dDogYW55O1xuICBuZ01vZGVsVmFsdWUgPSAnJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFxuXG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWxpZmUtY3ljbGUtaW50ZXJmYWNlXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyDDp8KCwrnDpcKHwrvDqcKZwqTDpMK4wovDpsKLwonDpsKhwobDpMK7wqXDpcKkwpbDpMK9wo3Dp8K9wq7Dr8K8wozDpMK4wovDpsKLwonDpsKhwobDqcKawpDDqMKXwo9cbiAgICB0aGlzLnJlbmRlcmVyMi5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RG9tLm5hdGl2ZUVsZW1lbnQsICdqZGItcGxnLXNlbGVjdC1hY3RpdmUnLCB0aGlzLnNob3cpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX2pkYkNsZWFyICYmICF0aGlzLl9qZGJEaXNhYmxlZCkge1xuICAgICAgLy8gw6fCm8KRw6XCkMKsw6jCvsKTw6XChcKlw6bCocKGw6XChcKDw6fCtMKgw6/CvMKMw6jCi8Klw6bCnMKJw6XChsKFw6XCrsK5w6bCl8K2w6XCiMKZw6bCu8KRw6TCuMKKw6bCmMK+w6fCpMK6eFxuICAgICAgdGhpcy5yZW5kZXJlcjIubGlzdGVuKHRoaXMuaW5wdXREb20ubmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIC8vIMOowovCpcOowr7Ck8OlwoXCpcOmwqHChsOkwrjCjcOlwq3CmMOlwpzCqMOlwobChcOlwq7CucOvwrzCjMOlwojCmcOkwrjCjcOlwoHCmsOkwrvCu8Okwr3ClcOmwpPCjcOkwr3CnFxuXG4gICAgICAgIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlT25lJyB8fCB0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTnVtJykge1xuICAgICAgICAgIGlmICghdGhpcy5pbnB1dFRleHQgfHwgdGhpcy5zaG93KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VNb3JlJykge1xuICAgICAgICAgIGlmICh0aGlzLmlucHV0VGV4dC5sZW5ndGggPT09IDAgfHwgdGhpcy5zaG93KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1Nob3dDbGVhciA9IHRydWU7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuaW5wdXREb20ubmF0aXZlRWxlbWVudCwgJ2pkYi1wbGctc2VsZWN0LWFjdGl2ZScsIHRoaXMuc2hvdyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVuZGVyZXIyLmxpc3Rlbih0aGlzLmlucHV0RG9tLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAvLyDDqMKLwqXDqMK+wpPDpcKFwqXDpsKhwobDpMK4wo3DpcKtwpjDpcKcwqjDpcKGwoXDpcKuwrnDr8K8wozDpcKIwpnDpMK4wo3DpcKBwprDpMK7wrvDpMK9wpXDpsKTwo3DpMK9wpxcbiAgICAgICAgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VPbmUnIHx8IHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VOdW0nKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlucHV0VGV4dCB8fCB0aGlzLnNob3cpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU1vcmUnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaW5wdXRUZXh0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLnNob3cpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzU2hvd0NsZWFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuaW5wdXREb20ubmF0aXZlRWxlbWVudCwgJ2pkYi1wbGctc2VsZWN0LWFjdGl2ZScsIHRoaXMuc2hvdyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlT25lJykge1xuICAgICAgdGhpcy5pbnB1dFRleHQgPSAnJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VNb3JlJykge1xuICAgICAgdGhpcy5pbnB1dFRleHQgPSBbXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VOdW0nKSB7XG4gICAgICB0aGlzLmlucHV0VGV4dCA9IDA7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIHNldENsYXNzTWFwKCkge1xuICAgIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTW9yZScpIHtcbiAgICAgIHRoaXMuX2NsYXNzTWFwID0ge1xuICAgICAgICBbYCR7dGhpcy5fc2l6ZX1gXTogdHJ1ZSxcbiAgICAgICAgW2BqZGItcGxnLXNlbGVjdC1ib3R0b20tJHt0aGlzLl9zaXplfWBdOiB0aGlzLmlucHV0VGV4dC5sZW5ndGggIT09IDAsXG4gICAgICAgIFsnamRiLXBsZy1zZWxlY3QtZGlzYWJsZWQnXTogdGhpcy5famRiRGlzYWJsZWQsXG4gICAgICAgIFt0aGlzLmpkYkNsYXNzTmFtZV06IHRydWVcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NsYXNzTWFwID0ge1xuICAgICAgICBbYCR7dGhpcy5fc2l6ZX1gXTogdHJ1ZSxcbiAgICAgICAgWydqZGItcGxnLXNlbGVjdC1kaXNhYmxlZCddOiB0aGlzLl9qZGJEaXNhYmxlZCxcbiAgICAgICAgW3RoaXMuamRiQ2xhc3NOYW1lXTogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvLyDDp8KCwrnDpcKHwrt4w6/CvMKMw6bCuMKFw6fCqcK6w6XChsKFw6XCrsK5XG4gIGNsZWFySW5wdXRUZXh0KGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VPbmUnKSB7XG4gICAgICB0aGlzLmlucHV0VGV4dCA9ICcnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU1vcmUnKSB7XG4gICAgICB0aGlzLmlucHV0VGV4dCA9IFtdO1xuICAgICAgdGhpcy5fY2hvb3NlTW9yZUFycmF5ID0gW107XG4gICAgfSBlbHNlIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTnVtJykge1xuICAgICAgdGhpcy5pbnB1dFRleHQgPSAwO1xuICAgICAgdGhpcy5fY2hvb3NlTW9yZUFycmF5ID0gW107XG4gICAgfVxuICAgIHRoaXMuaXNTaG93Q2xlYXIgPSAhdGhpcy5pc1Nob3dDbGVhcjtcblxuICAgIC8vIMOmwrjChcOnwqnCusOlwpDCjsOowr7Ck8OlwoXCpcOpwpzCgMOowqbCgcOpwofCjcOmwpbCsMOlwpHCisOnwp/CpcOnwojCtsOnwrvChMOkwrvCtlxuICAgIHRoaXMubmdNb2RlbFZhbHVlID0gJyc7XG4gICAgdGhpcy5vbkNoYW5nZSgnJyk7XG5cbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICAvLyDDp8KCwrnDpcKHwrvDqMK+wpPDpcKFwqXDpsKhwobDpMK4wovDpsKLwonDqMKPwpzDpcKNwpXDpsKYwr7DqcKawpBcbiAgZGlhbG9nU2hvdyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAvLyDDqMKLwqXDpcKkwpbDpMK+wqfDp8K7woTDpMK7wrbDpcKRworDp8KfwqXDp8KmwoHDp8KUwqjDr8K8wozDpcKIwpnDp8KCwrnDpcKHwrvDpsKywqHDpsKcwonDpMK7wrvDpMK9wpXDpsKVwojDpsKewpxcbiAgICBpZiAodGhpcy5famRiRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pc1Nob3dDbGVhciA9IGZhbHNlO1xuICAgIHRoaXMuc2hvdyA9ICF0aGlzLnNob3c7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5pbnB1dERvbS5uYXRpdmVFbGVtZW50LCAnamRiLXBsZy1zZWxlY3QtYWN0aXZlJywgdGhpcy5zaG93KTtcbiAgICB0aGlzLm9wdGlvblBvc2l0aW9uKHRoaXMub3B0aW9uTGlzdC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gIH1cblxuICAvLyDDpsK1wq7DpcKxwoLDpcKHwrrDp8KOwrDDpsKYwq/DpcKcwqjDqMK+wpPDpcKFwqXDpsKhwobDpMK4worDpsKWwrnDqMK/wpjDpsKYwq/DpMK4wovDpsKWwrlcbiAgb3B0aW9uUG9zaXRpb24obGlzdEhlaWdodCkge1xuICAgIGNvbnN0IG9mZmV0VG9wID0gdGhpcy5nZXRUb3AodGhpcy5pbnB1dERvbS5uYXRpdmVFbGVtZW50KTsgIC8vIMOlwoXCg8OnwrTCoG9mZmV0VG9wXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AodGhpcy5pbnB1dERvbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7IC8vIMOlwrHCj8OlwrnClcOpwqvCmMOlwrrCplxuICAgIGNvbnN0IGVsZW1IZWlnaHQgPSB0aGlzLmlucHV0RG9tLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0OyAvLyDDpcKFwoPDp8K0wqDDqcKrwpjDpcK6wqZcbiAgICBsZXQgcGFkZGluZ0hlaWdodDtcbiAgICBpZiAodGhpcy5qZGJTaXplID09PSAnc21hbGwnKSB7XG4gICAgICBwYWRkaW5nSGVpZ2h0ID0gMjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuamRiU2l6ZSA9PT0gJ2xhcmdlJykge1xuICAgICAgcGFkZGluZ0hlaWdodCA9IDk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmpkYlNpemUgPT09ICdtaWRkbGUnKSB7XG4gICAgICBwYWRkaW5nSGVpZ2h0ID0gNTtcbiAgICB9XG4gICAgY29uc3QgZmxleEhlaWdodCA9IGNsaWVudEhlaWdodCAtIG9mZmV0VG9wIC0gZWxlbUhlaWdodCAtIHBhZGRpbmdIZWlnaHQgKyBzY3JvbGxUb3A7IC8vIMOlwonCqcOkwr3CmcOpwqvCmMOlwrrCplxuICAgIGlmIChmbGV4SGVpZ2h0IDwgbGlzdEhlaWdodCkge1xuICAgICAgLy8gw6fCqcK6w6nCl8K0w6TCuMKNw6jCtsKzXG4gICAgICB0aGlzLnNwYWNlRmxleCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5vcHRpb25MaXN0Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0tb3JpZ2luJywgJzEwMCUgMTAwJScpO1xuICAgICAgaWYgKGxpc3RIZWlnaHQgPCAxODgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5vcHRpb25MaXN0Lm5hdGl2ZUVsZW1lbnQsICd0b3AnLCAtIGxpc3RIZWlnaHQgLSA1ICsgJ3B4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLm9wdGlvbkxpc3QubmF0aXZlRWxlbWVudCwgJ3RvcCcsIC0xOTAgLSBwYWRkaW5nSGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3BhY2VGbGV4ID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMub3B0aW9uTGlzdC5uYXRpdmVFbGVtZW50LCAndG9wJywgJycpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5vcHRpb25MaXN0Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0tb3JpZ2luJywgJzAlIDAlJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3Igw6jCh8Kqw6XCrsKaw6TCucKJw6jCocKow6XCjcKVIMOkwrjCjsOnwojCtsOnwrvChMOkwrvCtsOnwprChG5nTW9kZWzDp8K7wpHDpcKuwprDqMK1wrfDpsKdwqVcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5uZ01vZGVsVmFsdWUgPSB2YWx1ZTtcblxuICAgIC8vIMOowovCpcOmwpzCicOlwojCncOlwqfCi8OpwqHCucOvwrzCjMOlwojCmcOpwpzCgMOowqbCgcOlwqTChMOnwpDChsOkwrjCgMOkwrjCi1xuICAgIC8vIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlT25lJykge1xuICAgIC8vICAgdGhpcy5mb3JPbmVTdGFydCh2YWx1ZSk7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTW9yZScpIHtcbiAgICAvLyAgIHRoaXMuZm9yTW9yZVN0YXJ0KHZhbHVlKTtcbiAgICAvLyAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VOdW0nKSB7XG4gICAgLy8gICB0aGlzLmZvck51bVN0YXJ0KHZhbHVlKTtcbiAgICAvLyB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyDDqMKLwqXDpMK8wqDDpcKFwqXDpcKAwrzDpMK4wrpudWxsw6/CvMKMw6XCiMKZw6bCuMKFw6fCqcK6w6bClcKww6bCjcKuXG4gICAgICBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU1vcmUnKSB7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0ID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlucHV0VGV4dCA9ICcnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU9uZScpIHtcbiAgICAgICAgdGhpcy5mb3JPbmVTdGFydCh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VNb3JlJykge1xuICAgICAgICB0aGlzLmZvck1vcmVTdGFydCh2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU51bScpIHtcbiAgICAgICAgdGhpcy5mb3JOdW1TdGFydCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvLyDDpcKNwpXDqcKAwonDr8K8wozDqMKLwqXDpsKcwonDpcKIwp3DpcKnwovDqcKAwonDqcKhwrnDr8K8wozDpcKIwpnDqcKBwo3DpcKOwobDpsKVwrDDp8K7woRcbiAgZm9yT25lU3RhcnQodmFsdWUpIHtcbiAgICB0aGlzLl9zZWxlY3RMaXN0LmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBpZiAoZWxlbVt0aGlzLl9vcHRpb25WYWx1ZV0gPT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0ID0gZWxlbVt0aGlzLl9vcHRpb25UZXh0XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIMOlwqTCmsOpwoDCicOvwrzCjMOowovCpcOmwpzCicOlwojCncOlwqfCi8OlwoDCvMOlwojCmcOpwoHCjcOlwo7ChsOmwpXCsMOnwrvChFxuICBmb3JNb3JlU3RhcnQodmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJyk7XG5cbiAgICB2YWx1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgdGhpcy5fc2VsZWN0TGlzdC5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBpZiAoZWxlbVt0aGlzLl9vcHRpb25WYWx1ZV0gPT09IGl0ZW0pIHtcbiAgICAgICAgICAvLyBpbnB1dFRleHTDpMK4wrrDqMK+wpPDpcKFwqXDpsKhwobDpMK4wq3DpcKxwpXDp8KkwrrDp8KawoTDpcKGwoXDpcKuwrlcbiAgICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5fb3B0aW9uVGV4dDtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX29wdGlvblZhbHVlO1xuICAgICAgICAgIHRoaXMuaW5wdXRUZXh0LnB1c2goe1xuICAgICAgICAgICAgdGV4dDogZWxlbVt0aGlzLl9vcHRpb25UZXh0XSxcbiAgICAgICAgICAgIHZhbHVlOiBlbGVtW3RoaXMuX29wdGlvblZhbHVlXVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gdGhpcy5fY2hvb3NlTW9yZUFycmF5w6TCuMK6w6TCvMKgw6XCh8K6w6XCjsK7w6fCmsKEw6bClcKww6bCjcKuXG4gICAgICAgICAgdGhpcy5fY2hvb3NlTW9yZUFycmF5LnB1c2goZWxlbVt0aGlzLl9vcHRpb25WYWx1ZV0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyDDqcKAwonDpcKHwqDDqcKhwrlcbiAgZm9yTnVtU3RhcnQodmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJyk7XG4gICAgdmFsdWUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHRoaXMuX3NlbGVjdExpc3QuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgaWYgKGVsZW1bdGhpcy5fb3B0aW9uVmFsdWVdID09PSBpdGVtKSB7XG4gICAgICAgICAgdGhpcy5pbnB1dFRleHQrKztcbiAgICAgICAgICB0aGlzLl9jaG9vc2VNb3JlQXJyYXkucHVzaChlbGVtW3RoaXMuX29wdGlvblZhbHVlXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIMOlwo3ClcOpwoDCicOmwp/CkMOkwrjCgMOlwoXCg8OnwrTCoMOnwoLCucOlwofCu1xuICBpdGVtKGUsIGl0ZW0pIHtcbiAgICAvLyDDqcKYwrvDpsKtwqLDpMK6wovDpMK7wrbDpcKGwpLDpsKzwqFcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgLy8gw6XCiMKkw6bClsKtc2hvd8OmwpjCr8OlwpDCpsOkwrjCunRydWVcbiAgICBpZiAoIXRoaXMuc2hvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyDDpcKIwqTDpsKWwq3DqMKvwqXDqcKhwrnDpsKYwq/DpcKQwqbDpcKPwq/Dp8KCwrnDpcKHwrtcbiAgICBpZiAoaXRlbVt0aGlzLl9qZGJJdGVtRGlzYWJsZWRdID09PSB0aGlzLl9qZGJTdXJlRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0VGV4dCA9IGl0ZW1bdGhpcy5fb3B0aW9uVGV4dF07XG4gICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RG9tLm5hdGl2ZUVsZW1lbnQsICdqZGItcGxnLXNlbGVjdC1hY3RpdmUnLCB0aGlzLnNob3cpO1xuXG4gICAgdGhpcy5uZ01vZGVsVmFsdWUgPSBpdGVtW3RoaXMuX29wdGlvblZhbHVlXTtcbiAgICB0aGlzLm9uQ2hhbmdlKGl0ZW1bdGhpcy5fb3B0aW9uVmFsdWVdKTtcbiAgfVxuXG4gIC8vIMOlwqTCmsOpwoDCicOlwoXCg8OnwrTCoMOnwoLCucOlwofCu1xuICBjaG9vc2VNb3JlKGUsIGl0ZW0pIHtcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xuICAgIC8vIMOpwpjCu8Omwq3CosOkwrrCi8OkwrvCtsOlwobCksOmwrPCoVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAvLyDDpcKIwqTDpsKWwq1zaG93w6bCmMKvw6XCkMKmw6TCuMK6dHJ1ZVxuICAgIGlmICghdGhpcy5zaG93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gw6XCiMKkw6bClsKtw6jCr8Klw6nCocK5w6bCmMKvw6XCkMKmw6XCj8Kvw6fCgsK5w6XCh8K7XG4gICAgaWYgKGl0ZW1bdGhpcy5famRiSXRlbURpc2FibGVkXSA9PT0gdGhpcy5famRiU3VyZURpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gw6XCiMKkw6bClsKtw6bCmMKvw6XCkMKmw6XCrcKYw6XCnMKoXG4gICAgdGhpcy5pbnB1dFRleHQuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50W3RoaXMuX29wdGlvblZhbHVlXSA9PT0gaXRlbVt0aGlzLl9vcHRpb25WYWx1ZV0pIHtcbiAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmbGFnKSB7XG4gICAgICB0aGlzLmRlbGV0ZU1vcmVJdGVtKGUsIGl0ZW0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlucHV0VGV4dMOkwrjCusOowr7Ck8OlwoXCpcOmwqHChsOkwrjCrcOlwrHClcOnwqTCusOnwprChMOlwobChcOlwq7CuVxuICAgIGNvbnN0IHRleHQgPSB0aGlzLl9vcHRpb25UZXh0O1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fb3B0aW9uVmFsdWU7XG4gICAgdGhpcy5pbnB1dFRleHQucHVzaCh7XG4gICAgICB0ZXh0OiBpdGVtW3RoaXMuX29wdGlvblRleHRdLFxuICAgICAgdmFsdWU6IGl0ZW1bdGhpcy5fb3B0aW9uVmFsdWVdXG4gICAgfSk7XG5cbiAgICAvLyB0aGlzLl9jaG9vc2VNb3JlQXJyYXnDpMK4wrrDpMK8wqDDpcKHwrrDpcKOwrvDp8KawoTDpsKVwrDDpsKNwq5cbiAgICB0aGlzLl9jaG9vc2VNb3JlQXJyYXkucHVzaChpdGVtW3RoaXMuX29wdGlvblZhbHVlXSk7XG4gICAgdGhpcy5uZ01vZGVsVmFsdWUgPSB0aGlzLl9jaG9vc2VNb3JlQXJyYXkudG9TdHJpbmcoKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuX2Nob29zZU1vcmVBcnJheSk7XG4gICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICAvLyDDqcKAwonDpMK4wq3DpcKkwprDpcKwwpHDqcKhwrlsacOnwoLCucOlwofCu1xuICBudW1DbGljayhlLCBpdGVtKSB7XG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICAvLyDDqcKYwrvDpsKtwqLDpMK6wovDpMK7wrbDpcKGwpLDpsKzwqFcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgLy8gw6XCiMKkw6bClsKtc2hvd8OmwpjCr8OlwpDCpsOkwrjCunRydWVcbiAgICBpZiAoIXRoaXMuc2hvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIMOlwojCpMOmwpbCrcOowq/CpcOpwqHCucOmwpjCr8OlwpDCpsOlwo/Cr8OnwoLCucOlwofCu1xuICAgIGlmIChpdGVtW3RoaXMuX2pkYkl0ZW1EaXNhYmxlZF0gPT09IHRoaXMuX2pkYlN1cmVEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIMOlwojCpMOmwpbCrcOmwpjCr8OlwpDCpsOnwoLCucOlwofCu8Oowr/Ch1xuICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgPT09IGl0ZW1bdGhpcy5fb3B0aW9uVmFsdWVdKSB7XG4gICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jaG9vc2VNb3JlQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChmbGFnKSB7XG4gICAgICB0aGlzLmlucHV0VGV4dC0tO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXRUZXh0Kys7XG4gICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICB0aGlzLl9jaG9vc2VNb3JlQXJyYXkucHVzaChpdGVtW3RoaXMuX29wdGlvblZhbHVlXSk7XG4gICAgdGhpcy5uZ01vZGVsVmFsdWUgPSB0aGlzLl9jaG9vc2VNb3JlQXJyYXkudG9TdHJpbmcoKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuX2Nob29zZU1vcmVBcnJheSk7XG4gIH1cblxuICAvLyDDpcKIwqTDpsKWwq3DpsKfwpDDpMK4woDDqcKhwrnDpsKYwq/DpcKQwqbDpcKtwpjDpcKcwqjDpMK6wo5pbnB1dFRleHTDpMK4wq1cbiAgbW9yZUluZGV4KGl0ZW0pIHtcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xuICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgPT09IGl0ZW1bdGhpcy5fb3B0aW9uVmFsdWVdKSB7XG4gICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZsYWc7XG4gIH1cblxuICAvLyDDpcKIwqDDqcKZwqTDpsKfwpDDpMK4woDDqcKhwrlcbiAgZGVsZXRlTW9yZUl0ZW0oZSwgaXRlbSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuX2pkYkRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dFRleHQuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50W3RoaXMuX29wdGlvblZhbHVlXSA9PT0gaXRlbVt0aGlzLl9vcHRpb25WYWx1ZV0pIHtcbiAgICAgICAgdGhpcy5pbnB1dFRleHQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fY2hvb3NlTW9yZUFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gaXRlbVt0aGlzLl9vcHRpb25WYWx1ZV0pIHtcbiAgICAgICAgdGhpcy5fY2hvb3NlTW9yZUFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm5nTW9kZWxWYWx1ZSA9IHRoaXMuX2Nob29zZU1vcmVBcnJheS50b1N0cmluZygpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5fY2hvb3NlTW9yZUFycmF5KTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICAvLyDDqMK9wqzDpsKNwqLDpMK4wrpib29sZWFuLMOlwo3Cs8Olwq7CnsOnwo7CsMOmwpzCicOowr/CmcOkwrjCqsOlwq3Cl8Omwq7CtcOlwrDCscOowq7CpMOkwrjCusOkwrjCunRydWUsw6bCssKhw6bCnMKJw6XCjcKzw6TCuMK6ZmFsc2VcbiAgdG9Cb29sZWFuKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyB8fCAodmFsdWUgJiYgdmFsdWUgIT09ICdmYWxzZScpO1xuICB9XG5cbiAgLy8gw6jCrsKhw6fCrsKXw6bCn8KQw6XChcKDw6fCtMKgw6fCmsKEb2ZmZXRUb3BcbiAgZ2V0VG9wKGUpIHtcbiAgICBsZXQgb2Zmc2V0ID0gZS5vZmZzZXRUb3A7XG4gICAgaWYgKGUub2Zmc2V0UGFyZW50ICE9IG51bGwpIHtcbiAgICAgIC8vw6jCp8Kjw6bCnsKQdHJhbnNsYXRlWVxuICAgICAgaWYgKGUuc3R5bGUudHJhbnNmb3JtKSB7XG4gICAgICAgIGxldCByZXQgPSB0aGlzLnBhcnNlVHJhbnNsYXRlWShlLnN0eWxlLnRyYW5zZm9ybSk7XG4gICAgICAgIG9mZnNldCArPSByZXQuaXNQZXJjZW50ID8gZS5jbGllbnRIZWlnaHQgKiByZXQudHJhbnNsYXRlWSAvIDEwMCA6IHJldC50cmFuc2xhdGVZO1xuICAgICAgfVxuICAgICAgb2Zmc2V0ICs9IHRoaXMuZ2V0VG9wKGUub2Zmc2V0UGFyZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIC8vIMOowq7CocOnwq7Cl8Omwp/CkMOlwoXCg8OnwrTCoMOnwprChHNjcm9sbFRvcFxuICBnZXRTY3JvbGxUb3AoZSkge1xuICAgIGxldCBvZmZzZXQgPSBlLnNjcm9sbFRvcDtcbiAgICBpZiAoZS5wYXJlbnRFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgIG9mZnNldCArPSB0aGlzLmdldFNjcm9sbFRvcChlLnBhcmVudEVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgLy/DpsKtwqPDpcKIwpnDqMKnwqPDpsKewpB0cmFuc2xhdGVZXG4gIHBhcnNlVHJhbnNsYXRlWSh2YWwpIHtcbiAgICBsZXQgcmVnID0gL1xcKChbXigpXSspXFwpL2c7XG4gICAgbGV0IHRyYW5zbGF0ZSA9IHJlZy5leGVjKHZhbClbMV07XG4gICAgbGV0IHRyYW5zbGF0QXJyID0gdHJhbnNsYXRlLnNwbGl0KCcsJyk7XG4gICAgbGV0IHRyYW5zbGF0ZVk7XG4gICAgbGV0IGlzUGVyY2VudDtcbiAgICAvL8OlwqbCgsOmwp7CnMOkwrjCjcOlwozChcOlwpDCq3RyYW5zbGF0ZVxuICAgIGlmICh2YWwuaW5kZXhPZigndHJhbnNsYXRlJykgPT09IC0xKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1BlcmNlbnQ6IGZhbHNlLFxuICAgICAgICB0cmFuc2xhdGVZOiAwXG4gICAgICB9XG4gICAgfVxuICAgIC8vw6XCiMKkw6bClsKtw6bCmMKvdHJhbnNsYXRlw6jCv8KYw6bCmMKvdHJhbnNsYXRlWVxuICAgIGlmICh0cmFuc2xhdEFyci5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGUuc3BsaXQoJywnKVsxXTtcbiAgICB9IGVsc2UgaWYgKHRyYW5zbGF0QXJyLmxlbmd0aCA9PT0gMSAmJiB2YWwuaW5kZXhPZigndHJhbnNsYXRlWScpICE9PSAtMSkge1xuICAgICAgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZTtcbiAgICB9XG4gICAgLy/DpcKIwqTDpsKWwq3DpsKYwq/Dp8KZwr7DpcKIwobDpsKvwpTDqMK/wpjDpsKYwq9weFxuICAgIGlmICh0cmFuc2xhdGVZLmluZGV4T2YoJ3B4JykgIT09IC0xKSB7XG4gICAgICAvL8OmwojCqsOlwo/ClnB4XG4gICAgICBpc1BlcmNlbnQgPSBmYWxzZTtcbiAgICAgIHRyYW5zbGF0ZVkgPSBOdW1iZXIodHJhbnNsYXRlWS5zbGljZSgwLCAtMikpO1xuICAgIH0gZWxzZSBpZiAodHJhbnNsYXRlWS5pbmRleE9mKCclJykgIT09IC0xKSB7XG4gICAgICBpc1BlcmNlbnQgPSB0cnVlO1xuICAgICAgdHJhbnNsYXRlWSA9IE51bWJlcih0cmFuc2xhdGVZLnNsaWNlKDAsIC0xKSk7XG4gICAgfVxuICAgIC8vw6jCv8KUw6XCm8Kew6fCmcK+w6XCiMKGw6bCr8KUw6bCiMKWw6bCmcKuw6nCgMKabnVtYmVyw6XCgMK8XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzUGVyY2VudCxcbiAgICAgIHRyYW5zbGF0ZVlcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxFdmVudEVtaXR0ZXIsVGVtcGxhdGVSZWYsSW5wdXQsT3V0cHV0LEVsZW1lbnRSZWYsQ29udGVudENoaWxkLGZvcndhcmRSZWYgLEhvc3RMaXN0ZW5lcixWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZGVsLENvbnRyb2xWYWx1ZUFjY2Vzc29yLE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1qZGItcGxnLWlucHV0JyxcbiAgICB0ZW1wbGF0ZTogYDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIiAqbmdJZj1cIl9hZGRPbkNvbnRlbnRCZWZvcmVcIj5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiX2FkZE9uQ29udGVudEJlZm9yZVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG48L3NwYW4+XG48bmctdGVtcGxhdGUgW25nSWZdPVwiX3R5cGU9PSd0ZXh0J1wiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC10ZXh0LXdyYXBcIiBbbmdDbGFzc109XCJfaW5wdXRXcmFwQ2xhc3NcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1wcmVmaXhcIiAqbmdJZj1cIl9wcmVmaXhDb250ZW50XCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiX3ByZWZpeENvbnRlbnRcIj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGlucHV0IChibHVyKT1cIl9lbWl0Qmx1cigkZXZlbnQpXCIgKGZvY3VzKT1cIl9lbWl0Rm9jdXMoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJfZGlzYWJsZWRcIiBbcmVhZG9ubHldPVwiX3JlYWRvbmx5XCIgW2F0dHIudHlwZV09XCJfdHlwZVwiIGNsYXNzPVwiaW5wdXRcIiBbbmdDbGFzc109XCJfY2xhc3NNYXBcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJfcGxhY2VIb2xkZXJcIiBbKG5nTW9kZWwpXT1cImpkYlZhbHVlXCIgW3N0eWxlLndpZHRoXT1cIndpZHRoXCIgbWF4bGVuZ3RoPVwie3tqZGJNYXhMZW5ndGh9fVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtY2xlYXJcIiAqbmdJZj1cIl9jbGVhciAmJiBfdmFsdWUgJiYgX3R5cGU9PSd0ZXh0J1wiIChjbGljayk9XCJjbGVhclR4dCgpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImNsb3NlLWljb24gaWNvbi1lbXB0eVwiPjwvaT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1pbnB1dC1zdWZmaXhcIiAqbmdJZj1cIl9zdWZmaXhDb250ZW50XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb25mb250IGljb24tZ3VhbmJpMmZpbGxcIj48L2k+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiX3N1ZmZpeENvbnRlbnRcIj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZXJyb3ItdGlwXCIgKm5nSWY9XCJqZGJFcnJvciAmJiBfZXJyb3JDb250ZW50XCI+XG4gICAgICAgIDxpIGNsYXNzPVwiaWNvbi1tZXNzYWdlLWVycm9yIGVycm9yLXRpcFwiPjwvaT5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiX2Vycm9yQ29udGVudFwiPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbjxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIiAqbmdJZj1cIl9hZGRPbkNvbnRlbnRBZnRlclwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIl9hZGRPbkNvbnRlbnRBZnRlclwiPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbjwvc3Bhbj5cbjxuZy10ZW1wbGF0ZSBbbmdJZl09XCJfdHlwZT09J3RleHRhcmVhJ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC10ZXh0LXdyYXBcIj5cbiAgICAgICAgPHRleHRhcmVhIChibHVyKT1cIl9lbWl0Qmx1cigkZXZlbnQpXCIgKGZvY3VzKT1cIl9lbWl0Rm9jdXMoJGV2ZW50KVwiIChpbnB1dCk9XCJ0ZXh0YXJlYU9uQ2hhbmdlKCRldmVudClcIiAjaW5wdXRUZXh0YXJlYSBbZGlzYWJsZWRdPVwiX2Rpc2FibGVkXCIgW3JlYWRvbmx5XT1cIl9yZWFkb25seVwiIHR5cGU9XCJ0ZXh0YXJlYVwiIGNsYXNzPVwiaW5wdXQgaW5wdXQtdGV4dGFyZWFcIiBbbmdDbGFzc109XCJfY2xhc3NNYXBcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJqZGJQbGFjZUhvbGRlclwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImpkYlZhbHVlXCIgbWF4bGVuZ3RoPVwie3tqZGJNYXhMZW5ndGh9fVwiIFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dGFyZWEtd2MtdGlwXCIgW25nQ2xhc3NdPVwieyd0ZXh0YXJlYS13Yy10aXAtcmVkJzogamRiVmFsdWUmJmpkYlZhbHVlLmxlbmd0aCA9PSBqZGJNYXhMZW5ndGh9XCIgKm5nSWY9XCJqZGJNYXhMZW5ndGggJiYgIV9kaXNhYmxlZCAmJiFfcmVhZG9ubHlcIj57eyhqZGJWYWx1ZSYmamRiVmFsdWUubGVuZ3RoKXx8MH19L3t7amRiTWF4TGVuZ3RofX08L3NwYW4+XG4gICAgPC9kaXY+XG48L25nLXRlbXBsYXRlPmAsXG4gICAgc3R5bGVzOiBbYC5pbnB1dC10ZXh0LXdyYXB7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmlucHV0e2hlaWdodDozMHB4O3dpZHRoOjMwMHB4O2JhY2tncm91bmQ6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNhZmIwYjM7Ym9yZGVyLXJhZGl1czoycHg7Zm9udC1zaXplOjEzcHg7cGFkZGluZzowIDEwcHg7bGluZS1oZWlnaHQ6MzBweDtjb2xvcjojMzMzfS5pbnB1dDpmb2N1c3tvdXRsaW5lOjA7Ym9yZGVyLWNvbG9yOiMzZjY5ZjJ9aW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6I2FmYjBiM30ucHJlZml4IC5pbnB1dHtwYWRkaW5nLWxlZnQ6MzBweH0uaW5wdXQtdGV4dGFyZWF7d2lkdGg6MzAwcHg7aGVpZ2h0OjgwcHg7b3ZlcmZsb3cteTphdXRvO2ZvbnQtc2l6ZToxM3B4O2NvbG9yOiMwMDA7bGluZS1oZWlnaHQ6MjBweH0uaW5wdXQtZGlzYWJsZWR7YmFja2dyb3VuZDojZjBmMWY1O2NvbG9yOiM3ZDdlODB9LmRpc2FibGVkIC5pbnB1dHtjb2xvcjojN2Q3ZTgwfS5pbnB1dC10ZXh0LWxne2hlaWdodDo0MHB4O2ZvbnQtc2l6ZToxNHB4fS5pbnB1dC10ZXh0LXNte2hlaWdodDoyNHB4O2ZvbnQtc2l6ZToxMnB4fS5pbnB1dC10ZXh0YXJlYS1sZ3toZWlnaHQ6MTIwcHg7Zm9udC1zaXplOjE0cHh9LmlucHV0LXRleHRhcmVhLXNte2hlaWdodDo4MHB4O2ZvbnQtc2l6ZToxMnB4fS5pbnB1dC1lcnJvcntib3JkZXItY29sb3I6I2Y4NGE0YX0uaW5wdXQtY2xlYXJ7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6NXB4O3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtoZWlnaHQ6MjRweH0uaW5wdXQtcHJlZml4e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtsZWZ0OjdweH0uaW5wdXQtZXJyb3ItdGlwe2NvbG9yOiNmODRhNGE7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MjBweDttYXgtd2lkdGg6MjAwcHh9LmVycm9yLXRpcHtmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDoyMHB4fS50ZXh0YXJlYS13Yy10aXB7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjVweDtyaWdodDoxMHB4O2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiM3ZDdlODB9LnRleHRhcmVhLXdjLXRpcC1yZWR7Y29sb3I6I2Y4NGE0YX1gXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSmRiUGxnSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG59KVxuXG5leHBvcnQgY2xhc3MgSmRiUGxnSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsQ29udHJvbFZhbHVlQWNjZXNzb3J7XG4gICAgX3ZhbHVlID0gJyc7XG4gICAgX3R5cGU9ICd0ZXh0JztcbiAgICBfcGxhY2VIb2xkZXI9ICcnO1xuICAgIF9zaXplPSAnZGVmYXVsdCc7XG4gICAgX2Rpc2FibGVkID0gZmFsc2U7XG4gICAgX3JlYWRvbmx5ID0gZmFsc2U7XG4gICAgX2Vycm9yID0gZmFsc2U7XG4gICAgX2NsYXNzTWFwOiBhbnk7XG4gICAgX2lucHV0V3JhcENsYXNzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgX2NsZWFyID0gZmFsc2U7XG4gICAgX21heGxlbmd0aDogbnVtYmVyO1xuICAgIF9hdXRvUHJvbXB0RGF0YTogQXJyYXk8YW55PiA9IFtdO1xuICAgICBfY29tcG9zaW5nID0gZmFsc2U7XG4gICAgIEBJbnB1dCgpIHdpZHRoPSAnMzAwcHgnO1xuICAgIC8vIG5nTW9kZWwgQWNjZXNzXG4gICAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgICBAQ29udGVudENoaWxkKCdqZGJFcnJvckNvbnRlbnQnKSAgX2Vycm9yQ29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKCAnYWRkQ29udGVudEJlZm9yZScgKSBfYWRkT25Db250ZW50QmVmb3JlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoJ2FkZENvbnRlbnRBZnRlcicpIF9hZGRPbkNvbnRlbnRBZnRlcjogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKCdwcmVmaXhDb250ZW50JykgX3ByZWZpeENvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZCgnc3VmZml4Q29udGVudCcpIF9zdWZmaXhDb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBPdXRwdXQoKSBqZGJCbHVyOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGpkYkZvY3VzOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gdGhpcy5faW5wdXRXcmFwQ2xhc3MgPVtgaW5wdXQtdGV4dC13cmFwLSR7dGhpcy5fc2l6ZX1gXTtcbiAgICAgICAgaWYgKCB0aGlzLl9wcmVmaXhDb250ZW50ICkge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRXcmFwQ2xhc3MucHVzaCgncHJlZml4Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JywgWyAnJGV2ZW50JyBdKVxuICAgIGNvbXBvc2l0aW9uU3RhcnQoZTogQ29tcG9zaXRpb25FdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb3NpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgWyAnJGV2ZW50JyBdKVxuICAgIGNvbXBvc2l0aW9uRW5kKGU6IENvbXBvc2l0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9zaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGpkYlR5cGUodHlwZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIGdldCBqZGJUeXBlKCk6IHN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgamRiUGxhY2VIb2xkZXIocGxhY2VIb2xkZXI6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX3BsYWNlSG9sZGVyID0gcGxhY2VIb2xkZXI7XG4gICAgfVxuICAgIGdldCBqZGJQbGFjZUhvbGRlcigpOiBzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZUhvbGRlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBqZGJTaXplKHNpemU6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX3NpemUgPSB7bGFyZ2U6ICdsZycsc21hbGw6ICdzbSd9W3NpemVdO1xuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfVxuICAgIGdldCBqZGJTaXplKCk6IHN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgamRiRGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IHRoaXMudG9Cb29sZWFuKGRpc2FibGVkKTtcbiAgICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgICBnZXQgamRiRGlzYWJsZWQoKTogYm9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGpkYlJlYWRvbmx5KHJlYWRvbmx5OiBib29sZWFuKXtcbiAgICAgICAgdGhpcy5fcmVhZG9ubHkgPSB0aGlzLnRvQm9vbGVhbihyZWFkb25seSk7XG4gICAgfVxuICAgIGdldCBqZGJSZWFkb25seSgpOiBib29sZWFue1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZG9ubHk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgamRiVmFsdWUodmFsdWU6IHN0cmluZyl7XG4gICAgICAgIGlmICgodGhpcy5fdmFsdWUgPT09IHZhbHVlKSB8fCAoKHRoaXMuX3ZhbHVlID09IG51bGwpICYmICh2YWx1ZSA9PSBudWxsKSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICBpZiAoIXRoaXMuX2NvbXBvc2luZykge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgamRiVmFsdWUoKTogc3RyaW5ne1xuICAgICAgICBpZih0aGlzLl92YWx1ZSA9PSAnMCcpe1xuICAgICAgICAgICAgcmV0dXJuICcwJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWUgfHwgJyc7XG4gICAgfVxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGpkYkVycm9yKHZhbHVlOiBib29sZWFuKXtcbiAgICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLnRvQm9vbGVhbih2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gICAgZ2V0IGpkYkVycm9yKCk6IGJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgICB9XG4gICAgQElucHV0KClcbiAgICBzZXQgamRiQ2xlYXIodmFsdWU6IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLl9jbGVhciA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0IGpkYkNsZWFyKCk6IGJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGVhcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBqZGJNYXhMZW5ndGgodmFsdWU6IG51bWJlcil7XG4gICAgICAgIHRoaXMuX21heGxlbmd0aCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgamRiTWF4TGVuZ3RoKCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heGxlbmd0aDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBqZGJQcm9tcHREYXRhKHZhbHVlOiBBcnJheTxhbnk+KXtcbiAgICAgICAgdGhpcy5fYXV0b1Byb21wdERhdGEgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGpkYlByb21wdERhdGEoKTogQXJyYXk8YW55PntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dG9Qcm9tcHREYXRhO1xuICAgIH1cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB9XG4gICAgX2VtaXRCbHVyKCRldmVudCkge1xuICAgICAgICB0aGlzLmpkYkJsdXIuZW1pdCgkZXZlbnQpO1xuICAgIH1cblxuICAgIF9lbWl0Rm9jdXMoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuamRiRm9jdXMuZW1pdCgkZXZlbnQpO1xuICAgIH1cbiAgICB0ZXh0YXJlYU9uQ2hhbmdlKCRldmVudCl7XG5cbiAgICB9XG4gICAgc2V0Q2xhc3NNYXAoKSB7XG4gICAgICAgIHRoaXMuX2NsYXNzTWFwID0ge1xuICAgICAgICAgICAgWyBgaW5wdXQtJHt0aGlzLl90eXBlfS0ke3RoaXMuX3NpemV9YCBdOiB0cnVlLFxuICAgICAgICAgICAgWyAnaW5wdXQtZGlzYWJsZWQnIF06IHRoaXMuX2Rpc2FibGVkLFxuICAgICAgICAgICAgWydpbnB1dC1lcnJvciddOiB0aGlzLl9lcnJvclxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGVhclR4dCgpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgnJyk7XG4gICAgfVxuXG4gICAgdG9Cb29sZWFuKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gJycgfHwgKHZhbHVlICYmIHZhbHVlICE9PSAnZmFsc2UnKTtcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5mdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xufVxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgRGF0ZV1cIjtcbn1cblxuZnVuY3Rpb24gdG9Kc29uKHZhbHVlKSB7XG4gICAgdmFyIGpzb25PYmogPSB7fTtcbiAgICB0cnkge1xuICAgICAgICBqc29uT2JqID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygndG8ganNvbiBwYXJzZSBlcnJvcicpO1xuICAgIH1cbiAgICByZXR1cm4ganNvbk9iajtcbn1cbmZ1bmN0aW9uIHNlcmlhbGl6ZVZhbHVlKHYpIHtcbiAgICBpZiAoaXNPYmplY3QodikpIHtcbiAgICAgICAgcmV0dXJuIGlzRGF0ZSh2KSA/IHYudG9JU09TdHJpbmcoKSA6IHRvSnNvbih2KTtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5mdW5jdGlvbiBlbmNvZGVVcmlRdWVyeSh2YWwsIHBjdEVuY29kZVNwYWNlcz8pIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICAgICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgICAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICAgICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgICAgICByZXBsYWNlKC8lMjAvZywgKHBjdEVuY29kZVNwYWNlcyA/ICclMjAnIDogJysnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqUXVlcnlMaWtlUGFyYW1TZXJpYWxpemVyKHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zKSByZXR1cm4gJyc7XG4gICAgdmFyIHBhcnRzID0gW107XG4gICAgc2VyaWFsaXplKHBhcmFtcywgJycsIHRydWUpO1xuICAgIHJldHVybiBwYXJ0cy5qb2luKCcmJyk7XG5cbiAgICBmdW5jdGlvbiBzZXJpYWxpemUodG9TZXJpYWxpemU6IGFueSwgcHJlZml4OiBhbnksIHRvcExldmVsPzogYW55KSB7XG4gICAgICAgIGlmIChpc0FycmF5KHRvU2VyaWFsaXplKSkge1xuICAgICAgICAgICAgdG9TZXJpYWxpemUuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplKHZhbHVlLCBwcmVmaXggKyAnWycgKyAoaXNPYmplY3QodmFsdWUpID8gaW5kZXggOiAnJykgKyAnXScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodG9TZXJpYWxpemUpICYmICFpc0RhdGUodG9TZXJpYWxpemUpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdG9TZXJpYWxpemUpIHtcbiAgICAgICAgICAgICAgICBzZXJpYWxpemUodG9TZXJpYWxpemVba2V5XSwgcHJlZml4ICtcbiAgICAgICAgICAgICAgICAgICAgKHRvcExldmVsID8gJycgOiAnLicpICtcbiAgICAgICAgICAgICAgICAgICAga2V5ICtcbiAgICAgICAgICAgICAgICAgICAgKHRvcExldmVsID8gJycgOiAnJykpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2VyaWFsaXplKHRvU2VyaWFsaXplW2tleV0sIHByZWZpeCArXG4gICAgICAgICAgICAgICAgLy8gICAgICh0b3BMZXZlbCA/ICcnIDogJ1snKSArXG4gICAgICAgICAgICAgICAgLy8gICAgIGtleSArXG4gICAgICAgICAgICAgICAgLy8gICAgICh0b3BMZXZlbCA/ICcnIDogJ10nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZVVyaVF1ZXJ5KHByZWZpeCkgKyAnPScgK1xuICAgICAgICAgICAgICAgICh0b1NlcmlhbGl6ZSA9PSBudWxsID8gJycgOiBlbmNvZGVVcmlRdWVyeShzZXJpYWxpemVWYWx1ZSh0b1NlcmlhbGl6ZSkpKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJjb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5jb25zdCBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbmV4cG9ydCBmdW5jdGlvbiB0b09iamVjdCh2YWw6IGFueSkge1xuICBpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuICByZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWduKHRhcmdldDogYW55LCAuLi5zb3VyY2U6IGFueVtdKSB7XG4gIGxldCBmcm9tOiBhbnk7XG4gIGNvbnN0IHRvID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgbGV0IHN5bWJvbHM6IGFueTtcbiAgZm9yIChsZXQgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcbiAgICBmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZnJvbSkge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoKDxhbnk+T2JqZWN0KS5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIHN5bWJvbHMgPSAoPGFueT5PYmplY3QpLmdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG4gICAgICAgICAgdG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0bztcbn1cbiIsImltcG9ydCB7Q29va2llfSBmcm9tICduZzItY29va2llcy9uZzItY29va2llcyc7XG5pbXBvcnQge0luamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdE1ldGhvZCwgVVJMU2VhcmNoUGFyYW1zfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG4vLyBpbXBvcnQge2Vudmlyb25tZW50fSBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHtKZGJQbGdUb2FzdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9qZGItcGxnLXRvYXN0L2pkYi1wbGctdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7alF1ZXJ5TGlrZVBhcmFtU2VyaWFsaXplcn0gZnJvbSAnLi9xdWVyeS1zdHJpbmcnO1xuaW1wb3J0IHtvYmplY3RBc3NpZ259IGZyb20gJy4vb2JqZWN0LWFzc2lnbic7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy8gY29uc3QgREVGQVVMVEhPU1QgPSBlbnZpcm9ubWVudC5hcGlDb25maWcuZGVmYXVsdEhvc3Q7XG4vLyBjb25zdCBBUElTID0gZW52aXJvbm1lbnQuYXBpQ29uZmlnLmFwaXM7XG4vLyBjb25zdCBFTlYgPSBlbnZpcm9ubWVudC5lbnY7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKZGJQbGdCYXNlU2VydmljZSB7XG4gIHZSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIHJvdXRlOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIC8vIMOlwqTChMOnwpDChsOkwrjCjcOlwpDCjMOnwo7Cr8OlwqLCg8OnwprChFVybMOvwrzCjMOlwpzCqMOlwo7Cn8Omwp3CpcOnwprChMOlwp/CusOnwqHCgMOkwrjCisOlwoHCmsOkwrrChsOkwrzCmMOlwozCllxuICAvLyBnZXRVcmwoYXBpTmFtZTogc3RyaW5nKSB7XG4gIC8vICAgbGV0IGFwaSA9IEFQSVNbYXBpTmFtZV07XG4gIC8vICAgaWYgKEVOViA9PSAnc2VydmUnICYmIGFwaS5zZXJ2ZSkge1xuICAvLyAgICAgcmV0dXJuIGFwaS5zZXJ2ZTtcbiAgLy8gICB9XG4gIC8vICAgaWYgKGFwaS5ob3N0ICYmIGFwaS5ob3N0W0VOVl0pIHtcbiAgLy8gICAgIHJldHVybiBhcGkuaG9zdFtFTlZdICsgYXBpLnBhdGg7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBERUZBVUxUSE9TVFtFTlZdICsgYXBpLnBhdGg7XG4gIC8vIH1cblxuICBzZXRSb290Vmlld0NvbnRhaW5lclJlZih2UmVmKSB7XG4gICAgdGhpcy52UmVmID0gdlJlZjtcblxuICB9XG5cbiAgdG9hc3QobXNnLCBkZWxheVRpbWUgPSAzMDAwKSB7XG4gICAgLy/DqcKAwprDqMK/wodDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgw6XCiMKbw6XCu8K6w6XCh8K6w6XCisKow6bCgMKBw6fCu8KEw6TCu8K2w6fCmsKEw6XCrsKew6TCvsKLXG4gICAgY29uc3QgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShKZGJQbGdUb2FzdENvbXBvbmVudCk7XG4gICAgbGV0IGNvbUluc3RhbmNlID0gdGhpcy52UmVmLmNyZWF0ZUNvbXBvbmVudChjaGlsZENvbXBvbmVudCk7XG4gICAgY29tSW5zdGFuY2UuaW5zdGFuY2UubXNnID0gbXNnO1xuICAgIGNvbUluc3RhbmNlLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbUluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9LCBkZWxheVRpbWUpO1xuICB9XG5cbiAgdGVzdCgpIHtcbiAgICBhbGVydCgnamRiIHNlcnZpY2VzLi4uLicpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhcGlOYW1lXG4gICAqIEBwYXJhbSBkYXRhT2JqXG4gICAqIEBwYXJhbSBpc0ludGVyY2VwdCDDpsKYwq/DpcKQwqbDpsKLwqbDpsKIwqrDpcKkwoTDp8KQwoZyZXR1cm5Db2RlICE9IDAgw6fCmsKEw6bCg8KFw6XChsK1XG4gICAqL1xuICBwb3N0KGFwaU5hbWUsIGRhdGFPYmosIG9wdGlvbnMpIHtcbiAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGxldCBsb2dpblRva2VuO1xuICAgIGxldCBsb2dpbldheTtcbiAgICBsZXQgb3JnVWlkO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMudG9rZW5PYmopIHtcbiAgICAgIGxvZ2luVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvcHRpb25zLnRva2VuT2JqLmxvZ2luVG9rZW4pO1xuICAgICAgbG9naW5XYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvcHRpb25zLnRva2VuT2JqLmxvZ2luV2F5KTtcbiAgICAgIG9yZ1VpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG9wdGlvbnMudG9rZW5PYmoub3JnVWlkKTtcbiAgICB9XG4gICAgbGV0IGxvZ2luT2JqOiBhbnkgPSB7fTtcbiAgICBsZXQgZGF0YTogYW55ID0ge307XG4gICAgbGV0IGN1cnJlbnRSb3V0ZSA9IGxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKVsxXTtcbiAgICBpZiAobG9naW5Ub2tlbikge1xuICAgICAgaWYgKG9yZ1VpZCkge1xuICAgICAgICBsb2dpbk9iaiA9IHtcbiAgICAgICAgICAnbG9naW5Ub2tlbic6IGxvZ2luVG9rZW4sXG4gICAgICAgICAgJ2xvZ2luV2F5JzogbG9naW5XYXksXG4gICAgICAgICAgJ29yZ1VpZCc6IG9yZ1VpZCxcbiAgICAgICAgICAnamRiRGhUcmFjZUlkJzogdGltZSArICctJyArIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAoMTAwMDAwICsgMSkgKyAxICsgJycpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dpbk9iaiA9IHtcbiAgICAgICAgICAnbG9naW5Ub2tlbic6IGxvZ2luVG9rZW4sXG4gICAgICAgICAgJ2xvZ2luV2F5JzogbG9naW5XYXksXG4gICAgICAgICAgJ2pkYkRoVHJhY2VJZCc6IHRpbWUgKyAnLScgKyBwYXJzZUludChNYXRoLnJhbmRvbSgpICogKDEwMDAwMCArIDEpICsgMSArICcnKVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBkYXRhID0gb2JqZWN0QXNzaWduKHt9LCBsb2dpbk9iaiwgZGF0YU9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBvYmplY3RBc3NpZ24oe30sIGRhdGFPYmopO1xuICAgIH1cbiAgICBkYXRhID0galF1ZXJ5TGlrZVBhcmFtU2VyaWFsaXplcihkYXRhKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgIGxldCByZXFVcmwgPSBhcGlOYW1lO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgcmVxdWVzdG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgYm9keTogZGF0YSB8fCB7fVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuaHR0cCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcVVybCwgcmVxdWVzdG9wdGlvbnMpXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgICAgLmZpbHRlcigocmVzOiBhbnkpID0+IHtcblxuICAgICAgICAvL8OmwqDCocOpwqrCjMOmwo7CpcOlwo/Co8Oowr/ClMOlwpvCnsOnwprChMOmwpXCsMOmwo3CrsOnwrvCk8Omwp7ChMOmwqDCvMOlwrzCj1xuICAgICAgICBpZighKHJlcy5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpICYmIHJlcy5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKSkpe1xuICAgICAgICAgICB0aGlzLnRvYXN0KCfDp8KzwrvDp8K7wp/DpsKOwqXDpcKPwqPDpsKgwrzDpcK8wo/DqcKUwpnDqMKvwq/Dr8K8woEnKTtcbiAgICAgICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLnJlc2V0ICYmIG9wdGlvbnMucmVzZXQoKTtcbiAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmZucyAmJiBvcHRpb25zLmZucy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgIGxldCBsZW4gPSBvcHRpb25zLmZucy5sZW5ndGg7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGZuID0gb3B0aW9ucy5mbnNbaV07XG4gICAgICAgICAgICBpZiAocmVzLmVycm9yICYmIHJlcy5lcnJvci5yZXR1cm5Db2RlICogMSA9PT0gZm4ucmV0dXJuQ29kZSAmJiBjdXJyZW50Um91dGUgIT0gJ2xvZ2luJykge1xuICAgICAgICAgICAgICBmbi5jYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzLmVycm9yICYmIHJlcy5lcnJvci5yZXR1cm5Db2RlICogMSA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy/DpcKFwrzDpcKuwrnDp8KZwrvDpcK9wpXDp8K7woTDpMK7wrbDpMK4wq1xcmNvZGVBcGnDpcKSwoxsb2dpbkFwacOkwrjCpMOkwrjCqsOmwo7CpcOlwo/Co8OowoDCgcOnwprChMOlwobCmcOmwrPClVxuICAgICAgICBpZih0eXBlb2Yob3B0aW9ucykgPT09ICdib29sZWFuJyl7XG4gICAgICAgICAgaWYob3B0aW9ucyl7XG4gICAgICAgICAgICB0aGlzLnRvYXN0KHJlcyAmJiByZXMuZXJyb3IgJiYgcmVzLmVycm9yLnJldHVyblVzZXJNZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL8OmwpjCr8OlwpDCpsOmwovCpsOmwojCqsOlwqTChMOnwpDChlxuICAgICAgICBpZihvcHRpb25zLmlzSW50ZXJjZXB0KXtcbiAgICAgICAgICB0aGlzLnRvYXN0KHJlcyAmJiByZXMuZXJyb3IgJiYgcmVzLmVycm9yLnJldHVyblVzZXJNZXNzYWdlKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcG9zdEpTT04oYXBpTmFtZSwgZGF0YU9iaikge1xuICAgIC8vIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgIC8vICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIC8vICAgICAnd2l0aENyZWRlbnRpYWxzJzogdHJ1ZVxuICAgIC8vIH0pO1xuXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuXG4gICAgLy8gaGVhZGVycy5hcHBlbmQoJ3dpdGhDcmVkZW50aWFscycsJ3RydWUnKTtcbiAgICAvLyBsZXQgdXJsRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAvLyBpZiAoT2JqZWN0LmtleXMoZGF0YU9iaikubGVuZ3RoID4gMCkge1xuICAgIC8vICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YU9iaikge1xuICAgIC8vICAgICAgICAgdXJsRGF0YS5hcHBlbmQoa2V5LCBkYXRhT2JqW2tleV0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vIGxldCBsb2FuTWFya2V0VG9rZW4gPSBDb29raWUuZ2V0KCdsb2FuTWFya2V0VG9rZW4nKTtcbiAgICAvLyB1cmxEYXRhLmFwcGVuZCgnbG9hbk1hcmtldFRva2VuJywgbG9hbk1hcmtldFRva2VuKTtcblxuICAgIGxldCByZXFVcmwgPSBhcGlOYW1lO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAvLyBsZXQgcmVxdWVzdG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgIC8vICAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUG9zdCxcbiAgICAvLyAgICAgdXJsOiByZXFVcmwsXG4gICAgLy8gICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgLy8gICAgIGJvZHk6IHRlc3REYXRhXG4gICAgLy8gfSlcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6IHJlcVVybCxcbiAgICAgIGJvZHk6IGRhdGFPYmogfHwge31cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QocmVxVXJsLCBvcHRpb25zKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5maWx0ZXIoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXMuZXJyb3IgJiYgcmVzLmVycm9yLnJldHVybkNvZGUgKiAxID09IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YW1wMnN0cmluZyhzdGFtcCkge1xuICAgIGlmIChzdGFtcCkge1xuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShzdGFtcCkudG9KU09OKCk7XG4gICAgICByZXR1cm4gZGF0ZS5zcGxpdCgnVCcpWzBdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGV4cG9ydChhcGlOYW1lLCBwYXJhbXMpIHtcbiAgICBsZXQgY29va2llU3RyID0gQ29va2llLmdldCgnbG9naW5JbmZvJyk7XG4gICAgbGV0IGNvb2tpZU9iajogYW55ID0ge307XG4gICAgbGV0IGNvb2tpZURhdGE6IGFueSA9IHt9O1xuICAgIGlmIChjb29raWVTdHIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvb2tpZU9iaiA9IEpTT04ucGFyc2UoY29va2llU3RyKTtcbiAgICAgICAgY29va2llRGF0YSA9IHtcbiAgICAgICAgICBsb2dpblRva2VuOiBjb29raWVPYmoubG9naW5Ub2tlbixcbiAgICAgICAgICBlbXBsb3llZUlkOiBjb29raWVPYmouZW1wSWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXJzZSBjb29raWUgZXJyb3IuLi4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcGFyYW1zT2JqID0gb2JqZWN0QXNzaWduKHt9LCBjb29raWVEYXRhLCBwYXJhbXMpO1xuICAgIGxldCB1cmwgPSBhcGlOYW1lICsgJz8nO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXNPYmopIHtcbiAgICAgIGlmIChwYXJhbXNPYmpba2V5XSkge1xuICAgICAgICB1cmwgKz0ga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc09ialtrZXldKSArICcmJztcbiAgICAgIH1cbiAgICB9XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gIH1cblxuICBnZXRQaWNTaXplKGZpbGUpIHtcbiAgICBsZXQgYXJyID0ge307XG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICAgIGxldCBkYXRhID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgLy/DpcKKwqDDqMK9wr3DpcKbwr7Dp8KJwofDqMKOwrfDpcKPwpbDpcKbwr7Dp8KJwofDp8Kcwp/DpcKuwp7DpcKuwr3DpcK6wqbDpcKSwozDqcKrwpjDpcK6wqZcbiAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgd2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgYXJyID0ge1xuICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoOiB3aWR0aFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgfTtcbiAgICAgIGltYWdlLnNyYyA9IGRhdGE7XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsbFRhYmxlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuICAgIC8qXG4gICAgICAgIGxpbmVzOm51bWJlciAgw6jCocKow6bCoMK8w6XCscKVw6fCpMK6w6fCmsKEw6jCocKMw6bClcKwXG4gICAgICAgIGxpc3RzOkFycmF5PGFueT4gIMOlwrzCgsOmwq3CpcOowo7Ct8Olwo/ClsOnwprChMOmwpXCsMOmwo3CrlxuICAgICAgICBmbGFnOmJvb2xlYW4gIMOmwpjCr8OlwpDCpsOlwpzCqMOnwqnCusOnwpnCvcOowqHCjMOmwqDCj8OlwrHClcOnwqTCusOmwpPCjcOkwr3CnMOmwozCicOpwpLCrizDqcK7wpjDqMKuwqTDpcKPwpZ1blNob3dPcHTDpcKtwpfDpsKuwrVcbiAgICAqL1xuICAgIGZpbGxUYWJsZShsaW5lczogbnVtYmVyLCBsaXN0czpBcnJheTxhbnk+LCBmbGFnPzpib29sZWFuKSB7XG4gICAgICAgIGxpbmVzID0gbGluZXMgfHwgMTA7XG4gICAgICAgIGxpc3RzID0gbGlzdHMgfHwgW107XG4gICAgICAgIGZsYWcgPSBmbGFnIHx8IHRydWU7XG4gICAgICAgIGxldCBhTGVuZ3RoID0gbGlzdHMubGVuZ3RoO1xuICAgICAgICBsZXQgbUxlbmd0aCA9IGxpbmVzIC0gYUxlbmd0aDtcbiAgICAgICAgbGV0IGZpbGxPYmogPSB7dW5TaG93T3B0OmZsYWd9O1xuICAgICAgICBsZXQga2V5cztcbiAgICAgICAgaWYgKGFMZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGxpc3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC51blNob3dPcHQgPSAhZmxhZztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKGxpc3RzWzBdKTtcbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudCAhPT0gXCJ1blNob3dPcHRcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsT2JqW2VsZW1lbnRdID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGxpc3RzWzBdW2VsZW1lbnRdKSA9PSBcIltvYmplY3QgQXJyYXldXCIgPyBbXSA6ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFMZW5ndGggIT09IDAgJiYgbUxlbmd0aD4wKSB7XG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPG1MZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICBsaXN0cy5wdXNoKGZpbGxPYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0cztcbiAgICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0pkYlBsZ1RvYXN0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2pkYi1wbGctdG9hc3QvamRiLXBsZy10b2FzdC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tbW9uTWV0aG9kU2VydmljZSB7XG5cbiAgdlJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICApIHtcbiAgfVxuXG4gIC8qw6XCuMK4w6fClMKow6XChcKsw6XChcKxw6bClsK5w6bCs8KVKi9cblxuICAvKsOpwqrCjMOowq/CgcOmwonCi8OmwpzCusOlwo/Ct8OmwpjCr8OlwpDCpsOlwpDCiMOmwrPClVxuICAqIG51bWJlciDDpsKgwqHDqcKqwozDp8KawoTDpsKJwovDpsKcwrrDpcKPwrfDp8KgwoEqL1xuICB0ZXN0UGhvbmVOdW1iZXIobnVtYmVyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwaG9uZVJlZyA9IC9eWzFdWzMsNCw1LDcsOF1bMC05XXs5fSQvO1xuICAgIHJldHVybiBwaG9uZVJlZy50ZXN0KG51bWJlcik7XG4gIH1cblxuXG4gIHNldFJvb3RWaWV3Q29udGFpbmVyUmVmKHZSZWYpIHtcbiAgICB0aGlzLnZSZWYgPSB2UmVmO1xuICB9XG5cbiAgdG9hc3QobXNnLCBkZWxheVRpbWUgPSAzMDAwKSB7XG4gICAgLy/DqcKAwprDqMK/wodDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgw6XCiMKbw6XCu8K6w6XCh8K6w6XCisKow6bCgMKBw6fCu8KEw6TCu8K2w6fCmsKEw6XCrsKew6TCvsKLXG4gICAgY29uc3QgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShKZGJQbGdUb2FzdENvbXBvbmVudCk7XG4gICAgbGV0IGNvbUluc3RhbmNlID0gdGhpcy52UmVmLmNyZWF0ZUNvbXBvbmVudChjaGlsZENvbXBvbmVudCk7XG4gICAgY29tSW5zdGFuY2UuaW5zdGFuY2UubXNnID0gbXNnO1xuICAgIGNvbUluc3RhbmNlLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbUluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9LCBkZWxheVRpbWUpO1xuXG4gIH1cblxuICAvLyDDpMK7wo7DpsKVwrDDp8K7woTDpcKIwqDDqcKZwqTDpsKMwofDpcKuwprDpcKFwoPDp8K0wqBcbiAgcmVtb3ZlTm9kZUZyb21BcnJheShsaXN0LCBub2RlPykge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIG91dEZvcjpcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IGxpc3QubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbm9kZSkge1xuICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWsgb3V0Rm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWpkYi1wbGctdGFibGUtZXJyb3InLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJqZGItcGxnLXRhYmxlLWVycm9yXCI+XG4gICAge3t0YWJsZUVycm9yVGV4dH19XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLmpkYi1wbGctdGFibGUtZXJyb3J7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6OTBweDtsZWZ0OjUwJX1gXVxufSlcbmV4cG9ydCBjbGFzcyBKZGJQbGdUYWJsZUVycm9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvKlxuICAgIMOlworCn8OowoPCvcOvwrzCmsOlwq7CnsOnwo7CsMOowqHCqMOmwqDCvMOmworCpcOpwpTCmcOmwpbCh8OmwqHCiMOmwrDCtMOlwrnCs8OlwrHChcOkwrjCrVxuICAqL1xuXG4gIEBJbnB1dCgpIHRhYmxlRXJyb3JUZXh0ID0gJ8OmwprCgsOmwpfCoMOmwpXCsMOmwo3Cric7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBQaXBlLFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe25hbWU6J3Byb3ZpbmNlUmVmb3JtUGlwZSd9KVxuZXhwb3J0IGNsYXNzIFByb3ZpbmNlUmVmb3JtUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XG4gICAgdHJhbnNmb3JtKHZhbDphbnkpOmFueXtcbiAgICAgICAgaWYodmFsLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbC5qb2luKCfDo8KAwoEnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgUGlwZSxQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtuYW1lOidhbW91bnRSZWZvcm1QaXBlJ30pXG5leHBvcnQgY2xhc3MgQW1vdW50UmVmb3JtUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XG4gICAgdHJhbnNmb3JtKHZhbDphbnkpOnN0cmluZ3tcbiAgICAgICAgaWYodmFsID09PSAwKXtcbiAgICAgICAgICAgIHJldHVybiAnMC4wMCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXZhbCl7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh2YWwvMTAwKS50b0ZpeGVkKDIpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEpkYlBsZ1RvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy10b2FzdC9qZGItcGxnLXRvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKZGJUYWJDb21wb25lbnQgfSBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLXRhYi9qZGItdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaG93UGljdHVyZUNvbXBvbmVudCB9IGZyb20gJy4vY29yZS9jb21wb25lbnRzL3Nob3ctcGljdHVyZS9zaG93LXBpY3R1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFBpY3R1cmVWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9waWN0dXJlLXZpZXdlci9waWN0dXJlLXZpZXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhZ0RpcmVjdGl2ZSB9IGZyb20gJy4vY29yZS9kaXJlY3RpdmUvZHJhZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSmRiUGxnUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctcGFnaW5hdGlvbi9qZGItcGxnLXBhZ2luYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSmRiUGxnQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy1idXR0b24vamRiLXBsZy1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEpkYlBsZ0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctZGlhbG9nL2pkYi1wbGctZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmx5TnVtYmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb3JlL2RpcmVjdGl2ZS9vbmx5LW51bWJlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSmRiUGxnU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy1zZWxlY3QvamRiLXBsZy1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEpkYlBsZ0lucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy1pbnB1dC9qZGItcGxnLWlucHV0LmNvbXBvbmVudCc7XG4vL2ltcG9ydCB7IEpkYlBsZ0F1dG9jb21wbGV0ZURpcmVjdGl2ZSB9IGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctYXV0b2NvbXBsZXRlL2pkYi1wbGctYXV0b2NvbXBsZXRlLmRpcmVjdGl2ZSc7XG4vL2ltcG9ydCB7IEpkYlBsZ0F1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctYXV0b2NvbXBsZXRlL2pkYi1wbGctYXV0b2NvbXBsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKZGJQbGdCYXNlU2VydmljZSB9IGZyb20gJy4vY29yZS9zZXJ2aWNlcy9qZGItcGxnLWJhc2UvamRiLXBsZy1iYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsbFRhYmxlU2VydmljZSB9IGZyb20gJy4vY29yZS9zZXJ2aWNlcy9qZGItcGxnLWJhc2UvZmlsbC10YWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1ldGhvZFNlcnZpY2UgfSBmcm9tICcuL2NvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2NvbW1vbi1tZXRob2Quc2VydmljZSc7XG5cbmltcG9ydCB7IEpkYlBsZ1RhYmxlRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLXRhYmxlLWVycm9yL2pkYi1wbGctdGFibGUtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IFByb3ZpbmNlUmVmb3JtUGlwZSB9IGZyb20gJy4vY29yZS9waXBlL3Byb3ZpbmNlLXJlZm9ybS5waXBlJztcbmltcG9ydCB7IEFtb3VudFJlZm9ybVBpcGUgfSBmcm9tICcuL2NvcmUvcGlwZS9hbW91bnQtcmVmb3JtLnBpcGUnO1xuXG5cbi8vIGV4cG9ydCAqIGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctYXV0b2NvbXBsZXRlL2pkYi1wbGctYXV0b2NvbXBsZXRlLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLWJ1dHRvbi9qZGItcGxnLWJ1dHRvbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy1kaWFsb2cvamRiLXBsZy1kaWFsb2cuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctaW5wdXQvamRiLXBsZy1pbnB1dC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy1wYWdpbmF0aW9uL2pkYi1wbGctcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy1zZWxlY3QvamRiLXBsZy1zZWxlY3QuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctdGFiL2pkYi10YWIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctdGFibGUtZXJyb3IvamRiLXBsZy10YWJsZS1lcnJvci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy10b2FzdC9qZGItcGxnLXRvYXN0LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9waWN0dXJlLXZpZXdlci9waWN0dXJlLXZpZXdlci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvc2hvdy1waWN0dXJlL3Nob3ctcGljdHVyZS5jb21wb25lbnQnO1xuXG5cbmNvbnN0IE1ETF9NT0RVTEVTID0gW1xuICBTaG93UGljdHVyZUNvbXBvbmVudCxcbiAgUGljdHVyZVZpZXdlckNvbXBvbmVudCxcbiAgRHJhZ0RpcmVjdGl2ZSxcbiAgSmRiUGxnUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgSmRiUGxnQnV0dG9uQ29tcG9uZW50LFxuICBKZGJQbGdEaWFsb2dDb21wb25lbnQsXG4gIEpkYlBsZ1NlbGVjdENvbXBvbmVudCxcbiAgSmRiUGxnSW5wdXRDb21wb25lbnQsXG4gLy8gSmRiUGxnQXV0b2NvbXBsZXRlRGlyZWN0aXZlLFxuICAvL0pkYlBsZ0F1dG9jb21wbGV0ZUNvbXBvbmVudCxcbiAgSmRiVGFiQ29tcG9uZW50LFxuICBKZGJQbGdUYWJsZUVycm9yQ29tcG9uZW50LFxuICBQcm92aW5jZVJlZm9ybVBpcGUsXG4gIEFtb3VudFJlZm9ybVBpcGVcbl07XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogTURMX01PRFVMRVMsXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEpkYlBsZ1RvYXN0Q29tcG9uZW50LFxuICAgIEpkYlRhYkNvbXBvbmVudCxcbiAgICBTaG93UGljdHVyZUNvbXBvbmVudCxcbiAgICBQaWN0dXJlVmlld2VyQ29tcG9uZW50LFxuICAgIERyYWdEaXJlY3RpdmUsXG4gICAgSmRiUGxnUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICBPbmx5TnVtYmVyRGlyZWN0aXZlLFxuICAgIEpkYlBsZ1NlbGVjdENvbXBvbmVudCxcbiAgICBKZGJQbGdCdXR0b25Db21wb25lbnQsXG4gICAgSmRiUGxnRGlhbG9nQ29tcG9uZW50LFxuICAgIEpkYlBsZ0lucHV0Q29tcG9uZW50LFxuICAgIC8vSmRiUGxnQXV0b2NvbXBsZXRlRGlyZWN0aXZlLFxuICAgIC8vSmRiUGxnQXV0b2NvbXBsZXRlQ29tcG9uZW50LFxuICAgIEpkYlBsZ1RhYmxlRXJyb3JDb21wb25lbnQsXG4gICAgUHJvdmluY2VSZWZvcm1QaXBlLFxuICAgIEFtb3VudFJlZm9ybVBpcGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbSmRiUGxnQmFzZVNlcnZpY2UsIENvbW1vbk1ldGhvZFNlcnZpY2UsIEZpbGxUYWJsZVNlcnZpY2VdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtKZGJQbGdUb2FzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSmRiUGxnVWlNb2R1bGUgeyBcbiAgICAvKipcbi8vICAgICogQGRlcHJlY2F0ZWQgVXNlIGBOZ1pvcnJvQW50ZE1vZHVsZWAgaW5zdGVhZC5cbi8vICAgICovXG4vLyAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBuZ01vZHVsZTogSmRiUGxnVWlNb2R1bGVcbi8vICAgICB9O1xuLy8gICB9XG59XG5leHBvcnQgeyBKZGJQbGdCYXNlU2VydmljZSB9IGZyb20gJy4vY29yZS9zZXJ2aWNlcy9qZGItcGxnLWJhc2UvamRiLXBsZy1iYXNlLnNlcnZpY2UnO1xuZXhwb3J0IHsgRmlsbFRhYmxlU2VydmljZSB9IGZyb20gJy4vY29yZS9zZXJ2aWNlcy9qZGItcGxnLWJhc2UvZmlsbC10YWJsZS5zZXJ2aWNlJztcbmV4cG9ydCB7Q29tbW9uTWV0aG9kU2VydmljZX0gZnJvbSAnLi9jb3JlL3NlcnZpY2VzL2pkYi1wbGctYmFzZS9jb21tb24tbWV0aG9kLnNlcnZpY2UnO1xuXG4vLyBUT0RPIMOmwprCtMOpwpzCssOmwpzCjcOlworCocOmwpbCucOlwrzCj1xuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIklucHV0IiwiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiSW5qZWN0b3IiLCJWaWV3Q2hpbGQiLCJWaWV3Q29udGFpbmVyUmVmIiwiT3V0cHV0IiwidHJpZ2dlciIsInN0YXRlIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0ZSIsIlJlbmRlcmVyIiwiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIkhvc3RMaXN0ZW5lciIsIlJlbmRlcmVyMiIsIlRlbXBsYXRlUmVmIiwiTkdfVkFMVUVfQUNDRVNTT1IiLCJmb3J3YXJkUmVmIiwiVmlld0VuY2Fwc3VsYXRpb24iLCJDb250ZW50Q2hpbGQiLCJodHRwIiwiSGVhZGVycyIsIlJlcXVlc3RPcHRpb25zIiwiT2JzZXJ2YWJsZSIsIkNvb2tpZSIsIkluamVjdGFibGUiLCJIdHRwIiwiUm91dGVyIiwiUGlwZSIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFhRTt1QkFEc0IsRUFBRTtTQUV0Qjs7OztRQUVGLHVDQUFROzs7WUFBUjthQUNDOztvQkFmRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSxtREFHWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxvUkFBb1IsQ0FBQztxQkFDL1I7Ozs7OzRCQUdFQyxVQUFLOzttQ0FaUjs7Ozs7OztBQ0FBO1FBNENJLHlCQUNZLDBCQUNEO1lBREMsNkJBQXdCLEdBQXhCLHdCQUF3QjtZQUN6QixjQUFTLEdBQVQsU0FBUzsrQkFWSSxJQUFJQyxpQkFBWSxFQUFFOytCQUNsQixJQUFJQSxpQkFBWSxFQUFFOytCQUNsQixJQUFJQSxpQkFBWSxFQUFFO3lCQUNsQyxFQUFFOzJCQUNBLEVBQUU7K0JBRUUsQ0FBQzsrQkFDRCxFQUFFO1NBSVg7Ozs7UUFHTCxrQ0FBUTs7O1lBQVI7YUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVlELGlDQUFPOzs7Ozs7Ozs7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S0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDaEYsS0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFFL0UsSUFBSSxDQUFDLEtBQUssS0FBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssS0FBSSxDQUFDLFNBQVMsRUFBRTs7O3dCQUUvQyxLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQzFFLEtBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztxQkFDNUU7eUJBQU07Ozt3QkFFTCxLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7d0JBQ3BHLEtBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztxQkFDckc7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