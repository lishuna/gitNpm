/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
var OnlyNumberDirective = /** @class */ (function () {
    function OnlyNumberDirective(el) {
        this.el = el;
        this.regexStr = '^[0-9]*$';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    OnlyNumberDirective.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ e = /** @type {?} */ (event);
        if (this.appOnlyNumber) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+V
                (e.keyCode === 86 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            var /** @type {?} */ ch = String.fromCharCode(e.keyCode);
            var /** @type {?} */ regEx = new RegExp(this.regexStr);
            if (regEx.test(ch)) {
                return;
            }
            else {
                e.preventDefault();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    OnlyNumberDirective.prototype.onKeyUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.el.nativeElement.value = this.el.nativeElement.value.replace(/\D/g, '');
    };
    OnlyNumberDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appOnlyNumber]'
                },] },
    ];
    /** @nocollapse */
    OnlyNumberDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    OnlyNumberDirective.propDecorators = {
        "appOnlyNumber": [{ type: Input },],
        "onKeyDown": [{ type: HostListener, args: ['keydown', ['$event'],] },],
        "onKeyUp": [{ type: HostListener, args: ['keyup', ['$event'],] },],
    };
    return OnlyNumberDirective;
}());
export { OnlyNumberDirective };
function OnlyNumberDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    OnlyNumberDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    OnlyNumberDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    OnlyNumberDirective.propDecorators;
    /** @type {?} */
    OnlyNumberDirective.prototype.regexStr;
    /** @type {?} */
    OnlyNumberDirective.prototype.appOnlyNumber;
    /** @type {?} */
    OnlyNumberDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25seS1udW1iZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlc3QtdWkvY29yZS8iLCJzb3VyY2VzIjpbImNvcmUvZGlyZWN0aXZlL29ubHktbnVtYmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFPekUsNkJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO3dCQUN2QixVQUFVO0tBRGtCOzs7OztJQUlGLHVDQUFTOzs7O2NBQUMsS0FBSztRQUNsRCxxQkFBTSxDQUFDLHFCQUFrQixLQUFLLENBQUEsQ0FBQztRQUMvQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOztnQkFFeEQsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQzs7Z0JBRXhDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7O2dCQUV4QyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDOztnQkFFeEMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQzs7Z0JBRXhDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsRUFBRTs7Z0JBRXRDLE9BQU87YUFDUjtZQUNELHFCQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQyxxQkFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDbEIsT0FBTzthQUNSO2lCQUFNO2dCQUNMLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUNwQjtTQUNGOzs7Ozs7SUFJZ0MscUNBQU87Ozs7Y0FBQyxLQUFLO1FBQzlDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQzs7O2dCQXRDaEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOzs7O2dCQUptQixVQUFVOzs7a0NBUzNCLEtBQUs7OEJBRUwsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs0QkE0QmxDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7OzhCQXZDbkM7O1NBS2EsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBPbmx5TnVtYmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgT25seU51bWJlckRpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG4gIHJlZ2V4U3RyID0gJ15bMC05XSokJztcbiAgQElucHV0KCkgYXBwT25seU51bWJlcjogYm9vbGVhbjtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgY29uc3QgZSA9IDxLZXlib2FyZEV2ZW50PmV2ZW50O1xuICAgIGlmICh0aGlzLmFwcE9ubHlOdW1iZXIpIHtcbiAgICAgIGlmIChbNDYsIDgsIDksIDI3LCAxMywgMTEwLCAxOTBdLmluZGV4T2YoZS5rZXlDb2RlKSAhPT0gLTEgfHxcbiAgICAgICAgLy8gQWxsb3c6IEN0cmwrQVxuICAgICAgICAoZS5rZXlDb2RlID09PSA2NSAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8XG4gICAgICAgIC8vIEFsbG93OiBDdHJsK0NcbiAgICAgICAgKGUua2V5Q29kZSA9PT0gNjcgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fFxuICAgICAgICAvLyBBbGxvdzogQ3RybCtWXG4gICAgICAgIChlLmtleUNvZGUgPT09IDg2ICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHxcbiAgICAgICAgLy8gQWxsb3c6IEN0cmwrWFxuICAgICAgICAoZS5rZXlDb2RlID09PSA4OCAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8XG4gICAgICAgIC8vIEFsbG93OiBob21lLCBlbmQsIGxlZnQsIHJpZ2h0XG4gICAgICAgIChlLmtleUNvZGUgPj0gMzUgJiYgZS5rZXlDb2RlIDw9IDM5KSkge1xuICAgICAgICAvLyBsZXQgaXQgaGFwcGVuLCBkb24ndCBkbyBhbnl0aGluZ1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKTtcbiAgICAgIGNvbnN0IHJlZ0V4ID0gbmV3IFJlZ0V4cCh0aGlzLnJlZ2V4U3RyKTtcbiAgICAgIGlmIChyZWdFeC50ZXN0KGNoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8g6Kej5Yaz5Lit5paH6L6T5YWl5rOV6L6T5YWl5rGJ5a2X6Zeu6aKYXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSkgb25LZXlVcChldmVudCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICB9XG59XG4iXX0=