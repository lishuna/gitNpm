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
var DragDirective = (function () {
    function DragDirective(elem, render) {
        this.elem = elem;
        this.render = render;
        this.isDown = false;
    }
    DragDirective.prototype.onMousedown = function (event) {
        var wRate = localStorage.getItem('dragWidth');
        var hRate = localStorage.getItem('dragHeight');
        this.isDown = true;
        this.disLeft = this.elem.nativeElement.offsetLeft;
        this.disTop = this.elem.nativeElement.offsetTop;
        this.disX = event.clientX;
        this.disY = event.clientY;
        event.target.style.cursor = 'move';
    };
    DragDirective.prototype.onMousemove = function (event) {
        event.preventDefault();
        if (this.isDown) {
            var newdisX = event.clientX - this.disX;
            var newdisY = event.clientY - this.disY;
            this.elem.nativeElement.style.left = newdisX + this.disLeft + 'px';
            this.elem.nativeElement.style.top = newdisY + this.disTop + 'px';
        }
        return false;
    };
    DragDirective.prototype.onMouseup = function () {
        if (this.isDown) {
            this.isDown = false;
            this.disLeft = this.elem.nativeElement.offsetLeft;
            this.disTop = this.elem.nativeElement.offsetTop;
        }
    };
    DragDirective.prototype.onMouseleave = function () {
        this.isDown = false;
    };
    DragDirective.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.HostListener('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DragDirective.prototype, "onMousedown", null);
    __decorate([
        core_1.HostListener('mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DragDirective.prototype, "onMousemove", null);
    __decorate([
        core_1.HostListener('mouseup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DragDirective.prototype, "onMouseup", null);
    __decorate([
        core_1.HostListener('mouseleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DragDirective.prototype, "onMouseleave", null);
    DragDirective = __decorate([
        core_1.Directive({
            selector: 'img[appDragDirective]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer])
    ], DragDirective);
    return DragDirective;
}());
exports.DragDirective = DragDirective;
