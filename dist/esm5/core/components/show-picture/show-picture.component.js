/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ShowPictureComponent = /** @class */ (function () {
    function ShowPictureComponent() {
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ShowPictureComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ShowPictureComponent.prototype.closeModel = /**
     * @return {?}
     */
    function () {
        this.update.emit({ status: false });
    };
    ShowPictureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-show-picture',
                    template: "<div>\n    <div class=\"img-mask\" (click)=\"closeModel()\">\n        <!-- \u906E\u7F69\u5C42 -->\n    </div>\n    <div class=\"img-content\">\n          <span class=\"close\" (click)=\"closeModel()\">\n            <img src=\"/assets/images/close-x.png\" alt=\"\">\n          </span>\n          <img [src]=\"pictureUrl\" alt=\"\" style=\"max-height: 600px;max-width: 800px;\">\n    </div>\n</div>\n",
                    styles: ["@charset \"UTF-8\";.img-mask{width:100%;height:100%;background:#000;position:fixed;top:0;left:0;-moz-opacity:.3;opacity:.8;z-index:9998;display:block}.img-content{background-color:#d7d8db;position:fixed;width:800px;height:600px;margin-left:-400px;left:50%;margin-top:-300px;top:50%;line-height:600px;border:1px solid #e1e2e6;z-index:9999;text-align:center;box-sizing:border-box;font-size:0;border:none}.img-content .close{position:absolute;width:22px;height:22px;border-radius:11px;background-color:#e7e8e9;top:8px;right:8px;z-index:9999;text-align:center;line-height:8px}.img-content img{vertical-align:middle}"]
                },] },
    ];
    /** @nocollapse */
    ShowPictureComponent.ctorParameters = function () { return []; };
    ShowPictureComponent.propDecorators = {
        "pictureUrl": [{ type: Input },],
        "update": [{ type: Output },],
    };
    return ShowPictureComponent;
}());
export { ShowPictureComponent };
function ShowPictureComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ShowPictureComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ShowPictureComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ShowPictureComponent.propDecorators;
    /** @type {?} */
    ShowPictureComponent.prototype.pictureUrl;
    /** @type {?} */
    ShowPictureComponent.prototype.update;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1waWN0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZXN0LXVpL2NvcmUvIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvc2hvdy1waWN0dXJlL3Nob3ctcGljdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7O0lBcUI1RTtzQkFEbUIsSUFBSSxZQUFZLEVBQXFCO0tBQ3ZDOzs7O0lBRWpCLHVDQUFROzs7SUFBUjtLQUVDOzs7O0lBQ0QseUNBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtLQUNsQzs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsZ1pBV1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMscW1CQUFtbUIsQ0FBQztpQkFDOW1COzs7OzsrQkFFRSxLQUFLOzJCQUNMLE1BQU07OytCQXBCVDs7U0FrQmEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaG93LXBpY3R1cmUnLFxuICB0ZW1wbGF0ZTogYDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cImltZy1tYXNrXCIgKGNsaWNrKT1cImNsb3NlTW9kZWwoKVwiPlxuICAgICAgICA8IS0tIOmBrue9qeWxgiAtLT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRlbnRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cImNsb3NlTW9kZWwoKVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9jbG9zZS14LnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwicGljdHVyZVVybFwiIGFsdD1cIlwiIHN0eWxlPVwibWF4LWhlaWdodDogNjAwcHg7bWF4LXdpZHRoOiA4MDBweDtcIj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYEBjaGFyc2V0IFwiVVRGLThcIjsuaW1nLW1hc2t7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOiMwMDA7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowOy1tb3otb3BhY2l0eTouMztvcGFjaXR5Oi44O3otaW5kZXg6OTk5ODtkaXNwbGF5OmJsb2NrfS5pbWctY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q4ZGI7cG9zaXRpb246Zml4ZWQ7d2lkdGg6ODAwcHg7aGVpZ2h0OjYwMHB4O21hcmdpbi1sZWZ0Oi00MDBweDtsZWZ0OjUwJTttYXJnaW4tdG9wOi0zMDBweDt0b3A6NTAlO2xpbmUtaGVpZ2h0OjYwMHB4O2JvcmRlcjoxcHggc29saWQgI2UxZTJlNjt6LWluZGV4Ojk5OTk7dGV4dC1hbGlnbjpjZW50ZXI7Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtc2l6ZTowO2JvcmRlcjpub25lfS5pbWctY29udGVudCAuY2xvc2V7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjJweDtoZWlnaHQ6MjJweDtib3JkZXItcmFkaXVzOjExcHg7YmFja2dyb3VuZC1jb2xvcjojZTdlOGU5O3RvcDo4cHg7cmlnaHQ6OHB4O3otaW5kZXg6OTk5OTt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDo4cHh9LmltZy1jb250ZW50IGltZ3t2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9YF1cbn0pXG5leHBvcnQgY2xhc3MgU2hvd1BpY3R1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwaWN0dXJlVXJsOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHtzdGF0dXM6IGJvb2xlYW59PigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cbiAgY2xvc2VNb2RlbCgpe1xuICAgIHRoaXMudXBkYXRlLmVtaXQoe3N0YXR1czogZmFsc2V9KVxuICB9XG59XG4iXX0=