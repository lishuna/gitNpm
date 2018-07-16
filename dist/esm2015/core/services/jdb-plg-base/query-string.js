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
            toSerialize.forEach((value, index) => {
                serialize(value, prefix + '[' + (isObject(value) ? index : '') + ']');
            });
        }
        else if (isObject(toSerialize) && !isDate(toSerialize)) {
            for (let /** @type {?} */ key in toSerialize) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktc3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlc3QtdWkvY29yZS8iLCJzb3VyY2VzIjpbImNvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL3F1ZXJ5LXN0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsWUFBWSxDQUFDOzs7OztBQUNiLGlCQUFpQixHQUFHO0lBQ2hCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGdCQUFnQixDQUFDO0NBQ25FOzs7OztBQUNELGtCQUFrQixHQUFHO0lBQ2pCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGlCQUFpQixDQUFDO0NBQ3BFOzs7OztBQUVELGdCQUFnQixHQUFHO0lBQ2YsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssZUFBZSxDQUFDO0NBQ2xFOzs7OztBQUVELGdCQUFnQixLQUFLO0lBQ2pCLHFCQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDakIsSUFBSTtRQUNBLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9CO0lBQUMsd0JBQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0tBQ3RDO0lBQ0QsT0FBTyxPQUFPLENBQUM7Q0FDbEI7Ozs7O0FBQ0Qsd0JBQXdCLENBQUM7SUFDckIsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDYixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEQ7SUFDRCxPQUFPLENBQUMsQ0FBQztDQUNaOzs7Ozs7QUFDRCx3QkFBd0IsR0FBRyxFQUFFLGVBQWdCO0lBQ3pDLE9BQU8sa0JBQWtCLENBQUMsR0FBRyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUN4RDs7Ozs7QUFFRCxNQUFNLG9DQUFvQyxNQUFNO0lBQzVDLElBQUksQ0FBQyxNQUFNO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDdkIscUJBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNmLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7OztJQUV2QixtQkFBbUIsV0FBZ0IsRUFBRSxNQUFXLEVBQUUsUUFBYztRQUM1RCxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN0QixXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNqQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDekUsQ0FBQyxDQUFDO1NBQ047YUFBTSxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN0RCxLQUFLLHFCQUFJLEdBQUcsSUFBSSxXQUFXLEVBQUU7Z0JBQ3pCLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTTtvQkFDOUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUNyQixHQUFHO29CQUNILENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7O2FBTTdCO1NBQ0o7YUFBTTtZQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUc7Z0JBQ25DLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pGO0tBQ0o7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCI7XG59XG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBEYXRlXVwiO1xufVxuXG5mdW5jdGlvbiB0b0pzb24odmFsdWUpIHtcbiAgICB2YXIganNvbk9iaiA9IHt9O1xuICAgIHRyeSB7XG4gICAgICAgIGpzb25PYmogPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0byBqc29uIHBhcnNlIGVycm9yJyk7XG4gICAgfVxuICAgIHJldHVybiBqc29uT2JqO1xufVxuZnVuY3Rpb24gc2VyaWFsaXplVmFsdWUodikge1xuICAgIGlmIChpc09iamVjdCh2KSkge1xuICAgICAgICByZXR1cm4gaXNEYXRlKHYpID8gdi50b0lTT1N0cmluZygpIDogdG9Kc29uKHYpO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmZ1bmN0aW9uIGVuY29kZVVyaVF1ZXJ5KHZhbCwgcGN0RW5jb2RlU3BhY2VzPykge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICAgICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgICAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgICAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgICAgIHJlcGxhY2UoLyUyMC9nLCAocGN0RW5jb2RlU3BhY2VzID8gJyUyMCcgOiAnKycpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGpRdWVyeUxpa2VQYXJhbVNlcmlhbGl6ZXIocGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMpIHJldHVybiAnJztcbiAgICB2YXIgcGFydHMgPSBbXTtcbiAgICBzZXJpYWxpemUocGFyYW1zLCAnJywgdHJ1ZSk7XG4gICAgcmV0dXJuIHBhcnRzLmpvaW4oJyYnKTtcblxuICAgIGZ1bmN0aW9uIHNlcmlhbGl6ZSh0b1NlcmlhbGl6ZTogYW55LCBwcmVmaXg6IGFueSwgdG9wTGV2ZWw/OiBhbnkpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodG9TZXJpYWxpemUpKSB7XG4gICAgICAgICAgICB0b1NlcmlhbGl6ZS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXJpYWxpemUodmFsdWUsIHByZWZpeCArICdbJyArIChpc09iamVjdCh2YWx1ZSkgPyBpbmRleCA6ICcnKSArICddJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChpc09iamVjdCh0b1NlcmlhbGl6ZSkgJiYgIWlzRGF0ZSh0b1NlcmlhbGl6ZSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB0b1NlcmlhbGl6ZSkge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZSh0b1NlcmlhbGl6ZVtrZXldLCBwcmVmaXggK1xuICAgICAgICAgICAgICAgICAgICAodG9wTGV2ZWwgPyAnJyA6ICcuJykgK1xuICAgICAgICAgICAgICAgICAgICBrZXkgK1xuICAgICAgICAgICAgICAgICAgICAodG9wTGV2ZWwgPyAnJyA6ICcnKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXJpYWxpemUodG9TZXJpYWxpemVba2V5XSwgcHJlZml4ICtcbiAgICAgICAgICAgICAgICAvLyAgICAgKHRvcExldmVsID8gJycgOiAnWycpICtcbiAgICAgICAgICAgICAgICAvLyAgICAga2V5ICtcbiAgICAgICAgICAgICAgICAvLyAgICAgKHRvcExldmVsID8gJycgOiAnXScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnRzLnB1c2goZW5jb2RlVXJpUXVlcnkocHJlZml4KSArICc9JyArXG4gICAgICAgICAgICAgICAgKHRvU2VyaWFsaXplID09IG51bGwgPyAnJyA6IGVuY29kZVVyaVF1ZXJ5KHNlcmlhbGl6ZVZhbHVlKHRvU2VyaWFsaXplKSkpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==