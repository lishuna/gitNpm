import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  Inject,
  Renderer2,
  AfterViewInit,
  ViewChild,
  forwardRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { NgModel, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AutoCompleteResult } from './autocomplete.result';
import { keyCode } from './keycode';
@Component({
  selector: 'app-jdb-plg-autocomplete',
  templateUrl: './jdb-plg-autocomplete.component.html',
  // styleUrls: ['./jdb-plg-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JdbPlgAutocompleteComponent),
      multi: true
    }
  ]
})
export class JdbPlgAutocompleteComponent implements OnInit, AfterViewInit, ControlValueAccessor, OnChanges {
  _searchParam = 'key';    // 异步模式下，向后端传的搜索参数
  _serverApi = '/';        // 异步模式下，接口URL
  _searchWord = '';
  searchResult: AutoCompleteResult[] = [];    // 存储搜索结果
  _listShow = false;
  activeIndex = 0;
  selectOne: any;    // 存储选中数据
  ngModelValue = '';
  @ViewChild('resultele') resultEle: ElementRef;    // 盛放搜索结果的容器
  @Input() jdbPlaceHolder = '';
  @Input() width = '300px';
  _dataSource = [];    // 同步模式下一次性传入搜索数据
  @Input() dataKey = 'value';    // 自定义数据key的键值
  @Input() dataVal = 'text';     // 自定义数据的value键值
  @Input() jdbDataAsyn = false;    //  是否异步；默认同步处理
  @Output() onSelected: EventEmitter<AutoCompleteResult> = new EventEmitter(); // 选中回调
  onChange: (value: string) => void = () => null;
  constructor(private el: ElementRef,
              // @Inject('jdbPlgBaseApi') private jdbPlgBaseApi,
              private render: Renderer2) { }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.render.listen(this.el.nativeElement, 'input', this.debounce(() => {
      this.activeIndex = -1;
      this.inputHandle();
    }, 500, false));
    // 处理搜索框点击事件
    this.render.listen(this.el.nativeElement.querySelector('input[type="text"]'), 'click', (evt) => {
      this.activeIndex = -1;
      if (!this._searchWord) {
        this.searchResult = this.jdbDataSource;
      } else {
        this.searchResult = this.searchResult = this.jdbDataSource.filter((obj) => obj['text'].indexOf(this._searchWord) !== -1);
      }
      if (this.searchResult.length > 0) {
        this._listShow = true;
        setTimeout(_ => {
          this.resetPopDirection(this.el.nativeElement);
        }, 0);
      }
      evt.stopPropagation();
    });
    // 处理关闭搜索结果
    this.render.listen('document', 'click', (evt) => {
      this._listShow = false;
    });
    this.render.listen(this.el.nativeElement.querySelector('input[type="text"]'), 'blur', () => {
      if ( (this.selectOne && this._searchWord !== this.selectOne.text) || !this.selectOne ) {
        this._searchWord = '';
        this.ngModelValue = '';
        this.selectOne = null;
        this.onChange('');
      }
    });
  }
  ngOnChanges(simples: SimpleChanges) {
  }
  // 键盘事件
  @HostListener('keydown', ['$event']) OnKeyDown(event: KeyboardEvent) {
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
        const item = <AutoCompleteResult>this.searchResult[this.activeIndex];
        this.selectedItem(item, this.activeIndex);
        break;
      default:
        this.activeIndex = -1;
    }
  }
  // 粘贴事件
  @HostListener('paste', ['$event']) OnPaste(event: Event) {
    this.inputHandle();
  }
  // 处理input和paste事件
  inputHandle() {
    if (this._searchWord) {
      if (this.jdbDataAsyn) { // 异步请求接口，返回数据
        // this.popupList();
      } else {    // 同步过滤处理
        this.searchResult = this.jdbDataSource.filter((obj) => obj['text'].indexOf(this._searchWord) !== -1);
        // if (this.searchResult.length > 0) {
        //     this.selectOne = this.searchResult[this.activeIndex];
        // }
      }
      // 显示结果
      if (this.searchResult.length > 0) {
        this._listShow = true;
      } else {
        this._listShow = false;
      }
      // 要先让搜索结果展示，才能获取到相关高度，处理显示位置
      setTimeout(_ => {
        this.resetPopDirection(this.el.nativeElement);
      }, 0);
    }
  }
  closePop(event) {
    if (this.selectOne && this._searchWord && this._listShow) {
      if (this._searchWord !== this.selectOne.text) {
        this.ngModelValue = '';
        this.onChange('');
        this.selectOne = null;
        this._searchWord = '';
      } else {
        this.onSelected.emit(this.selectOne.value);
        this.ngModelValue = this.selectOne.value;
        this.onChange(this.ngModelValue);
      }
    }
    this._listShow = false;
    // event.stopPropagation();
  }
  // 设置选中样式
  setSelectClass(obj) {
    if (obj) {
      return this._searchWord === obj.text;
    }
    return;
  }
  // 设置文本框选中内容
  setSearchWord() {
    this.selectOne = <AutoCompleteResult>this.searchResult[this.activeIndex];
    this._searchWord = this.selectOne.text;
  }
  // 选中单个条目
  selectedItem(item, index) {
    this.activeIndex = index;
    this.selectOne = item;
    this._searchWord = item.text;
    this._listShow = false;
    this.onSelected.emit(this.selectOne.value);
    this.ngModelValue = this.selectOne.value;
    this.onChange(this.ngModelValue);
    event.stopPropagation();
  }
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
  debounce(fn, wait, immediate) {
    let timeout,
      args,
      context,
      timestamp,
      result;
    const later = function () {
      const last = new Date().getTime() - timestamp;
      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
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
      const callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = fn.apply(context, args);
        context = args = null;
      }
      return result;
    };
  }
  // 设置弹出位置
  resetPopDirection(node) {
    const getOffsetTop = function (ele) {
      let top = ele.offsetTop;
      if (!ele.offsetParent) {
        top += getOffsetTop(ele.offsetParent);
      }
      return top;
    };
    const getScrollTop = function (ele) {
      let top = ele.scrollTop;
      if (!ele.parentElement) {
        top += getScrollTop(ele.parentElement);
      }
      return top;
    };
    const nodeTop = getOffsetTop(node),
      clientHeight = document.documentElement.clientHeight || document.body.clientHeight,
      scrollTop = getScrollTop(node.parentElement),
      popHeight = this.resultEle.nativeElement.offsetHeight || 250,
      inputHeight = node.querySelector('input[type="text"]').offsetHeight;
    // console.log('clientHeight:' + clientHeight + 'nodeTop:' + nodeTop + 'nodeHeight:' + nodeHeight + 'scrollTop:' + scrollTop);
    const lastDirect = clientHeight - (nodeTop - scrollTop) - popHeight - inputHeight;
    if (lastDirect <= 0) {
      this.render.addClass(this.resultEle.nativeElement, 'pop_top');
    } else {
      this.render.removeClass(this.resultEle.nativeElement, 'pop_top');
    }
  }
  // 清空文本框处理
  changeInput() {
    if (this._searchWord === '') {
      this.ngModelValue = '';
      this.onChange('');
    }
  }
  @Input()
  set jdbDataSource(value) {
    this._dataSource = value;
    if (!this.jdbDataAsyn && this._dataSource.length > 0) {
      if (typeof this._dataSource[0] === 'string') {
        this._dataSource = this._dataSource.map((val, index) => ({
          value: val,
          text: val
        }));
      } else if (typeof this._dataSource[0] === 'object' && (this.dataKey !== 'value' || this.dataVal !== 'text')) {
        this._dataSource = this._dataSource.map((obj, index) => ({
          value: obj[this.dataKey],
          text: obj[this.dataVal]
        }));
      }
      this.searchResult = this._dataSource;
    }
  }
  get jdbDataSource() {
    return this._dataSource;
  }
  @Input()
  set jdbSearchParam(val) {
    this._searchParam = val;
  }
  get jdbSearchParam() {
    return this._searchParam;
  }
  @Input()
  set jdbServerApi(val) {
    this._serverApi = val;
  }
  get jdbServerApi() {
    return this._serverApi;
  }
  writeValue(value: string): void {
    this.ngModelValue = value;
    if (this.ngModelValue === '') {
      this._searchWord = '';
    }
  }
  registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
  }
}