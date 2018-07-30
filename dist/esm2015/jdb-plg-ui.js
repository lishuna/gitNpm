import { Component, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver, Injector, Output, EventEmitter, ElementRef, Renderer, animate, style, transition, trigger, state, HostListener, Directive, Renderer2, TemplateRef, forwardRef, ContentChild, ViewEncapsulation, Injectable, NgModule, Version, Pipe } from '@angular/core';
import { trigger as trigger$1, state as state$1, style as style$1, animate as animate$1, transition as transition$1 } from '@angular/animations';
import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __extends } from 'tslib';
import { Observable } from 'rxjs/Observable';
import '@angular/platform-browser';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Observable as Observable$1 } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                template: `<div class="toast-wraper"> {{msg}} </div> `,
                styleUrls: ['./jdb-plg-toast.component.scss']
            },] },
];
/** @nocollapse */
JdbPlgToastComponent.ctorParameters = () => [];
JdbPlgToastComponent.propDecorators = {
    "msg": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.items = [];
        this.tabComs = [];
        this.curTabIndex = 0;
        this.tabIdComMap = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     *
     * @param {?} ChildComponent
     * @param {?} attrs
     * @param {?} title
     * @param {?=} comId
     * @param {?=} isCloseFlag
     * @return {?}
     */
    addItem(ChildComponent, attrs, title, comId = "", isCloseFlag = false) {
        if (comId && this.tabIdComMap[comId]) {
            let /** @type {?} */ com = this.tabIdComMap[comId];
            this.tabChange(com.index);
            return;
        }
        const /** @type {?} */ childComponent = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
        var /** @type {?} */ comInstance = this.target.createComponent(childComponent);
        var /** @type {?} */ keys = Object.keys(attrs);
        this.items.push({
            title: title,
            isCloseFlag: isCloseFlag
        });
        keys.forEach((value) => {
            comInstance.instance[value] = attrs[value];
        });
        this.tabComs.push(comInstance);
        if (this.items.length > 1) {
            this.setOneComHide(this.curTabIndex);
        }
        this.tabSubs = comInstance.instance['onTopComMsg'] = new EventEmitter();
        this.tabSubs.subscribe((value) => {
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
        this.tabComs[tabIndex].location.nativeElement.style.display = "none";
    }
    /**
     * @param {?} tabIndex
     * @return {?}
     */
    setOneComShow(tabIndex) {
        this.tabComs[tabIndex].location.nativeElement.style.display = "block";
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
        this.tabComs[index].instance.tabRefresh && this.tabComs[index].instance.tabRefresh({});
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
        let /** @type {?} */ tabIdComMap = this.tabIdComMap;
        for (let /** @type {?} */ key in tabIdComMap) {
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
        let /** @type {?} */ tabIdComMap = this.tabIdComMap;
        for (let /** @type {?} */ key in tabIdComMap) {
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
                template: `<div class="tab-wraper"> <div class="tab-nav-wraper"> <div class="tab-item" *ngFor="let item of items;let i = index;" [ngClass]="{'tab-selected':i == curTabIndex}" title='{{item.title}}'> <div (click)="tabChange(i)" class="tab-text"> {{item.title}}</div> <span class="close-btn" (click)="removeTab(i)" *ngIf="i !== 0 && item.isCloseFlag != true">&times;</span> </div> </div> <div class="tab-content-wraper"> <div #tabContent class="place-holder"></div> </div> </div> `,
                styleUrls: ['./jdb-tab.component.scss']
            },] },
];
/** @nocollapse */
JdbTabComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
    { type: Injector, },
];
JdbTabComponent.propDecorators = {
    "target": [{ type: ViewChild, args: ['tabContent', { read: ViewContainerRef },] },],
    "onTabChange": [{ type: Output },],
    "onTabRemove": [{ type: Output },],
    "onTopComMsg": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                styleUrls: ['./show-picture.component.scss']
            },] },
];
/** @nocollapse */
ShowPictureComponent.ctorParameters = () => [];
ShowPictureComponent.propDecorators = {
    "pictureUrl": [{ type: Input },],
    "update": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ imgContent = this.imgContent.nativeElement;
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
        const /** @type {?} */ image = new Image();
        image.onload = () => {
            // 获取当前加载图片宽高
            let /** @type {?} */ w = image.width;
            let /** @type {?} */ h = image.height;
            let /** @type {?} */ hRatio;
            let /** @type {?} */ wRatio;
            // 设置默认比例以及容器宽高
            const /** @type {?} */ imgRate = w / h; // 图片宽高比
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
        const /** @type {?} */ rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
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
        const /** @type {?} */ rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    }
    /**
     * @return {?}
     */
    routateNi() {
        this.imgOperate.degnum++;
        const /** @type {?} */ rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    }
    /**
     * @return {?}
     */
    routateShun() {
        this.imgOperate.degnum--;
        const /** @type {?} */ rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
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
        const /** @type {?} */ rate = 'scale(1,1) rotate(0deg)';
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
                template: `<div class="picture-viewer"> <div class="img-mask" *ngIf="_jdbMaster" (click)="closeModel()"> <!-- 遮罩层 --> </div> <div #imgContent [ngClass]="{'img-content-componet':jdbShowType==2}" class="img-content"> <!-- 右上角关闭按钮 --> <div class="close" *ngIf="_jdbClear" (click)="closeModel()"> <span class="icon-close"></span> </div> <!-- 图片box --> <ul class="img-box" #img> <!-- <li *ngFor="let item of pictureList;let i=index" [@imgMove]="ImgState(i)"> <img appDragDirective  [src]="item.imgUrl" alt="" style="max-height: 600px;max-width: 800px;"> </li> --> </ul> <!-- 上一页下一页 --> <div [hidden]="current==0" class="prev-page" (click)="Prev()"> <span class="icon-pagination-prev"></span> </div> <div [hidden]="current==pictureList.length-1" class="next-page" (click)="Next()"> <span class="icon-pagination-next"></span> </div> <!-- 右下角页码 --> <div class="img-index">{{current+1}}/{{pictureList.length}}</div> <!-- 缩放旋转按钮组 --> <div class="btn-box"> <span [ngClass]="{'hover-disabled':imgOperate.num===4}" class="icon-picture-zoom-in scale-big" (click)="scaleBig()"></span> <span [ngClass]="{'hover-disabled':imgOperate.num==0.5}" class="icon-picture-zoom-out  scale-small" (click)="scaleSmall()"></span> <span class="icon-picture-counterclockwise routate-ni" (click)="routateNi()"></span> <span class="icon-picture-clockwise routate-shun" (click)="routateShun()"></span> </div> </div> </div>`,
                styleUrls: ['./picture-viewer.component.scss'],
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
    { type: Renderer, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ wRate = localStorage.getItem('dragWidth');
        const /** @type {?} */ hRate = localStorage.getItem('dragHeight');
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
            const /** @type {?} */ newdisX = event.clientX - this.disX;
            const /** @type {?} */ newdisY = event.clientY - this.disY;
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
    { type: ElementRef, },
    { type: Renderer, },
];
DragDirective.propDecorators = {
    "onMousedown": [{ type: HostListener, args: ['mousedown', ['$event'],] },],
    "onMousemove": [{ type: HostListener, args: ['mousemove', ['$event'],] },],
    "onMouseup": [{ type: HostListener, args: ['mouseup', ['$event'],] },],
    "onMouseleave": [{ type: HostListener, args: ['mouseleave', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            const /** @type {?} */ optionsArr = [];
            value.forEach(elem => {
                const /** @type {?} */ obj = {
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
     * @return {?}
     */
    setPageNo() {
        // 向上取整
        this._lastIndex = Math.ceil(this._total / this._pageSize);
        // 如果当前页码大于尾页，则等于尾页
        // if (this._current > this._lastIndex) {
        //   this.jdbPageIndex = this._lastIndex;
        //   this.jdbPageIndexChange.emit(this.jdbPageIndex);
        // }
        const /** @type {?} */ tmpPages = [];
        if (this._lastIndex <= 9) {
            // 若总页数不超过9，则全部展示在页面上
            for (let /** @type {?} */ i = 2; i <= this._lastIndex - 1; i++) {
                tmpPages.push({
                    index: i
                });
            }
        }
        else {
            const /** @type {?} */ current = +this._current;
            let /** @type {?} */ left = Math.max(2, current - 2);
            let /** @type {?} */ right = Math.min(current + 2, this._lastIndex - 1);
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
            for (let /** @type {?} */ i = left; i <= right; i++) {
                tmpPages.push({ index: i });
            }
        }
        this.pages = tmpPages;
    }
    /**
     * @param {?} status
     * @param {?} num
     * @return {?}
     */
    dataChange(status, num) {
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
     * @param {?} pageSize
     * @return {?}
     */
    jumpBefore(pageSize) {
        this.dataChange(true, this._current - Math.round(pageSize / 2));
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    jumpAfter(pageSize) {
        this.dataChange(true, this._current + Math.round(pageSize / 2));
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
        const /** @type {?} */ reg = /^[0-9]*$/;
        return reg.test(obj);
    }
}
JdbPlgPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-jdb-plg-pagination',
                template: `<div class="jdb-plg-pagination"> <!-- 总条数 --> <span *ngIf="_showTotal" class="total-box"> 共{{_total}}条 </span> <div class="operate-box"> <!-- 条数切换 --> <div class="jdb-plg-pagination-options" *ngIf="_showPageSize"> <app-jdb-plg-select (ngModelChange)="dataChange(false,$event)" [jdbSize]="'small'" [jdbWidth]="'90px'" [(ngModel)]="_pageSize" [jdbSelectList]="_options"></app-jdb-plg-select> </div> <!-- 基本分页样式 --> <ul *ngIf="!_jdbSimple" class="base-pagination"> <!-- 上一页按钮 --> <li class="jdb-plg-pagination-prev" title="上一页" [ngClass]="{'disabled':_current===_firstIndex}" (click)="dataChange(true,_current-1)"> <span class="jdbIcon icon-pagination-prev"></span> </li> <!-- 首页按钮 --> <li class="jdb-plg-pagination-first" title="首页" [ngClass]="{'active':_current===_firstIndex}" (click)="dataChange(true,_firstIndex)"> {{_firstIndex}} </li> <!-- 省略号 --> <li class="jdb-plg-pagination-forward" *ngIf="(_lastIndex >9)&&(_current-4>_firstIndex)" (click)="jumpBefore(_pageSize)"> <span class="icon-pagination-more"></span> <span class="icon-pagination-jump-prev"></span> </li> <!-- 按钮 --> <li class="jdb-plg-pagination-pager" *ngFor="let page of pages" [ngClass]="{'active':_current===page.index}" (click)="dataChange(true,page.index)"> {{page.index}} </li> <!-- 省略号 --> <li class="jdb-plg-pagination-backward" *ngIf="(_lastIndex >9)&&(_current+4<_lastIndex)" (click)="jumpAfter(_pageSize)"> <span class="icon-pagination-more"></span> <span class="icon-pagination-jump-next"></span> </li> <!-- 尾页按钮 --> <li class="jdb-plg-pagination-last" *ngIf="(_lastIndex>0)&&(_lastIndex!==_firstIndex)" title="尾页" [ngClass]="{'active':_current===_lastIndex}" (click)="dataChange(true,_lastIndex)"> {{_lastIndex}} </li> <!-- 下一页按钮 --> <li class="jdb-plg-pagination-next" title="下一页" [ngClass]="{'disabled':_current===_lastIndex}" (click)="dataChange(true,_current+1)"> <span class="jdbIcon icon-pagination-next"></span> </li> </ul> <!-- 简单分页样式 --> <div class="simple-pagination" *ngIf="_jdbSimple"> <div class="left-box"> <span class="icon-pagination-first" [ngClass]="{'disabled':_current===_firstIndex}" (click)="dataChange(true,_firstIndex)"></span> <span class="icon-pagination-prev" [ngClass]="{'disabled':_current===_firstIndex}" (click)="dataChange(true,_current-1)"></span> </div> <div class="center-box"> {{_current}} / {{_lastIndex}} </div> <div class="right-box"> <span class="icon-pagination-next" [ngClass]="{'disabled':_current===_lastIndex}" (click)="dataChange(true,_current+1)"></span> <span class="icon-pagination-last" [ngClass]="{'disabled':_current===_lastIndex}" (click)="dataChange(true,_lastIndex)"></span> </div> </div> <!-- 快速跳转 --> <div *ngIf="_showQuickJump" class="quick-jumper"> 第 <input #inputJump type="text" [(ngModel)]="quickJumpPage" (keyup.enter)="quickJump()" appOnlyNumber="true"> 页 <button (click)="quickJump()">跳转</button> </div> </div> </div>`,
                styleUrls: ['./jdb-plg-pagination.component.scss']
            },] },
];
/** @nocollapse */
JdbPlgPaginationComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                selector: '[app-jdb-plg-button]',
                template: `<i class="jdb-icon-loading action" *ngIf="loading"></i> <ng-content></ng-content>`,
                styleUrls: ['./jdb-plg-button.component.scss']
            },] },
];
/** @nocollapse */
JdbPlgButtonComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
JdbPlgButtonComponent.propDecorators = {
    "jdbSize": [{ type: Input },],
    "jdbType": [{ type: Input },],
    "jdbLoading": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ visible = this.toBoolean(value);
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
        const /** @type {?} */ visible = this.toBoolean(value);
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
        const /** @type {?} */ el = this.contentEl.nativeElement;
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
        const /** @type {?} */ factory = this.resolver.resolveComponentFactory(/** @type {?} */ (this._content));
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
                styleUrls: ['./jdb-plg-dialog.component.scss'],
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
JdbPlgDialogComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ e = /** @type {?} */ (event);
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
            const /** @type {?} */ ch = String.fromCharCode(e.keyCode);
            const /** @type {?} */ regEx = new RegExp(this.regexStr);
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
    { type: ElementRef, },
];
OnlyNumberDirective.propDecorators = {
    "appOnlyNumber": [{ type: Input },],
    "onKeyDown": [{ type: HostListener, args: ['keydown', ['$event'],] },],
    "onKeyUp": [{ type: HostListener, args: ['keyup', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this._selectList = value;
        // 循环数组，判断是否需要展示带有图片下拉框
        if (this._selectList) {
            this._selectList.forEach(element => {
                if (element.imgUrl) {
                    this._showImgBox = true;
                }
            });
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // 点击除下拉框以外位置，下拉框隐藏
        this.renderer2.listen('document', 'click', () => {
            this.show = false;
            this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
        });
        if (this._jdbClear && !this._jdbDisabled) {
            // 监听输入框元素，若有内容时则滑上显示x
            this.renderer2.listen(this.inputDom.nativeElement, 'mouseenter', () => {
                // 若输入框不存在内容，则不做任何操作
                if (this._jdbMode === 'chooseOne' || this._jdbMode === 'chooseNum') {
                    if (!this.inputText || this.show) {
                        return;
                    }
                }
                else if (this._jdbMode === 'chooseMore') {
                    if (this.inputText.length === 0 || this.show) {
                        return;
                    }
                }
                this.isShowClear = true;
                this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
            });
            this.renderer2.listen(this.inputDom.nativeElement, 'mouseleave', () => {
                // 若输入框不存在内容，则不做任何操作
                if (this._jdbMode === 'chooseOne' || this._jdbMode === 'chooseNum') {
                    if (!this.inputText || this.show) {
                        return;
                    }
                }
                else if (this._jdbMode === 'chooseMore') {
                    if (this.inputText.length === 0 || this.show) {
                        return;
                    }
                }
                this.isShowClear = false;
                this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
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
                [this.jdbClassName]: true
            };
        }
        else {
            this._classMap = {
                [`${this._size}`]: true,
                ['jdb-plg-select-disabled']: this._jdbDisabled,
                [this.jdbClassName]: true
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
        const /** @type {?} */ offetTop = this.getTop(this.inputDom.nativeElement); // 元素offetTop
        const /** @type {?} */ scrollTop = this.getScrollTop(this.inputDom.nativeElement.parentElement);
        const /** @type {?} */ clientHeight = document.documentElement.clientHeight || document.body.clientHeight; // 屏幕高度
        const /** @type {?} */ elemHeight = this.inputDom.nativeElement.clientHeight; // 元素高度
        let /** @type {?} */ paddingHeight;
        if (this.jdbSize === 'small') {
            paddingHeight = 2;
        }
        else if (this.jdbSize === 'large') {
            paddingHeight = 9;
        }
        else if (this.jdbSize === 'middle') {
            paddingHeight = 5;
        }
        const /** @type {?} */ flexHeight = clientHeight - offetTop - elemHeight - paddingHeight + scrollTop; // 剩余高度
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
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    forOneStart(value) {
        this._selectList.forEach(elem => {
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
        value = value.split(',');
        value.forEach(item => {
            this._selectList.forEach(elem => {
                if (elem[this._optionValue] === item) {
                    // inputText为输入框中展示的内容
                    const /** @type {?} */ text = this._optionText;
                    const /** @type {?} */ value = this._optionValue;
                    this.inputText.push({
                        text: elem[this._optionText],
                        value: elem[this._optionValue]
                    });
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
        value = value.split(',');
        value.forEach(item => {
            this._selectList.forEach(elem => {
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
        let /** @type {?} */ flag = false;
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
        // inputText为输入框中展示的内容
        const /** @type {?} */ text = this._optionText;
        const /** @type {?} */ value = this._optionValue;
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
    }
    /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    numClick(e, item) {
        let /** @type {?} */ flag = false;
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
        this.ngModelValue = this._chooseMoreArray.toString();
        this.onChange(this._chooseMoreArray);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    moreIndex(item) {
        let /** @type {?} */ flag = false;
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
        this.ngModelValue = this._chooseMoreArray.toString();
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
        let /** @type {?} */ offset = e.offsetTop;
        if (e.offsetParent != null) {
            //解析translateY
            if (e.style.transform) {
                let /** @type {?} */ ret = this.parseTranslateY(e.style.transform);
                offset += ret.isPercent ? e.clientHeight * ret.translateY / 100 : ret.translateY;
            }
            offset += this.getTop(e.offsetParent);
        }
        return offset;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    getScrollTop(e) {
        let /** @type {?} */ offset = e.scrollTop;
        if (e.parentElement != null) {
            offset += this.getScrollTop(e.parentElement);
        }
        return offset;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    parseTranslateY(val) {
        let /** @type {?} */ reg = /\(([^()]+)\)/g;
        let /** @type {?} */ translate = reg.exec(val)[1];
        let /** @type {?} */ translatArr = translate.split(',');
        let /** @type {?} */ translateY;
        let /** @type {?} */ isPercent;
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
            isPercent,
            translateY
        };
    }
}
JdbPlgSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-jdb-plg-select',
                template: `<!-- 单选 --> <div *ngIf="_jdbMode=='chooseOne'" #inputDom class="jdb-plg-select-one" (click)="dialogShow($event)" [ngClass]="_classMap" [ngStyle]="{'width':_width}"> <!-- placeHolder --> <div class="jdb-plg-select-placeholder" [hidden]="inputText!=''">{{_placeHolder}}</div> <!-- 单选 --> <!-- <span class="chooseOne" [hidden]="inputText==''">{{inputText}}</span> --> <input class="chooseOne chooseOneInput" [hidden]="inputText==''" type="text" [(ngModel)]="inputText" readonly> <ul #optionList [ngClass]="{ 'options-show':show, 'options-no-margin':!spaceFlex} " class="options "> <!-- 单选 --> <li *ngFor="let option of _selectList " (click)="item($event,option) " [ngClass]="{active:ngModelValue===option[_optionValue],disabled:option[_jdbItemDisabled] === _jdbSureDisabled} "> <img class="img-box" *ngIf="_showImgBox&&option.imgUrl" [src]="option.imgUrl" alt=""> <span class="img-box" *ngIf="_showImgBox&&!option.imgUrl"></span> <span class="text-box">{{_optionText=='option'?option:option[_optionText]}}</span> </li> </ul> <!-- 清空图标 --> <span class="close-icon icon-empty " [hidden]="!isShowClear " (click)="clearInputText($event) "></span> <!-- 单选时下拉图标 --> <span class="select-icon icon-select-arrow " [hidden]="isShowClear "></span> </div> <!-- 多选 --> <div *ngIf="_jdbMode=='chooseMore' " #inputDom class="jdb-plg-select-more " (click)="dialogShow($event) " [ngClass]="_classMap " [ngStyle]="{ 'width':_width} "> <!-- placeHolder --> <div class="jdb-plg-select-placeholder " [hidden]="inputText.length !=0 ">{{_placeHolder}}</div> <!-- 多选item --> <ul class="chooseMore "> <li *ngFor="let item of inputText "> {{item.text}} <span class="item-delete icon-close " (click)="deleteMoreItem($event,item) "></span> </li> </ul> <ul #optionList [ngClass]="{ 'options-show':show, 'options-no-margin':!spaceFlex} " class="options "> <li class="choose-more " *ngFor="let option of _selectList " (click)="chooseMore($event,option) " [ngClass]="{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} "> <!-- {{_optionText=='option'?option:option[_optionText]}} --> <img class="img-box" *ngIf="_showImgBox&&option.imgUrl" [src]="option.imgUrl" alt=""> <span class="img-box" *ngIf="_showImgBox&&!option.imgUrl"></span> <span class="text-box">{{_optionText=='option'?option:option[_optionText]}}</span> <span [hidden]="!moreIndex(option) " class="choose-right icon-selected "></span> </li> </ul> <!-- 清空图标 --> <span class="close-icon icon-empty " [hidden]="!isShowClear " (click)="clearInputText($event) "></span> </div> <!-- 选中几项 --> <div *ngIf="_jdbMode=='chooseNum' " #inputDom class="jdb-plg-select-num " (click)="dialogShow($event) " [ngClass]="_classMap " [ngStyle]="{ 'width':_width} "> <!-- placeHolder --> <div class="jdb-plg-select-placeholder " [hidden]="inputText!=0 ">{{_placeHolder}}</div> <span class="choose-tip " [hidden]="inputText==0 ">已选中{{inputText}}项</span> <ul #optionList [ngClass]="{ 'options-show':show, 'options-no-margin':!spaceFlex} " class="options "> <li class="choose-more " *ngFor="let option of _selectList " (click)="numClick($event,option) " [ngClass]="{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} "> <!-- {{_optionText=='option'?option:option[_optionText]}} --> <img class="img-box" *ngIf="_showImgBox&&option.imgUrl" [src]="option.imgUrl" alt=""> <span class="img-box" *ngIf="_showImgBox&&!option.imgUrl"></span> <span class="text-box">{{_optionText=='option'?option:option[_optionText]}}</span> <span [hidden]="!moreIndex(option) " class="choose-right icon-selected "></span> </li> </ul> <!-- 清空图标 --> <span class="close-icon icon-empty " [hidden]="!isShowClear " (click)="clearInputText($event) "></span> <span class="select-icon icon-select-arrow " [hidden]="isShowClear "></span> </div> <!-- 遮罩层 --> <div class="jdb-plg-select-master " *ngIf="show "></div>`,
                styleUrls: ['./jdb-plg-select.component.scss'],
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
    { type: Renderer2, },
    { type: Renderer, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class JdbPlgInputComponent {
    constructor() {
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
        if (this._value == '0') {
            return '0';
        }
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
     * @return {?}
     */
    clearTxt() {
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
                template: `<span class="input-group-addon" *ngIf="_addOnContentBefore"> <ng-template [ngTemplateOutlet]="_addOnContentBefore"> </ng-template> </span> <ng-template [ngIf]="_type=='text'"> <div class="input-text-wrap" [ngClass]="_inputWrapClass"> <span class="input-prefix" *ngIf="_prefixContent"> <ng-template [ngTemplateOutlet]="_prefixContent"> </ng-template> </span> <input (blur)="_emitBlur($event)" (focus)="_emitFocus($event)" [disabled]="_disabled" [readonly]="_readonly" [attr.type]="_type" class="input" [ngClass]="_classMap" [attr.placeholder]="_placeHolder" [(ngModel)]="jdbValue" [style.width]="width" maxlength="{{jdbMaxLength}}" /> <span class="input-clear" *ngIf="_clear && _value && _type=='text'" (click)="clearTxt()"> <i class="close-icon icon-empty"></i> </span> <span class="ant-input-suffix" *ngIf="_suffixContent"> <i class="iconfont icon-guanbi2fill"></i> <ng-template [ngTemplateOutlet]="_suffixContent"> </ng-template> </span> </div> <div class="input-error-tip" *ngIf="jdbError && _errorContent"> <i class="icon-message-error error-tip"></i> <span> <ng-template [ngTemplateOutlet]="_errorContent"> </ng-template> </span> </div> </ng-template> <span class="input-group-addon" *ngIf="_addOnContentAfter"> <ng-template [ngTemplateOutlet]="_addOnContentAfter"> </ng-template> </span> <ng-template [ngIf]="_type=='textarea'"> <div class="input-text-wrap"> <textarea (blur)="_emitBlur($event)" (focus)="_emitFocus($event)" (input)="textareaOnChange($event)" #inputTextarea [disabled]="_disabled" [readonly]="_readonly" type="textarea" class="input input-textarea" [ngClass]="_classMap" [attr.placeholder]="jdbPlaceHolder" [(ngModel)]="jdbValue" maxlength="{{jdbMaxLength}}" [style.width]="width"></textarea> <span class="textarea-wc-tip" [ngClass]="{'textarea-wc-tip-red': jdbValue&&jdbValue.length == jdbMaxLength}" *ngIf="jdbMaxLength && !_disabled &&!_readonly">{{(jdbValue&&jdbValue.length)||0}}/{{jdbMaxLength}}</span> </div> </ng-template>`,
                styleUrls: ['./jdb-plg-input.component.scss'],
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

/**
 * @license Angular v5.2.11
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated use \@angular/common/http instead
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    /**
     * @return {?}
     */
    BrowserXhr.prototype.build = /**
     * @return {?}
     */
    function () { return /** @type {?} */ ((new XMLHttpRequest())); };
    BrowserXhr.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BrowserXhr.ctorParameters = function () { return []; };
    return BrowserXhr;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
var RequestMethod = {
    Get: 0,
    Post: 1,
    Put: 2,
    Delete: 3,
    Options: 4,
    Head: 5,
    Patch: 6,
};
RequestMethod[RequestMethod.Get] = "Get";
RequestMethod[RequestMethod.Post] = "Post";
RequestMethod[RequestMethod.Put] = "Put";
RequestMethod[RequestMethod.Delete] = "Delete";
RequestMethod[RequestMethod.Options] = "Options";
RequestMethod[RequestMethod.Head] = "Head";
RequestMethod[RequestMethod.Patch] = "Patch";
/** @enum {number} */
var ReadyState = {
    Unsent: 0,
    Open: 1,
    HeadersReceived: 2,
    Loading: 3,
    Done: 4,
    Cancelled: 5,
};
ReadyState[ReadyState.Unsent] = "Unsent";
ReadyState[ReadyState.Open] = "Open";
ReadyState[ReadyState.HeadersReceived] = "HeadersReceived";
ReadyState[ReadyState.Loading] = "Loading";
ReadyState[ReadyState.Done] = "Done";
ReadyState[ReadyState.Cancelled] = "Cancelled";
/** @enum {number} */
var ResponseType = {
    Basic: 0,
    Cors: 1,
    Default: 2,
    Error: 3,
    Opaque: 4,
};
ResponseType[ResponseType.Basic] = "Basic";
ResponseType[ResponseType.Cors] = "Cors";
ResponseType[ResponseType.Default] = "Default";
ResponseType[ResponseType.Error] = "Error";
ResponseType[ResponseType.Opaque] = "Opaque";
/** @enum {number} */
var ContentType = {
    NONE: 0,
    JSON: 1,
    FORM: 2,
    FORM_DATA: 3,
    TEXT: 4,
    BLOB: 5,
    ARRAY_BUFFER: 6,
};
ContentType[ContentType.NONE] = "NONE";
ContentType[ContentType.JSON] = "JSON";
ContentType[ContentType.FORM] = "FORM";
ContentType[ContentType.FORM_DATA] = "FORM_DATA";
ContentType[ContentType.TEXT] = "TEXT";
ContentType[ContentType.BLOB] = "BLOB";
ContentType[ContentType.ARRAY_BUFFER] = "ARRAY_BUFFER";
/** @enum {number} */
var ResponseContentType = {
    Text: 0,
    Json: 1,
    ArrayBuffer: 2,
    Blob: 3,
};
ResponseContentType[ResponseContentType.Text] = "Text";
ResponseContentType[ResponseContentType.Json] = "Json";
ResponseContentType[ResponseContentType.ArrayBuffer] = "ArrayBuffer";
ResponseContentType[ResponseContentType.Blob] = "Blob";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * ### Example
 *
 * ```
 * import {Headers} from '\@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var Headers = /** @class */ (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /**
         * \@internal header names are lower case
         */
        this._headers = new Map();
        /**
         * \@internal map lower case names to actual names
         */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var /** @type {?} */ values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     * @param {?} headersString
     * @return {?}
     */
    Headers.fromResponseHeaderString = /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     * @param {?} headersString
     * @return {?}
     */
    function (headersString) {
        var /** @type {?} */ headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var /** @type {?} */ index = line.indexOf(':');
            if (index > 0) {
                var /** @type {?} */ name_1 = line.slice(0, index);
                var /** @type {?} */ value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    /**
     * Appends a header to existing list of header values for a given header name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.append = /**
     * Appends a header to existing list of header values for a given header name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    /**
     * Deletes all header values for the given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.delete = /**
     * Deletes all header values for the given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    Headers.prototype.forEach = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.get = /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.has = /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    /**
     * Returns the names of the headers
     * @return {?}
     */
    Headers.prototype.keys = /**
     * Returns the names of the headers
     * @return {?}
     */
    function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    /**
     * Sets or overrides header value for given name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.set = /**
     * Sets or overrides header value for given name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    /**
     * Returns values of all headers.
     * @return {?}
     */
    Headers.prototype.values = /**
     * Returns values of all headers.
     * @return {?}
     */
    function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    /**
     * Returns string of all headers.
     * @return {?}
     */
    Headers.prototype.toJSON = /**
     * Returns string of all headers.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ serialized = {};
        this._headers.forEach(function (values, name) {
            var /** @type {?} */ split = [];
            values.forEach(function (v) { return split.push.apply(split, v.split(',')); });
            serialized[/** @type {?} */ ((_this._normalizedNames.get(name)))] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.getAll = /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    /**
     * This method is not implemented.
     * @return {?}
     */
    Headers.prototype.entries = /**
     * This method is not implemented.
     * @return {?}
     */
    function () { throw new Error('"entries" method is not implemented on Headers class'); };
    /**
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.mayBeSetNormalizedName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {\@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {\@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {\@link Response Responses} for
 * mock responses (see {\@link MockBackend}).
 *
 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
 *
 * ```typescript
 * import {ResponseOptions, Response} from '\@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var ResponseOptions = /** @class */ (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '\@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    ResponseOptions.prototype.merge = /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '\@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {\@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link ResponseOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create {\@link Response Responses}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
 *
 * ```typescript
 * import {provide} from '\@angular/core';
 * import {bootstrap} from '\@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '\@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {\@link Response}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
 *
 * ```
 * import {BaseResponseOptions, Response} from '\@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var BaseResponseOptions = /** @class */ (function (_super) {
    __extends(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BaseResponseOptions.ctorParameters = function () { return []; };
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {\@link Request}.
 *
 * @deprecated use \@angular/common/http instead
 * @abstract
 */
var ConnectionBackend = /** @class */ (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated use \@angular/common/http instead
 * @abstract
 */
var XSRFStrategy = /** @class */ (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());
/**
 * Interface for options to construct a RequestOptions, based on
 * [RequestInit](https://fetch.spec.whatwg.org/#requestinit) from the Fetch spec.
 *
 * @deprecated use \@angular/common/http instead
 * @record
 */

/**
 * Required structure when constructing new Request();
 * @record
 */

/**
 * Interface for options to construct a Response, based on
 * [ResponseInit](https://fetch.spec.whatwg.org/#responseinit) from the Fetch spec.
 *
 * @deprecated use \@angular/common/http instead
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} method
 * @return {?}
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
/**
 * @param {?} xhr
 * @return {?}
 */
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * @param {?} input
 * @return {?}
 */

/**
 * @param {?} input
 * @return {?}
 */
function stringToArrayBuffer(input) {
    var /** @type {?} */ view = new Uint16Array(input.length);
    for (var /** @type {?} */ i = 0, /** @type {?} */ strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?=} rawParams
 * @return {?}
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var /** @type {?} */ map = new Map();
    if (rawParams.length > 0) {
        var /** @type {?} */ params = rawParams.split('&');
        params.forEach(function (param) {
            var /** @type {?} */ eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], val = _a[1];
            var /** @type {?} */ list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated use \@angular/common/http instead
 *
 */
var QueryEncoder = /** @class */ (function () {
    function QueryEncoder() {
    }
    /**
     * @param {?} k
     * @return {?}
     */
    QueryEncoder.prototype.encodeKey = /**
     * @param {?} k
     * @return {?}
     */
    function (k) { return standardEncoding(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    QueryEncoder.prototype.encodeValue = /**
     * @param {?} v
     * @return {?}
     */
    function (v) { return standardEncoding(v); };
    return QueryEncoder;
}());
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${\@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '\@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated use \@angular/common/http instead
 */
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    /**
     * @return {?}
     */
    URLSearchParams.prototype.clone = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.has = /**
     * @param {?} param
     * @return {?}
     */
    function (param) { return this.paramsMap.has(param); };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.get = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        var /** @type {?} */ storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.getAll = /**
     * @param {?} param
     * @return {?}
     */
    function (param) { return this.paramsMap.get(param) || []; };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.set = /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.setAll = /**
     * @param {?} searchParams
     * @return {?}
     */
    function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.append = /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    function (param, val) {
        if (val === void 0 || val === null)
            return;
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.appendAll = /**
     * @param {?} searchParams
     * @return {?}
     */
    function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.replaceAll = /**
     * @param {?} searchParams
     * @return {?}
     */
    function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @return {?}
     */
    URLSearchParams.prototype.toString = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) {
                return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v));
            });
        });
        return paramsList.join('&');
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.delete = /**
     * @param {?} param
     * @return {?}
     */
    function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {\@link Request} and {\@link Response}
 * https://fetch.spec.whatwg.org/#body
 * @abstract
 */
var Body = /** @class */ (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     * @return {?}
     */
    Body.prototype.json = /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     * @return {?}
     */
    function () {
        if (typeof this._body === 'string') {
            return JSON.parse(/** @type {?} */ (this._body));
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     * @param {?=} encodingHint
     * @return {?}
     */
    Body.prototype.text = /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     * @param {?=} encodingHint
     * @return {?}
     */
    function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(/** @type {?} */ (this._body)));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(/** @type {?} */ (this._body)));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    /**
     * Return the body as an ArrayBuffer
     * @return {?}
     */
    Body.prototype.arrayBuffer = /**
     * Return the body as an ArrayBuffer
     * @return {?}
     */
    function () {
        if (this._body instanceof ArrayBuffer) {
            return /** @type {?} */ (this._body);
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    /**
     * Returns the request's body as a Blob, assuming that body exists.
     * @return {?}
     */
    Body.prototype.blob = /**
     * Returns the request's body as a Blob, assuming that body exists.
     * @return {?}
     */
    function () {
        if (this._body instanceof Blob) {
            return /** @type {?} */ (this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated use \@angular/common/http instead
 */
var Response = /** @class */ (function (_super) {
    __extends(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = /** @type {?} */ ((responseOptions.status));
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = /** @type {?} */ ((responseOptions.type));
        _this.url = /** @type {?} */ ((responseOptions.url));
        return _this;
    }
    /**
     * @return {?}
     */
    Response.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
/**
 * @return {?}
 */
function _getJsonpConnections() {
    var /** @type {?} */ w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
var BrowserJsonp = /** @class */ (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    /**
     * @param {?} url
     * @return {?}
     */
    BrowserJsonp.prototype.build = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var /** @type {?} */ node = document.createElement('script');
        node.src = url;
        return node;
    };
    /**
     * @return {?}
     */
    BrowserJsonp.prototype.nextRequestID = /**
     * @return {?}
     */
    function () { return "__req" + _nextRequestId++; };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.requestCallback = /**
     * @param {?} id
     * @return {?}
     */
    function (id) { return JSONP_HOME + "." + id + ".finished"; };
    /**
     * @param {?} id
     * @param {?} connection
     * @return {?}
     */
    BrowserJsonp.prototype.exposeConnection = /**
     * @param {?} id
     * @param {?} connection
     * @return {?}
     */
    function (id, connection) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = connection;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.removeConnection = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.send = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { document.body.appendChild(/** @type {?} */ ((node))); };
    // Remove <script> element from the DOM
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.cleanup = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild(/** @type {?} */ ((node)));
        }
    };
    BrowserJsonp.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BrowserJsonp.ctorParameters = function () { return []; };
    return BrowserJsonp;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated use \@angular/common/http instead
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new Observable(function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var /** @type {?} */ id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var /** @type {?} */ callback = _dom.requestCallback(_this._id);
            var /** @type {?} */ url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var /** @type {?} */ script = _this._script = _dom.build(url);
            var /** @type {?} */ onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var /** @type {?} */ responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var /** @type {?} */ responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var /** @type {?} */ onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var /** @type {?} */ responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     * @param {?=} data
     * @return {?}
     */
    JSONPConnection.prototype.finished = /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {\@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated use \@angular/common/http instead
 */
var JSONPBackend = /** @class */ (function (_super) {
    __extends(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    JSONPBackend.prototype.createConnection = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    JSONPBackend.ctorParameters = function () { return [
        { type: BrowserJsonp, },
        { type: ResponseOptions, },
    ]; };
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {\@link MockConnection} may be interacted with in tests.
 *
 * @deprecated use \@angular/common/http instead
 */
var XHRConnection = /** @class */ (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new Observable(function (responseObserver) {
            var /** @type {?} */ _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var /** @type {?} */ onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var /** @type {?} */ status = _xhr.status === 1223 ? 204 : _xhr.status;
                var /** @type {?} */ body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var /** @type {?} */ headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var /** @type {?} */ url = getResponseURL(_xhr) || req.url;
                var /** @type {?} */ statusText = _xhr.statusText || 'OK';
                var /** @type {?} */ responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var /** @type {?} */ response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var /** @type {?} */ onError = function (err) {
                var /** @type {?} */ responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(/** @type {?} */ ((name)), values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    /**
     * @param {?} req
     * @param {?} _xhr
     * @return {?}
     */
    XHRConnection.prototype.setDetectedContentType = /**
     * @param {?} req
     * @param {?} _xhr
     * @return {?}
     */
    function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var /** @type {?} */ blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * Creates {\@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '\@angular/http';
 * \@Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated use \@angular/common/http instead
 */
var XHRBackend = /** @class */ (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    XHRBackend.prototype.createConnection = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    XHRBackend.ctorParameters = function () { return [
        { type: BrowserXhr, },
        { type: ResponseOptions, },
        { type: XSRFStrategy, },
    ]; };
    return XHRBackend;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {\@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {\@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var RequestOptions = /** @class */ (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: /**
         * @deprecated from 4.0.0. Use params instead.
         * @return {?}
         */
        function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: /**
         * @deprecated from 4.0.0. Use params instead.
         * @param {?} params
         * @return {?}
         */
        function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    RequestOptions.prototype.merge = /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    /**
     * @param {?=} params
     * @return {?}
     */
    RequestOptions.prototype._mergeSearchParams = /**
     * @param {?=} params
     * @return {?}
     */
    function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    /**
     * @param {?=} objParams
     * @return {?}
     */
    RequestOptions.prototype._parseParams = /**
     * @param {?=} objParams
     * @return {?}
     */
    function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var /** @type {?} */ params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var /** @type {?} */ value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    RequestOptions.prototype._appendParam = /**
     * @param {?} key
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {\@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {\@link RequestMethod RequestMethod.Get}
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link RequestOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create and send {\@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '\@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {\@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var BaseRequestOptions = /** @class */ (function (_super) {
    __extends(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BaseRequestOptions.ctorParameters = function () { return []; };
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {\@link Http} and
 * {\@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {\@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '\@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '\@angular/http';
 *
 * \@Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var Request = /** @class */ (function (_super) {
    __extends(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var /** @type {?} */ url = requestOptions.url;
        _this.url = /** @type {?} */ ((requestOptions.url));
        var /** @type {?} */ paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var /** @type {?} */ params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var /** @type {?} */ prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(/** @type {?} */ ((requestOptions.method)));
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = /** @type {?} */ ((requestOptions.withCredentials));
        _this.responseType = /** @type {?} */ ((requestOptions.responseType));
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    /**
     * Returns the content type enum based on header options.
     * @return {?}
     */
    Request.prototype.detectContentType = /**
     * Returns the content type enum based on header options.
     * @return {?}
     */
    function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    /**
     * Returns the content type of request's body based on its type.
     * @return {?}
     */
    Request.prototype.detectContentTypeFromBody = /**
     * Returns the content type of request's body based on its type.
     * @return {?}
     */
    function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     * @return {?}
     */
    Request.prototype.getBody = /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     * @return {?}
     */
    function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
/**
 * @param {?} params
 * @return {?}
 */
function urlEncodeParams(params) {
    var /** @type {?} */ searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var /** @type {?} */ value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = (/** @type {?} */ (w /** TODO #9100 */) /** TODO #9100 */)['FormData'] || noop;
var Blob$1 = (/** @type {?} */ (w /** TODO #9100 */) /** TODO #9100 */)['Blob'] || noop;
var ArrayBuffer$1 = (/** @type {?} */ (w /** TODO #9100 */) /** TODO #9100 */)['ArrayBuffer'] || noop;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} backend
 * @param {?} request
 * @return {?}
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
/**
 * @param {?} defaultOpts
 * @param {?} providedOpts
 * @param {?} method
 * @param {?} url
 * @return {?}
 */
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var /** @type {?} */ newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return /** @type {?} */ (newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        })));
    }
    return /** @type {?} */ (newOptions.merge(new RequestOptions({ method: method, url: url })));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {\@link Response} when a
 * response is received.
 *
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '\@angular/http';
 * import 'rxjs/add/operator/map'
 * \@Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .map(res => res.json())
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {\@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {\@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '\@angular/http';
 * import {MockBackend} from '\@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var Http = /** @class */ (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.request = /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url))));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    /**
     * Performs a request with `get` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.get = /**
     * Performs a request with `get` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    /**
     * Performs a request with `post` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.post = /**
     * Performs a request with `post` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    /**
     * Performs a request with `put` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.put = /**
     * Performs a request with `put` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    /**
     * Performs a request with `delete` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.delete = /**
     * Performs a request with `delete` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    /**
     * Performs a request with `patch` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.patch = /**
     * Performs a request with `patch` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    /**
     * Performs a request with `head` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.head = /**
     * Performs a request with `head` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    /**
     * Performs a request with `options` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.options = /**
     * Performs a request with `options` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Http.ctorParameters = function () { return [
        { type: ConnectionBackend, },
        { type: RequestOptions, },
    ]; };
    return Http;
}());
/**
 * @deprecated use \@angular/common/http instead
 */
var Jsonp = /** @class */ (function (_super) {
    __extends(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     *
     * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Jsonp.prototype.request = /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     *
     * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url)));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Jsonp.ctorParameters = function () { return [
        { type: ConnectionBackend, },
        { type: RequestOptions, },
    ]; };
    return Jsonp;
}(Http));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated use \@angular/common/http instead
 */
var VERSION = new Version('5.2.11');

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
            toSerialize.forEach((value, index) => {
                serialize(value, prefix + '[' + (isObject(value) ? index : '') + ']');
            });
        }
        else if (isObject(toSerialize) && !isDate(toSerialize)) {
            for (let /** @type {?} */ key in toSerialize) {
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
const /** @type {?} */ hasOwnProperty = Object.prototype.hasOwnProperty;
const /** @type {?} */ propIsEnumerable = Object.prototype.propertyIsEnumerable;
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
    let /** @type {?} */ from;
    const /** @type {?} */ to = toObject(target);
    let /** @type {?} */ symbols;
    for (let /** @type {?} */ s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (const /** @type {?} */ key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if ((/** @type {?} */ (Object)).getOwnPropertySymbols) {
            symbols = (/** @type {?} */ (Object)).getOwnPropertySymbols(from);
            for (let /** @type {?} */ i = 0; i < symbols.length; i++) {
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
class JdbPlgBaseService {
    /**
     * @param {?} http
     * @param {?} componentFactoryResolver
     * @param {?} route
     */
    constructor(http, componentFactoryResolver, route) {
        this.http = http;
        this.componentFactoryResolver = componentFactoryResolver;
        this.route = route;
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
        //通过ComponentFactoryResolver 创建出动态组件的实例
        const /** @type {?} */ childComponent = this.componentFactoryResolver.resolveComponentFactory(JdbPlgToastComponent);
        let /** @type {?} */ comInstance = this.vRef.createComponent(childComponent);
        comInstance.instance.msg = msg;
        comInstance.changeDetectorRef.detectChanges();
        setTimeout(() => {
            comInstance.destroy();
        }, delayTime);
    }
    /**
     * @return {?}
     */
    test() {
        alert('jdb services....');
    }
    /**
     *
     * @param {?} apiName
     * @param {?} dataObj
     * @param {?} options
     * @return {?}
     */
    post(apiName, dataObj, options) {
        let /** @type {?} */ time = new Date().getTime();
        let /** @type {?} */ loginToken;
        let /** @type {?} */ loginWay;
        let /** @type {?} */ orgUid;
        if (options && options.tokenObj) {
            loginToken = localStorage.getItem(options.tokenObj.loginToken);
            loginWay = localStorage.getItem(options.tokenObj.loginWay);
            orgUid = localStorage.getItem(options.tokenObj.orgUid);
        }
        let /** @type {?} */ loginObj = {};
        let /** @type {?} */ data = {};
        let /** @type {?} */ currentRoute = location.hash.split('/')[1];
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
        let /** @type {?} */ headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let /** @type {?} */ reqUrl = apiName;
        let /** @type {?} */ requestoptions = new RequestOptions({
            headers: headers,
            method: 'post',
            body: data || {}
        });
        console.log(this.http);
        return this.http.request(reqUrl, requestoptions)
            .map((res) => res.json())
            .filter((res) => {
            //校验接口返回的数据结构格式
            if (!(res.hasOwnProperty('data') && res.hasOwnProperty('error'))) {
                this.toast('系统接口格式错误！');
                options && options.reset && options.reset();
                return false;
            }
            if (options.fns && options.fns.length != 0) {
                let /** @type {?} */ len = options.fns.length;
                for (let /** @type {?} */ i = 0; i < len; i++) {
                    let /** @type {?} */ fn = options.fns[i];
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
                    this.toast(res && res.error && res.error.returnUserMessage);
                    return false;
                }
                else {
                    return true;
                }
            }
            //是否拦截处理
            if (options.isIntercept) {
                this.toast(res && res.error && res.error.returnUserMessage);
                return false;
            }
            else {
                return true;
            }
        })
            .catch((error) => {
            return Observable$1.throw(error || 'Server error');
        });
    }
    /**
     * @param {?} apiName
     * @param {?} dataObj
     * @return {?}
     */
    postJSON(apiName, dataObj) {
        // let headers = new Headers({
        //     'Content-Type': 'application/json',
        //     'withCredentials': true
        // });
        let /** @type {?} */ headers = new Headers();
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
        let /** @type {?} */ reqUrl = apiName;
        // let requestoptions = new RequestOptions({
        //     method: RequestMethod.Post,
        //     url: reqUrl,
        //     headers: headers,
        //     body: testData
        // })
        let /** @type {?} */ options = new RequestOptions({
            headers: headers,
            method: 'post',
            url: reqUrl,
            body: dataObj || {}
        });
        return this.http.request(reqUrl, options)
            .map((res) => res.json())
            .filter((res) => {
            if (res.error && res.error.returnCode * 1 == 0) {
                return true;
            }
            else {
                return false;
            }
        })
            .catch((error) => {
            return Observable$1.throw(error || 'Server error');
        });
    }
    /**
     * @param {?} stamp
     * @return {?}
     */
    stamp2string(stamp) {
        if (stamp) {
            let /** @type {?} */ date = new Date(stamp).toJSON();
            return date.split('T')[0];
        }
        return null;
    }
    /**
     * @param {?} apiName
     * @param {?} params
     * @return {?}
     */
    export(apiName, params) {
        let /** @type {?} */ cookieStr = Cookie.get('loginInfo');
        let /** @type {?} */ cookieObj = {};
        let /** @type {?} */ cookieData = {};
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
        let /** @type {?} */ paramsObj = objectAssign({}, cookieData, params);
        let /** @type {?} */ url = apiName + '?';
        for (let /** @type {?} */ key in paramsObj) {
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
        let /** @type {?} */ arr = {};
        let /** @type {?} */ reader = new FileReader();
        reader.onload = function (e) {
            let /** @type {?} */ data = e.target.result;
            //加载图片获取图片真实宽度和高度
            let /** @type {?} */ image = new Image();
            image.onload = function () {
                let /** @type {?} */ width = image.width;
                let /** @type {?} */ height = image.height;
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
    { type: Http, },
    { type: ComponentFactoryResolver, },
    { type: Router, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        let /** @type {?} */ aLength = lists.length;
        let /** @type {?} */ mLength = lines - aLength;
        let /** @type {?} */ fillObj = { unShowOpt: flag };
        let /** @type {?} */ keys;
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
            for (let /** @type {?} */ i = 0; i < mLength; i++) {
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
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        return phoneReg.test(number);
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
        //通过ComponentFactoryResolver 创建出动态组件的实例
        const /** @type {?} */ childComponent = this.componentFactoryResolver.resolveComponentFactory(JdbPlgToastComponent);
        let /** @type {?} */ comInstance = this.vRef.createComponent(childComponent);
        comInstance.instance.msg = msg;
        comInstance.changeDetectorRef.detectChanges();
        setTimeout(() => {
            comInstance.destroy();
        }, delayTime);
    }
    /**
     * @param {?} list
     * @param {?=} node
     * @return {?}
     */
    removeNodeFromArray(list, node) {
        if (!node) {
            return list;
        }
        outFor: for (let /** @type {?} */ i = 0, /** @type {?} */ j = list.length; i < j; i++) {
            if (list[i] === node) {
                list.splice(i, 1);
                break outFor;
            }
        }
        return list;
    }
}
CommonMethodService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CommonMethodService.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                styleUrls: ['./jdb-plg-table-error.component.scss']
            },] },
];
/** @nocollapse */
JdbPlgTableErrorComponent.ctorParameters = () => [];
JdbPlgTableErrorComponent.propDecorators = {
    "tableErrorText": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ MDL_MODULES = [
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
// TODO 暴露服务方式

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { JdbPlgUiModule, CommonMethodService, FillTableService, JdbPlgBaseService, JdbPlgButtonComponent as ɵe, JdbPlgDialogComponent as ɵf, JdbPlgInputComponent as ɵh, JdbPlgPaginationComponent as ɵd, JdbPlgSelectComponent as ɵg, JdbTabComponent as ɵi, JdbPlgTableErrorComponent as ɵj, JdbPlgToastComponent as ɵm, PictureViewerComponent as ɵb, ShowPictureComponent as ɵa, DragDirective as ɵc, OnlyNumberDirective as ɵn, AmountReformPipe as ɵl, ProvinceReformPipe as ɵk };
//# sourceMappingURL=jdb-plg-ui.js.map
