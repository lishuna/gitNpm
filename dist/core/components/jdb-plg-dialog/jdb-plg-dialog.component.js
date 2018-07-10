"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var animations_1 = require("@angular/animations");
var JdbPlgDialogComponent = (function () {
    function JdbPlgDialogComponent(resolver) {
        this.resolver = resolver;
        this._customClass = '';
        this._maskClass = '';
        this._visible = false;
        this._title = '';
        this._closeable = true;
        this._animationStatus = '11';
        this._width = '400px';
        this._footerHide = false;
        this._isConfirm = false;
        this._okText = '';
        this._cancelText = '';
        this._RogerText = '';
        this._state = 'hideM';
        this.MvisibileChange = new core_1.EventEmitter();
        this.MOnOk = new core_1.EventEmitter();
        this.MOnCancel = new core_1.EventEmitter();
    }
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mvisible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            var visible = this.toBoolean(value);
            if (this._visible === visible) {
                return;
            }
            this._visible = visible;
            this.MvisibileChange.emit(this._visible);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "MfooterHiden", {
        get: function () {
            return this._footerHide;
        },
        set: function (value) {
            var visible = this.toBoolean(value);
            if (this._visible === visible) {
                return;
            }
            this._footerHide = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mtitle", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef) {
                this._titleTpl = value;
            }
            else {
                this._title = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mcontent", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef) {
                this._contentTpl = value;
            }
            else {
                this._content = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mfooter", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef) {
                this._footerTpl = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mwidth", {
        set: function (value) {
            this._width = typeof value === 'number' ? value + 'px' : value;
        },
        enumerable: true,
        configurable: true
    });
    JdbPlgDialogComponent.prototype.setStyle = function () {
        var el = this.contentEl.nativeElement;
        this._bodyStyleMap = __assign({ width: this._width });
    };
    JdbPlgDialogComponent.prototype.onEsc = function (e) {
        this.clickCancel(e);
    };
    Object.defineProperty(JdbPlgDialogComponent.prototype, "Mclass", {
        set: function (value) {
            this._customClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "MOkText", {
        set: function (value) {
            this._okText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "McancelText", {
        set: function (value) {
            this._cancelText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgDialogComponent.prototype, "MRogerText", {
        set: function (value) {
            this._isConfirm = true;
            this._RogerText = value;
        },
        enumerable: true,
        configurable: true
    });
    JdbPlgDialogComponent.prototype.ngOnInit = function () {
        this.setStyle();
    };
    JdbPlgDialogComponent.prototype.createDynamicComponent = function (component) {
        var factory = this.resolver.resolveComponentFactory(this._content);
        this.bodyEl.createComponent(factory);
    };
    JdbPlgDialogComponent.prototype.ngAfterViewInit = function () {
    };
    JdbPlgDialogComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this._visible) {
            this._state = 'showM';
            setTimeout(function () {
                _this.contentEl.nativeElement.parentNode.focus();
            }, 200);
        }
        else {
            this._state = 'hideM';
        }
    };
    JdbPlgDialogComponent.prototype.clickCancel = function (e) {
        this._visible = false;
        this._state = 'hideM';
        this.MOnCancel.emit(e);
    };
    JdbPlgDialogComponent.prototype.clickOk = function (e) {
        if (this.MOnOk) {
            this.MOnOk.emit(e);
        }
        else {
            this._visible = false;
            this._state = 'hideM';
        }
    };
    JdbPlgDialogComponent.prototype.closeModal = function (e) {
        if (e.target.getAttribute('role') === 'dialog') {
            this.clickCancel(e);
            this._state = 'hideM';
        }
    };
    JdbPlgDialogComponent.prototype.toBoolean = function (value) {
        return value === '' || (value && value !== false);
    };
    __decorate([
        core_1.ViewChild('modal_content'),
        __metadata("design:type", core_1.ElementRef)
    ], JdbPlgDialogComponent.prototype, "contentEl", void 0);
    __decorate([
        core_1.ViewChild('modal_component', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], JdbPlgDialogComponent.prototype, "bodyEl", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], JdbPlgDialogComponent.prototype, "MvisibileChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], JdbPlgDialogComponent.prototype, "MOnOk", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], JdbPlgDialogComponent.prototype, "MOnCancel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], JdbPlgDialogComponent.prototype, "Mvisible", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], JdbPlgDialogComponent.prototype, "MfooterHiden", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgDialogComponent.prototype, "Mtitle", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgDialogComponent.prototype, "Mcontent", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgDialogComponent.prototype, "Mfooter", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JdbPlgDialogComponent.prototype, "Mwidth", null);
    __decorate([
        core_1.HostListener('keydown.esc', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], JdbPlgDialogComponent.prototype, "onEsc", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], JdbPlgDialogComponent.prototype, "Mclass", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], JdbPlgDialogComponent.prototype, "MOkText", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], JdbPlgDialogComponent.prototype, "McancelText", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], JdbPlgDialogComponent.prototype, "MRogerText", null);
    JdbPlgDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-jdb-plg-dialog',
            templateUrl: './jdb-plg-dialog.component.html',
            styleUrls: ['./jdb-plg-dialog.component.scss'],
            animations: [
                animations_1.trigger('optionsState', [
                    animations_1.state('showM', animations_1.style({
                        transform: 'translate(-50%, -50%)',
                        opacity: '1',
                    })),
                    animations_1.state('hideM', animations_1.style({
                        transform: 'translate(-50%, -80%)',
                        opacity: '0',
                    })),
                    animations_1.transition('showM <=> hideM', animations_1.animate('200ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], JdbPlgDialogComponent);
    return JdbPlgDialogComponent;
}());
exports.JdbPlgDialogComponent = JdbPlgDialogComponent;
