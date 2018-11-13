import {
  Component,
  OnInit,
  Input,
  ViewContainerRef,
  ViewChild,
  ElementRef,
  ComponentRef,
  ComponentFactoryResolver,
  Injector,
  OnDestroy,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'jdb-tab',
  templateUrl: './jdb-tab.component.html'
  // styleUrls: ['./jdb-tab.component.scss']
})
export class JdbTabComponent implements OnInit, OnDestroy, OnChanges {
  // @ViewChild('tabContent') tabContent: ElementRef;
  @ViewChild('tabContent', { read: ViewContainerRef })
  target;
  @Output() onTabChange = new EventEmitter();
  @Output() onTabRemove = new EventEmitter();
  @Output() onTopComMsg = new EventEmitter();
  @Input() totalTip: any; // tab标签后面的总数提示
  @Output() totalTipChange = new EventEmitter();
  items = [];
  tabComs = [];
  tabSubs: any;
  curTabIndex = 0;
  tabIdComMap = {};
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public _injector: Injector
  ) {
    this.totalTip = {
      isShow: false
    };
  }

  ngOnInit() {}

  ngOnChanges() {
    // console.log('changes:totalTip:' + this.totalTip);
  }

  /**
   *
   * @param ChildComponent
   * @param attrs:{
   *     propery:value
   * ]
   * title:string
   * isCloseFlag
   * @description: tab切换的样式作为可配置功能拓展，主要是通过类名设置，提供主题名theme和色调搭配 style:
   * 一、theme说明：
   * - text-纯文本
   * - trapezoid-梯形
   * - rectangle-长方形
   * - 待以后添加
   * 二、style说明：
   * 1、纯文本的一般情况下是没有边框和背景色的，所以格式遵循：'形状'-'初始字体颜色''激活字体颜色''边框色''边框长还是短'
   * - text garyBlackBlueLong（文本的默认样式）
   * - text garyBlackBlueShort
   * 2、图形一般情况下有边框和背景色：
   * （格式严格遵循：'形状'-'初始背景色''激活背景色''边框色''边框长还是短': 比如 'rectangle grayWhiteBlueLong')
   * - rectangle grayWhiteBlueLong: 长方形-灰色 白色 蓝边 长。这也是默认的tab样式
   * - trapezoid grayWhite: 梯形-灰色 白色。说明梯形的tab没有 边框的颜色效果
   * （如果倒数几个配置均不需要，则用nonono，直接省略不写：'trapezoid-grayWhite'））
   * （但是如果是中间有配置项为no，则不能省略 no。书写为：'trapezoid-noNoBlueLong'）
   * @example:
   * this.lefTopTab.addItem(ChildrenComponent, {
   *     theme: {
   *      height: 40,
   *      name: 'trapezoid',
   *      style: 'grayWhite',
   *      borderLength: 'long' / 'short'
   *     }
   *   }, '主页', '', true);
   * @extends:
   * 如果颜色配置遇到'light'，表示设置透明；
   * 三、borderLength说明：
   * ‘long'-长边框，此时隐藏元素
   * ‘short'-短边框，此时显示元素
   */
  addItem(
    ChildComponent: any,
    attrs: any,
    title: string,
    comId: any = '',
    isCloseFlag: boolean = false
  ) {
    if (comId && this.tabIdComMap[comId]) {
      let com: any = this.tabIdComMap[comId];
      this.tabChange(com.index);
      return;
    }
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(
      ChildComponent
    );
    var comInstance = this.target.createComponent(childComponent);
    var keys = Object.keys(attrs);
    this.items.push({
      title: title,
      isCloseFlag: isCloseFlag,
      theme: attrs.theme ? (attrs.theme.name ? attrs.theme.name : null) : null,
      style: attrs.theme
        ? attrs.theme.style
          ? attrs.theme.style
          : null
        : null,
      height: attrs.theme
        ? attrs.theme.height
          ? attrs.theme.height
          : null
        : null,
      borderLength: attrs.theme
        ? attrs.theme.borderLength
          ? attrs.theme.borderLength
          : null
        : null
    });
    keys.forEach(value => {
      comInstance.instance[value] = attrs[value];
    });
    this.tabComs.push(comInstance);
    if (this.items.length > 1) {
      this.setOneComHide(this.curTabIndex);
    }

    this.tabSubs = comInstance.instance['onTopComMsg'] = new EventEmitter();
    this.tabSubs.subscribe(value => {
      this.onTopComMsg.emit(value);
    });
    this.curTabIndex = this.items.length - 1;
    if (comId) {
      this.tabIdComMap[comId] = {
        index: this.curTabIndex,
        comInstance: comInstance.instance
      };
    }
    return comInstance;
  }

  private setOneComHide(tabIndex) {
    this.tabComs[tabIndex].location.nativeElement.style.display = 'none';
  }

  private setOneComShow(tabIndex) {
    this.tabComs[tabIndex].location.nativeElement.style.display = 'block';
  }

  tabChange(index) {
    if (this.curTabIndex === index) {
      return;
    }
    this.setOneComHide(this.curTabIndex);
    this.setOneComShow(index);
    this.curTabIndex = index;
    this.onTabChange.emit(index);
    this.tabComs[index].instance.tabRefresh &&
      this.tabComs[index].instance.tabRefresh({});
    // this.tabComs[index].destroy();
  }

  setOneTabShow(index) {
    this.tabChange(index);
  }

  removeTab(index) {
    this.tabComs[index].destroy();
    this.tabComs.splice(index, 1);
    this.items.splice(index, 1);
    if (index <= this.curTabIndex) {
      this.curTabIndex--;
    }
    if (this.curTabIndex < 0) {
      this.curTabIndex = 0;
    }
    this.setOneComShow(this.curTabIndex);
    this.onTabRemove.emit(index);
    let tabIdComMap = this.tabIdComMap;
    for (let key in tabIdComMap) {
      if (tabIdComMap[key].index == index) {
        delete tabIdComMap[key];
        break;
      }
    }
  }

  removeTabById(id: string) {
    let tabIdComMap = this.tabIdComMap;
    for (let key in tabIdComMap) {
      if (key == id) {
        this.removeTab(tabIdComMap[key]['index']);
        break;
      }
    }
  }
  ngOnDestroy() {
    if (this.target) {
      // this.target.destroy();
      this.target.clear();
    }
  }
}
