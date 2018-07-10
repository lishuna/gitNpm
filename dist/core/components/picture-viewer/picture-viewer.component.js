"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PictureViewerComponent = (function () {
    function PictureViewerComponent(renderer) {
        this.renderer = renderer;
        this.pictureList = [];
        this.update = new core_1.EventEmitter();
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
        get: function () {
            return this._jdbMaster;
        },
        set: function (value) {
            this._jdbMaster = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PictureViewerComponent.prototype, "jdbClear", {
        get: function () {
            return this._jdbClear;
        },
        set: function (value) {
            this._jdbClear = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PictureViewerComponent.prototype, "jdbCurrent", {
        get: function () {
            return this.current;
        },
        set: function (value) {
            if (value > this.pictureList.length || value < 0) {
                this.current = 0;
                return;
            }
            this.current = value;
        },
        enumerable: true,
        configurable: true
    });
    PictureViewerComponent.prototype.ngOnInit = function () {
        this.elem = this.imgBox.nativeElement.children;
    };
    PictureViewerComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.pictureList) {
            this.pictureList.forEach(function (element, index) {
                _this.resetPosition(index);
            });
        }
    };
    PictureViewerComponent.prototype.ngAfterViewInit = function () {
        var imgContent = this.imgContent.nativeElement;
        this.renderer.setElementStyle(imgContent, 'height', this.maxHeight + 'px');
        this.renderer.setElementStyle(imgContent, 'width', this.maxWidth + 'px');
        if (this.jdbShowType == 1) {
            this.renderer.setElementStyle(imgContent, 'margin-left', -this.maxWidth / 2 + 'px');
            this.renderer.setElementStyle(imgContent, 'margin-top', -this.maxHeight / 2 + 'px');
        }
    };
    PictureViewerComponent.prototype.resetPosition = function (index) {
        var _this = this;
        var image = new Image();
        image.onload = function () {
            var w = image.width;
            var h = image.height;
            var hRatio;
            var wRatio;
            var imgRate = w / h;
            wRatio = _this.maxWidth / w;
            hRatio = _this.maxHeight / h;
            if (wRatio > 1 && hRatio > 1) {
                w = w;
                h = h;
            }
            else if (wRatio < 1 && hRatio < 1) {
                if (imgRate > 1) {
                    w = _this.maxWidth;
                    h = w / imgRate;
                }
                else if (imgRate < 1) {
                    h = _this.maxHeight;
                    w = h * imgRate;
                }
            }
            else if (wRatio > 1 && hRatio < 1) {
                h = _this.maxHeight;
                w = w * hRatio;
            }
            else if (wRatio < 1 && hRatio > 1) {
                h = h * wRatio;
                w = _this.maxWidth;
            }
            _this.renderer.setElementStyle(_this.elem[index].children[0], 'height', h + 'px');
            _this.renderer.setElementStyle(_this.elem[index].children[0], 'width', w + 'px');
            if (w === _this.maxWidth && h === _this.maxHeight) {
                _this.renderer.setElementStyle(_this.elem[index].children[0], 'top', '0px');
                _this.renderer.setElementStyle(_this.elem[index].children[0], 'left', '0px');
            }
            else {
                _this.renderer.setElementStyle(_this.elem[index].children[0], 'top', (_this.maxHeight - h) / 2 + 'px');
                _this.renderer.setElementStyle(_this.elem[index].children[0], 'left', (_this.maxWidth - w) / 2 + 'px');
            }
        };
        image.src = this.pictureList[index].imgUrl;
    };
    PictureViewerComponent.prototype.ImgState = function (index) {
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
    PictureViewerComponent.prototype.Next = function () {
        this.resetImgData();
        this.current = (this.current + 1) % this.pictureList.length;
        this.resetPosition(this.current - 1);
    };
    PictureViewerComponent.prototype.Prev = function () {
        this.resetImgData();
        this.current = this.current - 1 < 0 ? this.pictureList.length - 1 : this.current - 1;
        this.resetPosition(this.current + 1);
    };
    PictureViewerComponent.prototype.closeModel = function () {
        this.resetImgData();
        this.update.emit({ status: false });
    };
    PictureViewerComponent.prototype.scaleBig = function () {
        this.imgOperate.num = this.imgOperate.num * 2;
        if (this.imgOperate.num > 4) {
            this.imgOperate.num = 4;
        }
        var rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    };
    PictureViewerComponent.prototype.scaleSmall = function () {
        this.imgOperate.num = this.imgOperate.num / 2;
        if (this.imgOperate.num < 1) {
            this.imgOperate.num = 0.5;
        }
        var rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    };
    PictureViewerComponent.prototype.routateNi = function () {
        this.imgOperate.degnum++;
        var rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    };
    PictureViewerComponent.prototype.routateShun = function () {
        this.imgOperate.degnum--;
        var rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    };
    PictureViewerComponent.prototype.resetImgData = function () {
        this.imgOperate = {
            num: 1,
            degnum: 0
        };
        var rate = 'scale(1,1) rotate(0deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transition', 'transform 0.2s linear 0.4s');
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    };
    PictureViewerComponent.prototype.toBoolean = function (value) {
        return value === '' || (value && value !== 'false');
    };
    PictureViewerComponent.prototype.ngOnDestroy = function () {
        this.pictureList = null;
        this.imgBox = null;
        this.imgContent = null;
        this.current = null;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PictureViewerComponent.prototype, "pictureList", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PictureViewerComponent.prototype, "update", void 0);
    __decorate([
        core_1.ViewChild('img'),
        __metadata("design:type", core_1.ElementRef)
    ], PictureViewerComponent.prototype, "imgBox", void 0);
    __decorate([
        core_1.ViewChild('imgContent'),
        __metadata("design:type", core_1.ElementRef)
    ], PictureViewerComponent.prototype, "imgContent", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PictureViewerComponent.prototype, "maxWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PictureViewerComponent.prototype, "maxHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PictureViewerComponent.prototype, "jdbShowType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PictureViewerComponent.prototype, "jdbMaster", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PictureViewerComponent.prototype, "jdbClear", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PictureViewerComponent.prototype, "jdbCurrent", null);
    PictureViewerComponent = __decorate([
        core_1.Component({
            selector: 'app-picture-viewer',
            templateUrl: './picture-viewer.component.html',
            styleUrls: ['./picture-viewer.component.scss'],
            animations: [
                core_1.trigger('imgMove', [
                    core_1.state('off', core_1.style({ 'display': 'none', 'z-index': '0', 'transform': 'translateX(0)' })),
                    core_1.state('prev', core_1.style({
                        'z-index': '1',
                        'transform': 'translateX(-100%)'
                    })),
                    core_1.state('next', core_1.style({ 'z-index': '2', 'transform': 'translateX(100%)' })),
                    core_1.state('on', core_1.style({ 'z-index': '3', 'transform': 'translateX(0)' })),
                    core_1.transition('prev=>on', [
                        core_1.animate('0.3s ease-in')
                    ]),
                    core_1.transition('next=>on', [
                        core_1.animate('0.3s ease-in')
                    ]),
                    core_1.transition('on=>prev', [
                        core_1.animate('0.3s ease-in')
                    ]),
                    core_1.transition('on=>next', [
                        core_1.animate('0.3s ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [core_1.Renderer])
    ], PictureViewerComponent);
    return PictureViewerComponent;
}());
exports.PictureViewerComponent = PictureViewerComponent;
