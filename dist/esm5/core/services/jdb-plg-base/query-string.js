/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
'use strict';
/**
 * @param {?} obj
 * @return {?}
 */
function isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
}
/**
 * @param {?} obj
 * @return {?}
 */
function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}
/**
 * @param {?} obj
 * @return {?}
 */
function isDate(obj) {
    return Object.prototype.toString.call(obj) === "[object Date]";
}
/**
 * @param {?} value
 * @return {?}
 */
function toJson(value) {
    var /** @type {?} */ jsonObj = {};
    try {
        jsonObj = JSON.parse(value);
    }
    catch (/** @type {?} */ e) {
        console.log('to json parse error');
    }
    return jsonObj;
}
/**
 * @param {?} v
 * @return {?}
 */
function serializeValue(v) {
    if (isObject(v)) {
        return isDate(v) ? v.toISOString() : toJson(v);
    }
    return v;
}
/**
 * @param {?} val
 * @param {?=} pctEncodeSpaces
 * @return {?}
 */
function encodeUriQuery(val, pctEncodeSpaces) {
    return encodeURIComponent(val).
        replace(/%40/gi, '@').
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
}
/**
 * @param {?} params
 * @return {?}
 */
export function jQueryLikeParamSerializer(params) {
    if (!params)
        return '';
    var /** @type {?} */ parts = [];
    serialize(params, '', true);
    return parts.join('&');
    /**
     * @param {?} toSerialize
     * @param {?} prefix
     * @param {?=} topLevel
     * @return {?}
     */
    function serialize(toSerialize, prefix, topLevel) {
        if (isArray(toSerialize)) {
            toSerialize.forEach(function (value, index) {
                serialize(value, prefix + '[' + (isObject(value) ? index : '') + ']');
            });
        }
        else if (isObject(toSerialize) && !isDate(toSerialize)) {
            for (var /** @type {?} */ key in toSerialize) {
                serialize(toSerialize[key], prefix +
                    (topLevel ? '' : '.') +
                    key +
                    (topLevel ? '' : ''));
                // serialize(toSerialize[key], prefix +
                //     (topLevel ? '' : '[') +
                //     key +
                //     (topLevel ? '' : ']'));
            }
        }
        else {
            parts.push(encodeUriQuery(prefix) + '=' +
                (toSerialize == null ? '' : encodeUriQuery(serializeValue(toSerialize))));
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktc3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlc3QtdWkvY29yZS8iLCJzb3VyY2VzIjpbImNvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL3F1ZXJ5LXN0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsWUFBWSxDQUFDOzs7OztBQUNiLGlCQUFpQixHQUFHO0lBQ2hCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGdCQUFnQixDQUFDO0NBQ25FOzs7OztBQUNELGtCQUFrQixHQUFHO0lBQ2pCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGlCQUFpQixDQUFDO0NBQ3BFOzs7OztBQUVELGdCQUFnQixHQUFHO0lBQ2YsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssZUFBZSxDQUFDO0NBQ2xFOzs7OztBQUVELGdCQUFnQixLQUFLO0lBQ2pCLHFCQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDakIsSUFBSTtRQUNBLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9CO0lBQUMsd0JBQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0tBQ3RDO0lBQ0QsT0FBTyxPQUFPLENBQUM7Q0FDbEI7Ozs7O0FBQ0Qsd0JBQXdCLENBQUM7SUFDckIsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDYixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEQ7SUFDRCxPQUFPLENBQUMsQ0FBQztDQUNaOzs7Ozs7QUFDRCx3QkFBd0IsR0FBRyxFQUFFLGVBQWdCO0lBQ3pDLE9BQU8sa0JBQWtCLENBQUMsR0FBRyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUN4RDs7Ozs7QUFFRCxNQUFNLG9DQUFvQyxNQUFNO0lBQzVDLElBQUksQ0FBQyxNQUFNO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDdkIscUJBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNmLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7OztJQUV2QixtQkFBbUIsV0FBZ0IsRUFBRSxNQUFXLEVBQUUsUUFBYztRQUM1RCxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN0QixXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7Z0JBQzdCLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUN6RSxDQUFDLENBQUM7U0FDTjthQUFNLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3RELEtBQUsscUJBQUksR0FBRyxJQUFJLFdBQVcsRUFBRTtnQkFDekIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNO29CQUM5QixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQ3JCLEdBQUc7b0JBQ0gsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7YUFNN0I7U0FDSjthQUFNO1lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRztnQkFDbkMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakY7S0FDSjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbn1cblxuZnVuY3Rpb24gaXNEYXRlKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IERhdGVdXCI7XG59XG5cbmZ1bmN0aW9uIHRvSnNvbih2YWx1ZSkge1xuICAgIHZhciBqc29uT2JqID0ge307XG4gICAgdHJ5IHtcbiAgICAgICAganNvbk9iaiA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvIGpzb24gcGFyc2UgZXJyb3InKTtcbiAgICB9XG4gICAgcmV0dXJuIGpzb25PYmo7XG59XG5mdW5jdGlvbiBzZXJpYWxpemVWYWx1ZSh2KSB7XG4gICAgaWYgKGlzT2JqZWN0KHYpKSB7XG4gICAgICAgIHJldHVybiBpc0RhdGUodikgPyB2LnRvSVNPU3RyaW5nKCkgOiB0b0pzb24odik7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZnVuY3Rpb24gZW5jb2RlVXJpUXVlcnkodmFsLCBwY3RFbmNvZGVTcGFjZXM/KSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgICAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICAgICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICAgICAgcmVwbGFjZSgvJTIwL2csIChwY3RFbmNvZGVTcGFjZXMgPyAnJTIwJyA6ICcrJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24galF1ZXJ5TGlrZVBhcmFtU2VyaWFsaXplcihwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcykgcmV0dXJuICcnO1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuICAgIHNlcmlhbGl6ZShwYXJhbXMsICcnLCB0cnVlKTtcbiAgICByZXR1cm4gcGFydHMuam9pbignJicpO1xuXG4gICAgZnVuY3Rpb24gc2VyaWFsaXplKHRvU2VyaWFsaXplOiBhbnksIHByZWZpeDogYW55LCB0b3BMZXZlbD86IGFueSkge1xuICAgICAgICBpZiAoaXNBcnJheSh0b1NlcmlhbGl6ZSkpIHtcbiAgICAgICAgICAgIHRvU2VyaWFsaXplLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZSh2YWx1ZSwgcHJlZml4ICsgJ1snICsgKGlzT2JqZWN0KHZhbHVlKSA/IGluZGV4IDogJycpICsgJ10nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHRvU2VyaWFsaXplKSAmJiAhaXNEYXRlKHRvU2VyaWFsaXplKSkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRvU2VyaWFsaXplKSB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplKHRvU2VyaWFsaXplW2tleV0sIHByZWZpeCArXG4gICAgICAgICAgICAgICAgICAgICh0b3BMZXZlbCA/ICcnIDogJy4nKSArXG4gICAgICAgICAgICAgICAgICAgIGtleSArXG4gICAgICAgICAgICAgICAgICAgICh0b3BMZXZlbCA/ICcnIDogJycpKTtcblxuICAgICAgICAgICAgICAgIC8vIHNlcmlhbGl6ZSh0b1NlcmlhbGl6ZVtrZXldLCBwcmVmaXggK1xuICAgICAgICAgICAgICAgIC8vICAgICAodG9wTGV2ZWwgPyAnJyA6ICdbJykgK1xuICAgICAgICAgICAgICAgIC8vICAgICBrZXkgK1xuICAgICAgICAgICAgICAgIC8vICAgICAodG9wTGV2ZWwgPyAnJyA6ICddJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHMucHVzaChlbmNvZGVVcmlRdWVyeShwcmVmaXgpICsgJz0nICtcbiAgICAgICAgICAgICAgICAodG9TZXJpYWxpemUgPT0gbnVsbCA/ICcnIDogZW5jb2RlVXJpUXVlcnkoc2VyaWFsaXplVmFsdWUodG9TZXJpYWxpemUpKSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19