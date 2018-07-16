/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                var /** @type {?} */ optionsArr_1 = [];
                value.forEach(function (elem) {
                    var /** @type {?} */ obj = {
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
        // 如果当前页码大于尾页，则等于尾页
        // if (this._current > this._lastIndex) {
        //   this.jdbPageIndex = this._lastIndex;
        //   this.jdbPageIndexChange.emit(this.jdbPageIndex);
        // }
        var /** @type {?} */ tmpPages = [];
        if (this._lastIndex <= 9) {
            // 若总页数不超过9，则全部展示在页面上
            for (var /** @type {?} */ i = 2; i <= this._lastIndex - 1; i++) {
                tmpPages.push({
                    index: i
                });
            }
        }
        else {
            var /** @type {?} */ current = +this._current;
            var /** @type {?} */ left = Math.max(2, current - 2);
            var /** @type {?} */ right = Math.min(current + 2, this._lastIndex - 1);
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
            for (var /** @type {?} */ i = left; i <= right; i++) {
                tmpPages.push({ index: i });
            }
        }
        this.pages = tmpPages;
    };
    // status为true表示页码切换，num表示页码，false表示条数切换，num表示条数
    /**
     * @param {?} status
     * @param {?} num
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.dataChange = /**
     * @param {?} status
     * @param {?} num
     * @return {?}
     */
    function (status, num) {
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
     * @param {?} pageSize
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.jumpBefore = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.dataChange(true, this._current - Math.round(pageSize / 2));
    };
    // 点击右箭头
    /**
     * @param {?} pageSize
     * @return {?}
     */
    JdbPlgPaginationComponent.prototype.jumpAfter = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.dataChange(true, this._current + Math.round(pageSize / 2));
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
        var /** @type {?} */ reg = /^[0-9]*$/;
        return reg.test(obj);
    };
    JdbPlgPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-pagination',
                    template: "<div class=\"jdb-plg-pagination\">\n    <!-- \u603B\u6761\u6570 -->\n    <span *ngIf=\"_showTotal\" class=\"total-box\">\n      \u5171{{_total}}\u6761\n    </span>\n\n    <div class=\"operate-box\">\n        <!-- \u6761\u6570\u5207\u6362 -->\n        <div class=\"jdb-plg-pagination-options\" *ngIf=\"_showPageSize\">\n            <app-jdb-plg-select (ngModelChange)=\"dataChange(false,$event)\" [jdbSize]=\"'small'\" [jdbWidth]=\"'90px'\" [(ngModel)]=\"_pageSize\" [jdbSelectList]=\"_options\"></app-jdb-plg-select>\n        </div>\n        <!-- \u57FA\u672C\u5206\u9875\u6837\u5F0F -->\n        <ul *ngIf=\"!_jdbSimple\" class=\"base-pagination\">\n            <!-- \u4E0A\u4E00\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-prev\" title=\"\u4E0A\u4E00\u9875\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_current-1)\">\n                <span class=\"jdbIcon icon-pagination-prev\"></span>\n            </li>\n            <!-- \u9996\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-first\" title=\"\u9996\u9875\" [ngClass]=\"{'active':_current===_firstIndex}\" (click)=\"dataChange(true,_firstIndex)\">\n                {{_firstIndex}}\n            </li>\n            <!-- \u7701\u7565\u53F7 -->\n            <li class=\"jdb-plg-pagination-forward\" *ngIf=\"(_lastIndex >9)&&(_current-4>_firstIndex)\" (click)=\"jumpBefore(_pageSize)\">\n                <span class=\"icon-pagination-more\"></span>\n                <span class=\"icon-pagination-jump-prev\"></span>\n            </li>\n            <!-- \u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-pager\" *ngFor=\"let page of pages\" [ngClass]=\"{'active':_current===page.index}\" (click)=\"dataChange(true,page.index)\">\n                {{page.index}}\n            </li>\n            <!-- \u7701\u7565\u53F7 -->\n            <li class=\"jdb-plg-pagination-backward\" *ngIf=\"(_lastIndex >9)&&(_current+4<_lastIndex)\" (click)=\"jumpAfter(_pageSize)\">\n                <span class=\"icon-pagination-more\"></span>\n                <span class=\"icon-pagination-jump-next\"></span>\n            </li>\n            <!-- \u5C3E\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-last\" *ngIf=\"(_lastIndex>0)&&(_lastIndex!==_firstIndex)\" title=\"\u5C3E\u9875\" [ngClass]=\"{'active':_current===_lastIndex}\" (click)=\"dataChange(true,_lastIndex)\">\n                {{_lastIndex}}\n            </li>\n            <!-- \u4E0B\u4E00\u9875\u6309\u94AE -->\n            <li class=\"jdb-plg-pagination-next\" title=\"\u4E0B\u4E00\u9875\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_current+1)\">\n                <span class=\"jdbIcon icon-pagination-next\"></span>\n            </li>\n        </ul>\n        <!-- \u7B80\u5355\u5206\u9875\u6837\u5F0F -->\n        <div class=\"simple-pagination\" *ngIf=\"_jdbSimple\">\n            <div class=\"left-box\">\n                <span class=\"icon-pagination-first\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_firstIndex)\"></span>\n                <span class=\"icon-pagination-prev\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_current-1)\"></span>\n            </div>\n            <div class=\"center-box\">\n                {{_current}} / {{_lastIndex}}\n            </div>\n            <div class=\"right-box\">\n                <span class=\"icon-pagination-next\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_current+1)\"></span>\n                <span class=\"icon-pagination-last\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_lastIndex)\"></span>\n            </div>\n        </div>\n        <!-- \u5FEB\u901F\u8DF3\u8F6C -->\n        <div *ngIf=\"_showQuickJump\" class=\"quick-jumper\">\n            \u7B2C\n            <input #inputJump type=\"text\" [(ngModel)]=\"quickJumpPage\" (keyup.enter)=\"quickJump()\" appOnlyNumber=\"true\"> \u9875\n            <button (click)=\"quickJump()\">\u8DF3\u8F6C</button>\n        </div>\n    </div>\n</div>",
                    styles: [".jdb-plg-pagination{height:24px;display:inline-block}.jdb-plg-pagination .total-box{float:left;margin-right:30px;height:24px;line-height:24px;font-size:12px;color:#323233}.jdb-plg-pagination .operate-box{float:right}.jdb-plg-pagination .operate-box .jdb-plg-pagination-options{float:left;margin-right:30px}.jdb-plg-pagination .operate-box .base-pagination{float:left;overflow:hidden}.jdb-plg-pagination .operate-box .base-pagination li{position:relative;float:left;margin-right:5px;padding:0 5px;height:24px;min-width:24px;line-height:24px;text-align:center;border-radius:2px;color:#323233;border:1px solid #afb0b3;cursor:pointer;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;background:#fff}.jdb-plg-pagination .operate-box .base-pagination .disabled{background:#f0f1f5;color:#bfc0c4;border:1px solid #e1e2e6}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward{border:none;padding:0;background:0 0}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward .icon-pagination-jump-next,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward .icon-pagination-jump-prev,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward .icon-pagination-jump-next,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward .icon-pagination-jump-prev{color:#3f69f2;display:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward:hover .icon-pagination-jump-prev{display:block}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward:hover .icon-pagination-more{display:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward:hover .icon-pagination-jump-next{display:block}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward:hover .icon-pagination-more{display:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-first:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-last:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-next:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-pager:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-prev:hover{color:#4d76ff;border:1px solid #4d76ff}.jdb-plg-pagination .operate-box .base-pagination .active,.jdb-plg-pagination .operate-box .base-pagination .active:hover{background:#4d76ff;color:#fff;border:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-next,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-prev{padding:0}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-next .jdbIcon,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-prev .jdbIcon{font-size:22px}.jdb-plg-pagination .operate-box .simple-pagination{float:left;overflow:hidden}.jdb-plg-pagination .operate-box .simple-pagination .center-box,.jdb-plg-pagination .operate-box .simple-pagination .left-box,.jdb-plg-pagination .operate-box .simple-pagination .right-box{overflow:hidden;float:left}.jdb-plg-pagination .operate-box .simple-pagination .center-box span,.jdb-plg-pagination .operate-box .simple-pagination .left-box span,.jdb-plg-pagination .operate-box .simple-pagination .right-box span{float:left;line-height:24px;text-align:center;height:24px;width:24px}.jdb-plg-pagination .operate-box .simple-pagination .center-box span:first-child,.jdb-plg-pagination .operate-box .simple-pagination .left-box span:first-child,.jdb-plg-pagination .operate-box .simple-pagination .right-box span:first-child{margin-right:1px}.jdb-plg-pagination .operate-box .simple-pagination .center-box .disabled,.jdb-plg-pagination .operate-box .simple-pagination .left-box .disabled,.jdb-plg-pagination .operate-box .simple-pagination .right-box .disabled{color:#d7d8db}.jdb-plg-pagination .operate-box .simple-pagination .center-box span:hover,.jdb-plg-pagination .operate-box .simple-pagination .left-box span:hover,.jdb-plg-pagination .operate-box .simple-pagination .right-box span:hover{color:#4d76ff}.jdb-plg-pagination .operate-box .simple-pagination .center-box{width:50px;height:24px;line-height:24px;text-align:center}.jdb-plg-pagination .operate-box .quick-jumper{float:left;margin-left:20px}.jdb-plg-pagination .operate-box .quick-jumper button,.jdb-plg-pagination .operate-box .quick-jumper input{text-align:center;width:40px;height:24px;border-radius:3px;border:1px solid #e1e2e6;outline:0}.jdb-plg-pagination .operate-box .quick-jumper button{margin-left:15px;float:right}.jdb-plg-pagination .operate-box .quick-jumper input{ime-mode:disabled}"]
                },] },
    ];
    /** @nocollapse */
    JdbPlgPaginationComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
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
    return JdbPlgPaginationComponent;
}());
export { JdbPlgPaginationComponent };
function JdbPlgPaginationComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    JdbPlgPaginationComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    JdbPlgPaginationComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    JdbPlgPaginationComponent.propDecorators;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRiLXBsZy1wYWdpbmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZXN0LXVpL2NvcmUvIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvamRiLXBsZy1wYWdpbmF0aW9uL2pkYi1wbGctcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7O0lBb0dyQixtQ0FDVSxJQUNBO1FBREEsT0FBRSxHQUFGLEVBQUU7UUFDRixjQUFTLEdBQVQsU0FBUzt3QkE1QlIsQ0FBQzt5QkFDQSxFQUFFOzJCQUNBLENBQUM7MEJBQ0YsUUFBUTswQkFDUixLQUFLOzZCQUNGLEtBQUs7OEJBQ0osS0FBSztxQkFDZCxFQUFFOzs7d0JBR0M7WUFDVCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUM1QixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUM1QixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUM1QixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUM1QixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtTQUM3QjswQkFJWSxLQUFLO2lDQUVrQyxJQUFJLFlBQVksRUFBRTtrQ0FDakIsSUFBSSxZQUFZLEVBQUU7S0FNbEU7MEJBSUQsbURBQVk7Ozs7UUFJaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7Ozs7O2tCQU5nQixLQUFjO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENB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QkFVTCxLQUFLOztvQ0ExTlI7O1NBa0ZhLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1qZGItcGxnLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJqZGItcGxnLXBhZ2luYXRpb25cIj5cbiAgICA8IS0tIOaAu+adoeaVsCAtLT5cbiAgICA8c3BhbiAqbmdJZj1cIl9zaG93VG90YWxcIiBjbGFzcz1cInRvdGFsLWJveFwiPlxuICAgICAg5YWxe3tfdG90YWx9feadoVxuICAgIDwvc3Bhbj5cblxuICAgIDxkaXYgY2xhc3M9XCJvcGVyYXRlLWJveFwiPlxuICAgICAgICA8IS0tIOadoeaVsOWIh+aNoiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImpkYi1wbGctcGFnaW5hdGlvbi1vcHRpb25zXCIgKm5nSWY9XCJfc2hvd1BhZ2VTaXplXCI+XG4gICAgICAgICAgICA8YXBwLWpkYi1wbGctc2VsZWN0IChuZ01vZGVsQ2hhbmdlKT1cImRhdGFDaGFuZ2UoZmFsc2UsJGV2ZW50KVwiIFtqZGJTaXplXT1cIidzbWFsbCdcIiBbamRiV2lkdGhdPVwiJzkwcHgnXCIgWyhuZ01vZGVsKV09XCJfcGFnZVNpemVcIiBbamRiU2VsZWN0TGlzdF09XCJfb3B0aW9uc1wiPjwvYXBwLWpkYi1wbGctc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSDln7rmnKzliIbpobXmoLflvI8gLS0+XG4gICAgICAgIDx1bCAqbmdJZj1cIiFfamRiU2ltcGxlXCIgY2xhc3M9XCJiYXNlLXBhZ2luYXRpb25cIj5cbiAgICAgICAgICAgIDwhLS0g5LiK5LiA6aG15oyJ6ZKuIC0tPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLXByZXZcIiB0aXRsZT1cIuS4iuS4gOmhtVwiIFtuZ0NsYXNzXT1cInsnZGlzYWJsZWQnOl9jdXJyZW50PT09X2ZpcnN0SW5kZXh9XCIgKGNsaWNrKT1cImRhdGFDaGFuZ2UodHJ1ZSxfY3VycmVudC0xKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiamRiSWNvbiBpY29uLXBhZ2luYXRpb24tcHJldlwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8IS0tIOmmlumhteaMiemSriAtLT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImpkYi1wbGctcGFnaW5hdGlvbi1maXJzdFwiIHRpdGxlPVwi6aaW6aG1XCIgW25nQ2xhc3NdPVwieydhY3RpdmUnOl9jdXJyZW50PT09X2ZpcnN0SW5kZXh9XCIgKGNsaWNrKT1cImRhdGFDaGFuZ2UodHJ1ZSxfZmlyc3RJbmRleClcIj5cbiAgICAgICAgICAgICAgICB7e19maXJzdEluZGV4fX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8IS0tIOecgeeVpeWPtyAtLT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImpkYi1wbGctcGFnaW5hdGlvbi1mb3J3YXJkXCIgKm5nSWY9XCIoX2xhc3RJbmRleCA+OSkmJihfY3VycmVudC00Pl9maXJzdEluZGV4KVwiIChjbGljayk9XCJqdW1wQmVmb3JlKF9wYWdlU2l6ZSlcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1tb3JlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1wYWdpbmF0aW9uLWp1bXAtcHJldlwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8IS0tIOaMiemSriAtLT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImpkYi1wbGctcGFnaW5hdGlvbi1wYWdlclwiICpuZ0Zvcj1cImxldCBwYWdlIG9mIHBhZ2VzXCIgW25nQ2xhc3NdPVwieydhY3RpdmUnOl9jdXJyZW50PT09cGFnZS5pbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLHBhZ2UuaW5kZXgpXCI+XG4gICAgICAgICAgICAgICAge3twYWdlLmluZGV4fX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8IS0tIOecgeeVpeWPtyAtLT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImpkYi1wbGctcGFnaW5hdGlvbi1iYWNrd2FyZFwiICpuZ0lmPVwiKF9sYXN0SW5kZXggPjkpJiYoX2N1cnJlbnQrNDxfbGFzdEluZGV4KVwiIChjbGljayk9XCJqdW1wQWZ0ZXIoX3BhZ2VTaXplKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1wYWdpbmF0aW9uLW1vcmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBhZ2luYXRpb24tanVtcC1uZXh0XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS0g5bC+6aG15oyJ6ZKuIC0tPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLWxhc3RcIiAqbmdJZj1cIihfbGFzdEluZGV4PjApJiYoX2xhc3RJbmRleCE9PV9maXJzdEluZGV4KVwiIHRpdGxlPVwi5bC+6aG1XCIgW25nQ2xhc3NdPVwieydhY3RpdmUnOl9jdXJyZW50PT09X2xhc3RJbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLF9sYXN0SW5kZXgpXCI+XG4gICAgICAgICAgICAgICAge3tfbGFzdEluZGV4fX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8IS0tIOS4i+S4gOmhteaMiemSriAtLT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImpkYi1wbGctcGFnaW5hdGlvbi1uZXh0XCIgdGl0bGU9XCLkuIvkuIDpobVcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzpfY3VycmVudD09PV9sYXN0SW5kZXh9XCIgKGNsaWNrKT1cImRhdGFDaGFuZ2UodHJ1ZSxfY3VycmVudCsxKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiamRiSWNvbiBpY29uLXBhZ2luYXRpb24tbmV4dFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDwhLS0g566A5Y2V5YiG6aG15qC35byPIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlLXBhZ2luYXRpb25cIiAqbmdJZj1cIl9qZGJTaW1wbGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJveFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1wYWdpbmF0aW9uLWZpcnN0XCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6X2N1cnJlbnQ9PT1fZmlyc3RJbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLF9maXJzdEluZGV4KVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1wcmV2XCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6X2N1cnJlbnQ9PT1fZmlyc3RJbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLF9jdXJyZW50LTEpXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyLWJveFwiPlxuICAgICAgICAgICAgICAgIHt7X2N1cnJlbnR9fSAvIHt7X2xhc3RJbmRleH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1ib3hcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1uZXh0XCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6X2N1cnJlbnQ9PT1fbGFzdEluZGV4fVwiIChjbGljayk9XCJkYXRhQ2hhbmdlKHRydWUsX2N1cnJlbnQrMSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBhZ2luYXRpb24tbGFzdFwiIFtuZ0NsYXNzXT1cInsnZGlzYWJsZWQnOl9jdXJyZW50PT09X2xhc3RJbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLF9sYXN0SW5kZXgpXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIOW/q+mAn+i3s+i9rCAtLT5cbiAgICAgICAgPGRpdiAqbmdJZj1cIl9zaG93UXVpY2tKdW1wXCIgY2xhc3M9XCJxdWljay1qdW1wZXJcIj5cbiAgICAgICAgICAgIOesrFxuICAgICAgICAgICAgPGlucHV0ICNpbnB1dEp1bXAgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cInF1aWNrSnVtcFBhZ2VcIiAoa2V5dXAuZW50ZXIpPVwicXVpY2tKdW1wKClcIiBhcHBPbmx5TnVtYmVyPVwidHJ1ZVwiPiDpobVcbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInF1aWNrSnVtcCgpXCI+6Lez6L2sPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5qZGItcGxnLXBhZ2luYXRpb257aGVpZ2h0OjI0cHg7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmpkYi1wbGctcGFnaW5hdGlvbiAudG90YWwtYm94e2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjMwcHg7aGVpZ2h0OjI0cHg7bGluZS1oZWlnaHQ6MjRweDtmb250LXNpemU6MTJweDtjb2xvcjojMzIzMjMzfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94e2Zsb2F0OnJpZ2h0fS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5qZGItcGxnLXBhZ2luYXRpb24tb3B0aW9uc3tmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDozMHB4fS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb257ZmxvYXQ6bGVmdDtvdmVyZmxvdzpoaWRkZW59LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiBsaXtwb3NpdGlvbjpyZWxhdGl2ZTtmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDo1cHg7cGFkZGluZzowIDVweDtoZWlnaHQ6MjRweDttaW4td2lkdGg6MjRweDtsaW5lLWhlaWdodDoyNHB4O3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1yYWRpdXM6MnB4O2NvbG9yOiMzMjMyMzM7Ym9yZGVyOjFweCBzb2xpZCAjYWZiMGIzO2N1cnNvcjpwb2ludGVyOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtiYWNrZ3JvdW5kOiNmZmZ9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuZGlzYWJsZWR7YmFja2dyb3VuZDojZjBmMWY1O2NvbG9yOiNiZmMwYzQ7Ym9yZGVyOjFweCBzb2xpZCAjZTFlMmU2fS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1iYWNrd2FyZCwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tZm9yd2FyZHtib3JkZXI6bm9uZTtwYWRkaW5nOjA7YmFja2dyb3VuZDowIDB9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWJhY2t3YXJkIC5pY29uLXBhZ2luYXRpb24tanVtcC1uZXh0LC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1iYWNrd2FyZCAuaWNvbi1wYWdpbmF0aW9uLWp1bXAtcHJldiwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tZm9yd2FyZCAuaWNvbi1wYWdpbmF0aW9uLWp1bXAtbmV4dCwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tZm9yd2FyZCAuaWNvbi1wYWdpbmF0aW9uLWp1bXAtcHJldntjb2xvcjojM2Y2OWYyO2Rpc3BsYXk6bm9uZX0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tZm9yd2FyZDpob3ZlciAuaWNvbi1wYWdpbmF0aW9uLWp1bXAtcHJldntkaXNwbGF5OmJsb2NrfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1mb3J3YXJkOmhvdmVyIC5pY29uLXBhZ2luYXRpb24tbW9yZXtkaXNwbGF5Om5vbmV9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWJhY2t3YXJkOmhvdmVyIC5pY29uLXBhZ2luYXRpb24tanVtcC1uZXh0e2Rpc3BsYXk6YmxvY2t9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWJhY2t3YXJkOmhvdmVyIC5pY29uLXBhZ2luYXRpb24tbW9yZXtkaXNwbGF5Om5vbmV9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWZpcnN0OmhvdmVyLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1sYXN0OmhvdmVyLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1uZXh0OmhvdmVyLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1wYWdlcjpob3ZlciwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tcHJldjpob3Zlcntjb2xvcjojNGQ3NmZmO2JvcmRlcjoxcHggc29saWQgIzRkNzZmZn0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5hY3RpdmUsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuYWN0aXZlOmhvdmVye2JhY2tncm91bmQ6IzRkNzZmZjtjb2xvcjojZmZmO2JvcmRlcjpub25lfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1uZXh0LC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1wcmV2e3BhZGRpbmc6MH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tbmV4dCAuamRiSWNvbiwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tcHJldiAuamRiSWNvbntmb250LXNpemU6MjJweH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb257ZmxvYXQ6bGVmdDtvdmVyZmxvdzpoaWRkZW59LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5jZW50ZXItYm94LC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAubGVmdC1ib3gsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5yaWdodC1ib3h7b3ZlcmZsb3c6aGlkZGVuO2Zsb2F0OmxlZnR9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5jZW50ZXItYm94IHNwYW4sLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5sZWZ0LWJveCBzcGFuLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAucmlnaHQtYm94IHNwYW57ZmxvYXQ6bGVmdDtsaW5lLWhlaWdodDoyNHB4O3RleHQtYWxpZ246Y2VudGVyO2hlaWdodDoyNHB4O3dpZHRoOjI0cHh9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5jZW50ZXItYm94IHNwYW46Zmlyc3QtY2hpbGQsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5sZWZ0LWJveCBzcGFuOmZpcnN0LWNoaWxkLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAucmlnaHQtYm94IHNwYW46Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjFweH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLmNlbnRlci1ib3ggLmRpc2FibGVkLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAubGVmdC1ib3ggLmRpc2FibGVkLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAucmlnaHQtYm94IC5kaXNhYmxlZHtjb2xvcjojZDdkOGRifS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAuY2VudGVyLWJveCBzcGFuOmhvdmVyLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAubGVmdC1ib3ggc3Bhbjpob3ZlciwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLnJpZ2h0LWJveCBzcGFuOmhvdmVye2NvbG9yOiM0ZDc2ZmZ9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5jZW50ZXItYm94e3dpZHRoOjUwcHg7aGVpZ2h0OjI0cHg7bGluZS1oZWlnaHQ6MjRweDt0ZXh0LWFsaWduOmNlbnRlcn0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAucXVpY2stanVtcGVye2Zsb2F0OmxlZnQ7bWFyZ2luLWxlZnQ6MjBweH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAucXVpY2stanVtcGVyIGJ1dHRvbiwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAucXVpY2stanVtcGVyIGlucHV0e3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjQwcHg7aGVpZ2h0OjI0cHg7Ym9yZGVyLXJhZGl1czozcHg7Ym9yZGVyOjFweCBzb2xpZCAjZTFlMmU2O291dGxpbmU6MH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAucXVpY2stanVtcGVyIGJ1dHRvbnttYXJnaW4tbGVmdDoxNXB4O2Zsb2F0OnJpZ2h0fS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5xdWljay1qdW1wZXIgaW5wdXR7aW1lLW1vZGU6ZGlzYWJsZWR9YF1cbn0pXG5leHBvcnQgY2xhc3MgSmRiUGxnUGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gIF90b3RhbDogbnVtYmVyOyAvLyDmgLvmnaHmlbBcbiAgX2N1cnJlbnQgPSAxOyAvLyDlvZPliY3pobXnoIHpu5jorqTkuLoxXG4gIF9wYWdlU2l6ZSA9IDEwOyAvLyDpu5jorqTmnaHmlbBcbiAgX2ZpcnN0SW5kZXggPSAxOyAgLy8g6aaW6aG16buY6K6k5Li6MVxuICBfbGFzdEluZGV4ID0gSW5maW5pdHk7ICAvLyDlsL7pobXpu5jorqTkuLrml6DnqbdcbiAgX3Nob3dUb3RhbCA9IGZhbHNlOyAgLy8g5piv5ZCm5bGV56S65oC75pWw77yM6buY6K6k5LiN5bGV56S6XG4gIF9zaG93UGFnZVNpemUgPSBmYWxzZTsgLy8g5piv5ZCm5bGV56S66aG156CB5YiH5o2i77yM6buY6K6k5LiN5bGV56S6XG4gIF9zaG93UXVpY2tKdW1wID0gZmFsc2U7IC8vIOaYr+WQpuWxleekuuW/q+mAn+i3s+i9rO+8jOm7mOiupOS4jeWxleekulxuICBwYWdlcyA9IFtdOyAgLy8g6aG156CB5pWw57uEXG4gIC8vIF9vcHRpb25zID0gWzEwLCAyMCwgMzAsIDQwLCA1MF07IC8vIHNlbGVjdOm7mOiupOaVsOe7hFxuICAvLyBzZWxlY3Tpu5jorqTmlbDnu4RcbiAgX29wdGlvbnMgPSBbXG4gICAgeyB2YWx1ZTogMTAsIHRleHQ6ICcxMOadoS/pobUnIH0sXG4gICAgeyB2YWx1ZTogMjAsIHRleHQ6ICcyMOadoS/pobUnIH0sXG4gICAgeyB2YWx1ZTogMzAsIHRleHQ6ICczMOadoS/pobUnIH0sXG4gICAgeyB2YWx1ZTogNDAsIHRleHQ6ICc0MOadoS/pobUnIH0sXG4gICAgeyB2YWx1ZTogNTAsIHRleHQ6ICc1MOadoS/pobUnIH1cbiAgXTtcblxuICBxdWlja0p1bXBQYWdlOiBhbnk7IC8vIOW/q+mAn+i3s+i9rOmhteeggVxuICBoaXNRaWN1a1BhZ2U6IGFueTsgIC8vIOWOhuWPsuW/q+mAn+i3s+i9rOmhteeggVxuICBfamRiU2ltcGxlID0gZmFsc2U7IC8vIOaYr+WQpuS4uueugOWNleWIhumhte+8jOm7mOiupOS4uuWfuuacrOWIhumhtVxuXG4gIEBPdXRwdXQoKSBqZGJQYWdlU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7ICAvLyDmnaHmlbDliIfmjaIgIOWRveWQjeS4juWxnuaAp+ebuOWFs1xuICBAT3V0cHV0KCkgamRiUGFnZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgIC8vIOmhteeggeWIh+aNolxuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0SnVtcCcpIHByaXZhdGUgaW5wdXRKdW1wOiBFbGVtZW50UmVmO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICAvLyDmmK/lkKblsZXnpLrmgLvmlbDmoIfnrb5cbiAgQElucHV0KClcbiAgc2V0IGpkYlNob3dUb3RhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dUb3RhbCA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBqZGJTaG93VG90YWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dUb3RhbDtcbiAgfVxuXG4gIC8vIOaVsOaNruaAu+aVsFxuICBASW5wdXQoKVxuICBzZXQgamRiVG90YWwodmFsdWU6IG51bWJlcikge1xuICAgIC8vIOiLpeS8oOWFpeWAvOWSjOW9k+WJjXRvdGFs5LiA6Ie077yM5YiZ5LiN6Kem5Y+R5pON5L2cXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLl90b3RhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl90b3RhbCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0UGFnZU5vKCk7XG4gIH1cblxuICBnZXQgamRiVG90YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWw7XG4gIH1cblxuICAvLyBqZGJQYWdlSW5kZXjkuI5fY3VycmVudOWFs+iBlO+8jOihqOekuumhteeggVxuICBASW5wdXQoKVxuICBzZXQgamRiUGFnZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlID4gdGhpcy5fbGFzdEluZGV4IHx8IHZhbHVlIDwgdGhpcy5fZmlyc3RJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9jdXJyZW50ID0gTnVtYmVyKHZhbHVlKTtcbiAgICB0aGlzLnNldFBhZ2VObygpO1xuICB9XG5cbiAgZ2V0IGpkYlBhZ2VJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50O1xuICB9XG5cbiAgLy8g5piv5ZCm5bGV56S65YiH5o2i5p2h5pWwc2VsZWN0XG4gIEBJbnB1dCgpXG4gIHNldCBqZGJTaG93UGFnZVNpemUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93UGFnZVNpemUgPSB0aGlzLnRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgamRiU2hvd1BhZ2VTaXplKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93UGFnZVNpemU7XG4gIH1cblxuICAvLyDpu5jorqTmnaHmlbBcbiAgQElucHV0KClcbiAgc2V0IGpkYlBhZ2VTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX3BhZ2VTaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BhZ2VTaXplID0gdmFsdWU7XG4gICAgdGhpcy5zZXRQYWdlTm8oKTtcbiAgfVxuXG4gIGdldCBqZGJQYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuXG4gIC8vIOm7mOiupOS4i+aLiemAieaLqeadoeaVsOaVsOe7hFxuICBASW5wdXQoKVxuICBzZXQgamRiU2l6ZU9wdGlvbnModmFsdWUpIHtcbiAgICAvLyDoi6XkvKDlhaXlgLzlkozlvZPliY10b3RhbOS4gOiHtO+8jOWImeS4jeinpuWPkeaTjeS9nFxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fb3B0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOWIpOaWreaYr+WQpuS4uuaVsOe7hFxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICBjb25zdCBvcHRpb25zQXJyID0gW107XG4gICAgICB2YWx1ZS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgdmFsdWU6IGVsZW0sXG4gICAgICAgICAgdGV4dDogZWxlbSArICfmnaEv6aG1J1xuICAgICAgICB9O1xuICAgICAgICBvcHRpb25zQXJyLnB1c2gob2JqKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnNBcnI7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGpkYlNpemVPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgLy8g5piv5ZCm5bGV56S65b+r6YCf6Lez6L2s6aG16Z2iXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJTaG93UXVpY2tKdW1wKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1F1aWNrSnVtcCA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBqZGJTaG93UXVpY2tKdW1wKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93UXVpY2tKdW1wO1xuICB9XG5cbiAgLy8g5YiG6aG15qC35byPXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJTaW1wbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9qZGJTaW1wbGUgPSB0aGlzLnRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgamRiU2ltcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmpkYlNpbXBsZTtcbiAgfVxuXG4gIC8vIOWIm+W7uumhteeggVxuICBzZXRQYWdlTm8oKSB7XG4gICAgLy8g5ZCR5LiK5Y+W5pW0XG4gICAgdGhpcy5fbGFzdEluZGV4ID0gTWF0aC5jZWlsKHRoaXMuX3RvdGFsIC8gdGhpcy5fcGFnZVNpemUpO1xuICAgIC8vIOWmguaenOW9k+WJjemhteeggeWkp+S6juWwvumhte+8jOWImeetieS6juWwvumhtVxuICAgIC8vIGlmICh0aGlzLl9jdXJyZW50ID4gdGhpcy5fbGFzdEluZGV4KSB7XG4gICAgLy8gICB0aGlzLmpkYlBhZ2VJbmRleCA9IHRoaXMuX2xhc3RJbmRleDtcbiAgICAvLyAgIHRoaXMuamRiUGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5qZGJQYWdlSW5kZXgpO1xuICAgIC8vIH1cblxuICAgIGNvbnN0IHRtcFBhZ2VzID0gW107XG5cbiAgICBpZiAodGhpcy5fbGFzdEluZGV4IDw9IDkpIHtcbiAgICAgIC8vIOiLpeaAu+mhteaVsOS4jei2hei/hznvvIzliJnlhajpg6jlsZXnpLrlnKjpobXpnaLkuIpcbiAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHRoaXMuX2xhc3RJbmRleCAtIDE7IGkrKykge1xuICAgICAgICB0bXBQYWdlcy5wdXNoKHtcbiAgICAgICAgICBpbmRleDogaVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY3VycmVudCA9ICt0aGlzLl9jdXJyZW50O1xuICAgICAgbGV0IGxlZnQgPSBNYXRoLm1heCgyLCBjdXJyZW50IC0gMik7XG4gICAgICBsZXQgcmlnaHQgPSBNYXRoLm1pbihjdXJyZW50ICsgMiwgdGhpcy5fbGFzdEluZGV4IC0gMSk7XG5cbiAgICAgIC8vIOeJueauiuWkhOeQhuato+aVsOesrOS6lOS4quaVsOWSjOWAkuaVsOesrOS6lOS4quaVsFxuICAgICAgaWYgKGN1cnJlbnQgPT09IDUpIHtcbiAgICAgICAgbGVmdCA9IDI7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT09IHRoaXMuX2xhc3RJbmRleCAtIDQpIHtcbiAgICAgICAgcmlnaHQgPSB0aGlzLl9sYXN0SW5kZXggLSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudCAtIDEgPD0gMykge1xuICAgICAgICByaWdodCA9IDc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9sYXN0SW5kZXggLSBjdXJyZW50IDw9IDMpIHtcbiAgICAgICAgbGVmdCA9IHRoaXMuX2xhc3RJbmRleCAtIDY7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgdG1wUGFnZXMucHVzaCh7IGluZGV4OiBpIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucGFnZXMgPSB0bXBQYWdlcztcbiAgfVxuXG4gIC8vIHN0YXR1c+S4unRydWXooajnpLrpobXnoIHliIfmjaLvvIxudW3ooajnpLrpobXnoIHvvIxmYWxzZeihqOekuuadoeaVsOWIh+aNou+8jG51beihqOekuuadoeaVsFxuICBkYXRhQ2hhbmdlKHN0YXR1czogYm9vbGVhbiwgbnVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICBpZiAobnVtID09PSB0aGlzLl9maXJzdEluZGV4IC0gMSB8fCBudW0gPT09IHRoaXMuX2xhc3RJbmRleCArIDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8g5riF56m66L6T5YWl5qGG5YaF5a65XG4gICAgICB0aGlzLnF1aWNrSnVtcFBhZ2UgPSAnJztcbiAgICAgIHRoaXMuamRiUGFnZUluZGV4ID0gbnVtO1xuICAgICAgdGhpcy5qZGJQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLmpkYlBhZ2VJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOa4heepuui+k+WFpeahhuWGheWuuVxuICAgICAgdGhpcy5xdWlja0p1bXBQYWdlID0gJyc7XG4gICAgICB0aGlzLmpkYlBhZ2VTaXplID0gbnVtO1xuICAgICAgdGhpcy5qZGJQYWdlU2l6ZUNoYW5nZS5lbWl0KG51bSk7XG5cbiAgICAgIC8vIOWIh+aNoumhteaVsOS5i+WQjumcgOimgeWwhumhteeggemHjee9ruS4ujFcbiAgICAgIHRoaXMuamRiUGFnZUluZGV4ID0gMTtcbiAgICAgIHRoaXMuamRiUGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5qZGJQYWdlSW5kZXgpO1xuICAgICAgdGhpcy5zZXRQYWdlTm8oKTtcbiAgICB9XG4gICAgLy8gdGhpcy5zZXRQYWdlTm8oKTtcbiAgfVxuXG4gIC8vIOeCueWHu+i3s+i9rOaMiemSruW/q+mAn+i3s+i9rFxuICBxdWlja0p1bXAoKSB7XG4gICAgLy8g6Iul5piv6L6T5YWl55qE6aG156CB5aSn5LqO5pyA5ZCO5LiA6aG16aG156CB77yM5Y2z6LaF5Ye66IyD5Zu05LiN5a2Y5Zyo77yM5YiZ5riF56m66aG156CB77yM5bm25L2/6L6T5YWl5qGG6I635Y+W54Sm54K5XG4gICAgaWYgKHRoaXMucXVpY2tKdW1wUGFnZSA+IHRoaXMuX2xhc3RJbmRleCkge1xuICAgICAgdGhpcy5pbnB1dEp1bXAubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgdGhpcy5xdWlja0p1bXBQYWdlID0gJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g6Iul6L6T5YWl5Li656m677yM5YiZ5LiN6IO96Lez6L2sXG4gICAgaWYgKCF0aGlzLnF1aWNrSnVtcFBhZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmpkYlBhZ2VJbmRleCA9IHRoaXMucXVpY2tKdW1wUGFnZTtcbiAgICB0aGlzLmpkYlBhZ2VJbmRleENoYW5nZS5lbWl0KHRoaXMuamRiUGFnZUluZGV4KTtcbiAgfVxuXG4gIC8vIOeCueWHu+W3pueureWktCjkuLrku4DkuYjkvb/nlKjmnaHmlbDpmaTku6Uy5ZGiKVxuICBqdW1wQmVmb3JlKHBhZ2VTaXplKSB7XG4gICAgdGhpcy5kYXRhQ2hhbmdlKHRydWUsIHRoaXMuX2N1cnJlbnQgLSBNYXRoLnJvdW5kKHBhZ2VTaXplIC8gMikpO1xuICB9XG5cbiAgLy8g54K55Ye75Y+z566t5aS0XG4gIGp1bXBBZnRlcihwYWdlU2l6ZSkge1xuICAgIHRoaXMuZGF0YUNoYW5nZSh0cnVlLCB0aGlzLl9jdXJyZW50ICsgTWF0aC5yb3VuZChwYWdlU2l6ZSAvIDIpKTtcbiAgfVxuXG4gIC8vIOi9rOaNouS4umJvb2xlYW4s5Y2z5a6e546w5pyJ6L+Z5Liq5a2X5q615bCx6K6k5Li65Li6dHJ1ZSzmsqHmnInljbPkuLpmYWxzZVxuICB0b0Jvb2xlYW4odmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICcnIHx8ICh2YWx1ZSAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gIH1cblxuICAvLyDmoKHpqozmmK/lkKbkuLrnuq/mlbDlrZdcbiAgaXNOdW1iZXIob2JqKSB7XG4gICAgY29uc3QgcmVnID0gL15bMC05XSokLztcbiAgICByZXR1cm4gcmVnLnRlc3Qob2JqKTtcbiAgfVxuXG59XG5cbiJdfQ==