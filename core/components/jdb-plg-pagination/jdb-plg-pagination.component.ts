
import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  ElementRef,
  ViewChild,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-jdb-plg-pagination',
  template: `<div class="jdb-plg-pagination">
    <!-- 总条数 -->
    <span *ngIf="_showTotal" class="total-box">
      共{{_total}}条
    </span>

    <div class="operate-box">
        <!-- 条数切换 -->
        <div class="jdb-plg-pagination-options" *ngIf="_showPageSize">
            <app-jdb-plg-select (ngModelChange)="dataChange(false,$event)" [jdbSize]="'small'" [jdbWidth]="_jdbSelectWidth" [(ngModel)]="_pageSize" [jdbSelectList]="_options"></app-jdb-plg-select>
        </div>
        <!-- 基本分页样式 -->
        <ul *ngIf="!_jdbSimple" class="base-pagination">
            <!-- 上一页按钮 -->
            <li class="jdb-plg-pagination-prev" title="上一页" [ngClass]="{'disabled':_current===_firstIndex}" (click)="dataChange(true,_current-1,$event)">
                <span class="jdbIcon icon-pagination-prev"></span>
            </li>
            <!-- 首页按钮 -->
            <li class="jdb-plg-pagination-first" title="首页" [ngClass]="{'active':_current===_firstIndex}" (click)="dataChange(true,_firstIndex,$event)">
                {{_firstIndex}}
            </li>
            <!-- 省略号 -->
            <li class="jdb-plg-pagination-forward" *ngIf="(_lastIndex >9)&&(_current-4>_firstIndex)" (click)="jumpBefore($event,_pageSize)">
                <span class="icon-pagination-more"></span>
                <span class="icon-pagination-jump-prev"></span>
            </li>
            <!-- 按钮 -->
            <li class="jdb-plg-pagination-pager" *ngFor="let page of pages" [ngClass]="{'active':_current===page.index}" (click)="dataChange(true,page.index,$event)">
                {{page.index}}
            </li>
            <!-- 省略号 -->
            <li class="jdb-plg-pagination-backward" *ngIf="(_lastIndex >9)&&(_current+4<_lastIndex)" (click)="jumpAfter($event,_pageSize)">
                <span class="icon-pagination-more"></span>
                <span class="icon-pagination-jump-next"></span>
            </li>
            <!-- 尾页按钮 -->
            <li class="jdb-plg-pagination-last" *ngIf="(_lastIndex>0)&&(_lastIndex!==_firstIndex)" title="尾页" [ngClass]="{'active':_current===_lastIndex}" (click)="dataChange(true,_lastIndex,$event)">
                {{_lastIndex}}
            </li>
            <!-- 下一页按钮 -->
            <li class="jdb-plg-pagination-next" title="下一页" [ngClass]="{'disabled':_current===_lastIndex}" (click)="dataChange(true,_current+1,$event)">
                <span class="jdbIcon icon-pagination-next"></span>
            </li>
        </ul>
        <!-- 简单分页样式 -->
        <div class="simple-pagination" *ngIf="_jdbSimple">
            <div class="left-box">
                <span class="icon-pagination-first" [ngClass]="{'disabled':_current===_firstIndex}" (click)="dataChange(true,_firstIndex,$event)"></span>
                <span class="icon-pagination-prev" [ngClass]="{'disabled':_current===_firstIndex}" (click)="dataChange(true,_current-1,$event)"></span>
            </div>
            <div class="center-box">
                {{_current}} / {{_lastIndex}}
            </div>
            <div class="right-box">
                <span class="icon-pagination-next" [ngClass]="{'disabled':_current===_lastIndex}" (click)="dataChange(true,_current+1,$event)"></span>
                <span class="icon-pagination-last" [ngClass]="{'disabled':_current===_lastIndex}" (click)="dataChange(true,_lastIndex,$event)"></span>
            </div>
        </div>
        <!-- 快速跳转 -->
        <div *ngIf="_showQuickJump" class="quick-jumper">
            第
            <input #inputJump type="text" [(ngModel)]="quickJumpPage" (keyup.enter)="quickJump()" appOnlyNumber="true"> 页
            <button (click)="quickJump()">跳转</button>
        </div>
    </div>
</div>`,
  // styleUrls: ['./jdb-plg-pagination.component.scss']
})
export class JdbPlgPaginationComponent {
  _total: number; // 总条数
  _current = 1; // 当前页码默认为1
  _pageSize = 10; // 默认条数
  _firstIndex = 1;  // 首页默认为1
  _lastIndex = Infinity;  // 尾页默认为无穷
  _showTotal = false;  // 是否展示总数，默认不展示
  _showPageSize = false; // 是否展示页码切换，默认不展示
  _showQuickJump = false; // 是否展示快速跳转，默认不展示
  pages = [];  // 页码数组
  // _options = [10, 20, 30, 40, 50]; // select默认数组
  // select默认数组
  _options = [
    { value: 10, text: '10条/页' },
    { value: 20, text: '20条/页' },
    { value: 30, text: '30条/页' },
    { value: 40, text: '40条/页' },
    { value: 50, text: '50条/页' }
  ];

  quickJumpPage: any; // 快速跳转页码
  hisQicukPage: any;  // 历史快速跳转页码
  _jdbSimple = false; // 是否为简单分页，默认为基本分页
  _jdbSelectWidth = '90px'; // 下拉框宽度

  @Output() jdbPageSizeChange: EventEmitter<number> = new EventEmitter();  // 条数切换  命名与属性相关
  @Output() jdbPageIndexChange: EventEmitter<number> = new EventEmitter();  // 页码切换

  @ViewChild('inputJump') private inputJump: ElementRef;
  constructor(
    private el: ElementRef,
    private renderer2: Renderer2
  ) { }

  // 是否展示总数标签
  @Input()
  set jdbShowTotal(value: boolean) {
    this._showTotal = this.toBoolean(value);
  }

  get jdbShowTotal(): boolean {
    return this._showTotal;
  }

  // 数据总数
  @Input()
  set jdbTotal(value: number) {
    // 若传入值和当前total一致，则不触发操作
    if (value === this._total) {
      return;
    }
    this._total = value;
    this.setPageNo();
  }

  get jdbTotal(): number {
    return this._total;
  }

  // jdbPageIndex与_current关联，表示页码
  @Input()
  set jdbPageIndex(value: number) {
    if (this._current === value) {
      return;
    }
    if (value > this._lastIndex || value < this._firstIndex) {
      return;
    }
    this._current = Number(value);
    this.setPageNo();
  }

  get jdbPageIndex(): number {
    return this._current;
  }

  // 是否展示切换条数select
  @Input()
  set jdbShowPageSize(value: boolean) {
    this._showPageSize = this.toBoolean(value);
  }

  get jdbShowPageSize(): boolean {
    return this._showPageSize;
  }

  // 默认条数
  @Input()
  set jdbPageSize(value: number) {
    if (value === this._pageSize) {
      return;
    }
    this._pageSize = value;
    this.setPageNo();
  }

  get jdbPageSize(): number {
    return this._pageSize;
  }

  // 默认下拉选择条数数组
  @Input()
  set jdbSizeOptions(value) {
    // 若传入值和当前total一致，则不触发操作
    if (value === this._options) {
      return;
    }

    // 判断是否为数组
    if (Object.prototype.toString.call(value) === '[object Array]') {
      const optionsArr = [];
      value.forEach(elem => {
        const obj = {
          value: elem,
          text: elem + '条/页'
        };
        optionsArr.push(obj);
      });
      this._options = optionsArr;
    }
  }

  get jdbSizeOptions() {
    return this._options;
  }

  // 是否展示快速跳转页面
  @Input()
  set jdbShowQuickJump(value: boolean) {
    this._showQuickJump = this.toBoolean(value);
  }

  get jdbShowQuickJump(): boolean {
    return this._showQuickJump;
  }

  // 分页样式
  @Input()
  set jdbSimple(value: boolean) {
    this._jdbSimple = this.toBoolean(value);
  }

  get jdbSimple(): boolean {
    return this.jdbSimple;
  }

  // 下拉框宽度设置，防止window系统出现滚动条位置不够
  @Input()
  set jdbSelectWidth(value: string) {
    this._jdbSelectWidth = value;
  }

  get jdbSelectWidth(): string {
    return this._jdbSelectWidth;
  }

  // 创建页码
  setPageNo() {
    // 向上取整
    this._lastIndex = Math.ceil(this._total / this._pageSize);
    // 如果当前页码大于尾页，则等于尾页
    // if (this._current > this._lastIndex) {
    //   this.jdbPageIndex = this._lastIndex;
    //   this.jdbPageIndexChange.emit(this.jdbPageIndex);
    // }

    const tmpPages = [];

    if (this._lastIndex <= 9) {
      // 若总页数不超过9，则全部展示在页面上
      for (let i = 2; i <= this._lastIndex - 1; i++) {
        tmpPages.push({
          index: i
        });
      }
    } else {
      const current = +this._current;
      let left = Math.max(2, current - 2);
      let right = Math.min(current + 2, this._lastIndex - 1);

      // 特殊处理正数第五个数和倒数第五个数
      if (current === 5) {
        left = 2;
      } else if (current === this._lastIndex - 4) {
        right = this._lastIndex - 1;
      }

      if (current - 1 <= 3) {
        right = 7;
      }

      if (this._lastIndex - current <= 3) {
        left = this._lastIndex - 6;
      }

      for (let i = left; i <= right; i++) {
        tmpPages.push({ index: i });
      }
    }

    this.pages = tmpPages;
  }

  // status为true表示页码切换，num表示页码，false表示条数切换，num表示条数  e为$event
  dataChange(status: boolean, num: number, e?): void {
    if (e) {
      e.stopPropagation();
    }

    if (status) {
      if (num === this._firstIndex - 1 || num === this._lastIndex + 1) {
        return;
      }
      // 清空输入框内容
      this.quickJumpPage = '';
      this.jdbPageIndex = num;
      this.jdbPageIndexChange.emit(this.jdbPageIndex);
    } else {
      // 清空输入框内容
      this.quickJumpPage = '';
      this.jdbPageSize = num;
      this.jdbPageSizeChange.emit(num);

      // 切换页数之后需要将页码重置为1
      this.jdbPageIndex = 1;
      this.jdbPageIndexChange.emit(this.jdbPageIndex);
      this.setPageNo();
    }
    // this.setPageNo();
  }

  // 点击跳转按钮快速跳转
  quickJump() {
    // 若是输入的页码大于最后一页页码，即超出范围不存在，则清空页码，并使输入框获取焦点
    if (this.quickJumpPage > this._lastIndex) {
      this.inputJump.nativeElement.focus();
      this.quickJumpPage = '';
      return;
    }

    // 若输入为空，则不能跳转
    if (!this.quickJumpPage) {
      return;
    }

    this.jdbPageIndex = this.quickJumpPage;
    this.jdbPageIndexChange.emit(this.jdbPageIndex);
  }

  // 点击左箭头(为什么使用条数除以2呢)
  jumpBefore(e, pageSize) {
    this.dataChange(true, this._current - Math.round(pageSize / 2), e);
  }

  // 点击右箭头
  jumpAfter(e, pageSize) {
    this.dataChange(true, this._current + Math.round(pageSize / 2), e);
  }

  // 转换为boolean,即实现有这个字段就认为为true,没有即为false
  toBoolean(value: boolean | string): boolean {
    return value === '' || (value && value !== 'false');
  }

  // 校验是否为纯数字
  isNumber(obj) {
    const reg = /^[0-9]*$/;
    return reg.test(obj);
  }

}

