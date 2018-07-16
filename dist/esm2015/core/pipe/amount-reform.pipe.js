/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
export class AmountReformPipe {
    /**
     * @param {?} val
     * @return {?}
     */
    transform(val) {
        if (val === 0) {
            return '0.00';
        }
        if (!val) {
            return '';
        }
        return (val / 100).toFixed(2);
    }
}
AmountReformPipe.decorators = [
    { type: Pipe, args: [{ name: 'amountReformPipe' },] },
];
function AmountReformPipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AmountReformPipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AmountReformPipe.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1vdW50LXJlZm9ybS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlc3QtdWkvY29yZS8iLCJzb3VyY2VzIjpbImNvcmUvcGlwZS9hbW91bnQtcmVmb3JtLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBR25ELE1BQU07Ozs7O0lBQ0YsU0FBUyxDQUFDLEdBQU87UUFDYixJQUFHLEdBQUcsS0FBSyxDQUFDLEVBQUM7WUFDVCxPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUNELElBQUcsQ0FBQyxHQUFHLEVBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztTQUNiO1FBQ0QsT0FBTyxDQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0I7OztZQVZKLElBQUksU0FBQyxFQUFDLElBQUksRUFBQyxrQkFBa0IsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7bmFtZTonYW1vdW50UmVmb3JtUGlwZSd9KVxuZXhwb3J0IGNsYXNzIEFtb3VudFJlZm9ybVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xuICAgIHRyYW5zZm9ybSh2YWw6YW55KTpzdHJpbmd7XG4gICAgICAgIGlmKHZhbCA9PT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gJzAuMDAnO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF2YWwpe1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodmFsLzEwMCkudG9GaXhlZCgyKTtcbiAgICB9XG59Il19