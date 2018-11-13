import {Component, forwardRef, HostListener, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export type JdbSwitchSizeType = 'default' | 'small';

@Component({
  selector: 'app-jdb-plg-switch',
  templateUrl: './jdb-plg-switch.component.html',
  // styleUrls: ['./jdb-plg-switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JdbPlgSwitchComponent),
      multi: true
    }
  ]
})
export class JdbPlgSwitchComponent implements OnInit, ControlValueAccessor {

  @Input()
  set jdbCheckedText(value: string) {
    this._jdbCheckedText = value;
  }

  get jdbCheckedText(): string {
    return this._jdbCheckedText;
  }

  @Input()
  set jdbUncheckedText(value: string) {
    this._jdbUncheckedText = value;
  }

  get jdbUncheckedText(): string {
    return this._jdbUncheckedText;
  }

  @Input()
  set jdbLoading(value: boolean) {
    this._jdbLoading = Boolean(value);
    this.setClassMap();
  }

  get jdbLoading(): boolean {
    return this._jdbLoading;
  }

  @Input()
  set jdbDisabled(value: boolean) {
    this._jdbDisabled = Boolean(value);
    this.setClassMap();
  }

  get jdbDisabled(): boolean {
    return this._jdbDisabled;
  }

  @Input()
  set jdbSize(value: JdbSwitchSizeType) {
    this._jdbSize = value;
    this.setClassMap();
  }

  get jdbSize(): JdbSwitchSizeType {
    return this._jdbSize;
  }

  @Input()
  set jdbControl(value: boolean) {
    this._jdbControl = Boolean(value);
  }

  get jdbControl(): boolean {
    return this._jdbControl;
  }

  outBoxClass: object;  // 外层容器class
  checked = false; // 是否打开。默认关闭
  prefixCls = 'jdb-switch';  // class前缀


  private _jdbCheckedText: string;  // 打开时展示的文字
  private _jdbUncheckedText: string;  // 关闭时展示的文字
  private _jdbLoading = false;  // 是否显示加载圈
  private _jdbDisabled = false;  // 是否禁用
  private _jdbControl = false;  // 是否完全控制
  private _jdbSize: JdbSwitchSizeType = 'default';  // 尺寸

  onChange: (value: boolean) => void = () => null;
  onTouched: () => void = () => null;

  @HostListener('click', ['$event'])
  onClick(ev: MouseEvent): void {
    if (!this.jdbDisabled && !this.jdbLoading && !this.jdbControl) {
      this.updateSwitchStatus(!this.checked, true);
    }
  }

  /**
   * 更新开关状态
   * @param {boolean} value
   * @param {boolean} isEmit
   */
  updateSwitchStatus(value: boolean, isEmit: boolean): void {
    if (this.checked === value) {
      return;
    }
    this.checked = value;
    this.setClassMap();
    if (isEmit) {
      this.onChange(this.checked);
    }
  }

  setClassMap(): void {
    this.outBoxClass = {
      [this.prefixCls]: true,
      [`${this.prefixCls}-checked`]: this.checked,
      [`${this.prefixCls}-loading`]: this.jdbLoading,
      [`${this.prefixCls}-disabled`]: this.jdbDisabled,
      [`${this.prefixCls}-small`]: this.jdbSize === 'small'
    };
  }

  // 实现ControlValueAccessor接口方法
  writeValue(value: boolean): void {
    this.updateSwitchStatus(value, false);
  }

  registerOnChange(fn: (_: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.jdbDisabled = isDisabled;
  }

  ngOnInit() {
    this.setClassMap();
  }

}
