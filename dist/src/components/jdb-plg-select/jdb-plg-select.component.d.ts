import { OnInit, Renderer2, ElementRef, Renderer, OnChanges } from '@angular/core';
export declare class JdbPlgSelectComponent implements OnInit, OnChanges {
    private renderer2;
    private renderer;
    _selectList: any;
    _size: string;
    _width: string;
    _optionText: string;
    _optionValue: string;
    _optionPosition: string;
    isShowClear: boolean;
    _jdbClear: boolean;
    _jdbDisabled: boolean;
    _jdbMode: string;
    _placeHolder: string;
    _chooseMoreArray: any[];
    _classMap: {};
    listHeight: number;
    savaHeight: boolean;
    spaceFlex: boolean;
    _showImgBox: boolean;
    _jdbItemDisabled: string;
    _jdbSureDisabled: number;
    _jdbNoDisabled: number;
    jdbClassName: string;
    jdbItemDisabled: string;
    jdbSureDisabled: any;
    jdbPlaceHolder: any;
    jdbClear: boolean;
    jdbSelectList: string;
    jdbSize: string;
    jdbWidth: string;
    jdbOptionText: string;
    jdbOptionValue: string;
    jdbDisabled: boolean;
    jdbMode: string;
    inputDom: ElementRef;
    optionList: ElementRef;
    show: boolean;
    inputText: any;
    ngModelValue: string;
    constructor(renderer2: Renderer2, renderer: Renderer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    setClassMap(): void;
    clearInputText(e: any): void;
    dialogShow(e: any): void;
    optionPosition(listHeight: any): void;
    writeValue(value: any): void;
    onChange: (value: any) => void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    forOneStart(value: any): void;
    forMoreStart(value: any): void;
    forNumStart(value: any): void;
    item(e: any, item: any): void;
    chooseMore(e: any, item: any): void;
    numClick(e: any, item: any): void;
    moreIndex(item: any): boolean;
    deleteMoreItem(e: any, item: any): void;
    toBoolean(value: boolean | string): boolean;
    getTop(e: any): any;
    getScrollTop(e: any): any;
    parseTranslateY(val: any): {
        isPercent: any;
        translateY: any;
    };
}
