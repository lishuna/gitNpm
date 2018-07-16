/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class FillTableService {
    constructor() {
    }
    /**
     * @param {?} lines
     * @param {?} lists
     * @param {?=} flag
     * @return {?}
     */
    fillTable(lines, lists, flag) {
        lines = lines || 10;
        lists = lists || [];
        flag = flag || true;
        let /** @type {?} */ aLength = lists.length;
        let /** @type {?} */ mLength = lines - aLength;
        let /** @type {?} */ fillObj = { unShowOpt: flag };
        let /** @type {?} */ keys;
        if (aLength !== 0) {
            lists.forEach(element => {
                element.unShowOpt = !flag;
            });
            keys = Object.keys(lists[0]);
            if (keys.length !== 0) {
                keys.forEach(element => {
                    if (element !== "unShowOpt") {
                        fillObj[element] = Object.prototype.toString.call(lists[0][element]) == "[object Array]" ? [] : '';
                    }
                });
            }
        }
        if (aLength !== 0 && mLength > 0) {
            for (let /** @type {?} */ i = 0; i < mLength; i++) {
                lists.push(fillObj);
            }
        }
        return lists;
    }
}
FillTableService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FillTableService.ctorParameters = () => [];
function FillTableService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FillTableService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FillTableService.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsbC10YWJsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlc3QtdWkvY29yZS8iLCJzb3VyY2VzIjpbImNvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2ZpbGwtdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFckUsTUFBTTtJQUNGO0tBQ0M7Ozs7Ozs7SUFNRCxTQUFTLENBQUMsS0FBYSxFQUFFLEtBQWdCLEVBQUUsSUFBYTtRQUNwRCxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQztRQUNwQixxQkFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixxQkFBSSxPQUFPLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUM5QixxQkFBSSxPQUFPLEdBQUcsRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLENBQUM7UUFDL0IscUJBQUksSUFBSSxDQUFDO1FBQ1QsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ2YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEIsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQzthQUM3QixDQUFDLENBQUM7WUFDSCxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNuQixJQUFHLE9BQU8sS0FBSyxXQUFXLEVBQUM7d0JBQ3ZCLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO3FCQUN0RztpQkFDSixDQUFDLENBQUM7YUFDTjtTQUNKO1FBQ0QsSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJLE9BQU8sR0FBQyxDQUFDLEVBQUU7WUFDNUIsS0FBSSxxQkFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLEVBQUM7Z0JBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdkI7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0tBQ2hCOzs7WUFwQ0osVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGxUYWJsZVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbiAgICAvKlxuICAgICAgICBsaW5lczpudW1iZXIgIOihqOagvOWxleekuueahOihjOaVsFxuICAgICAgICBsaXN0czpBcnJheTxhbnk+ICDlvILmraXojrflj5bnmoTmlbDmja5cbiAgICAgICAgZmxhZzpib29sZWFuICDmmK/lkKblnKjnqbrnmb3ooYzmoI/lsZXnpLrmk43kvZzmjInpkq4s6buY6K6k5Y+WdW5TaG93T3B05a2X5q61XG4gICAgKi9cbiAgICBmaWxsVGFibGUobGluZXM6IG51bWJlciwgbGlzdHM6QXJyYXk8YW55PiwgZmxhZz86Ym9vbGVhbikge1xuICAgICAgICBsaW5lcyA9IGxpbmVzIHx8IDEwO1xuICAgICAgICBsaXN0cyA9IGxpc3RzIHx8IFtdO1xuICAgICAgICBmbGFnID0gZmxhZyB8fCB0cnVlO1xuICAgICAgICBsZXQgYUxlbmd0aCA9IGxpc3RzLmxlbmd0aDtcbiAgICAgICAgbGV0IG1MZW5ndGggPSBsaW5lcyAtIGFMZW5ndGg7XG4gICAgICAgIGxldCBmaWxsT2JqID0ge3VuU2hvd09wdDpmbGFnfTtcbiAgICAgICAgbGV0IGtleXM7XG4gICAgICAgIGlmIChhTGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBsaXN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudW5TaG93T3B0ID0gIWZsYWc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhsaXN0c1swXSk7XG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQgIT09IFwidW5TaG93T3B0XCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbE9ialtlbGVtZW50XSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChsaXN0c1swXVtlbGVtZW50XSkgPT0gXCJbb2JqZWN0IEFycmF5XVwiID8gW10gOiAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhTGVuZ3RoICE9PSAwICYmIG1MZW5ndGg+MCkge1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxtTGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgbGlzdHMucHVzaChmaWxsT2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdHM7XG4gICAgfVxufVxuIl19