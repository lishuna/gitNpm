/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  下拉框功能：
  种类：单选，多选，选几项
  样式：高度 middle small large
*/
import { Component, Input, forwardRef, Renderer2, ElementRef, ViewChild, Renderer } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class JdbPlgSelectComponent {
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
                template: `<!-- 单选 -->
<div *ngIf="_jdbMode=='chooseOne'" #inputDom class="jdb-plg-select-one" (click)="dialogShow($event)" [ngClass]="_classMap" [ngStyle]="{'width':_width}">
    <!-- placeHolder -->
    <div class="jdb-plg-select-placeholder" [hidden]="inputText!=''">{{_placeHolder}}</div>
    <!-- 单选 -->
    <!-- <span class="chooseOne" [hidden]="inputText==''">{{inputText}}</span> -->
    <input class="chooseOne chooseOneInput" [hidden]="inputText==''" type="text" [(ngModel)]="inputText" readonly>
    <ul #optionList [ngClass]="{ 'options-show':show, 'options-no-margin':!spaceFlex} " class="options ">
        <!-- 单选 -->
        <li *ngFor="let option of _selectList " (click)="item($event,option) " [ngClass]="{active:ngModelValue===option[_optionValue],disabled:option[_jdbItemDisabled] === _jdbSureDisabled} ">
            <img class="img-box" *ngIf="_showImgBox&&option.imgUrl" [src]="option.imgUrl" alt="">
            <span class="img-box" *ngIf="_showImgBox&&!option.imgUrl"></span>
            <span class="text-box">{{_optionText=='option'?option:option[_optionText]}}</span>
        </li>
    </ul>
    <!-- 清空图标 -->
    <span class="close-icon icon-empty " [hidden]="!isShowClear " (click)="clearInputText($event) "></span>
    <!-- 单选时下拉图标 -->
    <span class="select-icon icon-select-arrow " [hidden]="isShowClear "></span>
</div>

<!-- 多选 -->
<div *ngIf="_jdbMode=='chooseMore' " #inputDom class="jdb-plg-select-more " (click)="dialogShow($event) " [ngClass]="_classMap " [ngStyle]="{ 'width':_width} ">
    <!-- placeHolder -->
    <div class="jdb-plg-select-placeholder " [hidden]="inputText.length !=0 ">{{_placeHolder}}</div>
    <!-- 多选item -->
    <ul class="chooseMore ">
        <li *ngFor="let item of inputText ">
            {{item.text}}
            <span class="item-delete icon-close " (click)="deleteMoreItem($event,item) "></span>
        </li>
    </ul>
    <ul #optionList [ngClass]="{ 'options-show':show, 'options-no-margin':!spaceFlex} " class="options ">
        <li class="choose-more " *ngFor="let option of _selectList " (click)="chooseMore($event,option) " [ngClass]="{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} ">
            <!-- {{_optionText=='option'?option:option[_optionText]}} -->
            <img class="img-box" *ngIf="_showImgBox&&option.imgUrl" [src]="option.imgUrl" alt="">
            <span class="img-box" *ngIf="_showImgBox&&!option.imgUrl"></span>
            <span class="text-box">{{_optionText=='option'?option:option[_optionText]}}</span>
            <span [hidden]="!moreIndex(option) " class="choose-right icon-selected "></span>
        </li>
    </ul>
    <!-- 清空图标 -->
    <span class="close-icon icon-empty " [hidden]="!isShowClear " (click)="clearInputText($event) "></span>
</div>

<!-- 选中几项 -->
<div *ngIf="_jdbMode=='chooseNum' " #inputDom class="jdb-plg-select-num " (click)="dialogShow($event) " [ngClass]="_classMap " [ngStyle]="{ 'width':_width} ">
    <!-- placeHolder -->
    <div class="jdb-plg-select-placeholder " [hidden]="inputText!=0 ">{{_placeHolder}}</div>
    <span class="choose-tip " [hidden]="inputText==0 ">已选中{{inputText}}项</span>
    <ul #optionList [ngClass]="{ 'options-show':show, 'options-no-margin':!spaceFlex} " class="options ">
        <li class="choose-more " *ngFor="let option of _selectList " (click)="numClick($event,option) " [ngClass]="{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} ">
            <!-- {{_optionText=='option'?option:option[_optionText]}} -->
            <img class="img-box" *ngIf="_showImgBox&&option.imgUrl" [src]="option.imgUrl" alt="">
            <span class="img-box" *ngIf="_showImgBox&&!option.imgUrl"></span>
            <span class="text-box">{{_optionText=='option'?option:option[_optionText]}}</span>
            <span [hidden]="!moreIndex(option) " class="choose-right icon-selected "></span>
        </li>
    </ul>
    <!-- 清空图标 -->
    <span class="close-icon icon-empty " [hidden]="!isShowClear " (click)="clearInputText($event) "></span>
    <span class="select-icon icon-select-arrow " [hidden]="isShowClear "></span>
</div>

<!-- 遮罩层 -->
<div class="jdb-plg-select-master " *ngIf="show "></div>`,
                styles: [`.jdb-plg-select-more,.jdb-plg-select-num,.jdb-plg-select-one{position:relative;display:inline-block;width:200px;border:1px solid #afb0b3;border-radius:2px;background:#fff;text-align:left;cursor:pointer}.jdb-plg-select-more .jdb-plg-select-placeholder,.jdb-plg-select-num .jdb-plg-select-placeholder,.jdb-plg-select-one .jdb-plg-select-placeholder{color:#afb0b3;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.jdb-plg-select-more .options,.jdb-plg-select-num .options,.jdb-plg-select-one .options{position:absolute;overflow-y:scroll;z-index:9999;opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:0 0;transform-origin:0 0;left:-1px;border:1px solid #afb0b3;width:100%;max-height:190px;background:#fff}.jdb-plg-select-more .options li,.jdb-plg-select-num .options li,.jdb-plg-select-one .options li{padding:5px 12px;min-height:30px;color:#323233}.jdb-plg-select-more .options li:hover,.jdb-plg-select-num .options li:hover,.jdb-plg-select-one .options li:hover{background-color:#f0f1f5;color:#323233}.jdb-plg-select-more .options li .choose-right,.jdb-plg-select-num .options li .choose-right,.jdb-plg-select-one .options li .choose-right{float:right;margin-top:-2px}.jdb-plg-select-more .options li .img-box,.jdb-plg-select-num .options li .img-box,.jdb-plg-select-one .options li .img-box{display:inline-block;vertical-align:middle;height:18px;width:18px}.jdb-plg-select-more .options li .text-box,.jdb-plg-select-num .options li .text-box,.jdb-plg-select-one .options li .text-box{display:inline-block;vertical-align:middle}.jdb-plg-select-more .options .choose-more,.jdb-plg-select-num .options .choose-more,.jdb-plg-select-one .options .choose-more{margin-bottom:1px}.jdb-plg-select-more .options .active,.jdb-plg-select-more .options .active:hover,.jdb-plg-select-num .options .active,.jdb-plg-select-num .options .active:hover,.jdb-plg-select-one .options .active,.jdb-plg-select-one .options .active:hover{background-color:#3f69f2;color:#fff}.jdb-plg-select-more .options .disabled,.jdb-plg-select-num .options .disabled,.jdb-plg-select-one .options .disabled{background-color:none;color:#afb0b3;cursor:not-allowed}.jdb-plg-select-more .options .disabled:hover,.jdb-plg-select-num .options .disabled:hover,.jdb-plg-select-one .options .disabled:hover{background-color:none;color:#afb0b3}.jdb-plg-select-more .options-show,.jdb-plg-select-num .options-show,.jdb-plg-select-one .options-show{opacity:1;-webkit-transform:scaleY(1);transform:scaleY(1)}.jdb-plg-select-more .close-icon,.jdb-plg-select-num .close-icon,.jdb-plg-select-one .close-icon{position:absolute;right:5px;top:50%;margin-top:-12px;color:#7d7e80}.jdb-plg-select-more .close-icon:hover,.jdb-plg-select-num .close-icon:hover,.jdb-plg-select-one .close-icon:hover{color:#323233}.jdb-plg-select-more .select-icon,.jdb-plg-select-num .select-icon,.jdb-plg-select-one .select-icon{position:absolute;right:5px;top:50%;margin-top:-12px}.jdb-plg-select-one .chooseOne{color:#333}.jdb-plg-select-one .chooseOneInput{border:none;height:100%;width:100%;padding-right:18px}.jdb-plg-select-more .chooseMore li,.jdb-plg-select-num .chooseMore li{position:relative;display:inline-block;margin-right:5px;padding:0 5px;height:22px;font-size:13px;border:1px solid #d7d8db;border-radius:2px;color:#333;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.jdb-plg-select-more .chooseMore li .item-delete,.jdb-plg-select-num .chooseMore li .item-delete{font-size:12px}.jdb-plg-select-active{border:1px solid #3f69f2}.jdb-plg-select-disabled{background:#f0f1f5}.small{min-height:24px;padding:2px 10px;font-size:12px}.small .options{margin-top:7px}.small .options-no-margin{margin:0}.middle{min-height:30px;padding:5px 10px;font-size:13px}.middle .options{margin-top:10px}.middle .options-no-margin{margin:0}.middle .choose-tip,.middle .chooseOne,.middle .jdb-plg-select-placeholder{height:18px;line-height:18px}.middle .choose-tip,.middle .chooseOne{display:block}.middle .chooseMore li{margin-bottom:3px}.large{min-height:40px;padding:9px 10px;font-size:14px}.large .options{margin-top:14px}.large .options-no-margin{margin:0}.large .choose-tip,.large .chooseOne,.large .jdb-plg-select-placeholder{height:20px;line-height:20px}.large .choose-tip,.large .chooseOne{display:block}.large .chooseMore li{margin-bottom:8px}.jdb-plg-select-bottom-middle{padding:3px 10px 0}.jdb-plg-select-bottom-large{padding:8px 10px 0}.jdb-plg-select-master{position:fixed;top:0;bottom:0;left:0;width:100%;background:0 0;z-index:9998}`],
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
function JdbPlgSelectComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    JdbPlgSelectComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    JdbPlgSelectComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    JdbPlgSelectComponent.propDecorators;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._selectList;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._size;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._width;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._optionText;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._optionValue;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._optionPosition;
    /** @type {?} */
    JdbPlgSelectComponent.prototype.isShowClear;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._jdbClear;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._jdbDisabled;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._jdbMode;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._placeHolder;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._chooseMoreArray;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._classMap;
    /** @type {?} */
    JdbPlgSelectComponent.prototype.listHeight;
    /** @type {?} */
    JdbPlgSelectComponent.prototype.savaHeight;
    /** @type {?} */
    JdbPlgSelectComponent.prototype.spaceFlex;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._showImgBox;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._jdbItemDisabled;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._jdbSureDisabled;
    /** @type {?} */
    JdbPlgSelectComponent.prototype._jdbNoDisabled;
    /** @type {?} */
    JdbPlgSelectComponent.prototype.jdbClassName;
    /** @type {?} */
    JdbPlgSelectComponent.prototype.inputDom;
    /** @type {?} */
    JdbPlgSelectComponent.prototype.optionList;
    /** @type {?} */
    JdbPlgSelectComponent.prototype.show;
    /** @type {?} */
    JdbPlgSelectComponent.prototype.inputText;
    /** @type {?} */
    JdbPlgSelectComponent.prototype.ngModelValue;
    /** @type {?} */
    JdbPlgSelectComponent.prototype.onChange;
    /** @type {?} */
    JdbPlgSelectComponent.prototype.renderer2;
    /** @type {?} */
    JdbPlgSelectComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRiLXBsZy1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlc3QtdWkvY29yZS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9qZGItcGxnLXNlbGVjdC9qZGItcGxnLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsVUFBVSxFQUVWLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULFFBQVEsRUFHVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFnRnpFLE1BQU07Ozs7O0lBb0pKLFlBQW9CLFNBQW9CLEVBQVUsUUFBa0I7UUFBaEQsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7cUJBbEo1RCxRQUFROzJCQUVGLE1BQU07NEJBQ0wsT0FBTzsyQkFFUixLQUFLO3lCQUNQLEtBQUs7NEJBQ0YsS0FBSzt3QkFDVCxXQUFXOzRCQUNQLEtBQUs7Z0NBQ0QsRUFBRTt5QkFDVCxFQUFFOzBCQUVELElBQUk7eUJBQ0wsSUFBSTsyQkFDRixLQUFLO2dDQUNBLFVBQVU7Z0NBQ1YsQ0FBQzs4QkFDSCxDQUFDOzs0QkFHTSxFQUFFO29CQTBIbkIsS0FBSzs0QkFFRyxFQUFFO3dCQW1MZ0IsR0FBRyxFQUFFLENBQUMsSUFBSTtLQWpMMUM7Ozs7O1FBMUhHLGVBQWUsQ0FBQyxLQUFLO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Ozs7O0lBRWhDLElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztLQUM5Qjs7Ozs7UUFJRyxlQUFlLENBQUMsS0FBSztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDOzs7OztJQUVoQyxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJ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RyxJQUFJLENBQUM7WUFDakIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUM7O1FBRUQsT0FBTztZQUNMLFNBQVM7WUFDVCxVQUFVO1NBQ1gsQ0FBQztLQUNIOzs7WUF2cEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lEQWlFNkM7Z0JBQ3ZELE1BQU0sRUFBRSxDQUFDLHk5SUFBeTlJLENBQUM7Z0JBQ24rSSxTQUFTLEVBQUU7b0JBQ1Q7O3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUM7d0JBQ3BELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7Ozs7WUF0RkMsU0FBUztZQUdULFFBQVE7Ozs2QkEyR1AsS0FBSztnQ0FHTCxLQUFLO2dDQVNMLEtBQUs7K0JBa0JMLEtBQUs7eUJBU0wsS0FBSzs4QkFTTCxLQUFLO3dCQWtCTCxLQUFLO3lCQVNMLEtBQUs7OEJBU0wsS0FBSzsrQkFTTCxLQUFLOzRCQVNMLEtBQUs7d0JBU0wsS0FBSzt5QkFRTCxTQUFTLFNBQUMsVUFBVTsyQkFDcEIsU0FBUyxTQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICDkuIvmi4nmoYblip/og73vvJpcbiAg56eN57G777ya5Y2V6YCJ77yM5aSa6YCJ77yM6YCJ5Yeg6aG5XG4gIOagt+W8j++8mumrmOW6piBtaWRkbGUgc21hbGwgbGFyZ2VcbiovXG5cbmltcG9ydCB7XG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFJlbmRlcmVyLFxuICBWaWV3Q2hpbGRyZW4sXG4gIE9uQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtamRiLXBsZy1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYDwhLS0g5Y2V6YCJIC0tPlxuPGRpdiAqbmdJZj1cIl9qZGJNb2RlPT0nY2hvb3NlT25lJ1wiICNpbnB1dERvbSBjbGFzcz1cImpkYi1wbGctc2VsZWN0LW9uZVwiIChjbGljayk9XCJkaWFsb2dTaG93KCRldmVudClcIiBbbmdDbGFzc109XCJfY2xhc3NNYXBcIiBbbmdTdHlsZV09XCJ7J3dpZHRoJzpfd2lkdGh9XCI+XG4gICAgPCEtLSBwbGFjZUhvbGRlciAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiamRiLXBsZy1zZWxlY3QtcGxhY2Vob2xkZXJcIiBbaGlkZGVuXT1cImlucHV0VGV4dCE9JydcIj57e19wbGFjZUhvbGRlcn19PC9kaXY+XG4gICAgPCEtLSDljZXpgIkgLS0+XG4gICAgPCEtLSA8c3BhbiBjbGFzcz1cImNob29zZU9uZVwiIFtoaWRkZW5dPVwiaW5wdXRUZXh0PT0nJ1wiPnt7aW5wdXRUZXh0fX08L3NwYW4+IC0tPlxuICAgIDxpbnB1dCBjbGFzcz1cImNob29zZU9uZSBjaG9vc2VPbmVJbnB1dFwiIFtoaWRkZW5dPVwiaW5wdXRUZXh0PT0nJ1wiIHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJpbnB1dFRleHRcIiByZWFkb25seT5cbiAgICA8dWwgI29wdGlvbkxpc3QgW25nQ2xhc3NdPVwieyAnb3B0aW9ucy1zaG93JzpzaG93LCAnb3B0aW9ucy1uby1tYXJnaW4nOiFzcGFjZUZsZXh9IFwiIGNsYXNzPVwib3B0aW9ucyBcIj5cbiAgICAgICAgPCEtLSDljZXpgIkgLS0+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF9zZWxlY3RMaXN0IFwiIChjbGljayk9XCJpdGVtKCRldmVudCxvcHRpb24pIFwiIFtuZ0NsYXNzXT1cInthY3RpdmU6bmdNb2RlbFZhbHVlPT09b3B0aW9uW19vcHRpb25WYWx1ZV0sZGlzYWJsZWQ6b3B0aW9uW19qZGJJdGVtRGlzYWJsZWRdID09PSBfamRiU3VyZURpc2FibGVkfSBcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctYm94XCIgKm5nSWY9XCJfc2hvd0ltZ0JveCYmb3B0aW9uLmltZ1VybFwiIFtzcmNdPVwib3B0aW9uLmltZ1VybFwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbWctYm94XCIgKm5nSWY9XCJfc2hvd0ltZ0JveCYmIW9wdGlvbi5pbWdVcmxcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtYm94XCI+e3tfb3B0aW9uVGV4dD09J29wdGlvbic/b3B0aW9uOm9wdGlvbltfb3B0aW9uVGV4dF19fTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDwhLS0g5riF56m65Zu+5qCHIC0tPlxuICAgIDxzcGFuIGNsYXNzPVwiY2xvc2UtaWNvbiBpY29uLWVtcHR5IFwiIFtoaWRkZW5dPVwiIWlzU2hvd0NsZWFyIFwiIChjbGljayk9XCJjbGVhcklucHV0VGV4dCgkZXZlbnQpIFwiPjwvc3Bhbj5cbiAgICA8IS0tIOWNlemAieaXtuS4i+aLieWbvuaghyAtLT5cbiAgICA8c3BhbiBjbGFzcz1cInNlbGVjdC1pY29uIGljb24tc2VsZWN0LWFycm93IFwiIFtoaWRkZW5dPVwiaXNTaG93Q2xlYXIgXCI+PC9zcGFuPlxuPC9kaXY+XG5cbjwhLS0g5aSa6YCJIC0tPlxuPGRpdiAqbmdJZj1cIl9qZGJNb2RlPT0nY2hvb3NlTW9yZScgXCIgI2lucHV0RG9tIGNsYXNzPVwiamRiLXBsZy1zZWxlY3QtbW9yZSBcIiAoY2xpY2spPVwiZGlhbG9nU2hvdygkZXZlbnQpIFwiIFtuZ0NsYXNzXT1cIl9jbGFzc01hcCBcIiBbbmdTdHlsZV09XCJ7ICd3aWR0aCc6X3dpZHRofSBcIj5cbiAgICA8IS0tIHBsYWNlSG9sZGVyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJqZGItcGxnLXNlbGVjdC1wbGFjZWhvbGRlciBcIiBbaGlkZGVuXT1cImlucHV0VGV4dC5sZW5ndGggIT0wIFwiPnt7X3BsYWNlSG9sZGVyfX08L2Rpdj5cbiAgICA8IS0tIOWkmumAiWl0ZW0gLS0+XG4gICAgPHVsIGNsYXNzPVwiY2hvb3NlTW9yZSBcIj5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGlucHV0VGV4dCBcIj5cbiAgICAgICAgICAgIHt7aXRlbS50ZXh0fX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1kZWxldGUgaWNvbi1jbG9zZSBcIiAoY2xpY2spPVwiZGVsZXRlTW9yZUl0ZW0oJGV2ZW50LGl0ZW0pIFwiPjwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDx1bCAjb3B0aW9uTGlzdCBbbmdDbGFzc109XCJ7ICdvcHRpb25zLXNob3cnOnNob3csICdvcHRpb25zLW5vLW1hcmdpbic6IXNwYWNlRmxleH0gXCIgY2xhc3M9XCJvcHRpb25zIFwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJjaG9vc2UtbW9yZSBcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF9zZWxlY3RMaXN0IFwiIChjbGljayk9XCJjaG9vc2VNb3JlKCRldmVudCxvcHRpb24pIFwiIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZSc6bW9yZUluZGV4KG9wdGlvbiksZGlzYWJsZWQ6b3B0aW9uW19qZGJJdGVtRGlzYWJsZWRdID09PSBfamRiU3VyZURpc2FibGVkfSBcIj5cbiAgICAgICAgICAgIDwhLS0ge3tfb3B0aW9uVGV4dD09J29wdGlvbic/b3B0aW9uOm9wdGlvbltfb3B0aW9uVGV4dF19fSAtLT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctYm94XCIgKm5nSWY9XCJfc2hvd0ltZ0JveCYmb3B0aW9uLmltZ1VybFwiIFtzcmNdPVwib3B0aW9uLmltZ1VybFwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbWctYm94XCIgKm5nSWY9XCJfc2hvd0ltZ0JveCYmIW9wdGlvbi5pbWdVcmxcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtYm94XCI+e3tfb3B0aW9uVGV4dD09J29wdGlvbic/b3B0aW9uOm9wdGlvbltfb3B0aW9uVGV4dF19fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIFtoaWRkZW5dPVwiIW1vcmVJbmRleChvcHRpb24pIFwiIGNsYXNzPVwiY2hvb3NlLXJpZ2h0IGljb24tc2VsZWN0ZWQgXCI+PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPCEtLSDmuIXnqbrlm77moIcgLS0+XG4gICAgPHNwYW4gY2xhc3M9XCJjbG9zZS1pY29uIGljb24tZW1wdHkgXCIgW2hpZGRlbl09XCIhaXNTaG93Q2xlYXIgXCIgKGNsaWNrKT1cImNsZWFySW5wdXRUZXh0KCRldmVudCkgXCI+PC9zcGFuPlxuPC9kaXY+XG5cbjwhLS0g6YCJ5Lit5Yeg6aG5IC0tPlxuPGRpdiAqbmdJZj1cIl9qZGJNb2RlPT0nY2hvb3NlTnVtJyBcIiAjaW5wdXREb20gY2xhc3M9XCJqZGItcGxnLXNlbGVjdC1udW0gXCIgKGNsaWNrKT1cImRpYWxvZ1Nob3coJGV2ZW50KSBcIiBbbmdDbGFzc109XCJfY2xhc3NNYXAgXCIgW25nU3R5bGVdPVwieyAnd2lkdGgnOl93aWR0aH0gXCI+XG4gICAgPCEtLSBwbGFjZUhvbGRlciAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiamRiLXBsZy1zZWxlY3QtcGxhY2Vob2xkZXIgXCIgW2hpZGRlbl09XCJpbnB1dFRleHQhPTAgXCI+e3tfcGxhY2VIb2xkZXJ9fTwvZGl2PlxuICAgIDxzcGFuIGNsYXNzPVwiY2hvb3NlLXRpcCBcIiBbaGlkZGVuXT1cImlucHV0VGV4dD09MCBcIj7lt7LpgInkuK17e2lucHV0VGV4dH196aG5PC9zcGFuPlxuICAgIDx1bCAjb3B0aW9uTGlzdCBbbmdDbGFzc109XCJ7ICdvcHRpb25zLXNob3cnOnNob3csICdvcHRpb25zLW5vLW1hcmdpbic6IXNwYWNlRmxleH0gXCIgY2xhc3M9XCJvcHRpb25zIFwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJjaG9vc2UtbW9yZSBcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF9zZWxlY3RMaXN0IFwiIChjbGljayk9XCJudW1DbGljaygkZXZlbnQsb3B0aW9uKSBcIiBbbmdDbGFzc109XCJ7ICdhY3RpdmUnOm1vcmVJbmRleChvcHRpb24pLGRpc2FibGVkOm9wdGlvbltfamRiSXRlbURpc2FibGVkXSA9PT0gX2pkYlN1cmVEaXNhYmxlZH0gXCI+XG4gICAgICAgICAgICA8IS0tIHt7X29wdGlvblRleHQ9PSdvcHRpb24nP29wdGlvbjpvcHRpb25bX29wdGlvblRleHRdfX0gLS0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWJveFwiICpuZ0lmPVwiX3Nob3dJbWdCb3gmJm9wdGlvbi5pbWdVcmxcIiBbc3JjXT1cIm9wdGlvbi5pbWdVcmxcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW1nLWJveFwiICpuZ0lmPVwiX3Nob3dJbWdCb3gmJiFvcHRpb24uaW1nVXJsXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJveFwiPnt7X29wdGlvblRleHQ9PSdvcHRpb24nP29wdGlvbjpvcHRpb25bX29wdGlvblRleHRdfX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBbaGlkZGVuXT1cIiFtb3JlSW5kZXgob3B0aW9uKSBcIiBjbGFzcz1cImNob29zZS1yaWdodCBpY29uLXNlbGVjdGVkIFwiPjwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDwhLS0g5riF56m65Zu+5qCHIC0tPlxuICAgIDxzcGFuIGNsYXNzPVwiY2xvc2UtaWNvbiBpY29uLWVtcHR5IFwiIFtoaWRkZW5dPVwiIWlzU2hvd0NsZWFyIFwiIChjbGljayk9XCJjbGVhcklucHV0VGV4dCgkZXZlbnQpIFwiPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cInNlbGVjdC1pY29uIGljb24tc2VsZWN0LWFycm93IFwiIFtoaWRkZW5dPVwiaXNTaG93Q2xlYXIgXCI+PC9zcGFuPlxuPC9kaXY+XG5cbjwhLS0g6YGu572p5bGCIC0tPlxuPGRpdiBjbGFzcz1cImpkYi1wbGctc2VsZWN0LW1hc3RlciBcIiAqbmdJZj1cInNob3cgXCI+PC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5qZGItcGxnLXNlbGVjdC1tb3JlLC5qZGItcGxnLXNlbGVjdC1udW0sLmpkYi1wbGctc2VsZWN0LW9uZXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyMDBweDtib3JkZXI6MXB4IHNvbGlkICNhZmIwYjM7Ym9yZGVyLXJhZGl1czoycHg7YmFja2dyb3VuZDojZmZmO3RleHQtYWxpZ246bGVmdDtjdXJzb3I6cG9pbnRlcn0uamRiLXBsZy1zZWxlY3QtbW9yZSAuamRiLXBsZy1zZWxlY3QtcGxhY2Vob2xkZXIsLmpkYi1wbGctc2VsZWN0LW51bSAuamRiLXBsZy1zZWxlY3QtcGxhY2Vob2xkZXIsLmpkYi1wbGctc2VsZWN0LW9uZSAuamRiLXBsZy1zZWxlY3QtcGxhY2Vob2xkZXJ7Y29sb3I6I2FmYjBiMzstbW96LXVzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucywuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25ze3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93LXk6c2Nyb2xsO3otaW5kZXg6OTk5OTtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVZKDApO3RyYW5zZm9ybTpzY2FsZVkoMCk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgMDt0cmFuc2Zvcm0tb3JpZ2luOjAgMDtsZWZ0Oi0xcHg7Ym9yZGVyOjFweCBzb2xpZCAjYWZiMGIzO3dpZHRoOjEwMCU7bWF4LWhlaWdodDoxOTBweDtiYWNrZ3JvdW5kOiNmZmZ9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgbGksLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyBsaSwuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zIGxpe3BhZGRpbmc6NXB4IDEycHg7bWluLWhlaWdodDozMHB4O2NvbG9yOiMzMjMyMzN9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgbGk6aG92ZXIsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyBsaTpob3ZlciwuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zIGxpOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YwZjFmNTtjb2xvcjojMzIzMjMzfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5vcHRpb25zIGxpIC5jaG9vc2UtcmlnaHQsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyBsaSAuY2hvb3NlLXJpZ2h0LC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnMgbGkgLmNob29zZS1yaWdodHtmbG9hdDpyaWdodDttYXJnaW4tdG9wOi0ycHh9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgbGkgLmltZy1ib3gsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyBsaSAuaW1nLWJveCwuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zIGxpIC5pbWctYm94e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtoZWlnaHQ6MThweDt3aWR0aDoxOHB4fS5qZGItcGxnLXNlbGVjdC1tb3JlIC5vcHRpb25zIGxpIC50ZXh0LWJveCwuamRiLXBsZy1zZWxlY3QtbnVtIC5vcHRpb25zIGxpIC50ZXh0LWJveCwuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zIGxpIC50ZXh0LWJveHtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgLmNob29zZS1tb3JlLC5qZGItcGxnLXNlbGVjdC1udW0gLm9wdGlvbnMgLmNob29zZS1tb3JlLC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnMgLmNob29zZS1tb3Jle21hcmdpbi1ib3R0b206MXB4fS5qZGItcGxnLXNlbGVjdC1tb3JlIC5vcHRpb25zIC5hY3RpdmUsLmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgLmFjdGl2ZTpob3ZlciwuamRiLXBsZy1zZWxlY3QtbnVtIC5vcHRpb25zIC5hY3RpdmUsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyAuYWN0aXZlOmhvdmVyLC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnMgLmFjdGl2ZSwuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zIC5hY3RpdmU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojM2Y2OWYyO2NvbG9yOiNmZmZ9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgLmRpc2FibGVkLC5qZGItcGxnLXNlbGVjdC1udW0gLm9wdGlvbnMgLmRpc2FibGVkLC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnMgLmRpc2FibGVke2JhY2tncm91bmQtY29sb3I6bm9uZTtjb2xvcjojYWZiMGIzO2N1cnNvcjpub3QtYWxsb3dlZH0uamRiLXBsZy1zZWxlY3QtbW9yZSAub3B0aW9ucyAuZGlzYWJsZWQ6aG92ZXIsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyAuZGlzYWJsZWQ6aG92ZXIsLmpkYi1wbGctc2VsZWN0LW9uZSAub3B0aW9ucyAuZGlzYWJsZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpub25lO2NvbG9yOiNhZmIwYjN9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMtc2hvdywuamRiLXBsZy1zZWxlY3QtbnVtIC5vcHRpb25zLXNob3csLmpkYi1wbGctc2VsZWN0LW9uZSAub3B0aW9ucy1zaG93e29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVkoMSk7dHJhbnNmb3JtOnNjYWxlWSgxKX0uamRiLXBsZy1zZWxlY3QtbW9yZSAuY2xvc2UtaWNvbiwuamRiLXBsZy1zZWxlY3QtbnVtIC5jbG9zZS1pY29uLC5qZGItcGxnLXNlbGVjdC1vbmUgLmNsb3NlLWljb257cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6NXB4O3RvcDo1MCU7bWFyZ2luLXRvcDotMTJweDtjb2xvcjojN2Q3ZTgwfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5jbG9zZS1pY29uOmhvdmVyLC5qZGItcGxnLXNlbGVjdC1udW0gLmNsb3NlLWljb246aG92ZXIsLmpkYi1wbGctc2VsZWN0LW9uZSAuY2xvc2UtaWNvbjpob3Zlcntjb2xvcjojMzIzMjMzfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5zZWxlY3QtaWNvbiwuamRiLXBsZy1zZWxlY3QtbnVtIC5zZWxlY3QtaWNvbiwuamRiLXBsZy1zZWxlY3Qtb25lIC5zZWxlY3QtaWNvbntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDo1cHg7dG9wOjUwJTttYXJnaW4tdG9wOi0xMnB4fS5qZGItcGxnLXNlbGVjdC1vbmUgLmNob29zZU9uZXtjb2xvcjojMzMzfS5qZGItcGxnLXNlbGVjdC1vbmUgLmNob29zZU9uZUlucHV0e2JvcmRlcjpub25lO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7cGFkZGluZy1yaWdodDoxOHB4fS5qZGItcGxnLXNlbGVjdC1tb3JlIC5jaG9vc2VNb3JlIGxpLC5qZGItcGxnLXNlbGVjdC1udW0gLmNob29zZU1vcmUgbGl7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0OjVweDtwYWRkaW5nOjAgNXB4O2hlaWdodDoyMnB4O2ZvbnQtc2l6ZToxM3B4O2JvcmRlcjoxcHggc29saWQgI2Q3ZDhkYjtib3JkZXItcmFkaXVzOjJweDtjb2xvcjojMzMzOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uamRiLXBsZy1zZWxlY3QtbW9yZSAuY2hvb3NlTW9yZSBsaSAuaXRlbS1kZWxldGUsLmpkYi1wbGctc2VsZWN0LW51bSAuY2hvb3NlTW9yZSBsaSAuaXRlbS1kZWxldGV7Zm9udC1zaXplOjEycHh9LmpkYi1wbGctc2VsZWN0LWFjdGl2ZXtib3JkZXI6MXB4IHNvbGlkICMzZjY5ZjJ9LmpkYi1wbGctc2VsZWN0LWRpc2FibGVke2JhY2tncm91bmQ6I2YwZjFmNX0uc21hbGx7bWluLWhlaWdodDoyNHB4O3BhZGRpbmc6MnB4IDEwcHg7Zm9udC1zaXplOjEycHh9LnNtYWxsIC5vcHRpb25ze21hcmdpbi10b3A6N3B4fS5zbWFsbCAub3B0aW9ucy1uby1tYXJnaW57bWFyZ2luOjB9Lm1pZGRsZXttaW4taGVpZ2h0OjMwcHg7cGFkZGluZzo1cHggMTBweDtmb250LXNpemU6MTNweH0ubWlkZGxlIC5vcHRpb25ze21hcmdpbi10b3A6MTBweH0ubWlkZGxlIC5vcHRpb25zLW5vLW1hcmdpbnttYXJnaW46MH0ubWlkZGxlIC5jaG9vc2UtdGlwLC5taWRkbGUgLmNob29zZU9uZSwubWlkZGxlIC5qZGItcGxnLXNlbGVjdC1wbGFjZWhvbGRlcntoZWlnaHQ6MThweDtsaW5lLWhlaWdodDoxOHB4fS5taWRkbGUgLmNob29zZS10aXAsLm1pZGRsZSAuY2hvb3NlT25le2Rpc3BsYXk6YmxvY2t9Lm1pZGRsZSAuY2hvb3NlTW9yZSBsaXttYXJnaW4tYm90dG9tOjNweH0ubGFyZ2V7bWluLWhlaWdodDo0MHB4O3BhZGRpbmc6OXB4IDEwcHg7Zm9udC1zaXplOjE0cHh9LmxhcmdlIC5vcHRpb25ze21hcmdpbi10b3A6MTRweH0ubGFyZ2UgLm9wdGlvbnMtbm8tbWFyZ2lue21hcmdpbjowfS5sYXJnZSAuY2hvb3NlLXRpcCwubGFyZ2UgLmNob29zZU9uZSwubGFyZ2UgLmpkYi1wbGctc2VsZWN0LXBsYWNlaG9sZGVye2hlaWdodDoyMHB4O2xpbmUtaGVpZ2h0OjIwcHh9LmxhcmdlIC5jaG9vc2UtdGlwLC5sYXJnZSAuY2hvb3NlT25le2Rpc3BsYXk6YmxvY2t9LmxhcmdlIC5jaG9vc2VNb3JlIGxpe21hcmdpbi1ib3R0b206OHB4fS5qZGItcGxnLXNlbGVjdC1ib3R0b20tbWlkZGxle3BhZGRpbmc6M3B4IDEwcHggMH0uamRiLXBsZy1zZWxlY3QtYm90dG9tLWxhcmdle3BhZGRpbmc6OHB4IDEwcHggMH0uamRiLXBsZy1zZWxlY3QtbWFzdGVye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDAlO2JhY2tncm91bmQ6MCAwO3otaW5kZXg6OTk5OH1gXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgey8vIOazqOWGjOaIkOS4uuihqOWNleaOp+S7tlxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBKZGJQbGdTZWxlY3RDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSmRiUGxnU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBfc2VsZWN0TGlzdDogYW55O1xuICBfc2l6ZSA9ICdtaWRkbGUnO1xuICBfd2lkdGg6IHN0cmluZztcbiAgX29wdGlvblRleHQgPSAndGV4dCc7ICAvLyDpu5jorqTlgLxcbiAgX29wdGlvblZhbHVlID0gJ3ZhbHVlJzsgLy8g6buY6K6k5YC8XG4gIF9vcHRpb25Qb3NpdGlvbjogc3RyaW5nO1xuICBpc1Nob3dDbGVhciA9IGZhbHNlOyAvLyDmmK/lkKblsZXnpLrmuIXnqbp4XG4gIF9qZGJDbGVhciA9IGZhbHNlO1xuICBfamRiRGlzYWJsZWQgPSBmYWxzZTsgLy8g6buY6K6k5pyq56aB55SoXG4gIF9qZGJNb2RlID0gJ2Nob29zZU9uZSc7XG4gIF9wbGFjZUhvbGRlciA9ICfor7fpgInmi6knO1xuICBfY2hvb3NlTW9yZUFycmF5ID0gW107IC8vIOWkmumAiemAieS4reWFg+e0oOaVsOe7hFxuICBfY2xhc3NNYXAgPSB7fTtcbiAgbGlzdEhlaWdodDogbnVtYmVyO1xuICBzYXZhSGVpZ2h0ID0gdHJ1ZTtcbiAgc3BhY2VGbGV4ID0gdHJ1ZTsgIC8vIOaYr+WQpuacieWJqeS9meepuumXtO+8jOm7mOiupOaciVxuICBfc2hvd0ltZ0JveCA9IGZhbHNlOyAvLyDkuIvmi4nmoYbmmK/lkKbluKblm77niYdcbiAgX2pkYkl0ZW1EaXNhYmxlZCA9ICdkaXNhYmxlZCc7IC8vIOm7mOiupOS4umRpc2FibGVkXG4gIF9qZGJTdXJlRGlzYWJsZWQgPSAyOyAvLyDkuLox5piv5ZCv55SoIDLmmK/npoHnlKhcbiAgX2pkYk5vRGlzYWJsZWQgPSAxOyAvLyDkuLoy6KGo56S65LiN56aB55SoXG5cbiAgLy8g6Ieq5a6a5LmJ57G75ZCNXG4gIEBJbnB1dCgpIGpkYkNsYXNzTmFtZSA9ICcnO1xuXG4gIC8vIOmAiemhueS4reafkOmhueemgeeUqOWtl+autVxuICBASW5wdXQoKVxuICBzZXQgamRiSXRlbURpc2FibGVkKHZhbHVlKSB7XG4gICAgdGhpcy5famRiSXRlbURpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGpkYkl0ZW1EaXNhYmxlZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9qZGJJdGVtRGlzYWJsZWQ7XG4gIH1cblxuICAvLyDpgInpobnkuK3mn5Dpobnnoa7orqTnpoHnlKhcbiAgQElucHV0KClcbiAgc2V0IGpkYlN1cmVEaXNhYmxlZCh2YWx1ZSkge1xuICAgIHRoaXMuX2pkYlN1cmVEaXNhYmxlZCA9IHZhbHVlO1xuICB9XG4gIGdldCBqZGJTdXJlRGlzYWJsZWQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5famRiU3VyZURpc2FibGVkO1xuICB9XG5cbiAgLy8gLy8g6YCJ6aG55Lit5p+Q6aG55LiN56aB55SoXG4gIC8vIEBJbnB1dCgpXG4gIC8vIHNldCBqZGJOb0Rpc2FibGVkKHZhbHVlKSB7XG4gIC8vICAgdGhpcy5famRiTm9EaXNhYmxlZCA9IHZhbHVlO1xuICAvLyB9XG4gIC8vIGdldCBqZGJOb0Rpc2FibGVkKCk6IGFueSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX2pkYk5vRGlzYWJsZWQ7XG4gIC8vIH1cblxuICAvLyDpgInpobnkuK3mn5Dpobnnoa7orqTnpoHnlKhcbiAgQElucHV0KClcbiAgc2V0IGpkYlBsYWNlSG9sZGVyKHZhbHVlKSB7XG4gICAgdGhpcy5fcGxhY2VIb2xkZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgamRiUGxhY2VIb2xkZXIoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VIb2xkZXI7XG4gIH1cblxuICAvLyDmmK/lkKbpnIDopoHmmL7npLrmuIXnqbpcbiAgQElucHV0KClcbiAgc2V0IGpkYkNsZWFyKHZhbHVlKSB7XG4gICAgdGhpcy5famRiQ2xlYXIgPSB0aGlzLnRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgZ2V0IGpkYkNsZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9qZGJDbGVhcjtcbiAgfVxuXG4gIC8vIOS4i+aLieahhuaVsOe7hO+8jOW/heWGmVxuICBASW5wdXQoKVxuICBzZXQgamRiU2VsZWN0TGlzdCh2YWx1ZSkge1xuICAgIHRoaXMuX3NlbGVjdExpc3QgPSB2YWx1ZTtcblxuICAgIC8vIOW+queOr+aVsOe7hO+8jOWIpOaWreaYr+WQpumcgOimgeWxleekuuW4puacieWbvueJh+S4i+aLieahhlxuICAgIGlmICh0aGlzLl9zZWxlY3RMaXN0KSB7XG4gICAgICB0aGlzLl9zZWxlY3RMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmltZ1VybCkge1xuICAgICAgICAgIHRoaXMuX3Nob3dJbWdCb3ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZ2V0IGpkYlNlbGVjdExpc3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0TGlzdDtcbiAgfVxuXG4gIC8vIOS4i+aLieahhuWwuuWvuO+8jOm7mOiupOS4uumrmOW6pjMwcHjvvJtzbWFsbOS4ujI0cHgsbGFyZ2XkuLo0MHB4O1xuICBASW5wdXQoKVxuICBzZXQgamRiU2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgamRiU2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgLy8g6Ieq5a6a5LmJ5a695bqmXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJXaWR0aCh2YWx1ZSkge1xuICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGpkYldpZHRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9XG5cbiAgLy8g5bGV56S65Zyo6aG16Z2i5YaF5a655a2X5q615ZCN56ewXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJPcHRpb25UZXh0KHZhbHVlKSB7XG4gICAgdGhpcy5fb3B0aW9uVGV4dCA9IHZhbHVlO1xuICB9XG4gIGdldCBqZGJPcHRpb25UZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvblRleHQ7XG4gIH1cblxuICAvLyDov5Tlm57nu5lzZXJ2ZeWvueW6lOWtl+auteWQjeensFxuICBASW5wdXQoKVxuICBzZXQgamRiT3B0aW9uVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl9vcHRpb25WYWx1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBqZGJPcHRpb25WYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25WYWx1ZTtcbiAgfVxuXG4gIC8vIOS4i+aLieahhuemgeeUqFxuICBASW5wdXQoKVxuICBzZXQgamRiRGlzYWJsZWQodmFsdWUpIHtcbiAgICB0aGlzLl9qZGJEaXNhYmxlZCA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgamRiRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2pkYkRpc2FibGVkO1xuICB9XG5cbiAgLy8gc2VsZWN05qih5byP77yM6buY6K6k5Li65Y2V6YCJ77yMY2hvb3NlTW9yZeWkmumAiVxuICBASW5wdXQoKVxuICBzZXQgamRiTW9kZSh2YWx1ZSkge1xuICAgIHRoaXMuX2pkYk1vZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgamRiTW9kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9qZGJNb2RlO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXREb20nKSBpbnB1dERvbTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnb3B0aW9uTGlzdCcpIG9wdGlvbkxpc3Q6IEVsZW1lbnRSZWY7XG5cbiAgc2hvdyA9IGZhbHNlO1xuICBpbnB1dFRleHQ6IGFueTtcbiAgbmdNb2RlbFZhbHVlID0gJyc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBcblxuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1saWZlLWN5Y2xlLWludGVyZmFjZVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8g54K55Ye76Zmk5LiL5ouJ5qGG5Lul5aSW5L2N572u77yM5LiL5ouJ5qGG6ZqQ6JePXG4gICAgdGhpcy5yZW5kZXJlcjIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5pbnB1dERvbS5uYXRpdmVFbGVtZW50LCAnamRiLXBsZy1zZWxlY3QtYWN0aXZlJywgdGhpcy5zaG93KTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl9qZGJDbGVhciAmJiAhdGhpcy5famRiRGlzYWJsZWQpIHtcbiAgICAgIC8vIOebkeWQrOi+k+WFpeahhuWFg+e0oO+8jOiLpeacieWGheWuueaXtuWImea7keS4iuaYvuekunhcbiAgICAgIHRoaXMucmVuZGVyZXIyLmxpc3Rlbih0aGlzLmlucHV0RG9tLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAvLyDoi6XovpPlhaXmoYbkuI3lrZjlnKjlhoXlrrnvvIzliJnkuI3lgZrku7vkvZXmk43kvZxcblxuICAgICAgICBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU9uZScgfHwgdGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU51bScpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaW5wdXRUZXh0IHx8IHRoaXMuc2hvdykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTW9yZScpIHtcbiAgICAgICAgICBpZiAodGhpcy5pbnB1dFRleHQubGVuZ3RoID09PSAwIHx8IHRoaXMuc2hvdykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNTaG93Q2xlYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RG9tLm5hdGl2ZUVsZW1lbnQsICdqZGItcGxnLXNlbGVjdC1hY3RpdmUnLCB0aGlzLnNob3cpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlbmRlcmVyMi5saXN0ZW4odGhpcy5pbnB1dERvbS5uYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgLy8g6Iul6L6T5YWl5qGG5LiN5a2Y5Zyo5YaF5a6577yM5YiZ5LiN5YGa5Lu75L2V5pON5L2cXG4gICAgICAgIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlT25lJyB8fCB0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTnVtJykge1xuICAgICAgICAgIGlmICghdGhpcy5pbnB1dFRleHQgfHwgdGhpcy5zaG93KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VNb3JlJykge1xuICAgICAgICAgIGlmICh0aGlzLmlucHV0VGV4dC5sZW5ndGggPT09IDAgfHwgdGhpcy5zaG93KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1Nob3dDbGVhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RG9tLm5hdGl2ZUVsZW1lbnQsICdqZGItcGxnLXNlbGVjdC1hY3RpdmUnLCB0aGlzLnNob3cpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU9uZScpIHtcbiAgICAgIHRoaXMuaW5wdXRUZXh0ID0gJyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTW9yZScpIHtcbiAgICAgIHRoaXMuaW5wdXRUZXh0ID0gW107XG4gICAgfSBlbHNlIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTnVtJykge1xuICAgICAgdGhpcy5pbnB1dFRleHQgPSAwO1xuICAgIH1cbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBzZXRDbGFzc01hcCgpIHtcbiAgICBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU1vcmUnKSB7XG4gICAgICB0aGlzLl9jbGFzc01hcCA9IHtcbiAgICAgICAgW2Ake3RoaXMuX3NpemV9YF06IHRydWUsXG4gICAgICAgIFtgamRiLXBsZy1zZWxlY3QtYm90dG9tLSR7dGhpcy5fc2l6ZX1gXTogdGhpcy5pbnB1dFRleHQubGVuZ3RoICE9PSAwLFxuICAgICAgICBbJ2pkYi1wbGctc2VsZWN0LWRpc2FibGVkJ106IHRoaXMuX2pkYkRpc2FibGVkLFxuICAgICAgICBbdGhpcy5qZGJDbGFzc05hbWVdOiB0cnVlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jbGFzc01hcCA9IHtcbiAgICAgICAgW2Ake3RoaXMuX3NpemV9YF06IHRydWUsXG4gICAgICAgIFsnamRiLXBsZy1zZWxlY3QtZGlzYWJsZWQnXTogdGhpcy5famRiRGlzYWJsZWQsXG4gICAgICAgIFt0aGlzLmpkYkNsYXNzTmFtZV06IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLy8g54K55Ye7eO+8jOa4heepuuWGheWuuVxuICBjbGVhcklucHV0VGV4dChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlT25lJykge1xuICAgICAgdGhpcy5pbnB1dFRleHQgPSAnJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VNb3JlJykge1xuICAgICAgdGhpcy5pbnB1dFRleHQgPSBbXTtcbiAgICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheSA9IFtdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU51bScpIHtcbiAgICAgIHRoaXMuaW5wdXRUZXh0ID0gMDtcbiAgICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmlzU2hvd0NsZWFyID0gIXRoaXMuaXNTaG93Q2xlYXI7XG5cbiAgICAvLyDmuIXnqbrlkI7ovpPlhaXpnIDopoHph43mlrDlkYrnn6XniLbnu4Tku7ZcbiAgICB0aGlzLm5nTW9kZWxWYWx1ZSA9ICcnO1xuICAgIHRoaXMub25DaGFuZ2UoJycpO1xuXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLy8g54K55Ye76L6T5YWl5qGG5LiL5ouJ6I+c5Y2V5pi+6ZqQXG4gIGRpYWxvZ1Nob3coZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgLy8g6Iul5aSW5L6n57uE5Lu25ZGK55+l56aB55So77yM5YiZ54K55Ye75rKh5pyJ5Lu75L2V5pWI5p6cXG4gICAgaWYgKHRoaXMuX2pkYkRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNTaG93Q2xlYXIgPSBmYWxzZTtcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuaW5wdXREb20ubmF0aXZlRWxlbWVudCwgJ2pkYi1wbGctc2VsZWN0LWFjdGl2ZScsIHRoaXMuc2hvdyk7XG4gICAgdGhpcy5vcHRpb25Qb3NpdGlvbih0aGlzLm9wdGlvbkxpc3QubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICB9XG5cbiAgLy8g5rWu5bGC5Ye6546w5piv5Zyo6L6T5YWl5qGG5LiK5pa56L+Y5piv5LiL5pa5XG4gIG9wdGlvblBvc2l0aW9uKGxpc3RIZWlnaHQpIHtcbiAgICBjb25zdCBvZmZldFRvcCA9IHRoaXMuZ2V0VG9wKHRoaXMuaW5wdXREb20ubmF0aXZlRWxlbWVudCk7ICAvLyDlhYPntKBvZmZldFRvcFxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKHRoaXMuaW5wdXREb20ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0OyAvLyDlsY/luZXpq5jluqZcbiAgICBjb25zdCBlbGVtSGVpZ2h0ID0gdGhpcy5pbnB1dERvbS5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDsgLy8g5YWD57Sg6auY5bqmXG4gICAgbGV0IHBhZGRpbmdIZWlnaHQ7XG4gICAgaWYgKHRoaXMuamRiU2l6ZSA9PT0gJ3NtYWxsJykge1xuICAgICAgcGFkZGluZ0hlaWdodCA9IDI7XG4gICAgfSBlbHNlIGlmICh0aGlzLmpkYlNpemUgPT09ICdsYXJnZScpIHtcbiAgICAgIHBhZGRpbmdIZWlnaHQgPSA5O1xuICAgIH0gZWxzZSBpZiAodGhpcy5qZGJTaXplID09PSAnbWlkZGxlJykge1xuICAgICAgcGFkZGluZ0hlaWdodCA9IDU7XG4gICAgfVxuICAgIGNvbnN0IGZsZXhIZWlnaHQgPSBjbGllbnRIZWlnaHQgLSBvZmZldFRvcCAtIGVsZW1IZWlnaHQgLSBwYWRkaW5nSGVpZ2h0ICsgc2Nyb2xsVG9wOyAvLyDliankvZnpq5jluqZcbiAgICBpZiAoZmxleEhlaWdodCA8IGxpc3RIZWlnaHQpIHtcbiAgICAgIC8vIOepuumXtOS4jei2s1xuICAgICAgdGhpcy5zcGFjZUZsZXggPSBmYWxzZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMub3B0aW9uTGlzdC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtLW9yaWdpbicsICcxMDAlIDEwMCUnKTtcbiAgICAgIGlmIChsaXN0SGVpZ2h0IDwgMTg4KSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMub3B0aW9uTGlzdC5uYXRpdmVFbGVtZW50LCAndG9wJywgLSBsaXN0SGVpZ2h0IC0gNSArICdweCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5vcHRpb25MaXN0Lm5hdGl2ZUVsZW1lbnQsICd0b3AnLCAtMTkwIC0gcGFkZGluZ0hlaWdodCArICdweCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNwYWNlRmxleCA9IHRydWU7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLm9wdGlvbkxpc3QubmF0aXZlRWxlbWVudCwgJ3RvcCcsICcnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMub3B0aW9uTGlzdC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtLW9yaWdpbicsICcwJSAwJScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIOiHquWumuS5ieihqOWNlSDkuI7niLbnu4Tku7bnmoRuZ01vZGVs57uR5a6a6LW35p2lXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubmdNb2RlbFZhbHVlID0gdmFsdWU7XG5cbiAgICAvLyDoi6XmnInliJ3lp4vpobnvvIzliJnpnIDopoHlpITnkIbkuIDkuItcbiAgICAvLyBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU9uZScpIHtcbiAgICAvLyAgIHRoaXMuZm9yT25lU3RhcnQodmFsdWUpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU1vcmUnKSB7XG4gICAgLy8gICB0aGlzLmZvck1vcmVTdGFydCh2YWx1ZSk7XG4gICAgLy8gICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTnVtJykge1xuICAgIC8vICAgdGhpcy5mb3JOdW1TdGFydCh2YWx1ZSk7XG4gICAgLy8gfVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8g6Iul5Lyg5YWl5YC85Li6bnVsbO+8jOWImea4heepuuaVsOaNrlxuICAgICAgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VNb3JlJykge1xuICAgICAgICB0aGlzLmlucHV0VGV4dCA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbnB1dFRleHQgPSAnJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VPbmUnKSB7XG4gICAgICAgIHRoaXMuZm9yT25lU3RhcnQodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTW9yZScpIHtcbiAgICAgICAgdGhpcy5mb3JNb3JlU3RhcnQodmFsdWUpO1xuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VOdW0nKSB7XG4gICAgICAgIHRoaXMuZm9yTnVtU3RhcnQodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLy8g5Y2V6YCJ77yM6Iul5pyJ5Yid5aeL6YCJ6aG577yM5YiZ6YGN5Y6G5pWw57uEXG4gIGZvck9uZVN0YXJ0KHZhbHVlKSB7XG4gICAgdGhpcy5fc2VsZWN0TGlzdC5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgaWYgKGVsZW1bdGhpcy5fb3B0aW9uVmFsdWVdID09PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLmlucHV0VGV4dCA9IGVsZW1bdGhpcy5fb3B0aW9uVGV4dF07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyDlpJrpgInvvIzoi6XmnInliJ3lp4vlgLzliJnpgY3ljobmlbDnu4RcbiAgZm9yTW9yZVN0YXJ0KHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpO1xuXG4gICAgdmFsdWUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHRoaXMuX3NlbGVjdExpc3QuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgaWYgKGVsZW1bdGhpcy5fb3B0aW9uVmFsdWVdID09PSBpdGVtKSB7XG4gICAgICAgICAgLy8gaW5wdXRUZXh05Li66L6T5YWl5qGG5Lit5bGV56S655qE5YaF5a65XG4gICAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuX29wdGlvblRleHQ7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9vcHRpb25WYWx1ZTtcbiAgICAgICAgICB0aGlzLmlucHV0VGV4dC5wdXNoKHtcbiAgICAgICAgICAgIHRleHQ6IGVsZW1bdGhpcy5fb3B0aW9uVGV4dF0sXG4gICAgICAgICAgICB2YWx1ZTogZWxlbVt0aGlzLl9vcHRpb25WYWx1ZV1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIHRoaXMuX2Nob29zZU1vcmVBcnJheeS4uuS8oOWHuuWOu+eahOaVsOaNrlxuICAgICAgICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheS5wdXNoKGVsZW1bdGhpcy5fb3B0aW9uVmFsdWVdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8g6YCJ5Yeg6aG5XG4gIGZvck51bVN0YXJ0KHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpO1xuICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICB0aGlzLl9zZWxlY3RMaXN0LmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGlmIChlbGVtW3RoaXMuX29wdGlvblZhbHVlXSA9PT0gaXRlbSkge1xuICAgICAgICAgIHRoaXMuaW5wdXRUZXh0Kys7XG4gICAgICAgICAgdGhpcy5fY2hvb3NlTW9yZUFycmF5LnB1c2goZWxlbVt0aGlzLl9vcHRpb25WYWx1ZV0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyDljZXpgInmn5DkuIDlhYPntKDngrnlh7tcbiAgaXRlbShlLCBpdGVtKSB7XG4gICAgLy8g6Zi75q2i5LqL5Lu25YaS5rOhXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIC8vIOWIpOaWrXNob3fmmK/lkKbkuLp0cnVlXG4gICAgaWYgKCF0aGlzLnNob3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8g5Yik5pat6K+l6aG55piv5ZCm5Y+v54K55Ye7XG4gICAgaWYgKGl0ZW1bdGhpcy5famRiSXRlbURpc2FibGVkXSA9PT0gdGhpcy5famRiU3VyZURpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dFRleHQgPSBpdGVtW3RoaXMuX29wdGlvblRleHRdO1xuICAgIHRoaXMuc2hvdyA9ICF0aGlzLnNob3c7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5pbnB1dERvbS5uYXRpdmVFbGVtZW50LCAnamRiLXBsZy1zZWxlY3QtYWN0aXZlJywgdGhpcy5zaG93KTtcblxuICAgIHRoaXMubmdNb2RlbFZhbHVlID0gaXRlbVt0aGlzLl9vcHRpb25WYWx1ZV07XG4gICAgdGhpcy5vbkNoYW5nZShpdGVtW3RoaXMuX29wdGlvblZhbHVlXSk7XG4gIH1cblxuICAvLyDlpJrpgInlhYPntKDngrnlh7tcbiAgY2hvb3NlTW9yZShlLCBpdGVtKSB7XG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICAvLyDpmLvmraLkuovku7blhpLms6FcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgLy8g5Yik5patc2hvd+aYr+WQpuS4unRydWVcbiAgICBpZiAoIXRoaXMuc2hvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOWIpOaWreivpemhueaYr+WQpuWPr+eCueWHu1xuICAgIGlmIChpdGVtW3RoaXMuX2pkYkl0ZW1EaXNhYmxlZF0gPT09IHRoaXMuX2pkYlN1cmVEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOWIpOaWreaYr+WQpuWtmOWcqFxuICAgIHRoaXMuaW5wdXRUZXh0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudFt0aGlzLl9vcHRpb25WYWx1ZV0gPT09IGl0ZW1bdGhpcy5fb3B0aW9uVmFsdWVdKSB7XG4gICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZmxhZykge1xuICAgICAgdGhpcy5kZWxldGVNb3JlSXRlbShlLCBpdGVtKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpbnB1dFRleHTkuLrovpPlhaXmoYbkuK3lsZXnpLrnmoTlhoXlrrlcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5fb3B0aW9uVGV4dDtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX29wdGlvblZhbHVlO1xuICAgIHRoaXMuaW5wdXRUZXh0LnB1c2goe1xuICAgICAgdGV4dDogaXRlbVt0aGlzLl9vcHRpb25UZXh0XSxcbiAgICAgIHZhbHVlOiBpdGVtW3RoaXMuX29wdGlvblZhbHVlXVxuICAgIH0pO1xuXG4gICAgLy8gdGhpcy5fY2hvb3NlTW9yZUFycmF55Li65Lyg5Ye65Y6755qE5pWw5o2uXG4gICAgdGhpcy5fY2hvb3NlTW9yZUFycmF5LnB1c2goaXRlbVt0aGlzLl9vcHRpb25WYWx1ZV0pO1xuICAgIHRoaXMubmdNb2RlbFZhbHVlID0gdGhpcy5fY2hvb3NlTW9yZUFycmF5LnRvU3RyaW5nKCk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLl9jaG9vc2VNb3JlQXJyYXkpO1xuICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLy8g6YCJ5Lit5aSa5bCR6aG5bGnngrnlh7tcbiAgbnVtQ2xpY2soZSwgaXRlbSkge1xuICAgIGxldCBmbGFnID0gZmFsc2U7XG4gICAgLy8g6Zi75q2i5LqL5Lu25YaS5rOhXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIC8vIOWIpOaWrXNob3fmmK/lkKbkuLp0cnVlXG4gICAgaWYgKCF0aGlzLnNob3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDliKTmlq3or6XpobnmmK/lkKblj6/ngrnlh7tcbiAgICBpZiAoaXRlbVt0aGlzLl9qZGJJdGVtRGlzYWJsZWRdID09PSB0aGlzLl9qZGJTdXJlRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDliKTmlq3mmK/lkKbngrnlh7vov4dcbiAgICB0aGlzLl9jaG9vc2VNb3JlQXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50ID09PSBpdGVtW3RoaXMuX29wdGlvblZhbHVlXSkge1xuICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY2hvb3NlTW9yZUFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZmxhZykge1xuICAgICAgdGhpcy5pbnB1dFRleHQtLTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0VGV4dCsrO1xuICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgdGhpcy5fY2hvb3NlTW9yZUFycmF5LnB1c2goaXRlbVt0aGlzLl9vcHRpb25WYWx1ZV0pO1xuICAgIHRoaXMubmdNb2RlbFZhbHVlID0gdGhpcy5fY2hvb3NlTW9yZUFycmF5LnRvU3RyaW5nKCk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLl9jaG9vc2VNb3JlQXJyYXkpO1xuICB9XG5cbiAgLy8g5Yik5pat5p+Q5LiA6aG55piv5ZCm5a2Y5Zyo5LqOaW5wdXRUZXh05LitXG4gIG1vcmVJbmRleChpdGVtKSB7XG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICB0aGlzLl9jaG9vc2VNb3JlQXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50ID09PSBpdGVtW3RoaXMuX29wdGlvblZhbHVlXSkge1xuICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmbGFnO1xuICB9XG5cbiAgLy8g5Yig6Zmk5p+Q5LiA6aG5XG4gIGRlbGV0ZU1vcmVJdGVtKGUsIGl0ZW0pIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLl9qZGJEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXRUZXh0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudFt0aGlzLl9vcHRpb25WYWx1ZV0gPT09IGl0ZW1bdGhpcy5fb3B0aW9uVmFsdWVdKSB7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgPT09IGl0ZW1bdGhpcy5fb3B0aW9uVmFsdWVdKSB7XG4gICAgICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5uZ01vZGVsVmFsdWUgPSB0aGlzLl9jaG9vc2VNb3JlQXJyYXkudG9TdHJpbmcoKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuX2Nob29zZU1vcmVBcnJheSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLy8g6L2s5o2i5Li6Ym9vbGVhbizljbPlrp7njrDmnInov5nkuKrlrZfmrrXlsLHorqTkuLrkuLp0cnVlLOayoeacieWNs+S4umZhbHNlXG4gIHRvQm9vbGVhbih2YWx1ZTogYm9vbGVhbiB8IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJycgfHwgKHZhbHVlICYmIHZhbHVlICE9PSAnZmFsc2UnKTtcbiAgfVxuXG4gIC8vIOiuoeeul+afkOWFg+e0oOeahG9mZmV0VG9wXG4gIGdldFRvcChlKSB7XG4gICAgbGV0IG9mZnNldCA9IGUub2Zmc2V0VG9wO1xuICAgIGlmIChlLm9mZnNldFBhcmVudCAhPSBudWxsKSB7XG4gICAgICAvL+ino+aekHRyYW5zbGF0ZVlcbiAgICAgIGlmIChlLnN0eWxlLnRyYW5zZm9ybSkge1xuICAgICAgICBsZXQgcmV0ID0gdGhpcy5wYXJzZVRyYW5zbGF0ZVkoZS5zdHlsZS50cmFuc2Zvcm0pO1xuICAgICAgICBvZmZzZXQgKz0gcmV0LmlzUGVyY2VudCA/IGUuY2xpZW50SGVpZ2h0ICogcmV0LnRyYW5zbGF0ZVkgLyAxMDAgOiByZXQudHJhbnNsYXRlWTtcbiAgICAgIH1cbiAgICAgIG9mZnNldCArPSB0aGlzLmdldFRvcChlLm9mZnNldFBhcmVudCk7XG4gICAgfVxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICAvLyDorqHnrpfmn5DlhYPntKDnmoRzY3JvbGxUb3BcbiAgZ2V0U2Nyb2xsVG9wKGUpIHtcbiAgICBsZXQgb2Zmc2V0ID0gZS5zY3JvbGxUb3A7XG4gICAgaWYgKGUucGFyZW50RWxlbWVudCAhPSBudWxsKSB7XG4gICAgICBvZmZzZXQgKz0gdGhpcy5nZXRTY3JvbGxUb3AoZS5wYXJlbnRFbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIC8v5q2j5YiZ6Kej5p6QdHJhbnNsYXRlWVxuICBwYXJzZVRyYW5zbGF0ZVkodmFsKSB7XG4gICAgbGV0IHJlZyA9IC9cXCgoW14oKV0rKVxcKS9nO1xuICAgIGxldCB0cmFuc2xhdGUgPSByZWcuZXhlYyh2YWwpWzFdO1xuICAgIGxldCB0cmFuc2xhdEFyciA9IHRyYW5zbGF0ZS5zcGxpdCgnLCcpO1xuICAgIGxldCB0cmFuc2xhdGVZO1xuICAgIGxldCBpc1BlcmNlbnQ7XG4gICAgLy/lpoLmnpzkuI3ljIXlkKt0cmFuc2xhdGVcbiAgICBpZiAodmFsLmluZGV4T2YoJ3RyYW5zbGF0ZScpID09PSAtMSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNQZXJjZW50OiBmYWxzZSxcbiAgICAgICAgdHJhbnNsYXRlWTogMFxuICAgICAgfVxuICAgIH1cbiAgICAvL+WIpOaWreaYr3RyYW5zbGF0Zei/mOaYr3RyYW5zbGF0ZVlcbiAgICBpZiAodHJhbnNsYXRBcnIubGVuZ3RoID09PSAyKSB7XG4gICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlLnNwbGl0KCcsJylbMV07XG4gICAgfSBlbHNlIGlmICh0cmFuc2xhdEFyci5sZW5ndGggPT09IDEgJiYgdmFsLmluZGV4T2YoJ3RyYW5zbGF0ZVknKSAhPT0gLTEpIHtcbiAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGU7XG4gICAgfVxuICAgIC8v5Yik5pat5piv55m+5YiG5q+U6L+Y5pivcHhcbiAgICBpZiAodHJhbnNsYXRlWS5pbmRleE9mKCdweCcpICE9PSAtMSkge1xuICAgICAgLy/miKrlj5ZweFxuICAgICAgaXNQZXJjZW50ID0gZmFsc2U7XG4gICAgICB0cmFuc2xhdGVZID0gTnVtYmVyKHRyYW5zbGF0ZVkuc2xpY2UoMCwgLTIpKTtcbiAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZVkuaW5kZXhPZignJScpICE9PSAtMSkge1xuICAgICAgaXNQZXJjZW50ID0gdHJ1ZTtcbiAgICAgIHRyYW5zbGF0ZVkgPSBOdW1iZXIodHJhbnNsYXRlWS5zbGljZSgwLCAtMSkpO1xuICAgIH1cbiAgICAvL+i/lOWbnueZvuWIhuavlOaIluaZrumAmm51bWJlcuWAvFxuICAgIHJldHVybiB7XG4gICAgICBpc1BlcmNlbnQsXG4gICAgICB0cmFuc2xhdGVZXG4gICAgfTtcbiAgfVxufVxuIl19