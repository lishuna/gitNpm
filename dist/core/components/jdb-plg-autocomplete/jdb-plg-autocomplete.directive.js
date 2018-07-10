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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var JdbPlgAutocompleteDirective = (function () {
    function JdbPlgAutocompleteDirective(el, jdbPlgBaseApi, render) {
        this.el = el;
        this.jdbPlgBaseApi = jdbPlgBaseApi;
        this.render = render;
        this.searchParam = '';
        this.serverApi = "/";
        this.searchWord = '';
        this.dataReady = new core_1.EventEmitter();
    }
    JdbPlgAutocompleteDirective.prototype.OnPaste = function (event) {
        if (this.searchWord) {
            this.popupList();
        }
    };
    JdbPlgAutocompleteDirective.prototype.ngOnInit = function () {
    };
    JdbPlgAutocompleteDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.render.listen(this.el.nativeElement, 'input', this.debounce(function () {
            if (_this.searchWord) {
                _this.popupList();
            }
        }, 500, false));
    };
    JdbPlgAutocompleteDirective.prototype.popupList = function () {
        var _this = this;
        var _a;
        this.jdbPlgBaseApi.post(this.serverApi, (_a = {}, _a[this.searchParam] = this.searchWord, _a), false).subscribe(function (res) {
            if (+res.error.returnCode == 0) {
                var items = res.data;
                _this.dataReady.emit(items);
            }
        });
    };
    JdbPlgAutocompleteDirective.prototype.debounce = function (fn, wait, immediate) {
        var timeout, args, context, timestamp, result;
        var later = function () {
            var last = new Date().getTime() - timestamp;
            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last);
            }
            else {
                timeout = null;
                if (!immediate) {
                    result = fn.apply(context, args);
                    if (!timeout) {
                        context = args = null;
                    }
                }
            }
        };
        return function () {
            context = this;
            args = arguments;
            timestamp = new Date().getTime();
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) {
                result = fn.apply(context, args);
                context = args = null;
            }
            return result;
        };
    };
    __decorate([
        core_1.Input('searchParam'),
        __metadata("design:type", String)
    ], JdbPlgAutocompleteDirective.prototype, "searchParam", void 0);
    __decorate([
        core_1.Input('serverApi'),
        __metadata("design:type", String)
    ], JdbPlgAutocompleteDirective.prototype, "serverApi", void 0);
    __decorate([
        core_1.Input('searchWord'),
        __metadata("design:type", String)
    ], JdbPlgAutocompleteDirective.prototype, "searchWord", void 0);
    __decorate([
        core_1.Output('dataReady'),
        __metadata("design:type", core_1.EventEmitter)
    ], JdbPlgAutocompleteDirective.prototype, "dataReady", void 0);
    __decorate([
        core_1.HostListener('paste', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], JdbPlgAutocompleteDirective.prototype, "OnPaste", null);
    JdbPlgAutocompleteDirective = __decorate([
        core_1.Directive({
            selector: '[appJdbPlgAutocomplete]'
        }),
        __param(1, core_1.Inject('jdbPlgBaseApi')),
        __metadata("design:paramtypes", [core_1.ElementRef, Object, core_1.Renderer2])
    ], JdbPlgAutocompleteDirective);
    return JdbPlgAutocompleteDirective;
}());
exports.JdbPlgAutocompleteDirective = JdbPlgAutocompleteDirective;
