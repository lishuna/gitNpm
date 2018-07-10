"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var jdb_plg_toast_component_1 = require("../../components/jdb-plg-toast/jdb-plg-toast.component");
var CommonMethodService = (function () {
    function CommonMethodService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    CommonMethodService.prototype.testPhoneNumber = function (number) {
        var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        return phoneReg.test(number);
    };
    CommonMethodService.prototype.setRootViewContainerRef = function (vRef) {
        this.vRef = vRef;
    };
    CommonMethodService.prototype.toast = function (msg, delayTime) {
        if (delayTime === void 0) { delayTime = 3000; }
        var childComponent = this.componentFactoryResolver.resolveComponentFactory(jdb_plg_toast_component_1.JdbPlgToastComponent);
        var comInstance = this.vRef.createComponent(childComponent);
        comInstance.instance.msg = msg;
        comInstance.changeDetectorRef.detectChanges();
        setTimeout(function () {
            comInstance.destroy();
        }, delayTime);
    };
    CommonMethodService.prototype.removeNodeFromArray = function (list, node) {
        if (!node) {
            return list;
        }
        outFor: for (var i = 0, j = list.length; i < j; i++) {
            if (list[i] === node) {
                list.splice(i, 1);
                break outFor;
            }
        }
        return list;
    };
    CommonMethodService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], CommonMethodService);
    return CommonMethodService;
}());
exports.CommonMethodService = CommonMethodService;
