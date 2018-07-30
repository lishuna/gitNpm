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
                    template: "<div class=\"tab-wraper\"> <div class=\"tab-nav-wraper\"> <div class=\"tab-item\" *ngFor=\"let item of items;let i = index;\" [ngClass]=\"{'tab-selected':i == curTabIndex}\" title='{{item.title}}'> <div (click)=\"tabChange(i)\" class=\"tab-text\"> {{item.title}}</div> <span class=\"close-btn\" (click)=\"removeTab(i)\" *ngIf=\"i !== 0 && item.isCloseFlag != true\">&times;</span> </div> </div> <div class=\"tab-content-wraper\"> <div #tabContent class=\"place-holder\"></div> </div> </div> ",
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
//# sourceMappingURL=jdb-tab.component.js.map