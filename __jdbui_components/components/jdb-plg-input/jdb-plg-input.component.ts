import { Component, OnInit,EventEmitter,TemplateRef,Input,Output,ElementRef,ContentChild,forwardRef ,HostListener,ViewEncapsulation} from '@angular/core';
import { NgModel,ControlValueAccessor,NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-jdb-plg-input',
    template: `<span class="input-group-addon" *ngIf="_addOnContentBefore"> <ng-template [ngTemplateOutlet]="_addOnContentBefore"> </ng-template> </span> <ng-template [ngIf]="_type=='text'"> <div class="input-text-wrap" [ngClass]="_inputWrapClass"> <span class="input-prefix" *ngIf="_prefixContent"> <ng-template [ngTemplateOutlet]="_prefixContent"> </ng-template> </span> <input (blur)="_emitBlur($event)" (focus)="_emitFocus($event)" [disabled]="_disabled" [readonly]="_readonly" [attr.type]="_type" class="input" [ngClass]="_classMap" [attr.placeholder]="_placeHolder" [(ngModel)]="jdbValue" [style.width]="width" maxlength="{{jdbMaxLength}}" /> <span class="input-clear" *ngIf="_clear && _value && _type=='text'" (click)="clearTxt()"> <i class="close-icon icon-empty"></i> </span> <span class="ant-input-suffix" *ngIf="_suffixContent"> <i class="iconfont icon-guanbi2fill"></i> <ng-template [ngTemplateOutlet]="_suffixContent"> </ng-template> </span> </div> <div class="input-error-tip" *ngIf="jdbError && _errorContent"> <i class="icon-message-error error-tip"></i> <span> <ng-template [ngTemplateOutlet]="_errorContent"> </ng-template> </span> </div> </ng-template> <span class="input-group-addon" *ngIf="_addOnContentAfter"> <ng-template [ngTemplateOutlet]="_addOnContentAfter"> </ng-template> </span> <ng-template [ngIf]="_type=='textarea'"> <div class="input-text-wrap"> <textarea (blur)="_emitBlur($event)" (focus)="_emitFocus($event)" (input)="textareaOnChange($event)" #inputTextarea [disabled]="_disabled" [readonly]="_readonly" type="textarea" class="input input-textarea" [ngClass]="_classMap" [attr.placeholder]="jdbPlaceHolder" [(ngModel)]="jdbValue" maxlength="{{jdbMaxLength}}" [style.width]="width"></textarea> <span class="textarea-wc-tip" [ngClass]="{'textarea-wc-tip-red': jdbValue&&jdbValue.length == jdbMaxLength}" *ngIf="jdbMaxLength && !_disabled &&!_readonly">{{(jdbValue&&jdbValue.length)||0}}/{{jdbMaxLength}}</span> </div> </ng-template>`,
    styleUrls: ['./jdb-plg-input.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JdbPlgInputComponent),
      multi: true
    }
  ],
})

export class JdbPlgInputComponent implements OnInit,ControlValueAccessor{
    _value = '';
    _type= 'text';
    _placeHolder= '';
    _size= 'default';
    _disabled = false;
    _readonly = false;
    _error = false;
    _classMap: any;
    _inputWrapClass: Array<string> = [];
    _clear = false;
    _maxlength: number;
    _autoPromptData: Array<any> = [];
     _composing = false;
     @Input() width= '300px';
    // ngModel Access
    onChange: (value: string) => void = () => null;
    @ContentChild('jdbErrorContent')  _errorContent: TemplateRef<any>;
    @ContentChild( 'addContentBefore' ) _addOnContentBefore: TemplateRef<any>;
    @ContentChild('addContentAfter') _addOnContentAfter: TemplateRef<any>;
    @ContentChild('prefixContent') _prefixContent: TemplateRef<any>;
    @ContentChild('suffixContent') _suffixContent: TemplateRef<any>;
    @Output() jdbBlur: EventEmitter<MouseEvent> = new EventEmitter();
    @Output() jdbFocus: EventEmitter<MouseEvent> = new EventEmitter();

    ngOnInit() {
        // this._inputWrapClass =[`input-text-wrap-${this._size}`];
        if ( this._prefixContent ) {
            this._inputWrapClass.push('prefix');
        }
    }

    @HostListener('compositionstart', [ '$event' ])
    compositionStart(e: CompositionEvent): void {
        this._composing = true;
    }

    @HostListener('compositionend', [ '$event' ])
    compositionEnd(e: CompositionEvent): void {
        this._composing = false;
        this.onChange(this._value);
    }

    @Input()
    set jdbType(type: string){
        this._type = type;
    }
    get jdbType(): string{
        return this._type;
    }

    @Input()
    set jdbPlaceHolder(placeHolder: string){
        this._placeHolder = placeHolder;
    }
    get jdbPlaceHolder(): string{
        return this._placeHolder;
    }

    @Input()
    set jdbSize(size: string){
        this._size = {large: 'lg',small: 'sm'}[size];
        this.setClassMap();
    }
    get jdbSize(): string{
        return this._size;
    }

    @Input()
    set jdbDisabled(disabled: boolean){
        this._disabled = this.toBoolean(disabled);
        this.setClassMap();
    }
    get jdbDisabled(): boolean{
        return this._disabled;
    }

    @Input()
    set jdbReadonly(readonly: boolean){
        this._readonly = this.toBoolean(readonly);
    }
    get jdbReadonly(): boolean{
        return this._readonly;
    }

    @Input()
    set jdbValue(value: string){
        if ((this._value === value) || ((this._value == null) && (value == null))) {
            return;
        }
        this._value = value;
        if (!this._composing) {
        this.onChange(value);
        }
    }
    get jdbValue(): string{
        if(this._value == '0'){
            return '0';
        }
        return this._value || '';
    }
    @Input()
    set jdbError(value: boolean){
        this._error = this.toBoolean(value);
        this.setClassMap();
    }
    get jdbError(): boolean{
        return this._error;
    }
    @Input()
    set jdbClear(value: boolean){
        this._clear = this.toBoolean(value);
    }
    get jdbClear(): boolean{
        return this._clear;
    }

    @Input()
    set jdbMaxLength(value: number){
        this._maxlength = value;
    }
    get jdbMaxLength(): number{
        return this._maxlength;
    }

    @Input()
    set jdbPromptData(value: Array<any>){
        this._autoPromptData = value;
    }
    get jdbPromptData(): Array<any>{
        return this._autoPromptData;
    }
    writeValue(value: string): void {
        this._value = value;
    }
    registerOnChange(fn: (_: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
    }
    _emitBlur($event) {
        this.jdbBlur.emit($event);
    }

    _emitFocus($event) {
        this.jdbFocus.emit($event);
    }
    textareaOnChange($event){

    }
    setClassMap() {
        this._classMap = {
            [ `input-${this._type}-${this._size}` ]: true,
            [ 'input-disabled' ]: this._disabled,
            ['input-error']: this._error
        };
    }
    clearTxt() {
        this._value = '';
        this.onChange('');
    }

    toBoolean(value: boolean | string): boolean {
        return value === '' || (value && value !== 'false');
    }
}
