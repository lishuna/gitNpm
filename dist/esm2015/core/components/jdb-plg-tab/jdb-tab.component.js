/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Injector, Output, EventEmitter, } from '@angular/core';
export class JdbTabComponent {
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
                template: `<div class="tab-wraper">
    <div class="tab-nav-wraper">
        <div class="tab-item" *ngFor="let item of items;let i = index;" [ngClass]="{'tab-selected':i == curTabIndex}" title='{{item.title}}'>
            <div (click)="tabChange(i)" class="tab-text"> {{item.title}}</div>
            <span class="close-btn" (click)="removeTab(i)" *ngIf="i !== 0 && item.isCloseFlag != true">&times;</span>
        </div>
    </div>
    <div class="tab-content-wraper">
        <div #tabContent class="place-holder"></div>
    </div>
</div>
`,
                styles: [`.tab-wraper{display:flex;flex-direction:column}.tab-nav-wraper{display:flex}.tab-nav-wraper .tab-item{width:120px;font-size:13px;display:flex;justify-content:center;background:#f0f1f5;border:1px solid #afb0b3;border-bottom:none;margin-right:5px;height:30px;border-radius:2px 2px 0 0;text-align:center;position:relative;cursor:pointer}.tab-nav-wraper .tab-item .tab-text{color:#7d7e80;white-space:nowrap;overflow:hidden;vertical-align:middle;text-overflow:ellipsis;padding:5px 20px 0}.tab-nav-wraper .tab-item.tab-selected{background:#fff;border:none;border-top:3px solid #3f69f2}.tab-nav-wraper .tab-item.tab-selected .tab-text{color:#3f69f2;padding-top:3px}.tab-nav-wraper .tab-item .close-btn{position:absolute;top:0;right:8px;font-size:24px;cursor:pointer;color:#999;font-weight:100}.tab-content-wraper{box-shadow:1px 1px 1px 1px #afb0b3;background:#fff}.tab-content-wraper .place-holder{width:0;height:0}`]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRiLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVzdC11aS9jb3JlLyIsInNvdXJjZXMiOlsiY29yZS9jb21wb25lbnRzL2pkYi1wbGctdGFiL2pkYi10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUVULGdCQUFnQixFQUNoQixTQUFTLEVBRVQsd0JBQXdCLEVBQ3hCLFFBQVEsRUFFUixNQUFNLEVBQ04sWUFBWSxHQUVmLE1BQU0sZUFBZSxDQUFDO0FBcUJ2QixNQUFNOzs7OztJQVdGLFlBQ1ksMEJBQ0Q7UUFEQyw2QkFBd0IsR0FBeEIsd0JBQXdCO1FBQ3pCLGNBQVMsR0FBVCxTQUFTOzJCQVZJLElBQUksWUFBWSxFQUFFOzJCQUNsQixJQUFJLFlBQVksRUFBRTsyQkFDbEIsSUFBSSxZQUFZLEVBQUU7cUJBQ2xDLEVBQUU7dUJBQ0EsRUFBRTsyQkFFRSxDQUFDOzJCQUNELEVBQUU7S0FJWDs7OztJQUdMLFFBQVE7S0FDUDs7Ozs7Ozs7OztJQVlELE9BQU8sQ0FBQyxjQUFtQixFQUFFLEtBQVUsRUFBRSxLQUFhLEVBQUUsUUFBYSxFQUFFLEVBQUUsY0FBdUIsS0FBSztRQUVqRyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLHFCQUFJLEdBQUcsR0FBUSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLE9BQU87U0FDVjtRQUNELHVCQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0YscUJBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlELHFCQUFJLElBQUks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QUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7NEJBQ2xELE1BQU07NEJBQ04sTUFBTTs0QkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT25Jbml0LCBJbnB1dCxcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxuICAgIFZpZXdDaGlsZCwgRWxlbWVudFJlZixcbiAgICBDb21wb25lbnRSZWYsXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIEluamVjdG9yLFxuICAgIE9uRGVzdHJveSxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqZGItdGFiJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ0YWItd3JhcGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRhYi1uYXYtd3JhcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zO2xldCBpID0gaW5kZXg7XCIgW25nQ2xhc3NdPVwieyd0YWItc2VsZWN0ZWQnOmkgPT0gY3VyVGFiSW5kZXh9XCIgdGl0bGU9J3t7aXRlbS50aXRsZX19Jz5cbiAgICAgICAgICAgIDxkaXYgKGNsaWNrKT1cInRhYkNoYW5nZShpKVwiIGNsYXNzPVwidGFiLXRleHRcIj4ge3tpdGVtLnRpdGxlfX08L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2UtYnRuXCIgKGNsaWNrKT1cInJlbW92ZVRhYihpKVwiICpuZ0lmPVwiaSAhPT0gMCAmJiBpdGVtLmlzQ2xvc2VGbGFnICE9IHRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnQtd3JhcGVyXCI+XG4gICAgICAgIDxkaXYgI3RhYkNvbnRlbnQgY2xhc3M9XCJwbGFjZS1ob2xkZXJcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgLnRhYi13cmFwZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0udGFiLW5hdi13cmFwZXJ7ZGlzcGxheTpmbGV4fS50YWItbmF2LXdyYXBlciAudGFiLWl0ZW17d2lkdGg6MTIwcHg7Zm9udC1zaXplOjEzcHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZDojZjBmMWY1O2JvcmRlcjoxcHggc29saWQgI2FmYjBiMztib3JkZXItYm90dG9tOm5vbmU7bWFyZ2luLXJpZ2h0OjVweDtoZWlnaHQ6MzBweDtib3JkZXItcmFkaXVzOjJweCAycHggMCAwO3RleHQtYWxpZ246Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO2N1cnNvcjpwb2ludGVyfS50YWItbmF2LXdyYXBlciAudGFiLWl0ZW0gLnRhYi10ZXh0e2NvbG9yOiM3ZDdlODA7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztwYWRkaW5nOjVweCAyMHB4IDB9LnRhYi1uYXYtd3JhcGVyIC50YWItaXRlbS50YWItc2VsZWN0ZWR7YmFja2dyb3VuZDojZmZmO2JvcmRlcjpub25lO2JvcmRlci10b3A6M3B4IHNvbGlkICMzZjY5ZjJ9LnRhYi1uYXYtd3JhcGVyIC50YWItaXRlbS50YWItc2VsZWN0ZWQgLnRhYi10ZXh0e2NvbG9yOiMzZjY5ZjI7cGFkZGluZy10b3A6M3B4fS50YWItbmF2LXdyYXBlciAudGFiLWl0ZW0gLmNsb3NlLWJ0bntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDo4cHg7Zm9udC1zaXplOjI0cHg7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6Izk5OTtmb250LXdlaWdodDoxMDB9LnRhYi1jb250ZW50LXdyYXBlcntib3gtc2hhZG93OjFweCAxcHggMXB4IDFweCAjYWZiMGIzO2JhY2tncm91bmQ6I2ZmZn0udGFiLWNvbnRlbnQtd3JhcGVyIC5wbGFjZS1ob2xkZXJ7d2lkdGg6MDtoZWlnaHQ6MH1gXVxufSlcblxuZXhwb3J0IGNsYXNzIEpkYlRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICAvLyBAVmlld0NoaWxkKCd0YWJDb250ZW50JykgdGFiQ29udGVudDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCd0YWJDb250ZW50JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHRhcmdldDtcbiAgICBAT3V0cHV0KCkgb25UYWJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uVGFiUmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblRvcENvbU1zZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBpdGVtcyA9IFtdO1xuICAgIHRhYkNvbXMgPSBbXTtcbiAgICB0YWJTdWJzOiBhbnk7XG4gICAgY3VyVGFiSW5kZXggPSAwO1xuICAgIHRhYklkQ29tTWFwID0ge307XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgIHB1YmxpYyBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICkgeyB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gQ2hpbGRDb21wb25lbnRcbiAgICAgKiBAcGFyYW0gYXR0cnM6e1xuICAgICAqICAgICBwcm9wZXJ5OnZhbHVlXG4gICAgICogXVxuICAgICAqIHRpdGxlOnN0cmluZ1xuICAgICAqIGlzQ2xvc2VGbGFnXG4gICAgICovXG4gICAgYWRkSXRlbShDaGlsZENvbXBvbmVudDogYW55LCBhdHRyczogYW55LCB0aXRsZTogc3RyaW5nLCBjb21JZDogYW55ID0gXCJcIiwgaXNDbG9zZUZsYWc6IGJvb2xlYW4gPSBmYWxzZSkge1xuXG4gICAgICAgIGlmIChjb21JZCAmJiB0aGlzLnRhYklkQ29tTWFwW2NvbUlkXSkge1xuICAgICAgICAgICAgbGV0IGNvbTogYW55ID0gdGhpcy50YWJJZENvbU1hcFtjb21JZF07XG4gICAgICAgICAgICB0aGlzLnRhYkNoYW5nZShjb20uaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoQ2hpbGRDb21wb25lbnQpO1xuICAgICAgICB2YXIgY29tSW5zdGFuY2UgPSB0aGlzLnRhcmdldC5jcmVhdGVDb21wb25lbnQoY2hpbGRDb21wb25lbnQpO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGF0dHJzKTtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGlzQ2xvc2VGbGFnOiBpc0Nsb3NlRmxhZ1xuICAgICAgICB9KTtcbiAgICAgICAga2V5cy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29tSW5zdGFuY2UuaW5zdGFuY2VbdmFsdWVdID0gYXR0cnNbdmFsdWVdO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YWJDb21zLnB1c2goY29tSW5zdGFuY2UpO1xuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnNldE9uZUNvbUhpZGUodGhpcy5jdXJUYWJJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhYlN1YnMgPSBjb21JbnN0YW5jZS5pbnN0YW5jZVsnb25Ub3BDb21Nc2cnXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy50YWJTdWJzLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Ub3BDb21Nc2cuZW1pdCh2YWx1ZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3VyVGFiSW5kZXggPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIGlmIChjb21JZCkge1xuICAgICAgICAgICAgdGhpcy50YWJJZENvbU1hcFtjb21JZF0gPSB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuY3VyVGFiSW5kZXgsXG4gICAgICAgICAgICAgICAgY29tSW5zdGFuY2U6IGNvbUluc3RhbmNlLmluc3RhbmNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbUluc3RhbmNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0T25lQ29tSGlkZSh0YWJJbmRleCkge1xuICAgICAgICB0aGlzLnRhYkNvbXNbdGFiSW5kZXhdLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0T25lQ29tU2hvdyh0YWJJbmRleCkge1xuICAgICAgICB0aGlzLnRhYkNvbXNbdGFiSW5kZXhdLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICB0YWJDaGFuZ2UoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VyVGFiSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRPbmVDb21IaWRlKHRoaXMuY3VyVGFiSW5kZXgpO1xuICAgICAgICB0aGlzLnNldE9uZUNvbVNob3coaW5kZXgpO1xuICAgICAgICB0aGlzLmN1clRhYkluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMub25UYWJDaGFuZ2UuZW1pdChpbmRleCk7XG4gICAgICAgIHRoaXMudGFiQ29tc1tpbmRleF0uaW5zdGFuY2UudGFiUmVmcmVzaCAmJiB0aGlzLnRhYkNvbXNbaW5kZXhdLmluc3RhbmNlLnRhYlJlZnJlc2goe30pO1xuICAgICAgICAvLyB0aGlzLnRhYkNvbXNbaW5kZXhdLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBzZXRPbmVUYWJTaG93KGluZGV4KSB7XG4gICAgICAgIHRoaXMudGFiQ2hhbmdlKGluZGV4KTtcbiAgICB9XG5cbiAgICByZW1vdmVUYWIoaW5kZXgpIHtcbiAgICAgICAgdGhpcy50YWJDb21zW2luZGV4XS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMudGFiQ29tcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmIChpbmRleCA8PSB0aGlzLmN1clRhYkluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmN1clRhYkluZGV4LS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VyVGFiSW5kZXggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1clRhYkluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE9uZUNvbVNob3codGhpcy5jdXJUYWJJbmRleCk7XG4gICAgICAgIHRoaXMub25UYWJSZW1vdmUuZW1pdChpbmRleCk7XG4gICAgICAgIGxldCB0YWJJZENvbU1hcCA9IHRoaXMudGFiSWRDb21NYXA7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0YWJJZENvbU1hcCkge1xuICAgICAgICAgICAgaWYgKHRhYklkQ29tTWFwW2tleV0uaW5kZXggPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGFiSWRDb21NYXBba2V5XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVtb3ZlVGFiQnlJZChpZDpzdHJpbmcpIHtcbiAgICAgICAgbGV0IHRhYklkQ29tTWFwID0gdGhpcy50YWJJZENvbU1hcDtcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gdGFiSWRDb21NYXApIHtcbiAgICAgICAgICAgIGlmKGtleSA9PSBpZCkgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRhYih0YWJJZENvbU1hcFtrZXldWydpbmRleCddKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyB0aGlzLnRhcmdldC5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=