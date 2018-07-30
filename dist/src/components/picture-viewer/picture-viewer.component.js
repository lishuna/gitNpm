/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer, animate, style, transition, trigger, state } from '@angular/core';
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
                    template: "<div class=\"picture-viewer\"> <div class=\"img-mask\" *ngIf=\"_jdbMaster\" (click)=\"closeModel()\"> <!-- \u906E\u7F69\u5C42 --> </div> <div #imgContent [ngClass]=\"{'img-content-componet':jdbShowType==2}\" class=\"img-content\"> <!-- \u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE --> <div class=\"close\" *ngIf=\"_jdbClear\" (click)=\"closeModel()\"> <span class=\"icon-close\"></span> </div> <!-- \u56FE\u7247box --> <ul class=\"img-box\" #img> <!-- <li *ngFor=\"let item of pictureList;let i=index\" [@imgMove]=\"ImgState(i)\"> <img appDragDirective \u00A0[src]=\"item.imgUrl\" alt=\"\" style=\"max-height: 600px;max-width: 800px;\"> </li> --> </ul> <!-- \u4E0A\u4E00\u9875\u4E0B\u4E00\u9875 --> <div [hidden]=\"current==0\" class=\"prev-page\" (click)=\"Prev()\"> <span class=\"icon-pagination-prev\"></span> </div> <div [hidden]=\"current==pictureList.length-1\" class=\"next-page\" (click)=\"Next()\"> <span class=\"icon-pagination-next\"></span> </div> <!-- \u53F3\u4E0B\u89D2\u9875\u7801 --> <div class=\"img-index\">{{current+1}}/{{pictureList.length}}</div> <!-- \u7F29\u653E\u65CB\u8F6C\u6309\u94AE\u7EC4 --> <div class=\"btn-box\"> <span [ngClass]=\"{'hover-disabled':imgOperate.num===4}\" class=\"icon-picture-zoom-in scale-big\" (click)=\"scaleBig()\"></span> <span [ngClass]=\"{'hover-disabled':imgOperate.num==0.5}\" class=\"icon-picture-zoom-out  scale-small\" (click)=\"scaleSmall()\"></span> <span class=\"icon-picture-counterclockwise routate-ni\" (click)=\"routateNi()\"></span> <span class=\"icon-picture-clockwise routate-shun\" (click)=\"routateShun()\"></span> </div> </div> </div>",
                    // styleUrls:  ['./picture-viewer.component.scss'],
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
export { PictureViewerComponent };
function PictureViewerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PictureViewerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PictureViewerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PictureViewerComponent.propDecorators;
    /** @type {?} */
    PictureViewerComponent.prototype.pictureList;
    /** @type {?} */
    PictureViewerComponent.prototype.update;
    /** @type {?} */
    PictureViewerComponent.prototype.imgBox;
    /** @type {?} */
    PictureViewerComponent.prototype.imgContent;
    /** @type {?} */
    PictureViewerComponent.prototype.maxWidth;
    /** @type {?} */
    PictureViewerComponent.prototype.maxHeight;
    /** @type {?} */
    PictureViewerComponent.prototype.jdbShowType;
    /** @type {?} */
    PictureViewerComponent.prototype._jdbMaster;
    /** @type {?} */
    PictureViewerComponent.prototype._jdbClear;
    /** @type {?} */
    PictureViewerComponent.prototype.dragStatus;
    /** @type {?} */
    PictureViewerComponent.prototype.current;
    /** @type {?} */
    PictureViewerComponent.prototype.elem;
    /** @type {?} */
    PictureViewerComponent.prototype.imgOperate;
    /** @type {?} */
    PictureViewerComponent.prototype.renderer;
}
//# sourceMappingURL=picture-viewer.component.js.map