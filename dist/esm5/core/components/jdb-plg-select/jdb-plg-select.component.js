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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRiLXBsZy1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlc3QtdWkvY29yZS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9qZGItcGxnLXNlbGVjdC9qZGItcGxnLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsVUFBVSxFQUVWLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULFFBQVEsRUFHVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBb092RSwrQkFBb0IsU0FBb0IsRUFBVSxRQUFrQjtRQUFoRCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtxQkFsSjVELFFBQVE7MkJBRUYsTUFBTTs0QkFDTCxPQUFPOzJCQUVSLEtBQUs7eUJBQ1AsS0FBSzs0QkFDRixLQUFLO3dCQUNULFdBQVc7NEJBQ1AsS0FBSztnQ0FDRCxFQUFFO3lCQUNULEVBQUU7MEJBRUQsSUFBSTt5QkFDTCxJQUFJOzJCQUNGLEtBQUs7Z0NBQ0EsVUFBVTtnQ0FDVixDQUFDOzhCQUNILENBQUM7OzRCQUdNLEVBQUU7b0JBMEhuQixLQUFLOzRCQUVHLEVBQUU7d0JBbUxnQixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUk7S0FqTDFDOzBCQTFIRyxrREFBZTs7OztRQUduQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQzlCOzs7OztrQkFMbUIsS0FBSztZQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDOzs7OzswQkFRNUIsa0RBQWU7Ozs7UUFHbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5Qjs7Ozs7a0JBTG1CLEtBQUs7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUss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LFNBQVMsU0FBQyxVQUFVOytCQUNwQixTQUFTLFNBQUMsWUFBWTs7Z0NBblB6Qjs7U0FvR2EscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAg5LiL5ouJ5qGG5Yqf6IO977yaXG4gIOenjeexu++8muWNlemAie+8jOWkmumAie+8jOmAieWHoOmhuVxuICDmoLflvI/vvJrpq5jluqYgbWlkZGxlIHNtYWxsIGxhcmdlXG4qL1xuXG5pbXBvcnQge1xuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBSZW5kZXJlcixcbiAgVmlld0NoaWxkcmVuLFxuICBPbkNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWpkYi1wbGctc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGA8IS0tIOWNlemAiSAtLT5cbjxkaXYgKm5nSWY9XCJfamRiTW9kZT09J2Nob29zZU9uZSdcIiAjaW5wdXREb20gY2xhc3M9XCJqZGItcGxnLXNlbGVjdC1vbmVcIiAoY2xpY2spPVwiZGlhbG9nU2hvdygkZXZlbnQpXCIgW25nQ2xhc3NdPVwiX2NsYXNzTWFwXCIgW25nU3R5bGVdPVwieyd3aWR0aCc6X3dpZHRofVwiPlxuICAgIDwhLS0gcGxhY2VIb2xkZXIgLS0+XG4gICAgPGRpdiBjbGFzcz1cImpkYi1wbGctc2VsZWN0LXBsYWNlaG9sZGVyXCIgW2hpZGRlbl09XCJpbnB1dFRleHQhPScnXCI+e3tfcGxhY2VIb2xkZXJ9fTwvZGl2PlxuICAgIDwhLS0g5Y2V6YCJIC0tPlxuICAgIDwhLS0gPHNwYW4gY2xhc3M9XCJjaG9vc2VPbmVcIiBbaGlkZGVuXT1cImlucHV0VGV4dD09JydcIj57e2lucHV0VGV4dH19PC9zcGFuPiAtLT5cbiAgICA8aW5wdXQgY2xhc3M9XCJjaG9vc2VPbmUgY2hvb3NlT25lSW5wdXRcIiBbaGlkZGVuXT1cImlucHV0VGV4dD09JydcIiB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiaW5wdXRUZXh0XCIgcmVhZG9ubHk+XG4gICAgPHVsICNvcHRpb25MaXN0IFtuZ0NsYXNzXT1cInsgJ29wdGlvbnMtc2hvdyc6c2hvdywgJ29wdGlvbnMtbm8tbWFyZ2luJzohc3BhY2VGbGV4fSBcIiBjbGFzcz1cIm9wdGlvbnMgXCI+XG4gICAgICAgIDwhLS0g5Y2V6YCJIC0tPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBfc2VsZWN0TGlzdCBcIiAoY2xpY2spPVwiaXRlbSgkZXZlbnQsb3B0aW9uKSBcIiBbbmdDbGFzc109XCJ7YWN0aXZlOm5nTW9kZWxWYWx1ZT09PW9wdGlvbltfb3B0aW9uVmFsdWVdLGRpc2FibGVkOm9wdGlvbltfamRiSXRlbURpc2FibGVkXSA9PT0gX2pkYlN1cmVEaXNhYmxlZH0gXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWJveFwiICpuZ0lmPVwiX3Nob3dJbWdCb3gmJm9wdGlvbi5pbWdVcmxcIiBbc3JjXT1cIm9wdGlvbi5pbWdVcmxcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW1nLWJveFwiICpuZ0lmPVwiX3Nob3dJbWdCb3gmJiFvcHRpb24uaW1nVXJsXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJveFwiPnt7X29wdGlvblRleHQ9PSdvcHRpb24nP29wdGlvbjpvcHRpb25bX29wdGlvblRleHRdfX08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8IS0tIOa4heepuuWbvuaghyAtLT5cbiAgICA8c3BhbiBjbGFzcz1cImNsb3NlLWljb24gaWNvbi1lbXB0eSBcIiBbaGlkZGVuXT1cIiFpc1Nob3dDbGVhciBcIiAoY2xpY2spPVwiY2xlYXJJbnB1dFRleHQoJGV2ZW50KSBcIj48L3NwYW4+XG4gICAgPCEtLSDljZXpgInml7bkuIvmi4nlm77moIcgLS0+XG4gICAgPHNwYW4gY2xhc3M9XCJzZWxlY3QtaWNvbiBpY29uLXNlbGVjdC1hcnJvdyBcIiBbaGlkZGVuXT1cImlzU2hvd0NsZWFyIFwiPjwvc3Bhbj5cbjwvZGl2PlxuXG48IS0tIOWkmumAiSAtLT5cbjxkaXYgKm5nSWY9XCJfamRiTW9kZT09J2Nob29zZU1vcmUnIFwiICNpbnB1dERvbSBjbGFzcz1cImpkYi1wbGctc2VsZWN0LW1vcmUgXCIgKGNsaWNrKT1cImRpYWxvZ1Nob3coJGV2ZW50KSBcIiBbbmdDbGFzc109XCJfY2xhc3NNYXAgXCIgW25nU3R5bGVdPVwieyAnd2lkdGgnOl93aWR0aH0gXCI+XG4gICAgPCEtLSBwbGFjZUhvbGRlciAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiamRiLXBsZy1zZWxlY3QtcGxhY2Vob2xkZXIgXCIgW2hpZGRlbl09XCJpbnB1dFRleHQubGVuZ3RoICE9MCBcIj57e19wbGFjZUhvbGRlcn19PC9kaXY+XG4gICAgPCEtLSDlpJrpgIlpdGVtIC0tPlxuICAgIDx1bCBjbGFzcz1cImNob29zZU1vcmUgXCI+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpbnB1dFRleHQgXCI+XG4gICAgICAgICAgICB7e2l0ZW0udGV4dH19XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tZGVsZXRlIGljb24tY2xvc2UgXCIgKGNsaWNrKT1cImRlbGV0ZU1vcmVJdGVtKCRldmVudCxpdGVtKSBcIj48L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8dWwgI29wdGlvbkxpc3QgW25nQ2xhc3NdPVwieyAnb3B0aW9ucy1zaG93JzpzaG93LCAnb3B0aW9ucy1uby1tYXJnaW4nOiFzcGFjZUZsZXh9IFwiIGNsYXNzPVwib3B0aW9ucyBcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwiY2hvb3NlLW1vcmUgXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBfc2VsZWN0TGlzdCBcIiAoY2xpY2spPVwiY2hvb3NlTW9yZSgkZXZlbnQsb3B0aW9uKSBcIiBbbmdDbGFzc109XCJ7ICdhY3RpdmUnOm1vcmVJbmRleChvcHRpb24pLGRpc2FibGVkOm9wdGlvbltfamRiSXRlbURpc2FibGVkXSA9PT0gX2pkYlN1cmVEaXNhYmxlZH0gXCI+XG4gICAgICAgICAgICA8IS0tIHt7X29wdGlvblRleHQ9PSdvcHRpb24nP29wdGlvbjpvcHRpb25bX29wdGlvblRleHRdfX0gLS0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWJveFwiICpuZ0lmPVwiX3Nob3dJbWdCb3gmJm9wdGlvbi5pbWdVcmxcIiBbc3JjXT1cIm9wdGlvbi5pbWdVcmxcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW1nLWJveFwiICpuZ0lmPVwiX3Nob3dJbWdCb3gmJiFvcHRpb24uaW1nVXJsXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJveFwiPnt7X29wdGlvblRleHQ9PSdvcHRpb24nP29wdGlvbjpvcHRpb25bX29wdGlvblRleHRdfX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBbaGlkZGVuXT1cIiFtb3JlSW5kZXgob3B0aW9uKSBcIiBjbGFzcz1cImNob29zZS1yaWdodCBpY29uLXNlbGVjdGVkIFwiPjwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDwhLS0g5riF56m65Zu+5qCHIC0tPlxuICAgIDxzcGFuIGNsYXNzPVwiY2xvc2UtaWNvbiBpY29uLWVtcHR5IFwiIFtoaWRkZW5dPVwiIWlzU2hvd0NsZWFyIFwiIChjbGljayk9XCJjbGVhcklucHV0VGV4dCgkZXZlbnQpIFwiPjwvc3Bhbj5cbjwvZGl2PlxuXG48IS0tIOmAieS4reWHoOmhuSAtLT5cbjxkaXYgKm5nSWY9XCJfamRiTW9kZT09J2Nob29zZU51bScgXCIgI2lucHV0RG9tIGNsYXNzPVwiamRiLXBsZy1zZWxlY3QtbnVtIFwiIChjbGljayk9XCJkaWFsb2dTaG93KCRldmVudCkgXCIgW25nQ2xhc3NdPVwiX2NsYXNzTWFwIFwiIFtuZ1N0eWxlXT1cInsgJ3dpZHRoJzpfd2lkdGh9IFwiPlxuICAgIDwhLS0gcGxhY2VIb2xkZXIgLS0+XG4gICAgPGRpdiBjbGFzcz1cImpkYi1wbGctc2VsZWN0LXBsYWNlaG9sZGVyIFwiIFtoaWRkZW5dPVwiaW5wdXRUZXh0IT0wIFwiPnt7X3BsYWNlSG9sZGVyfX08L2Rpdj5cbiAgICA8c3BhbiBjbGFzcz1cImNob29zZS10aXAgXCIgW2hpZGRlbl09XCJpbnB1dFRleHQ9PTAgXCI+5bey6YCJ5Lite3tpbnB1dFRleHR9femhuTwvc3Bhbj5cbiAgICA8dWwgI29wdGlvbkxpc3QgW25nQ2xhc3NdPVwieyAnb3B0aW9ucy1zaG93JzpzaG93LCAnb3B0aW9ucy1uby1tYXJnaW4nOiFzcGFjZUZsZXh9IFwiIGNsYXNzPVwib3B0aW9ucyBcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwiY2hvb3NlLW1vcmUgXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBfc2VsZWN0TGlzdCBcIiAoY2xpY2spPVwibnVtQ2xpY2soJGV2ZW50LG9wdGlvbikgXCIgW25nQ2xhc3NdPVwieyAnYWN0aXZlJzptb3JlSW5kZXgob3B0aW9uKSxkaXNhYmxlZDpvcHRpb25bX2pkYkl0ZW1EaXNhYmxlZF0gPT09IF9qZGJTdXJlRGlzYWJsZWR9IFwiPlxuICAgICAgICAgICAgPCEtLSB7e19vcHRpb25UZXh0PT0nb3B0aW9uJz9vcHRpb246b3B0aW9uW19vcHRpb25UZXh0XX19IC0tPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1ib3hcIiAqbmdJZj1cIl9zaG93SW1nQm94JiZvcHRpb24uaW1nVXJsXCIgW3NyY109XCJvcHRpb24uaW1nVXJsXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImltZy1ib3hcIiAqbmdJZj1cIl9zaG93SW1nQm94JiYhb3B0aW9uLmltZ1VybFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ib3hcIj57e19vcHRpb25UZXh0PT0nb3B0aW9uJz9vcHRpb246b3B0aW9uW19vcHRpb25UZXh0XX19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gW2hpZGRlbl09XCIhbW9yZUluZGV4KG9wdGlvbikgXCIgY2xhc3M9XCJjaG9vc2UtcmlnaHQgaWNvbi1zZWxlY3RlZCBcIj48L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8IS0tIOa4heepuuWbvuaghyAtLT5cbiAgICA8c3BhbiBjbGFzcz1cImNsb3NlLWljb24gaWNvbi1lbXB0eSBcIiBbaGlkZGVuXT1cIiFpc1Nob3dDbGVhciBcIiAoY2xpY2spPVwiY2xlYXJJbnB1dFRleHQoJGV2ZW50KSBcIj48L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJzZWxlY3QtaWNvbiBpY29uLXNlbGVjdC1hcnJvdyBcIiBbaGlkZGVuXT1cImlzU2hvd0NsZWFyIFwiPjwvc3Bhbj5cbjwvZGl2PlxuXG48IS0tIOmBrue9qeWxgiAtLT5cbjxkaXYgY2xhc3M9XCJqZGItcGxnLXNlbGVjdC1tYXN0ZXIgXCIgKm5nSWY9XCJzaG93IFwiPjwvZGl2PmAsXG4gIHN0eWxlczogW2AuamRiLXBsZy1zZWxlY3QtbW9yZSwuamRiLXBsZy1zZWxlY3QtbnVtLC5qZGItcGxnLXNlbGVjdC1vbmV7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjAwcHg7Ym9yZGVyOjFweCBzb2xpZCAjYWZiMGIzO2JvcmRlci1yYWRpdXM6MnB4O2JhY2tncm91bmQ6I2ZmZjt0ZXh0LWFsaWduOmxlZnQ7Y3Vyc29yOnBvaW50ZXJ9LmpkYi1wbGctc2VsZWN0LW1vcmUgLmpkYi1wbGctc2VsZWN0LXBsYWNlaG9sZGVyLC5qZGItcGxnLXNlbGVjdC1udW0gLmpkYi1wbGctc2VsZWN0LXBsYWNlaG9sZGVyLC5qZGItcGxnLXNlbGVjdC1vbmUgLmpkYi1wbGctc2VsZWN0LXBsYWNlaG9sZGVye2NvbG9yOiNhZmIwYjM7LW1vei11c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5vcHRpb25zLC5qZGItcGxnLXNlbGVjdC1udW0gLm9wdGlvbnMsLmpkYi1wbGctc2VsZWN0LW9uZSAub3B0aW9uc3twb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdy15OnNjcm9sbDt6LWluZGV4Ojk5OTk7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWSgwKTt0cmFuc2Zvcm06c2NhbGVZKDApOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDA7dHJhbnNmb3JtLW9yaWdpbjowIDA7bGVmdDotMXB4O2JvcmRlcjoxcHggc29saWQgI2FmYjBiMzt3aWR0aDoxMDAlO21heC1oZWlnaHQ6MTkwcHg7YmFja2dyb3VuZDojZmZmfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5vcHRpb25zIGxpLC5qZGItcGxnLXNlbGVjdC1udW0gLm9wdGlvbnMgbGksLmpkYi1wbGctc2VsZWN0LW9uZSAub3B0aW9ucyBsaXtwYWRkaW5nOjVweCAxMnB4O21pbi1oZWlnaHQ6MzBweDtjb2xvcjojMzIzMjMzfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5vcHRpb25zIGxpOmhvdmVyLC5qZGItcGxnLXNlbGVjdC1udW0gLm9wdGlvbnMgbGk6aG92ZXIsLmpkYi1wbGctc2VsZWN0LW9uZSAub3B0aW9ucyBsaTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMGYxZjU7Y29sb3I6IzMyMzIzM30uamRiLXBsZy1zZWxlY3QtbW9yZSAub3B0aW9ucyBsaSAuY2hvb3NlLXJpZ2h0LC5qZGItcGxnLXNlbGVjdC1udW0gLm9wdGlvbnMgbGkgLmNob29zZS1yaWdodCwuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zIGxpIC5jaG9vc2UtcmlnaHR7ZmxvYXQ6cmlnaHQ7bWFyZ2luLXRvcDotMnB4fS5qZGItcGxnLXNlbGVjdC1tb3JlIC5vcHRpb25zIGxpIC5pbWctYm94LC5qZGItcGxnLXNlbGVjdC1udW0gLm9wdGlvbnMgbGkgLmltZy1ib3gsLmpkYi1wbGctc2VsZWN0LW9uZSAub3B0aW9ucyBsaSAuaW1nLWJveHtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7aGVpZ2h0OjE4cHg7d2lkdGg6MThweH0uamRiLXBsZy1zZWxlY3QtbW9yZSAub3B0aW9ucyBsaSAudGV4dC1ib3gsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyBsaSAudGV4dC1ib3gsLmpkYi1wbGctc2VsZWN0LW9uZSAub3B0aW9ucyBsaSAudGV4dC1ib3h7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5vcHRpb25zIC5jaG9vc2UtbW9yZSwuamRiLXBsZy1zZWxlY3QtbnVtIC5vcHRpb25zIC5jaG9vc2UtbW9yZSwuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zIC5jaG9vc2UtbW9yZXttYXJnaW4tYm90dG9tOjFweH0uamRiLXBsZy1zZWxlY3QtbW9yZSAub3B0aW9ucyAuYWN0aXZlLC5qZGItcGxnLXNlbGVjdC1tb3JlIC5vcHRpb25zIC5hY3RpdmU6aG92ZXIsLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucyAuYWN0aXZlLC5qZGItcGxnLXNlbGVjdC1udW0gLm9wdGlvbnMgLmFjdGl2ZTpob3ZlciwuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zIC5hY3RpdmUsLmpkYi1wbGctc2VsZWN0LW9uZSAub3B0aW9ucyAuYWN0aXZlOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzNmNjlmMjtjb2xvcjojZmZmfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5vcHRpb25zIC5kaXNhYmxlZCwuamRiLXBsZy1zZWxlY3QtbnVtIC5vcHRpb25zIC5kaXNhYmxlZCwuamRiLXBsZy1zZWxlY3Qtb25lIC5vcHRpb25zIC5kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOm5vbmU7Y29sb3I6I2FmYjBiMztjdXJzb3I6bm90LWFsbG93ZWR9LmpkYi1wbGctc2VsZWN0LW1vcmUgLm9wdGlvbnMgLmRpc2FibGVkOmhvdmVyLC5qZGItcGxnLXNlbGVjdC1udW0gLm9wdGlvbnMgLmRpc2FibGVkOmhvdmVyLC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnMgLmRpc2FibGVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6bm9uZTtjb2xvcjojYWZiMGIzfS5qZGItcGxnLXNlbGVjdC1tb3JlIC5vcHRpb25zLXNob3csLmpkYi1wbGctc2VsZWN0LW51bSAub3B0aW9ucy1zaG93LC5qZGItcGxnLXNlbGVjdC1vbmUgLm9wdGlvbnMtc2hvd3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVZKDEpO3RyYW5zZm9ybTpzY2FsZVkoMSl9LmpkYi1wbGctc2VsZWN0LW1vcmUgLmNsb3NlLWljb24sLmpkYi1wbGctc2VsZWN0LW51bSAuY2xvc2UtaWNvbiwuamRiLXBsZy1zZWxlY3Qtb25lIC5jbG9zZS1pY29ue3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjVweDt0b3A6NTAlO21hcmdpbi10b3A6LTEycHg7Y29sb3I6IzdkN2U4MH0uamRiLXBsZy1zZWxlY3QtbW9yZSAuY2xvc2UtaWNvbjpob3ZlciwuamRiLXBsZy1zZWxlY3QtbnVtIC5jbG9zZS1pY29uOmhvdmVyLC5qZGItcGxnLXNlbGVjdC1vbmUgLmNsb3NlLWljb246aG92ZXJ7Y29sb3I6IzMyMzIzM30uamRiLXBsZy1zZWxlY3QtbW9yZSAuc2VsZWN0LWljb24sLmpkYi1wbGctc2VsZWN0LW51bSAuc2VsZWN0LWljb24sLmpkYi1wbGctc2VsZWN0LW9uZSAuc2VsZWN0LWljb257cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6NXB4O3RvcDo1MCU7bWFyZ2luLXRvcDotMTJweH0uamRiLXBsZy1zZWxlY3Qtb25lIC5jaG9vc2VPbmV7Y29sb3I6IzMzM30uamRiLXBsZy1zZWxlY3Qtb25lIC5jaG9vc2VPbmVJbnB1dHtib3JkZXI6bm9uZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3BhZGRpbmctcmlnaHQ6MThweH0uamRiLXBsZy1zZWxlY3QtbW9yZSAuY2hvb3NlTW9yZSBsaSwuamRiLXBsZy1zZWxlY3QtbnVtIC5jaG9vc2VNb3JlIGxpe3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDo1cHg7cGFkZGluZzowIDVweDtoZWlnaHQ6MjJweDtmb250LXNpemU6MTNweDtib3JkZXI6MXB4IHNvbGlkICNkN2Q4ZGI7Ym9yZGVyLXJhZGl1czoycHg7Y29sb3I6IzMzMzstbW96LXVzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmpkYi1wbGctc2VsZWN0LW1vcmUgLmNob29zZU1vcmUgbGkgLml0ZW0tZGVsZXRlLC5qZGItcGxnLXNlbGVjdC1udW0gLmNob29zZU1vcmUgbGkgLml0ZW0tZGVsZXRle2ZvbnQtc2l6ZToxMnB4fS5qZGItcGxnLXNlbGVjdC1hY3RpdmV7Ym9yZGVyOjFweCBzb2xpZCAjM2Y2OWYyfS5qZGItcGxnLXNlbGVjdC1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNmMGYxZjV9LnNtYWxse21pbi1oZWlnaHQ6MjRweDtwYWRkaW5nOjJweCAxMHB4O2ZvbnQtc2l6ZToxMnB4fS5zbWFsbCAub3B0aW9uc3ttYXJnaW4tdG9wOjdweH0uc21hbGwgLm9wdGlvbnMtbm8tbWFyZ2lue21hcmdpbjowfS5taWRkbGV7bWluLWhlaWdodDozMHB4O3BhZGRpbmc6NXB4IDEwcHg7Zm9udC1zaXplOjEzcHh9Lm1pZGRsZSAub3B0aW9uc3ttYXJnaW4tdG9wOjEwcHh9Lm1pZGRsZSAub3B0aW9ucy1uby1tYXJnaW57bWFyZ2luOjB9Lm1pZGRsZSAuY2hvb3NlLXRpcCwubWlkZGxlIC5jaG9vc2VPbmUsLm1pZGRsZSAuamRiLXBsZy1zZWxlY3QtcGxhY2Vob2xkZXJ7aGVpZ2h0OjE4cHg7bGluZS1oZWlnaHQ6MThweH0ubWlkZGxlIC5jaG9vc2UtdGlwLC5taWRkbGUgLmNob29zZU9uZXtkaXNwbGF5OmJsb2NrfS5taWRkbGUgLmNob29zZU1vcmUgbGl7bWFyZ2luLWJvdHRvbTozcHh9Lmxhcmdle21pbi1oZWlnaHQ6NDBweDtwYWRkaW5nOjlweCAxMHB4O2ZvbnQtc2l6ZToxNHB4fS5sYXJnZSAub3B0aW9uc3ttYXJnaW4tdG9wOjE0cHh9LmxhcmdlIC5vcHRpb25zLW5vLW1hcmdpbnttYXJnaW46MH0ubGFyZ2UgLmNob29zZS10aXAsLmxhcmdlIC5jaG9vc2VPbmUsLmxhcmdlIC5qZGItcGxnLXNlbGVjdC1wbGFjZWhvbGRlcntoZWlnaHQ6MjBweDtsaW5lLWhlaWdodDoyMHB4fS5sYXJnZSAuY2hvb3NlLXRpcCwubGFyZ2UgLmNob29zZU9uZXtkaXNwbGF5OmJsb2NrfS5sYXJnZSAuY2hvb3NlTW9yZSBsaXttYXJnaW4tYm90dG9tOjhweH0uamRiLXBsZy1zZWxlY3QtYm90dG9tLW1pZGRsZXtwYWRkaW5nOjNweCAxMHB4IDB9LmpkYi1wbGctc2VsZWN0LWJvdHRvbS1sYXJnZXtwYWRkaW5nOjhweCAxMHB4IDB9LmpkYi1wbGctc2VsZWN0LW1hc3Rlcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOjAgMDt6LWluZGV4Ojk5OTh9YF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsvLyDms6jlhozmiJDkuLrooajljZXmjqfku7ZcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSmRiUGxnU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEpkYlBsZ1NlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgX3NlbGVjdExpc3Q6IGFueTtcbiAgX3NpemUgPSAnbWlkZGxlJztcbiAgX3dpZHRoOiBzdHJpbmc7XG4gIF9vcHRpb25UZXh0ID0gJ3RleHQnOyAgLy8g6buY6K6k5YC8XG4gIF9vcHRpb25WYWx1ZSA9ICd2YWx1ZSc7IC8vIOm7mOiupOWAvFxuICBfb3B0aW9uUG9zaXRpb246IHN0cmluZztcbiAgaXNTaG93Q2xlYXIgPSBmYWxzZTsgLy8g5piv5ZCm5bGV56S65riF56m6eFxuICBfamRiQ2xlYXIgPSBmYWxzZTtcbiAgX2pkYkRpc2FibGVkID0gZmFsc2U7IC8vIOm7mOiupOacquemgeeUqFxuICBfamRiTW9kZSA9ICdjaG9vc2VPbmUnO1xuICBfcGxhY2VIb2xkZXIgPSAn6K+36YCJ5oupJztcbiAgX2Nob29zZU1vcmVBcnJheSA9IFtdOyAvLyDlpJrpgInpgInkuK3lhYPntKDmlbDnu4RcbiAgX2NsYXNzTWFwID0ge307XG4gIGxpc3RIZWlnaHQ6IG51bWJlcjtcbiAgc2F2YUhlaWdodCA9IHRydWU7XG4gIHNwYWNlRmxleCA9IHRydWU7ICAvLyDmmK/lkKbmnInliankvZnnqbrpl7TvvIzpu5jorqTmnIlcbiAgX3Nob3dJbWdCb3ggPSBmYWxzZTsgLy8g5LiL5ouJ5qGG5piv5ZCm5bim5Zu+54mHXG4gIF9qZGJJdGVtRGlzYWJsZWQgPSAnZGlzYWJsZWQnOyAvLyDpu5jorqTkuLpkaXNhYmxlZFxuICBfamRiU3VyZURpc2FibGVkID0gMjsgLy8g5Li6MeaYr+WQr+eUqCAy5piv56aB55SoXG4gIF9qZGJOb0Rpc2FibGVkID0gMTsgLy8g5Li6MuihqOekuuS4jeemgeeUqFxuXG4gIC8vIOiHquWumuS5ieexu+WQjVxuICBASW5wdXQoKSBqZGJDbGFzc05hbWUgPSAnJztcblxuICAvLyDpgInpobnkuK3mn5DpobnnpoHnlKjlrZfmrrVcbiAgQElucHV0KClcbiAgc2V0IGpkYkl0ZW1EaXNhYmxlZCh2YWx1ZSkge1xuICAgIHRoaXMuX2pkYkl0ZW1EaXNhYmxlZCA9IHZhbHVlO1xuICB9XG4gIGdldCBqZGJJdGVtRGlzYWJsZWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5famRiSXRlbURpc2FibGVkO1xuICB9XG5cbiAgLy8g6YCJ6aG55Lit5p+Q6aG556Gu6K6k56aB55SoXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJTdXJlRGlzYWJsZWQodmFsdWUpIHtcbiAgICB0aGlzLl9qZGJTdXJlRGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgamRiU3VyZURpc2FibGVkKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2pkYlN1cmVEaXNhYmxlZDtcbiAgfVxuXG4gIC8vIC8vIOmAiemhueS4reafkOmhueS4jeemgeeUqFxuICAvLyBASW5wdXQoKVxuICAvLyBzZXQgamRiTm9EaXNhYmxlZCh2YWx1ZSkge1xuICAvLyAgIHRoaXMuX2pkYk5vRGlzYWJsZWQgPSB2YWx1ZTtcbiAgLy8gfVxuICAvLyBnZXQgamRiTm9EaXNhYmxlZCgpOiBhbnkge1xuICAvLyAgIHJldHVybiB0aGlzLl9qZGJOb0Rpc2FibGVkO1xuICAvLyB9XG5cbiAgLy8g6YCJ6aG55Lit5p+Q6aG556Gu6K6k56aB55SoXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJQbGFjZUhvbGRlcih2YWx1ZSkge1xuICAgIHRoaXMuX3BsYWNlSG9sZGVyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGpkYlBsYWNlSG9sZGVyKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlSG9sZGVyO1xuICB9XG5cbiAgLy8g5piv5ZCm6ZyA6KaB5pi+56S65riF56m6XG4gIEBJbnB1dCgpXG4gIHNldCBqZGJDbGVhcih2YWx1ZSkge1xuICAgIHRoaXMuX2pkYkNsZWFyID0gdGhpcy50b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIGdldCBqZGJDbGVhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5famRiQ2xlYXI7XG4gIH1cblxuICAvLyDkuIvmi4nmoYbmlbDnu4TvvIzlv4XlhplcbiAgQElucHV0KClcbiAgc2V0IGpkYlNlbGVjdExpc3QodmFsdWUpIHtcbiAgICB0aGlzLl9zZWxlY3RMaXN0ID0gdmFsdWU7XG5cbiAgICAvLyDlvqrnjq/mlbDnu4TvvIzliKTmlq3mmK/lkKbpnIDopoHlsZXnpLrluKbmnInlm77niYfkuIvmi4nmoYZcbiAgICBpZiAodGhpcy5fc2VsZWN0TGlzdCkge1xuICAgICAgdGhpcy5fc2VsZWN0TGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5pbWdVcmwpIHtcbiAgICAgICAgICB0aGlzLl9zaG93SW1nQm94ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGdldCBqZGJTZWxlY3RMaXN0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdExpc3Q7XG4gIH1cblxuICAvLyDkuIvmi4nmoYblsLrlr7jvvIzpu5jorqTkuLrpq5jluqYzMHB477ybc21hbGzkuLoyNHB4LGxhcmdl5Li6NDBweDtcbiAgQElucHV0KClcbiAgc2V0IGpkYlNpemUodmFsdWUpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGpkYlNpemUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIC8vIOiHquWumuS5ieWuveW6plxuICBASW5wdXQoKVxuICBzZXQgamRiV2lkdGgodmFsdWUpIHtcbiAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xuICB9XG4gIGdldCBqZGJXaWR0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIC8vIOWxleekuuWcqOmhtemdouWGheWuueWtl+auteWQjeensFxuICBASW5wdXQoKVxuICBzZXQgamRiT3B0aW9uVGV4dCh2YWx1ZSkge1xuICAgIHRoaXMuX29wdGlvblRleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgamRiT3B0aW9uVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25UZXh0O1xuICB9XG5cbiAgLy8g6L+U5Zue57uZc2VydmXlr7nlupTlrZfmrrXlkI3np7BcbiAgQElucHV0KClcbiAgc2V0IGpkYk9wdGlvblZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5fb3B0aW9uVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgamRiT3B0aW9uVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uVmFsdWU7XG4gIH1cblxuICAvLyDkuIvmi4nmoYbnpoHnlKhcbiAgQElucHV0KClcbiAgc2V0IGpkYkRpc2FibGVkKHZhbHVlKSB7XG4gICAgdGhpcy5famRiRGlzYWJsZWQgPSB0aGlzLnRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgZ2V0IGpkYkRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9qZGJEaXNhYmxlZDtcbiAgfVxuXG4gIC8vIHNlbGVjdOaooeW8j++8jOm7mOiupOS4uuWNlemAie+8jGNob29zZU1vcmXlpJrpgIlcbiAgQElucHV0KClcbiAgc2V0IGpkYk1vZGUodmFsdWUpIHtcbiAgICB0aGlzLl9qZGJNb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGpkYk1vZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5famRiTW9kZTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RG9tJykgaW5wdXREb206IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ29wdGlvbkxpc3QnKSBvcHRpb25MaXN0OiBFbGVtZW50UmVmO1xuXG4gIHNob3cgPSBmYWxzZTtcbiAgaW5wdXRUZXh0OiBhbnk7XG4gIG5nTW9kZWxWYWx1ZSA9ICcnO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyMjogUmVuZGVyZXIyLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgXG5cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtbGlmZS1jeWNsZS1pbnRlcmZhY2VcbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIOeCueWHu+mZpOS4i+aLieahhuS7peWkluS9jee9ru+8jOS4i+aLieahhumakOiXj1xuICAgIHRoaXMucmVuZGVyZXIyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuaW5wdXREb20ubmF0aXZlRWxlbWVudCwgJ2pkYi1wbGctc2VsZWN0LWFjdGl2ZScsIHRoaXMuc2hvdyk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5famRiQ2xlYXIgJiYgIXRoaXMuX2pkYkRpc2FibGVkKSB7XG4gICAgICAvLyDnm5HlkKzovpPlhaXmoYblhYPntKDvvIzoi6XmnInlhoXlrrnml7bliJnmu5HkuIrmmL7npLp4XG4gICAgICB0aGlzLnJlbmRlcmVyMi5saXN0ZW4odGhpcy5pbnB1dERvbS5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgLy8g6Iul6L6T5YWl5qGG5LiN5a2Y5Zyo5YaF5a6577yM5YiZ5LiN5YGa5Lu75L2V5pON5L2cXG5cbiAgICAgICAgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VPbmUnIHx8IHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VOdW0nKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlucHV0VGV4dCB8fCB0aGlzLnNob3cpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU1vcmUnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaW5wdXRUZXh0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLnNob3cpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzU2hvd0NsZWFyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5pbnB1dERvbS5uYXRpdmVFbGVtZW50LCAnamRiLXBsZy1zZWxlY3QtYWN0aXZlJywgdGhpcy5zaG93KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZW5kZXJlcjIubGlzdGVuKHRoaXMuaW5wdXREb20ubmF0aXZlRWxlbWVudCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIC8vIOiLpei+k+WFpeahhuS4jeWtmOWcqOWGheWuue+8jOWImeS4jeWBmuS7u+S9leaTjeS9nFxuICAgICAgICBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU9uZScgfHwgdGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU51bScpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaW5wdXRUZXh0IHx8IHRoaXMuc2hvdykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTW9yZScpIHtcbiAgICAgICAgICBpZiAodGhpcy5pbnB1dFRleHQubGVuZ3RoID09PSAwIHx8IHRoaXMuc2hvdykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNTaG93Q2xlYXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5pbnB1dERvbS5uYXRpdmVFbGVtZW50LCAnamRiLXBsZy1zZWxlY3QtYWN0aXZlJywgdGhpcy5zaG93KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VPbmUnKSB7XG4gICAgICB0aGlzLmlucHV0VGV4dCA9ICcnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU1vcmUnKSB7XG4gICAgICB0aGlzLmlucHV0VGV4dCA9IFtdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU51bScpIHtcbiAgICAgIHRoaXMuaW5wdXRUZXh0ID0gMDtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgc2V0Q2xhc3NNYXAoKSB7XG4gICAgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VNb3JlJykge1xuICAgICAgdGhpcy5fY2xhc3NNYXAgPSB7XG4gICAgICAgIFtgJHt0aGlzLl9zaXplfWBdOiB0cnVlLFxuICAgICAgICBbYGpkYi1wbGctc2VsZWN0LWJvdHRvbS0ke3RoaXMuX3NpemV9YF06IHRoaXMuaW5wdXRUZXh0Lmxlbmd0aCAhPT0gMCxcbiAgICAgICAgWydqZGItcGxnLXNlbGVjdC1kaXNhYmxlZCddOiB0aGlzLl9qZGJEaXNhYmxlZCxcbiAgICAgICAgW3RoaXMuamRiQ2xhc3NOYW1lXTogdHJ1ZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2xhc3NNYXAgPSB7XG4gICAgICAgIFtgJHt0aGlzLl9zaXplfWBdOiB0cnVlLFxuICAgICAgICBbJ2pkYi1wbGctc2VsZWN0LWRpc2FibGVkJ106IHRoaXMuX2pkYkRpc2FibGVkLFxuICAgICAgICBbdGhpcy5qZGJDbGFzc05hbWVdOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIOeCueWHu3jvvIzmuIXnqbrlhoXlrrlcbiAgY2xlYXJJbnB1dFRleHQoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU9uZScpIHtcbiAgICAgIHRoaXMuaW5wdXRUZXh0ID0gJyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTW9yZScpIHtcbiAgICAgIHRoaXMuaW5wdXRUZXh0ID0gW107XG4gICAgICB0aGlzLl9jaG9vc2VNb3JlQXJyYXkgPSBbXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VOdW0nKSB7XG4gICAgICB0aGlzLmlucHV0VGV4dCA9IDA7XG4gICAgICB0aGlzLl9jaG9vc2VNb3JlQXJyYXkgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5pc1Nob3dDbGVhciA9ICF0aGlzLmlzU2hvd0NsZWFyO1xuXG4gICAgLy8g5riF56m65ZCO6L6T5YWl6ZyA6KaB6YeN5paw5ZGK55+l54i257uE5Lu2XG4gICAgdGhpcy5uZ01vZGVsVmFsdWUgPSAnJztcbiAgICB0aGlzLm9uQ2hhbmdlKCcnKTtcblxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIC8vIOeCueWHu+i+k+WFpeahhuS4i+aLieiPnOWNleaYvumakFxuICBkaWFsb2dTaG93KGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIOiLpeWkluS+p+e7hOS7tuWRiuefpeemgeeUqO+8jOWImeeCueWHu+ayoeacieS7u+S9leaViOaenFxuICAgIGlmICh0aGlzLl9qZGJEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzU2hvd0NsZWFyID0gZmFsc2U7XG4gICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RG9tLm5hdGl2ZUVsZW1lbnQsICdqZGItcGxnLXNlbGVjdC1hY3RpdmUnLCB0aGlzLnNob3cpO1xuICAgIHRoaXMub3B0aW9uUG9zaXRpb24odGhpcy5vcHRpb25MaXN0Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgfVxuXG4gIC8vIOa1ruWxguWHuueOsOaYr+WcqOi+k+WFpeahhuS4iuaWuei/mOaYr+S4i+aWuVxuICBvcHRpb25Qb3NpdGlvbihsaXN0SGVpZ2h0KSB7XG4gICAgY29uc3Qgb2ZmZXRUb3AgPSB0aGlzLmdldFRvcCh0aGlzLmlucHV0RG9tLm5hdGl2ZUVsZW1lbnQpOyAgLy8g5YWD57Sgb2ZmZXRUb3BcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCh0aGlzLmlucHV0RG9tLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDsgLy8g5bGP5bmV6auY5bqmXG4gICAgY29uc3QgZWxlbUhlaWdodCA9IHRoaXMuaW5wdXREb20ubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7IC8vIOWFg+e0oOmrmOW6plxuICAgIGxldCBwYWRkaW5nSGVpZ2h0O1xuICAgIGlmICh0aGlzLmpkYlNpemUgPT09ICdzbWFsbCcpIHtcbiAgICAgIHBhZGRpbmdIZWlnaHQgPSAyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5qZGJTaXplID09PSAnbGFyZ2UnKSB7XG4gICAgICBwYWRkaW5nSGVpZ2h0ID0gOTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuamRiU2l6ZSA9PT0gJ21pZGRsZScpIHtcbiAgICAgIHBhZGRpbmdIZWlnaHQgPSA1O1xuICAgIH1cbiAgICBjb25zdCBmbGV4SGVpZ2h0ID0gY2xpZW50SGVpZ2h0IC0gb2ZmZXRUb3AgLSBlbGVtSGVpZ2h0IC0gcGFkZGluZ0hlaWdodCArIHNjcm9sbFRvcDsgLy8g5Ymp5L2Z6auY5bqmXG4gICAgaWYgKGZsZXhIZWlnaHQgPCBsaXN0SGVpZ2h0KSB7XG4gICAgICAvLyDnqbrpl7TkuI3otrNcbiAgICAgIHRoaXMuc3BhY2VGbGV4ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLm9wdGlvbkxpc3QubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybS1vcmlnaW4nLCAnMTAwJSAxMDAlJyk7XG4gICAgICBpZiAobGlzdEhlaWdodCA8IDE4OCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLm9wdGlvbkxpc3QubmF0aXZlRWxlbWVudCwgJ3RvcCcsIC0gbGlzdEhlaWdodCAtIDUgKyAncHgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMub3B0aW9uTGlzdC5uYXRpdmVFbGVtZW50LCAndG9wJywgLTE5MCAtIHBhZGRpbmdIZWlnaHQgKyAncHgnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zcGFjZUZsZXggPSB0cnVlO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5vcHRpb25MaXN0Lm5hdGl2ZUVsZW1lbnQsICd0b3AnLCAnJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLm9wdGlvbkxpc3QubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybS1vcmlnaW4nLCAnMCUgMCUnKTtcbiAgICB9XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciDoh6rlrprkuYnooajljZUg5LiO54i257uE5Lu255qEbmdNb2RlbOe7keWumui1t+adpVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm5nTW9kZWxWYWx1ZSA9IHZhbHVlO1xuXG4gICAgLy8g6Iul5pyJ5Yid5aeL6aG577yM5YiZ6ZyA6KaB5aSE55CG5LiA5LiLXG4gICAgLy8gaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VPbmUnKSB7XG4gICAgLy8gICB0aGlzLmZvck9uZVN0YXJ0KHZhbHVlKTtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuX2pkYk1vZGUgPT09ICdjaG9vc2VNb3JlJykge1xuICAgIC8vICAgdGhpcy5mb3JNb3JlU3RhcnQodmFsdWUpO1xuICAgIC8vICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU51bScpIHtcbiAgICAvLyAgIHRoaXMuZm9yTnVtU3RhcnQodmFsdWUpO1xuICAgIC8vIH1cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIOiLpeS8oOWFpeWAvOS4um51bGzvvIzliJnmuIXnqbrmlbDmja5cbiAgICAgIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTW9yZScpIHtcbiAgICAgICAgdGhpcy5pbnB1dFRleHQgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0ID0gJyc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlT25lJykge1xuICAgICAgICB0aGlzLmZvck9uZVN0YXJ0KHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5famRiTW9kZSA9PT0gJ2Nob29zZU1vcmUnKSB7XG4gICAgICAgIHRoaXMuZm9yTW9yZVN0YXJ0KHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9qZGJNb2RlID09PSAnY2hvb3NlTnVtJykge1xuICAgICAgICB0aGlzLmZvck51bVN0YXJ0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8vIOWNlemAie+8jOiLpeacieWIneWni+mAiemhue+8jOWImemBjeWOhuaVsOe7hFxuICBmb3JPbmVTdGFydCh2YWx1ZSkge1xuICAgIHRoaXMuX3NlbGVjdExpc3QuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIGlmIChlbGVtW3RoaXMuX29wdGlvblZhbHVlXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5pbnB1dFRleHQgPSBlbGVtW3RoaXMuX29wdGlvblRleHRdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8g5aSa6YCJ77yM6Iul5pyJ5Yid5aeL5YC85YiZ6YGN5Y6G5pWw57uEXG4gIGZvck1vcmVTdGFydCh2YWx1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJywnKTtcblxuICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICB0aGlzLl9zZWxlY3RMaXN0LmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGlmIChlbGVtW3RoaXMuX29wdGlvblZhbHVlXSA9PT0gaXRlbSkge1xuICAgICAgICAgIC8vIGlucHV0VGV4dOS4uui+k+WFpeahhuS4reWxleekuueahOWGheWuuVxuICAgICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLl9vcHRpb25UZXh0O1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fb3B0aW9uVmFsdWU7XG4gICAgICAgICAgdGhpcy5pbnB1dFRleHQucHVzaCh7XG4gICAgICAgICAgICB0ZXh0OiBlbGVtW3RoaXMuX29wdGlvblRleHRdLFxuICAgICAgICAgICAgdmFsdWU6IGVsZW1bdGhpcy5fb3B0aW9uVmFsdWVdXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyB0aGlzLl9jaG9vc2VNb3JlQXJyYXnkuLrkvKDlh7rljrvnmoTmlbDmja5cbiAgICAgICAgICB0aGlzLl9jaG9vc2VNb3JlQXJyYXkucHVzaChlbGVtW3RoaXMuX29wdGlvblZhbHVlXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIOmAieWHoOmhuVxuICBmb3JOdW1TdGFydCh2YWx1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJywnKTtcbiAgICB2YWx1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgdGhpcy5fc2VsZWN0TGlzdC5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBpZiAoZWxlbVt0aGlzLl9vcHRpb25WYWx1ZV0gPT09IGl0ZW0pIHtcbiAgICAgICAgICB0aGlzLmlucHV0VGV4dCsrO1xuICAgICAgICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheS5wdXNoKGVsZW1bdGhpcy5fb3B0aW9uVmFsdWVdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8g5Y2V6YCJ5p+Q5LiA5YWD57Sg54K55Ye7XG4gIGl0ZW0oZSwgaXRlbSkge1xuICAgIC8vIOmYu+atouS6i+S7tuWGkuazoVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAvLyDliKTmlq1zaG935piv5ZCm5Li6dHJ1ZVxuICAgIGlmICghdGhpcy5zaG93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIOWIpOaWreivpemhueaYr+WQpuWPr+eCueWHu1xuICAgIGlmIChpdGVtW3RoaXMuX2pkYkl0ZW1EaXNhYmxlZF0gPT09IHRoaXMuX2pkYlN1cmVEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXRUZXh0ID0gaXRlbVt0aGlzLl9vcHRpb25UZXh0XTtcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuaW5wdXREb20ubmF0aXZlRWxlbWVudCwgJ2pkYi1wbGctc2VsZWN0LWFjdGl2ZScsIHRoaXMuc2hvdyk7XG5cbiAgICB0aGlzLm5nTW9kZWxWYWx1ZSA9IGl0ZW1bdGhpcy5fb3B0aW9uVmFsdWVdO1xuICAgIHRoaXMub25DaGFuZ2UoaXRlbVt0aGlzLl9vcHRpb25WYWx1ZV0pO1xuICB9XG5cbiAgLy8g5aSa6YCJ5YWD57Sg54K55Ye7XG4gIGNob29zZU1vcmUoZSwgaXRlbSkge1xuICAgIGxldCBmbGFnID0gZmFsc2U7XG4gICAgLy8g6Zi75q2i5LqL5Lu25YaS5rOhXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIC8vIOWIpOaWrXNob3fmmK/lkKbkuLp0cnVlXG4gICAgaWYgKCF0aGlzLnNob3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDliKTmlq3or6XpobnmmK/lkKblj6/ngrnlh7tcbiAgICBpZiAoaXRlbVt0aGlzLl9qZGJJdGVtRGlzYWJsZWRdID09PSB0aGlzLl9qZGJTdXJlRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDliKTmlq3mmK/lkKblrZjlnKhcbiAgICB0aGlzLmlucHV0VGV4dC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnRbdGhpcy5fb3B0aW9uVmFsdWVdID09PSBpdGVtW3RoaXMuX29wdGlvblZhbHVlXSkge1xuICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIHRoaXMuZGVsZXRlTW9yZUl0ZW0oZSwgaXRlbSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaW5wdXRUZXh05Li66L6T5YWl5qGG5Lit5bGV56S655qE5YaF5a65XG4gICAgY29uc3QgdGV4dCA9IHRoaXMuX29wdGlvblRleHQ7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9vcHRpb25WYWx1ZTtcbiAgICB0aGlzLmlucHV0VGV4dC5wdXNoKHtcbiAgICAgIHRleHQ6IGl0ZW1bdGhpcy5fb3B0aW9uVGV4dF0sXG4gICAgICB2YWx1ZTogaXRlbVt0aGlzLl9vcHRpb25WYWx1ZV1cbiAgICB9KTtcblxuICAgIC8vIHRoaXMuX2Nob29zZU1vcmVBcnJheeS4uuS8oOWHuuWOu+eahOaVsOaNrlxuICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheS5wdXNoKGl0ZW1bdGhpcy5fb3B0aW9uVmFsdWVdKTtcbiAgICB0aGlzLm5nTW9kZWxWYWx1ZSA9IHRoaXMuX2Nob29zZU1vcmVBcnJheS50b1N0cmluZygpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5fY2hvb3NlTW9yZUFycmF5KTtcbiAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIC8vIOmAieS4reWkmuWwkemhuWxp54K55Ye7XG4gIG51bUNsaWNrKGUsIGl0ZW0pIHtcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xuICAgIC8vIOmYu+atouS6i+S7tuWGkuazoVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAvLyDliKTmlq1zaG935piv5ZCm5Li6dHJ1ZVxuICAgIGlmICghdGhpcy5zaG93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g5Yik5pat6K+l6aG55piv5ZCm5Y+v54K55Ye7XG4gICAgaWYgKGl0ZW1bdGhpcy5famRiSXRlbURpc2FibGVkXSA9PT0gdGhpcy5famRiU3VyZURpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g5Yik5pat5piv5ZCm54K55Ye76L+HXG4gICAgdGhpcy5fY2hvb3NlTW9yZUFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gaXRlbVt0aGlzLl9vcHRpb25WYWx1ZV0pIHtcbiAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIHRoaXMuaW5wdXRUZXh0LS07XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dFRleHQrKztcbiAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgIHRoaXMuX2Nob29zZU1vcmVBcnJheS5wdXNoKGl0ZW1bdGhpcy5fb3B0aW9uVmFsdWVdKTtcbiAgICB0aGlzLm5nTW9kZWxWYWx1ZSA9IHRoaXMuX2Nob29zZU1vcmVBcnJheS50b1N0cmluZygpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5fY2hvb3NlTW9yZUFycmF5KTtcbiAgfVxuXG4gIC8vIOWIpOaWreafkOS4gOmhueaYr+WQpuWtmOWcqOS6jmlucHV0VGV4dOS4rVxuICBtb3JlSW5kZXgoaXRlbSkge1xuICAgIGxldCBmbGFnID0gZmFsc2U7XG4gICAgdGhpcy5fY2hvb3NlTW9yZUFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gaXRlbVt0aGlzLl9vcHRpb25WYWx1ZV0pIHtcbiAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmxhZztcbiAgfVxuXG4gIC8vIOWIoOmZpOafkOS4gOmhuVxuICBkZWxldGVNb3JlSXRlbShlLCBpdGVtKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5famRiRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0VGV4dC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnRbdGhpcy5fb3B0aW9uVmFsdWVdID09PSBpdGVtW3RoaXMuX29wdGlvblZhbHVlXSkge1xuICAgICAgICB0aGlzLmlucHV0VGV4dC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jaG9vc2VNb3JlQXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50ID09PSBpdGVtW3RoaXMuX29wdGlvblZhbHVlXSkge1xuICAgICAgICB0aGlzLl9jaG9vc2VNb3JlQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubmdNb2RlbFZhbHVlID0gdGhpcy5fY2hvb3NlTW9yZUFycmF5LnRvU3RyaW5nKCk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLl9jaG9vc2VNb3JlQXJyYXkpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIC8vIOi9rOaNouS4umJvb2xlYW4s5Y2z5a6e546w5pyJ6L+Z5Liq5a2X5q615bCx6K6k5Li65Li6dHJ1ZSzmsqHmnInljbPkuLpmYWxzZVxuICB0b0Jvb2xlYW4odmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICcnIHx8ICh2YWx1ZSAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gIH1cblxuICAvLyDorqHnrpfmn5DlhYPntKDnmoRvZmZldFRvcFxuICBnZXRUb3AoZSkge1xuICAgIGxldCBvZmZzZXQgPSBlLm9mZnNldFRvcDtcbiAgICBpZiAoZS5vZmZzZXRQYXJlbnQgIT0gbnVsbCkge1xuICAgICAgLy/op6PmnpB0cmFuc2xhdGVZXG4gICAgICBpZiAoZS5zdHlsZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgbGV0IHJldCA9IHRoaXMucGFyc2VUcmFuc2xhdGVZKGUuc3R5bGUudHJhbnNmb3JtKTtcbiAgICAgICAgb2Zmc2V0ICs9IHJldC5pc1BlcmNlbnQgPyBlLmNsaWVudEhlaWdodCAqIHJldC50cmFuc2xhdGVZIC8gMTAwIDogcmV0LnRyYW5zbGF0ZVk7XG4gICAgICB9XG4gICAgICBvZmZzZXQgKz0gdGhpcy5nZXRUb3AoZS5vZmZzZXRQYXJlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgLy8g6K6h566X5p+Q5YWD57Sg55qEc2Nyb2xsVG9wXG4gIGdldFNjcm9sbFRvcChlKSB7XG4gICAgbGV0IG9mZnNldCA9IGUuc2Nyb2xsVG9wO1xuICAgIGlmIChlLnBhcmVudEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgb2Zmc2V0ICs9IHRoaXMuZ2V0U2Nyb2xsVG9wKGUucGFyZW50RWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICAvL+ato+WImeino+aekHRyYW5zbGF0ZVlcbiAgcGFyc2VUcmFuc2xhdGVZKHZhbCkge1xuICAgIGxldCByZWcgPSAvXFwoKFteKCldKylcXCkvZztcbiAgICBsZXQgdHJhbnNsYXRlID0gcmVnLmV4ZWModmFsKVsxXTtcbiAgICBsZXQgdHJhbnNsYXRBcnIgPSB0cmFuc2xhdGUuc3BsaXQoJywnKTtcbiAgICBsZXQgdHJhbnNsYXRlWTtcbiAgICBsZXQgaXNQZXJjZW50O1xuICAgIC8v5aaC5p6c5LiN5YyF5ZCrdHJhbnNsYXRlXG4gICAgaWYgKHZhbC5pbmRleE9mKCd0cmFuc2xhdGUnKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzUGVyY2VudDogZmFsc2UsXG4gICAgICAgIHRyYW5zbGF0ZVk6IDBcbiAgICAgIH1cbiAgICB9XG4gICAgLy/liKTmlq3mmK90cmFuc2xhdGXov5jmmK90cmFuc2xhdGVZXG4gICAgaWYgKHRyYW5zbGF0QXJyLmxlbmd0aCA9PT0gMikge1xuICAgICAgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZS5zcGxpdCgnLCcpWzFdO1xuICAgIH0gZWxzZSBpZiAodHJhbnNsYXRBcnIubGVuZ3RoID09PSAxICYmIHZhbC5pbmRleE9mKCd0cmFuc2xhdGVZJykgIT09IC0xKSB7XG4gICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlO1xuICAgIH1cbiAgICAvL+WIpOaWreaYr+eZvuWIhuavlOi/mOaYr3B4XG4gICAgaWYgKHRyYW5zbGF0ZVkuaW5kZXhPZigncHgnKSAhPT0gLTEpIHtcbiAgICAgIC8v5oiq5Y+WcHhcbiAgICAgIGlzUGVyY2VudCA9IGZhbHNlO1xuICAgICAgdHJhbnNsYXRlWSA9IE51bWJlcih0cmFuc2xhdGVZLnNsaWNlKDAsIC0yKSk7XG4gICAgfSBlbHNlIGlmICh0cmFuc2xhdGVZLmluZGV4T2YoJyUnKSAhPT0gLTEpIHtcbiAgICAgIGlzUGVyY2VudCA9IHRydWU7XG4gICAgICB0cmFuc2xhdGVZID0gTnVtYmVyKHRyYW5zbGF0ZVkuc2xpY2UoMCwgLTEpKTtcbiAgICB9XG4gICAgLy/ov5Tlm57nmb7liIbmr5TmiJbmma7pgJpudW1iZXLlgLxcbiAgICByZXR1cm4ge1xuICAgICAgaXNQZXJjZW50LFxuICAgICAgdHJhbnNsYXRlWVxuICAgIH07XG4gIH1cbn1cbiJdfQ==