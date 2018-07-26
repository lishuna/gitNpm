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
                    template: "<!-- \u5355\u9009 --> <div *ngIf=\"_jdbMode=='chooseOne'\" #inputDom class=\"jdb-plg-select-one\" (click)=\"dialogShow($event)\" [ngClass]=\"_classMap\" [ngStyle]=\"{'width':_width}\"> <!-- placeHolder --> <div class=\"jdb-plg-select-placeholder\" [hidden]=\"inputText!=''\">{{_placeHolder}}</div> <!-- \u5355\u9009 --> <!-- <span class=\"chooseOne\" [hidden]=\"inputText==''\">{{inputText}}</span> --> <input class=\"chooseOne chooseOneInput\" [hidden]=\"inputText==''\" type=\"text\" [(ngModel)]=\"inputText\" readonly> <ul #optionList [ngClass]=\"{ 'options-show':show, 'options-no-margin':!spaceFlex} \" class=\"options \"> <!-- \u5355\u9009 --> <li *ngFor=\"let option of _selectList \" (click)=\"item($event,option) \" [ngClass]=\"{active:ngModelValue===option[_optionValue],disabled:option[_jdbItemDisabled] === _jdbSureDisabled} \"> <img class=\"img-box\" *ngIf=\"_showImgBox&&option.imgUrl\" [src]=\"option.imgUrl\" alt=\"\"> <span class=\"img-box\" *ngIf=\"_showImgBox&&!option.imgUrl\"></span> <span class=\"text-box\">{{_optionText=='option'?option:option[_optionText]}}</span> </li> </ul> <!-- \u6E05\u7A7A\u56FE\u6807 --> <span class=\"close-icon icon-empty \" [hidden]=\"!isShowClear \" (click)=\"clearInputText($event) \"></span> <!-- \u5355\u9009\u65F6\u4E0B\u62C9\u56FE\u6807 --> <span class=\"select-icon icon-select-arrow \" [hidden]=\"isShowClear \"></span> </div> <!-- \u591A\u9009 --> <div *ngIf=\"_jdbMode=='chooseMore' \" #inputDom class=\"jdb-plg-select-more \" (click)=\"dialogShow($event) \" [ngClass]=\"_classMap \" [ngStyle]=\"{ 'width':_width} \"> <!-- placeHolder --> <div class=\"jdb-plg-select-placeholder \" [hidden]=\"inputText.length !=0 \">{{_placeHolder}}</div> <!-- \u591A\u9009item --> <ul class=\"chooseMore \"> <li *ngFor=\"let item of inputText \"> {{item.text}} <span class=\"item-delete icon-close \" (click)=\"deleteMoreItem($event,item) \"></span> </li> </ul> <ul #optionList [ngClass]=\"{ 'options-show':show, 'options-no-margin':!spaceFlex} \" class=\"options \"> <li class=\"choose-more \" *ngFor=\"let option of _selectList \" (click)=\"chooseMore($event,option) \" [ngClass]=\"{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} \"> <!-- {{_optionText=='option'?option:option[_optionText]}} --> <img class=\"img-box\" *ngIf=\"_showImgBox&&option.imgUrl\" [src]=\"option.imgUrl\" alt=\"\"> <span class=\"img-box\" *ngIf=\"_showImgBox&&!option.imgUrl\"></span> <span class=\"text-box\">{{_optionText=='option'?option:option[_optionText]}}</span> <span [hidden]=\"!moreIndex(option) \" class=\"choose-right icon-selected \"></span> </li> </ul> <!-- \u6E05\u7A7A\u56FE\u6807 --> <span class=\"close-icon icon-empty \" [hidden]=\"!isShowClear \" (click)=\"clearInputText($event) \"></span> </div> <!-- \u9009\u4E2D\u51E0\u9879 --> <div *ngIf=\"_jdbMode=='chooseNum' \" #inputDom class=\"jdb-plg-select-num \" (click)=\"dialogShow($event) \" [ngClass]=\"_classMap \" [ngStyle]=\"{ 'width':_width} \"> <!-- placeHolder --> <div class=\"jdb-plg-select-placeholder \" [hidden]=\"inputText!=0 \">{{_placeHolder}}</div> <span class=\"choose-tip \" [hidden]=\"inputText==0 \">\u5DF2\u9009\u4E2D{{inputText}}\u9879</span> <ul #optionList [ngClass]=\"{ 'options-show':show, 'options-no-margin':!spaceFlex} \" class=\"options \"> <li class=\"choose-more \" *ngFor=\"let option of _selectList \" (click)=\"numClick($event,option) \" [ngClass]=\"{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} \"> <!-- {{_optionText=='option'?option:option[_optionText]}} --> <img class=\"img-box\" *ngIf=\"_showImgBox&&option.imgUrl\" [src]=\"option.imgUrl\" alt=\"\"> <span class=\"img-box\" *ngIf=\"_showImgBox&&!option.imgUrl\"></span> <span class=\"text-box\">{{_optionText=='option'?option:option[_optionText]}}</span> <span [hidden]=\"!moreIndex(option) \" class=\"choose-right icon-selected \"></span> </li> </ul> <!-- \u6E05\u7A7A\u56FE\u6807 --> <span class=\"close-icon icon-empty \" [hidden]=\"!isShowClear \" (click)=\"clearInputText($event) \"></span> <span class=\"select-icon icon-select-arrow \" [hidden]=\"isShowClear \"></span> </div> <!-- \u906E\u7F69\u5C42 --> <div class=\"jdb-plg-select-master \" *ngIf=\"show \"></div>",
                    styleUrls: ['./jdb-plg-select.component.scss'],
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
export { JdbPlgSelectComponent };
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
//# sourceMappingURL=jdb-plg-select.component.js.map