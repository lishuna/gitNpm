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
var JdbPlgInputComponent = (function () {
    function JdbPlgInputComponent() {
        this._value = '';
        this._type = 'text';
        this._placeHolder = '';
        this._size = 'default';
        this._disabled = false;
        this._readonly = false;
        this._error = false;
        this._inputWrapClass = [];
        this._clear = false;
        this._autoPromptData = [];
        this._composing = false;
        this.width = '300px';
        this.onChange = function () { return null; };
        this.jdbBlur = new core_1.EventEmitter();
        this.jdbFocus = new core_1.EventEmitter();
    }
    JdbPlgInputComponent_1 = JdbPlgInputComponent;
    JdbPlgInputComponent.prototype.ngOnInit = function () {
        if (this._prefixContent) {
            this._inputWrapClass.push('prefix');
        }
    };
    JdbPlgInputComponent.prototype.compositionStart = function (e) {
        this._composing = true;
    };
    JdbPlgInputComponent.prototype.compositionEnd = function (e) {
        this._composing = false;
        this.onChange(this._value);
    };
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbType", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbPlaceHolder", {
        get: function () {
            return this._placeHolder;
        },
        set: function (placeHolder) {
            this._placeHolder = placeHolder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbSize", {
        get: function () {
            return this._size;
        },
        set: function (size) {
            this._size = { large: 'lg', small: 'sm' }[size];
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbDisabled", {
        get: function () {
            return this._disabled;
        },
        set: function (disabled) {
            this._disabled = this.toBoolean(disabled);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbReadonly", {
        get: function () {
            return this._readonly;
        },
        set: function (readonly) {
            this._readonly = this.toBoolean(readonly);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbValue", {
        get: function () {
            if (this._value == '0') {
                return '0';
            }
            return this._value || '';
        },
        set: function (value) {
            if ((this._value === value) || ((this._value == null) && (value == null))) {
                return;
            }
            this._value = value;
            if (!this._composing) {
                this.onChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbError", {
        get: function () {
            return this._error;
        },
        set: function (value) {
            this._error = this.toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbClear", {
        get: function () {
            return this._clear;
        },
        set: function (value) {
            this._clear = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbMaxLength", {
        get: function () {
            return this._maxlength;
        },
        set: function (value) {
            this._maxlength = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgInputComponent.prototype, "jdbPromptData", {
        get: function () {
            return this._autoPromptData;
        },
        set: function (value) {
            this._autoPromptData = value;
        },
        enumerable: true,
        configurable: true
    });
    JdbPlgInputComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    JdbPlgInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    JdbPlgInputComponent.prototype.registerOnTouched = function (fn) {
    };
    JdbPlgInputComponent.prototype._emitBlur = function ($event) {
        this.jdbBlur.emit($event);
    };
    JdbPlgInputComponent.prototype._emitFocus = function ($event) {
        this.jdbFocus.emit($event);
    };
    JdbPlgInputComponent.prototype.textareaOnChange = function ($event) {
    };
    JdbPlgInputComponent.prototype.setClassMap = function () {
        var _a;
        this._classMap = (_a = {},
            _a["input-" + this._type + "-" + this._size] = true,
            _a['input-disabled'] = this._disabled,
            _a['input-error'] = this._error,
            _a);
    };
    JdbPlgInputComponent.prototype.clearTxt = function () {
        this._value = '';
        this.onChange('');
    };
    JdbPlgInputComponent.prototype.toBoolean = function (value) {
        return value === '' || (value && value !== 'false');
    };
    var JdbPlgInputComponent_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], JdbPlgInputComponent.prototype, "width", void 0);
    __decorate([
        core_1.ContentChild('jdbErrorContent'),
        __metadata("design:type", core_1.TemplateRef)
    ], JdbPlgInputComponent.prototype, "_errorContent", void 0);
    __decorate([
        core_1.ContentChild('addContentBefore'),
        __metadata("design:type", core_1.TemplateRef)
    ], JdbPlgInputComponent.prototype, "_addOnContentBefore", void 0);
    __decorate([
        core_1.ContentChild('addContentAfter'),
        __metadata("design:type", core_1.TemplateRef)
    ], JdbPlgInputComponent.prototype, "_addOnContentAfter", void 0);
    __decorate([
        core_1.ContentChild('prefixContent'),
        __metadata("design:type", core_1.TemplateRef)
    ], JdbPlgInputComponent.prototype, "_prefixContent", void 0);
    __decorate([
        core_1.ContentChild('suffixContent'),
        __metadata("design:type", core_1.TemplateRef)
    ], JdbPlgInputComponent.prototype, "_suffixContent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], JdbPlgInputComponent.prototype, "jdbBlur", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], JdbPlgInputComponent.prototype, "jdbFocus", void 0);
    __decorate([
        core_1.HostListener('compositionstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [CompositionEvent]),
        __metadata("design:returntype", void 0)
    ], JdbPlgInputComponent.prototype, "compositionStart", null);
    __decorate([
        core_1.HostListener('compositionend', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [CompositionEvent]),
        __metadata("design:returntype", void 0)
    ], JdbPlgInputComponent.prototype, "compositionEnd", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], JdbPlgInputComponent.prototype, "jdbType", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], JdbPlgInputComponent.prototype, "jdbPlaceHolder", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], JdbPlgInputComponent.prototype, "jdbSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], JdbPlgInputComponent.prototype, "jdbDisabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], JdbPlgInputComponent.prototype, "jdbReadonly", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], JdbPlgInputComponent.prototype, "jdbValue", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], JdbPlgInputComponent.prototype, "jdbError", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], JdbPlgInputComponent.prototype, "jdbClear", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], JdbPlgInputComponent.prototype, "jdbMaxLength", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], JdbPlgInputComponent.prototype, "jdbPromptData", null);
    JdbPlgInputComponent = JdbPlgInputComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-jdb-plg-input',
            templateUrl: './jdb-plg-input.component.html',
            styleUrls: ['./jdb-plg-input.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return JdbPlgInputComponent_1; }),
                    multi: true
                }
            ],
        })
    ], JdbPlgInputComponent);
    return JdbPlgInputComponent;
}());
exports.JdbPlgInputComponent = JdbPlgInputComponent;
//# sourceMappingURL=jdb-plg-input.component.js.map