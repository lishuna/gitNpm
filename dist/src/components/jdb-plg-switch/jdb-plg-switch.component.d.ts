import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare type JdbSwitchSizeType = 'default' | 'small';
export declare class JdbPlgSwitchComponent implements OnInit, ControlValueAccessor {
    jdbCheckedText: string;
    jdbUncheckedText: string;
    jdbLoading: boolean;
    jdbDisabled: boolean;
    jdbSize: JdbSwitchSizeType;
    jdbControl: boolean;
    outBoxClass: object;
    checked: boolean;
    prefixCls: string;
    private _jdbCheckedText;
    private _jdbUncheckedText;
    private _jdbLoading;
    private _jdbDisabled;
    private _jdbControl;
    private _jdbSize;
    onChange: (value: boolean) => void;
    onTouched: () => void;
    onClick(ev: MouseEvent): void;
    /**
     * 更新开关状态
     * @param {boolean} value
     * @param {boolean} isEmit
     */
    updateSwitchStatus(value: boolean, isEmit: boolean): void;
    setClassMap(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
}
