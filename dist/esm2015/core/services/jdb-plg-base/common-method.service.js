/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { JdbPlgToastComponent } from '../../components/jdb-plg-toast/jdb-plg-toast.component';
export class CommonMethodService {
    /**
     * @param {?} componentFactoryResolver
     */
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @param {?} number
     * @return {?}
     */
    testPhoneNumber(number) {
        const /** @type {?} */ phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        return phoneReg.test(number);
    }
    /**
     * @param {?} vRef
     * @return {?}
     */
    setRootViewContainerRef(vRef) {
        this.vRef = vRef;
    }
    /**
     * @param {?} msg
     * @param {?=} delayTime
     * @return {?}
     */
    toast(msg, delayTime = 3000) {
        //通过ComponentFactoryResolver 创建出动态组件的实例
        const /** @type {?} */ childComponent = this.componentFactoryResolver.resolveComponentFactory(JdbPlgToastComponent);
        let /** @type {?} */ comInstance = this.vRef.createComponent(childComponent);
        comInstance.instance.msg = msg;
        comInstance.changeDetectorRef.detectChanges();
        setTimeout(() => {
            comInstance.destroy();
        }, delayTime);
    }
    /**
     * @param {?} list
     * @param {?=} node
     * @return {?}
     */
    removeNodeFromArray(list, node) {
        if (!node) {
            return list;
        }
        outFor: for (let /** @type {?} */ i = 0, /** @type {?} */ j = list.length; i < j; i++) {
            if (list[i] === node) {
                list.splice(i, 1);
                break outFor;
            }
        }
        return list;
    }
}
CommonMethodService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CommonMethodService.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLW1ldGhvZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlc3QtdWkvY29yZS8iLCJzb3VyY2VzIjpbImNvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2NvbW1vbi1tZXRob2Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSx3QkFBd0IsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sd0RBQXdELENBQUM7QUFHNUYsTUFBTTs7OztJQUlKLFlBQ1U7UUFBQSw2QkFBd0IsR0FBeEIsd0JBQXdCO0tBRWpDOzs7OztJQU1ELGVBQWUsQ0FBQyxNQUFjO1FBQzVCLHVCQUFNLFFBQVEsR0FBRywwQkFBMEIsQ0FBQztRQUM1QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDOUI7Ozs7O0lBR0QsdUJBQXVCLENBQUMsSUFBSTtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNsQjs7Ozs7O0lBRUQsS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLEdBQUcsSUFBSTs7UUFFekIsdUJBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25HLHFCQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1RCxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDL0IsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzlDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkIsRUFBRSxTQUFTLENBQUMsQ0FBQztLQUVmOzs7Ozs7SUFHRCxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSztRQUM3QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE1BQU0sRUFDTixLQUFLLHFCQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsTUFBTSxNQUFNLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDYjs7O1lBakRGLFVBQVU7Ozs7WUFIUyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0pkYlBsZ1RvYXN0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2pkYi1wbGctdG9hc3QvamRiLXBsZy10b2FzdC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tbW9uTWV0aG9kU2VydmljZSB7XG5cbiAgdlJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICApIHtcbiAgfVxuXG4gIC8q5bi455So5YWs5YWx5pa55rOVKi9cblxuICAvKumqjOivgeaJi+acuuWPt+aYr+WQpuWQiOazlVxuICAqIG51bWJlciDmoKHpqoznmoTmiYvmnLrlj7fnoIEqL1xuICB0ZXN0UGhvbmVOdW1iZXIobnVtYmVyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwaG9uZVJlZyA9IC9eWzFdWzMsNCw1LDcsOF1bMC05XXs5fSQvO1xuICAgIHJldHVybiBwaG9uZVJlZy50ZXN0KG51bWJlcik7XG4gIH1cblxuXG4gIHNldFJvb3RWaWV3Q29udGFpbmVyUmVmKHZSZWYpIHtcbiAgICB0aGlzLnZSZWYgPSB2UmVmO1xuICB9XG5cbiAgdG9hc3QobXNnLCBkZWxheVRpbWUgPSAzMDAwKSB7XG4gICAgLy/pgJrov4dDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIg5Yib5bu65Ye65Yqo5oCB57uE5Lu255qE5a6e5L6LXG4gICAgY29uc3QgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShKZGJQbGdUb2FzdENvbXBvbmVudCk7XG4gICAgbGV0IGNvbUluc3RhbmNlID0gdGhpcy52UmVmLmNyZWF0ZUNvbXBvbmVudChjaGlsZENvbXBvbmVudCk7XG4gICAgY29tSW5zdGFuY2UuaW5zdGFuY2UubXNnID0gbXNnO1xuICAgIGNvbUluc3RhbmNlLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbUluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9LCBkZWxheVRpbWUpO1xuXG4gIH1cblxuICAvLyDku47mlbDnu4TliKDpmaTmjIflrprlhYPntKBcbiAgcmVtb3ZlTm9kZUZyb21BcnJheShsaXN0LCBub2RlPykge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIG91dEZvcjpcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IGxpc3QubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbm9kZSkge1xuICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWsgb3V0Rm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG59XG4iXX0=