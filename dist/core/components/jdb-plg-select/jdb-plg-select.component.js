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
var forms_1 = require("@angular/forms");
var JdbPlgSelectComponent = (function () {
    function JdbPlgSelectComponent(renderer2, renderer) {
        this.renderer2 = renderer2;
        this.renderer = renderer;
        this._size = 'middle';
        this._optionText = 'text';
        this._optionValue = 'value';
        this.isShowClear = false;
        this._jdbClear = false;
        this._jdbDisabled = false;
        this._jdbMode = 'chooseOne';
        this._placeHolder = '请选择';
        this._chooseMoreArray = [];
        this._classMap = {};
        this.savaHeight = true;
        this.spaceFlex = true;
        this._showImgBox = false;
        this._jdbItemDisabled = 'disabled';
        this._jdbSureDisabled = 2;
        this._jdbNoDisabled = 1;
        this.jdbClassName = '';
        this.show = false;
        this.ngModelValue = '';
        this.onChange = function () { return null; };
    }
    JdbPlgSelectComponent_1 = JdbPlgSelectComponent;
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbItemDisabled", {
        get: function () {
            return this._jdbItemDisabled;
        },
        set: function (value) {
            this._jdbItemDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbSureDisabled", {
        get: function () {
            return this._jdbSureDisabled;
        },
        set: function (value) {
            this._jdbSureDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbPlaceHolder", {
        get: function () {
            return this._placeHolder;
        },
        set: function (value) {
            this._placeHolder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbClear", {
        get: function () {
            return this._jdbClear;
        },
        set: function (value) {
            this._jdbClear = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbSelectList", {
        get: function () {
            return this._selectList;
        },
        set: function (value) {
            var _this = this;
            this._selectList = value;
            if (this._selectList) {
                this._selectList.forEach(function (element) {
                    if (element.imgUrl) {
                        _this._showImgBox = true;
                    }
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbSize", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbWidth", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbOptionText", {
        get: function () {
            return this._optionText;
        },
        set: function (value) {
            this._optionText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbOptionValue", {
        get: function () {
            return this._optionValue;
        },
        set: function (value) {
            this._optionValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbDisabled", {
        get: function () {
            return this._jdbDisabled;
        },
        set: function (value) {
            this._jdbDisabled = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbMode", {
        get: function () {
            return this._jdbMode;
        },
        set: function (value) {
            this._jdbMode = value;
        },
        enumerable: true,
        configurable: true
    });
    JdbPlgSelectComponent.prototype.ngOnInit = function () {
    };
    JdbPlgSelectComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer2.listen('document', 'click', function () {
            _this.show = false;
            _this.renderer.setElementClass(_this.inputDom.nativeElement, 'jdb-plg-select-active', _this.show);
        });
        if (this._jdbClear && !this._jdbDisabled) {
            this.renderer2.listen(this.inputDom.nativeElement, 'mouseenter', function () {
                if (_this._jdbMode === 'chooseOne' || _this._jdbMode === 'chooseNum') {
                    if (!_this.inputText || _this.show) {
                        return;
                    }
                }
                else if (_this._jdbMode === 'chooseMore') {
                    if (_this.inputText.length === 0 || _this.show) {
                        return;
                    }
                }
                _this.isShowClear = true;
                _this.renderer.setElementClass(_this.inputDom.nativeElement, 'jdb-plg-select-active', _this.show);
            });
            this.renderer2.listen(this.inputDom.nativeElement, 'mouseleave', function () {
                if (_this._jdbMode === 'chooseOne' || _this._jdbMode === 'chooseNum') {
                    if (!_this.inputText || _this.show) {
                        return;
                    }
                }
                else if (_this._jdbMode === 'chooseMore') {
                    if (_this.inputText.length === 0 || _this.show) {
                        return;
                    }
                }
                _this.isShowClear = false;
                _this.renderer.setElementClass(_this.inputDom.nativeElement, 'jdb-plg-select-active', _this.show);
            });
        }
    };
    JdbPlgSelectComponent.prototype.ngOnChanges = function () {
        if (this._jdbMode === 'chooseOne') {
            this.inputText = '';
        }
        else if (this._jdbMode === 'chooseMore') {
            this.inputText = [];
        }
        else if (this._jdbMode === 'chooseNum') {
            this.inputText = 0;
        }
        this.setClassMap();
    };
    JdbPlgSelectComponent.prototype.setClassMap = function () {
        var _a, _b;
        if (this._jdbMode === 'chooseMore') {
            this._classMap = (_a = {},
                _a["" + this._size] = true,
                _a["jdb-plg-select-bottom-" + this._size] = this.inputText.length !== 0,
                _a['jdb-plg-select-disabled'] = this._jdbDisabled,
                _a[this.jdbClassName] = true,
                _a);
        }
        else {
            this._classMap = (_b = {},
                _b["" + this._size] = true,
                _b['jdb-plg-select-disabled'] = this._jdbDisabled,
                _b[this.jdbClassName] = true,
                _b);
        }
    };
    JdbPlgSelectComponent.prototype.clearInputText = function (e) {
        e.stopPropagation();
        if (this._jdbMode === 'chooseOne') {
            this.inputText = '';
        }
        else if (this._jdbMode === 'chooseMore') {
            this.inputText = [];
            this._chooseMoreArray = [];
        }
        else if (this._jdbMode === 'chooseNum') {
            this.inputText = 0;
            this._chooseMoreArray = [];
        }
        this.isShowClear = !this.isShowClear;
        this.ngModelValue = '';
        this.onChange('');
        this.setClassMap();
    };
    JdbPlgSelectComponent.prototype.dialogShow = function (e) {
        e.stopPropagation();
        if (this._jdbDisabled) {
            return;
        }
        this.isShowClear = false;
        this.show = !this.show;
        this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
        this.optionPosition(this.optionList.nativeElement.clientHeight);
    };
    JdbPlgSelectComponent.prototype.optionPosition = function (listHeight) {
        var offetTop = this.getTop(this.inputDom.nativeElement);
        var scrollTop = this.getScrollTop(this.inputDom.nativeElement.parentElement);
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        var elemHeight = this.inputDom.nativeElement.clientHeight;
        var paddingHeight;
        if (this.jdbSize === 'small') {
            paddingHeight = 2;
        }
        else if (this.jdbSize === 'large') {
            paddingHeight = 9;
        }
        else if (this.jdbSize === 'middle') {
            paddingHeight = 5;
        }
        var flexHeight = clientHeight - offetTop - elemHeight - paddingHeight + scrollTop;
        if (flexHeight < listHeight) {
            this.spaceFlex = false;
            this.renderer.setElementStyle(this.optionList.nativeElement, 'transform-origin', '100% 100%');
            if (listHeight < 188) {
                this.renderer.setElementStyle(this.optionList.nativeElement, 'top', -listHeight - 5 + 'px');
            }
            else {
                this.renderer.setElementStyle(this.optionList.nativeElement, 'top', -190 - paddingHeight + 'px');
            }
        }
        else {
            this.spaceFlex = true;
            this.renderer.setElementStyle(this.optionList.nativeElement, 'top', '');
            this.renderer.setElementStyle(this.optionList.nativeElement, 'transform-origin', '0% 0%');
        }
    };
    JdbPlgSelectComponent.prototype.writeValue = function (value) {
        this.ngModelValue = value;
        if (value === null || value === '' || value === undefined) {
            if (this._jdbMode === 'chooseMore') {
                this.inputText = [];
            }
            else {
                this.inputText = '';
            }
        }
        else {
            if (this._jdbMode === 'chooseOne') {
                this.forOneStart(value);
            }
            else if (this._jdbMode === 'chooseMore') {
                this.forMoreStart(value);
                this.setClassMap();
            }
            else if (this._jdbMode === 'chooseNum') {
                this.forNumStart(value);
            }
        }
    };
    JdbPlgSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    JdbPlgSelectComponent.prototype.registerOnTouched = function (fn) {
    };
    JdbPlgSelectComponent.prototype.setDisabledState = function (isDisabled) {
    };
    JdbPlgSelectComponent.prototype.forOneStart = function (value) {
        var _this = this;
        this._selectList.forEach(function (elem) {
            if (elem[_this._optionValue] === value) {
                _this.inputText = elem[_this._optionText];
            }
        });
    };
    JdbPlgSelectComponent.prototype.forMoreStart = function (value) {
        var _this = this;
        value = value.split(',');
        value.forEach(function (item) {
            _this._selectList.forEach(function (elem) {
                if (elem[_this._optionValue] === item) {
                    var text = _this._optionText;
                    var value_1 = _this._optionValue;
                    _this.inputText.push({
                        text: elem[_this._optionText],
                        value: elem[_this._optionValue]
                    });
                    _this._chooseMoreArray.push(elem[_this._optionValue]);
                    return;
                }
            });
        });
    };
    JdbPlgSelectComponent.prototype.forNumStart = function (value) {
        var _this = this;
        value = value.split(',');
        value.forEach(function (item) {
            _this._selectList.forEach(function (elem) {
                if (elem[_this._optionValue] === item) {
                    _this.inputText++;
                    _this._chooseMoreArray.push(elem[_this._optionValue]);
                    return;
                }
            });
        });
    };
    JdbPlgSelectComponent.prototype.item = function (e, item) {
        e.stopPropagation();
        if (!this.show) {
            return;
        }
        if (item[this._jdbItemDisabled] === this._jdbSureDisabled) {
            return;
        }
        this.inputText = item[this._optionText];
        this.show = !this.show;
        this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
        this.ngModelValue = item[this._optionValue];
        this.onChange(item[this._optionValue]);
    };
    JdbPlgSelectComponent.prototype.chooseMore = function (e, item) {
        var _this = this;
        var flag = false;
        e.stopPropagation();
        if (!this.show) {
            return;
        }
        if (item[this._jdbItemDisabled] === this._jdbSureDisabled) {
            return;
        }
        this.inputText.forEach(function (element, index) {
            if (element[_this._optionValue] === item[_this._optionValue]) {
                flag = true;
                return;
            }
        });
        if (flag) {
            this.deleteMoreItem(e, item);
            return;
        }
        var text = this._optionText;
        var value = this._optionValue;
        this.inputText.push({
            text: item[this._optionText],
            value: item[this._optionValue]
        });
        this._chooseMoreArray.push(item[this._optionValue]);
        this.ngModelValue = this._chooseMoreArray.toString();
        this.onChange(this._chooseMoreArray);
        this.show = true;
        this.setClassMap();
    };
    JdbPlgSelectComponent.prototype.numClick = function (e, item) {
        var _this = this;
        var flag = false;
        e.stopPropagation();
        if (!this.show) {
            return;
        }
        if (item[this._jdbItemDisabled] === this._jdbSureDisabled) {
            return;
        }
        this._chooseMoreArray.forEach(function (element, index) {
            if (element === item[_this._optionValue]) {
                flag = true;
                _this._chooseMoreArray.splice(index, 1);
                return;
            }
        });
        if (flag) {
            this.inputText--;
            return;
        }
        this.inputText++;
        this.show = true;
        this._chooseMoreArray.push(item[this._optionValue]);
        this.ngModelValue = this._chooseMoreArray.toString();
        this.onChange(this._chooseMoreArray);
    };
    JdbPlgSelectComponent.prototype.moreIndex = function (item) {
        var _this = this;
        var flag = false;
        this._chooseMoreArray.forEach(function (element, index) {
            if (element === item[_this._optionValue]) {
                flag = true;
                return;
            }
        });
        return flag;
    };
    JdbPlgSelectComponent.prototype.deleteMoreItem = function (e, item) {
        var _this = this;
        e.stopPropagation();
        if (this._jdbDisabled) {
            return;
        }
        this.inputText.forEach(function (element, index) {
            if (element[_this._optionValue] === item[_this._optionValue]) {
                _this.inputText.splice(index, 1);
                return;
            }
        });
        this._chooseMoreArray.forEach(function (element, index) {
            if (element === item[_this._optionValue]) {
                _this._chooseMoreArray.splice(index, 1);
                return;
            }
        });
        this.ngModelValue = this._chooseMoreArray.toString();
        this.onChange(this._chooseMoreArray);
        this.setClassMap();
    };
    JdbPlgSelectComponent.prototype.toBoolean = function (value) {
        return value === '' || (value && value !== 'false');
    };
    JdbPlgSelectComponent.prototype.getTop = function (e) {
        var offset = e.offsetTop;
        if (e.offsetParent != null) {
            if (e.style.transform) {
                var ret = this.parseTranslateY(e.style.transform);
                offset += ret.isPercent ? e.clientHeight * ret.translateY / 100 : ret.translateY;
            }
            offset += this.getTop(e.offsetParent);
        }
        return offset;
    };
    JdbPlgSelectComponent.prototype.getScrollTop = function (e) {
        var offset = e.scrollTop;
        if (e.parentElement != null) {
            offset += this.getScrollTop(e.parentElement);
        }
        return offset;
    };
    JdbPlgSelectComponent.prototype.parseTranslateY = function (val) {
        var reg = /\(([^()]+)\)/g;
        var translate = reg.exec(val)[1];
        var translatArr = translate.split(',');
        var translateY;
        var isPercent;
        if (val.indexOf('translate') === -1) {
            return {
                isPercent: false,
                translateY: 0
            };
        }
        if (translatArr.length === 2) {
            translateY = translate.split(',')[1];
        }
        else if (translatArr.length === 1 && val.indexOf('translateY') !== -1) {
            translateY = translate;
        }
        if (translateY.indexOf('px') !== -1) {
            isPercent = false;
            translateY = Number(translateY.slice(0, -2));
        }
        else if (translateY.indexOf('%') !== -1) {
            isPercent = true;
            translateY = Number(translateY.slice(0, -1));
        }
        return {
            isPercent: isPercent,
            translateY: translateY
        };
    };
    var JdbPlgSelectComponent_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], JdbPlgSelectComponent.prototype, "jdbClassName", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgSelectComponent.prototype, "jdbItemDisabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgSelectComponent.prototype, "jdbSureDisabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgSelectComponent.prototype, "jdbPlaceHolder", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgSelectComponent.prototype, "jdbClear", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgSelectComponent.prototype, "jdbSelectList", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgSelectComponent.prototype, "jdbSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgSelectComponent.prototype, "jdbWidth", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgSelectComponent.prototype, "jdbOptionText", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgSelectComponent.prototype, "jdbOptionValue", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgSelectComponent.prototype, "jdbDisabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgSelectComponent.prototype, "jdbMode", null);
    __decorate([
        core_1.ViewChild('inputDom'),
        __metadata("design:type", core_1.ElementRef)
    ], JdbPlgSelectComponent.prototype, "inputDom", void 0);
    __decorate([
        core_1.ViewChild('optionList'),
        __metadata("design:type", core_1.ElementRef)
    ], JdbPlgSelectComponent.prototype, "optionList", void 0);
    JdbPlgSelectComponent = JdbPlgSelectComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-jdb-plg-select',
            templateUrl: './jdb-plg-select.component.html',
            styleUrls: ['./jdb-plg-select.component.scss'],
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return JdbPlgSelectComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [core_1.Renderer2, core_1.Renderer])
    ], JdbPlgSelectComponent);
    return JdbPlgSelectComponent;
}());
exports.JdbPlgSelectComponent = JdbPlgSelectComponent;
