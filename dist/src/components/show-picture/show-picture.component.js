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
                    template: "<div> <div class=\"img-mask\" (click)=\"closeModel()\"> <!-- \u906E\u7F69\u5C42 --> </div> <div class=\"img-content\"> <span class=\"close\" (click)=\"closeModel()\"> <img src=\"/assets/images/close-x.png\" alt=\"\"> </span> <img [src]=\"pictureUrl\" alt=\"\" style=\"max-height: 600px;max-width: 800px;\"> </div> </div> ",
                    styleUrls: ['./show-picture.component.scss']
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
//# sourceMappingURL=show-picture.component.js.map