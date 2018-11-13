import { Component, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver, Injector, Output, EventEmitter, ElementRef, Renderer, HostListener, Directive, Renderer2, TemplateRef, Type, forwardRef, ContentChild, ViewEncapsulation, Injectable, Pipe, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';
import { Subject, Observable } from 'rxjs';
import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JdbPlgToastComponent {
    constructor() {
        this.msg = "";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
JdbPlgToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-jdb-plg-toast',
                template: `<div class="toast-wraper" [innerHtml]="msg"> </div> `,
            },] },
];
/** @nocollapse */
JdbPlgToastComponent.ctorParameters = () => [];
JdbPlgToastComponent.propDecorators = {
    msg: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JdbTabComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} _injector
     */
    constructor(componentFactoryResolver, _injector) {
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
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngOnChanges() {
        // console.log('changes:totalTip:' + this.totalTip);
    }
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
    addItem(ChildComponent, attrs, title, comId = '', isCloseFlag = false) {
        if (comId && this.tabIdComMap[comId]) {
            /** @type {?} */
            let com = this.tabIdComMap[comId];
            this.tabChange(com.index);
            return;
        }
        /** @type {?} */
        const childComponent = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
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
        keys.forEach(value => {
            comInstance.instance[value] = attrs[value];
        });
        this.tabComs.push(comInstance);
        if (this.items.length > 1) {
            this.setOneComHide(this.curTabIndex);
        }
        this.tabSubs = comInstance.instance['onTopComMsg'] = new EventEmitter();
        this.tabSubs.subscribe(value => {
            this.onTopComMsg.emit(value);
        });
        this.curTabIndex = this.items.length - 1;
        if (comId) {
            this.tabIdComMap[comId] = {
                index: this.curTabIndex,
                comInstance: comInstance.instance
            };
        }
        return comInstance;
    }
    /**
     * @param {?} tabIndex
     * @return {?}
     */
    setOneComHide(tabIndex) {
        this.tabComs[tabIndex].location.nativeElement.style.display = 'none';
    }
    /**
     * @param {?} tabIndex
     * @return {?}
     */
    setOneComShow(tabIndex) {
        this.tabComs[tabIndex].location.nativeElement.style.display = 'block';
    }
    /**
     * @param {?} index
     * @return {?}
     */
    tabChange(index) {
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
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setOneTabShow(index) {
        this.tabChange(index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeTab(index) {
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
        let tabIdComMap = this.tabIdComMap;
        for (let key in tabIdComMap) {
            if (tabIdComMap[key].index == index) {
                delete tabIdComMap[key];
                break;
            }
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    removeTabById(id) {
        /** @type {?} */
        let tabIdComMap = this.tabIdComMap;
        for (let key in tabIdComMap) {
            if (key == id) {
                this.removeTab(tabIdComMap[key]['index']);
                break;
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.target) {
            // this.target.destroy();
            this.target.clear();
        }
    }
}
JdbTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'jdb-tab',
                template: `<div class="tab-wraper"> <div class="tab-nav-wraper"> <div *ngFor="let item of items;let i = index;" class="tab-item {{item.theme}} {{item.style}} tab-item-hei{{item.height}}" [ngClass]="{'tab-selected':i == curTabIndex, 'trapezoid1':item.theme === 'trapezoid'&&(i == 0)}" title='{{item.title}}'> <div (click)="tabChange(i)" class="tab-text" [ngClass]="{'trapezoid-div':item.theme === 'trapezoid'}"> {{item.title}}<span *ngIf="totalTip.isShow ? totalTip.isShow : false" class="tab-total">{{totalTip[i]}}</span> </div> <span class="close-btn" (click)="removeTab(i)" *ngIf="i !== 0 && item.isCloseFlag != true">&times;</span> <div *ngIf="item.borderLength === 'short'" class="self-border"></div> </div> </div> <div class="tab-content-wraper"> <div #tabContent class="place-holder"></div> </div> </div> `
            },] },
];
/** @nocollapse */
JdbTabComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Injector }
];
JdbTabComponent.propDecorators = {
    target: [{ type: ViewChild, args: ['tabContent', { read: ViewContainerRef },] }],
    onTabChange: [{ type: Output }],
    onTabRemove: [{ type: Output }],
    onTopComMsg: [{ type: Output }],
    totalTip: [{ type: Input }],
    totalTipChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ShowPictureComponent {
    constructor() {
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    closeModel() {
        this.update.emit({ status: false });
    }
}
ShowPictureComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-show-picture',
                template: `<div> <div class="img-mask" (click)="closeModel()"> <!-- 遮罩层 --> </div> <div class="img-content"> <span class="close" (click)="closeModel()"> <img src="/assets/images/close-x.png" alt=""> </span> <img [src]="pictureUrl" alt="" style="max-height: 600px;max-width: 800px;"> </div> </div> `,
            },] },
];
/** @nocollapse */
ShowPictureComponent.ctorParameters = () => [];
ShowPictureComponent.propDecorators = {
    pictureUrl: [{ type: Input }],
    update: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PictureViewerComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbMaster(value) {
        this._jdbMaster = this.toBoolean(value);
    }
    /**
     * @return {?}
     */
    get jdbMaster() {
        return this._jdbMaster;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbClear(value) {
        this._jdbClear = this.toBoolean(value);
    }
    /**
     * @return {?}
     */
    get jdbClear() {
        return this._jdbClear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbCurrent(value) {
        if (value > this.pictureList.length || value < 0) {
            this.current = 0;
            return;
        }
        this.current = value;
    }
    /**
     * @return {?}
     */
    get jdbCurrent() {
        return this.current;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.elem = this.imgBox.nativeElement.children; // 所有的li
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.pictureList) {
            this.pictureList.forEach((element, index) => {
                this.resetPosition(index);
            });
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const imgContent = this.imgContent.nativeElement;
        this.renderer.setElementStyle(imgContent, 'height', this.maxHeight + 'px');
        this.renderer.setElementStyle(imgContent, 'width', this.maxWidth + 'px');
        if (this.jdbShowType == 1) {
            this.renderer.setElementStyle(imgContent, 'margin-left', -this.maxWidth / 2 + 'px');
            this.renderer.setElementStyle(imgContent, 'margin-top', -this.maxHeight / 2 + 'px');
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    resetPosition(index) {
        /** @type {?} */
        const image = new Image();
        image.onload = () => {
            /** @type {?} */
            let w = image.width;
            /** @type {?} */
            let h = image.height;
            /** @type {?} */
            let hRatio;
            /** @type {?} */
            let wRatio;
            /** @type {?} */
            const imgRate = w / h; // 图片宽高比
            // const maxWidth = 800;
            // const maxHeight = 600;
            wRatio = this.maxWidth / w;
            hRatio = this.maxHeight / h;
            if (wRatio > 1 && hRatio > 1) {
                // 两者比例均大于1表示图为小图，宽高未达到800*600,则取原图大小
                w = w;
                h = h;
            }
            else if (wRatio < 1 && hRatio < 1) {
                // 两者比例均小于1表示图为大图，宽高达到800*600,则取容器大小
                if (imgRate > 1) {
                    // 宽图
                    w = this.maxWidth;
                    h = w / imgRate;
                }
                else if (imgRate < 1) {
                    // 长图
                    h = this.maxHeight;
                    w = h * imgRate;
                }
            }
            else if (wRatio > 1 && hRatio < 1) {
                // 表示为长图片，则高为600，宽等比例缩放取值
                h = this.maxHeight;
                w = w * hRatio;
            }
            else if (wRatio < 1 && hRatio > 1) {
                // 表示为宽图片，则宽为800，高等比例缩放取值
                h = h * wRatio;
                w = this.maxWidth;
            }
            // 设置图片展示宽高
            this.renderer.setElementStyle(this.elem[index].children[0], 'height', h + 'px');
            this.renderer.setElementStyle(this.elem[index].children[0], 'width', w + 'px');
            if (w === this.maxWidth && h === this.maxHeight) {
                // 设置图片位置使其垂直水平居中
                this.renderer.setElementStyle(this.elem[index].children[0], 'top', '0px');
                this.renderer.setElementStyle(this.elem[index].children[0], 'left', '0px');
            }
            else {
                // 设置图片位置使其垂直水平居中
                this.renderer.setElementStyle(this.elem[index].children[0], 'top', (this.maxHeight - h) / 2 + 'px');
                this.renderer.setElementStyle(this.elem[index].children[0], 'left', (this.maxWidth - w) / 2 + 'px');
            }
        };
        image.src = this.pictureList[index].imgUrl;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    ImgState(index) {
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
    }
    /**
     * @return {?}
     */
    Next() {
        this.resetImgData();
        this.current = (this.current + 1) % this.pictureList.length;
        this.resetPosition(this.current - 1);
        // 修改状态，使拖动图片回到原来位置
        // this.dragStatus = true;
    }
    /**
     * @return {?}
     */
    Prev() {
        this.resetImgData();
        this.current = this.current - 1 < 0 ? this.pictureList.length - 1 : this.current - 1;
        this.resetPosition(this.current + 1);
        // 修改状态，使拖动图片回到原来位置
        // this.dragStatus = true;
    }
    /**
     * @return {?}
     */
    closeModel() {
        this.resetImgData();
        this.update.emit({ status: false });
    }
    /**
     * @return {?}
     */
    scaleBig() {
        this.imgOperate.num = this.imgOperate.num * 2;
        if (this.imgOperate.num > 4) {
            this.imgOperate.num = 4;
        }
        /** @type {?} */
        const rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    }
    /**
     * @return {?}
     */
    scaleSmall() {
        this.imgOperate.num = this.imgOperate.num / 2;
        if (this.imgOperate.num < 1) {
            this.imgOperate.num = 0.5;
        }
        /** @type {?} */
        const rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    }
    /**
     * @return {?}
     */
    routateNi() {
        this.imgOperate.degnum++;
        /** @type {?} */
        const rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    }
    /**
     * @return {?}
     */
    routateShun() {
        this.imgOperate.degnum--;
        /** @type {?} */
        const rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    }
    /**
     * @return {?}
     */
    resetImgData() {
        this.imgOperate = {
            num: 1,
            degnum: 0
        };
        /** @type {?} */
        const rate = 'scale(1,1) rotate(0deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transition', 'transform 0.2s linear 0.4s');
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toBoolean(value) {
        return value === '' || (value && value !== 'false');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.pictureList = null;
        this.imgBox = null;
        this.imgContent = null;
        this.current = null;
    }
}
PictureViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-picture-viewer',
                template: `<div class="picture-viewer"> <div class="img-mask" *ngIf="_jdbMaster" (click)="closeModel()"> <!-- 遮罩层 --> </div> <div #imgContent [ngClass]="{'img-content-componet':jdbShowType==2}" class="img-content"> <!-- 右上角关闭按钮 --> <div class="close" *ngIf="_jdbClear" (click)="closeModel()"> <span class="icon-close"></span> </div> <!-- 图片box --> <ul class="img-box" #img> <li *ngFor="let item of pictureList;let i=index" [@imgMove]="ImgState(i)"> <img appDragDirective  [src]="item.imgUrl" alt="" style="max-height: 600px;max-width: 800px;"> </li> </ul> <!-- 上一页下一页 --> <div [hidden]="current==0" class="prev-page" (click)="Prev()"> <span class="icon-pagination-prev"></span> </div> <div [hidden]="current==pictureList.length-1" class="next-page" (click)="Next()"> <span class="icon-pagination-next"></span> </div> <!-- 右下角页码 --> <div class="img-index">{{current+1}}/{{pictureList.length}}</div> <!-- 缩放旋转按钮组 --> <div class="btn-box"> <span [ngClass]="{'hover-disabled':imgOperate.num===4}" class="icon-picture-zoom-in scale-big" (click)="scaleBig()"></span> <span [ngClass]="{'hover-disabled':imgOperate.num==0.5}" class="icon-picture-zoom-out  scale-small" (click)="scaleSmall()"></span> <span class="icon-picture-counterclockwise routate-ni" (click)="routateNi()"></span> <span class="icon-picture-clockwise routate-shun" (click)="routateShun()"></span> </div> </div> </div>`,
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
PictureViewerComponent.ctorParameters = () => [
    { type: Renderer }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DragDirective {
    /**
     * @param {?} elem
     * @param {?} render
     */
    constructor(elem, render) {
        //
        this.elem = elem;
        this.render = render;
        this.isDown = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        /** @type {?} */
        const wRate = localStorage.getItem('dragWidth');
        /** @type {?} */
        const hRate = localStorage.getItem('dragHeight');
        this.isDown = true;
        this.disLeft = this.elem.nativeElement.offsetLeft;
        this.disTop = this.elem.nativeElement.offsetTop;
        this.disX = event.clientX;
        this.disY = event.clientY;
        event.target.style.cursor = 'move';
        // event.preventDefault();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousemove(event) {
        event.preventDefault();
        // 判断该元素是否被点击了。
        if (this.isDown) {
            /** @type {?} */
            const newdisX = event.clientX - this.disX;
            /** @type {?} */
            const newdisY = event.clientY - this.disY;
            this.elem.nativeElement.style.left = newdisX + this.disLeft + 'px';
            this.elem.nativeElement.style.top = newdisY + this.disTop + 'px';
        }
        return false;
    }
    /**
     * @return {?}
     */
    onMouseup() {
        // 只用当元素移动过了，离开函数体才会触发。
        if (this.isDown) {
            this.isDown = false;
            this.disLeft = this.elem.nativeElement.offsetLeft;
            this.disTop = this.elem.nativeElement.offsetTop;
        }
    }
    /**
     * @return {?}
     */
    onMouseleave() {
        this.isDown = false;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    }
}
DragDirective.decorators = [
    { type: Directive, args: [{
                selector: 'img[appDragDirective]'
            },] },
];
/** @nocollapse */
DragDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer }
];
DragDirective.propDecorators = {
    onMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    onMousemove: [{ type: HostListener, args: ['mousemove', ['$event'],] }],
    onMouseup: [{ type: HostListener, args: ['mouseup', ['$event'],] }],
    onMouseleave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JdbPlgPaginationComponent {
    /**
     * @param {?} el
     * @param {?} renderer2
     */
    constructor(el, renderer2) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbShowTotal(value) {
        this._showTotal = this.toBoolean(value);
    }
    /**
     * @return {?}
     */
    get jdbShowTotal() {
        return this._showTotal;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbTotal(value) {
        // 若传入值和当前total一致，则不触发操作
        if (value === this._total) {
            return;
        }
        this._total = value;
        this.setPageNo();
    }
    /**
     * @return {?}
     */
    get jdbTotal() {
        return this._total;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbPageIndex(value) {
        if (this._current === value) {
            return;
        }
        if (value > this._lastIndex || value < this._firstIndex) {
            return;
        }
        this._current = Number(value);
        this.setPageNo();
    }
    /**
     * @return {?}
     */
    get jdbPageIndex() {
        return this._current;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbShowPageSize(value) {
        this._showPageSize = this.toBoolean(value);
    }
    /**
     * @return {?}
     */
    get jdbShowPageSize() {
        return this._showPageSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbPageSize(value) {
        if (value === this._pageSize) {
            return;
        }
        this._pageSize = value;
        this.setPageNo();
    }
    /**
     * @return {?}
     */
    get jdbPageSize() {
        return this._pageSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbSizeOptions(value) {
        // 若传入值和当前total一致，则不触发操作
        if (value === this._options) {
            return;
        }
        // 判断是否为数组
        if (Object.prototype.toString.call(value) === '[object Array]') {
            /** @type {?} */
            const optionsArr = [];
            value.forEach(elem => {
                /** @type {?} */
                const obj = {
                    value: elem,
                    text: elem + '条/页'
                };
                optionsArr.push(obj);
            });
            this._options = optionsArr;
        }
    }
    /**
     * @return {?}
     */
    get jdbSizeOptions() {
        return this._options;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbShowQuickJump(value) {
        this._showQuickJump = this.toBoolean(value);
    }
    /**
     * @return {?}
     */
    get jdbShowQuickJump() {
        return this._showQuickJump;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbSimple(value) {
        this._jdbSimple = this.toBoolean(value);
    }
    /**
     * @return {?}
     */
    get jdbSimple() {
        return this.jdbSimple;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbSelectWidth(value) {
        this._jdbSelectWidth = value;
    }
    /**
     * @return {?}
     */
    get jdbSelectWidth() {
        return this._jdbSelectWidth;
    }
    /**
     * @return {?}
     */
    setPageNo() {
        // 向上取整
        this._lastIndex = Math.ceil(this._total / this._pageSize);
        /** @type {?} */
        const tmpPages = [];
        if (this._lastIndex <= 9) {
            // 若总页数不超过9，则全部展示在页面上
            for (let i = 2; i <= this._lastIndex - 1; i++) {
                tmpPages.push({
                    index: i
                });
            }
        }
        else {
            /** @type {?} */
            const current = +this._current;
            /** @type {?} */
            let left = Math.max(2, current - 2);
            /** @type {?} */
            let right = Math.min(current + 2, this._lastIndex - 1);
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
            for (let i = left; i <= right; i++) {
                tmpPages.push({ index: i });
            }
        }
        this.pages = tmpPages;
    }
    /**
     * @param {?} status
     * @param {?} num
     * @param {?=} e
     * @return {?}
     */
    dataChange(status, num, e) {
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
    }
    /**
     * @return {?}
     */
    quickJump() {
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
    }
    /**
     * @param {?} e
     * @param {?} pageSize
     * @return {?}
     */
    jumpBefore(e, pageSize) {
        this.dataChange(true, this._current - Math.round(pageSize / 2), e);
    }
    /**
     * @param {?} e
     * @param {?} pageSize
     * @return {?}
     */
    jumpAfter(e, pageSize) {
        this.dataChange(true, this._current + Math.round(pageSize / 2), e);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toBoolean(value) {
        return value === '' || (value && value !== 'false');
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isNumber(obj) {
        /** @type {?} */
        const reg = /^[0-9]*$/;
        return reg.test(obj);
    }
}
JdbPlgPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-jdb-plg-pagination',
                template: `<div class="jdb-plg-pagination">
    <!-- 总条数 -->
    <span *ngIf="_showTotal" class="total-box">
      共{{_total}}条
    </span>

    <div class="operate-box">
        <!-- 条数切换 -->
        <div class="jdb-plg-pagination-options" *ngIf="_showPageSize">
            <app-jdb-plg-select (ngModelChange)="dataChange(false,$event)" [jdbSize]="'small'" [jdbWidth]="_jdbSelectWidth" [(ngModel)]="_pageSize" [jdbSelectList]="_options"></app-jdb-plg-select>
        </div>
        <!-- 基本分页样式 -->
        <ul *ngIf="!_jdbSimple" class="base-pagination">
            <!-- 上一页按钮 -->
            <li class="jdb-plg-pagination-prev" title="上一页" [ngClass]="{'disabled':_current===_firstIndex}" (click)="dataChange(true,_current-1,$event)">
                <span class="jdbIcon icon-pagination-prev"></span>
            </li>
            <!-- 首页按钮 -->
            <li class="jdb-plg-pagination-first" title="首页" [ngClass]="{'active':_current===_firstIndex}" (click)="dataChange(true,_firstIndex,$event)">
                {{_firstIndex}}
            </li>
            <!-- 省略号 -->
            <li class="jdb-plg-pagination-forward" *ngIf="(_lastIndex >9)&&(_current-4>_firstIndex)" (click)="jumpBefore($event,_pageSize)">
                <span class="icon-pagination-more"></span>
                <span class="icon-pagination-jump-prev"></span>
            </li>
            <!-- 按钮 -->
            <li class="jdb-plg-pagination-pager" *ngFor="let page of pages" [ngClass]="{'active':_current===page.index}" (click)="dataChange(true,page.index,$event)">
                {{page.index}}
            </li>
            <!-- 省略号 -->
            <li class="jdb-plg-pagination-backward" *ngIf="(_lastIndex >9)&&(_current+4<_lastIndex)" (click)="jumpAfter($event,_pageSize)">
                <span class="icon-pagination-more"></span>
                <span class="icon-pagination-jump-next"></span>
            </li>
            <!-- 尾页按钮 -->
            <li class="jdb-plg-pagination-last" *ngIf="(_lastIndex>0)&&(_lastIndex!==_firstIndex)" title="尾页" [ngClass]="{'active':_current===_lastIndex}" (click)="dataChange(true,_lastIndex,$event)">
                {{_lastIndex}}
            </li>
            <!-- 下一页按钮 -->
            <li class="jdb-plg-pagination-next" title="下一页" [ngClass]="{'disabled':_current===_lastIndex}" (click)="dataChange(true,_current+1,$event)">
                <span class="jdbIcon icon-pagination-next"></span>
            </li>
        </ul>
        <!-- 简单分页样式 -->
        <div class="simple-pagination" *ngIf="_jdbSimple">
            <div class="left-box">
                <span class="icon-pagination-first" [ngClass]="{'disabled':_current===_firstIndex}" (click)="dataChange(true,_firstIndex,$event)"></span>
                <span class="icon-pagination-prev" [ngClass]="{'disabled':_current===_firstIndex}" (click)="dataChange(true,_current-1,$event)"></span>
            </div>
            <div class="center-box">
                {{_current}} / {{_lastIndex}}
            </div>
            <div class="right-box">
                <span class="icon-pagination-next" [ngClass]="{'disabled':_current===_lastIndex}" (click)="dataChange(true,_current+1,$event)"></span>
                <span class="icon-pagination-last" [ngClass]="{'disabled':_current===_lastIndex}" (click)="dataChange(true,_lastIndex,$event)"></span>
            </div>
        </div>
        <!-- 快速跳转 -->
        <div *ngIf="_showQuickJump" class="quick-jumper">
            第
            <input #inputJump type="text" [(ngModel)]="quickJumpPage" (keyup.enter)="quickJump()" appOnlyNumber="true"> 页
            <button (click)="quickJump()">跳转</button>
        </div>
    </div>
</div>`,
            },] },
];
/** @nocollapse */
JdbPlgPaginationComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JdbPlgButtonComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._prefixCls = 'jdb-plg-btn';
        this._el = this._elementRef.nativeElement;
        this.nativeElement = this._elementRef.nativeElement;
        this._renderer.addClass(this._el, this._prefixCls);
    }
    /**
     * @return {?}
     */
    get jdbSize() {
        return this.size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbSize(value) {
        if (!value) {
            value = 'default';
        }
        this.size = value;
        // this._renderer.addClass(this._el, this.size);
        this._setClassMap(this.loading);
    }
    /**
     * @return {?}
     */
    get jdbType() {
        return this.type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbType(value) {
        if (!value) {
            value = 'primary';
        }
        this.type = value;
        // this._renderer.addClass(this._el, this.type);
        this._setClassMap(this.loading);
    }
    /**
     * @return {?}
     */
    get jdbLoading() {
        return this.loading;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbLoading(value) {
        value = value === '' || (value && value !== 'false');
        this.loading = value;
        this._setClassMap(this.loading);
    }
    /**
     * @param {?} loading
     * @return {?}
     */
    _setClassMap(loading) {
        this._renderer.removeClass(this._el, 'undefined');
        this._renderer.addClass(this._el, this.size);
        this._renderer.addClass(this._el, this.type);
        if (loading) {
            this._renderer.addClass(this._el, 'loading_disable');
        }
        else {
            this._renderer.removeClass(this._el, 'loading_disable');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
JdbPlgButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'button[app-jdb-plg-button]',
                template: `<i class="jdb-icon-loading action" *ngIf="loading"></i> <ng-content></ng-content>`
            },] },
];
/** @nocollapse */
JdbPlgButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
JdbPlgButtonComponent.propDecorators = {
    jdbSize: [{ type: Input }],
    jdbType: [{ type: Input }],
    jdbLoading: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JdbPlgDialogComponent {
    /**
     * @param {?} resolver
     */
    constructor(resolver) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set Mvisible(value) {
        /** @type {?} */
        const visible = this.toBoolean(value);
        if (this._visible === visible) {
            return;
        }
        this._visible = visible;
        this.MvisibileChange.emit(this._visible);
    }
    /**
     * @return {?}
     */
    get Mvisible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set MfooterHiden(value) {
        /** @type {?} */
        const visible = this.toBoolean(value);
        if (this._visible === visible) {
            return;
        }
        this._footerHide = visible;
    }
    /**
     * @return {?}
     */
    get MfooterHiden() {
        return this._footerHide;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Mtitle(value) {
        if (value instanceof TemplateRef) {
            this._titleTpl = value;
        }
        else {
            this._title = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Mcontent(value) {
        if (value instanceof TemplateRef) {
            this._contentTpl = value;
        }
        else {
            this._content = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Mfooter(value) {
        if (value instanceof TemplateRef) {
            this._footerTpl = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Mwidth(value) {
        this._width = typeof value === 'number' ? value + 'px' : value;
    }
    /**
     * @return {?}
     */
    setStyle() {
        /** @type {?} */
        const el = this.contentEl.nativeElement;
        this._bodyStyleMap = Object.assign({ width: this._width });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onEsc(e) {
        this.clickCancel(e);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Mclass(value) {
        this._customClass = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set MOkText(value) {
        this._okText = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set McancelText(value) {
        this._cancelText = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set MRogerText(value) {
        this._isConfirm = true;
        this._RogerText = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setStyle();
    }
    /**
     * @param {?} component
     * @return {?}
     */
    createDynamicComponent(component) {
        /** @type {?} */
        const factory = this.resolver.resolveComponentFactory(/** @type {?} */ (this._content));
        this.bodyEl.createComponent(factory);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this._visible) {
            this._state = 'showM';
            setTimeout(() => {
                this.contentEl.nativeElement.parentNode.focus();
            }, 200);
        }
        else {
            this._state = 'hideM';
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    clickCancel(e) {
        this._visible = false;
        this._state = 'hideM';
        this.MOnCancel.emit(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    clickOk(e) {
        if (this.MOnOk) {
            this.MOnOk.emit(e);
        }
        else {
            this._visible = false;
            this._state = 'hideM';
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    closeModal(e) {
        if ((/** @type {?} */ (e.target)).getAttribute('role') === 'dialog') {
            this.clickCancel(e);
            this._state = 'hideM';
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toBoolean(value) {
        return value === '' || (value && value !== false);
    }
}
JdbPlgDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-jdb-plg-dialog',
                template: `<div [ngClass]="_customClass"> <div class="_maskClass" [ngClass]="{'hid':!_visible}" [style.zIndex]="1000"></div> <div class="jdb-modal" tabindex="-1" role="dialog" [ngClass]="{'hid':!_visible}" [ngStyle]="{'dispaly':!_visible}" (click)="closeModal($event)" class="_wrapClass" [ngClass]="_wrapClass" [style.zIndex]="1000" [attr.aria-modalId]="modalId"> <div #modal_content class="modal" [@optionsState]="_state" [ngStyle]="_bodyStyleMap"> <div class="modal-content"> <ng-template [ngIf]="_closeable"> <button class="modal-close" (click)="clickCancel($event)"> <!-- <span class="modal-close-x"></span> --> <span class="icon-close"></span> </button> </ng-template> <div class="modal-header" *ngIf="_title||_titleTpl"> <div class="modal-title" [attr.id]="modalId"> <ng-template #defaultTitle> {{_title}} </ng-template> <ng-template [ngTemplateOutlet]="_titleTpl||defaultTitle"> </ng-template> </div> </div> <div class="modal-body"> <ng-template #defaultContent>{{_content}}</ng-template> <ng-template [ngTemplateOutlet]="_contentTpl||defaultContent"></ng-template> <ng-template #modal_component></ng-template> </div> <div class="modal-footer" *ngIf="!_footerHide"> <ng-template #defalutFooter> <button *ngIf="!_isConfirm" app-jdb-plg-button [jdbSize]="'default'" [jdbType]="'white'" (click)="clickCancel($event)"><span>{{_cancelText||'取消'}}</span></button> <button *ngIf="!_isConfirm" class="right-btn" app-jdb-plg-button [jdbSize]="'default'" [jdbType]="'primary'" (click)="clickOk($event)"><span>{{_okText||'确认'}}</span></button> <button *ngIf="_isConfirm" class="right-btn" app-jdb-plg-button [jdbSize]="'default'" [jdbType]="'primary'" (click)="clickOk($event)" (click)="clickOk($event)"><span>{{_RogerText}}</span></button> </ng-template> <ng-template [ngTemplateOutlet]="_footerTpl||defalutFooter"></ng-template> </div> <div tabindex="0" style="width:0px;height:0px;overflow:hidden;">aaa</div> </div> </div> </div> </div>`,
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
JdbPlgDialogComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JdbPlgNewDialogComponent {
    /**
     * @param {?} resolver
     * @param {?} renderer
     */
    constructor(resolver, renderer) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set visible(value) {
        this._visible = value;
        //控制切入和切出动画
        if (this._visible) {
            this._state = 'showM';
        }
        else {
            this._state = 'hideM';
        }
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set _width(value) {
        this._bodyStyleMap = {
            width: value
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //判断_contentTpl是不是组件实例
        if (this._contentTpl instanceof Type) {
            this.createDynamicComponent(/** @type {?} */ (this._contentTpl));
        }
        else {
            this.createDynamicDom();
        }
    }
    /**
     * @return {?}
     */
    createDynamicDom() {
        /** @type {?} */
        let insertDiv = this.renderer.createElement('div');
        /** @type {?} */
        let text = this.renderer.createText(this._text);
        this.renderer.addClass(insertDiv, this._class);
        this.renderer.appendChild(insertDiv, text);
        if (this._style) {
            for (let key in this._style) {
                this.renderer.setStyle(insertDiv, key, this._style[key]);
            }
        }
        this.renderer.appendChild(document.querySelector('._modalTextBody'), insertDiv);
    }
    /**
     * @param {?} component
     * @return {?}
     */
    createDynamicComponent(component) {
        /** @type {?} */
        const factory = this.resolver.resolveComponentFactory(component);
        //生成组件实例
        this.contentComponentRef = this.bodyEl.createComponent(factory);
        //模板的输入属性
        for (let key in this._componentParams) {
            this.contentComponentRef.instance[key] = this._componentParams[key];
        }
        //立刻执行一次变更检测
        this.contentComponentRef.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        //动态组件实例存在 插入到视图容器中
        if (this.contentComponentRef) {
            this.bodyEl.insert(this.contentComponentRef.hostView);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    closeModel(e) {
        this.onClose.emit(e);
        this._state = 'hideM';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    confirmModel(e) {
        this.onOk.emit(e);
        this._state = 'hideM';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    cancelModel(e) {
        this.onCancel.emit(e);
        this._state = 'hideM';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    cusCloseModal(e) {
        /** @type {?} */
        let flag = this.isChildOf(e.target, this.contentEl.nativeElement);
        if (this._closeType === 'mask' && !flag) {
            this.onClose.emit(e);
            this._state = 'hideM';
        }
    }
    /**
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    isChildOf(child, parent) {
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
    }
}
JdbPlgNewDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-jdb-plg-new-dialog',
                template: `<div [ngClass]="_customClass"> <div class="_newMaskClass" [ngClass]="{'hid':!_visible}" [style.zIndex]="900"></div> <div class="jdb-modal" tabindex="-1" role="dialog" [ngClass]="{'hid':!_visible}" [ngStyle]="{'dispaly':!_visible}" (click)="cusCloseModal($event)" class="_newWrapClass" [ngClass]="_newWrapClass" [style.zIndex]="900"> <div #modal_content class="new-modal" [@optionsState]="_state" [ngStyle]="_bodyStyleMap"> <div class="modal-content"> <ng-template [ngIf]="_closeable"> <button class="new-modal-close" style="outline: none" (click)="closeModel($event)"> <span class="icon-close"></span> </button> </ng-template> <div class="new-modal-header" *ngIf="_title"> <div class="new-modal-title" [attr.id]="modalId">{{_title}}</div> </div> <div class="new-modal-body _modalTextBody"> <ng-template #modal_component></ng-template> <ng-template #modal_text></ng-template> </div> <div class="new-modal-footer" *ngIf="_footer"> <button *ngIf="!_isConfirm" app-jdb-plg-button [jdbSize]="'default'" [jdbType]="'gray'" (click)="cancelModel($event)"><span>{{_cancelText}}</span></button> <button *ngIf="!_isConfirm" class="right-btn" app-jdb-plg-button [jdbSize]="'default'" [jdbType]="'primary'" (click)="confirmModel($event)"><span>{{_okText}}</span></button> <button *ngIf="_isConfirm" class="right-btn confirm-btn" app-jdb-plg-button [jdbSize]="'default'" [jdbType]="'primary'" (click)="confirmModel($event)"><span>{{_okText}}</span></button> </div> </div> </div> </div> </div>`,
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
JdbPlgNewDialogComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Renderer2 }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class OnlyNumberDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.regexStr = '^[0-9]*$';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const e = /** @type {?} */ (event);
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
            const ch = String.fromCharCode(e.keyCode);
            /** @type {?} */
            const regEx = new RegExp(this.regexStr);
            if (regEx.test(ch)) {
                return;
            }
            else {
                e.preventDefault();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp(event) {
        this.el.nativeElement.value = this.el.nativeElement.value.replace(/\D/g, '');
    }
}
OnlyNumberDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appOnlyNumber]'
            },] },
];
/** @nocollapse */
OnlyNumberDirective.ctorParameters = () => [
    { type: ElementRef }
];
OnlyNumberDirective.propDecorators = {
    appOnlyNumber: [{ type: Input }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class WatermarkDirective {
    /**
     * @param {?} el
     * @param {?} render
     */
    constructor(el, render) {
        this.el = el;
        this.render = render;
        this.draw$ = WatermarkDirective.drawSubject.asObservable();
    }
    /**
     * \@method 设置水印渲染的文案。
     * @param {?} callback 该参数为一个函数或字符串，该参数为函数时用户自定义生成文案的过程，这个回调函数最后应返回字符串，因为这个字符串将被渲染成水印。
     * 若该参数为字符串，则传入的字符串就是渲染的水印文案
     * @return {?}
     */
    static setText(callback) {
        if (typeof callback === 'string') {
            WatermarkDirective._text = callback;
        }
        else {
            WatermarkDirective._text = callback();
        }
        WatermarkDirective.drawSubject.next(true);
    }
    /**
     * \@method 通过canvas渲染水印背景，然后设置到指令绑定的元素的背景，然后背景默认重复。
     * @return {?}
     */
    draw() {
        // const name = localStorage.getItem('cxNickName') || '';
        // const phone = localStorage.getItem('cxPhone') || '';
        // const str = `CXWEB-${name}${phone.slice(-4)}`;
        if (WatermarkDirective._text) {
            /** @type {?} */
            const node = document.createElement('canvas');
            node.width = 500;
            node.height = 200;
            node.style.display = 'none';
            /** @type {?} */
            const ctx = node.getContext('2d');
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
            this.render.setStyle(this.el.nativeElement, 'backgroundImage', `url(${node.toDataURL('image/png')})`);
        }
        // this.render.setStyle(this.el.nativeElement, 'background', `red`);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.draw$.subscribe(() => {
            this.draw();
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.draw(); // 调用渲染水印方法
    }
}
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
WatermarkDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JdbPlgSelectComponent {
    /**
     * @param {?} renderer2
     * @param {?} renderer
     */
    constructor(renderer2, renderer) {
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
        this.onChange = () => null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbItemDisabled(value) {
        this._jdbItemDisabled = value;
    }
    /**
     * @return {?}
     */
    get jdbItemDisabled() {
        return this._jdbItemDisabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbError(value) {
        this._jdbError = this.toBoolean(value);
    }
    /**
     * @return {?}
     */
    get jdbError() {
        return this._jdbError;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbSureDisabled(value) {
        this._jdbSureDisabled = value;
    }
    /**
     * @return {?}
     */
    get jdbSureDisabled() {
        return this._jdbSureDisabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbPlaceHolder(value) {
        this._placeHolder = value;
    }
    /**
     * @return {?}
     */
    get jdbPlaceHolder() {
        return this._placeHolder;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbClear(value) {
        this._jdbClear = this.toBoolean(value);
    }
    /**
     * @return {?}
     */
    get jdbClear() {
        return this._jdbClear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbSelectList(value) {
        // 循环数组，判断是否需要展示带有图片下拉框
        if (value) {
            /** @type {?} */
            const arr = [];
            value.forEach((element) => {
                /** @type {?} */
                const type = typeof element;
                if (type === 'string' || type === 'number') {
                    arr.push({
                        text: element,
                        value: element
                    });
                }
                else {
                    arr.push(element);
                    if (element.imgUrl) {
                        this._showImgBox = true;
                    }
                }
            });
            this._selectList = arr;
        }
    }
    /**
     * @return {?}
     */
    get jdbSelectList() {
        return this._selectList;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbSize(value) {
        this._size = value;
    }
    /**
     * @return {?}
     */
    get jdbSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbWidth(value) {
        this._width = value;
    }
    /**
     * @return {?}
     */
    get jdbWidth() {
        return this._width;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbOptionText(value) {
        this._optionText = value;
    }
    /**
     * @return {?}
     */
    get jdbOptionText() {
        return this._optionText;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbOptionValue(value) {
        this._optionValue = value;
    }
    /**
     * @return {?}
     */
    get jdbOptionValue() {
        return this._optionValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbDisabled(value) {
        this._jdbDisabled = this.toBoolean(value);
    }
    /**
     * @return {?}
     */
    get jdbDisabled() {
        return this._jdbDisabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbMode(value) {
        this._jdbMode = value;
    }
    /**
     * @return {?}
     */
    get jdbMode() {
        return this._jdbMode;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // 点击除下拉框以外位置，下拉框隐藏
        this.renderer2.listen('document', 'click', () => {
            this.show = false;
            this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
        });
        // 监听输入框元素，若有内容时则滑上显示x
        this.renderer2.listen(this.inputDom.nativeElement, 'mouseenter', () => {
            if (this._jdbClear && !this._jdbDisabled) {
                // 若输入框不存在内容，则不做任何操作
                if (this._jdbMode === 'chooseOne' && (this.inputText === '' || this.show)) {
                    return;
                }
                else if (this._jdbMode === 'chooseNum' && (this.inputText === 0 || this.show)) {
                    return;
                }
                else if (this._jdbMode === 'chooseMore' && (this.inputText.length === 0 || this.show)) {
                    return;
                }
                this.isShowClear = true;
                this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
            }
        });
        this.renderer2.listen(this.inputDom.nativeElement, 'mouseleave', () => {
            if (this._jdbClear && !this._jdbDisabled) {
                // 若输入框不存在内容，则不做任何操作
                if (this._jdbMode === 'chooseOne' && (this.inputText === '' || this.show)) {
                    return;
                }
                else if (this._jdbMode === 'chooseNum' && (this.inputText === 0 || this.show)) {
                    return;
                }
                else if (this._jdbMode === 'chooseMore' && (this.inputText.length === 0 || this.show)) {
                    return;
                }
                this.isShowClear = false;
                this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
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
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
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
    }
    /**
     * @return {?}
     */
    setClassMap() {
        if (this._jdbMode === 'chooseMore') {
            this._classMap = {
                [`${this._size}`]: true,
                [`jdb-plg-select-bottom-${this._size}`]: this.inputText.length !== 0,
                ['jdb-plg-select-disabled']: this._jdbDisabled,
                [this.jdbClassName]: true,
                ['jdb-plg-select-error']: this._jdbError // 输入项报错标红
            };
        }
        else {
            this._classMap = {
                [`${this._size}`]: true,
                ['jdb-plg-select-disabled']: this._jdbDisabled,
                [this.jdbClassName]: true,
                ['jdb-plg-select-error']: this._jdbError // 输入项报错标红
            };
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    clearInputText(e) {
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
    }
    /**
     * @param {?} e
     * @return {?}
     */
    dialogShow(e) {
        e.stopPropagation();
        // 若外侧组件告知禁用，则点击没有任何效果
        if (this._jdbDisabled) {
            return;
        }
        this.isShowClear = false;
        this.show = !this.show;
        this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
        this.optionPosition(this.optionList.nativeElement.clientHeight);
    }
    /**
     * @param {?} listHeight
     * @return {?}
     */
    optionPosition(listHeight) {
        /** @type {?} */
        const offetTop = this.getTop(this.inputDom.nativeElement);
        /** @type {?} */
        const scrollTop = this.getScrollTop(this.inputDom.nativeElement.parentElement);
        /** @type {?} */
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        /** @type {?} */
        const elemHeight = this.inputDom.nativeElement.clientHeight;
        /** @type {?} */
        let paddingHeight;
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
        const flexHeight = clientHeight - offetTop - elemHeight - paddingHeight + scrollTop; // 剩余高度
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
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
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) { }
    /**
     * @param {?} value
     * @return {?}
     */
    forOneStart(value) {
        this._selectList.forEach((elem) => {
            if (elem[this._optionValue] === value) {
                this.inputText = elem[this._optionText];
            }
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    forMoreStart(value) {
        // 判断传入值类型 老版本为string,新版本为数组，兼容新老版本
        if (typeof value === 'string') {
            value = value.toString().split(',');
        }
        value.forEach((item) => {
            this._selectList.forEach((elem) => {
                if (elem[this._optionValue] === item) {
                    /** @type {?} */
                    let textName = this._optionText;
                    /** @type {?} */
                    let valueName = this._optionValue;
                    if (this.jdbOptionText) {
                        textName = this.jdbOptionText;
                    }
                    if (this.jdbOptionValue) {
                        valueName = this.jdbOptionValue;
                    }
                    /** @type {?} */
                    const obj = {};
                    obj[textName] = elem[this._optionText];
                    obj[valueName] = elem[this._optionValue];
                    this.inputText.push(obj);
                    // this._chooseMoreArray为传出去的数据
                    this._chooseMoreArray.push(elem[this._optionValue]);
                    return;
                }
            });
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    forNumStart(value) {
        // 判断传入值类型 老版本为string,新版本为数组，兼容新老版本
        if (typeof value === 'string') {
            value = value.toString().split(',');
        }
        value.forEach((item) => {
            this._selectList.forEach((elem) => {
                if (elem[this._optionValue] === item) {
                    this.inputText++;
                    this._chooseMoreArray.push(elem[this._optionValue]);
                    return;
                }
            });
        });
    }
    /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    item(e, item) {
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
    }
    /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    chooseMore(e, item) {
        /** @type {?} */
        let flag = false;
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
        this.inputText.forEach((element, index) => {
            if (element[this._optionValue] === item[this._optionValue]) {
                flag = true;
                return;
            }
        });
        if (flag) {
            this.deleteMoreItem(e, item);
            return;
        }
        /** @type {?} */
        let textName = this._optionText;
        /** @type {?} */
        let valueName = this._optionValue;
        if (this.jdbOptionText) {
            textName = this.jdbOptionText;
        }
        if (this.jdbOptionValue) {
            valueName = this.jdbOptionValue;
        }
        /** @type {?} */
        const obj = {};
        obj[textName] = item[this._optionText];
        obj[valueName] = item[this._optionValue];
        this.inputText.push(obj);
        // this._chooseMoreArray为传出去的数据
        this._chooseMoreArray.push(item[this._optionValue]);
        this.ngModelValue = this._chooseMoreArray; // 传出数据格式为数组
        this.onChange(this._chooseMoreArray);
        this.show = true;
        this.setClassMap();
    }
    /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    numClick(e, item) {
        /** @type {?} */
        let flag = false;
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
        this._chooseMoreArray.forEach((element, index) => {
            if (element === item[this._optionValue]) {
                flag = true;
                this._chooseMoreArray.splice(index, 1);
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
    }
    /**
     * @param {?} item
     * @return {?}
     */
    moreIndex(item) {
        /** @type {?} */
        let flag = false;
        this._chooseMoreArray.forEach((element, index) => {
            if (element === item[this._optionValue]) {
                flag = true;
                return;
            }
        });
        return flag;
    }
    /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    deleteMoreItem(e, item) {
        e.stopPropagation();
        if (this._jdbDisabled) {
            return;
        }
        this.inputText.forEach((element, index) => {
            if (element[this._optionValue] === item[this._optionValue]) {
                this.inputText.splice(index, 1);
                return;
            }
        });
        this._chooseMoreArray.forEach((element, index) => {
            if (element === item[this._optionValue]) {
                this._chooseMoreArray.splice(index, 1);
                return;
            }
        });
        this.ngModelValue = this._chooseMoreArray; // 传出格式为数组
        this.onChange(this._chooseMoreArray);
        this.setClassMap();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toBoolean(value) {
        return value === '' || (value && value !== 'false');
    }
    /**
     * @param {?} e
     * @return {?}
     */
    getTop(e) {
        /** @type {?} */
        let offset = e.offsetTop;
        if (e.offsetParent != null) {
            offset += this.getTop(e.offsetParent);
        }
        return offset;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    getScrollTop(e) {
        /** @type {?} */
        let offset = e.scrollTop;
        if (e.parentElement != null) {
            offset += this.getScrollTop(e.parentElement);
        }
        return offset;
    }
}
JdbPlgSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-jdb-plg-select',
                template: `<!-- 单选 --> <div *ngIf="_jdbMode=='chooseOne'" #inputDom class="jdb-plg-select-one" (click)="dialogShow($event)" [ngClass]="_classMap" [ngStyle]="{'width':_width}"> <!-- placeHolder --> <div class="jdb-plg-select-placeholder" [hidden]="inputText!==''">{{_placeHolder}}</div> <!-- 单选 --> <!-- <span class="chooseOne" [hidden]="inputText==''">{{inputText}}</span> --> <input class="chooseOne chooseOneInput" [hidden]="inputText===''" type="text" [(ngModel)]="inputText" readonly> <ul #optionList [ngClass]="{ 'options-show':show, 'options-no-margin':!spaceFlex} " class="options "> <!-- 单选 --> <li *ngFor="let option of _selectList " (click)="item($event,option) " [ngClass]="{active:ngModelValue===option[_optionValue],disabled:option[_jdbItemDisabled] === _jdbSureDisabled} "> <img class="img-box" *ngIf="_showImgBox&&option.imgUrl" [src]="option.imgUrl" alt=""> <span class="img-box" *ngIf="_showImgBox&&!option.imgUrl"></span> <span class="text-box">{{_optionText=='option'?option:option[_optionText]}}</span> </li> </ul> <!-- 清空图标 --> <span class="close-icon icon-empty " [hidden]="!isShowClear " (click)="clearInputText($event) "></span> <!-- 单选时下拉图标 --> <span class="select-icon icon-select-arrow " [hidden]="isShowClear "></span> </div> <!-- 多选 --> <div *ngIf="_jdbMode=='chooseMore' " #inputDom class="jdb-plg-select-more " (click)="dialogShow($event) " [ngClass]="_classMap " [ngStyle]="{ 'width':_width} "> <!-- placeHolder --> <div class="jdb-plg-select-placeholder " [hidden]="inputText.length !=0 ">{{_placeHolder}}</div> <!-- 多选item --> <ul class="chooseMore "> <li *ngFor="let item of inputText "> {{item[_optionText]}} <span class="item-delete icon-close " (click)="deleteMoreItem($event,item) "></span> </li> </ul> <ul #optionList [ngClass]="{ 'options-show':show, 'options-no-margin':!spaceFlex} " class="options "> <li class="choose-more " *ngFor="let option of _selectList " (click)="chooseMore($event,option) " [ngClass]="{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} "> <!-- {{_optionText=='option'?option:option[_optionText]}} --> <img class="img-box" *ngIf="_showImgBox&&option.imgUrl" [src]="option.imgUrl" alt=""> <span class="img-box" *ngIf="_showImgBox&&!option.imgUrl"></span> <span class="text-box">{{_optionText=='option'?option:option[_optionText]}}</span> <span [hidden]="!moreIndex(option) " class="choose-right icon-selected "></span> </li> </ul> <!-- 清空图标 --> <span class="close-icon icon-empty " [hidden]="!isShowClear " (click)="clearInputText($event) "></span> </div> <!-- 选中几项 --> <div *ngIf="_jdbMode=='chooseNum' " #inputDom class="jdb-plg-select-num " (click)="dialogShow($event) " [ngClass]="_classMap " [ngStyle]="{ 'width':_width} "> <!-- placeHolder --> <div class="jdb-plg-select-placeholder " [hidden]="inputText!==0 ">{{_placeHolder}}</div> <span class="choose-tip " [hidden]="inputText===0 ">已选中{{inputText}}项</span> <ul #optionList [ngClass]="{ 'options-show':show, 'options-no-margin':!spaceFlex} " class="options "> <li class="choose-more " *ngFor="let option of _selectList " (click)="numClick($event,option) " [ngClass]="{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} "> <!-- {{_optionText=='option'?option:option[_optionText]}} --> <img class="img-box" *ngIf="_showImgBox&&option.imgUrl" [src]="option.imgUrl" alt=""> <span class="img-box" *ngIf="_showImgBox&&!option.imgUrl"></span> <span class="text-box">{{_optionText=='option'?option:option[_optionText]}}</span> <span [hidden]="!moreIndex(option) " class="choose-right icon-selected "></span> </li> </ul> <!-- 清空图标 --> <span class="close-icon icon-empty " [hidden]="!isShowClear " (click)="clearInputText($event) "></span> <span class="select-icon icon-select-arrow " [hidden]="isShowClear "></span> </div> <!-- 遮罩层 --> <div class="jdb-plg-select-master " *ngIf="show "></div>`,
                // styleUrls: ['./jdb-plg-select.component.scss'],
                providers: [
                    {
                        // 注册成为表单控件
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => JdbPlgSelectComponent),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
JdbPlgSelectComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: Renderer }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JdbPlgInputComponent {
    /**
     * @param {?} render
     */
    constructor(render) {
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
        this.onChange = () => null;
        this.jdbBlur = new EventEmitter();
        this.jdbFocus = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this._inputWrapClass =[`input-text-wrap-${this._size}`];
        if (this._prefixContent) {
            this._inputWrapClass.push('prefix');
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.clearBtnEl) {
            this.render.setStyle(this.clearBtnEl.nativeElement, 'top', this.inputEl.nativeElement.height / 2);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    compositionStart(e) {
        this._composing = true;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    compositionEnd(e) {
        this._composing = false;
        this.onChange(this._value);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set jdbType(type) {
        this._type = type;
    }
    /**
     * @return {?}
     */
    get jdbType() {
        return this._type;
    }
    /**
     * @param {?} placeHolder
     * @return {?}
     */
    set jdbPlaceHolder(placeHolder) {
        this._placeHolder = placeHolder;
    }
    /**
     * @return {?}
     */
    get jdbPlaceHolder() {
        return this._placeHolder;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    set jdbSize(size) {
        this._size = { large: 'lg', small: 'sm' }[size];
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get jdbSize() {
        return this._size;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    set jdbDisabled(disabled) {
        this._disabled = this.toBoolean(disabled);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get jdbDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} readonly
     * @return {?}
     */
    set jdbReadonly(readonly) {
        this._readonly = this.toBoolean(readonly);
    }
    /**
     * @return {?}
     */
    get jdbReadonly() {
        return this._readonly;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbValue(value) {
        if ((this._value === value) || ((this._value == null) && (value == null))) {
            return;
        }
        this._value = value;
        if (!this._composing) {
            this.onChange(value);
        }
    }
    /**
     * @return {?}
     */
    get jdbValue() {
        return this._value || '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbError(value) {
        this._error = this.toBoolean(value);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get jdbError() {
        return this._error;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbClear(value) {
        this._clear = this.toBoolean(value);
    }
    /**
     * @return {?}
     */
    get jdbClear() {
        return this._clear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbMaxLength(value) {
        this._maxlength = value;
    }
    /**
     * @return {?}
     */
    get jdbMaxLength() {
        return this._maxlength;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbPromptData(value) {
        this._autoPromptData = value;
    }
    /**
     * @return {?}
     */
    get jdbPromptData() {
        return this._autoPromptData;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _emitBlur($event) {
        this.jdbBlur.emit($event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _emitFocus($event) {
        this.jdbFocus.emit($event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    textareaOnChange($event) {
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this._classMap = {
            [`input-${this._type}-${this._size}`]: true,
            ['input-disabled']: this._disabled,
            ['input-error']: this._error
        };
    }
    /**
     * @param {?} e
     * @return {?}
     */
    clearTxt(e) {
        e.stopPropagation();
        this._value = '';
        this.onChange('');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toBoolean(value) {
        return value === '' || (value && value !== 'false');
    }
}
JdbPlgInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-jdb-plg-input',
                template: `<span class="input-group-addon" *ngIf="_addOnContentBefore"> <ng-template [ngTemplateOutlet]="_addOnContentBefore"> </ng-template> </span> <ng-template [ngIf]="_type=='text'"> <div class="input-text-wrap" [ngClass]="_inputWrapClass"> <span class="input-prefix" *ngIf="_prefixContent"> <ng-template [ngTemplateOutlet]="_prefixContent"> </ng-template> </span> <span class="input-content"> <input (blur)="_emitBlur($event)" (focus)="_emitFocus($event)" [disabled]="_disabled" [readonly]="_readonly" [attr.id]="jdbId" [attr.type]="_type" class="input" [ngClass]="_classMap" [attr.placeholder]="_placeHolder" [(ngModel)]="jdbValue" [style.width]="width" maxlength="{{jdbMaxLength}}" #input /> <span class="input-clear" *ngIf="_clear && _value && _type=='text'" (click)="clearTxt($event)"> <i class="close-icon icon-empty"></i> </span> </span> <span class="ant-input-suffix" *ngIf="_suffixContent"> <i class="iconfont icon-guanbi2fill"></i> <ng-template [ngTemplateOutlet]="_suffixContent"> </ng-template> </span> <div class="input-error-tip" *ngIf="jdbError && _errorContent" [style.width]="width"> <i class="icon-message-error error-tip"></i> <p class="input-error-content"> <ng-template [ngTemplateOutlet]="_errorContent"> </ng-template> </p> </div> </div> </ng-template> <span class="input-group-addon" *ngIf="_addOnContentAfter"> <ng-template [ngTemplateOutlet]="_addOnContentAfter"> </ng-template> </span> <ng-template [ngIf]="_type=='textarea'"> <div class="input-text-wrap"> <textarea (blur)="_emitBlur($event)" (focus)="_emitFocus($event)" (input)="textareaOnChange($event)" [attr.id]="jdbId" #inputTextarea [disabled]="_disabled" [readonly]="_readonly" type="textarea" class="input input-textarea" [ngClass]="_classMap" [attr.placeholder]="jdbPlaceHolder" [(ngModel)]="jdbValue" maxlength="{{jdbMaxLength}}" [style.width]="width"></textarea> <span class="textarea-wc-tip" [ngClass]="{'textarea-wc-tip-red': jdbValue&&jdbValue.length == jdbMaxLength}" *ngIf="jdbMaxLength && !_disabled &&!_readonly">{{(jdbValue&&jdbValue.length)||0}}/{{jdbMaxLength}}</span> </div> </ng-template>`,
                // styleUrls: ['./jdb-plg-input.component.scss'],
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => JdbPlgInputComponent),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
JdbPlgInputComponent.ctorParameters = () => [
    { type: Renderer2 }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const keyCode = {
    UP: 38,
    DOWN: 40,
    ENTER: 13
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JdbPlgAutocompleteComponent {
    /**
     * @param {?} el
     * @param {?} render
     */
    constructor(el, render) {
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
        this.onChange = () => null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.render.listen(this.el.nativeElement, 'input', this.debounce(() => {
            this.activeIndex = -1;
            this.inputHandle();
        }, 500, false));
        // 处理搜索框点击事件
        this.render.listen(this.el.nativeElement.querySelector('input[type="text"]'), 'click', (evt) => {
            this.activeIndex = -1;
            if (!this._searchWord) {
                this.searchResult = this.jdbDataSource;
            }
            else {
                this.searchResult = this.searchResult = this.jdbDataSource.filter((obj) => obj['text'].indexOf(this._searchWord) !== -1);
            }
            if (this.searchResult.length > 0) {
                this._listShow = true;
                setTimeout(_ => {
                    this.resetPopDirection(this.el.nativeElement);
                }, 0);
            }
            evt.stopPropagation();
        });
        // 处理关闭搜索结果
        this.render.listen('document', 'click', (evt) => {
            this._listShow = false;
        });
        this.render.listen(this.el.nativeElement.querySelector('input[type="text"]'), 'blur', () => {
            if ((this.selectOne && this._searchWord !== this.selectOne.text) || !this.selectOne) {
                this._searchWord = '';
                this.ngModelValue = '';
                this.selectOne = null;
                this.onChange('');
            }
        });
    }
    /**
     * @param {?} simples
     * @return {?}
     */
    ngOnChanges(simples) {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    OnKeyDown(event) {
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
                const item = /** @type {?} */ (this.searchResult[this.activeIndex]);
                this.selectedItem(item, this.activeIndex);
                break;
            default:
                this.activeIndex = -1;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    OnPaste(event) {
        this.inputHandle();
    }
    /**
     * @return {?}
     */
    inputHandle() {
        if (this._searchWord) {
            if (this.jdbDataAsyn) ;
            else {
                // 同步过滤处理
                this.searchResult = this.jdbDataSource.filter((obj) => obj['text'].indexOf(this._searchWord) !== -1);
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
            setTimeout(_ => {
                this.resetPopDirection(this.el.nativeElement);
            }, 0);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    closePop(event) {
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
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    setSelectClass(obj) {
        if (obj) {
            return this._searchWord === obj.text;
        }
        return;
    }
    /**
     * @return {?}
     */
    setSearchWord() {
        this.selectOne = /** @type {?} */ (this.searchResult[this.activeIndex]);
        this._searchWord = this.selectOne.text;
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    selectedItem(item, index) {
        this.activeIndex = index;
        this.selectOne = item;
        this._searchWord = item.text;
        this._listShow = false;
        this.onSelected.emit(this.selectOne.value);
        this.ngModelValue = this.selectOne.value;
        this.onChange(this.ngModelValue);
        event.stopPropagation();
    }
    /**
     * @param {?} fn
     * @param {?} wait
     * @param {?} immediate
     * @return {?}
     */
    debounce(fn, wait, immediate) {
        /** @type {?} */
        let timeout;
        /** @type {?} */
        let args;
        /** @type {?} */
        let context;
        /** @type {?} */
        let timestamp;
        /** @type {?} */
        let result;
        /** @type {?} */
        const later = function () {
            /** @type {?} */
            const last = new Date().getTime() - timestamp;
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
            const callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) {
                result = fn.apply(context, args);
                context = args = null;
            }
            return result;
        };
    }
    /**
     * @param {?} node
     * @return {?}
     */
    resetPopDirection(node) {
        /** @type {?} */
        const getOffsetTop = function (ele) {
            /** @type {?} */
            let top = ele.offsetTop;
            if (!ele.offsetParent) {
                top += getOffsetTop(ele.offsetParent);
            }
            return top;
        };
        /** @type {?} */
        const getScrollTop = function (ele) {
            /** @type {?} */
            let top = ele.scrollTop;
            if (!ele.parentElement) {
                top += getScrollTop(ele.parentElement);
            }
            return top;
        };
        /** @type {?} */
        const nodeTop = getOffsetTop(node);
        /** @type {?} */
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        /** @type {?} */
        const scrollTop = getScrollTop(node.parentElement);
        /** @type {?} */
        const popHeight = this.resultEle.nativeElement.offsetHeight || 250;
        /** @type {?} */
        const inputHeight = node.querySelector('input[type="text"]').offsetHeight;
        /** @type {?} */
        const lastDirect = clientHeight - (nodeTop - scrollTop) - popHeight - inputHeight;
        if (lastDirect <= 0) {
            this.render.addClass(this.resultEle.nativeElement, 'pop_top');
        }
        else {
            this.render.removeClass(this.resultEle.nativeElement, 'pop_top');
        }
    }
    /**
     * @return {?}
     */
    changeInput() {
        if (this._searchWord === '') {
            this.ngModelValue = '';
            this.onChange('');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbDataSource(value) {
        this._dataSource = value;
        if (!this.jdbDataAsyn && this._dataSource.length > 0) {
            if (typeof this._dataSource[0] === 'string') {
                this._dataSource = this._dataSource.map((val, index) => ({
                    value: val,
                    text: val
                }));
            }
            else if (typeof this._dataSource[0] === 'object' && (this.dataKey !== 'value' || this.dataVal !== 'text')) {
                this._dataSource = this._dataSource.map((obj, index) => ({
                    value: obj[this.dataKey],
                    text: obj[this.dataVal]
                }));
            }
            this.searchResult = this._dataSource;
        }
    }
    /**
     * @return {?}
     */
    get jdbDataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set jdbSearchParam(val) {
        this._searchParam = val;
    }
    /**
     * @return {?}
     */
    get jdbSearchParam() {
        return this._searchParam;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set jdbServerApi(val) {
        this._serverApi = val;
    }
    /**
     * @return {?}
     */
    get jdbServerApi() {
        return this._serverApi;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.ngModelValue = value;
        if (this.ngModelValue === '') {
            this._searchWord = '';
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
    }
}
JdbPlgAutocompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-jdb-plg-autocomplete',
                template: `<div class="autoprompt"> <app-jdb-plg-input [jdbType]="'text'" [jdbPlaceHolder]="jdbPlaceHolder" [jdbClear]="true" [(ngModel)]="_searchWord" [width]="width" (ngModelChange)="changeInput()"> </app-jdb-plg-input> <ul #resultele [hidden]="!_listShow" [style.width]="width"> <li *ngFor="let item of searchResult;index as i" [ngClass]="{'selected': activeIndex == i}" (click)="selectedItem(item,i)"> <p> {{item.text}} </p> </li> </ul> </div> <!-- <div class="autoprompt-mask" [hidden]="!_listShow" (click)="closePop($event)"></div> -->`,
                // styleUrls: ['./jdb-plg-autocomplete.component.scss'],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => JdbPlgAutocompleteComponent),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
JdbPlgAutocompleteComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CommonMethodService {
    /**
     * @param {?} componentFactoryResolver
     */
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @param {?} number
     * @return {?}
     */
    testPhoneNumber(number) {
        /** @type {?} */
        const phoneReg = /^[1][0-9]{10}$/;
        return phoneReg.test(number);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    testName(name) {
        /** @type {?} */
        const nameReg = /^[\u4E00-\u9FA5·]{2,20}$/;
        return nameReg.test(name);
    }
    /**
     * @param {?} num
     * @return {?}
     */
    testRepayAmount(num) {
        /** @type {?} */
        const nameReg = /^([1-9][0-9]{2,9}|10000000000)$/;
        return nameReg.test(num);
    }
    /**
     * @param {?} num
     * @return {?}
     */
    numFormat(num) {
        num = num / 100;
        return num.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
    }
    /**
     * \@method 将'yyyy-MM-dd~yyyy-MM-dd'格式，转化为startTime、endTime（10位时间戳）
     * @param {?} value 'yyyy-MM-dd~yyyy-MM-dd'格式字符串
     * @return {?}
     */
    toTimestamp(value) {
        /** @type {?} */
        const timeObj = {};
        if (value) {
            /** @type {?} */
            const arrDate = value.split('~');
            timeObj['startTime'] = new Date(arrDate[0]).getTime() / 1000;
            timeObj['endTime'] = new Date(arrDate[1]).getTime() / 1000;
        }
        else {
            timeObj['startTime'] = '';
            timeObj['endTime'] = '';
        }
        return timeObj;
    }
    /**
     * @param {?} time
     * @param {?=} type
     * @return {?}
     */
    toDate(time, type = 1) {
        /** @type {?} */
        const myDate = new Date(time * 1000);
        /** @type {?} */
        const year = myDate.getFullYear();
        /** @type {?} */
        const month = this.add0(myDate.getMonth() + 1);
        /** @type {?} */
        const day = this.add0(myDate.getDate());
        /** @type {?} */
        const hour = this.add0(myDate.getHours());
        /** @type {?} */
        const minute = this.add0(myDate.getMinutes());
        /** @type {?} */
        const second = this.add0(myDate.getSeconds());
        switch (type) {
            case 1:
                return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
            case 2:
                return `${year}-${month}-${day} ${hour}:${minute}`;
            case 3:
                return `${year}-${month}-${day}`;
            case 4:
                return `${year}-${month}`;
            case 5:
                return `${year}`;
        }
    }
    /**
     * @param {?} m
     * @return {?}
     */
    add0(m) {
        return m < 10 ? `0${+m}` : m;
    }
    /**
     * @param {?=} n
     * @param {?=} joinStr
     * @param {?=} isTimeStamp
     * @return {?}
     */
    getTarDate(n = 0, joinStr = '-', isTimeStamp = true) {
        /** @type {?} */
        let date = new Date();
        /** @type {?} */
        let tarYear;
        /** @type {?} */
        let tarMonth;
        /** @type {?} */
        let tarDay;
        /** @type {?} */
        let curYear;
        /** @type {?} */
        let curMonth;
        /** @type {?} */
        let curDay;
        /** @type {?} */
        let curDate;
        /** @type {?} */
        let tarDate;
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
            let reg = new RegExp(joinStr, "g");
            curDate = curDate.replace(reg, '-');
            tarDate = tarDate.replace(reg, '-');
        }
        return n === 0 ? [new Date(curDate + ' 00:00:00').getTime()] : [new Date(curDate + ' 00:00:00').getTime(), new Date(tarDate + ' 23:59:59').getTime()];
    }
    /**
     * @param {?} vRef
     * @return {?}
     */
    setRootViewContainerRef(vRef) {
        this.vRef = vRef;
    }
    /**
     * @param {?} msg
     * @param {?=} delayTime
     * @return {?}
     */
    toast(msg, delayTime = 3000) {
        /** @type {?} */
        const childComponent = this.componentFactoryResolver.resolveComponentFactory(JdbPlgToastComponent);
        /** @type {?} */
        const comInstance = this.vRef.createComponent(childComponent);
        comInstance.instance.msg = msg;
        comInstance.changeDetectorRef.detectChanges();
        setTimeout(() => {
            comInstance.destroy();
        }, delayTime);
    }
    /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    accMul(arg1, arg2) {
        /** @type {?} */
        let m = 0;
        /** @type {?} */
        let s1 = arg1.toString();
        /** @type {?} */
        let s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length;
        }
        catch (e) { }
        try {
            m += s2.split(".")[1].length;
        }
        catch (e) { }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    }
    /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    accDiv(arg1, arg2) {
        /** @type {?} */
        let t1 = 0;
        /** @type {?} */
        let t2 = 0;
        /** @type {?} */
        let r1;
        /** @type {?} */
        let r2;
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
    }
    /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    accAdd(arg1, arg2) {
        /** @type {?} */
        let r1;
        /** @type {?} */
        let r2;
        /** @type {?} */
        let m;
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
    }
    /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    accSubtr(arg1, arg2) {
        /** @type {?} */
        let r1;
        /** @type {?} */
        let r2;
        /** @type {?} */
        let m;
        /** @type {?} */
        let n;
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
    }
}
CommonMethodService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CommonMethodService.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];

Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs-compat/add/observable/throw");

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
            toSerialize.forEach((value, index) => {
                serialize(value, prefix + '[' + (isObject(value) ? index : '') + ']');
            });
        }
        else if (isObject(toSerialize) && !isDate(toSerialize)) {
            for (let key in toSerialize) {
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
const hasOwnProperty = Object.prototype.hasOwnProperty;
/** @type {?} */
const propIsEnumerable = Object.prototype.propertyIsEnumerable;
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
function objectAssign(target, ...source) {
    /** @type {?} */
    let from;
    /** @type {?} */
    const to = toObject(target);
    /** @type {?} */
    let symbols;
    for (let s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (const key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if ((/** @type {?} */ (Object)).getOwnPropertySymbols) {
            symbols = (/** @type {?} */ (Object)).getOwnPropertySymbols(from);
            for (let i = 0; i < symbols.length; i++) {
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
class SendStatisticService {
    constructor() {
        this.emitStatistic = new Subject();
        this.StatisticOutPut$ = this.emitStatistic.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    emitStatisticData(value) {
        if (value.length !== 0) {
            this.emitStatistic.next(value);
        }
    }
}
SendStatisticService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SendStatisticService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
let statisticList = [];
class JdbPlgBaseService {
    /**
     * @param {?} http
     * @param {?} commonService
     * @param {?} sendStatisticService
     */
    constructor(http, commonService, sendStatisticService) {
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
        this.timer = setInterval(() => {
            this.sendStatisticService.emitStatisticData(statisticList);
            statisticList = [];
        }, 10000);
    }
    /**
     * @param {?} vRef
     * @return {?}
     */
    setRootViewContainerRef(vRef) {
        this.vRef = vRef;
        this.commonService.setRootViewContainerRef(vRef);
    }
    /**
     *
     * @param {?} apiName
     * @param {?} dataObj
     * @param {?} options
     * @return {?}
     */
    post(apiName, dataObj, options) {
        /** @type {?} */
        let time = new Date().getTime();
        /** @type {?} */
        let loginToken;
        /** @type {?} */
        let loginWay;
        /** @type {?} */
        let orgUid;
        /** @type {?} */
        let from;
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
        let apiException = JSON.parse(JSON.stringify(this.newStatisticData.service.apiException));
        this.newStatisticData.service.apiException = apiException;
        if (options && options.tokenObj) {
            loginToken = localStorage.getItem(options.tokenObj.loginToken);
            loginWay = localStorage.getItem(options.tokenObj.loginWay);
            orgUid = localStorage.getItem(options.tokenObj.orgUid);
            from = localStorage.getItem(options.tokenObj.from);
        }
        /** @type {?} */
        let loginObj = {};
        /** @type {?} */
        let data = {};
        /** @type {?} */
        let currentRoute = location.hash.split('/')[1];
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
        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        /** @type {?} */
        const requestoptions = {
            headers: headers
        };
        /** @type {?} */
        let reqUrl = apiName;
        //统计数据添加from和operator字段
        this.baseObj.from = from;
        this.baseObj.operator = localStorage.getItem('nickName');
        this.baseObj.memberId = localStorage.getItem('memberId');
        //统计数据添加请求url
        apiException.url = reqUrl;
        return this.http.post(reqUrl, data || {}, requestoptions)
            .pipe(filter((res) => {
            // 根据joinTraceId是否为true 判断是否需要拼接日志号 （目前只有电催系统需要）
            if (currentRoute != 'login' && options && options.joinTraceId) {
                res.error.returnUserMessage = res.error.returnUserMessage + '<br/>(日志号:' + loginObj.jdbDhTraceId + ')';
            }
            /** @type {?} */
            const endTime = new Date().getTime();
            //统计接口请求时长
            apiException.requestTime = endTime - time;
            //校验接口返回的数据结构格式
            if (!(res.hasOwnProperty('data') && res.hasOwnProperty('error'))) {
                this.commonService.toast('系统接口格式错误！');
                options && options.reset && options.reset();
                return false;
            }
            if (options.fns && options.fns.length != 0) {
                /** @type {?} */
                let len = options.fns.length;
                for (let i = 0; i < len; i++) {
                    /** @type {?} */
                    let fn = options.fns[i];
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
                this.newStatisticData = Object.assign(this.newStatisticData, this.baseObj);
                //去除logDataApi、loginApi、qrcodeApi三个接口
                if (options && !options.noLog) {
                    statisticList.push(this.newStatisticData);
                }
                return true;
            }
            // 统计数据添加returnCode，returnUserMessage信息
            apiException.resCode = res.error.returnCode;
            apiException.resMessage = res.error.returnUserMessage;
            this.newStatisticData = Object.assign(this.newStatisticData, this.baseObj);
            if (options && !options.noLog) {
                statisticList.push(this.newStatisticData);
            }
            //兼容登录组件中qrcodeApi和loginApi两个接口老的写法
            if (typeof (options) === 'boolean') {
                if (options) {
                    this.commonService.toast(res && res.error && res.error.returnUserMessage);
                    return false;
                }
                else {
                    return true;
                }
            }
            //是否拦截处理
            if (options.isIntercept) {
                this.commonService.toast(res && res.error && res.error.returnUserMessage);
                return false;
            }
            else {
                return true;
            }
        }))
            .pipe(catchError((error) => {
            // 统计错误信息
            apiException.errorMessage = error;
            this.newStatisticData = Object.assign(this.newStatisticData, this.baseObj);
            if (options && !options.noLog) {
                statisticList.push(this.newStatisticData);
            }
            return Observable.throw(error || 'Server error');
        }));
    }
    /**
     * @param {?} stamp
     * @return {?}
     */
    stamp2string(stamp) {
        if (stamp) {
            /** @type {?} */
            let date = new Date(stamp).toJSON();
            return date.split('T')[0];
        }
        return null;
    }
    /**
     * @param {?} apiName
     * @param {?} params
     * @return {?}
     */
    download(apiName, params) {
        /** @type {?} */
        let cookieData = {};
        /** @type {?} */
        let paramsObj = objectAssign({}, cookieData, params);
        /** @type {?} */
        let url = apiName + '?';
        for (let key in paramsObj) {
            if (paramsObj[key]) {
                url += key + '=' + encodeURIComponent(paramsObj[key]) + '&';
            }
        }
        window.location.href = url;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getPicSize(file) {
        /** @type {?} */
        let arr = {};
        /** @type {?} */
        let reader = new FileReader();
        reader.onload = function (e) {
            /** @type {?} */
            let data = e.target.result;
            /** @type {?} */
            let image = new Image();
            image.onload = function () {
                /** @type {?} */
                let width = image.width;
                /** @type {?} */
                let height = image.height;
                arr = {
                    height: height,
                    width: width
                };
                return arr;
            };
            image.src = data;
        };
        reader.readAsDataURL(file);
    }
}
JdbPlgBaseService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
JdbPlgBaseService.ctorParameters = () => [
    { type: HttpClient },
    { type: CommonMethodService },
    { type: SendStatisticService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FillTableService {
    constructor() {
    }
    /**
     * @param {?} lines
     * @param {?} lists
     * @param {?=} flag
     * @return {?}
     */
    fillTable(lines, lists, flag) {
        lines = lines || 10;
        lists = lists || [];
        flag = flag || true;
        /** @type {?} */
        let aLength = lists.length;
        /** @type {?} */
        let mLength = lines - aLength;
        /** @type {?} */
        let fillObj = { unShowOpt: flag };
        /** @type {?} */
        let keys;
        if (aLength !== 0) {
            lists.forEach(element => {
                element.unShowOpt = !flag;
            });
            keys = Object.keys(lists[0]);
            if (keys.length !== 0) {
                keys.forEach(element => {
                    if (element !== "unShowOpt") {
                        fillObj[element] = Object.prototype.toString.call(lists[0][element]) == "[object Array]" ? [] : '';
                    }
                });
            }
        }
        if (aLength !== 0 && mLength > 0) {
            for (let i = 0; i < mLength; i++) {
                lists.push(fillObj);
            }
        }
        return lists;
    }
}
FillTableService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FillTableService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JdbModalService {
    /**
     * @param {?} componentFactoryResolver
     */
    constructor(componentFactoryResolver) {
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
            onClose: () => {
                this.destroy();
            },
            onOk: () => {
                this.destroy();
            },
            onCancel: () => {
                this.destroy();
            }
        };
    }
    /**
     * @param {?} options
     * @return {?}
     */
    create(options) {
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
            onClose: () => {
                this.destroy();
            },
            onOk: () => {
                this.destroy();
            },
            onCancel: () => {
                this.destroy();
            }
        };
        /** @type {?} */
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(JdbPlgNewDialogComponent);
        /** @type {?} */
        let componentRef = options.container.createComponent(componentFactory);
        this._componentRefList.push(componentRef);
        //assign配置
        if (options) {
            Object.assign(this._options, options);
        }
        this.assignProps(componentRef);
        //获取组件实例的根节点并append到body上
        window.document.body.appendChild(/** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]));
        return componentRef;
    }
    /**
     * @param {?} componentRef
     * @return {?}
     */
    assignProps(componentRef) {
        /** @type {?} */
        let _options = this._options;
        /** @type {?} */
        let ins = componentRef.instance;
        ins.visible = _options.visible || true;
        ins._title = _options.title || '提示';
        ins._width = _options.width ? `${_options.width}px` : '400px';
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
        ins.onClose.subscribe((e) => {
            _options.onClose();
        });
        ins.onOk.subscribe((e) => {
            _options.onOk();
        });
        ins.onCancel.subscribe((e) => {
            _options.onCancel();
        });
    }
    /**
     * @return {?}
     */
    destroy() {
        /** @type {?} */
        let len = this._componentRefList.length - 1;
        if (this._componentRefList[len]) {
            this._componentRefList[len].destroy();
        }
        this._componentRefList.pop();
    }
    /**
     * @return {?}
     */
    triggerOk() {
        this._options.onOk();
    }
    /**
     * @return {?}
     */
    triggerClose() {
        this._options.onClose();
    }
    /**
     * @return {?}
     */
    triggerCancel() {
        this._options.onCancel();
    }
}
JdbModalService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
JdbModalService.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JdbPlgTableErrorComponent {
    constructor() {
        /*
            功能：实现表格报错文案水平居中
          */
        this.tableErrorText = '暂无数据';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
JdbPlgTableErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-jdb-plg-table-error',
                template: `<div class="jdb-plg-table-error"> {{tableErrorText}} </div>`,
            },] },
];
/** @nocollapse */
JdbPlgTableErrorComponent.ctorParameters = () => [];
JdbPlgTableErrorComponent.propDecorators = {
    tableErrorText: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ProvinceReformPipe {
    /**
     * @param {?} val
     * @return {?}
     */
    transform(val) {
        if (val.length === 0) {
            return '';
        }
        return val.join('、');
    }
}
ProvinceReformPipe.decorators = [
    { type: Pipe, args: [{ name: 'provinceReformPipe' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AmountReformPipe {
    /**
     * @param {?} val
     * @return {?}
     */
    transform(val) {
        if (val === 0) {
            return '0.00';
        }
        if (!val) {
            return '';
        }
        return (val / 100).toFixed(2);
    }
}
AmountReformPipe.decorators = [
    { type: Pipe, args: [{ name: 'amountReformPipe' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JdbPlgTimelineItemComponent {
    constructor() {
        this.optTime = 0;
    }
    /**
     * @return {?}
     */
    get timeNum() {
        return this.optTime;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    set timeNum(time) {
        if (!time) {
            time = 0;
        }
        this.optTime = time;
    }
    /**
     * @return {?}
     */
    get lastItem() {
        return this.isLast;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    set lastItem(item) {
        this.isLast = item;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
JdbPlgTimelineItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-jdb-plg-timeline-item',
                template: `<div class="timeline-item"> <div class="timeline-item-tail" [ngClass]="{'timeline-item-tail-last': isLast}"></div> <div class="timeline-item-circle"></div> <div class="timeline-item-content"> <div class="timeline-cardBox" [ngStyle]="{'width': cardBoxWidth,'background': cardBgc}"> <div class="timeline-arrow"> <em></em> <span [ngStyle]="{'border-right-color': cardBgc}"></span> </div> <ng-content></ng-content> </div> <p [ngStyle]="{'width': cardBoxWidth}" class="timeline-buttom_time" *ngIf="optTime">{{optTime*1000 | date: "y-MM-dd HH:mm:ss"}}</p> </div> </div>`,
            },] },
];
/** @nocollapse */
JdbPlgTimelineItemComponent.ctorParameters = () => [];
JdbPlgTimelineItemComponent.propDecorators = {
    cardBoxWidth: [{ type: Input }],
    cardBgc: [{ type: Input }],
    timeNum: [{ type: Input }],
    lastItem: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JdbPlgSwitchComponent {
    constructor() {
        this.checked = false;
        this.prefixCls = 'jdb-switch';
        this._jdbLoading = false;
        this._jdbDisabled = false;
        this._jdbControl = false;
        this._jdbSize = 'default';
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbCheckedText(value) {
        this._jdbCheckedText = value;
    }
    /**
     * @return {?}
     */
    get jdbCheckedText() {
        return this._jdbCheckedText;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbUncheckedText(value) {
        this._jdbUncheckedText = value;
    }
    /**
     * @return {?}
     */
    get jdbUncheckedText() {
        return this._jdbUncheckedText;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbLoading(value) {
        this._jdbLoading = Boolean(value);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get jdbLoading() {
        return this._jdbLoading;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbDisabled(value) {
        this._jdbDisabled = Boolean(value);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get jdbDisabled() {
        return this._jdbDisabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbSize(value) {
        this._jdbSize = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get jdbSize() {
        return this._jdbSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbControl(value) {
        this._jdbControl = Boolean(value);
    }
    /**
     * @return {?}
     */
    get jdbControl() {
        return this._jdbControl;
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    onClick(ev) {
        if (!this.jdbDisabled && !this.jdbLoading && !this.jdbControl) {
            this.updateSwitchStatus(!this.checked, true);
        }
    }
    /**
     * 更新开关状态
     * @param {?} value
     * @param {?} isEmit
     * @return {?}
     */
    updateSwitchStatus(value, isEmit) {
        if (this.checked === value) {
            return;
        }
        this.checked = value;
        this.setClassMap();
        if (isEmit) {
            this.onChange(this.checked);
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.outBoxClass = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-checked`]: this.checked,
            [`${this.prefixCls}-loading`]: this.jdbLoading,
            [`${this.prefixCls}-disabled`]: this.jdbDisabled,
            [`${this.prefixCls}-small`]: this.jdbSize === 'small'
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.updateSwitchStatus(value, false);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.jdbDisabled = isDisabled;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
}
JdbPlgSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-jdb-plg-switch',
                template: `<span [ngClass]="outBoxClass"> <span class="inner-content"> <ng-container *ngIf="checked"> {{jdbCheckedText}} </ng-container> <ng-container *ngIf="!checked"> {{jdbUncheckedText}} </ng-container> </span> </span> `,
                // styleUrls: ['./jdb-plg-switch.component.scss'],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => JdbPlgSwitchComponent),
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const MDL_MODULES = [
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
class JdbPlgUiModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { JdbPlgUiModule, JdbPlgBaseService, FillTableService, CommonMethodService, SendStatisticService, JdbModalService, jQueryLikeParamSerializer, JdbPlgAutocompleteComponent as ɵl, JdbPlgButtonComponent as ɵf, JdbPlgDialogComponent as ɵg, JdbPlgInputComponent as ɵj, JdbPlgNewDialogComponent as ɵh, JdbPlgPaginationComponent as ɵe, JdbPlgSelectComponent as ɵi, JdbPlgSwitchComponent as ɵq, JdbTabComponent as ɵm, JdbPlgTableErrorComponent as ɵn, JdbPlgTimelineItemComponent as ɵk, JdbPlgToastComponent as ɵr, PictureViewerComponent as ɵb, ShowPictureComponent as ɵa, DragDirective as ɵc, OnlyNumberDirective as ɵs, WatermarkDirective as ɵd, AmountReformPipe as ɵp, ProvinceReformPipe as ɵo };
//# sourceMappingURL=jdb-plg-ui.js.map
