/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
var AmountReformPipe = /** @class */ (function () {
    function AmountReformPipe() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    AmountReformPipe.prototype.transform = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val === 0) {
            return '0.00';
        }
        if (!val) {
            return '';
        }
        return (val / 100).toFixed(2);
    };
    AmountReformPipe.decorators = [
        { type: Pipe, args: [{ name: 'amountReformPipe' },] },
    ];
    return AmountReformPipe;
}());
export { AmountReformPipe };
function AmountReformPipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AmountReformPipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AmountReformPipe.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1vdW50LXJlZm9ybS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlc3QtdWkvY29yZS8iLCJzb3VyY2VzIjpbImNvcmUvcGlwZS9hbW91bnQtcmVmb3JtLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQUkvQyxvQ0FBUzs7OztJQUFULFVBQVUsR0FBTztRQUNiLElBQUcsR0FBRyxLQUFLLENBQUMsRUFBQztZQUNULE9BQU8sTUFBTSxDQUFDO1NBQ2pCO1FBQ0QsSUFBRyxDQUFDLEdBQUcsRUFBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxPQUFPLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMvQjs7Z0JBVkosSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDOzsyQkFGL0I7O1NBR2EsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSxQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtuYW1lOidhbW91bnRSZWZvcm1QaXBlJ30pXG5leHBvcnQgY2xhc3MgQW1vdW50UmVmb3JtUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XG4gICAgdHJhbnNmb3JtKHZhbDphbnkpOnN0cmluZ3tcbiAgICAgICAgaWYodmFsID09PSAwKXtcbiAgICAgICAgICAgIHJldHVybiAnMC4wMCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXZhbCl7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh2YWwvMTAwKS50b0ZpeGVkKDIpO1xuICAgIH1cbn0iXX0=