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
var JdbPlgButtonComponent = (function () {
    function JdbPlgButtonComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._prefixCls = 'jdb-plg-btn';
        this._el = this._elementRef.nativeElement;
        this.nativeElement = this._elementRef.nativeElement;
        this._renderer.addClass(this._el, this._prefixCls);
    }
    Object.defineProperty(JdbPlgButtonComponent.prototype, "jdbSize", {
        get: function () {
            return this.size;
        },
        set: function (value) {
            if (!value) {
                value = 'default';
            }
            this.size = value;
            this._setClassMap(this.loading);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgButtonComponent.prototype, "jdbType", {
        get: function () {
            return this.type;
        },
        set: function (value) {
            if (!value) {
                value = 'primary';
            }
            this.type = value;
            this._setClassMap(this.loading);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgButtonComponent.prototype, "jdbLoading", {
        get: function () {
            return this.loading;
        },
        set: function (value) {
            value = value === '' || (value && value !== 'false');
            this.loading = value;
            this._setClassMap(this.loading);
        },
        enumerable: true,
        configurable: true
    });
    JdbPlgButtonComponent.prototype._setClassMap = function (loading) {
        this._renderer.removeClass(this._el, 'undefined');
        this._renderer.addClass(this._el, this.size);
        this._renderer.addClass(this._el, this.type);
        if (loading) {
            this._renderer.addClass(this._el, 'loading_disable');
        }
        else {
            this._renderer.removeClass(this._el, 'loading_disable');
        }
    };
    JdbPlgButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [String])
    ], JdbPlgButtonComponent.prototype, "jdbSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [String])
    ], JdbPlgButtonComponent.prototype, "jdbType", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgButtonComponent.prototype, "jdbLoading", null);
    JdbPlgButtonComponent = __decorate([
        core_1.Component({
            selector: '[app-jdb-plg-button]',
            templateUrl: './jdb-plg-button.component.html',
            styleUrls: ['./jdb-plg-button.component.scss']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], JdbPlgButtonComponent);
    return JdbPlgButtonComponent;
}());
exports.JdbPlgButtonComponent = JdbPlgButtonComponent;
