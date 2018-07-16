/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, TemplateRef, Input, Output, ContentChild, forwardRef, HostListener, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class JdbPlgInputComponent {
    constructor() {
        this._value = '';
        this._type = 'text';
        this._placeHolder = '';
        this._size = 'default';
        this._disabled = false;
        this._readonly = false;
        this._error = false;
        this._inputWrapClass = [];
        this._clear = false;
        this._autoPromptData = [];
        this._composing = false;
        this.width = '300px';
        // ngModel Access
        this.onChange = () => null;
        this.jdbBlur = new EventEmitter();
        this.jdbFocus = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this._inputWrapClass =[`input-text-wrap-${this._size}`];
        if (this._prefixContent) {
            this._inputWrapClass.push('prefix');
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    compositionStart(e) {
        this._composing = true;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    compositionEnd(e) {
        this._composing = false;
        this.onChange(this._value);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set jdbType(type) {
        this._type = type;
    }
    /**
     * @return {?}
     */
    get jdbType() {
        return this._type;
    }
    /**
     * @param {?} placeHolder
     * @return {?}
     */
    set jdbPlaceHolder(placeHolder) {
        this._placeHolder = placeHolder;
    }
    /**
     * @return {?}
     */
    get jdbPlaceHolder() {
        return this._placeHolder;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    set jdbSize(size) {
        this._size = { large: 'lg', small: 'sm' }[size];
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get jdbSize() {
        return this._size;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    set jdbDisabled(disabled) {
        this._disabled = this.toBoolean(disabled);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get jdbDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} readonly
     * @return {?}
     */
    set jdbReadonly(readonly) {
        this._readonly = this.toBoolean(readonly);
    }
    /**
     * @return {?}
     */
    get jdbReadonly() {
        return this._readonly;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbValue(value) {
        if ((this._value === value) || ((this._value == null) && (value == null))) {
            return;
        }
        this._value = value;
        if (!this._composing) {
            this.onChange(value);
        }
    }
    /**
     * @return {?}
     */
    get jdbValue() {
        if (this._value == '0') {
            return '0';
        }
        return this._value || '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbError(value) {
        this._error = this.toBoolean(value);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get jdbError() {
        return this._error;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbClear(value) {
        this._clear = this.toBoolean(value);
    }
    /**
     * @return {?}
     */
    get jdbClear() {
        return this._clear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbMaxLength(value) {
        this._maxlength = value;
    }
    /**
     * @return {?}
     */
    get jdbMaxLength() {
        return this._maxlength;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set jdbPromptData(value) {
        this._autoPromptData = value;
    }
    /**
     * @return {?}
     */
    get jdbPromptData() {
        return this._autoPromptData;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _emitBlur($event) {
        this.jdbBlur.emit($event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _emitFocus($event) {
        this.jdbFocus.emit($event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    textareaOnChange($event) {
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this._classMap = {
            [`input-${this._type}-${this._size}`]: true,
            ['input-disabled']: this._disabled,
            ['input-error']: this._error
        };
    }
    /**
     * @return {?}
     */
    clearTxt() {
        this._value = '';
        this.onChange('');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toBoolean(value) {
        return value === '' || (value && value !== 'false');
    }
}
JdbPlgInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-jdb-plg-input',
                template: `<span class="input-group-addon" *ngIf="_addOnContentBefore">
    <ng-template [ngTemplateOutlet]="_addOnContentBefore">
    </ng-template>
</span>
<ng-template [ngIf]="_type=='text'">
    <div class="input-text-wrap" [ngClass]="_inputWrapClass">
        <span class="input-prefix" *ngIf="_prefixContent">
            <ng-template [ngTemplateOutlet]="_prefixContent">
            </ng-template>
        </span>
        <input (blur)="_emitBlur($event)" (focus)="_emitFocus($event)" [disabled]="_disabled" [readonly]="_readonly" [attr.type]="_type" class="input" [ngClass]="_classMap" [attr.placeholder]="_placeHolder" [(ngModel)]="jdbValue" [style.width]="width" maxlength="{{jdbMaxLength}}"
        />
        <span class="input-clear" *ngIf="_clear && _value && _type=='text'" (click)="clearTxt()">
            <i class="close-icon icon-empty"></i>
        </span>
        <span class="ant-input-suffix" *ngIf="_suffixContent">
            <i class="iconfont icon-guanbi2fill"></i>
            <ng-template [ngTemplateOutlet]="_suffixContent">
            </ng-template>
        </span>
    </div>
    <div class="input-error-tip" *ngIf="jdbError && _errorContent">
        <i class="icon-message-error error-tip"></i>
        <span>
            <ng-template [ngTemplateOutlet]="_errorContent">
            </ng-template>
        </span>
    </div>
</ng-template>
<span class="input-group-addon" *ngIf="_addOnContentAfter">
      <ng-template [ngTemplateOutlet]="_addOnContentAfter">
      </ng-template>
</span>
<ng-template [ngIf]="_type=='textarea'">
    <div class="input-text-wrap">
        <textarea (blur)="_emitBlur($event)" (focus)="_emitFocus($event)" (input)="textareaOnChange($event)" #inputTextarea [disabled]="_disabled" [readonly]="_readonly" type="textarea" class="input input-textarea" [ngClass]="_classMap" [attr.placeholder]="jdbPlaceHolder"
            [(ngModel)]="jdbValue" maxlength="{{jdbMaxLength}}" [style.width]="width"></textarea>
        <span class="textarea-wc-tip" [ngClass]="{'textarea-wc-tip-red': jdbValue&&jdbValue.length == jdbMaxLength}" *ngIf="jdbMaxLength && !_disabled &&!_readonly">{{(jdbValue&&jdbValue.length)||0}}/{{jdbMaxLength}}</span>
    </div>
</ng-template>`,
                styles: [`.input-text-wrap{position:relative;display:inline-block}.input{height:30px;width:300px;background:#fff;border:1px solid #afb0b3;border-radius:2px;font-size:13px;padding:0 10px;line-height:30px;color:#333}.input:focus{outline:0;border-color:#3f69f2}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#afb0b3}.prefix .input{padding-left:30px}.input-textarea{width:300px;height:80px;overflow-y:auto;font-size:13px;color:#000;line-height:20px}.input-disabled{background:#f0f1f5;color:#7d7e80}.disabled .input{color:#7d7e80}.input-text-lg{height:40px;font-size:14px}.input-text-sm{height:24px;font-size:12px}.input-textarea-lg{height:120px;font-size:14px}.input-textarea-sm{height:80px;font-size:12px}.input-error{border-color:#f84a4a}.input-clear{position:absolute;right:5px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:24px}.input-prefix{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:7px}.input-error-tip{color:#f84a4a;font-size:12px;line-height:20px;max-width:200px}.error-tip{font-size:16px;line-height:20px}.textarea-wc-tip{position:absolute;bottom:5px;right:10px;font-size:12px;color:#7d7e80}.textarea-wc-tip-red{color:#f84a4a}`],
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => JdbPlgInputComponent),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
JdbPlgInputComponent.propDecorators = {
    "width": [{ type: Input },],
    "_errorContent": [{ type: ContentChild, args: ['jdbErrorContent',] },],
    "_addOnContentBefore": [{ type: ContentChild, args: ['addContentBefore',] },],
    "_addOnContentAfter": [{ type: ContentChild, args: ['addContentAfter',] },],
    "_prefixContent": [{ type: ContentChild, args: ['prefixContent',] },],
    "_suffixContent": [{ type: ContentChild, args: ['suffixContent',] },],
    "jdbBlur": [{ type: Output },],
    "jdbFocus": [{ type: Output },],
    "compositionStart": [{ type: HostListener, args: ['compositionstart', ['$event'],] },],
    "compositionEnd": [{ type: HostListener, args: ['compositionend', ['$event'],] },],
    "jdbType": [{ type: Input },],
    "jdbPlaceHolder": [{ type: Input },],
    "jdbSize": [{ type: Input },],
    "jdbDisabled": [{ type: Input },],
    "jdbReadonly": [{ type: Input },],
    "jdbValue": [{ type: Input },],
    "jdbError": [{ type: Input },],
    "jdbClear": [{ type: Input },],
    "jdbMaxLength": [{ type: Input },],
    "jdbPromptData": [{ type: Input },],
};
function JdbPlgInputComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    JdbPlgInputComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    JdbPlgInputComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    JdbPlgInputComponent.propDecorators;
    /** @type {?} */
    JdbPlgInputComponent.prototype._value;
    /** @type {?} */
    JdbPlgInputComponent.prototype._type;
    /** @type {?} */
    JdbPlgInputComponent.prototype._placeHolder;
    /** @type {?} */
    JdbPlgInputComponent.prototype._size;
    /** @type {?} */
    JdbPlgInputComponent.prototype._disabled;
    /** @type {?} */
    JdbPlgInputComponent.prototype._readonly;
    /** @type {?} */
    JdbPlgInputComponent.prototype._error;
    /** @type {?} */
    JdbPlgInputComponent.prototype._classMap;
    /** @type {?} */
    JdbPlgInputComponent.prototype._inputWrapClass;
    /** @type {?} */
    JdbPlgInputComponent.prototype._clear;
    /** @type {?} */
    JdbPlgInputComponent.prototype._maxlength;
    /** @type {?} */
    JdbPlgInputComponent.prototype._autoPromptData;
    /** @type {?} */
    JdbPlgInputComponent.prototype._composing;
    /** @type {?} */
    JdbPlgInputComponent.prototype.width;
    /** @type {?} */
    JdbPlgInputComponent.prototype.onChange;
    /** @type {?} */
    JdbPlgInputComponent.prototype._errorContent;
    /** @type {?} */
    JdbPlgInputComponent.prototype._addOnContentBefore;
    /** @type {?} */
    JdbPlgInputComponent.prototype._addOnContentAfter;
    /** @type {?} */
    JdbPlgInputComponent.prototype._prefixContent;
    /** @type {?} */
    JdbPlgInputComponent.prototype._suffixContent;
    /** @type {?} */
    JdbPlgInputComponent.prototype.jdbBlur;
    /** @type {?} */
    JdbPlgInputComponent.prototype.jdbFocus;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRiLXBsZy1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVzdC11aS9jb3JlLyIsInNvdXJjZXMiOlsiY29yZS9jb21wb25lbnRzL2pkYi1wbGctaW5wdXQvamRiLXBsZy1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsWUFBWSxFQUFDLFdBQVcsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFZLFlBQVksRUFBQyxVQUFVLEVBQUUsWUFBWSxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFKLE9BQU8sRUFBK0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXVEaEYsTUFBTTs7c0JBQ08sRUFBRTtxQkFDSixNQUFNOzRCQUNDLEVBQUU7cUJBQ1QsU0FBUzt5QkFDSixLQUFLO3lCQUNMLEtBQUs7c0JBQ1IsS0FBSzsrQkFFbUIsRUFBRTtzQkFDMUIsS0FBSzsrQkFFZ0IsRUFBRTswQkFDbEIsS0FBSztxQkFDRixPQUFPOzt3QkFFWSxHQUFHLEVBQUUsQ0FBQyxJQUFJO3VCQU1BLElBQUksWUFBWSxFQUFFO3dCQUNqQixJQUFJLFlBQVksRUFBRTs7Ozs7SUFFakUsUUFBUTs7UUFFSixJQUFLLElBQUksQ0FBQyxjQUFjLEVBQUc7WUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkM7S0FDSjs7Ozs7SUFHRCxnQkFBZ0IsQ0FBQyxDQUFtQjtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7Ozs7O0lBSTNCLGNBQWMsQ0FBQyxDQUFtQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7O1FBSTNCLE9BQU8sQ0FBQyxJQUFZO1FBQ3BCLElBQUksQ0FBQyxLQUFL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b0IsQ0FBQzt3QkFDbkQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7OztzQkFnQkssS0FBSzs4QkFHTixZQUFZLFNBQUMsaUJBQWlCO29DQUM5QixZQUFZLFNBQUUsa0JBQWtCO21DQUNoQyxZQUFZLFNBQUMsaUJBQWlCOytCQUM5QixZQUFZLFNBQUMsZUFBZTsrQkFDNUIsWUFBWSxTQUFDLGVBQWU7d0JBQzVCLE1BQU07eUJBQ04sTUFBTTtpQ0FTTixZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBRSxRQUFRLENBQUU7K0JBSzdDLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFFLFFBQVEsQ0FBRTt3QkFNM0MsS0FBSzsrQkFRTCxLQUFLO3dCQVFMLEtBQUs7NEJBU0wsS0FBSzs0QkFTTCxLQUFLO3lCQVFMLEtBQUs7eUJBZ0JMLEtBQUs7eUJBUUwsS0FBSzs2QkFRTCxLQUFLOzhCQVFMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxFdmVudEVtaXR0ZXIsVGVtcGxhdGVSZWYsSW5wdXQsT3V0cHV0LEVsZW1lbnRSZWYsQ29udGVudENoaWxkLGZvcndhcmRSZWYgLEhvc3RMaXN0ZW5lcixWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZGVsLENvbnRyb2xWYWx1ZUFjY2Vzc29yLE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1qZGItcGxnLWlucHV0JyxcbiAgICB0ZW1wbGF0ZTogYDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIiAqbmdJZj1cIl9hZGRPbkNvbnRlbnRCZWZvcmVcIj5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiX2FkZE9uQ29udGVudEJlZm9yZVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG48L3NwYW4+XG48bmctdGVtcGxhdGUgW25nSWZdPVwiX3R5cGU9PSd0ZXh0J1wiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC10ZXh0LXdyYXBcIiBbbmdDbGFzc109XCJfaW5wdXRXcmFwQ2xhc3NcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1wcmVmaXhcIiAqbmdJZj1cIl9wcmVmaXhDb250ZW50XCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiX3ByZWZpeENvbnRlbnRcIj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGlucHV0IChibHVyKT1cIl9lbWl0Qmx1cigkZXZlbnQpXCIgKGZvY3VzKT1cIl9lbWl0Rm9jdXMoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJfZGlzYWJsZWRcIiBbcmVhZG9ubHldPVwiX3JlYWRvbmx5XCIgW2F0dHIudHlwZV09XCJfdHlwZVwiIGNsYXNzPVwiaW5wdXRcIiBbbmdDbGFzc109XCJfY2xhc3NNYXBcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJfcGxhY2VIb2xkZXJcIiBbKG5nTW9kZWwpXT1cImpkYlZhbHVlXCIgW3N0eWxlLndpZHRoXT1cIndpZHRoXCIgbWF4bGVuZ3RoPVwie3tqZGJNYXhMZW5ndGh9fVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtY2xlYXJcIiAqbmdJZj1cIl9jbGVhciAmJiBfdmFsdWUgJiYgX3R5cGU9PSd0ZXh0J1wiIChjbGljayk9XCJjbGVhclR4dCgpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImNsb3NlLWljb24gaWNvbi1lbXB0eVwiPjwvaT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1pbnB1dC1zdWZmaXhcIiAqbmdJZj1cIl9zdWZmaXhDb250ZW50XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb25mb250IGljb24tZ3VhbmJpMmZpbGxcIj48L2k+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiX3N1ZmZpeENvbnRlbnRcIj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZXJyb3ItdGlwXCIgKm5nSWY9XCJqZGJFcnJvciAmJiBfZXJyb3JDb250ZW50XCI+XG4gICAgICAgIDxpIGNsYXNzPVwiaWNvbi1tZXNzYWdlLWVycm9yIGVycm9yLXRpcFwiPjwvaT5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiX2Vycm9yQ29udGVudFwiPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbjxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIiAqbmdJZj1cIl9hZGRPbkNvbnRlbnRBZnRlclwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIl9hZGRPbkNvbnRlbnRBZnRlclwiPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbjwvc3Bhbj5cbjxuZy10ZW1wbGF0ZSBbbmdJZl09XCJfdHlwZT09J3RleHRhcmVhJ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC10ZXh0LXdyYXBcIj5cbiAgICAgICAgPHRleHRhcmVhIChibHVyKT1cIl9lbWl0Qmx1cigkZXZlbnQpXCIgKGZvY3VzKT1cIl9lbWl0Rm9jdXMoJGV2ZW50KVwiIChpbnB1dCk9XCJ0ZXh0YXJlYU9uQ2hhbmdlKCRldmVudClcIiAjaW5wdXRUZXh0YXJlYSBbZGlzYWJsZWRdPVwiX2Rpc2FibGVkXCIgW3JlYWRvbmx5XT1cIl9yZWFkb25seVwiIHR5cGU9XCJ0ZXh0YXJlYVwiIGNsYXNzPVwiaW5wdXQgaW5wdXQtdGV4dGFyZWFcIiBbbmdDbGFzc109XCJfY2xhc3NNYXBcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJqZGJQbGFjZUhvbGRlclwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImpkYlZhbHVlXCIgbWF4bGVuZ3RoPVwie3tqZGJNYXhMZW5ndGh9fVwiIFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dGFyZWEtd2MtdGlwXCIgW25nQ2xhc3NdPVwieyd0ZXh0YXJlYS13Yy10aXAtcmVkJzogamRiVmFsdWUmJmpkYlZhbHVlLmxlbmd0aCA9PSBqZGJNYXhMZW5ndGh9XCIgKm5nSWY9XCJqZGJNYXhMZW5ndGggJiYgIV9kaXNhYmxlZCAmJiFfcmVhZG9ubHlcIj57eyhqZGJWYWx1ZSYmamRiVmFsdWUubGVuZ3RoKXx8MH19L3t7amRiTWF4TGVuZ3RofX08L3NwYW4+XG4gICAgPC9kaXY+XG48L25nLXRlbXBsYXRlPmAsXG4gICAgc3R5bGVzOiBbYC5pbnB1dC10ZXh0LXdyYXB7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmlucHV0e2hlaWdodDozMHB4O3dpZHRoOjMwMHB4O2JhY2tncm91bmQ6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNhZmIwYjM7Ym9yZGVyLXJhZGl1czoycHg7Zm9udC1zaXplOjEzcHg7cGFkZGluZzowIDEwcHg7bGluZS1oZWlnaHQ6MzBweDtjb2xvcjojMzMzfS5pbnB1dDpmb2N1c3tvdXRsaW5lOjA7Ym9yZGVyLWNvbG9yOiMzZjY5ZjJ9aW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6I2FmYjBiM30ucHJlZml4IC5pbnB1dHtwYWRkaW5nLWxlZnQ6MzBweH0uaW5wdXQtdGV4dGFyZWF7d2lkdGg6MzAwcHg7aGVpZ2h0OjgwcHg7b3ZlcmZsb3cteTphdXRvO2ZvbnQtc2l6ZToxM3B4O2NvbG9yOiMwMDA7bGluZS1oZWlnaHQ6MjBweH0uaW5wdXQtZGlzYWJsZWR7YmFja2dyb3VuZDojZjBmMWY1O2NvbG9yOiM3ZDdlODB9LmRpc2FibGVkIC5pbnB1dHtjb2xvcjojN2Q3ZTgwfS5pbnB1dC10ZXh0LWxne2hlaWdodDo0MHB4O2ZvbnQtc2l6ZToxNHB4fS5pbnB1dC10ZXh0LXNte2hlaWdodDoyNHB4O2ZvbnQtc2l6ZToxMnB4fS5pbnB1dC10ZXh0YXJlYS1sZ3toZWlnaHQ6MTIwcHg7Zm9udC1zaXplOjE0cHh9LmlucHV0LXRleHRhcmVhLXNte2hlaWdodDo4MHB4O2ZvbnQtc2l6ZToxMnB4fS5pbnB1dC1lcnJvcntib3JkZXItY29sb3I6I2Y4NGE0YX0uaW5wdXQtY2xlYXJ7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6NXB4O3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtoZWlnaHQ6MjRweH0uaW5wdXQtcHJlZml4e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtsZWZ0OjdweH0uaW5wdXQtZXJyb3ItdGlwe2NvbG9yOiNmODRhNGE7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MjBweDttYXgtd2lkdGg6MjAwcHh9LmVycm9yLXRpcHtmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDoyMHB4fS50ZXh0YXJlYS13Yy10aXB7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjVweDtyaWdodDoxMHB4O2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiM3ZDdlODB9LnRleHRhcmVhLXdjLXRpcC1yZWR7Y29sb3I6I2Y4NGE0YX1gXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSmRiUGxnSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG59KVxuXG5leHBvcnQgY2xhc3MgSmRiUGxnSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsQ29udHJvbFZhbHVlQWNjZXNzb3J7XG4gICAgX3ZhbHVlID0gJyc7XG4gICAgX3R5cGU9ICd0ZXh0JztcbiAgICBfcGxhY2VIb2xkZXI9ICcnO1xuICAgIF9zaXplPSAnZGVmYXVsdCc7XG4gICAgX2Rpc2FibGVkID0gZmFsc2U7XG4gICAgX3JlYWRvbmx5ID0gZmFsc2U7XG4gICAgX2Vycm9yID0gZmFsc2U7XG4gICAgX2NsYXNzTWFwOiBhbnk7XG4gICAgX2lucHV0V3JhcENsYXNzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgX2NsZWFyID0gZmFsc2U7XG4gICAgX21heGxlbmd0aDogbnVtYmVyO1xuICAgIF9hdXRvUHJvbXB0RGF0YTogQXJyYXk8YW55PiA9IFtdO1xuICAgICBfY29tcG9zaW5nID0gZmFsc2U7XG4gICAgIEBJbnB1dCgpIHdpZHRoPSAnMzAwcHgnO1xuICAgIC8vIG5nTW9kZWwgQWNjZXNzXG4gICAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgICBAQ29udGVudENoaWxkKCdqZGJFcnJvckNvbnRlbnQnKSAgX2Vycm9yQ29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKCAnYWRkQ29udGVudEJlZm9yZScgKSBfYWRkT25Db250ZW50QmVmb3JlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoJ2FkZENvbnRlbnRBZnRlcicpIF9hZGRPbkNvbnRlbnRBZnRlcjogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKCdwcmVmaXhDb250ZW50JykgX3ByZWZpeENvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZCgnc3VmZml4Q29udGVudCcpIF9zdWZmaXhDb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBPdXRwdXQoKSBqZGJCbHVyOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGpkYkZvY3VzOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gdGhpcy5faW5wdXRXcmFwQ2xhc3MgPVtgaW5wdXQtdGV4dC13cmFwLSR7dGhpcy5fc2l6ZX1gXTtcbiAgICAgICAgaWYgKCB0aGlzLl9wcmVmaXhDb250ZW50ICkge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRXcmFwQ2xhc3MucHVzaCgncHJlZml4Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JywgWyAnJGV2ZW50JyBdKVxuICAgIGNvbXBvc2l0aW9uU3RhcnQoZTogQ29tcG9zaXRpb25FdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb3NpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgWyAnJGV2ZW50JyBdKVxuICAgIGNvbXBvc2l0aW9uRW5kKGU6IENvbXBvc2l0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9zaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGpkYlR5cGUodHlwZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIGdldCBqZGJUeXBlKCk6IHN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgamRiUGxhY2VIb2xkZXIocGxhY2VIb2xkZXI6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX3BsYWNlSG9sZGVyID0gcGxhY2VIb2xkZXI7XG4gICAgfVxuICAgIGdldCBqZGJQbGFjZUhvbGRlcigpOiBzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZUhvbGRlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBqZGJTaXplKHNpemU6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX3NpemUgPSB7bGFyZ2U6ICdsZycsc21hbGw6ICdzbSd9W3NpemVdO1xuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfVxuICAgIGdldCBqZGJTaXplKCk6IHN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgamRiRGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IHRoaXMudG9Cb29sZWFuKGRpc2FibGVkKTtcbiAgICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgICBnZXQgamRiRGlzYWJsZWQoKTogYm9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGpkYlJlYWRvbmx5KHJlYWRvbmx5OiBib29sZWFuKXtcbiAgICAgICAgdGhpcy5fcmVhZG9ubHkgPSB0aGlzLnRvQm9vbGVhbihyZWFkb25seSk7XG4gICAgfVxuICAgIGdldCBqZGJSZWFkb25seSgpOiBib29sZWFue1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZG9ubHk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgamRiVmFsdWUodmFsdWU6IHN0cmluZyl7XG4gICAgICAgIGlmICgodGhpcy5fdmFsdWUgPT09IHZhbHVlKSB8fCAoKHRoaXMuX3ZhbHVlID09IG51bGwpICYmICh2YWx1ZSA9PSBudWxsKSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICBpZiAoIXRoaXMuX2NvbXBvc2luZykge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgamRiVmFsdWUoKTogc3RyaW5ne1xuICAgICAgICBpZih0aGlzLl92YWx1ZSA9PSAnMCcpe1xuICAgICAgICAgICAgcmV0dXJuICcwJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWUgfHwgJyc7XG4gICAgfVxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGpkYkVycm9yKHZhbHVlOiBib29sZWFuKXtcbiAgICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLnRvQm9vbGVhbih2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gICAgZ2V0IGpkYkVycm9yKCk6IGJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgICB9XG4gICAgQElucHV0KClcbiAgICBzZXQgamRiQ2xlYXIodmFsdWU6IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLl9jbGVhciA9IHRoaXMudG9Cb29sZWFuKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0IGpkYkNsZWFyKCk6IGJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGVhcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBqZGJNYXhMZW5ndGgodmFsdWU6IG51bWJlcil7XG4gICAgICAgIHRoaXMuX21heGxlbmd0aCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgamRiTWF4TGVuZ3RoKCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heGxlbmd0aDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBqZGJQcm9tcHREYXRhKHZhbHVlOiBBcnJheTxhbnk+KXtcbiAgICAgICAgdGhpcy5fYXV0b1Byb21wdERhdGEgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGpkYlByb21wdERhdGEoKTogQXJyYXk8YW55PntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dG9Qcm9tcHREYXRhO1xuICAgIH1cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB9XG4gICAgX2VtaXRCbHVyKCRldmVudCkge1xuICAgICAgICB0aGlzLmpkYkJsdXIuZW1pdCgkZXZlbnQpO1xuICAgIH1cblxuICAgIF9lbWl0Rm9jdXMoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuamRiRm9jdXMuZW1pdCgkZXZlbnQpO1xuICAgIH1cbiAgICB0ZXh0YXJlYU9uQ2hhbmdlKCRldmVudCl7XG5cbiAgICB9XG4gICAgc2V0Q2xhc3NNYXAoKSB7XG4gICAgICAgIHRoaXMuX2NsYXNzTWFwID0ge1xuICAgICAgICAgICAgWyBgaW5wdXQtJHt0aGlzLl90eXBlfS0ke3RoaXMuX3NpemV9YCBdOiB0cnVlLFxuICAgICAgICAgICAgWyAnaW5wdXQtZGlzYWJsZWQnIF06IHRoaXMuX2Rpc2FibGVkLFxuICAgICAgICAgICAgWydpbnB1dC1lcnJvciddOiB0aGlzLl9lcnJvclxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGVhclR4dCgpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgnJyk7XG4gICAgfVxuXG4gICAgdG9Cb29sZWFuKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gJycgfHwgKHZhbHVlICYmIHZhbHVlICE9PSAnZmFsc2UnKTtcbiAgICB9XG59XG4iXX0=