webpackJsonp(["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./core/components/jdb-plg-button/jdb-plg-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JdbPlgButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

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
        get: function () {
            return this.size;
        },
        set: function (value) {
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
        get: function () {
            return this.type;
        },
        set: function (value) {
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
        get: function () {
            return this.loading;
        },
        set: function (value) {
            value = value === '' || (value && value !== 'false');
            this.loading = value;
            this._setClassMap(this.loading);
        },
        enumerable: true,
        configurable: true
    });
    JdbPlgButtonComponent.prototype._setClassMap = function (loading) {
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
    JdbPlgButtonComponent.prototype.ngOnInit = function () {
    };
    return JdbPlgButtonComponent;
}());



/***/ }),

/***/ "./core/components/jdb-plg-dialog/jdb-plg-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JdbPlgDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

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
        this.MvisibileChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        this.MOnOk = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        this.MOnCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
    }
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mvisible", {
        get: function () {
            return this._visible;
        },
        // 弹框显隐
        set: function (value) {
            var visible = this.toBoolean(value);
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
        get: function () {
            return this._footerHide;
        },
        // 隐藏footer
        set: function (value) {
            var visible = this.toBoolean(value);
            if (this._visible === visible) {
                return;
            }
            this._footerHide = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mtitle", {
        // 标题
        set: function (value) {
            if (value instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* TemplateRef */]) {
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
        set: function (value) {
            if (value instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* TemplateRef */]) {
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
        set: function (value) {
            if (value instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* TemplateRef */]) {
                this._footerTpl = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mwidth", {
        // 自定义宽度
        set: function (value) {
            this._width = typeof value === 'number' ? value + 'px' : value;
        },
        enumerable: true,
        configurable: true
    });
    // 定位modal位置和样式
    JdbPlgDialogComponent.prototype.setStyle = function () {
        var el = this.contentEl.nativeElement;
        this._bodyStyleMap = __assign({ width: this._width });
    };
    JdbPlgDialogComponent.prototype.onEsc = function (e) {
        this.clickCancel(e);
    };
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mclass", {
        // 自定义样式
        set: function (value) {
            this._customClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "MOkText", {
        set: function (value) {
            this._okText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "McancelText", {
        set: function (value) {
            this._cancelText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "MRogerText", {
        set: function (value) {
            this._isConfirm = true;
            this._RogerText = value;
        },
        enumerable: true,
        configurable: true
    });
    JdbPlgDialogComponent.prototype.ngOnInit = function () {
        this.setStyle();
    };
    JdbPlgDialogComponent.prototype.createDynamicComponent = function (component) {
        var factory = this.resolver.resolveComponentFactory(this._content);
        this.bodyEl.createComponent(factory);
    };
    JdbPlgDialogComponent.prototype.ngAfterViewInit = function () {
    };
    JdbPlgDialogComponent.prototype.ngOnChanges = function (changes) {
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
    JdbPlgDialogComponent.prototype.clickCancel = function (e) {
        this._visible = false;
        this._state = 'hideM';
        this.MOnCancel.emit(e);
    };
    JdbPlgDialogComponent.prototype.clickOk = function (e) {
        if (this.MOnOk) {
            this.MOnOk.emit(e);
        }
        else {
            this._visible = false;
            this._state = 'hideM';
        }
    };
    JdbPlgDialogComponent.prototype.closeModal = function (e) {
        if (e.target.getAttribute('role') === 'dialog') {
            this.clickCancel(e);
            this._state = 'hideM';
        }
    };
    JdbPlgDialogComponent.prototype.toBoolean = function (value) {
        return value === '' || (value && value !== false);
    };
    return JdbPlgDialogComponent;
}());



/***/ }),

/***/ "./core/components/jdb-plg-input/jdb-plg-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JdbPlgInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");


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
        this.jdbBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        this.jdbFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
    }
    JdbPlgInputComponent.prototype.ngOnInit = function () {
        // this._inputWrapClass =[`input-text-wrap-${this._size}`];
        if (this._prefixContent) {
            this._inputWrapClass.push('prefix');
        }
    };
    JdbPlgInputComponent.prototype.compositionStart = function (e) {
        this._composing = true;
    };
    JdbPlgInputComponent.prototype.compositionEnd = function (e) {
        this._composing = false;
        this.onChange(this._value);
    };
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbType", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbPlaceHolder", {
        get: function () {
            return this._placeHolder;
        },
        set: function (placeHolder) {
            this._placeHolder = placeHolder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbSize", {
        get: function () {
            return this._size;
        },
        set: function (size) {
            this._size = { large: 'lg', small: 'sm' }[size];
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbDisabled", {
        get: function () {
            return this._disabled;
        },
        set: function (disabled) {
            this._disabled = this.toBoolean(disabled);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbReadonly", {
        get: function () {
            return this._readonly;
        },
        set: function (readonly) {
            this._readonly = this.toBoolean(readonly);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbValue", {
        get: function () {
            if (this._value == '0') {
                return '0';
            }
            return this._value || '';
        },
        set: function (value) {
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
        get: function () {
            return this._error;
        },
        set: function (value) {
            this._error = this.toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbClear", {
        get: function () {
            return this._clear;
        },
        set: function (value) {
            this._clear = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbMaxLength", {
        get: function () {
            return this._maxlength;
        },
        set: function (value) {
            this._maxlength = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbPromptData", {
        get: function () {
            return this._autoPromptData;
        },
        set: function (value) {
            this._autoPromptData = value;
        },
        enumerable: true,
        configurable: true
    });
    JdbPlgInputComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    JdbPlgInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    JdbPlgInputComponent.prototype.registerOnTouched = function (fn) {
    };
    JdbPlgInputComponent.prototype._emitBlur = function ($event) {
        this.jdbBlur.emit($event);
    };
    JdbPlgInputComponent.prototype._emitFocus = function ($event) {
        this.jdbFocus.emit($event);
    };
    JdbPlgInputComponent.prototype.textareaOnChange = function ($event) {
    };
    JdbPlgInputComponent.prototype.setClassMap = function () {
        var _a;
        this._classMap = (_a = {},
            _a["input-" + this._type + "-" + this._size] = true,
            _a['input-disabled'] = this._disabled,
            _a['input-error'] = this._error,
            _a);
    };
    JdbPlgInputComponent.prototype.clearTxt = function () {
        this._value = '';
        this.onChange('');
    };
    JdbPlgInputComponent.prototype.toBoolean = function (value) {
        return value === '' || (value && value !== 'false');
    };
    return JdbPlgInputComponent;
}());



/***/ }),

/***/ "./core/components/jdb-plg-pagination/jdb-plg-pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JdbPlgPaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var JdbPlgPaginationComponent = /** @class */ (function () {
    function JdbPlgPaginationComponent(el, renderer2) {
        this.el = el;
        this.renderer2 = renderer2;
        this._current = 1; // 当前页码默认为1
        this._pageSize = 10; // 默认条数
        this._firstIndex = 1; // 首页默认为1
        this._lastIndex = Infinity; // 尾页默认为无穷
        this._showTotal = false; // 是否展示总数，默认不展示
        this._showPageSize = false; // 是否展示页码切换，默认不展示
        this._showQuickJump = false; // 是否展示快速跳转，默认不展示
        this.pages = []; // 页码数组
        // _options = [10, 20, 30, 40, 50]; // select默认数组
        // select默认数组
        this._options = [
            { value: 10, text: '10条/页' },
            { value: 20, text: '20条/页' },
            { value: 30, text: '30条/页' },
            { value: 40, text: '40条/页' },
            { value: 50, text: '50条/页' }
        ];
        this._jdbSimple = false; // 是否为简单分页，默认为基本分页
        this.jdbPageSizeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */](); // 条数切换  命名与属性相关
        this.jdbPageIndexChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */](); // 页码切换
    }
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbShowTotal", {
        get: function () {
            return this._showTotal;
        },
        // 是否展示总数标签
        set: function (value) {
            this._showTotal = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbTotal", {
        get: function () {
            return this._total;
        },
        // 数据总数
        set: function (value) {
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
        get: function () {
            return this._current;
        },
        // jdbPageIndex与_current关联，表示页码
        set: function (value) {
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
        get: function () {
            return this._showPageSize;
        },
        // 是否展示切换条数select
        set: function (value) {
            this._showPageSize = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbPageSize", {
        get: function () {
            return this._pageSize;
        },
        // 默认条数
        set: function (value) {
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
        get: function () {
            return this._options;
        },
        // 默认下拉选择条数数组
        set: function (value) {
            // 若传入值和当前total一致，则不触发操作
            if (value === this._options) {
                return;
            }
            // 判断是否为数组
            if (Object.prototype.toString.call(value) === '[object Array]') {
                var optionsArr_1 = [];
                value.forEach(function (elem) {
                    var obj = {
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
        get: function () {
            return this._showQuickJump;
        },
        // 是否展示快速跳转页面
        set: function (value) {
            this._showQuickJump = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbSimple", {
        get: function () {
            return this.jdbSimple;
        },
        // 分页样式
        set: function (value) {
            this._jdbSimple = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    // 创建页码
    JdbPlgPaginationComponent.prototype.setPageNo = function () {
        // 向上取整
        this._lastIndex = Math.ceil(this._total / this._pageSize);
        // 如果当前页码大于尾页，则等于尾页
        // if (this._current > this._lastIndex) {
        //   this.jdbPageIndex = this._lastIndex;
        //   this.jdbPageIndexChange.emit(this.jdbPageIndex);
        // }
        var tmpPages = [];
        if (this._lastIndex <= 9) {
            // 若总页数不超过9，则全部展示在页面上
            for (var i = 2; i <= this._lastIndex - 1; i++) {
                tmpPages.push({
                    index: i
                });
            }
        }
        else {
            var current = +this._current;
            var left = Math.max(2, current - 2);
            var right = Math.min(current + 2, this._lastIndex - 1);
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
            for (var i = left; i <= right; i++) {
                tmpPages.push({ index: i });
            }
        }
        this.pages = tmpPages;
    };
    // status为true表示页码切换，num表示页码，false表示条数切换，num表示条数
    JdbPlgPaginationComponent.prototype.dataChange = function (status, num) {
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
    JdbPlgPaginationComponent.prototype.quickJump = function () {
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
    JdbPlgPaginationComponent.prototype.jumpBefore = function (pageSize) {
        this.dataChange(true, this._current - Math.round(pageSize / 2));
    };
    // 点击右箭头
    JdbPlgPaginationComponent.prototype.jumpAfter = function (pageSize) {
        this.dataChange(true, this._current + Math.round(pageSize / 2));
    };
    // 转换为boolean,即实现有这个字段就认为为true,没有即为false
    JdbPlgPaginationComponent.prototype.toBoolean = function (value) {
        return value === '' || (value && value !== 'false');
    };
    // 校验是否为纯数字
    JdbPlgPaginationComponent.prototype.isNumber = function (obj) {
        var reg = /^[0-9]*$/;
        return reg.test(obj);
    };
    return JdbPlgPaginationComponent;
}());



/***/ }),

/***/ "./core/components/jdb-plg-select/jdb-plg-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JdbPlgSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/*
  下拉框功能：
  种类：单选，多选，选几项
  样式：高度 middle small large
*/

var JdbPlgSelectComponent = /** @class */ (function () {
    function JdbPlgSelectComponent(renderer2, renderer) {
        this.renderer2 = renderer2;
        this.renderer = renderer;
        this._size = 'middle';
        this._optionText = 'text'; // 默认值
        this._optionValue = 'value'; // 默认值
        this.isShowClear = false; // 是否展示清空x
        this._jdbClear = false;
        this._jdbDisabled = false; // 默认未禁用
        this._jdbMode = 'chooseOne';
        this._placeHolder = '请选择';
        this._chooseMoreArray = []; // 多选选中元素数组
        this._classMap = {};
        this.savaHeight = true;
        this.spaceFlex = true; // 是否有剩余空间，默认有
        this._showImgBox = false; // 下拉框是否带图片
        this._jdbItemDisabled = 'disabled'; // 默认为disabled
        this._jdbSureDisabled = 2; // 为1是启用 2是禁用
        this._jdbNoDisabled = 1; // 为2表示不禁用
        // 自定义类名
        this.jdbClassName = '';
        this.show = false;
        this.ngModelValue = '';
        this.onChange = function () { return null; };
    }
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbItemDisabled", {
        get: function () {
            return this._jdbItemDisabled;
        },
        // 选项中某项禁用字段
        set: function (value) {
            this._jdbItemDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbSureDisabled", {
        get: function () {
            return this._jdbSureDisabled;
        },
        // 选项中某项确认禁用
        set: function (value) {
            this._jdbSureDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbPlaceHolder", {
        get: function () {
            return this._placeHolder;
        },
        // // 选项中某项不禁用
        // @Input()
        // set jdbNoDisabled(value) {
        //   this._jdbNoDisabled = value;
        // }
        // get jdbNoDisabled(): any {
        //   return this._jdbNoDisabled;
        // }
        // 选项中某项确认禁用
        set: function (value) {
            this._placeHolder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbClear", {
        get: function () {
            return this._jdbClear;
        },
        // 是否需要显示清空
        set: function (value) {
            this._jdbClear = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbSelectList", {
        get: function () {
            return this._selectList;
        },
        // 下拉框数组，必写
        set: function (value) {
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
        get: function () {
            return this._size;
        },
        // 下拉框尺寸，默认为高度30px；small为24px,large为40px;
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbWidth", {
        get: function () {
            return this._width;
        },
        // 自定义宽度
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbOptionText", {
        get: function () {
            return this._optionText;
        },
        // 展示在页面内容字段名称
        set: function (value) {
            this._optionText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbOptionValue", {
        get: function () {
            return this._optionValue;
        },
        // 返回给serve对应字段名称
        set: function (value) {
            this._optionValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbDisabled", {
        get: function () {
            return this._jdbDisabled;
        },
        // 下拉框禁用
        set: function (value) {
            this._jdbDisabled = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbMode", {
        get: function () {
            return this._jdbMode;
        },
        // select模式，默认为单选，chooseMore多选
        set: function (value) {
            this._jdbMode = value;
        },
        enumerable: true,
        configurable: true
    });
    JdbPlgSelectComponent.prototype.ngOnInit = function () {
    };
    // tslint:disable-next-line:use-life-cycle-interface
    JdbPlgSelectComponent.prototype.ngAfterViewInit = function () {
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
    JdbPlgSelectComponent.prototype.ngOnChanges = function () {
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
    JdbPlgSelectComponent.prototype.setClassMap = function () {
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
    JdbPlgSelectComponent.prototype.clearInputText = function (e) {
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
    JdbPlgSelectComponent.prototype.dialogShow = function (e) {
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
    JdbPlgSelectComponent.prototype.optionPosition = function (listHeight) {
        var offetTop = this.getTop(this.inputDom.nativeElement); // 元素offetTop
        var scrollTop = this.getScrollTop(this.inputDom.nativeElement.parentElement);
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight; // 屏幕高度
        var elemHeight = this.inputDom.nativeElement.clientHeight; // 元素高度
        var paddingHeight;
        if (this.jdbSize === 'small') {
            paddingHeight = 2;
        }
        else if (this.jdbSize === 'large') {
            paddingHeight = 9;
        }
        else if (this.jdbSize === 'middle') {
            paddingHeight = 5;
        }
        var flexHeight = clientHeight - offetTop - elemHeight - paddingHeight + scrollTop; // 剩余高度
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
    JdbPlgSelectComponent.prototype.writeValue = function (value) {
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
    JdbPlgSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    JdbPlgSelectComponent.prototype.registerOnTouched = function (fn) {
    };
    JdbPlgSelectComponent.prototype.setDisabledState = function (isDisabled) {
    };
    // 单选，若有初始选项，则遍历数组
    JdbPlgSelectComponent.prototype.forOneStart = function (value) {
        var _this = this;
        this._selectList.forEach(function (elem) {
            if (elem[_this._optionValue] === value) {
                _this.inputText = elem[_this._optionText];
            }
        });
    };
    // 多选，若有初始值则遍历数组
    JdbPlgSelectComponent.prototype.forMoreStart = function (value) {
        var _this = this;
        value = value.split(',');
        value.forEach(function (item) {
            _this._selectList.forEach(function (elem) {
                if (elem[_this._optionValue] === item) {
                    // inputText为输入框中展示的内容
                    var text = _this._optionText;
                    var value_1 = _this._optionValue;
                    _this.inputText.push({
                        text: elem[_this._optionText],
                        value: elem[_this._optionValue]
                    });
                    // this._chooseMoreArray为传出去的数据
                    _this._chooseMoreArray.push(elem[_this._optionValue]);
                    return;
                }
            });
        });
    };
    // 选几项
    JdbPlgSelectComponent.prototype.forNumStart = function (value) {
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
    JdbPlgSelectComponent.prototype.item = function (e, item) {
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
    JdbPlgSelectComponent.prototype.chooseMore = function (e, item) {
        var _this = this;
        var flag = false;
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
        var text = this._optionText;
        var value = this._optionValue;
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
    JdbPlgSelectComponent.prototype.numClick = function (e, item) {
        var _this = this;
        var flag = false;
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
    JdbPlgSelectComponent.prototype.moreIndex = function (item) {
        var _this = this;
        var flag = false;
        this._chooseMoreArray.forEach(function (element, index) {
            if (element === item[_this._optionValue]) {
                flag = true;
                return;
            }
        });
        return flag;
    };
    // 删除某一项
    JdbPlgSelectComponent.prototype.deleteMoreItem = function (e, item) {
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
    JdbPlgSelectComponent.prototype.toBoolean = function (value) {
        return value === '' || (value && value !== 'false');
    };
    // 计算某元素的offetTop
    JdbPlgSelectComponent.prototype.getTop = function (e) {
        var offset = e.offsetTop;
        if (e.offsetParent != null) {
            //解析translateY
            if (e.style.transform) {
                var ret = this.parseTranslateY(e.style.transform);
                offset += ret.isPercent ? e.clientHeight * ret.translateY / 100 : ret.translateY;
            }
            offset += this.getTop(e.offsetParent);
        }
        return offset;
    };
    // 计算某元素的scrollTop
    JdbPlgSelectComponent.prototype.getScrollTop = function (e) {
        var offset = e.scrollTop;
        if (e.parentElement != null) {
            offset += this.getScrollTop(e.parentElement);
        }
        return offset;
    };
    //正则解析translateY
    JdbPlgSelectComponent.prototype.parseTranslateY = function (val) {
        var reg = /\(([^()]+)\)/g;
        var translate = reg.exec(val)[1];
        var translatArr = translate.split(',');
        var translateY;
        var isPercent;
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
    return JdbPlgSelectComponent;
}());



/***/ }),

/***/ "./core/components/jdb-plg-tab/jdb-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JdbTabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var JdbTabComponent = /** @class */ (function () {
    function JdbTabComponent(componentFactoryResolver, _injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this._injector = _injector;
        this.onTabChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        this.onTabRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        this.onTopComMsg = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        this.items = [];
        this.tabComs = [];
        this.curTabIndex = 0;
        this.tabIdComMap = {};
    }
    JdbTabComponent.prototype.ngOnInit = function () {
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
    JdbTabComponent.prototype.addItem = function (ChildComponent, attrs, title, comId, isCloseFlag) {
        var _this = this;
        if (comId === void 0) { comId = ""; }
        if (isCloseFlag === void 0) { isCloseFlag = false; }
        if (comId && this.tabIdComMap[comId]) {
            var com = this.tabIdComMap[comId];
            this.tabChange(com.index);
            return;
        }
        var childComponent = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
        var comInstance = this.target.createComponent(childComponent);
        var keys = Object.keys(attrs);
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
        this.tabSubs = comInstance.instance['onTopComMsg'] = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
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
    JdbTabComponent.prototype.setOneComHide = function (tabIndex) {
        this.tabComs[tabIndex].location.nativeElement.style.display = "none";
    };
    JdbTabComponent.prototype.setOneComShow = function (tabIndex) {
        this.tabComs[tabIndex].location.nativeElement.style.display = "block";
    };
    JdbTabComponent.prototype.tabChange = function (index) {
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
    JdbTabComponent.prototype.setOneTabShow = function (index) {
        this.tabChange(index);
    };
    JdbTabComponent.prototype.removeTab = function (index) {
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
        var tabIdComMap = this.tabIdComMap;
        for (var key in tabIdComMap) {
            if (tabIdComMap[key].index == index) {
                delete tabIdComMap[key];
                break;
            }
        }
    };
    JdbTabComponent.prototype.removeTabById = function (id) {
        var tabIdComMap = this.tabIdComMap;
        for (var key in tabIdComMap) {
            if (key == id) {
                this.removeTab(tabIdComMap[key]['index']);
                break;
            }
        }
    };
    JdbTabComponent.prototype.ngOnDestroy = function () {
        if (this.target) {
            // this.target.destroy();
            this.target.clear();
        }
    };
    return JdbTabComponent;
}());



/***/ }),

/***/ "./core/components/jdb-plg-table-error/jdb-plg-table-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JdbPlgTableErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var JdbPlgTableErrorComponent = /** @class */ (function () {
    function JdbPlgTableErrorComponent() {
        /*
          功能：实现表格报错文案水平居中
        */
        this.tableErrorText = '暂无数据';
    }
    JdbPlgTableErrorComponent.prototype.ngOnInit = function () {
    };
    return JdbPlgTableErrorComponent;
}());



/***/ }),

/***/ "./core/components/jdb-plg-toast/jdb-plg-toast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JdbPlgToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var JdbPlgToastComponent = /** @class */ (function () {
    function JdbPlgToastComponent() {
        this.msg = "";
    }
    JdbPlgToastComponent.prototype.ngOnInit = function () {
    };
    return JdbPlgToastComponent;
}());



/***/ }),

/***/ "./core/components/picture-viewer/picture-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var PictureViewerComponent = /** @class */ (function () {
    function PictureViewerComponent(renderer) {
        this.renderer = renderer;
        this.pictureList = [];
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        // 设置容器的默认宽高，可适配 可配置属性
        this.maxWidth = 800;
        this.maxHeight = 600;
        this.jdbShowType = 1; // 是浮层还是嵌入组件，默认为1，作为浮层，若为2，则表示是嵌入组件
        this._jdbMaster = true; // 是否需要master遮罩，默认需要遮罩层
        this._jdbClear = true; // 是否需要按钮叉，默认需要
        this.dragStatus = false;
        this.current = 0; // 展示图片下标，默认为0
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
        this.elem = this.imgBox.nativeElement.children; // 所有的li
    };
    PictureViewerComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.pictureList) {
            this.pictureList.forEach(function (element, index) {
                _this.resetPosition(index);
            });
        }
    };
    // 设置元素样式
    PictureViewerComponent.prototype.ngAfterViewInit = function () {
        var imgContent = this.imgContent.nativeElement;
        this.renderer.setElementStyle(imgContent, 'height', this.maxHeight + 'px');
        this.renderer.setElementStyle(imgContent, 'width', this.maxWidth + 'px');
        if (this.jdbShowType == 1) {
            this.renderer.setElementStyle(imgContent, 'margin-left', -this.maxWidth / 2 + 'px');
            this.renderer.setElementStyle(imgContent, 'margin-top', -this.maxHeight / 2 + 'px');
        }
    };
    // 重置图片位置
    PictureViewerComponent.prototype.resetPosition = function (index) {
        var _this = this;
        var image = new Image();
        image.onload = function () {
            // 获取当前加载图片宽高
            var w = image.width;
            var h = image.height;
            var hRatio;
            var wRatio;
            // 设置默认比例以及容器宽高
            var imgRate = w / h; // 图片宽高比
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
            _this.renderer.setElementStyle(_this.elem[index].children[0], 'height', h + 'px');
            _this.renderer.setElementStyle(_this.elem[index].children[0], 'width', w + 'px');
            if (w === _this.maxWidth && h === _this.maxHeight) {
                // 设置图片位置使其垂直水平居中
                _this.renderer.setElementStyle(_this.elem[index].children[0], 'top', '0px');
                _this.renderer.setElementStyle(_this.elem[index].children[0], 'left', '0px');
            }
            else {
                // 设置图片位置使其垂直水平居中
                _this.renderer.setElementStyle(_this.elem[index].children[0], 'top', (_this.maxHeight - h) / 2 + 'px');
                _this.renderer.setElementStyle(_this.elem[index].children[0], 'left', (_this.maxWidth - w) / 2 + 'px');
            }
        };
        image.src = this.pictureList[index].imgUrl;
    };
    // 切换动画
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
    // 下一张图
    PictureViewerComponent.prototype.Next = function () {
        this.resetImgData();
        this.current = (this.current + 1) % this.pictureList.length;
        this.resetPosition(this.current - 1);
        // 修改状态，使拖动图片回到原来位置
        // this.dragStatus = true;
    };
    // 上一张图
    PictureViewerComponent.prototype.Prev = function () {
        this.resetImgData();
        this.current = this.current - 1 < 0 ? this.pictureList.length - 1 : this.current - 1;
        this.resetPosition(this.current + 1);
        // 修改状态，使拖动图片回到原来位置
        // this.dragStatus = true;
    };
    // 关闭图片查看器 __关闭弹框后再次打开所有拖拽后的位置都会自动归为，因为触发了onChanges方法
    PictureViewerComponent.prototype.closeModel = function () {
        this.resetImgData();
        this.update.emit({ status: false });
    };
    // 放大 50% 100% 200% 400%
    PictureViewerComponent.prototype.scaleBig = function () {
        this.imgOperate.num = this.imgOperate.num * 2;
        if (this.imgOperate.num > 4) {
            this.imgOperate.num = 4;
        }
        var rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    };
    // 缩小
    PictureViewerComponent.prototype.scaleSmall = function () {
        this.imgOperate.num = this.imgOperate.num / 2;
        if (this.imgOperate.num < 1) {
            this.imgOperate.num = 0.5;
        }
        var rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    };
    // 逆时针旋转
    PictureViewerComponent.prototype.routateNi = function () {
        this.imgOperate.degnum++;
        var rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    };
    // 顺时针旋转
    PictureViewerComponent.prototype.routateShun = function () {
        this.imgOperate.degnum--;
        var rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    };
    // 重置图片数据
    PictureViewerComponent.prototype.resetImgData = function () {
        this.imgOperate = {
            num: 1,
            degnum: 0
        };
        var rate = 'scale(1,1) rotate(0deg)';
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transition', 'transform 0.2s linear 0.4s');
        this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
    };
    // 转换为boolean,即实现有这个字段就认为为true,没有即为false
    PictureViewerComponent.prototype.toBoolean = function (value) {
        return value === '' || (value && value !== 'false');
    };
    PictureViewerComponent.prototype.ngOnDestroy = function () {
        this.pictureList = null;
        this.imgBox = null;
        this.imgContent = null;
        this.current = null;
    };
    return PictureViewerComponent;
}());



/***/ }),

/***/ "./core/components/show-picture/show-picture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPictureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var ShowPictureComponent = /** @class */ (function () {
    function ShowPictureComponent() {
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
    }
    ShowPictureComponent.prototype.ngOnInit = function () {
    };
    ShowPictureComponent.prototype.closeModel = function () {
        this.update.emit({ status: false });
    };
    return ShowPictureComponent;
}());



/***/ }),

/***/ "./core/directive/drag.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var DragDirective = /** @class */ (function () {
    function DragDirective(elem, render) {
        this.elem = elem;
        this.render = render;
        this.isDown = false;
        //
    }
    // 点击事件
    DragDirective.prototype.onMousedown = function (event) {
        var wRate = localStorage.getItem('dragWidth');
        var hRate = localStorage.getItem('dragHeight');
        this.isDown = true;
        this.disLeft = this.elem.nativeElement.offsetLeft;
        this.disTop = this.elem.nativeElement.offsetTop;
        this.disX = event.clientX;
        this.disY = event.clientY;
        event.target.style.cursor = 'move';
        // event.preventDefault();
    };
    // 监听移动事件事件
    DragDirective.prototype.onMousemove = function (event) {
        event.preventDefault();
        // 判断该元素是否被点击了。
        if (this.isDown) {
            var newdisX = event.clientX - this.disX;
            var newdisY = event.clientY - this.disY;
            this.elem.nativeElement.style.left = newdisX + this.disLeft + 'px';
            this.elem.nativeElement.style.top = newdisY + this.disTop + 'px';
        }
        return false;
    };
    // 监听document离开事件
    DragDirective.prototype.onMouseup = function () {
        // 只用当元素移动过了，离开函数体才会触发。
        if (this.isDown) {
            this.isDown = false;
            this.disLeft = this.elem.nativeElement.offsetLeft;
            this.disTop = this.elem.nativeElement.offsetTop;
        }
    };
    // 监听元素离开事件
    DragDirective.prototype.onMouseleave = function () {
        this.isDown = false;
    };
    DragDirective.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    };
    return DragDirective;
}());



/***/ }),

/***/ "./core/pipe/amount-reform.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmountReformPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var AmountReformPipe = /** @class */ (function () {
    function AmountReformPipe() {
    }
    AmountReformPipe.prototype.transform = function (val) {
        if (val === 0) {
            return '0.00';
        }
        if (!val) {
            return '';
        }
        return (val / 100).toFixed(2);
    };
    return AmountReformPipe;
}());



/***/ }),

/***/ "./core/pipe/province-reform.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvinceReformPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var ProvinceReformPipe = /** @class */ (function () {
    function ProvinceReformPipe() {
    }
    ProvinceReformPipe.prototype.transform = function (val) {
        if (val.length === 0) {
            return '';
        }
        return val.join('、');
    };
    return ProvinceReformPipe;
}());



/***/ }),

/***/ "./jdb-plg-ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JdbPlgUiModule", function() { return JdbPlgUiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_jdb_plg_tab_jdb_tab_component__ = __webpack_require__("./core/components/jdb-plg-tab/jdb-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_components_show_picture_show_picture_component__ = __webpack_require__("./core/components/show-picture/show-picture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_picture_viewer_picture_viewer_component__ = __webpack_require__("./core/components/picture-viewer/picture-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_directive_drag_directive__ = __webpack_require__("./core/directive/drag.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_components_jdb_plg_pagination_jdb_plg_pagination_component__ = __webpack_require__("./core/components/jdb-plg-pagination/jdb-plg-pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_components_jdb_plg_button_jdb_plg_button_component__ = __webpack_require__("./core/components/jdb-plg-button/jdb-plg-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_components_jdb_plg_dialog_jdb_plg_dialog_component__ = __webpack_require__("./core/components/jdb-plg-dialog/jdb-plg-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_components_jdb_plg_select_jdb_plg_select_component__ = __webpack_require__("./core/components/jdb-plg-select/jdb-plg-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_components_jdb_plg_input_jdb_plg_input_component__ = __webpack_require__("./core/components/jdb-plg-input/jdb-plg-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_components_jdb_plg_table_error_jdb_plg_table_error_component__ = __webpack_require__("./core/components/jdb-plg-table-error/jdb-plg-table-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_pipe_province_reform_pipe__ = __webpack_require__("./core/pipe/province-reform.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_pipe_amount_reform_pipe__ = __webpack_require__("./core/pipe/amount-reform.pipe.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JdbPlgButtonComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__core_components_jdb_plg_button_jdb_plg_button_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JdbPlgDialogComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__core_components_jdb_plg_dialog_jdb_plg_dialog_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JdbPlgInputComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__core_components_jdb_plg_input_jdb_plg_input_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JdbPlgPaginationComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__core_components_jdb_plg_pagination_jdb_plg_pagination_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JdbPlgSelectComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__core_components_jdb_plg_select_jdb_plg_select_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JdbTabComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__core_components_jdb_plg_tab_jdb_tab_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JdbPlgTableErrorComponent", function() { return __WEBPACK_IMPORTED_MODULE_9__core_components_jdb_plg_table_error_jdb_plg_table_error_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_components_jdb_plg_toast_jdb_plg_toast_component__ = __webpack_require__("./core/components/jdb-plg-toast/jdb-plg-toast.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JdbPlgToastComponent", function() { return __WEBPACK_IMPORTED_MODULE_12__core_components_jdb_plg_toast_jdb_plg_toast_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PictureViewerComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__core_components_picture_viewer_picture_viewer_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ShowPictureComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__core_components_show_picture_show_picture_component__["a"]; });












// export * from './core/components/jdb-plg-autocomplete/jdb-plg-autocomplete.component';










var MDL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__core_components_show_picture_show_picture_component__["a" /* ShowPictureComponent */],
    __WEBPACK_IMPORTED_MODULE_2__core_components_picture_viewer_picture_viewer_component__["a" /* PictureViewerComponent */],
    __WEBPACK_IMPORTED_MODULE_3__core_directive_drag_directive__["a" /* DragDirective */],
    __WEBPACK_IMPORTED_MODULE_4__core_components_jdb_plg_pagination_jdb_plg_pagination_component__["a" /* JdbPlgPaginationComponent */],
    __WEBPACK_IMPORTED_MODULE_5__core_components_jdb_plg_button_jdb_plg_button_component__["a" /* JdbPlgButtonComponent */],
    __WEBPACK_IMPORTED_MODULE_6__core_components_jdb_plg_dialog_jdb_plg_dialog_component__["a" /* JdbPlgDialogComponent */],
    __WEBPACK_IMPORTED_MODULE_7__core_components_jdb_plg_select_jdb_plg_select_component__["a" /* JdbPlgSelectComponent */],
    __WEBPACK_IMPORTED_MODULE_8__core_components_jdb_plg_input_jdb_plg_input_component__["a" /* JdbPlgInputComponent */],
    // JdbPlgAutocompleteDirective,
    //JdbPlgAutocompleteComponent,
    __WEBPACK_IMPORTED_MODULE_0__core_components_jdb_plg_tab_jdb_tab_component__["a" /* JdbTabComponent */],
    __WEBPACK_IMPORTED_MODULE_9__core_components_jdb_plg_table_error_jdb_plg_table_error_component__["a" /* JdbPlgTableErrorComponent */],
    __WEBPACK_IMPORTED_MODULE_10__core_pipe_province_reform_pipe__["a" /* ProvinceReformPipe */],
    __WEBPACK_IMPORTED_MODULE_11__core_pipe_amount_reform_pipe__["a" /* AmountReformPipe */]
];
var JdbPlgUiModule = /** @class */ (function () {
    function JdbPlgUiModule() {
    }
    return JdbPlgUiModule;
}());

// TODO 暴露服务方式


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./jdb-plg-ui.module.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map