/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Renderer2, ElementRef } from '@angular/core';
var JdbPlgButtonComponent = /** @class */ (function () {
    function JdbPlgButtonComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._prefixCls = 'jdb-plg-btn';
        this._el = this._elementRef.nativeElement;
        this.nativeElement = this._elementRef.nativeElement;
        this._renderer.addClass(this._el, this._prefixCls);
    }
    Object.defineProperty(JdbPlgButtonComponent.prototype, "jdbSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                value = 'default';
            }
            this.size = value;
            // this._renderer.addClass(this._el, this.size);
            this._setClassMap(this.loading);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgButtonComponent.prototype, "jdbType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                value = 'primary';
            }
            this.type = value;
            // this._renderer.addClass(this._el, this.type);
            this._setClassMap(this.loading);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgButtonComponent.prototype, "jdbLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this.loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = value === '' || (value && value !== 'false');
            this.loading = value;
            this._setClassMap(this.loading);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} loading
     * @return {?}
     */
    JdbPlgButtonComponent.prototype._setClassMap = /**
     * @param {?} loading
     * @return {?}
     */
    function (loading) {
        this._renderer.removeClass(this._el, 'undefined');
        this._renderer.addClass(this._el, this.size);
        this._renderer.addClass(this._el, this.type);
        if (loading) {
            this._renderer.addClass(this._el, 'loading_disable');
        }
        else {
            this._renderer.removeClass(this._el, 'loading_disable');
        }
    };
    /**
     * @return {?}
     */
    JdbPlgButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    JdbPlgButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: '[app-jdb-plg-button]',
                    template: "<i class=\"jdb-icon-loading action\" *ngIf=\"loading\"></i>\n<ng-content></ng-content>",
                    styles: ["@-webkit-keyframes loadingCircle{0%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loadingCircle{0%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host.jdb-plg-btn{font-weight:500;white-space:nowrap;cursor:pointer;outline:0}:host.jdb-plg-btn .action{display:inline-block;vertical-align:middle}:host.jdb-plg-btn .action:before{display:inline-block;-webkit-animation:1s linear infinite loadingCircle;animation:1s linear infinite loadingCircle}:host.jdb-plg-btn .action2{display:inline-block;-webkit-transform:translateY(-37%);transform:translateY(-37%)}:host.large{min-width:120px;line-height:40px;border-radius:4px;padding:0 16px}:host.default{min-width:100px;line-height:30px;border-radius:3px;padding:0 12px}:host.small{min-width:60px;line-height:24px;border-radius:2px;padding:0 10px}:host.small .action{width:24px;height:24px}:host.primary{background-color:#3f69f2;color:#fff;border:1px solid #3f69f2}:host.primary:hover{background-color:#4d76ff;border:1px solid #4d76ff}:host.primary:active{background-color:#264199;border:1px solid #264199}:host.primary:disabled{background-color:#aabbf2;border:1px solid #aabbf2}:host.gray{background-color:#f0f1f5;color:#575757;border:1px solid #d7d8db}:host.gray:hover{background-color:#fff}:host.gray:active{background-color:#d7d8db}:host.gray:disabled{background-color:#f0f1f5}:host.danger{background-color:#f84a4a;color:#fff;border:1px solid #f84a4a}:host.danger:hover{background-color:#f66;border:1px solid #f66}:host.danger:active{background-color:#c32929;border:1px solid #c32929}:host.danger:disabled{background-color:#e6bcbc;border:1px solid #e6bcbc}:host.buleline{background-color:#fff;color:#3f69f2;border:1px solid #3f69f2}:host.buleline:hover{background-color:#ebf0fe}:host.buleline:active{background-color:#d7d8db}:host.buleline:disabled{color:#afb0b3;border:1px solid #afb0b3;background-color:#f0f1f5}:host.white{background-color:#fff;color:#575757;border:1px solid #afb0b3}:host.white:hover{background-color:#f0f1f5}:host.white:active{background-color:#d7d8db}:host.white:disabled{color:#afb0b3;border:1px solid #afb0b3;background-color:#f0f1f5}:host.loading_disable{background-color:#aabbf2;border:1px solid #aabbf2;pointer-events:none}"]
                },] },
    ];
    /** @nocollapse */
    JdbPlgButtonComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    JdbPlgButtonComponent.propDecorators = {
        "jdbSize": [{ type: Input },],
        "jdbType": [{ type: Input },],
        "jdbLoading": [{ type: Input },],
    };
    return JdbPlgButtonComponent;
}());
export { JdbPlgButtonComponent };
function JdbPlgButtonComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    JdbPlgButtonComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    JdbPlgButtonComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    JdbPlgButtonComponent.propDecorators;
    /** @type {?} */
    JdbPlgButtonComponent.prototype._el;
    /** @type {?} */
    JdbPlgButtonComponent.prototype.nativeElement;
    /** @type {?} */
    JdbPlgButtonComponent.prototype._prefixCls;
    /** @type {?} */
    JdbPlgButtonComponent.prototype.size;
    /** @type {?} */
    JdbPlgButtonComponent.prototype.type;
    /** @type {?} */
    JdbPlgButtonComponent.prototype.loading;
    /** @type {?} */
    JdbPlgButtonComponent.prototype._elementRef;
    /** @type {?} */
    JdbPlgButtonComponent.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRiLXBsZy1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlc3QtdWkvY29yZS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9qZGItcGxnLWJ1dHRvbi9qZGItcGxnLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBZ0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQTBENUYsK0JBQW9CLFdBQXVCLEVBQVUsU0FBb0I7UUFBckQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXOzBCQTFDNUQsYUFBYTtRQTRDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUUxQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3BEOzBCQTFDRywwQ0FBTzs7Ozs7WUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7OztRQUVuQixVQUFZLEtBQWlCO1lBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsS0FBSyxHQUFHLFNBQVMsQ0FBQzthQUNuQjtZQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDOztZQUVsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQzs7OzswQkFHRywwQ0FBTzs7Ozs7WUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7OztRQUVuQixVQUFZLEtBQWlCO1lBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsS0FBSyxHQUFHLFNBQVMsQ0FBQzthQUNuQjtZQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDOztZQUVsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQzs7OzswQkFHRyw2Q0FBVTs7Ozs7WUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7OztRQUd0QixVQUFlLEtBQXVCO1lBQ3BDLEtBQUssR0FBRyxLQUFLLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQzs7Ozs7Ozs7SUFTRCw0Q0FBWTs7OztJQUFaLFVBQWEsT0FBTztRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3REO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7U0FDekQ7S0FDRjs7OztJQUVELHdDQUFROzs7SUFBUjtLQUNDOztnQkF4RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSx3RkFDYztvQkFDeEIsTUFBTSxFQUFFLENBQUMseWdGQUF5Z0YsQ0FBQztpQkFDcGhGOzs7O2dCQVYyRCxVQUFVO2dCQUFuQyxTQUFTOzs7NEJBcUJ6QyxLQUFLOzRCQWFMLEtBQUs7K0JBYUwsS0FBSzs7Z0NBL0NSOztTQVlhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgYnV0dG9uU2l6ZSA9ICdzbWFsbCcgfCAnbGFyZ2UnIHwgJ2RlZmF1bHQnO1xuZXhwb3J0IHR5cGUgYnV0dG9uVHlwZSA9ICdwcmltYXJ5JyB8ICdncmF5JyB8ICdkYW5nZXInIHwgJ2J1bGVsaW5lJyB8ICd3aGl0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1thcHAtamRiLXBsZy1idXR0b25dJyxcbiAgdGVtcGxhdGU6IGA8aSBjbGFzcz1cImpkYi1pY29uLWxvYWRpbmcgYWN0aW9uXCIgKm5nSWY9XCJsb2FkaW5nXCI+PC9pPlxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlczogW2BALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGluZ0NpcmNsZXswJXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIGxvYWRpbmdDaXJjbGV7MCV7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7dHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7dHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19Omhvc3QuamRiLXBsZy1idG57Zm9udC13ZWlnaHQ6NTAwO3doaXRlLXNwYWNlOm5vd3JhcDtjdXJzb3I6cG9pbnRlcjtvdXRsaW5lOjB9Omhvc3QuamRiLXBsZy1idG4gLmFjdGlvbntkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Omhvc3QuamRiLXBsZy1idG4gLmFjdGlvbjpiZWZvcmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC1hbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGxvYWRpbmdDaXJjbGU7YW5pbWF0aW9uOjFzIGxpbmVhciBpbmZpbml0ZSBsb2FkaW5nQ2lyY2xlfTpob3N0LmpkYi1wbGctYnRuIC5hY3Rpb24ye2Rpc3BsYXk6aW5saW5lLWJsb2NrOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTM3JSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTM3JSl9Omhvc3QubGFyZ2V7bWluLXdpZHRoOjEyMHB4O2xpbmUtaGVpZ2h0OjQwcHg7Ym9yZGVyLXJhZGl1czo0cHg7cGFkZGluZzowIDE2cHh9Omhvc3QuZGVmYXVsdHttaW4td2lkdGg6MTAwcHg7bGluZS1oZWlnaHQ6MzBweDtib3JkZXItcmFkaXVzOjNweDtwYWRkaW5nOjAgMTJweH06aG9zdC5zbWFsbHttaW4td2lkdGg6NjBweDtsaW5lLWhlaWdodDoyNHB4O2JvcmRlci1yYWRpdXM6MnB4O3BhZGRpbmc6MCAxMHB4fTpob3N0LnNtYWxsIC5hY3Rpb257d2lkdGg6MjRweDtoZWlnaHQ6MjRweH06aG9zdC5wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzNmNjlmMjtjb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgIzNmNjlmMn06aG9zdC5wcmltYXJ5OmhvdmVye2JhY2tncm91bmQtY29sb3I6IzRkNzZmZjtib3JkZXI6MXB4IHNvbGlkICM0ZDc2ZmZ9Omhvc3QucHJpbWFyeTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMjY0MTk5O2JvcmRlcjoxcHggc29saWQgIzI2NDE5OX06aG9zdC5wcmltYXJ5OmRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2FhYmJmMjtib3JkZXI6MXB4IHNvbGlkICNhYWJiZjJ9Omhvc3QuZ3JheXtiYWNrZ3JvdW5kLWNvbG9yOiNmMGYxZjU7Y29sb3I6IzU3NTc1Nztib3JkZXI6MXB4IHNvbGlkICNkN2Q4ZGJ9Omhvc3QuZ3JheTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Omhvc3QuZ3JheTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZDdkOGRifTpob3N0LmdyYXk6ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjBmMWY1fTpob3N0LmRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmODRhNGE7Y29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNmODRhNGF9Omhvc3QuZGFuZ2VyOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Y2Njtib3JkZXI6MXB4IHNvbGlkICNmNjZ9Omhvc3QuZGFuZ2VyOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNjMzI5Mjk7Ym9yZGVyOjFweCBzb2xpZCAjYzMyOTI5fTpob3N0LmRhbmdlcjpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNlNmJjYmM7Ym9yZGVyOjFweCBzb2xpZCAjZTZiY2JjfTpob3N0LmJ1bGVsaW5le2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojM2Y2OWYyO2JvcmRlcjoxcHggc29saWQgIzNmNjlmMn06aG9zdC5idWxlbGluZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlYmYwZmV9Omhvc3QuYnVsZWxpbmU6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2Q3ZDhkYn06aG9zdC5idWxlbGluZTpkaXNhYmxlZHtjb2xvcjojYWZiMGIzO2JvcmRlcjoxcHggc29saWQgI2FmYjBiMztiYWNrZ3JvdW5kLWNvbG9yOiNmMGYxZjV9Omhvc3Qud2hpdGV7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiM1NzU3NTc7Ym9yZGVyOjFweCBzb2xpZCAjYWZiMGIzfTpob3N0LndoaXRlOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YwZjFmNX06aG9zdC53aGl0ZTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZDdkOGRifTpob3N0LndoaXRlOmRpc2FibGVke2NvbG9yOiNhZmIwYjM7Ym9yZGVyOjFweCBzb2xpZCAjYWZiMGIzO2JhY2tncm91bmQtY29sb3I6I2YwZjFmNX06aG9zdC5sb2FkaW5nX2Rpc2FibGV7YmFja2dyb3VuZC1jb2xvcjojYWFiYmYyO2JvcmRlcjoxcHggc29saWQgI2FhYmJmMjtwb2ludGVyLWV2ZW50czpub25lfWBdXG59KVxuXG5leHBvcnQgY2xhc3MgSmRiUGxnQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBfZWw6IEhUTUxFbGVtZW50O1xuICBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgX3ByZWZpeENscyA9ICdqZGItcGxnLWJ0bic7XG4gIHNpemU6IGJ1dHRvblNpemU7ICAgICAgICAgICAgLy8gc2l6ZeeahOWAvCAnc21hbGwnIOOAgSAnbGFyZ2UnIOOAgSAnZGVmYXVsdCdcbiAgdHlwZTogYnV0dG9uVHlwZTsgICAgICAgICAgICAvLyB0eXBl55qE5YC8ICdwcmltYXJ5JyDjgIEgJ2dyYXknIOOAgSAnZGFuZ2VyJ+OAgSdidWxlbGluZScg44CBJ3doaXRlJ1xuICBsb2FkaW5nOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBqZGJTaXplKCkge1xuICAgIHJldHVybiB0aGlzLnNpemU7XG4gIH1cbiAgc2V0IGpkYlNpemUodmFsdWU6IGJ1dHRvblNpemUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB2YWx1ZSA9ICdkZWZhdWx0JztcbiAgICB9XG4gICAgdGhpcy5zaXplID0gdmFsdWU7XG4gICAgLy8gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwsIHRoaXMuc2l6ZSk7XG4gICAgdGhpcy5fc2V0Q2xhc3NNYXAodGhpcy5sb2FkaW5nKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBqZGJUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cbiAgc2V0IGpkYlR5cGUodmFsdWU6IGJ1dHRvblR5cGUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB2YWx1ZSA9ICdwcmltYXJ5JztcbiAgICB9XG4gICAgdGhpcy50eXBlID0gdmFsdWU7XG4gICAgLy8gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwsIHRoaXMudHlwZSk7XG4gICAgdGhpcy5fc2V0Q2xhc3NNYXAodGhpcy5sb2FkaW5nKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBqZGJMb2FkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gIH1cblxuICBzZXQgamRiTG9hZGluZyh2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykge1xuICAgIHZhbHVlID0gdmFsdWUgPT09ICcnIHx8ICh2YWx1ZSAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gICAgdGhpcy5sb2FkaW5nID0gdmFsdWU7XG4gICAgdGhpcy5fc2V0Q2xhc3NNYXAodGhpcy5sb2FkaW5nKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblxuICAgIHRoaXMuX2VsID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5uYXRpdmVFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLCB0aGlzLl9wcmVmaXhDbHMpO1xuICB9XG4gIF9zZXRDbGFzc01hcChsb2FkaW5nKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwsICd1bmRlZmluZWQnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbCwgdGhpcy5zaXplKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbCwgdGhpcy50eXBlKTtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwsICdsb2FkaW5nX2Rpc2FibGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwsICdsb2FkaW5nX2Rpc2FibGUnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=