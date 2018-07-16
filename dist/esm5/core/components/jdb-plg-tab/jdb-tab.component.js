/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Injector, Output, EventEmitter, } from '@angular/core';
var JdbTabComponent = /** @class */ (function () {
    function JdbTabComponent(componentFactoryResolver, _injector) {
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
    JdbTabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    /**
     *
     * @param {?} ChildComponent
     * @param {?} attrs
     * @param {?} title
     * @param {?=} comId
     * @param {?=} isCloseFlag
     * @return {?}
     */
    JdbTabComponent.prototype.addItem = /**
     *
     * @param {?} ChildComponent
     * @param {?} attrs
     * @param {?} title
     * @param {?=} comId
     * @param {?=} isCloseFlag
     * @return {?}
     */
    function (ChildComponent, attrs, title, comId, isCloseFlag) {
        var _this = this;
        if (comId === void 0) { comId = ""; }
        if (isCloseFlag === void 0) { isCloseFlag = false; }
        if (comId && this.tabIdComMap[comId]) {
            var /** @type {?} */ com = this.tabIdComMap[comId];
            this.tabChange(com.index);
            return;
        }
        var /** @type {?} */ childComponent = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
        var /** @type {?} */ comInstance = this.target.createComponent(childComponent);
        var /** @type {?} */ keys = Object.keys(attrs);
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
        this.tabSubs = comInstance.instance['onTopComMsg'] = new EventEmitter();
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
    /**
     * @param {?} tabIndex
     * @return {?}
     */
    JdbTabComponent.prototype.setOneComHide = /**
     * @param {?} tabIndex
     * @return {?}
     */
    function (tabIndex) {
        this.tabComs[tabIndex].location.nativeElement.style.display = "none";
    };
    /**
     * @param {?} tabIndex
     * @return {?}
     */
    JdbTabComponent.prototype.setOneComShow = /**
     * @param {?} tabIndex
     * @return {?}
     */
    function (tabIndex) {
        this.tabComs[tabIndex].location.nativeElement.style.display = "block";
    };
    /**
     * @param {?} index
     * @return {?}
     */
    JdbTabComponent.prototype.tabChange = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
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
    /**
     * @param {?} index
     * @return {?}
     */
    JdbTabComponent.prototype.setOneTabShow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.tabChange(index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    JdbTabComponent.prototype.removeTab = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
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
        var /** @type {?} */ tabIdComMap = this.tabIdComMap;
        for (var /** @type {?} */ key in tabIdComMap) {
            if (tabIdComMap[key].index == index) {
                delete tabIdComMap[key];
                break;
            }
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    JdbTabComponent.prototype.removeTabById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var /** @type {?} */ tabIdComMap = this.tabIdComMap;
        for (var /** @type {?} */ key in tabIdComMap) {
            if (key == id) {
                this.removeTab(tabIdComMap[key]['index']);
                break;
            }
        }
    };
    /**
     * @return {?}
     */
    JdbTabComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.target) {
            // this.target.destroy();
            this.target.clear();
        }
    };
    JdbTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jdb-tab',
                    template: "<div class=\"tab-wraper\">\n    <div class=\"tab-nav-wraper\">\n        <div class=\"tab-item\" *ngFor=\"let item of items;let i = index;\" [ngClass]=\"{'tab-selected':i == curTabIndex}\" title='{{item.title}}'>\n            <div (click)=\"tabChange(i)\" class=\"tab-text\"> {{item.title}}</div>\n            <span class=\"close-btn\" (click)=\"removeTab(i)\" *ngIf=\"i !== 0 && item.isCloseFlag != true\">&times;</span>\n        </div>\n    </div>\n    <div class=\"tab-content-wraper\">\n        <div #tabContent class=\"place-holder\"></div>\n    </div>\n</div>\n",
                    styles: [".tab-wraper{display:flex;flex-direction:column}.tab-nav-wraper{display:flex}.tab-nav-wraper .tab-item{width:120px;font-size:13px;display:flex;justify-content:center;background:#f0f1f5;border:1px solid #afb0b3;border-bottom:none;margin-right:5px;height:30px;border-radius:2px 2px 0 0;text-align:center;position:relative;cursor:pointer}.tab-nav-wraper .tab-item .tab-text{color:#7d7e80;white-space:nowrap;overflow:hidden;vertical-align:middle;text-overflow:ellipsis;padding:5px 20px 0}.tab-nav-wraper .tab-item.tab-selected{background:#fff;border:none;border-top:3px solid #3f69f2}.tab-nav-wraper .tab-item.tab-selected .tab-text{color:#3f69f2;padding-top:3px}.tab-nav-wraper .tab-item .close-btn{position:absolute;top:0;right:8px;font-size:24px;cursor:pointer;color:#999;font-weight:100}.tab-content-wraper{box-shadow:1px 1px 1px 1px #afb0b3;background:#fff}.tab-content-wraper .place-holder{width:0;height:0}"]
                },] },
    ];
    /** @nocollapse */
    JdbTabComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
        { type: Injector, },
    ]; };
    JdbTabComponent.propDecorators = {
        "target": [{ type: ViewChild, args: ['tabContent', { read: ViewContainerRef },] },],
        "onTabChange": [{ type: Output },],
        "onTabRemove": [{ type: Output },],
        "onTopComMsg": [{ type: Output },],
    };
    return JdbTabComponent;
}());
export { JdbTabComponent };
function JdbTabComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    JdbTabComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    JdbTabComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    JdbTabComponent.propDecorators;
    /** @type {?} */
    JdbTabComponent.prototype.target;
    /** @type {?} */
    JdbTabComponent.prototype.onTabChange;
    /** @type {?} */
    JdbTabComponent.prototype.onTabRemove;
    /** @type {?} */
    JdbTabComponent.prototype.onTopComMsg;
    /** @type {?} */
    JdbTabComponent.prototype.items;
    /** @type {?} */
    JdbTabComponent.prototype.tabComs;
    /** @type {?} */
    JdbTabComponent.prototype.tabSubs;
    /** @type {?} */
    JdbTabComponent.prototype.curTabIndex;
    /** @type {?} */
    JdbTabComponent.prototype.tabIdComMap;
    /** @type {?} */
    JdbTabComponent.prototype.componentFactoryResolver;
    /** @type {?} */
    JdbTabComponent.prototype._injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRiLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVzdC11aS9jb3JlLyIsInNvdXJjZXMiOlsiY29yZS9jb21wb25lbnRzL2pkYi1wbGctdGFiL2pkYi10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUVULGdCQUFnQixFQUNoQixTQUFTLEVBRVQsd0JBQXdCLEVBQ3hCLFFBQVEsRUFFUixNQUFNLEVBQ04sWUFBWSxHQUVmLE1BQU0sZUFBZSxDQUFDOztJQWdDbkIseUJBQ1ksMEJBQ0Q7UUFEQyw2QkFBd0IsR0FBeEIsd0JBQXdCO1FBQ3pCLGNBQVMsR0FBVCxTQUFTOzJCQVZJLElBQUksWUFBWSxFQUFFOzJCQUNsQixJQUFJLFlBQVksRUFBRTsyQkFDbEIsSUFBSSxZQUFZLEVBQUU7cUJBQ2xDLEVBQUU7dUJBQ0EsRUFBRTsyQkFFRSxDQUFDOzJCQUNELEVBQUU7S0FJWDs7OztJQUdMLGtDQUFROzs7SUFBUjtLQUNDO0lBR0Q7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7SUFDSCxpQ0FBTzs7Ozs7Ozs7O0lBQVAsVUFBUSxjQUFtQixFQUFFLEtBQVUsRUFBRSxLQUFhLEVBQUUsS0FBZSxFQUFFLFdBQTRCO1FBQXJHLGlCQWtDQztRQWxDdUQsc0JBQUEsRUFBQSxVQUFlO1FBQUUsNEJBQUEsRUFBQSxtQkFBNEI7UUFFakcsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQyxxQkFBSSxHQUFHLEdBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixPQUFPO1NBQ1Y7UUFDRCxxQkFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdGLHFC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QUUsd2pCQVdiO29CQUNHLE1BQU0sRUFBRSxDQUFDLDg0QkFBODRCLENBQUM7aUJBQzM1Qjs7OztnQkF6Qkcsd0JBQXdCO2dCQUN4QixRQUFROzs7MkJBNEJQLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Z0NBQ2xELE1BQU07Z0NBQ04sTUFBTTtnQ0FDTixNQUFNOzswQkF0Q1g7O1NBaUNhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXQsIElucHV0LFxuICAgIFZpZXdDb250YWluZXJSZWYsXG4gICAgVmlld0NoaWxkLCBFbGVtZW50UmVmLFxuICAgIENvbXBvbmVudFJlZixcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgSW5qZWN0b3IsXG4gICAgT25EZXN0cm95LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pkYi10YWInLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInRhYi13cmFwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGFiLW5hdi13cmFwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1pdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7bGV0IGkgPSBpbmRleDtcIiBbbmdDbGFzc109XCJ7J3RhYi1zZWxlY3RlZCc6aSA9PSBjdXJUYWJJbmRleH1cIiB0aXRsZT0ne3tpdGVtLnRpdGxlfX0nPlxuICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwidGFiQ2hhbmdlKGkpXCIgY2xhc3M9XCJ0YWItdGV4dFwiPiB7e2l0ZW0udGl0bGV9fTwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZS1idG5cIiAoY2xpY2spPVwicmVtb3ZlVGFiKGkpXCIgKm5nSWY9XCJpICE9PSAwICYmIGl0ZW0uaXNDbG9zZUZsYWcgIT0gdHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudC13cmFwZXJcIj5cbiAgICAgICAgPGRpdiAjdGFiQ29udGVudCBjbGFzcz1cInBsYWNlLWhvbGRlclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2AudGFiLXdyYXBlcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS50YWItbmF2LXdyYXBlcntkaXNwbGF5OmZsZXh9LnRhYi1uYXYtd3JhcGVyIC50YWItaXRlbXt3aWR0aDoxMjBweDtmb250LXNpemU6MTNweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kOiNmMGYxZjU7Ym9yZGVyOjFweCBzb2xpZCAjYWZiMGIzO2JvcmRlci1ib3R0b206bm9uZTttYXJnaW4tcmlnaHQ6NXB4O2hlaWdodDozMHB4O2JvcmRlci1yYWRpdXM6MnB4IDJweCAwIDA7dGV4dC1hbGlnbjpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXJ9LnRhYi1uYXYtd3JhcGVyIC50YWItaXRlbSAudGFiLXRleHR7Y29sb3I6IzdkN2U4MDt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3BhZGRpbmc6NXB4IDIwcHggMH0udGFiLW5hdi13cmFwZXIgLnRhYi1pdGVtLnRhYi1zZWxlY3RlZHtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOm5vbmU7Ym9yZGVyLXRvcDozcHggc29saWQgIzNmNjlmMn0udGFiLW5hdi13cmFwZXIgLnRhYi1pdGVtLnRhYi1zZWxlY3RlZCAudGFiLXRleHR7Y29sb3I6IzNmNjlmMjtwYWRkaW5nLXRvcDozcHh9LnRhYi1uYXYtd3JhcGVyIC50YWItaXRlbSAuY2xvc2UtYnRue3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjhweDtmb250LXNpemU6MjRweDtjdXJzb3I6cG9pbnRlcjtjb2xvcjojOTk5O2ZvbnQtd2VpZ2h0OjEwMH0udGFiLWNvbnRlbnQtd3JhcGVye2JveC1zaGFkb3c6MXB4IDFweCAxcHggMXB4ICNhZmIwYjM7YmFja2dyb3VuZDojZmZmfS50YWItY29udGVudC13cmFwZXIgLnBsYWNlLWhvbGRlcnt3aWR0aDowO2hlaWdodDowfWBdXG59KVxuXG5leHBvcnQgY2xhc3MgSmRiVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIC8vIEBWaWV3Q2hpbGQoJ3RhYkNvbnRlbnQnKSB0YWJDb250ZW50OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3RhYkNvbnRlbnQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgdGFyZ2V0O1xuICAgIEBPdXRwdXQoKSBvblRhYkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25UYWJSZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uVG9wQ29tTXNnID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIGl0ZW1zID0gW107XG4gICAgdGFiQ29tcyA9IFtdO1xuICAgIHRhYlN1YnM6IGFueTtcbiAgICBjdXJUYWJJbmRleCA9IDA7XG4gICAgdGFiSWRDb21NYXAgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgcHVibGljIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgKSB7IH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBDaGlsZENvbXBvbmVudFxuICAgICAqIEBwYXJhbSBhdHRyczp7XG4gICAgICogICAgIHByb3Blcnk6dmFsdWVcbiAgICAgKiBdXG4gICAgICogdGl0bGU6c3RyaW5nXG4gICAgICogaXNDbG9zZUZsYWdcbiAgICAgKi9cbiAgICBhZGRJdGVtKENoaWxkQ29tcG9uZW50OiBhbnksIGF0dHJzOiBhbnksIHRpdGxlOiBzdHJpbmcsIGNvbUlkOiBhbnkgPSBcIlwiLCBpc0Nsb3NlRmxhZzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cbiAgICAgICAgaWYgKGNvbUlkICYmIHRoaXMudGFiSWRDb21NYXBbY29tSWRdKSB7XG4gICAgICAgICAgICBsZXQgY29tOiBhbnkgPSB0aGlzLnRhYklkQ29tTWFwW2NvbUlkXTtcbiAgICAgICAgICAgIHRoaXMudGFiQ2hhbmdlKGNvbS5pbmRleCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDaGlsZENvbXBvbmVudCk7XG4gICAgICAgIHZhciBjb21JbnN0YW5jZSA9IHRoaXMudGFyZ2V0LmNyZWF0ZUNvbXBvbmVudChjaGlsZENvbXBvbmVudCk7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYXR0cnMpO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgaXNDbG9zZUZsYWc6IGlzQ2xvc2VGbGFnXG4gICAgICAgIH0pO1xuICAgICAgICBrZXlzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb21JbnN0YW5jZS5pbnN0YW5jZVt2YWx1ZV0gPSBhdHRyc1t2YWx1ZV07XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhYkNvbXMucHVzaChjb21JbnN0YW5jZSk7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0T25lQ29tSGlkZSh0aGlzLmN1clRhYkluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFiU3VicyA9IGNvbUluc3RhbmNlLmluc3RhbmNlWydvblRvcENvbU1zZyddID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLnRhYlN1YnMuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblRvcENvbU1zZy5lbWl0KHZhbHVlKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jdXJUYWJJbmRleCA9IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKGNvbUlkKSB7XG4gICAgICAgICAgICB0aGlzLnRhYklkQ29tTWFwW2NvbUlkXSA9IHtcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5jdXJUYWJJbmRleCxcbiAgICAgICAgICAgICAgICBjb21JbnN0YW5jZTogY29tSW5zdGFuY2UuaW5zdGFuY2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tSW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRPbmVDb21IaWRlKHRhYkluZGV4KSB7XG4gICAgICAgIHRoaXMudGFiQ29tc1t0YWJJbmRleF0ubG9jYXRpb24ubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRPbmVDb21TaG93KHRhYkluZGV4KSB7XG4gICAgICAgIHRoaXMudGFiQ29tc1t0YWJJbmRleF0ubG9jYXRpb24ubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxuICAgIHRhYkNoYW5nZShpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5jdXJUYWJJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE9uZUNvbUhpZGUodGhpcy5jdXJUYWJJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0T25lQ29tU2hvdyhpbmRleCk7XG4gICAgICAgIHRoaXMuY3VyVGFiSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5vblRhYkNoYW5nZS5lbWl0KGluZGV4KTtcbiAgICAgICAgdGhpcy50YWJDb21zW2luZGV4XS5pbnN0YW5jZS50YWJSZWZyZXNoICYmIHRoaXMudGFiQ29tc1tpbmRleF0uaW5zdGFuY2UudGFiUmVmcmVzaCh7fSk7XG4gICAgICAgIC8vIHRoaXMudGFiQ29tc1tpbmRleF0uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHNldE9uZVRhYlNob3coaW5kZXgpIHtcbiAgICAgICAgdGhpcy50YWJDaGFuZ2UoaW5kZXgpO1xuICAgIH1cblxuICAgIHJlbW92ZVRhYihpbmRleCkge1xuICAgICAgICB0aGlzLnRhYkNvbXNbaW5kZXhdLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy50YWJDb21zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaWYgKGluZGV4IDw9IHRoaXMuY3VyVGFiSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VyVGFiSW5kZXgtLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXJUYWJJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VyVGFiSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0T25lQ29tU2hvdyh0aGlzLmN1clRhYkluZGV4KTtcbiAgICAgICAgdGhpcy5vblRhYlJlbW92ZS5lbWl0KGluZGV4KTtcbiAgICAgICAgbGV0IHRhYklkQ29tTWFwID0gdGhpcy50YWJJZENvbU1hcDtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRhYklkQ29tTWFwKSB7XG4gICAgICAgICAgICBpZiAodGFiSWRDb21NYXBba2V5XS5pbmRleCA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0YWJJZENvbU1hcFtrZXldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZW1vdmVUYWJCeUlkKGlkOnN0cmluZykge1xuICAgICAgICBsZXQgdGFiSWRDb21NYXAgPSB0aGlzLnRhYklkQ29tTWFwO1xuICAgICAgICBmb3IobGV0IGtleSBpbiB0YWJJZENvbU1hcCkge1xuICAgICAgICAgICAgaWYoa2V5ID09IGlkKSAge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVGFiKHRhYklkQ29tTWFwW2tleV1bJ2luZGV4J10pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIHRoaXMudGFyZ2V0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==