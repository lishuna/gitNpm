/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ hasOwnProperty = Object.prototype.hasOwnProperty;
var /** @type {?} */ propIsEnumerable = Object.prototype.propertyIsEnumerable;
/**
 * @param {?} val
 * @return {?}
 */
export function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
/**
 * @param {?} target
 * @param {...?} source
 * @return {?}
 */
export function objectAssign(target) {
    var source = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        source[_i - 1] = arguments[_i];
    }
    var /** @type {?} */ from;
    var /** @type {?} */ to = toObject(target);
    var /** @type {?} */ symbols;
    for (var /** @type {?} */ s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var /** @type {?} */ key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if ((/** @type {?} */ (Object)).getOwnPropertySymbols) {
            symbols = (/** @type {?} */ (Object)).getOwnPropertySymbols(from);
            for (var /** @type {?} */ i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
}
//# sourceMappingURL=object-assign.js.map