/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Renderer2, ElementRef } from '@angular/core';
export class JdbPlgButtonComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._prefixCls = 'jdb-plg-btn';
        this._el = this._elementRef.nativeElement;
        this.nativeElement = this._elementRef.nativeElement;
        this._renderer.addClass(this._el, this._prefixCls);
    }
    /**
     * @return {?}
     */
    get jdbSize() {
        return this.size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbSize(value) {
        if (!value) {
            value = 'default';
        }
        this.size = value;
        // this._renderer.addClass(this._el, this.size);
        this._setClassMap(this.loading);
    }
    /**
     * @return {?}
     */
    get jdbType() {
        return this.type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbType(value) {
        if (!value) {
            value = 'primary';
        }
        this.type = value;
        // this._renderer.addClass(this._el, this.type);
        this._setClassMap(this.loading);
    }
    /**
     * @return {?}
     */
    get jdbLoading() {
        return this.loading;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbLoading(value) {
        value = value === '' || (value && value !== 'false');
        this.loading = value;
        this._setClassMap(this.loading);
    }
    /**
     * @param {?} loading
     * @return {?}
     */
    _setClassMap(loading) {
        this._renderer.removeClass(this._el, 'undefined');
        this._renderer.addClass(this._el, this.size);
        this._renderer.addClass(this._el, this.type);
        if (loading) {
            this._renderer.addClass(this._el, 'loading_disable');
        }
        else {
            this._renderer.removeClass(this._el, 'loading_disable');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
JdbPlgButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[app-jdb-plg-button]',
                template: `<i class="jdb-icon-loading action" *ngIf="loading"></i>
<ng-content></ng-content>`,
                styles: [`@-webkit-keyframes loadingCircle{0%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loadingCircle{0%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host.jdb-plg-btn{font-weight:500;white-space:nowrap;cursor:pointer;outline:0}:host.jdb-plg-btn .action{display:inline-block;vertical-align:middle}:host.jdb-plg-btn .action:before{display:inline-block;-webkit-animation:1s linear infinite loadingCircle;animation:1s linear infinite loadingCircle}:host.jdb-plg-btn .action2{display:inline-block;-webkit-transform:translateY(-37%);transform:translateY(-37%)}:host.large{min-width:120px;line-height:40px;border-radius:4px;padding:0 16px}:host.default{min-width:100px;line-height:30px;border-radius:3px;padding:0 12px}:host.small{min-width:60px;line-height:24px;border-radius:2px;padding:0 10px}:host.small .action{width:24px;height:24px}:host.primary{background-color:#3f69f2;color:#fff;border:1px solid #3f69f2}:host.primary:hover{background-color:#4d76ff;border:1px solid #4d76ff}:host.primary:active{background-color:#264199;border:1px solid #264199}:host.primary:disabled{background-color:#aabbf2;border:1px solid #aabbf2}:host.gray{background-color:#f0f1f5;color:#575757;border:1px solid #d7d8db}:host.gray:hover{background-color:#fff}:host.gray:active{background-color:#d7d8db}:host.gray:disabled{background-color:#f0f1f5}:host.danger{background-color:#f84a4a;color:#fff;border:1px solid #f84a4a}:host.danger:hover{background-color:#f66;border:1px solid #f66}:host.danger:active{background-color:#c32929;border:1px solid #c32929}:host.danger:disabled{background-color:#e6bcbc;border:1px solid #e6bcbc}:host.buleline{background-color:#fff;color:#3f69f2;border:1px solid #3f69f2}:host.buleline:hover{background-color:#ebf0fe}:host.buleline:active{background-color:#d7d8db}:host.buleline:disabled{color:#afb0b3;border:1px solid #afb0b3;background-color:#f0f1f5}:host.white{background-color:#fff;color:#575757;border:1px solid #afb0b3}:host.white:hover{background-color:#f0f1f5}:host.white:active{background-color:#d7d8db}:host.white:disabled{color:#afb0b3;border:1px solid #afb0b3;background-color:#f0f1f5}:host.loading_disable{background-color:#aabbf2;border:1px solid #aabbf2;pointer-events:none}`]
            },] },
];
/** @nocollapse */
JdbPlgButtonComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
JdbPlgButtonComponent.propDecorators = {
    "jdbSize": [{ type: Input },],
    "jdbType": [{ type: Input },],
    "jdbLoading": [{ type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRiLXBsZy1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlc3QtdWkvY29yZS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9qZGItcGxnLWJ1dHRvbi9qZGItcGxnLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBZ0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWTlGLE1BQU07Ozs7O0lBOENKLFlBQW9CLFdBQXVCLEVBQVUsU0FBb0I7UUFBckQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXOzBCQTFDNUQsYUFBYTtRQTRDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUUxQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3BEOzs7O1FBMUNHLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7OztJQUVuQixJQUFJLE9BQU8sQ0FBQyxLQUFpQjtRQUMzQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDOztRQUVsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNqQzs7OztRQUdHLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7OztJQUVuQixJQUFJLE9BQU8sQ0FBQyxLQUFpQjtRQUMzQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDOztRQUVsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNqQzs7OztRQUdHLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7OztJQUd0QixJQUFJLFVBQVUsQ0FBQyxLQUF1QjtRQUNwQyxLQUFLLEdBQUcsS0FBSyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDakM7Ozs7O0lBU0QsWUFBWSxDQUFDLE9BQU87UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUN0RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3pEO0tBQ0Y7Ozs7SUFFRCxRQUFRO0tBQ1A7OztZQXhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzBCQUNjO2dCQUN4QixNQUFNLEVBQUUsQ0FBQyx5Z0ZBQXlnRixDQUFDO2FBQ3BoRjs7OztZQVYyRCxVQUFVO1lBQW5DLFNBQVM7Ozt3QkFxQnpDLEtBQUs7d0JBYUwsS0FBSzsyQkFhTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBidXR0b25TaXplID0gJ3NtYWxsJyB8ICdsYXJnZScgfCAnZGVmYXVsdCc7XG5leHBvcnQgdHlwZSBidXR0b25UeXBlID0gJ3ByaW1hcnknIHwgJ2dyYXknIHwgJ2RhbmdlcicgfCAnYnVsZWxpbmUnIHwgJ3doaXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2FwcC1qZGItcGxnLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYDxpIGNsYXNzPVwiamRiLWljb24tbG9hZGluZyBhY3Rpb25cIiAqbmdJZj1cImxvYWRpbmdcIj48L2k+XG48bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVzOiBbYEAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nQ2lyY2xlezAley13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgbG9hZGluZ0NpcmNsZXswJXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX06aG9zdC5qZGItcGxnLWJ0bntmb250LXdlaWdodDo1MDA7d2hpdGUtc3BhY2U6bm93cmFwO2N1cnNvcjpwb2ludGVyO291dGxpbmU6MH06aG9zdC5qZGItcGxnLWJ0biAuYWN0aW9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX06aG9zdC5qZGItcGxnLWJ0biAuYWN0aW9uOmJlZm9yZXtkaXNwbGF5OmlubGluZS1ibG9jazstd2Via2l0LWFuaW1hdGlvbjoxcyBsaW5lYXIgaW5maW5pdGUgbG9hZGluZ0NpcmNsZTthbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGxvYWRpbmdDaXJjbGV9Omhvc3QuamRiLXBsZy1idG4gLmFjdGlvbjJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMzclKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMzclKX06aG9zdC5sYXJnZXttaW4td2lkdGg6MTIwcHg7bGluZS1oZWlnaHQ6NDBweDtib3JkZXItcmFkaXVzOjRweDtwYWRkaW5nOjAgMTZweH06aG9zdC5kZWZhdWx0e21pbi13aWR0aDoxMDBweDtsaW5lLWhlaWdodDozMHB4O2JvcmRlci1yYWRpdXM6M3B4O3BhZGRpbmc6MCAxMnB4fTpob3N0LnNtYWxse21pbi13aWR0aDo2MHB4O2xpbmUtaGVpZ2h0OjI0cHg7Ym9yZGVyLXJhZGl1czoycHg7cGFkZGluZzowIDEwcHh9Omhvc3Quc21hbGwgLmFjdGlvbnt3aWR0aDoyNHB4O2hlaWdodDoyNHB4fTpob3N0LnByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojM2Y2OWYyO2NvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjM2Y2OWYyfTpob3N0LnByaW1hcnk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNGQ3NmZmO2JvcmRlcjoxcHggc29saWQgIzRkNzZmZn06aG9zdC5wcmltYXJ5OmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMyNjQxOTk7Ym9yZGVyOjFweCBzb2xpZCAjMjY0MTk5fTpob3N0LnByaW1hcnk6ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojYWFiYmYyO2JvcmRlcjoxcHggc29saWQgI2FhYmJmMn06aG9zdC5ncmF5e2JhY2tncm91bmQtY29sb3I6I2YwZjFmNTtjb2xvcjojNTc1NzU3O2JvcmRlcjoxcHggc29saWQgI2Q3ZDhkYn06aG9zdC5ncmF5OmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZn06aG9zdC5ncmF5OmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q4ZGJ9Omhvc3QuZ3JheTpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmMGYxZjV9Omhvc3QuZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2Y4NGE0YTtjb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2Y4NGE0YX06aG9zdC5kYW5nZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjY2O2JvcmRlcjoxcHggc29saWQgI2Y2Nn06aG9zdC5kYW5nZXI6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2MzMjkyOTtib3JkZXI6MXB4IHNvbGlkICNjMzI5Mjl9Omhvc3QuZGFuZ2VyOmRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2U2YmNiYztib3JkZXI6MXB4IHNvbGlkICNlNmJjYmN9Omhvc3QuYnVsZWxpbmV7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMzZjY5ZjI7Ym9yZGVyOjFweCBzb2xpZCAjM2Y2OWYyfTpob3N0LmJ1bGVsaW5lOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ViZjBmZX06aG9zdC5idWxlbGluZTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZDdkOGRifTpob3N0LmJ1bGVsaW5lOmRpc2FibGVke2NvbG9yOiNhZmIwYjM7Ym9yZGVyOjFweCBzb2xpZCAjYWZiMGIzO2JhY2tncm91bmQtY29sb3I6I2YwZjFmNX06aG9zdC53aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzU3NTc1Nztib3JkZXI6MXB4IHNvbGlkICNhZmIwYjN9Omhvc3Qud2hpdGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjBmMWY1fTpob3N0LndoaXRlOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q4ZGJ9Omhvc3Qud2hpdGU6ZGlzYWJsZWR7Y29sb3I6I2FmYjBiMztib3JkZXI6MXB4IHNvbGlkICNhZmIwYjM7YmFja2dyb3VuZC1jb2xvcjojZjBmMWY1fTpob3N0LmxvYWRpbmdfZGlzYWJsZXtiYWNrZ3JvdW5kLWNvbG9yOiNhYWJiZjI7Ym9yZGVyOjFweCBzb2xpZCAjYWFiYmYyO3BvaW50ZXItZXZlbnRzOm5vbmV9YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBKZGJQbGdCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIF9lbDogSFRNTEVsZW1lbnQ7XG4gIG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBfcHJlZml4Q2xzID0gJ2pkYi1wbGctYnRuJztcbiAgc2l6ZTogYnV0dG9uU2l6ZTsgICAgICAgICAgICAvLyBzaXpl55qE5YC8ICdzbWFsbCcg44CBICdsYXJnZScg44CBICdkZWZhdWx0J1xuICB0eXBlOiBidXR0b25UeXBlOyAgICAgICAgICAgIC8vIHR5cGXnmoTlgLwgJ3ByaW1hcnknIOOAgSAnZ3JheScg44CBICdkYW5nZXIn44CBJ2J1bGVsaW5lJyDjgIEnd2hpdGUnXG4gIGxvYWRpbmc6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgZ2V0IGpkYlNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgfVxuICBzZXQgamRiU2l6ZSh2YWx1ZTogYnV0dG9uU2l6ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJ2RlZmF1bHQnO1xuICAgIH1cbiAgICB0aGlzLnNpemUgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbCwgdGhpcy5zaXplKTtcbiAgICB0aGlzLl9zZXRDbGFzc01hcCh0aGlzLmxvYWRpbmcpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGpkYlR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuICBzZXQgamRiVHlwZSh2YWx1ZTogYnV0dG9uVHlwZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJ3ByaW1hcnknO1xuICAgIH1cbiAgICB0aGlzLnR5cGUgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbCwgdGhpcy50eXBlKTtcbiAgICB0aGlzLl9zZXRDbGFzc01hcCh0aGlzLmxvYWRpbmcpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGpkYkxvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGluZztcbiAgfVxuXG4gIHNldCBqZGJMb2FkaW5nKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSA9PT0gJycgfHwgKHZhbHVlICYmIHZhbHVlICE9PSAnZmFsc2UnKTtcbiAgICB0aGlzLmxvYWRpbmcgPSB2YWx1ZTtcbiAgICB0aGlzLl9zZXRDbGFzc01hcCh0aGlzLmxvYWRpbmcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXG4gICAgdGhpcy5fZWwgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwsIHRoaXMuX3ByZWZpeENscyk7XG4gIH1cbiAgX3NldENsYXNzTWFwKGxvYWRpbmcpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbCwgJ3VuZGVmaW5lZCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLCB0aGlzLnNpemUpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLCB0aGlzLnR5cGUpO1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbCwgJ2xvYWRpbmdfZGlzYWJsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbCwgJ2xvYWRpbmdfZGlzYWJsZScpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==