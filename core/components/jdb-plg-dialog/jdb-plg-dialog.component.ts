import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Output,
  Input,
  ElementRef,
  EventEmitter,
  ViewContainerRef,
  Type,
  ComponentFactoryResolver,
  ComponentRef,
  Renderer2
} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-jdb-plg-dialog',
  templateUrl: './jdb-plg-dialog.component.html',
  animations: [
    trigger('optionsState', [
      state('showM', style({
        transform: 'translate(-50%, -50%)',
        opacity: '1',
      })),
      state('hideM', style({
        transform: 'translate(-50%, -80%)',
        opacity: '0',
      })),
      transition('showM <=> hideM', animate('200ms ease-out'))
    ])]
})
export class JdbPlgDialogComponent implements OnInit, AfterViewInit {
  _visible = false;                 //弹框显示隐藏
  _title = '提示';                   //弹框标题
  _bodyStyleMap;                    //弹框样式 
  _customClass = '';                //自定义容器样式
  _maskClass = '';                  //自定义遮罩样式
  _closeable = true;                //是否显示左上角关闭按钮
  _content: string | Type<void>;    //内容模板
  _footer = true;                   //是否显示底部按钮
  _isConfirm = false;               //是否是确认类型的模态框
  _okText = '';                     //确认按钮文案
  _cancelText = '';                 //取消按钮文案
  _state = '';                      //模态框状态
  _closeType = 'mask';              //自定义关闭模态框的热区
  _componentParams = {};            //模板参数
  _text = '';                       //文本内容
  _class = '';                      //文本类名
  _style = null;                    //文本样式
  contentComponentRef: ComponentRef<void>;
  @ViewChild('modal_content') contentEl: ElementRef;
  @ViewChild('modal_text') textEl: ElementRef;
  @ViewChild('modal_component', { read: ViewContainerRef}) bodyEl: ViewContainerRef;
  @Output() onClose: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() onOk: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() onCancel: EventEmitter<MouseEvent | KeyboardEvent> = new EventEmitter();


  //模态框内容模板
  @Input()
  _contentTpl: string | Type<void>;

  //弹框显示隐藏
  @Input()
  set visible(value) {
    this._visible = value;
    //控制切入和切出动画
    if (this._visible) {
      this._state = 'showM';
    } else {
      this._state = 'hideM';
    }
  }
  get visible() {
    return this._visible;
  }

  //弹框宽度
  @Input()
  set _width(value) {
    this._bodyStyleMap = {
      width: value
    }
  }

  constructor(
    private resolver: ComponentFactoryResolver,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    //判断_contentTpl是不是组件实例
    if (this._contentTpl instanceof Type) {
      this.createDynamicComponent(this._contentTpl as Type<void>);
    } else {
      this.createDynamicDom();
    }
  }
  
  //创建文本模板内容
  createDynamicDom(){
    let insertDiv = this.renderer.createElement('div');
      let text = this.renderer.createText(this._text);
      this.renderer.addClass(insertDiv,this._class);
      this.renderer.appendChild(insertDiv, text);
      if(this._style){
        for(let key in this._style){
          this.renderer.setStyle(insertDiv,key,this._style[key]);
        }
      }
      this.renderer.appendChild(document.querySelector('._modalTextBody'), insertDiv);
  }

  createDynamicComponent(component: Type<any>): void {
    //生成组件工厂函数
    const factory = this.resolver.resolveComponentFactory(component);
    //生成组件实例
    this.contentComponentRef = this.bodyEl.createComponent(factory);
    //模板的输入属性
    for (let key in this._componentParams) {
      this.contentComponentRef.instance[key] = this._componentParams[key];
    }
    //立刻执行一次变更检测
    this.contentComponentRef.changeDetectorRef.detectChanges();
  }

  ngAfterViewInit() {
    //动态组件实例存在 插入到视图容器中
    if (this.contentComponentRef) {
      this.bodyEl.insert(this.contentComponentRef.hostView);
    }
  }

  //关闭弹框
  closeModel(e: MouseEvent): void {
    this.onClose.emit(e);
    this._state = 'hideM';
  }

  //确认弹框
  confirmModel(e: MouseEvent): void {
    this.onOk.emit(e);
    this._state = 'hideM';
  }

  //取消弹框
  cancelModel(e: MouseEvent): void {
    this.onCancel.emit(e);
    this._state = 'hideM';
  }

  //点击遮罩关闭
  cusCloseModal(e: MouseEvent): void {
    let flag = this.isChildOf(e.target, this.contentEl.nativeElement);
    if (this._closeType === 'mask' && !flag) {
      this.onClose.emit(e);
      this._state = 'hideM';
    }
  }

  //阻止冒泡
  // selfCloseModal(e: MouseEvent): void {
  //   e.stopPropagation();
  //   e.cancelBubble = true;
  // }

  isChildOf(child, parent) {
    var parentNode;
    if (child && parent) {
      parentNode = child.parentNode;
      while (parentNode) {
        if (parent === parentNode) {
          return true;
        }
        parentNode = parentNode.parentNode;
      }
    }
    return false;
  }
}
