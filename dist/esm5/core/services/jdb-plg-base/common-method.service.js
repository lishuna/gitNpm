/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { JdbPlgToastComponent } from '../../components/jdb-plg-toast/jdb-plg-toast.component';
var CommonMethodService = /** @class */ (function () {
    function CommonMethodService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /*常用公共方法*/
    /*验证手机号是否合法
    * number 校验的手机号码*/
    /**
     * @param {?} number
     * @return {?}
     */
    CommonMethodService.prototype.testPhoneNumber = /**
     * @param {?} number
     * @return {?}
     */
    function (number) {
        var /** @type {?} */ phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        return phoneReg.test(number);
    };
    /**
     * @param {?} vRef
     * @return {?}
     */
    CommonMethodService.prototype.setRootViewContainerRef = /**
     * @param {?} vRef
     * @return {?}
     */
    function (vRef) {
        this.vRef = vRef;
    };
    /**
     * @param {?} msg
     * @param {?=} delayTime
     * @return {?}
     */
    CommonMethodService.prototype.toast = /**
     * @param {?} msg
     * @param {?=} delayTime
     * @return {?}
     */
    function (msg, delayTime) {
        if (delayTime === void 0) { delayTime = 3000; }
        //通过ComponentFactoryResolver 创建出动态组件的实例
        var /** @type {?} */ childComponent = this.componentFactoryResolver.resolveComponentFactory(JdbPlgToastComponent);
        var /** @type {?} */ comInstance = this.vRef.createComponent(childComponent);
        comInstance.instance.msg = msg;
        comInstance.changeDetectorRef.detectChanges();
        setTimeout(function () {
            comInstance.destroy();
        }, delayTime);
    };
    // 从数组删除指定元素
    /**
     * @param {?} list
     * @param {?=} node
     * @return {?}
     */
    CommonMethodService.prototype.removeNodeFromArray = /**
     * @param {?} list
     * @param {?=} node
     * @return {?}
     */
    function (list, node) {
        if (!node) {
            return list;
        }
        outFor: for (var /** @type {?} */ i = 0, /** @type {?} */ j = list.length; i < j; i++) {
            if (list[i] === node) {
                list.splice(i, 1);
                break outFor;
            }
        }
        return list;
    };
    CommonMethodService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CommonMethodService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
    ]; };
    return CommonMethodService;
}());
export { CommonMethodService };
function CommonMethodService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CommonMethodService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CommonMethodService.ctorParameters;
    /** @type {?} */
    CommonMethodService.prototype.vRef;
    /** @type {?} */
    CommonMethodService.prototype.componentFactoryResolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLW1ldGhvZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlc3QtdWkvY29yZS8iLCJzb3VyY2VzIjpbImNvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2NvbW1vbi1tZXRob2Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSx3QkFBd0IsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sd0RBQXdELENBQUM7O0lBTzFGLDZCQUNVO1FBQUEsNkJBQXdCLEdBQXhCLHdCQUF3QjtLQUVqQztJQUVELFVBQVU7SUFFVjtzQkFDa0I7Ozs7O0lBQ2xCLDZDQUFlOzs7O0lBQWYsVUFBZ0IsTUFBYztRQUM1QixxQkFBTSxRQUFRLEdBQUcsMEJBQTBCLENBQUM7UUFDNUMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzlCOzs7OztJQUdELHFEQUF1Qjs7OztJQUF2QixVQUF3QixJQUFJO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ2xCOzs7Ozs7SUFFRCxtQ0FBSzs7Ozs7SUFBTCxVQUFNLEdBQUcsRUFBRSxTQUFnQjtRQUFoQiwwQkFBQSxFQUFBLGdCQUFnQjs7UUFFekIscUJBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25HLHFCQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1RCxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDL0IsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzlDLFVBQVUsQ0FBQztZQUNULFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QixFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBRWY7SUFFRCxZQUFZOzs7Ozs7SUFDWixpREFBbUI7Ozs7O0lBQW5CLFVBQW9CLElBQUksRUFBRSxJQUFLO1FBQzdCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsTUFBTSxFQUNOLEtBQUsscUJBQUksQ0FBQyxHQUFHLENBQUMsbUJBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixNQUFNLE1BQU0sQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNiOztnQkFqREYsVUFBVTs7OztnQkFIUyx3QkFBd0I7OzhCQUE1Qzs7U0FJYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0pkYlBsZ1RvYXN0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2pkYi1wbGctdG9hc3QvamRiLXBsZy10b2FzdC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tbW9uTWV0aG9kU2VydmljZSB7XG5cbiAgdlJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICApIHtcbiAgfVxuXG4gIC8q5bi455So5YWs5YWx5pa55rOVKi9cblxuICAvKumqjOivgeaJi+acuuWPt+aYr+WQpuWQiOazlVxuICAqIG51bWJlciDmoKHpqoznmoTmiYvmnLrlj7fnoIEqL1xuICB0ZXN0UGhvbmVOdW1iZXIobnVtYmVyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwaG9uZVJlZyA9IC9eWzFdWzMsNCw1LDcsOF1bMC05XXs5fSQvO1xuICAgIHJldHVybiBwaG9uZVJlZy50ZXN0KG51bWJlcik7XG4gIH1cblxuXG4gIHNldFJvb3RWaWV3Q29udGFpbmVyUmVmKHZSZWYpIHtcbiAgICB0aGlzLnZSZWYgPSB2UmVmO1xuICB9XG5cbiAgdG9hc3QobXNnLCBkZWxheVRpbWUgPSAzMDAwKSB7XG4gICAgLy/pgJrov4dDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIg5Yib5bu65Ye65Yqo5oCB57uE5Lu255qE5a6e5L6LXG4gICAgY29uc3QgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShKZGJQbGdUb2FzdENvbXBvbmVudCk7XG4gICAgbGV0IGNvbUluc3RhbmNlID0gdGhpcy52UmVmLmNyZWF0ZUNvbXBvbmVudChjaGlsZENvbXBvbmVudCk7XG4gICAgY29tSW5zdGFuY2UuaW5zdGFuY2UubXNnID0gbXNnO1xuICAgIGNvbUluc3RhbmNlLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbUluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9LCBkZWxheVRpbWUpO1xuXG4gIH1cblxuICAvLyDku47mlbDnu4TliKDpmaTmjIflrprlhYPntKBcbiAgcmVtb3ZlTm9kZUZyb21BcnJheShsaXN0LCBub2RlPykge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIG91dEZvcjpcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IGxpc3QubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbm9kZSkge1xuICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWsgb3V0Rm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG59XG4iXX0=