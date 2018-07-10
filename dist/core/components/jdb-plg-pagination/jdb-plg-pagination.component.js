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
var JdbPlgPaginationComponent = (function () {
    function JdbPlgPaginationComponent(el, renderer2) {
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
        this._options = [
            { value: 10, text: '10条/页' },
            { value: 20, text: '20条/页' },
            { value: 30, text: '30条/页' },
            { value: 40, text: '40条/页' },
            { value: 50, text: '50条/页' }
        ];
        this._jdbSimple = false;
        this.jdbPageSizeChange = new core_1.EventEmitter();
        this.jdbPageIndexChange = new core_1.EventEmitter();
    }
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbShowTotal", {
        get: function () {
            return this._showTotal;
        },
        set: function (value) {
            this._showTotal = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbTotal", {
        get: function () {
            return this._total;
        },
        set: function (value) {
            if (value === this._total) {
                return;
            }
            this._total = value;
            this.setPageNo();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbPageIndex", {
        get: function () {
            return this._current;
        },
        set: function (value) {
            if (this._current === value) {
                return;
            }
            if (value > this._lastIndex || value < this._firstIndex) {
                return;
            }
            this._current = Number(value);
            this.setPageNo();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbShowPageSize", {
        get: function () {
            return this._showPageSize;
        },
        set: function (value) {
            this._showPageSize = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbPageSize", {
        get: function () {
            return this._pageSize;
        },
        set: function (value) {
            if (value === this._pageSize) {
                return;
            }
            this._pageSize = value;
            this.setPageNo();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbSizeOptions", {
        get: function () {
            return this._options;
        },
        set: function (value) {
            if (value === this._options) {
                return;
            }
            if (Object.prototype.toString.call(value) === '[object Array]') {
                var optionsArr_1 = [];
                value.forEach(function (elem) {
                    var obj = {
                        value: elem,
                        text: elem + '条/页'
                    };
                    optionsArr_1.push(obj);
                });
                this._options = optionsArr_1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbShowQuickJump", {
        get: function () {
            return this._showQuickJump;
        },
        set: function (value) {
            this._showQuickJump = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbSimple", {
        get: function () {
            return this.jdbSimple;
        },
        set: function (value) {
            this._jdbSimple = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    JdbPlgPaginationComponent.prototype.setPageNo = function () {
        this._lastIndex = Math.ceil(this._total / this._pageSize);
        var tmpPages = [];
        if (this._lastIndex <= 9) {
            for (var i = 2; i <= this._lastIndex - 1; i++) {
                tmpPages.push({
                    index: i
                });
            }
        }
        else {
            var current = +this._current;
            var left = Math.max(2, current - 2);
            var right = Math.min(current + 2, this._lastIndex - 1);
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
            for (var i = left; i <= right; i++) {
                tmpPages.push({ index: i });
            }
        }
        this.pages = tmpPages;
    };
    JdbPlgPaginationComponent.prototype.dataChange = function (status, num) {
        if (status) {
            if (num === this._firstIndex - 1 || num === this._lastIndex + 1) {
                return;
            }
            this.quickJumpPage = '';
            this.jdbPageIndex = num;
            this.jdbPageIndexChange.emit(this.jdbPageIndex);
        }
        else {
            this.quickJumpPage = '';
            this.jdbPageSize = num;
            this.jdbPageSizeChange.emit(num);
            this.jdbPageIndex = 1;
            this.jdbPageIndexChange.emit(this.jdbPageIndex);
            this.setPageNo();
        }
    };
    JdbPlgPaginationComponent.prototype.quickJump = function () {
        if (this.quickJumpPage > this._lastIndex) {
            this.inputJump.nativeElement.focus();
            this.quickJumpPage = '';
            return;
        }
        if (!this.quickJumpPage) {
            return;
        }
        this.jdbPageIndex = this.quickJumpPage;
        this.jdbPageIndexChange.emit(this.jdbPageIndex);
    };
    JdbPlgPaginationComponent.prototype.jumpBefore = function (pageSize) {
        this.dataChange(true, this._current - Math.round(pageSize / 2));
    };
    JdbPlgPaginationComponent.prototype.jumpAfter = function (pageSize) {
        this.dataChange(true, this._current + Math.round(pageSize / 2));
    };
    JdbPlgPaginationComponent.prototype.toBoolean = function (value) {
        return value === '' || (value && value !== 'false');
    };
    JdbPlgPaginationComponent.prototype.isNumber = function (obj) {
        var reg = /^[0-9]*$/;
        return reg.test(obj);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], JdbPlgPaginationComponent.prototype, "jdbPageSizeChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], JdbPlgPaginationComponent.prototype, "jdbPageIndexChange", void 0);
    __decorate([
        core_1.ViewChild('inputJump'),
        __metadata("design:type", core_1.ElementRef)
    ], JdbPlgPaginationComponent.prototype, "inputJump", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], JdbPlgPaginationComponent.prototype, "jdbShowTotal", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], JdbPlgPaginationComponent.prototype, "jdbTotal", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], JdbPlgPaginationComponent.prototype, "jdbPageIndex", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], JdbPlgPaginationComponent.prototype, "jdbShowPageSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], JdbPlgPaginationComponent.prototype, "jdbPageSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgPaginationComponent.prototype, "jdbSizeOptions", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], JdbPlgPaginationComponent.prototype, "jdbShowQuickJump", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], JdbPlgPaginationComponent.prototype, "jdbSimple", null);
    JdbPlgPaginationComponent = __decorate([
        core_1.Component({
            selector: 'app-jdb-plg-pagination',
            templateUrl: './jdb-plg-pagination.component.html',
            styleUrls: ['./jdb-plg-pagination.component.scss']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer2])
    ], JdbPlgPaginationComponent);
    return JdbPlgPaginationComponent;
}());
exports.JdbPlgPaginationComponent = JdbPlgPaginationComponent;
