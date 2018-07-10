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
var JdbTabComponent = (function () {
    function JdbTabComponent(componentFactoryResolver, _injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this._injector = _injector;
        this.onTabChange = new core_1.EventEmitter();
        this.onTabRemove = new core_1.EventEmitter();
        this.onTopComMsg = new core_1.EventEmitter();
        this.items = [];
        this.tabComs = [];
        this.curTabIndex = 0;
        this.tabIdComMap = {};
    }
    JdbTabComponent.prototype.ngOnInit = function () {
    };
    JdbTabComponent.prototype.addItem = function (ChildComponent, attrs, title, comId, isCloseFlag) {
        var _this = this;
        if (comId === void 0) { comId = ""; }
        if (isCloseFlag === void 0) { isCloseFlag = false; }
        if (comId && this.tabIdComMap[comId]) {
            var com = this.tabIdComMap[comId];
            this.tabChange(com.index);
            return;
        }
        var childComponent = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
        var comInstance = this.target.createComponent(childComponent);
        var keys = Object.keys(attrs);
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
        this.tabSubs = comInstance.instance['onTopComMsg'] = new core_1.EventEmitter();
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
    JdbTabComponent.prototype.setOneComHide = function (tabIndex) {
        this.tabComs[tabIndex].location.nativeElement.style.display = "none";
    };
    JdbTabComponent.prototype.setOneComShow = function (tabIndex) {
        this.tabComs[tabIndex].location.nativeElement.style.display = "block";
    };
    JdbTabComponent.prototype.tabChange = function (index) {
        if (this.curTabIndex === index) {
            return;
        }
        this.setOneComHide(this.curTabIndex);
        this.setOneComShow(index);
        this.curTabIndex = index;
        this.onTabChange.emit(index);
        this.tabComs[index].instance.tabRefresh && this.tabComs[index].instance.tabRefresh({});
    };
    JdbTabComponent.prototype.setOneTabShow = function (index) {
        this.tabChange(index);
    };
    JdbTabComponent.prototype.removeTab = function (index) {
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
        var tabIdComMap = this.tabIdComMap;
        for (var key in tabIdComMap) {
            if (tabIdComMap[key].index == index) {
                delete tabIdComMap[key];
                break;
            }
        }
    };
    JdbTabComponent.prototype.removeTabById = function (id) {
        var tabIdComMap = this.tabIdComMap;
        for (var key in tabIdComMap) {
            if (key == id) {
                this.removeTab(tabIdComMap[key]['index']);
                break;
            }
        }
    };
    JdbTabComponent.prototype.ngOnDestroy = function () {
        if (this.target) {
            this.target.clear();
        }
    };
    __decorate([
        core_1.ViewChild('tabContent', { read: core_1.ViewContainerRef }),
        __metadata("design:type", Object)
    ], JdbTabComponent.prototype, "target", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], JdbTabComponent.prototype, "onTabChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], JdbTabComponent.prototype, "onTabRemove", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], JdbTabComponent.prototype, "onTopComMsg", void 0);
    JdbTabComponent = __decorate([
        core_1.Component({
            selector: 'jdb-tab',
            templateUrl: './jdb-tab.component.html',
            styleUrls: ['./jdb-tab.component.scss']
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
            core_1.Injector])
    ], JdbTabComponent);
    return JdbTabComponent;
}());
exports.JdbTabComponent = JdbTabComponent;
