/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer, animate, style, transition, trigger, state } from '@angular/core';
export class PictureViewerComponent {
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
                template: `<div class="picture-viewer">
    <div class="img-mask" *ngIf="_jdbMaster" (click)="closeModel()">
        <!-- 遮罩层 -->
    </div>
    <div #imgContent [ngClass]="{'img-content-componet':jdbShowType==2}" class="img-content">
        <!-- 右上角关闭按钮 -->
        <div class="close" *ngIf="_jdbClear" (click)="closeModel()">
            <span class="icon-close"></span>
        </div>

        <!-- 图片box -->
        <ul class="img-box" #img>
            <!-- <li *ngFor="let item of pictureList;let i=index" [@imgMove]="ImgState(i)">
                <img appDragDirective  [src]="item.imgUrl" alt="" style="max-height: 600px;max-width: 800px;">
            </li> -->
        </ul>
        <!-- 上一页下一页 -->
        <div [hidden]="current==0" class="prev-page" (click)="Prev()">
            <span class="icon-pagination-prev"></span>
        </div>
        <div [hidden]="current==pictureList.length-1" class="next-page" (click)="Next()">
            <span class="icon-pagination-next"></span>
        </div>

        <!-- 右下角页码 -->
        <div class="img-index">{{current+1}}/{{pictureList.length}}</div>
        <!-- 缩放旋转按钮组 -->
        <div class="btn-box">
            <span [ngClass]="{'hover-disabled':imgOperate.num===4}" class="icon-picture-zoom-in scale-big" (click)="scaleBig()"></span>
            <span [ngClass]="{'hover-disabled':imgOperate.num==0.5}" class="icon-picture-zoom-out  scale-small" (click)="scaleSmall()"></span>
            <span class="icon-picture-counterclockwise routate-ni" (click)="routateNi()"></span>
            <span class="icon-picture-clockwise routate-shun" (click)="routateShun()"></span>
        </div>
    </div>
</div>`,
                styles: [`@charset "UTF-8";.picture-viewer .img-mask{width:100%;height:100%;background:#000;position:fixed;top:0;left:0;-moz-opacity:.3;opacity:.8;z-index:9998;display:block}.picture-viewer .img-content{background-color:#d7d8db;position:fixed;left:50%;top:50%;border:1px solid #ccc;z-index:9999;text-align:center;box-sizing:border-box;border:none}.picture-viewer .img-content .close{position:absolute;width:22px;height:22px;border-radius:11px;border:1px solid #fff;background-color:rgba(255,255,255,.7);top:8px;right:8px;z-index:9999;text-align:center;line-height:8px}.picture-viewer .img-content .close .icon-close{display:block;margin-top:1px;margin-left:1px;font-size:18px}.picture-viewer .img-content .img-box{position:absolute;left:0;width:100%;height:100%;overflow:hidden}.picture-viewer .img-content .img-box li{background-color:#d7d8db;position:absolute;z-index:11;height:100%;width:100%;transition:.1s}.picture-viewer .img-content .img-box li img{position:absolute;display:block;margin:auto;transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s}.picture-viewer .img-content a{position:absolute;top:50%;margin-top:-30px;width:60px;height:60px;z-index:400;background:url(/assets/images/CXicon.png) 0 0/192px 144px no-repeat}.picture-viewer .img-content .next{right:20px;background-position:-54px -78px}.picture-viewer .img-content .prev{left:20px;background-position:-54px -6px}.picture-viewer .img-content .next:hover{background-position:-126px -78px}.picture-viewer .img-content .prev:hover{background-position:-126px -6px}.picture-viewer .img-content .next-page,.picture-viewer .img-content .prev-page{position:absolute;top:50%;margin-top:-30px;width:60px;height:60px;z-index:400;border-radius:50%;background-color:rgba(0,0,0,.2)}.picture-viewer .img-content .next-page span,.picture-viewer .img-content .prev-page span{display:block;margin-top:6px;color:rgba(255,255,255,.4);font-size:48px}.picture-viewer .img-content .prev-page{left:20px}.picture-viewer .img-content .next-page{right:20px}.picture-viewer .img-content .next-page:hover,.picture-viewer .img-content .prev-page:hover{background-color:rgba(0,0,0,.7)}.picture-viewer .img-content .next-page:hover span,.picture-viewer .img-content .prev-page:hover span{color:#fff}.picture-viewer .img-content .img-index{position:absolute;bottom:15px;right:22px;z-index:101;color:#323233;font-size:16px;height:22px;line-height:22px;width:42px;text-align:center;border-radius:2px;background:rgba(215,216,219,.7)}.picture-viewer .img-content .btn-box{position:absolute;z-index:109;bottom:12px;left:50%;margin-left:-73px;padding:3px 5px;height:30px;width:147px;background:rgba(0,0,0,.5);border-radius:2px;color:rgba(255,255,255,.4)}.picture-viewer .img-content .btn-box span{float:left;margin:0 5px}.picture-viewer .img-content .btn-box .routate-ni:hover,.picture-viewer .img-content .btn-box .routate-shun:hover,.picture-viewer .img-content .btn-box .scale-big:hover,.picture-viewer .img-content .btn-box .scale-small:hover{color:#fff}.picture-viewer .img-content .btn-box .hover-disabled:hover{color:rgba(255,255,255,.4)}.picture-viewer .img-content-componet{position:relative;top:0;left:0;margin:0}`],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljdHVyZS12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlc3QtdWkvY29yZS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9waWN0dXJlLXZpZXdlci9waWN0dXJlLXZpZXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsT0FBTyxFQUNQLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNQLEtBQUssRUFLTixNQUFNLGVBQWUsQ0FBQztBQW9FdkIsTUFBTTs7OztJQXVESixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOzJCQXREVixFQUFFO3NCQUNYLElBQUksWUFBWSxFQUF1Qjs7d0JBSzlCLEdBQUc7eUJBQ0YsR0FBRzsyQkFDRCxDQUFDOzBCQUVuQixJQUFJO3lCQUNMLElBQUk7MEJBQ0gsS0FBSzt1QkFDUixDQUFDOzBCQUlFO1lBQ1gsR0FBRyxFQUFFLENBQUM7WUFDTixNQUFNLEVBQUUsQ0FBQztTQUNWO0tBb0NBOzs7OztRQWhDRyxTQUFTLENBQUMsS0FBYztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O0lBRzFDLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUN4Qjs7Ozs7UUFHRyxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O0lBR3pDLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7UUFHRyxVQUFVLENBQUMsS0FBYTtRQUMxQixJQUFJLEtBQUssR0FBRyxJQUFJLENB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Q04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUN6QjtRQUNELHVCQUFNLElBQUksR0FBRyxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDeEksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN2Rjs7OztJQUdELFVBQVU7UUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQzNCO1FBQ0QsdUJBQU0sSUFBSSxHQUFHLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUN4SSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3ZGOzs7O0lBR0QsU0FBUztRQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekIsdUJBQU0sSUFBSSxHQUFHLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUV4SSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3ZGOzs7O0lBR0QsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFekIsdUJBQU0sSUFBSSxHQUFHLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUV4SSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3ZGOzs7O0lBR0QsWUFBWTtRQUNWLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsR0FBRyxFQUFFLENBQUM7WUFDTixNQUFNLEVBQUUsQ0FBQztTQUNWLENBQUM7UUFDRix1QkFBTSxJQUFJLEdBQUcseUJBQXlCLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBQy9HLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDdkY7Ozs7O0lBR0QsU0FBUyxDQUFDLEtBQXVCO1FBQy9CLE9BQU8sS0FBSyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUM7S0FDckQ7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7S0FDckI7OztZQWhVRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Ba0NMO2dCQUNMLE1BQU0sRUFBRSxDQUFDLCtuR0FBK25HLENBQUM7Z0JBQ3pvRyxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLFNBQVMsRUFBRTs7d0JBRWpCLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDOzt3QkFFeEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7NEJBQ2xCLFNBQVMsRUFBRSxHQUFHOzRCQUNkLFdBQVcsRUFBRSxtQkFBbUI7eUJBQ2pDLENBQUMsQ0FBQzs7d0JBRUgsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7O3dCQUV6RSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7d0JBQ3BFLFVBQVUsQ0FBQyxVQUFVLEVBQUU7NEJBQ3JCLE9BQU8sQ0FBQyxjQUFjLENBQUM7eUJBQ3hCLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFVBQVUsRUFBRTs0QkFDckIsT0FBTyxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsQ0FBQzt3QkFDRixVQUFVLENBQUMsVUFBVSxFQUFFOzRCQUNyQixPQUFPLENBQUMsY0FBYyxDQUFDO3lCQUN4QixDQUFDO3dCQUNGLFVBQVUsQ0FBQyxVQUFVLEVBQUU7NEJBQ3JCLE9BQU8sQ0FBQyxjQUFjLENBQUM7eUJBQ3hCLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDthQUNGOzs7O1lBN0VDLFFBQVE7Ozs0QkErRVAsS0FBSzt1QkFDTCxNQUFNO3VCQUVOLFNBQVMsU0FBQyxLQUFLOzJCQUNmLFNBQVMsU0FBQyxZQUFZO3lCQUV0QixLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFlTCxLQUFLO3lCQVNMLEtBQUs7MkJBU0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcixcbiAgYW5pbWF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXIsXG4gIHN0YXRlLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1waWN0dXJlLXZpZXdlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBpY3R1cmUtdmlld2VyXCI+XG4gICAgPGRpdiBjbGFzcz1cImltZy1tYXNrXCIgKm5nSWY9XCJfamRiTWFzdGVyXCIgKGNsaWNrKT1cImNsb3NlTW9kZWwoKVwiPlxuICAgICAgICA8IS0tIOmBrue9qeWxgiAtLT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICNpbWdDb250ZW50IFtuZ0NsYXNzXT1cInsnaW1nLWNvbnRlbnQtY29tcG9uZXQnOmpkYlNob3dUeXBlPT0yfVwiIGNsYXNzPVwiaW1nLWNvbnRlbnRcIj5cbiAgICAgICAgPCEtLSDlj7PkuIrop5LlhbPpl63mjInpkq4gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZVwiICpuZ0lmPVwiX2pkYkNsZWFyXCIgKGNsaWNrKT1cImNsb3NlTW9kZWwoKVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWNsb3NlXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIOWbvueJh2JveCAtLT5cbiAgICAgICAgPHVsIGNsYXNzPVwiaW1nLWJveFwiICNpbWc+XG4gICAgICAgICAgICA8IS0tIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwaWN0dXJlTGlzdDtsZXQgaT1pbmRleFwiIFtAaW1nTW92ZV09XCJJbWdTdGF0ZShpKVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgYXBwRHJhZ0RpcmVjdGl2ZSDCoFtzcmNdPVwiaXRlbS5pbWdVcmxcIiBhbHQ9XCJcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDYwMHB4O21heC13aWR0aDogODAwcHg7XCI+XG4gICAgICAgICAgICA8L2xpPiAtLT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPCEtLSDkuIrkuIDpobXkuIvkuIDpobUgLS0+XG4gICAgICAgIDxkaXYgW2hpZGRlbl09XCJjdXJyZW50PT0wXCIgY2xhc3M9XCJwcmV2LXBhZ2VcIiAoY2xpY2spPVwiUHJldigpXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1wcmV2XCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBbaGlkZGVuXT1cImN1cnJlbnQ9PXBpY3R1cmVMaXN0Lmxlbmd0aC0xXCIgY2xhc3M9XCJuZXh0LXBhZ2VcIiAoY2xpY2spPVwiTmV4dCgpXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1uZXh0XCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIOWPs+S4i+inkumhteeggSAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltZy1pbmRleFwiPnt7Y3VycmVudCsxfX0ve3twaWN0dXJlTGlzdC5sZW5ndGh9fTwvZGl2PlxuICAgICAgICA8IS0tIOe8qeaUvuaXi+i9rOaMiemSrue7hCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ib3hcIj5cbiAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsnaG92ZXItZGlzYWJsZWQnOmltZ09wZXJhdGUubnVtPT09NH1cIiBjbGFzcz1cImljb24tcGljdHVyZS16b29tLWluIHNjYWxlLWJpZ1wiIChjbGljayk9XCJzY2FsZUJpZygpXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwieydob3Zlci1kaXNhYmxlZCc6aW1nT3BlcmF0ZS5udW09PTAuNX1cIiBjbGFzcz1cImljb24tcGljdHVyZS16b29tLW91dCAgc2NhbGUtc21hbGxcIiAoY2xpY2spPVwic2NhbGVTbWFsbCgpXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBpY3R1cmUtY291bnRlcmNsb2Nrd2lzZSByb3V0YXRlLW5pXCIgKGNsaWNrKT1cInJvdXRhdGVOaSgpXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBpY3R1cmUtY2xvY2t3aXNlIHJvdXRhdGUtc2h1blwiIChjbGljayk9XCJyb3V0YXRlU2h1bigpXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2BAY2hhcnNldCBcIlVURi04XCI7LnBpY3R1cmUtdmlld2VyIC5pbWctbWFza3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6IzAwMDtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7LW1vei1vcGFjaXR5Oi4zO29wYWNpdHk6Ljg7ei1pbmRleDo5OTk4O2Rpc3BsYXk6YmxvY2t9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q4ZGI7cG9zaXRpb246Zml4ZWQ7bGVmdDo1MCU7dG9wOjUwJTtib3JkZXI6MXB4IHNvbGlkICNjY2M7ei1pbmRleDo5OTk5O3RleHQtYWxpZ246Y2VudGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6bm9uZX0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5jbG9zZXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyMnB4O2hlaWdodDoyMnB4O2JvcmRlci1yYWRpdXM6MTFweDtib3JkZXI6MXB4IHNvbGlkICNmZmY7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KTt0b3A6OHB4O3JpZ2h0OjhweDt6LWluZGV4Ojk5OTk7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6OHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLmNsb3NlIC5pY29uLWNsb3Nle2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDoxcHg7bWFyZ2luLWxlZnQ6MXB4O2ZvbnQtc2l6ZToxOHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLmltZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVufS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLmltZy1ib3ggbGl7YmFja2dyb3VuZC1jb2xvcjojZDdkOGRiO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTE7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTt0cmFuc2l0aW9uOi4xc30ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5pbWctYm94IGxpIGltZ3twb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjFzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4xczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMXMsLXdlYmtpdC10cmFuc2Zvcm0gLjFzfS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgYXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO21hcmdpbi10b3A6LTMwcHg7d2lkdGg6NjBweDtoZWlnaHQ6NjBweDt6LWluZGV4OjQwMDtiYWNrZ3JvdW5kOnVybCgvYXNzZXRzL2ltYWdlcy9DWGljb24ucG5nKSAwIDAvMTkycHggMTQ0cHggbm8tcmVwZWF0fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLm5leHR7cmlnaHQ6MjBweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOi01NHB4IC03OHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLnByZXZ7bGVmdDoyMHB4O2JhY2tncm91bmQtcG9zaXRpb246LTU0cHggLTZweH0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5uZXh0OmhvdmVye2JhY2tncm91bmQtcG9zaXRpb246LTEyNnB4IC03OHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLnByZXY6aG92ZXJ7YmFja2dyb3VuZC1wb3NpdGlvbjotMTI2cHggLTZweH0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5uZXh0LXBhZ2UsLnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAucHJldi1wYWdle3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bWFyZ2luLXRvcDotMzBweDt3aWR0aDo2MHB4O2hlaWdodDo2MHB4O3otaW5kZXg6NDAwO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMil9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAubmV4dC1wYWdlIHNwYW4sLnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAucHJldi1wYWdlIHNwYW57ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOjZweDtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KTtmb250LXNpemU6NDhweH0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5wcmV2LXBhZ2V7bGVmdDoyMHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLm5leHQtcGFnZXtyaWdodDoyMHB4fS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLm5leHQtcGFnZTpob3ZlciwucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5wcmV2LXBhZ2U6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC43KX0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5uZXh0LXBhZ2U6aG92ZXIgc3BhbiwucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5wcmV2LXBhZ2U6aG92ZXIgc3Bhbntjb2xvcjojZmZmfS5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLmltZy1pbmRleHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MTVweDtyaWdodDoyMnB4O3otaW5kZXg6MTAxO2NvbG9yOiMzMjMyMzM7Zm9udC1zaXplOjE2cHg7aGVpZ2h0OjIycHg7bGluZS1oZWlnaHQ6MjJweDt3aWR0aDo0MnB4O3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1yYWRpdXM6MnB4O2JhY2tncm91bmQ6cmdiYSgyMTUsMjE2LDIxOSwuNyl9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAuYnRuLWJveHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwOTtib3R0b206MTJweDtsZWZ0OjUwJTttYXJnaW4tbGVmdDotNzNweDtwYWRkaW5nOjNweCA1cHg7aGVpZ2h0OjMwcHg7d2lkdGg6MTQ3cHg7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41KTtib3JkZXItcmFkaXVzOjJweDtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5idG4tYm94IHNwYW57ZmxvYXQ6bGVmdDttYXJnaW46MCA1cHh9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAuYnRuLWJveCAucm91dGF0ZS1uaTpob3ZlciwucGljdHVyZS12aWV3ZXIgLmltZy1jb250ZW50IC5idG4tYm94IC5yb3V0YXRlLXNodW46aG92ZXIsLnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAuYnRuLWJveCAuc2NhbGUtYmlnOmhvdmVyLC5waWN0dXJlLXZpZXdlciAuaW1nLWNvbnRlbnQgLmJ0bi1ib3ggLnNjYWxlLXNtYWxsOmhvdmVye2NvbG9yOiNmZmZ9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudCAuYnRuLWJveCAuaG92ZXItZGlzYWJsZWQ6aG92ZXJ7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9LnBpY3R1cmUtdmlld2VyIC5pbWctY29udGVudC1jb21wb25ldHtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MDtsZWZ0OjA7bWFyZ2luOjB9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdpbWdNb3ZlJywgW1xuICAgICAgLyoqIOS4jeaYvuekuiAqL1xuICAgICAgc3RhdGUoJ29mZicsIHN0eWxlKHsgJ2Rpc3BsYXknOiAnbm9uZScsICd6LWluZGV4JzogJzAnLCAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoMCknIH0pKSxcbiAgICAgIC8qKiDkuIrkuIDlvKDlm77niYcgKi9cbiAgICAgIHN0YXRlKCdwcmV2Jywgc3R5bGUoe1xuICAgICAgICAnei1pbmRleCc6ICcxJyxcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKC0xMDAlKSdcbiAgICAgIH0pKSxcbiAgICAgIC8qKiDkuIvkuIDlvKDlm77niYcgKi9cbiAgICAgIHN0YXRlKCduZXh0Jywgc3R5bGUoeyAnei1pbmRleCc6ICcyJywgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKDEwMCUpJyB9KSksXG4gICAgICAvKiog5b2T5YmN5Zu+54mHICovXG4gICAgICBzdGF0ZSgnb24nLCBzdHlsZSh7ICd6LWluZGV4JzogJzMnLCAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoMCknIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ByZXY9Pm9uJywgW1xuICAgICAgICBhbmltYXRlKCcwLjNzIGVhc2UtaW4nKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCduZXh0PT5vbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMC4zcyBlYXNlLWluJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignb249PnByZXYnLCBbXG4gICAgICAgIGFuaW1hdGUoJzAuM3MgZWFzZS1pbicpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ29uPT5uZXh0JywgW1xuICAgICAgICBhbmltYXRlKCcwLjNzIGVhc2UtaW4nKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBpY3R1cmVWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcGljdHVyZUxpc3Q6IGFueSA9IFtdO1xuICBAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx7IHN0YXR1czogYm9vbGVhbiB9PigpO1xuICAvLyBASW5wdXQoKSBjdXJyZW50OiBudW1iZXIgPSAwO1xuICBAVmlld0NoaWxkKCdpbWcnKSBpbWdCb3g6IEVsZW1lbnRSZWY7ICAvLyDlm77niYfniLboioLngrlcbiAgQFZpZXdDaGlsZCgnaW1nQ29udGVudCcpIGltZ0NvbnRlbnQ6IEVsZW1lbnRSZWY7IC8vIOWuueWZqOWFg+e0oFxuICAvLyDorr7nva7lrrnlmajnmoTpu5jorqTlrr3pq5jvvIzlj6/pgILphY0g5Y+v6YWN572u5bGe5oCnXG4gIEBJbnB1dCgpIG1heFdpZHRoOiBudW1iZXIgPSA4MDA7XG4gIEBJbnB1dCgpIG1heEhlaWdodDogbnVtYmVyID0gNjAwO1xuICBASW5wdXQoKSBqZGJTaG93VHlwZTogbnVtYmVyID0gMTsgLy8g5piv5rWu5bGC6L+Y5piv5bWM5YWl57uE5Lu277yM6buY6K6k5Li6Me+8jOS9nOS4uua1ruWxgu+8jOiLpeS4ujLvvIzliJnooajnpLrmmK/ltYzlhaXnu4Tku7ZcblxuICBfamRiTWFzdGVyID0gdHJ1ZTsgLy8g5piv5ZCm6ZyA6KaBbWFzdGVy6YGu572p77yM6buY6K6k6ZyA6KaB6YGu572p5bGCXG4gIF9qZGJDbGVhciA9IHRydWU7Ly8g5piv5ZCm6ZyA6KaB5oyJ6ZKu5Y+J77yM6buY6K6k6ZyA6KaBXG4gIGRyYWdTdGF0dXMgPSBmYWxzZTtcbiAgY3VycmVudCA9IDA7IC8vIOWxleekuuWbvueJh+S4i+agh++8jOm7mOiupOS4ujBcblxuICBlbGVtOiBhbnk7XG5cbiAgaW1nT3BlcmF0ZSA9IHtcbiAgICBudW06IDEsXG4gICAgZGVnbnVtOiAwXG4gIH07XG5cblxuICBASW5wdXQoKVxuICBzZXQgamRiTWFzdGVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5famRiTWFzdGVyID0gdGhpcy50b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGpkYk1hc3RlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5famRiTWFzdGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGpkYkNsZWFyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5famRiQ2xlYXIgPSB0aGlzLnRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgamRiQ2xlYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2pkYkNsZWFyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGpkYkN1cnJlbnQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA+IHRoaXMucGljdHVyZUxpc3QubGVuZ3RoIHx8IHZhbHVlIDwgMCkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgamRiQ3VycmVudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVsZW0gPSB0aGlzLmltZ0JveC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuOyAgLy8g5omA5pyJ55qEbGlcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLnBpY3R1cmVMaXN0KSB7XG4gICAgICB0aGlzLnBpY3R1cmVMaXN0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbihpbmRleCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyDorr7nva7lhYPntKDmoLflvI9cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGltZ0NvbnRlbnQgPSB0aGlzLmltZ0NvbnRlbnQubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShpbWdDb250ZW50LCAnaGVpZ2h0JywgdGhpcy5tYXhIZWlnaHQgKyAncHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShpbWdDb250ZW50LCAnd2lkdGgnLCB0aGlzLm1heFdpZHRoICsgJ3B4Jyk7XG5cbiAgICBpZiAodGhpcy5qZGJTaG93VHlwZSA9PSAxKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShpbWdDb250ZW50LCAnbWFyZ2luLWxlZnQnLCAtIHRoaXMubWF4V2lkdGggLyAyICsgJ3B4Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShpbWdDb250ZW50LCAnbWFyZ2luLXRvcCcsIC0gdGhpcy5tYXhIZWlnaHQgLyAyICsgJ3B4Jyk7XG4gICAgfVxuICB9XG5cbiAgLy8g6YeN572u5Zu+54mH5L2N572uXG4gIHJlc2V0UG9zaXRpb24oaW5kZXgpIHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIC8vIOiOt+WPluW9k+WJjeWKoOi9veWbvueJh+WuvemrmFxuICAgICAgbGV0IHcgPSBpbWFnZS53aWR0aDtcbiAgICAgIGxldCBoID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgbGV0IGhSYXRpbztcbiAgICAgIGxldCB3UmF0aW87XG4gICAgICAvLyDorr7nva7pu5jorqTmr5Tkvovku6Xlj4rlrrnlmajlrr3pq5hcbiAgICAgIGNvbnN0IGltZ1JhdGUgPSB3IC8gaDsgLy8g5Zu+54mH5a696auY5q+UXG4gICAgICAvLyBjb25zdCBtYXhXaWR0aCA9IDgwMDtcbiAgICAgIC8vIGNvbnN0IG1heEhlaWdodCA9IDYwMDtcbiAgICAgIHdSYXRpbyA9IHRoaXMubWF4V2lkdGggLyB3O1xuICAgICAgaFJhdGlvID0gdGhpcy5tYXhIZWlnaHQgLyBoO1xuXG4gICAgICBpZiAod1JhdGlvID4gMSAmJiBoUmF0aW8gPiAxKSB7XG4gICAgICAgIC8vIOS4pOiAheavlOS+i+Wdh+Wkp+S6jjHooajnpLrlm77kuLrlsI/lm77vvIzlrr3pq5jmnKrovr7liLA4MDAqNjAwLOWImeWPluWOn+WbvuWkp+Wwj1xuICAgICAgICB3ID0gdztcbiAgICAgICAgaCA9IGg7XG4gICAgICB9IGVsc2UgaWYgKHdSYXRpbyA8IDEgJiYgaFJhdGlvIDwgMSkge1xuICAgICAgICAvLyDkuKTogIXmr5TkvovlnYflsI/kuo4x6KGo56S65Zu+5Li65aSn5Zu+77yM5a696auY6L6+5YiwODAwKjYwMCzliJnlj5blrrnlmajlpKflsI9cbiAgICAgICAgaWYgKGltZ1JhdGUgPiAxKSB7XG4gICAgICAgICAgLy8g5a695Zu+XG4gICAgICAgICAgdyA9IHRoaXMubWF4V2lkdGg7XG4gICAgICAgICAgaCA9IHcgLyBpbWdSYXRlO1xuICAgICAgICB9IGVsc2UgaWYgKGltZ1JhdGUgPCAxKSB7XG4gICAgICAgICAgLy8g6ZW/5Zu+XG4gICAgICAgICAgaCA9IHRoaXMubWF4SGVpZ2h0O1xuICAgICAgICAgIHcgPSBoICogaW1nUmF0ZTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKHdSYXRpbyA+IDEgJiYgaFJhdGlvIDwgMSkge1xuICAgICAgICAvLyDooajnpLrkuLrplb/lm77niYfvvIzliJnpq5jkuLo2MDDvvIzlrr3nrYnmr5TkvovnvKnmlL7lj5blgLxcbiAgICAgICAgaCA9IHRoaXMubWF4SGVpZ2h0O1xuICAgICAgICB3ID0gdyAqIGhSYXRpbztcbiAgICAgIH0gZWxzZSBpZiAod1JhdGlvIDwgMSAmJiBoUmF0aW8gPiAxKSB7XG4gICAgICAgIC8vIOihqOekuuS4uuWuveWbvueJh++8jOWImeWuveS4ujgwMO+8jOmrmOetieavlOS+i+e8qeaUvuWPluWAvFxuICAgICAgICBoID0gaCAqIHdSYXRpbztcbiAgICAgICAgdyA9IHRoaXMubWF4V2lkdGg7XG4gICAgICB9XG5cbiAgICAgIC8vIOiuvue9ruWbvueJh+WxleekuuWuvemrmFxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbGVtW2luZGV4XS5jaGlsZHJlblswXSwgJ2hlaWdodCcsIGggKyAncHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVtpbmRleF0uY2hpbGRyZW5bMF0sICd3aWR0aCcsIHcgKyAncHgnKTtcblxuICAgICAgaWYgKHcgPT09IHRoaXMubWF4V2lkdGggJiYgaCA9PT0gdGhpcy5tYXhIZWlnaHQpIHtcbiAgICAgICAgLy8g6K6+572u5Zu+54mH5L2N572u5L2/5YW25Z6C55u05rC05bmz5bGF5LitXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVtpbmRleF0uY2hpbGRyZW5bMF0sICd0b3AnLCAnMHB4Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVtpbmRleF0uY2hpbGRyZW5bMF0sICdsZWZ0JywgJzBweCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6K6+572u5Zu+54mH5L2N572u5L2/5YW25Z6C55u05rC05bmz5bGF5LitXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVtpbmRleF0uY2hpbGRyZW5bMF0sICd0b3AnLCAodGhpcy5tYXhIZWlnaHQgLSBoKSAvIDIgKyAncHgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbGVtW2luZGV4XS5jaGlsZHJlblswXSwgJ2xlZnQnLCAodGhpcy5tYXhXaWR0aCAtIHcpIC8gMiArICdweCcpO1xuICAgICAgfVxuXG4gICAgfTtcbiAgICBpbWFnZS5zcmMgPSB0aGlzLnBpY3R1cmVMaXN0W2luZGV4XS5pbWdVcmw7XG4gIH1cblxuICAvLyDliIfmjaLliqjnlLtcbiAgSW1nU3RhdGUoaW5kZXgpIHtcbiAgICBpZiAodGhpcy5waWN0dXJlTGlzdCAmJiB0aGlzLnBpY3R1cmVMaXN0Lmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaW5kZXggPT09IDAgPyAnb24nIDpcbiAgICAgICAgICBpbmRleCA9PT0gMSA/ICduZXh0JyA6XG4gICAgICAgICAgICBpbmRleCA9PT0gdGhpcy5waWN0dXJlTGlzdC5sZW5ndGggLSAxID8gJ3ByZXYnIDpcbiAgICAgICAgICAgICAgJ29mZic7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudCA9PT0gdGhpcy5waWN0dXJlTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybiBpbmRleCA9PT0gdGhpcy5waWN0dXJlTGlzdC5sZW5ndGggLSAxID8gJ29uJyA6XG4gICAgICAgICAgaW5kZXggPT09IHRoaXMucGljdHVyZUxpc3QubGVuZ3RoIC0gMiA/ICdwcmV2JyA6XG4gICAgICAgICAgICBpbmRleCA9PT0gMCA/ICduZXh0JyA6XG4gICAgICAgICAgICAgICdvZmYnO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChpbmRleCAtIHRoaXMuY3VycmVudCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdvbic7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gJ25leHQnO1xuICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgIHJldHVybiAncHJldic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdvZmYnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ29mZic7XG4gICAgfVxuICB9XG5cbiAgLy8g5LiL5LiA5byg5Zu+XG4gIE5leHQoKSB7XG4gICAgdGhpcy5yZXNldEltZ0RhdGEoKTtcbiAgICB0aGlzLmN1cnJlbnQgPSAodGhpcy5jdXJyZW50ICsgMSkgJSB0aGlzLnBpY3R1cmVMaXN0Lmxlbmd0aDtcbiAgICB0aGlzLnJlc2V0UG9zaXRpb24odGhpcy5jdXJyZW50IC0gMSk7XG4gICAgLy8g5L+u5pS554q25oCB77yM5L2/5ouW5Yqo5Zu+54mH5Zue5Yiw5Y6f5p2l5L2N572uXG4gICAgLy8gdGhpcy5kcmFnU3RhdHVzID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIOS4iuS4gOW8oOWbvlxuICBQcmV2KCkge1xuICAgIHRoaXMucmVzZXRJbWdEYXRhKCk7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50IC0gMSA8IDAgPyB0aGlzLnBpY3R1cmVMaXN0Lmxlbmd0aCAtIDEgOiB0aGlzLmN1cnJlbnQgLSAxO1xuICAgIHRoaXMucmVzZXRQb3NpdGlvbih0aGlzLmN1cnJlbnQgKyAxKTtcbiAgICAvLyDkv67mlLnnirbmgIHvvIzkvb/mi5bliqjlm77niYflm57liLDljp/mnaXkvY3nva5cbiAgICAvLyB0aGlzLmRyYWdTdGF0dXMgPSB0cnVlO1xuICB9XG5cbiAgLy8g5YWz6Zet5Zu+54mH5p+l55yL5ZmoIF9f5YWz6Zet5by55qGG5ZCO5YaN5qyh5omT5byA5omA5pyJ5ouW5ou95ZCO55qE5L2N572u6YO95Lya6Ieq5Yqo5b2S5Li677yM5Zug5Li66Kem5Y+R5LqGb25DaGFuZ2Vz5pa55rOVXG4gIGNsb3NlTW9kZWwoKSB7XG4gICAgdGhpcy5yZXNldEltZ0RhdGEoKTtcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHsgc3RhdHVzOiBmYWxzZSB9KTtcbiAgfVxuXG4gIC8vIOaUvuWkpyA1MCUgMTAwJSAyMDAlIDQwMCVcbiAgc2NhbGVCaWcoKSB7XG4gICAgdGhpcy5pbWdPcGVyYXRlLm51bSA9IHRoaXMuaW1nT3BlcmF0ZS5udW0gKiAyO1xuICAgIGlmICh0aGlzLmltZ09wZXJhdGUubnVtID4gNCkge1xuICAgICAgdGhpcy5pbWdPcGVyYXRlLm51bSA9IDQ7XG4gICAgfVxuICAgIGNvbnN0IHJhdGUgPSAnc2NhbGUoJyArIDEgKiB0aGlzLmltZ09wZXJhdGUubnVtICsgJywnICsgMSAqIHRoaXMuaW1nT3BlcmF0ZS5udW0gKyAnKSByb3RhdGUoJyArICgtdGhpcy5pbWdPcGVyYXRlLmRlZ251bSAqIDkwKSArICdkZWcpJztcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmVsZW1bdGhpcy5jdXJyZW50XS5jaGlsZHJlblswXSwgJ3RyYW5zZm9ybScsIHJhdGUpO1xuICB9XG5cbiAgLy8g57yp5bCPXG4gIHNjYWxlU21hbGwoKSB7XG4gICAgdGhpcy5pbWdPcGVyYXRlLm51bSA9IHRoaXMuaW1nT3BlcmF0ZS5udW0gLyAyO1xuICAgIGlmICh0aGlzLmltZ09wZXJhdGUubnVtIDwgMSkge1xuICAgICAgdGhpcy5pbWdPcGVyYXRlLm51bSA9IDAuNTtcbiAgICB9XG4gICAgY29uc3QgcmF0ZSA9ICdzY2FsZSgnICsgMSAqIHRoaXMuaW1nT3BlcmF0ZS5udW0gKyAnLCcgKyAxICogdGhpcy5pbWdPcGVyYXRlLm51bSArICcpIHJvdGF0ZSgnICsgKC10aGlzLmltZ09wZXJhdGUuZGVnbnVtICogOTApICsgJ2RlZyknO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVt0aGlzLmN1cnJlbnRdLmNoaWxkcmVuWzBdLCAndHJhbnNmb3JtJywgcmF0ZSk7XG4gIH1cblxuICAvLyDpgIbml7bpkojml4vovaxcbiAgcm91dGF0ZU5pKCkge1xuICAgIHRoaXMuaW1nT3BlcmF0ZS5kZWdudW0rKztcbiAgICBjb25zdCByYXRlID0gJ3NjYWxlKCcgKyAxICogdGhpcy5pbWdPcGVyYXRlLm51bSArICcsJyArIDEgKiB0aGlzLmltZ09wZXJhdGUubnVtICsgJykgcm90YXRlKCcgKyAoLXRoaXMuaW1nT3BlcmF0ZS5kZWdudW0gKiA5MCkgKyAnZGVnKSc7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmVsZW1bdGhpcy5jdXJyZW50XS5jaGlsZHJlblswXSwgJ3RyYW5zZm9ybScsIHJhdGUpO1xuICB9XG5cbiAgLy8g6aG65pe26ZKI5peL6L2sXG4gIHJvdXRhdGVTaHVuKCkge1xuICAgIHRoaXMuaW1nT3BlcmF0ZS5kZWdudW0tLTtcblxuICAgIGNvbnN0IHJhdGUgPSAnc2NhbGUoJyArIDEgKiB0aGlzLmltZ09wZXJhdGUubnVtICsgJywnICsgMSAqIHRoaXMuaW1nT3BlcmF0ZS5udW0gKyAnKSByb3RhdGUoJyArICgtdGhpcy5pbWdPcGVyYXRlLmRlZ251bSAqIDkwKSArICdkZWcpJztcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxlbVt0aGlzLmN1cnJlbnRdLmNoaWxkcmVuWzBdLCAndHJhbnNmb3JtJywgcmF0ZSk7XG4gIH1cblxuICAvLyDph43nva7lm77niYfmlbDmja5cbiAgcmVzZXRJbWdEYXRhKCkge1xuICAgIHRoaXMuaW1nT3BlcmF0ZSA9IHtcbiAgICAgIG51bTogMSxcbiAgICAgIGRlZ251bTogMFxuICAgIH07XG4gICAgY29uc3QgcmF0ZSA9ICdzY2FsZSgxLDEpIHJvdGF0ZSgwZGVnKSc7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbGVtW3RoaXMuY3VycmVudF0uY2hpbGRyZW5bMF0sICd0cmFuc2l0aW9uJywgJ3RyYW5zZm9ybSAwLjJzIGxpbmVhciAwLjRzJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbGVtW3RoaXMuY3VycmVudF0uY2hpbGRyZW5bMF0sICd0cmFuc2Zvcm0nLCByYXRlKTtcbiAgfVxuXG4gIC8vIOi9rOaNouS4umJvb2xlYW4s5Y2z5a6e546w5pyJ6L+Z5Liq5a2X5q615bCx6K6k5Li65Li6dHJ1ZSzmsqHmnInljbPkuLpmYWxzZVxuICB0b0Jvb2xlYW4odmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICcnIHx8ICh2YWx1ZSAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnBpY3R1cmVMaXN0ID0gbnVsbDtcbiAgICB0aGlzLmltZ0JveCA9IG51bGw7XG4gICAgdGhpcy5pbWdDb250ZW50ID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuICB9XG59XG4iXX0=