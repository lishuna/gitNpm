/*
  下拉框功能：
  种类：单选，多选，选几项
  样式：高度 middle small large
*/

import {
	ViewContainerRef,
	Component,
	OnInit,
	Input,
	forwardRef,
	AfterViewInit,
	Renderer2,
	ElementRef,
	ViewChild,
	Renderer,
	ViewChildren,
	OnChanges
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-jdb-plg-select',
	templateUrl: './jdb-plg-select.component.html',
	// styleUrls: ['./jdb-plg-select.component.scss'],
	providers: [
		{
			// 注册成为表单控件
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => JdbPlgSelectComponent),
			multi: true
		}
	]
})
export class JdbPlgSelectComponent implements OnInit, OnChanges {
	_selectList: any;
	_size = 'middle';
	_width: string;
	_optionText = 'text'; // 默认值
	_optionValue = 'value'; // 默认值
	_optionPosition: string;
	isShowClear = false; // 是否展示清空x
	_jdbClear = false;
	_jdbDisabled = false; // 默认未禁用
	_jdbMode = 'chooseOne';
	_placeHolder = '请选择';
	_chooseMoreArray = []; // 多选选中元素数组
	_classMap = {};
	listHeight: number;
	savaHeight = true;
	spaceFlex = true; // 是否有剩余空间，默认有
	_showImgBox = false; // 下拉框是否带图片
	_jdbItemDisabled = 'disabled'; // 默认为disabled
	_jdbSureDisabled = 2; // 为1是启用 2是禁用
	_jdbNoDisabled = 1; // 为2表示不禁用
	_jdbError = false; //  输入框输入项报错标红

	// 自定义类名
	@Input() jdbClassName = '';

	// 选项中某项禁用字段
	@Input()
	set jdbItemDisabled(value) {
		this._jdbItemDisabled = value;
	}
	get jdbItemDisabled(): string {
		return this._jdbItemDisabled;
	}

	// 输入框是否处于报错状态
	@Input()
	set jdbError(value) {
		this._jdbError = this.toBoolean(value);
	}
	get jdbError(): boolean {
		return this._jdbError;
	}

	// 选项中某项确认禁用
	@Input()
	set jdbSureDisabled(value) {
		this._jdbSureDisabled = value;
	}
	get jdbSureDisabled(): any {
		return this._jdbSureDisabled;
	}

	// // 选项中某项不禁用
	// @Input()
	// set jdbNoDisabled(value) {
	//   this._jdbNoDisabled = value;
	// }
	// get jdbNoDisabled(): any {
	//   return this._jdbNoDisabled;
	// }

	// 选项中某项确认禁用
	@Input()
	set jdbPlaceHolder(value) {
		this._placeHolder = value;
	}
	get jdbPlaceHolder(): any {
		return this._placeHolder;
	}

	// 是否需要显示清空
	@Input()
	set jdbClear(value) {
		this._jdbClear = this.toBoolean(value);
	}
	get jdbClear(): boolean {
		return this._jdbClear;
	}

	// 下拉框数组，必写
	@Input()
	set jdbSelectList(value) {
		// 循环数组，判断是否需要展示带有图片下拉框
		if (value) {
			const arr = [];
			value.forEach((element) => {
				const type = typeof element;
				if (type === 'string' || type === 'number') {
					arr.push({
						text: element,
						value: element
					});
				} else {
					arr.push(element);
					if (element.imgUrl) {
						this._showImgBox = true;
					}
				}
			});

			this._selectList = arr;
		}
	}
	get jdbSelectList(): any {
		return this._selectList;
	}

	// 下拉框尺寸，默认为高度30px；small为24px,large为40px;
	@Input()
	set jdbSize(value) {
		this._size = value;
	}
	get jdbSize(): string {
		return this._size;
	}

	// 自定义宽度
	@Input()
	set jdbWidth(value) {
		this._width = value;
	}
	get jdbWidth(): string {
		return this._width;
	}

	// 展示在页面内容字段名称
	@Input()
	set jdbOptionText(value) {
		this._optionText = value;
	}
	get jdbOptionText(): string {
		return this._optionText;
	}

	// 返回给serve对应字段名称
	@Input()
	set jdbOptionValue(value) {
		this._optionValue = value;
	}
	get jdbOptionValue(): string {
		return this._optionValue;
	}

	// 下拉框禁用
	@Input()
	set jdbDisabled(value) {
		this._jdbDisabled = this.toBoolean(value);
	}
	get jdbDisabled(): boolean {
		return this._jdbDisabled;
	}

	// select模式，默认为单选，chooseMore多选
	@Input()
	set jdbMode(value) {
		this._jdbMode = value;
	}
	get jdbMode(): string {
		return this._jdbMode;
	}

	@ViewChild('inputDom') inputDom: ElementRef;
	@ViewChild('optionList') optionList: ElementRef;

	show = false;
	inputText: any;
	ngModelValue: any = ''; // 单选为字符串，多选为数组
	constructor(private renderer2: Renderer2, private renderer: Renderer) { }

	ngOnInit() { }

	// tslint:disable-next-line:use-life-cycle-interface
	ngAfterViewInit() {
		// 点击除下拉框以外位置，下拉框隐藏
		this.renderer2.listen('document', 'click', () => {
			this.show = false;
			this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
		});

		if (this._jdbClear && !this._jdbDisabled) {
			// 监听输入框元素，若有内容时则滑上显示x
			this.renderer2.listen(this.inputDom.nativeElement, 'mouseenter', () => {
				// 若输入框不存在内容，则不做任何操作
				if (this._jdbMode === 'chooseOne' && (this.inputText === '' || this.show)) {
					return;
				} else if (this._jdbMode === 'chooseNum' && (this.inputText === 0 || this.show)) {
					return;
				} else if (this._jdbMode === 'chooseMore' && (this.inputText.length === 0 || this.show)) {
					return;
				}

				this.isShowClear = true;
				this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
			});
			this.renderer2.listen(this.inputDom.nativeElement, 'mouseleave', () => {
				// 若输入框不存在内容，则不做任何操作
				if (this._jdbMode === 'chooseOne' && (this.inputText === '' || this.show)) {
					return;
				} else if (this._jdbMode === 'chooseNum' && (this.inputText === 0 || this.show)) {
					return;
				} else if (this._jdbMode === 'chooseMore' && (this.inputText.length === 0 || this.show)) {
					return;
				}

				this.isShowClear = false;
				this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
			});
		}
	}

	ngOnChanges() {
		// 当数组取到后重新判断ngModel绑定的值，解决异步数据不回显问题
		if (this._selectList) {
			if (this.ngModelValue === null || this.ngModelValue === '' || this.ngModelValue === undefined) {
				// 若传入值为null，则清空数据
				if (this._jdbMode === 'chooseMore') {
					this.inputText = [];
					this._chooseMoreArray = [];
				} else if (this._jdbMode === 'chooseNum') {
					this.inputText = 0;
					this._chooseMoreArray = [];
				} else {
					this.inputText = '';
				}
			} else {
				if (this._jdbMode === 'chooseOne') {
					this.forOneStart(this.ngModelValue);
				} else if (this._jdbMode === 'chooseMore') {
					this.forMoreStart(this.ngModelValue);
					this.setClassMap();
				} else if (this._jdbMode === 'chooseNum') {
					this.forNumStart(this.ngModelValue);
				}
			}
		}

		this.setClassMap();
	}

	setClassMap() {
		if (this._jdbMode === 'chooseMore') {
			this._classMap = {
				[`${this._size}`]: true,
				[`jdb-plg-select-bottom-${this._size}`]: this.inputText.length !== 0,
				['jdb-plg-select-disabled']: this._jdbDisabled,
				[this.jdbClassName]: true,
				['jdb-plg-select-error']: this._jdbError // 输入项报错标红
			};
		} else {
			this._classMap = {
				[`${this._size}`]: true,
				['jdb-plg-select-disabled']: this._jdbDisabled,
				[this.jdbClassName]: true,
				['jdb-plg-select-error']: this._jdbError // 输入项报错标红
			};
		}
	}

	// 点击x，清空内容
	clearInputText(e) {
		e.stopPropagation();

		if (this._jdbMode === 'chooseOne') {
			this.inputText = '';
		} else if (this._jdbMode === 'chooseMore') {
			this.inputText = [];
			this._chooseMoreArray = [];
		} else if (this._jdbMode === 'chooseNum') {
			this.inputText = 0;
			this._chooseMoreArray = [];
		}
		this.isShowClear = !this.isShowClear;

		// 清空后输入需要重新告知父组件
		this.ngModelValue = '';
		this.onChange('');

		this.setClassMap();
	}

	// 点击输入框下拉菜单显隐
	dialogShow(e) {
		e.stopPropagation();
		// 若外侧组件告知禁用，则点击没有任何效果
		if (this._jdbDisabled) {
			return;
		}
		this.isShowClear = false;
		this.show = !this.show;
		this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
		this.optionPosition(this.optionList.nativeElement.clientHeight);
	}

	// 浮层出现是在输入框上方还是下方
	optionPosition(listHeight) {
		const offetTop = this.getTop(this.inputDom.nativeElement); // 元素offetTop
		const scrollTop = this.getScrollTop(this.inputDom.nativeElement.parentElement);
		const clientHeight = document.documentElement.clientHeight || document.body.clientHeight; // 屏幕高度
		const elemHeight = this.inputDom.nativeElement.clientHeight; // 元素高度
		let paddingHeight;
		if (this.jdbSize === 'small') {
			paddingHeight = 2;
		} else if (this.jdbSize === 'large') {
			paddingHeight = 9;
		} else if (this.jdbSize === 'middle') {
			paddingHeight = 5;
		}
		const flexHeight = clientHeight - offetTop - elemHeight - paddingHeight + scrollTop; // 剩余高度
		if (flexHeight < listHeight) {
			// 空间不足
			this.spaceFlex = false;
			this.renderer.setElementStyle(this.optionList.nativeElement, 'transform-origin', '100% 100%');
			if (listHeight < 188) {
				this.renderer.setElementStyle(this.optionList.nativeElement, 'top', -listHeight - 5 + 'px');
			} else {
				this.renderer.setElementStyle(this.optionList.nativeElement, 'top', -190 - paddingHeight + 'px');
			}
		} else {
			this.spaceFlex = true;
			this.renderer.setElementStyle(this.optionList.nativeElement, 'top', '');
			this.renderer.setElementStyle(this.optionList.nativeElement, 'transform-origin', '0% 0%');
		}
	}

	// ControlValueAccessor 自定义表单 与父组件的ngModel绑定起来
	writeValue(value: any): void {
		this.ngModelValue = value;
		if (value === null || value === '' || value === undefined) {
			// 若传入值为null，则清空数据
			if (this._jdbMode === 'chooseMore') {
				this.inputText = [];
				this._chooseMoreArray = [];
			} else if (this._jdbMode === 'chooseNum') {
				this.inputText = 0;
				this._chooseMoreArray = [];
			} else {
				this.inputText = '';
			}
		} else {
			if (this._jdbMode === 'chooseOne') {
				this.forOneStart(value);
			} else if (this._jdbMode === 'chooseMore') {
				this.forMoreStart(value);
				this.setClassMap();
			} else if (this._jdbMode === 'chooseNum') {
				this.forNumStart(value);
			}
		}
	}
	onChange: (value: any) => void = () => null;

	registerOnChange(fn: (value: any) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void { }

	setDisabledState(isDisabled: boolean): void { }

	// 单选，若有初始选项，则遍历数组
	forOneStart(value) {
		this._selectList.forEach((elem) => {
			if (elem[this._optionValue] === value) {
				this.inputText = elem[this._optionText];
			}
		});
	}

	// 多选，若有初始值则遍历数组
	forMoreStart(value) {
		// 判断传入值类型 老版本为string,新版本为数组，兼容新老版本
		if (typeof value === 'string') {
			value = value.toString().split(',');
		}
		value.forEach((item) => {
			this._selectList.forEach((elem) => {
				if (elem[this._optionValue] === item) {
					// inputText为输入框中展示的内容 判断是否有重新赋值text和value字段
					let textName = this._optionText;
					let valueName = this._optionValue;
					if (this.jdbOptionText) {
						textName = this.jdbOptionText;
					}
					if (this.jdbOptionValue) {
						valueName = this.jdbOptionValue;
					}

					// key为变量的赋值方法
					const obj = {};
					obj[textName] = elem[this._optionText];
					obj[valueName] = elem[this._optionValue];
					this.inputText.push(obj);

					// this._chooseMoreArray为传出去的数据
					this._chooseMoreArray.push(elem[this._optionValue]);
					return;
				}
			});
		});
	}

	// 选几项
	forNumStart(value) {
		// 判断传入值类型 老版本为string,新版本为数组，兼容新老版本
		if (typeof value === 'string') {
			value = value.toString().split(',');
		}

		value.forEach((item) => {
			this._selectList.forEach((elem) => {
				if (elem[this._optionValue] === item) {
					this.inputText++;
					this._chooseMoreArray.push(elem[this._optionValue]);
					return;
				}
			});
		});
	}

	// 单选某一元素点击
	item(e, item) {
		// 阻止事件冒泡
		e.stopPropagation();

		// 判断show是否为true
		if (!this.show) {
			return;
		}
		// 判断该项是否可点击
		if (item[this._jdbItemDisabled] === this._jdbSureDisabled) {
			return;
		}

		this.inputText = item[this._optionText];
		this.show = !this.show;
		this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);

		this.ngModelValue = item[this._optionValue];
		this.onChange(item[this._optionValue]);
	}

	// 多选元素点击
	chooseMore(e, item) {
		let flag = false;
		// 阻止事件冒泡
		e.stopPropagation();
		// 判断show是否为true
		if (!this.show) {
			return;
		}

		// 判断该项是否可点击
		if (item[this._jdbItemDisabled] === this._jdbSureDisabled) {
			return;
		}

		// 判断是否存在
		this.inputText.forEach((element, index) => {
			if (element[this._optionValue] === item[this._optionValue]) {
				flag = true;
				return;
			}
		});

		if (flag) {
			this.deleteMoreItem(e, item);
			return;
		}

		// inputText为输入框中展示的内容
		let textName = this._optionText;
		let valueName = this._optionValue;
		if (this.jdbOptionText) {
			textName = this.jdbOptionText;
		}
		if (this.jdbOptionValue) {
			valueName = this.jdbOptionValue;
		}
		const obj = {};
		obj[textName] = item[this._optionText];
		obj[valueName] = item[this._optionValue];
		this.inputText.push(obj);

		// this._chooseMoreArray为传出去的数据
		this._chooseMoreArray.push(item[this._optionValue]);
		this.ngModelValue = this._chooseMoreArray; // 传出数据格式为数组
		this.onChange(this._chooseMoreArray);

		this.show = true;
		this.setClassMap();
	}

	// 选中多少项li点击
	numClick(e, item) {
		let flag = false;
		// 阻止事件冒泡
		e.stopPropagation();

		// 判断show是否为true
		if (!this.show) {
			return;
		}

		// 判断该项是否可点击
		if (item[this._jdbItemDisabled] === this._jdbSureDisabled) {
			return;
		}

		// 判断是否点击过
		this._chooseMoreArray.forEach((element, index) => {
			if (element === item[this._optionValue]) {
				flag = true;
				this._chooseMoreArray.splice(index, 1);
				return;
			}
		});
		if (flag) {
			this.inputText--;
			return;
		}

		this.inputText++;
		this.show = true;
		this._chooseMoreArray.push(item[this._optionValue]);
		this.ngModelValue = this._chooseMoreArray; // 传出格式为数组
		this.onChange(this._chooseMoreArray);
	}

	// 判断某一项是否存在于inputText中
	moreIndex(item) {
		let flag = false;
		this._chooseMoreArray.forEach((element, index) => {
			if (element === item[this._optionValue]) {
				flag = true;
				return;
			}
		});
		return flag;
	}

	// 删除某一项
	deleteMoreItem(e, item) {
		e.stopPropagation();
		if (this._jdbDisabled) {
			return;
		}

		this.inputText.forEach((element, index) => {
			if (element[this._optionValue] === item[this._optionValue]) {
				this.inputText.splice(index, 1);
				return;
			}
		});

		this._chooseMoreArray.forEach((element, index) => {
			if (element === item[this._optionValue]) {
				this._chooseMoreArray.splice(index, 1);
				return;
			}
		});
		this.ngModelValue = this._chooseMoreArray; // 传出格式为数组
		this.onChange(this._chooseMoreArray);
		this.setClassMap();
	}

	// 转换为boolean,即实现有这个字段就认为为true,没有即为false
	toBoolean(value: boolean | string): boolean {
		return value === '' || (value && value !== 'false');
	}

	// 计算某元素的offetTop
	getTop(e) {
		let offset = e.offsetTop;
		if (e.offsetParent != null) {
			offset += this.getTop(e.offsetParent);
		}
		return offset;
	}

	// 计算某元素的scrollTop
	getScrollTop(e) {
		let offset = e.scrollTop;
		if (e.parentElement != null) {
			offset += this.getScrollTop(e.parentElement);
		}
		return offset;
	}
}
