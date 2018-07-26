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
//# sourceMappingURL=common-method.service.js.map