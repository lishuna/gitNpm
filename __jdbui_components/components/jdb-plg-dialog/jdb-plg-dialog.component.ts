import {
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  ViewChild,
  Output,
  Input,
  SimpleChanges,
  OnDestroy,
  Inject,
  ElementRef,
  HostListener,
  ViewEncapsulation,
  TemplateRef,
  EventEmitter,
  ViewContainerRef,
  Type,
  ComponentFactory,
  ComponentFactoryResolver
} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-jdb-plg-dialog',
  template: `<div [ngClass]="_customClass"> <div class="_maskClass" [ngClass]="{'hid':!_visible}" [style.zIndex]="1000"></div> <div class="jdb-modal" tabindex="-1" role="dialog" [ngClass]="{'hid':!_visible}" [ngStyle]="{'dispaly':!_visible}" (click)="closeModal($event)" class="_wrapClass" [ngClass]="_wrapClass" [style.zIndex]="1000" [attr.aria-modalId]="modalId"> <div #modal_content class="modal" [@optionsState]="_state" [ngStyle]="_bodyStyleMap"> <div class="modal-content"> <ng-template [ngIf]="_closeable"> <button class="modal-close" (click)="clickCancel($event)"> <!-- <span class="modal-close-x"></span> --> <span class="icon-close"></span> </button> </ng-template> <div class="modal-header" *ngIf="_title||_titleTpl"> <div class="modal-title" [attr.id]="modalId"> <ng-template #defaultTitle> {{_title}} </ng-template> <ng-template [ngTemplateOutlet]="_titleTpl||defaultTitle"> </ng-template> </div> </div> <div class="modal-body"> <ng-template #defaultContent>{{_content}}</ng-template> <ng-template [ngTemplateOutlet]="_contentTpl||defaultContent"></ng-template> <ng-template #modal_component></ng-template> </div> <div class="modal-footer" *ngIf="!_footerHide"> <ng-template #defalutFooter> <button *ngIf="!_isConfirm" app-jdb-plg-button [jdbSize]="'default'" [jdbType]="'white'" (click)="clickCancel($event)"><span>{{_cancelText||'取消'}}</span></button> <button *ngIf="!_isConfirm" class="right-btn" app-jdb-plg-button [jdbSize]="'default'" [jdbType]="'primary'" (click)="clickOk($event)"><span>{{_okText||'确认'}}</span></button> <button *ngIf="_isConfirm" class="right-btn" app-jdb-plg-button [jdbSize]="'default'" [jdbType]="'primary'" (click)="clickOk($event)" (click)="clickOk($event)"><span>{{_RogerText}}</span></button> </ng-template> <ng-template [ngTemplateOutlet]="_footerTpl||defalutFooter"></ng-template> </div> <div tabindex="0" style="width:0px;height:0px;overflow:hidden;">aaa</div> </div> </div> </div> </div>`,
  styleUrls: ['./jdb-plg-dialog.component.scss'],
  animations: [
    trigger('optionsState', [
      state('showM', style({
        transform: 'translate(-50%, -50%)',
        opacity: '1',
        // display: 'block',
      })),
      state('hideM', style({
        transform: 'translate(-50%, -80%)',
        opacity: '0',
        // display: 'none',
      })),
      transition('showM <=> hideM', animate('200ms ease-out'))
    ])]
})
export class JdbPlgDialogComponent implements OnInit, AfterViewInit, OnChanges {
  _customClass = '';
  _maskClass = '';
  _bodyStyleMap;
  modalId: number;
  _visible = false;
  _title = '';
  _closeable = true;
  _titleTpl: TemplateRef<void>;
  _content: string | Type<any>;
  _contentTpl: TemplateRef<void>;
  _animationStatus = '11';
  _bodyClass: string;
  _width = '400px';
  _footerHide = false;
  _isConfirm = false;
  _okText = '';
  _cancelText = '';
  _RogerText = '';
  _state = 'hideM';
  _footerTpl: TemplateRef<void>;
  @ViewChild('modal_content') contentEl: ElementRef;
  @ViewChild('modal_component', { read: ViewContainerRef }) bodyEl: ViewContainerRef;
  @Output() MvisibileChange: EventEmitter<boolean> = new EventEmitter();
  @Output() MOnOk: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() MOnCancel: EventEmitter<MouseEvent | KeyboardEvent> = new EventEmitter();
  // 弹框显隐
  @Input()
  set Mvisible(value: boolean) {
    const visible = this.toBoolean(value);
    if (this._visible === visible) {
      return;
    }

    this._visible = visible;
    this.MvisibileChange.emit(this._visible);
  }
  get Mvisible(): boolean {
    return this._visible;
  }
  // 隐藏footer
  @Input()
  set MfooterHiden(value: boolean) {
    const visible = this.toBoolean(value);
    if (this._visible === visible) {
      return;
    }
    this._footerHide = visible;
  }
  get MfooterHiden(): boolean {
    return this._footerHide;
  }
  // 标题
  @Input()
  set Mtitle(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._titleTpl = value;
    } else {
      this._title = value;
    }
  }
  @Input()
  set Mcontent(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._contentTpl = value;
    } else {
      this._content = value;
    }
  }
  @Input()
  set Mfooter(value:string|TemplateRef<void>){
    if (value instanceof TemplateRef){
      this._footerTpl = value;
    } 
  }
  
  // 自定义宽度
  @Input()
  set Mwidth(value: string | number) {
    this._width = typeof value === 'number' ? value + 'px' : value;
  }

  // 定位modal位置和样式
  setStyle() {
    const el = this.contentEl.nativeElement;
    this._bodyStyleMap = {
      ...{ width: this._width }
    };
  }


  @HostListener('keydown.esc', ['$event'])
  onEsc(e: KeyboardEvent): void {
    this.clickCancel(e);
  }

  // 自定义样式
  @Input()
  set Mclass(value: string) {
    this._customClass = value;
  }

  @Input()
  set MOkText(value: string) {
    this._okText = value;
  }
  @Input()
  set McancelText(value: string) {
    this._cancelText = value;
  }
  @Input()
  set MRogerText(value: string) {
    this._isConfirm = true;
    this._RogerText = value;
  }

  constructor(private resolver: ComponentFactoryResolver) { }
  ngOnInit() {
    this.setStyle();
  }
  createDynamicComponent(component: Type<any>) {
    const factory = this.resolver.resolveComponentFactory(this._content as Type<any>);
    this.bodyEl.createComponent(factory);
  }
  ngAfterViewInit() {
    
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this._visible) {
      this._state = 'showM';
      setTimeout(() => {
        this.contentEl.nativeElement.parentNode.focus();
      }, 200);
    } else {
      this._state = 'hideM';
    }
  }
  clickCancel(e): void {
    this._visible = false;
    this._state = 'hideM';
    this.MOnCancel.emit(e);
  }
  clickOk(e): void {
    if (this.MOnOk) {
      this.MOnOk.emit(e);
    } else {
      this._visible = false;
      this._state = 'hideM';
    }
  }
  closeModal(e): void {
    if ((e.target as HTMLElement).getAttribute('role') === 'dialog') {
      this.clickCancel(e);
      this._state = 'hideM';
    }
  }
  toBoolean(value: boolean | string): boolean {
    return value === '' || (value && value !== false);
  }
}
