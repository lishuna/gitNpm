/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ElementRef, ViewChild, Renderer2 } from '@angular/core';
export class JdbPlgPaginationComponent {
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
                template: `<div class="jdb-plg-pagination">
    <!-- 总条数 -->
    <span *ngIf="_showTotal" class="total-box">
      共{{_total}}条
    </span>

    <div class="operate-box">
        <!-- 条数切换 -->
        <div class="jdb-plg-pagination-options" *ngIf="_showPageSize">
            <app-jdb-plg-select (ngModelChange)="dataChange(false,$event)" [jdbSize]="'small'" [jdbWidth]="'90px'" [(ngModel)]="_pageSize" [jdbSelectList]="_options"></app-jdb-plg-select>
        </div>
        <!-- 基本分页样式 -->
        <ul *ngIf="!_jdbSimple" class="base-pagination">
            <!-- 上一页按钮 -->
            <li class="jdb-plg-pagination-prev" title="上一页" [ngClass]="{'disabled':_current===_firstIndex}" (click)="dataChange(true,_current-1)">
                <span class="jdbIcon icon-pagination-prev"></span>
            </li>
            <!-- 首页按钮 -->
            <li class="jdb-plg-pagination-first" title="首页" [ngClass]="{'active':_current===_firstIndex}" (click)="dataChange(true,_firstIndex)">
                {{_firstIndex}}
            </li>
            <!-- 省略号 -->
            <li class="jdb-plg-pagination-forward" *ngIf="(_lastIndex >9)&&(_current-4>_firstIndex)" (click)="jumpBefore(_pageSize)">
                <span class="icon-pagination-more"></span>
                <span class="icon-pagination-jump-prev"></span>
            </li>
            <!-- 按钮 -->
            <li class="jdb-plg-pagination-pager" *ngFor="let page of pages" [ngClass]="{'active':_current===page.index}" (click)="dataChange(true,page.index)">
                {{page.index}}
            </li>
            <!-- 省略号 -->
            <li class="jdb-plg-pagination-backward" *ngIf="(_lastIndex >9)&&(_current+4<_lastIndex)" (click)="jumpAfter(_pageSize)">
                <span class="icon-pagination-more"></span>
                <span class="icon-pagination-jump-next"></span>
            </li>
            <!-- 尾页按钮 -->
            <li class="jdb-plg-pagination-last" *ngIf="(_lastIndex>0)&&(_lastIndex!==_firstIndex)" title="尾页" [ngClass]="{'active':_current===_lastIndex}" (click)="dataChange(true,_lastIndex)">
                {{_lastIndex}}
            </li>
            <!-- 下一页按钮 -->
            <li class="jdb-plg-pagination-next" title="下一页" [ngClass]="{'disabled':_current===_lastIndex}" (click)="dataChange(true,_current+1)">
                <span class="jdbIcon icon-pagination-next"></span>
            </li>
        </ul>
        <!-- 简单分页样式 -->
        <div class="simple-pagination" *ngIf="_jdbSimple">
            <div class="left-box">
                <span class="icon-pagination-first" [ngClass]="{'disabled':_current===_firstIndex}" (click)="dataChange(true,_firstIndex)"></span>
                <span class="icon-pagination-prev" [ngClass]="{'disabled':_current===_firstIndex}" (click)="dataChange(true,_current-1)"></span>
            </div>
            <div class="center-box">
                {{_current}} / {{_lastIndex}}
            </div>
            <div class="right-box">
                <span class="icon-pagination-next" [ngClass]="{'disabled':_current===_lastIndex}" (click)="dataChange(true,_current+1)"></span>
                <span class="icon-pagination-last" [ngClass]="{'disabled':_current===_lastIndex}" (click)="dataChange(true,_lastIndex)"></span>
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
                styles: [`.jdb-plg-pagination{height:24px;display:inline-block}.jdb-plg-pagination .total-box{float:left;margin-right:30px;height:24px;line-height:24px;font-size:12px;color:#323233}.jdb-plg-pagination .operate-box{float:right}.jdb-plg-pagination .operate-box .jdb-plg-pagination-options{float:left;margin-right:30px}.jdb-plg-pagination .operate-box .base-pagination{float:left;overflow:hidden}.jdb-plg-pagination .operate-box .base-pagination li{position:relative;float:left;margin-right:5px;padding:0 5px;height:24px;min-width:24px;line-height:24px;text-align:center;border-radius:2px;color:#323233;border:1px solid #afb0b3;cursor:pointer;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;background:#fff}.jdb-plg-pagination .operate-box .base-pagination .disabled{background:#f0f1f5;color:#bfc0c4;border:1px solid #e1e2e6}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward{border:none;padding:0;background:0 0}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward .icon-pagination-jump-next,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward .icon-pagination-jump-prev,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward .icon-pagination-jump-next,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward .icon-pagination-jump-prev{color:#3f69f2;display:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward:hover .icon-pagination-jump-prev{display:block}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-forward:hover .icon-pagination-more{display:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward:hover .icon-pagination-jump-next{display:block}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-backward:hover .icon-pagination-more{display:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-first:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-last:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-next:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-pager:hover,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-prev:hover{color:#4d76ff;border:1px solid #4d76ff}.jdb-plg-pagination .operate-box .base-pagination .active,.jdb-plg-pagination .operate-box .base-pagination .active:hover{background:#4d76ff;color:#fff;border:none}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-next,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-prev{padding:0}.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-next .jdbIcon,.jdb-plg-pagination .operate-box .base-pagination .jdb-plg-pagination-prev .jdbIcon{font-size:22px}.jdb-plg-pagination .operate-box .simple-pagination{float:left;overflow:hidden}.jdb-plg-pagination .operate-box .simple-pagination .center-box,.jdb-plg-pagination .operate-box .simple-pagination .left-box,.jdb-plg-pagination .operate-box .simple-pagination .right-box{overflow:hidden;float:left}.jdb-plg-pagination .operate-box .simple-pagination .center-box span,.jdb-plg-pagination .operate-box .simple-pagination .left-box span,.jdb-plg-pagination .operate-box .simple-pagination .right-box span{float:left;line-height:24px;text-align:center;height:24px;width:24px}.jdb-plg-pagination .operate-box .simple-pagination .center-box span:first-child,.jdb-plg-pagination .operate-box .simple-pagination .left-box span:first-child,.jdb-plg-pagination .operate-box .simple-pagination .right-box span:first-child{margin-right:1px}.jdb-plg-pagination .operate-box .simple-pagination .center-box .disabled,.jdb-plg-pagination .operate-box .simple-pagination .left-box .disabled,.jdb-plg-pagination .operate-box .simple-pagination .right-box .disabled{color:#d7d8db}.jdb-plg-pagination .operate-box .simple-pagination .center-box span:hover,.jdb-plg-pagination .operate-box .simple-pagination .left-box span:hover,.jdb-plg-pagination .operate-box .simple-pagination .right-box span:hover{color:#4d76ff}.jdb-plg-pagination .operate-box .simple-pagination .center-box{width:50px;height:24px;line-height:24px;text-align:center}.jdb-plg-pagination .operate-box .quick-jumper{float:left;margin-left:20px}.jdb-plg-pagination .operate-box .quick-jumper button,.jdb-plg-pagination .operate-box .quick-jumper input{text-align:center;width:40px;height:24px;border-radius:3px;border:1px solid #e1e2e6;outline:0}.jdb-plg-pagination .operate-box .quick-jumper button{margin-left:15px;float:right}.jdb-plg-pagination .operate-box .quick-jumper input{ime-mode:disabled}`]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRiLXBsZy1wYWdpbmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZXN0LXVpL2NvcmUvIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvamRiLXBsZy1wYWdpbmF0aW9uL2pkYi1wbGctcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUF3RXZCLE1BQU07Ozs7O0lBNEJKLFlBQ1UsSUFDQTtRQURBLE9BQUUsR0FBRixFQUFFO1FBQ0YsY0FBUyxHQUFULFNBQVM7d0JBNUJSLENBQUM7eUJBQ0EsRUFBRTsyQkFDQSxDQUFDOzBCQUNGLFFBQVE7MEJBQ1IsS0FBSzs2QkFDRixLQUFLOzhCQUNKLEtBQUs7cUJBQ2QsRUFBRTs7O3dCQUdDO1lBQ1QsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDNUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDNUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDNUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDNUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7U0FDN0I7MEJBSVksS0FBSztpQ0FFa0MsSUFBSSxZQUFZLEVBQUU7a0NBQ2pCLElBQUksWUFBWSxFQUFFO0tBTWxFOzs7OztRQUlELFlBQVksQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7SUFHMUMsSUFBSSxZQUFZO1FBQ2QsT0FB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Q29tcG9uZW50LFxuICBPbkluaXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1qZGItcGxnLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJqZGItcGxnLXBhZ2luYXRpb25cIj5cbiAgICA8IS0tIOaAu+adoeaVsCAtLT5cbiAgICA8c3BhbiAqbmdJZj1cIl9zaG93VG90YWxcIiBjbGFzcz1cInRvdGFsLWJveFwiPlxuICAgICAg5YWxe3tfdG90YWx9feadoVxuICAgIDwvc3Bhbj5cblxuICAgIDxkaXYgY2xhc3M9XCJvcGVyYXRlLWJveFwiPlxuICAgICAgICA8IS0tIOadoeaVsOWIh+aNoiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImpkYi1wbGctcGFnaW5hdGlvbi1vcHRpb25zXCIgKm5nSWY9XCJfc2hvd1BhZ2VTaXplXCI+XG4gICAgICAgICAgICA8YXBwLWpkYi1wbGctc2VsZWN0IChuZ01vZGVsQ2hhbmdlKT1cImRhdGFDaGFuZ2UoZmFsc2UsJGV2ZW50KVwiIFtqZGJTaXplXT1cIidzbWFsbCdcIiBbamRiV2lkdGhdPVwiJzkwcHgnXCIgWyhuZ01vZGVsKV09XCJfcGFnZVNpemVcIiBbamRiU2VsZWN0TGlzdF09XCJfb3B0aW9uc1wiPjwvYXBwLWpkYi1wbGctc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSDln7rmnKzliIbpobXmoLflvI8gLS0+XG4gICAgICAgIDx1bCAqbmdJZj1cIiFfamRiU2ltcGxlXCIgY2xhc3M9XCJiYXNlLXBhZ2luYXRpb25cIj5cbiAgICAgICAgICAgIDwhLS0g5LiK5LiA6aG15oyJ6ZKuIC0tPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLXByZXZcIiB0aXRsZT1cIuS4iuS4gOmhtVwiIFtuZ0NsYXNzXT1cInsnZGlzYWJsZWQnOl9jdXJyZW50PT09X2ZpcnN0SW5kZXh9XCIgKGNsaWNrKT1cImRhdGFDaGFuZ2UodHJ1ZSxfY3VycmVudC0xKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiamRiSWNvbiBpY29uLXBhZ2luYXRpb24tcHJldlwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8IS0tIOmmlumhteaMiemSriAtLT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImpkYi1wbGctcGFnaW5hdGlvbi1maXJzdFwiIHRpdGxlPVwi6aaW6aG1XCIgW25nQ2xhc3NdPVwieydhY3RpdmUnOl9jdXJyZW50PT09X2ZpcnN0SW5kZXh9XCIgKGNsaWNrKT1cImRhdGFDaGFuZ2UodHJ1ZSxfZmlyc3RJbmRleClcIj5cbiAgICAgICAgICAgICAgICB7e19maXJzdEluZGV4fX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8IS0tIOecgeeVpeWPtyAtLT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImpkYi1wbGctcGFnaW5hdGlvbi1mb3J3YXJkXCIgKm5nSWY9XCIoX2xhc3RJbmRleCA+OSkmJihfY3VycmVudC00Pl9maXJzdEluZGV4KVwiIChjbGljayk9XCJqdW1wQmVmb3JlKF9wYWdlU2l6ZSlcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1tb3JlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1wYWdpbmF0aW9uLWp1bXAtcHJldlwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8IS0tIOaMiemSriAtLT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImpkYi1wbGctcGFnaW5hdGlvbi1wYWdlclwiICpuZ0Zvcj1cImxldCBwYWdlIG9mIHBhZ2VzXCIgW25nQ2xhc3NdPVwieydhY3RpdmUnOl9jdXJyZW50PT09cGFnZS5pbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLHBhZ2UuaW5kZXgpXCI+XG4gICAgICAgICAgICAgICAge3twYWdlLmluZGV4fX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8IS0tIOecgeeVpeWPtyAtLT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImpkYi1wbGctcGFnaW5hdGlvbi1iYWNrd2FyZFwiICpuZ0lmPVwiKF9sYXN0SW5kZXggPjkpJiYoX2N1cnJlbnQrNDxfbGFzdEluZGV4KVwiIChjbGljayk9XCJqdW1wQWZ0ZXIoX3BhZ2VTaXplKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1wYWdpbmF0aW9uLW1vcmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBhZ2luYXRpb24tanVtcC1uZXh0XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS0g5bC+6aG15oyJ6ZKuIC0tPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiamRiLXBsZy1wYWdpbmF0aW9uLWxhc3RcIiAqbmdJZj1cIihfbGFzdEluZGV4PjApJiYoX2xhc3RJbmRleCE9PV9maXJzdEluZGV4KVwiIHRpdGxlPVwi5bC+6aG1XCIgW25nQ2xhc3NdPVwieydhY3RpdmUnOl9jdXJyZW50PT09X2xhc3RJbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLF9sYXN0SW5kZXgpXCI+XG4gICAgICAgICAgICAgICAge3tfbGFzdEluZGV4fX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8IS0tIOS4i+S4gOmhteaMiemSriAtLT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImpkYi1wbGctcGFnaW5hdGlvbi1uZXh0XCIgdGl0bGU9XCLkuIvkuIDpobVcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzpfY3VycmVudD09PV9sYXN0SW5kZXh9XCIgKGNsaWNrKT1cImRhdGFDaGFuZ2UodHJ1ZSxfY3VycmVudCsxKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiamRiSWNvbiBpY29uLXBhZ2luYXRpb24tbmV4dFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDwhLS0g566A5Y2V5YiG6aG15qC35byPIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlLXBhZ2luYXRpb25cIiAqbmdJZj1cIl9qZGJTaW1wbGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJveFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1wYWdpbmF0aW9uLWZpcnN0XCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6X2N1cnJlbnQ9PT1fZmlyc3RJbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLF9maXJzdEluZGV4KVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1wcmV2XCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6X2N1cnJlbnQ9PT1fZmlyc3RJbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLF9jdXJyZW50LTEpXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyLWJveFwiPlxuICAgICAgICAgICAgICAgIHt7X2N1cnJlbnR9fSAvIHt7X2xhc3RJbmRleH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1ib3hcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tcGFnaW5hdGlvbi1uZXh0XCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6X2N1cnJlbnQ9PT1fbGFzdEluZGV4fVwiIChjbGljayk9XCJkYXRhQ2hhbmdlKHRydWUsX2N1cnJlbnQrMSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBhZ2luYXRpb24tbGFzdFwiIFtuZ0NsYXNzXT1cInsnZGlzYWJsZWQnOl9jdXJyZW50PT09X2xhc3RJbmRleH1cIiAoY2xpY2spPVwiZGF0YUNoYW5nZSh0cnVlLF9sYXN0SW5kZXgpXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIOW/q+mAn+i3s+i9rCAtLT5cbiAgICAgICAgPGRpdiAqbmdJZj1cIl9zaG93UXVpY2tKdW1wXCIgY2xhc3M9XCJxdWljay1qdW1wZXJcIj5cbiAgICAgICAgICAgIOesrFxuICAgICAgICAgICAgPGlucHV0ICNpbnB1dEp1bXAgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cInF1aWNrSnVtcFBhZ2VcIiAoa2V5dXAuZW50ZXIpPVwicXVpY2tKdW1wKClcIiBhcHBPbmx5TnVtYmVyPVwidHJ1ZVwiPiDpobVcbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInF1aWNrSnVtcCgpXCI+6Lez6L2sPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5qZGItcGxnLXBhZ2luYXRpb257aGVpZ2h0OjI0cHg7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmpkYi1wbGctcGFnaW5hdGlvbiAudG90YWwtYm94e2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjMwcHg7aGVpZ2h0OjI0cHg7bGluZS1oZWlnaHQ6MjRweDtmb250LXNpemU6MTJweDtjb2xvcjojMzIzMjMzfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94e2Zsb2F0OnJpZ2h0fS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5qZGItcGxnLXBhZ2luYXRpb24tb3B0aW9uc3tmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDozMHB4fS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb257ZmxvYXQ6bGVmdDtvdmVyZmxvdzpoaWRkZW59LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiBsaXtwb3NpdGlvbjpyZWxhdGl2ZTtmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDo1cHg7cGFkZGluZzowIDVweDtoZWlnaHQ6MjRweDttaW4td2lkdGg6MjRweDtsaW5lLWhlaWdodDoyNHB4O3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1yYWRpdXM6MnB4O2NvbG9yOiMzMjMyMzM7Ym9yZGVyOjFweCBzb2xpZCAjYWZiMGIzO2N1cnNvcjpwb2ludGVyOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtiYWNrZ3JvdW5kOiNmZmZ9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuZGlzYWJsZWR7YmFja2dyb3VuZDojZjBmMWY1O2NvbG9yOiNiZmMwYzQ7Ym9yZGVyOjFweCBzb2xpZCAjZTFlMmU2fS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1iYWNrd2FyZCwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tZm9yd2FyZHtib3JkZXI6bm9uZTtwYWRkaW5nOjA7YmFja2dyb3VuZDowIDB9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWJhY2t3YXJkIC5pY29uLXBhZ2luYXRpb24tanVtcC1uZXh0LC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1iYWNrd2FyZCAuaWNvbi1wYWdpbmF0aW9uLWp1bXAtcHJldiwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tZm9yd2FyZCAuaWNvbi1wYWdpbmF0aW9uLWp1bXAtbmV4dCwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tZm9yd2FyZCAuaWNvbi1wYWdpbmF0aW9uLWp1bXAtcHJldntjb2xvcjojM2Y2OWYyO2Rpc3BsYXk6bm9uZX0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tZm9yd2FyZDpob3ZlciAuaWNvbi1wYWdpbmF0aW9uLWp1bXAtcHJldntkaXNwbGF5OmJsb2NrfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1mb3J3YXJkOmhvdmVyIC5pY29uLXBhZ2luYXRpb24tbW9yZXtkaXNwbGF5Om5vbmV9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWJhY2t3YXJkOmhvdmVyIC5pY29uLXBhZ2luYXRpb24tanVtcC1uZXh0e2Rpc3BsYXk6YmxvY2t9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWJhY2t3YXJkOmhvdmVyIC5pY29uLXBhZ2luYXRpb24tbW9yZXtkaXNwbGF5Om5vbmV9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuamRiLXBsZy1wYWdpbmF0aW9uLWZpcnN0OmhvdmVyLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1sYXN0OmhvdmVyLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1uZXh0OmhvdmVyLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1wYWdlcjpob3ZlciwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tcHJldjpob3Zlcntjb2xvcjojNGQ3NmZmO2JvcmRlcjoxcHggc29saWQgIzRkNzZmZn0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5hY3RpdmUsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLmJhc2UtcGFnaW5hdGlvbiAuYWN0aXZlOmhvdmVye2JhY2tncm91bmQ6IzRkNzZmZjtjb2xvcjojZmZmO2JvcmRlcjpub25lfS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1uZXh0LC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5iYXNlLXBhZ2luYXRpb24gLmpkYi1wbGctcGFnaW5hdGlvbi1wcmV2e3BhZGRpbmc6MH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tbmV4dCAuamRiSWNvbiwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuYmFzZS1wYWdpbmF0aW9uIC5qZGItcGxnLXBhZ2luYXRpb24tcHJldiAuamRiSWNvbntmb250LXNpemU6MjJweH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb257ZmxvYXQ6bGVmdDtvdmVyZmxvdzpoaWRkZW59LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5jZW50ZXItYm94LC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAubGVmdC1ib3gsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5yaWdodC1ib3h7b3ZlcmZsb3c6aGlkZGVuO2Zsb2F0OmxlZnR9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5jZW50ZXItYm94IHNwYW4sLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5sZWZ0LWJveCBzcGFuLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAucmlnaHQtYm94IHNwYW57ZmxvYXQ6bGVmdDtsaW5lLWhlaWdodDoyNHB4O3RleHQtYWxpZ246Y2VudGVyO2hlaWdodDoyNHB4O3dpZHRoOjI0cHh9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5jZW50ZXItYm94IHNwYW46Zmlyc3QtY2hpbGQsLmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5sZWZ0LWJveCBzcGFuOmZpcnN0LWNoaWxkLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAucmlnaHQtYm94IHNwYW46Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjFweH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLmNlbnRlci1ib3ggLmRpc2FibGVkLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAubGVmdC1ib3ggLmRpc2FibGVkLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAucmlnaHQtYm94IC5kaXNhYmxlZHtjb2xvcjojZDdkOGRifS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAuY2VudGVyLWJveCBzcGFuOmhvdmVyLC5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5zaW1wbGUtcGFnaW5hdGlvbiAubGVmdC1ib3ggc3Bhbjpob3ZlciwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAuc2ltcGxlLXBhZ2luYXRpb24gLnJpZ2h0LWJveCBzcGFuOmhvdmVye2NvbG9yOiM0ZDc2ZmZ9LmpkYi1wbGctcGFnaW5hdGlvbiAub3BlcmF0ZS1ib3ggLnNpbXBsZS1wYWdpbmF0aW9uIC5jZW50ZXItYm94e3dpZHRoOjUwcHg7aGVpZ2h0OjI0cHg7bGluZS1oZWlnaHQ6MjRweDt0ZXh0LWFsaWduOmNlbnRlcn0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAucXVpY2stanVtcGVye2Zsb2F0OmxlZnQ7bWFyZ2luLWxlZnQ6MjBweH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAucXVpY2stanVtcGVyIGJ1dHRvbiwuamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAucXVpY2stanVtcGVyIGlucHV0e3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjQwcHg7aGVpZ2h0OjI0cHg7Ym9yZGVyLXJhZGl1czozcHg7Ym9yZGVyOjFweCBzb2xpZCAjZTFlMmU2O291dGxpbmU6MH0uamRiLXBsZy1wYWdpbmF0aW9uIC5vcGVyYXRlLWJveCAucXVpY2stanVtcGVyIGJ1dHRvbnttYXJnaW4tbGVmdDoxNXB4O2Zsb2F0OnJpZ2h0fS5qZGItcGxnLXBhZ2luYXRpb24gLm9wZXJhdGUtYm94IC5xdWljay1qdW1wZXIgaW5wdXR7aW1lLW1vZGU6ZGlzYWJsZWR9YF1cbn0pXG5leHBvcnQgY2xhc3MgSmRiUGxnUGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gIF90b3RhbDogbnVtYmVyOyAvLyDmgLvmnaHmlbBcbiAgX2N1cnJlbnQgPSAxOyAvLyDlvZPliY3pobXnoIHpu5jorqTkuLoxXG4gIF9wYWdlU2l6ZSA9IDEwOyAvLyDpu5jorqTmnaHmlbBcbiAgX2ZpcnN0SW5kZXggPSAxOyAgLy8g6aaW6aG16buY6K6k5Li6MVxuICBfbGFzdEluZGV4ID0gSW5maW5pdHk7ICAvLyDlsL7pobXpu5jorqTkuLrml6DnqbdcbiAgX3Nob3dUb3RhbCA9IGZhbHNlOyAgLy8g5piv5ZCm5bGV56S65oC75pWw77yM6buY6K6k5LiN5bGV56S6XG4gIF9zaG93UGFnZVNpemUgPSBmYWxzZTsgLy8g5piv5ZCm5bGV56S66aG156CB5YiH5o2i77yM6buY6K6k5LiN5bGV56S6XG4gIF9zaG93UXVpY2tKdW1wID0gZmFsc2U7IC8vIOaYr+WQpuWxleekuuW/q+mAn+i3s+i9rO+8jOm7mOiupOS4jeWxleekulxuICBwYWdlcyA9IFtdOyAgLy8g6aG156CB5pWw57uEXG4gIC8vIF9vcHRpb25zID0gWzEwLCAyMCwgMzAsIDQwLCA1MF07IC8vIHNlbGVjdOm7mOiupOaVsOe7hFxuICAvLyBzZWxlY3Tpu5jorqTmlbDnu4RcbiAgX29wdGlvbnMgPSBbXG4gICAgeyB2YWx1ZTogMTAsIHRleHQ6ICcxMOadoS/pobUnIH0sXG4gICAgeyB2YWx1ZTogMjAsIHRleHQ6ICcyMOadoS/pobUnIH0sXG4gICAgeyB2YWx1ZTogMzAsIHRleHQ6ICczMOadoS/pobUnIH0sXG4gICAgeyB2YWx1ZTogNDAsIHRleHQ6ICc0MOadoS/pobUnIH0sXG4gICAgeyB2YWx1ZTogNTAsIHRleHQ6ICc1MOadoS/pobUnIH1cbiAgXTtcblxuICBxdWlja0p1bXBQYWdlOiBhbnk7IC8vIOW/q+mAn+i3s+i9rOmhteeggVxuICBoaXNRaWN1a1BhZ2U6IGFueTsgIC8vIOWOhuWPsuW/q+mAn+i3s+i9rOmhteeggVxuICBfamRiU2ltcGxlID0gZmFsc2U7IC8vIOaYr+WQpuS4uueugOWNleWIhumhte+8jOm7mOiupOS4uuWfuuacrOWIhumhtVxuXG4gIEBPdXRwdXQoKSBqZGJQYWdlU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7ICAvLyDmnaHmlbDliIfmjaIgIOWRveWQjeS4juWxnuaAp+ebuOWFs1xuICBAT3V0cHV0KCkgamRiUGFnZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgIC8vIOmhteeggeWIh+aNolxuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0SnVtcCcpIHByaXZhdGUgaW5wdXRKdW1wOiBFbGVtZW50UmVmO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICAvLyDmmK/lkKblsZXnpLrmgLvmlbDmoIfnrb5cbiAgQElucHV0KClcbiAgc2V0IGpkYlNob3dUb3RhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dUb3RhbCA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBqZGJTaG93VG90YWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dUb3RhbDtcbiAgfVxuXG4gIC8vIOaVsOaNruaAu+aVsFxuICBASW5wdXQoKVxuICBzZXQgamRiVG90YWwodmFsdWU6IG51bWJlcikge1xuICAgIC8vIOiLpeS8oOWFpeWAvOWSjOW9k+WJjXRvdGFs5LiA6Ie077yM5YiZ5LiN6Kem5Y+R5pON5L2cXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLl90b3RhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl90b3RhbCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0UGFnZU5vKCk7XG4gIH1cblxuICBnZXQgamRiVG90YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWw7XG4gIH1cblxuICAvLyBqZGJQYWdlSW5kZXjkuI5fY3VycmVudOWFs+iBlO+8jOihqOekuumhteeggVxuICBASW5wdXQoKVxuICBzZXQgamRiUGFnZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlID4gdGhpcy5fbGFzdEluZGV4IHx8IHZhbHVlIDwgdGhpcy5fZmlyc3RJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9jdXJyZW50ID0gTnVtYmVyKHZhbHVlKTtcbiAgICB0aGlzLnNldFBhZ2VObygpO1xuICB9XG5cbiAgZ2V0IGpkYlBhZ2VJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50O1xuICB9XG5cbiAgLy8g5piv5ZCm5bGV56S65YiH5o2i5p2h5pWwc2VsZWN0XG4gIEBJbnB1dCgpXG4gIHNldCBqZGJTaG93UGFnZVNpemUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93UGFnZVNpemUgPSB0aGlzLnRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgamRiU2hvd1BhZ2VTaXplKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93UGFnZVNpemU7XG4gIH1cblxuICAvLyDpu5jorqTmnaHmlbBcbiAgQElucHV0KClcbiAgc2V0IGpkYlBhZ2VTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX3BhZ2VTaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BhZ2VTaXplID0gdmFsdWU7XG4gICAgdGhpcy5zZXRQYWdlTm8oKTtcbiAgfVxuXG4gIGdldCBqZGJQYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuXG4gIC8vIOm7mOiupOS4i+aLiemAieaLqeadoeaVsOaVsOe7hFxuICBASW5wdXQoKVxuICBzZXQgamRiU2l6ZU9wdGlvbnModmFsdWUpIHtcbiAgICAvLyDoi6XkvKDlhaXlgLzlkozlvZPliY10b3RhbOS4gOiHtO+8jOWImeS4jeinpuWPkeaTjeS9nFxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fb3B0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOWIpOaWreaYr+WQpuS4uuaVsOe7hFxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICBjb25zdCBvcHRpb25zQXJyID0gW107XG4gICAgICB2YWx1ZS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgdmFsdWU6IGVsZW0sXG4gICAgICAgICAgdGV4dDogZWxlbSArICfmnaEv6aG1J1xuICAgICAgICB9O1xuICAgICAgICBvcHRpb25zQXJyLnB1c2gob2JqKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnNBcnI7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGpkYlNpemVPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgLy8g5piv5ZCm5bGV56S65b+r6YCf6Lez6L2s6aG16Z2iXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJTaG93UXVpY2tKdW1wKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1F1aWNrSnVtcCA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBqZGJTaG93UXVpY2tKdW1wKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93UXVpY2tKdW1wO1xuICB9XG5cbiAgLy8g5YiG6aG15qC35byPXG4gIEBJbnB1dCgpXG4gIHNldCBqZGJTaW1wbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9qZGJTaW1wbGUgPSB0aGlzLnRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgamRiU2ltcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmpkYlNpbXBsZTtcbiAgfVxuXG4gIC8vIOWIm+W7uumhteeggVxuICBzZXRQYWdlTm8oKSB7XG4gICAgLy8g5ZCR5LiK5Y+W5pW0XG4gICAgdGhpcy5fbGFzdEluZGV4ID0gTWF0aC5jZWlsKHRoaXMuX3RvdGFsIC8gdGhpcy5fcGFnZVNpemUpO1xuICAgIC8vIOWmguaenOW9k+WJjemhteeggeWkp+S6juWwvumhte+8jOWImeetieS6juWwvumhtVxuICAgIC8vIGlmICh0aGlzLl9jdXJyZW50ID4gdGhpcy5fbGFzdEluZGV4KSB7XG4gICAgLy8gICB0aGlzLmpkYlBhZ2VJbmRleCA9IHRoaXMuX2xhc3RJbmRleDtcbiAgICAvLyAgIHRoaXMuamRiUGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5qZGJQYWdlSW5kZXgpO1xuICAgIC8vIH1cblxuICAgIGNvbnN0IHRtcFBhZ2VzID0gW107XG5cbiAgICBpZiAodGhpcy5fbGFzdEluZGV4IDw9IDkpIHtcbiAgICAgIC8vIOiLpeaAu+mhteaVsOS4jei2hei/hznvvIzliJnlhajpg6jlsZXnpLrlnKjpobXpnaLkuIpcbiAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHRoaXMuX2xhc3RJbmRleCAtIDE7IGkrKykge1xuICAgICAgICB0bXBQYWdlcy5wdXNoKHtcbiAgICAgICAgICBpbmRleDogaVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY3VycmVudCA9ICt0aGlzLl9jdXJyZW50O1xuICAgICAgbGV0IGxlZnQgPSBNYXRoLm1heCgyLCBjdXJyZW50IC0gMik7XG4gICAgICBsZXQgcmlnaHQgPSBNYXRoLm1pbihjdXJyZW50ICsgMiwgdGhpcy5fbGFzdEluZGV4IC0gMSk7XG5cbiAgICAgIC8vIOeJueauiuWkhOeQhuato+aVsOesrOS6lOS4quaVsOWSjOWAkuaVsOesrOS6lOS4quaVsFxuICAgICAgaWYgKGN1cnJlbnQgPT09IDUpIHtcbiAgICAgICAgbGVmdCA9IDI7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT09IHRoaXMuX2xhc3RJbmRleCAtIDQpIHtcbiAgICAgICAgcmlnaHQgPSB0aGlzLl9sYXN0SW5kZXggLSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudCAtIDEgPD0gMykge1xuICAgICAgICByaWdodCA9IDc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9sYXN0SW5kZXggLSBjdXJyZW50IDw9IDMpIHtcbiAgICAgICAgbGVmdCA9IHRoaXMuX2xhc3RJbmRleCAtIDY7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgdG1wUGFnZXMucHVzaCh7IGluZGV4OiBpIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucGFnZXMgPSB0bXBQYWdlcztcbiAgfVxuXG4gIC8vIHN0YXR1c+S4unRydWXooajnpLrpobXnoIHliIfmjaLvvIxudW3ooajnpLrpobXnoIHvvIxmYWxzZeihqOekuuadoeaVsOWIh+aNou+8jG51beihqOekuuadoeaVsFxuICBkYXRhQ2hhbmdlKHN0YXR1czogYm9vbGVhbiwgbnVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICBpZiAobnVtID09PSB0aGlzLl9maXJzdEluZGV4IC0gMSB8fCBudW0gPT09IHRoaXMuX2xhc3RJbmRleCArIDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8g5riF56m66L6T5YWl5qGG5YaF5a65XG4gICAgICB0aGlzLnF1aWNrSnVtcFBhZ2UgPSAnJztcbiAgICAgIHRoaXMuamRiUGFnZUluZGV4ID0gbnVtO1xuICAgICAgdGhpcy5qZGJQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLmpkYlBhZ2VJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOa4heepuui+k+WFpeahhuWGheWuuVxuICAgICAgdGhpcy5xdWlja0p1bXBQYWdlID0gJyc7XG4gICAgICB0aGlzLmpkYlBhZ2VTaXplID0gbnVtO1xuICAgICAgdGhpcy5qZGJQYWdlU2l6ZUNoYW5nZS5lbWl0KG51bSk7XG5cbiAgICAgIC8vIOWIh+aNoumhteaVsOS5i+WQjumcgOimgeWwhumhteeggemHjee9ruS4ujFcbiAgICAgIHRoaXMuamRiUGFnZUluZGV4ID0gMTtcbiAgICAgIHRoaXMuamRiUGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5qZGJQYWdlSW5kZXgpO1xuICAgICAgdGhpcy5zZXRQYWdlTm8oKTtcbiAgICB9XG4gICAgLy8gdGhpcy5zZXRQYWdlTm8oKTtcbiAgfVxuXG4gIC8vIOeCueWHu+i3s+i9rOaMiemSruW/q+mAn+i3s+i9rFxuICBxdWlja0p1bXAoKSB7XG4gICAgLy8g6Iul5piv6L6T5YWl55qE6aG156CB5aSn5LqO5pyA5ZCO5LiA6aG16aG156CB77yM5Y2z6LaF5Ye66IyD5Zu05LiN5a2Y5Zyo77yM5YiZ5riF56m66aG156CB77yM5bm25L2/6L6T5YWl5qGG6I635Y+W54Sm54K5XG4gICAgaWYgKHRoaXMucXVpY2tKdW1wUGFnZSA+IHRoaXMuX2xhc3RJbmRleCkge1xuICAgICAgdGhpcy5pbnB1dEp1bXAubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgdGhpcy5xdWlja0p1bXBQYWdlID0gJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g6Iul6L6T5YWl5Li656m677yM5YiZ5LiN6IO96Lez6L2sXG4gICAgaWYgKCF0aGlzLnF1aWNrSnVtcFBhZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmpkYlBhZ2VJbmRleCA9IHRoaXMucXVpY2tKdW1wUGFnZTtcbiAgICB0aGlzLmpkYlBhZ2VJbmRleENoYW5nZS5lbWl0KHRoaXMuamRiUGFnZUluZGV4KTtcbiAgfVxuXG4gIC8vIOeCueWHu+W3pueureWktCjkuLrku4DkuYjkvb/nlKjmnaHmlbDpmaTku6Uy5ZGiKVxuICBqdW1wQmVmb3JlKHBhZ2VTaXplKSB7XG4gICAgdGhpcy5kYXRhQ2hhbmdlKHRydWUsIHRoaXMuX2N1cnJlbnQgLSBNYXRoLnJvdW5kKHBhZ2VTaXplIC8gMikpO1xuICB9XG5cbiAgLy8g54K55Ye75Y+z566t5aS0XG4gIGp1bXBBZnRlcihwYWdlU2l6ZSkge1xuICAgIHRoaXMuZGF0YUNoYW5nZSh0cnVlLCB0aGlzLl9jdXJyZW50ICsgTWF0aC5yb3VuZChwYWdlU2l6ZSAvIDIpKTtcbiAgfVxuXG4gIC8vIOi9rOaNouS4umJvb2xlYW4s5Y2z5a6e546w5pyJ6L+Z5Liq5a2X5q615bCx6K6k5Li65Li6dHJ1ZSzmsqHmnInljbPkuLpmYWxzZVxuICB0b0Jvb2xlYW4odmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICcnIHx8ICh2YWx1ZSAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gIH1cblxuICAvLyDmoKHpqozmmK/lkKbkuLrnuq/mlbDlrZdcbiAgaXNOdW1iZXIob2JqKSB7XG4gICAgY29uc3QgcmVnID0gL15bMC05XSokLztcbiAgICByZXR1cm4gcmVnLnRlc3Qob2JqKTtcbiAgfVxuXG59XG5cbiJdfQ==