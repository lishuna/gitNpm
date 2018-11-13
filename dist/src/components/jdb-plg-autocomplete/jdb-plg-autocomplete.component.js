/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostListener, ElementRef, Renderer2, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { keyCode } from './keycode';
var JdbPlgAutocompleteComponent = /** @class */ (function () {
    function JdbPlgAutocompleteComponent(el, render) {
        this.el = el;
        this.render = render;
        this._searchParam = 'key';
        this._serverApi = '/';
        this._searchWord = '';
        this.searchResult = [];
        this._listShow = false;
        this.activeIndex = 0;
        this.ngModelValue = '';
        this.jdbPlaceHolder = '';
        this.width = '300px';
        this._dataSource = [];
        this.dataKey = 'value';
        this.dataVal = 'text';
        this.jdbDataAsyn = false;
        this.onSelected = new EventEmitter();
        this.onChange = function () { return null; };
    }
    /**
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.render.listen(this.el.nativeElement, 'input', this.debounce(function () {
            _this.activeIndex = -1;
            _this.inputHandle();
        }, 500, false));
        // 处理搜索框点击事件
        this.render.listen(this.el.nativeElement.querySelector('input[type="text"]'), 'click', function (evt) {
            _this.activeIndex = -1;
            if (!_this._searchWord) {
                _this.searchResult = _this.jdbDataSource;
            }
            else {
                _this.searchResult = _this.searchResult = _this.jdbDataSource.filter(function (obj) { return obj['text'].indexOf(_this._searchWord) !== -1; });
            }
            if (_this.searchResult.length > 0) {
                _this._listShow = true;
                setTimeout(function (_) {
                    _this.resetPopDirection(_this.el.nativeElement);
                }, 0);
            }
            evt.stopPropagation();
        });
        // 处理关闭搜索结果
        this.render.listen('document', 'click', function (evt) {
            _this._listShow = false;
        });
        this.render.listen(this.el.nativeElement.querySelector('input[type="text"]'), 'blur', function () {
            if ((_this.selectOne && _this._searchWord !== _this.selectOne.text) || !_this.selectOne) {
                _this._searchWord = '';
                _this.ngModelValue = '';
                _this.selectOne = null;
                _this.onChange('');
            }
        });
    };
    /**
     * @param {?} simples
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.ngOnChanges = /**
     * @param {?} simples
     * @return {?}
     */
    function (simples) {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.OnKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.which) {
            case keyCode.UP:
                this.activeIndex--;
                if (this.activeIndex < 0) {
                    this.activeIndex = this.searchResult.length - 1;
                }
                this.setSearchWord();
                break;
            case keyCode.DOWN:
                this.activeIndex++;
                if (this.activeIndex >= this.searchResult.length) {
                    this.activeIndex = 0;
                }
                this.setSearchWord();
                break;
            case keyCode.ENTER:
                var /** @type {?} */ item = /** @type {?} */ (this.searchResult[this.activeIndex]);
                this.selectedItem(item, this.activeIndex);
                break;
            default:
                this.activeIndex = -1;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.OnPaste = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.inputHandle();
    };
    // 处理input和paste事件
    /**
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.inputHandle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._searchWord) {
            if (this.jdbDataAsyn) { // 异步请求接口，返回数据
                // 异步请求接口，返回数据
                // this.popupList();
            }
            else { // 同步过滤处理
                // 同步过滤处理
                this.searchResult = this.jdbDataSource.filter(function (obj) { return obj['text'].indexOf(_this._searchWord) !== -1; });
                // if (this.searchResult.length > 0) {
                //     this.selectOne = this.searchResult[this.activeIndex];
                // }
            }
            // 显示结果
            if (this.searchResult.length > 0) {
                this._listShow = true;
            }
            else {
                this._listShow = false;
            }
            // 要先让搜索结果展示，才能获取到相关高度，处理显示位置
            setTimeout(function (_) {
                _this.resetPopDirection(_this.el.nativeElement);
            }, 0);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.closePop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.selectOne && this._searchWord && this._listShow) {
            if (this._searchWord !== this.selectOne.text) {
                this.ngModelValue = '';
                this.onChange('');
                this.selectOne = null;
                this._searchWord = '';
            }
            else {
                this.onSelected.emit(this.selectOne.value);
                this.ngModelValue = this.selectOne.value;
                this.onChange(this.ngModelValue);
            }
        }
        this._listShow = false;
        // event.stopPropagation();
    };
    // 设置选中样式
    /**
     * @param {?} obj
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.setSelectClass = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (obj) {
            return this._searchWord === obj.text;
        }
        return;
    };
    // 设置文本框选中内容
    /**
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.setSearchWord = /**
     * @return {?}
     */
    function () {
        this.selectOne = /** @type {?} */ (this.searchResult[this.activeIndex]);
        this._searchWord = this.selectOne.text;
    };
    // 选中单个条目
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.selectedItem = /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (item, index) {
        this.activeIndex = index;
        this.selectOne = item;
        this._searchWord = item.text;
        this._listShow = false;
        this.onSelected.emit(this.selectOne.value);
        this.ngModelValue = this.selectOne.value;
        this.onChange(this.ngModelValue);
        event.stopPropagation();
    };
    // 查询接口
    // popupList() {
    //   this.searchResult = [];
    //   this.jdbPlgBaseApi.post(this._serverApi,
    //     { [this._searchParam]: this._searchWord }, false).subscribe(
    //     (res) => {
    //       if (+res.error.returnCode === 0) {
    //         res.data = res.data.map((obj, index) => ({
    //           value: obj[this.dataKey],
    //           text: obj[this.dataVal]
    //         }));
    //         this.searchResult = <AutoCompleteResult[]>res.data;
    //         this._listShow = true;
    //         // if (this.searchResult.length > 0) {
    //         //     this.selectOne = this.searchResult[this.activeIndex];
    //         // }
    //       }
    //     });
    // }
    // 函数防抖
    /**
     * @param {?} fn
     * @param {?} wait
     * @param {?} immediate
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.debounce = /**
     * @param {?} fn
     * @param {?} wait
     * @param {?} immediate
     * @return {?}
     */
    function (fn, wait, immediate) {
        var /** @type {?} */ timeout, /** @type {?} */
        args, /** @type {?} */
        context, /** @type {?} */
        timestamp, /** @type {?} */
        result;
        var /** @type {?} */ later = function () {
            var /** @type {?} */ last = new Date().getTime() - timestamp;
            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last);
            }
            else {
                timeout = null;
                if (!immediate) {
                    result = fn.apply(context, args);
                    if (!timeout) {
                        context = args = null;
                    }
                }
            }
        };
        return function () {
            context = this;
            args = arguments;
            timestamp = new Date().getTime();
            var /** @type {?} */ callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) {
                result = fn.apply(context, args);
                context = args = null;
            }
            return result;
        };
    };
    // 设置弹出位置
    /**
     * @param {?} node
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.resetPopDirection = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var /** @type {?} */ getOffsetTop = function (ele) {
            var /** @type {?} */ top = ele.offsetTop;
            if (!ele.offsetParent) {
                top += getOffsetTop(ele.offsetParent);
            }
            return top;
        };
        var /** @type {?} */ getScrollTop = function (ele) {
            var /** @type {?} */ top = ele.scrollTop;
            if (!ele.parentElement) {
                top += getScrollTop(ele.parentElement);
            }
            return top;
        };
        var /** @type {?} */ nodeTop = getOffsetTop(node), /** @type {?} */
        clientHeight = document.documentElement.clientHeight || document.body.clientHeight, /** @type {?} */
        scrollTop = getScrollTop(node.parentElement), /** @type {?} */
        popHeight = this.resultEle.nativeElement.offsetHeight || 250, /** @type {?} */
        inputHeight = node.querySelector('input[type="text"]').offsetHeight;
        // console.log('clientHeight:' + clientHeight + 'nodeTop:' + nodeTop + 'nodeHeight:' + nodeHeight + 'scrollTop:' + scrollTop);
        var /** @type {?} */ lastDirect = clientHeight - (nodeTop - scrollTop) - popHeight - inputHeight;
        if (lastDirect <= 0) {
            this.render.addClass(this.resultEle.nativeElement, 'pop_top');
        }
        else {
            this.render.removeClass(this.resultEle.nativeElement, 'pop_top');
        }
    };
    // 清空文本框处理
    /**
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.changeInput = /**
     * @return {?}
     */
    function () {
        if (this._searchWord === '') {
            this.ngModelValue = '';
            this.onChange('');
        }
    };
    Object.defineProperty(JdbPlgAutocompleteComponent.prototype, "jdbDataSource", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataSource;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._dataSource = value;
            if (!this.jdbDataAsyn && this._dataSource.length > 0) {
                if (typeof this._dataSource[0] === 'string') {
                    this._dataSource = this._dataSource.map(function (val, index) {
                        return ({
                            value: val,
                            text: val
                        });
                    });
                }
                else if (typeof this._dataSource[0] === 'object' && (this.dataKey !== 'value' || this.dataVal !== 'text')) {
                    this._dataSource = this._dataSource.map(function (obj, index) {
                        return ({
                            value: obj[_this.dataKey],
                            text: obj[_this.dataVal]
                        });
                    });
                }
                this.searchResult = this._dataSource;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgAutocompleteComponent.prototype, "jdbSearchParam", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchParam;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._searchParam = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JdbPlgAutocompleteComponent.prototype, "jdbServerApi", {
        get: /**
         * @return {?}
         */
        function () {
            return this._serverApi;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._serverApi = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.ngModelValue = value;
        if (this.ngModelValue === '') {
            this._searchWord = '';
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    JdbPlgAutocompleteComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
    };
    JdbPlgAutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jdb-plg-autocomplete',
                    template: "<div class=\"autoprompt\"> <app-jdb-plg-input [jdbType]=\"'text'\" [jdbPlaceHolder]=\"jdbPlaceHolder\" [jdbClear]=\"true\" [(ngModel)]=\"_searchWord\" [width]=\"width\" (ngModelChange)=\"changeInput()\"> </app-jdb-plg-input> <ul #resultele [hidden]=\"!_listShow\" [style.width]=\"width\"> <li *ngFor=\"let item of searchResult;index as i\" [ngClass]=\"{'selected': activeIndex == i}\" (click)=\"selectedItem(item,i)\"> <p> {{item.text}} </p> </li> </ul> </div> <!-- <div class=\"autoprompt-mask\" [hidden]=\"!_listShow\" (click)=\"closePop($event)\"></div> -->",
                    // styleUrls: ['./jdb-plg-autocomplete.component.scss'],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return JdbPlgAutocompleteComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    JdbPlgAutocompleteComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    JdbPlgAutocompleteComponent.propDecorators = {
        "resultEle": [{ type: ViewChild, args: ['resultele',] },],
        "jdbPlaceHolder": [{ type: Input },],
        "width": [{ type: Input },],
        "dataKey": [{ type: Input },],
        "dataVal": [{ type: Input },],
        "jdbDataAsyn": [{ type: Input },],
        "onSelected": [{ type: Output },],
        "OnKeyDown": [{ type: HostListener, args: ['keydown', ['$event'],] },],
        "OnPaste": [{ type: HostListener, args: ['paste', ['$event'],] },],
        "jdbDataSource": [{ type: Input },],
        "jdbSearchParam": [{ type: Input },],
        "jdbServerApi": [{ type: Input },],
    };
    return JdbPlgAutocompleteComponent;
}());
export { JdbPlgAutocompleteComponent };
function JdbPlgAutocompleteComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    JdbPlgAutocompleteComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    JdbPlgAutocompleteComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    JdbPlgAutocompleteComponent.propDecorators;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype._searchParam;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype._serverApi;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype._searchWord;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype.searchResult;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype._listShow;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype.activeIndex;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype.selectOne;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype.ngModelValue;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype.resultEle;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype.jdbPlaceHolder;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype.width;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype._dataSource;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype.dataKey;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype.dataVal;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype.jdbDataAsyn;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype.onSelected;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype.onChange;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype.el;
    /** @type {?} */
    JdbPlgAutocompleteComponent.prototype.render;
}
//# sourceMappingURL=jdb-plg-autocomplete.component.js.map