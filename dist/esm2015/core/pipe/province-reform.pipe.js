/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
export class ProvinceReformPipe {
    /**
     * @param {?} val
     * @return {?}
     */
    transform(val) {
        if (val.length === 0) {
            return '';
        }
        return val.join('、');
    }
}
ProvinceReformPipe.decorators = [
    { type: Pipe, args: [{ name: 'provinceReformPipe' },] },
];
function ProvinceReformPipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ProvinceReformPipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ProvinceReformPipe.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmluY2UtcmVmb3JtLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVzdC11aS9jb3JlLyIsInNvdXJjZXMiOlsiY29yZS9waXBlL3Byb3ZpbmNlLXJlZm9ybS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUduRCxNQUFNOzs7OztJQUNGLFNBQVMsQ0FBQyxHQUFPO1FBQ2IsSUFBRyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQztZQUNoQixPQUFPLEVBQUUsQ0FBQztTQUNiO1FBQ0QsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3hCOzs7WUFQSixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe25hbWU6J3Byb3ZpbmNlUmVmb3JtUGlwZSd9KVxuZXhwb3J0IGNsYXNzIFByb3ZpbmNlUmVmb3JtUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XG4gICAgdHJhbnNmb3JtKHZhbDphbnkpOmFueXtcbiAgICAgICAgaWYodmFsLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbC5qb2luKCfjgIEnKTtcbiAgICB9XG59Il19