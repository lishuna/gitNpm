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
var keycode_1 = require("./keycode");
var JdbPlgAutocompleteComponent = (function () {
    function JdbPlgAutocompleteComponent(el, jdbPlgBaseApi, render) {
        this.el = el;
        this.jdbPlgBaseApi = jdbPlgBaseApi;
        this.render = render;
        this._searchParam = 'key';
        this._serverApi = '/';
        this._searchWord = '';
        this.items = [];
        this._listShow = false;
        this.activeIndex = 0;
        this.jdbPlaceHolder = '';
        this.width = '300px';
        this.onSelected = new core_1.EventEmitter();
    }
    JdbPlgAutocompleteComponent.prototype.ngOnInit = function () {
    };
    JdbPlgAutocompleteComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.render.listen(this.el.nativeElement, 'input', this.debounce(function () {
            if (_this._searchWord) {
                _this.popupList();
            }
        }, 500, false));
    };
    JdbPlgAutocompleteComponent.prototype.OnClick = function (el) {
        if (el.className.indexOf('input') !== -1 && this.items.length > 0) {
            this._listShow = true;
        }
        else {
            this._listShow = false;
        }
    };
    JdbPlgAutocompleteComponent.prototype.OnKeyDown = function (event) {
        switch (event.which) {
            case keycode_1.keyCode.UP:
                this.activeIndex--;
                if (this.activeIndex < 0) {
                    this.activeIndex = this.items.length - 1;
                }
                this.setSearchWord();
                break;
            case keycode_1.keyCode.DOWN:
                this.activeIndex++;
                if (this.activeIndex >= this.items.length) {
                    this.activeIndex = 0;
                }
                this.setSearchWord();
                break;
            case keycode_1.keyCode.ENTER:
                var item = this.items[this.activeIndex];
                this.selectedItem(item, this.activeIndex);
                break;
            default:
                this.activeIndex = 0;
        }
    };
    JdbPlgAutocompleteComponent.prototype.OnPaste = function (event) {
        if (this._searchWord) {
            this.popupList();
        }
    };
    JdbPlgAutocompleteComponent.prototype.setSelectClass = function (obj) {
        if (obj) {
            return this._searchWord === obj.value;
        }
        return;
    };
    JdbPlgAutocompleteComponent.prototype.setSearchWord = function () {
        var item = this.items[this.activeIndex];
        this._searchWord = item.value;
    };
    JdbPlgAutocompleteComponent.prototype.selectedItem = function (item, index) {
        this.activeIndex = index;
        this._searchWord = item.value;
        this._listShow = false;
        this.onSelected.emit(item);
    };
    JdbPlgAutocompleteComponent.prototype.popupList = function () {
        var _this = this;
        var _a;
        this.items = [];
        this.jdbPlgBaseApi.post(this._serverApi, (_a = {}, _a[this._searchParam] = this._searchWord, _a), false).subscribe(function (res) {
            if (+res.error.returnCode === 0) {
                _this.items = res.data;
                _this._listShow = true;
            }
        });
    };
    JdbPlgAutocompleteComponent.prototype.debounce = function (fn, wait, immediate) {
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
    Object.defineProperty(JdbPlgAutocompleteComponent.prototype, "jdbSearchParam", {
        get: function () {
            return this._searchParam;
        },
        set: function (val) {
            this._searchParam = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgAutocompleteComponent.prototype, "jdbServerApi", {
        get: function () {
            return this._serverApi;
        },
        set: function (val) {
            this._serverApi = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgAutocompleteComponent.prototype, "jdbSearchWord", {
        get: function () {
            return this._searchWord;
        },
        set: function (val) {
            this._searchWord = val;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], JdbPlgAutocompleteComponent.prototype, "jdbPlaceHolder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], JdbPlgAutocompleteComponent.prototype, "width", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], JdbPlgAutocompleteComponent.prototype, "onSelected", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLElement]),
        __metadata("design:returntype", void 0)
    ], JdbPlgAutocompleteComponent.prototype, "OnClick", null);
    __decorate([
        core_1.HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], JdbPlgAutocompleteComponent.prototype, "OnKeyDown", null);
    __decorate([
        core_1.HostListener('paste', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], JdbPlgAutocompleteComponent.prototype, "OnPaste", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgAutocompleteComponent.prototype, "jdbSearchParam", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgAutocompleteComponent.prototype, "jdbServerApi", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgAutocompleteComponent.prototype, "jdbSearchWord", null);
    JdbPlgAutocompleteComponent = __decorate([
        core_1.Component({
            selector: 'app-jdb-plg-autocomplete',
            templateUrl: './jdb-plg-autocomplete.component.html',
            styleUrls: ['./jdb-plg-autocomplete.component.scss']
        }),
        __param(1, core_1.Inject('jdbPlgBaseApi')),
        __metadata("design:paramtypes", [core_1.ElementRef, Object, core_1.Renderer2])
    ], JdbPlgAutocompleteComponent);
    return JdbPlgAutocompleteComponent;
}());
exports.JdbPlgAutocompleteComponent = JdbPlgAutocompleteComponent;
