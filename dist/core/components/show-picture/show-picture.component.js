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
var ShowPictureComponent = (function () {
    function ShowPictureComponent() {
        this.update = new core_1.EventEmitter();
    }
    ShowPictureComponent.prototype.ngOnInit = function () {
    };
    ShowPictureComponent.prototype.closeModel = function () {
        this.update.emit({ status: false });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ShowPictureComponent.prototype, "pictureUrl", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ShowPictureComponent.prototype, "update", void 0);
    ShowPictureComponent = __decorate([
        core_1.Component({
            selector: 'app-show-picture',
            templateUrl: './show-picture.component.html',
            styleUrls: ['./show-picture.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ShowPictureComponent);
    return ShowPictureComponent;
}());
exports.ShowPictureComponent = ShowPictureComponent;
