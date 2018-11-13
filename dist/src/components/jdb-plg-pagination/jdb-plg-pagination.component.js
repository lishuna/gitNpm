/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ElementRef, ViewChild, Renderer2 } from '@angular/core';
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
        this._jdbSelectWidth = '90px';
        this.jdbPageSizeChange = new EventEmitter();
        this.jdbPageIndexChange = new EventEmitter();
    }
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbShowTotal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showTotal;
        },
        // 是否展示总数标签
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showTotal = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbTotal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._total;
        },
        // 数据总数
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
         */
        function () {
            return this._current;
        },
        // jdbPageIndex与_current关联，表示页码
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
         */
        function () {
            return this._showPageSize;
        },
        // 是否展示切换条数select
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showPageSize = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbPageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSize;
        },
        // 默认条数
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
         */
        function () {
            return this._options;
        },
        // 默认下拉选择条数数组
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // 若传入值和当前total一致，则不触发操作
            if (value === this._options) {
                return;
            }
            // 判断是否为数组
            if (Object.prototype.toString.call(value) === '[object Array]') {
                /** @type {?} */
                var optionsArr_1 = [];
                value.forEach(function (elem) {
                    /** @type {?} */
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
        get: /**
         * @return {?}
         */
        function () {
            return this._showQuickJump;
        },
        // 是否展示快速跳转页面
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showQuickJump = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbSimple", {
        get: /**
         * @return {?}
         */
        function () {
            return this.jdbSimple;
        },
        // 分页样式
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbSimple = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbSelectWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jdbSelectWidth;
        },
        // 下拉框宽度设置，防止window系统出现滚动条位置不够
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._jdbSelectWidth = value;
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
        /** @type {?} */
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
            /** @type {?} */
            var current = +this._current;
            /** @type {?} */
            var left = Math.max(2, current - 2);
            /** @type {?} */
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
    // status为true表示页码切换，num表示页码，false表示条数切换，num表示条数  e为$event
    /**
     * @param {?} status
     * @param {?} num
     * @param {?=} e
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.dataChange = /**
     * @param {?} status
     * @param {?} num
     * @param {?=} e
     * @return {?}
     */
    function (status, num, e) {
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
     * @param {?} e
     * @param {?} pageSize
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.jumpBefore = /**
     * @param {?} e
     * @param {?} pageSize
     * @return {?}
     */
    function (e, pageSize) {
        this.dataChange(true, this._current - Math.round(pageSize / 2), e);
    };
    // 点击右箭头
    /**
     * @param {?} e
     * @param {?} pageSize
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.jumpAfter = /**
     * @param {?} e
     * @param {?} pageSize
     * @return {?}
     */
    function (e, pageSize) {
        this.dataChange(true, this._current + Math.round(pageSize / 2), e);
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
        /** @type {?} */
        var reg = /^[0-9]*$/;
        return reg.test(obj);
    };
    JdbPlgPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-pagination',
                    template: "<div class=\"jdb-plg-pagination\">\n    <!-- \u603B\u6761\u6570 -->\n    <span *ngIf=\"_showTotal\" class=\"total-box\">\n      \u5171{{_total}}\u6761\n    </span>\n\n    <div class=\"operate-box\">\n        <!-- \u6761\u6570\u5207\u6362 -->\n        <div class=\"jdb-plg-pagination-options\" *ngIf=\"_showPageSize\">\n            <app-jdb-plg-select (ngModelChange)=\"dataChange(false,$event)\" [jdbSize]=\"'small'\" [jdbWidth]=\"_jdbSelectWidth\" [(ngModel)]=\"_pageSize\" [jdbSelectList]=\"_options\"></app-jdb-plg-select>\n        </div>\n        <!-- \u57FA\u672C\u5206\u9875\u6837\u5F0F -->\n        <ul *ngIf=\"!_jdbSimple\" class=\"base-pagination\">\n            <!-- \u4E0A\u4E00\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-prev\" title=\"\u4E0A\u4E00\u9875\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_current-1,$event)\">\n                <span class=\"jdbIcon icon-pagination-prev\"></span>\n            </li>\n            <!-- \u9996\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-first\" title=\"\u9996\u9875\" [ngClass]=\"{'active':_current===_firstIndex}\" (click)=\"dataChange(true,_firstIndex,$event)\">\n                {{_firstIndex}}\n            </li>\n            <!-- \u7701\u7565\u53F7 -->\n            <li class=\"jdb-plg-pagination-forward\" *ngIf=\"(_lastIndex >9)&&(_current-4>_firstIndex)\" (click)=\"jumpBefore($event,_pageSize)\">\n                <span class=\"icon-pagination-more\"></span>\n                <span class=\"icon-pagination-jump-prev\"></span>\n            </li>\n            <!-- \u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-pager\" *ngFor=\"let page of pages\" [ngClass]=\"{'active':_current===page.index}\" (click)=\"dataChange(true,page.index,$event)\">\n                {{page.index}}\n            </li>\n            <!-- \u7701\u7565\u53F7 -->\n            <li class=\"jdb-plg-pagination-backward\" *ngIf=\"(_lastIndex >9)&&(_current+4<_lastIndex)\" (click)=\"jumpAfter($event,_pageSize)\">\n                <span class=\"icon-pagination-more\"></span>\n                <span class=\"icon-pagination-jump-next\"></span>\n            </li>\n            <!-- \u5C3E\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-last\" *ngIf=\"(_lastIndex>0)&&(_lastIndex!==_firstIndex)\" title=\"\u5C3E\u9875\" [ngClass]=\"{'active':_current===_lastIndex}\" (click)=\"dataChange(true,_lastIndex,$event)\">\n                {{_lastIndex}}\n            </li>\n            <!-- \u4E0B\u4E00\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-next\" title=\"\u4E0B\u4E00\u9875\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_current+1,$event)\">\n                <span class=\"jdbIcon icon-pagination-next\"></span>\n            </li>\n        </ul>\n        <!-- \u7B80\u5355\u5206\u9875\u6837\u5F0F -->\n        <div class=\"simple-pagination\" *ngIf=\"_jdbSimple\">\n            <div class=\"left-box\">\n                <span class=\"icon-pagination-first\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_firstIndex,$event)\"></span>\n                <span class=\"icon-pagination-prev\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_current-1,$event)\"></span>\n            </div>\n            <div class=\"center-box\">\n                {{_current}} / {{_lastIndex}}\n            </div>\n            <div class=\"right-box\">\n                <span class=\"icon-pagination-next\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_current+1,$event)\"></span>\n                <span class=\"icon-pagination-last\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_lastIndex,$event)\"></span>\n            </div>\n        </div>\n        <!-- \u5FEB\u901F\u8DF3\u8F6C -->\n        <div *ngIf=\"_showQuickJump\" class=\"quick-jumper\">\n            \u7B2C\n            <input #inputJump type=\"text\" [(ngModel)]=\"quickJumpPage\" (keyup.enter)=\"quickJump()\" appOnlyNumber=\"true\"> \u9875\n            <button (click)=\"quickJump()\">\u8DF3\u8F6C</button>\n        </div>\n    </div>\n</div>",
                },] },
    ];
    /** @nocollapse */
    JdbPlgPaginationComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return JdbPlgPaginationComponent;
}());
export { JdbPlgPaginationComponent };
if (false) {
    /** @type {?} */
    JdbPlgPaginationComponent.prototype._total;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype._current;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype._pageSize;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype._firstIndex;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype._lastIndex;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype._showTotal;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype._showPageSize;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype._showQuickJump;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype.pages;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype._options;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype.quickJumpPage;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype.hisQicukPage;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype._jdbSimple;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype._jdbSelectWidth;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype.jdbPageSizeChange;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype.jdbPageIndexChange;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype.inputJump;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype.el;
    /** @type {?} */
    JdbPlgPaginationComponent.prototype.renderer2;
}
//# sourceMappingURL=jdb-plg-pagination.component.js.map