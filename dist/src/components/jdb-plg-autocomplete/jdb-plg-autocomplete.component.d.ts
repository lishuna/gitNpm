import { OnInit, EventEmitter, ElementRef, Renderer2, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AutoCompleteResult } from './autocomplete.result';
export declare class JdbPlgAutocompleteComponent implements OnInit, AfterViewInit, ControlValueAccessor, OnChanges {
    private el;
    private render;
    _searchParam: string;
    _serverApi: string;
    _searchWord: string;
    searchResult: AutoCompleteResult[];
    _listShow: boolean;
    activeIndex: number;
    selectOne: any;
    ngModelValue: string;
    resultEle: ElementRef;
    jdbPlaceHolder: string;
    width: string;
    _dataSource: any[];
    dataKey: string;
    dataVal: string;
    jdbDataAsyn: boolean;
    onSelected: EventEmitter<AutoCompleteResult>;
    onChange: (value: string) => void;
    constructor(el: ElementRef, render: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(simples: SimpleChanges): void;
    OnKeyDown(event: KeyboardEvent): void;
    OnPaste(event: Event): void;
    inputHandle(): void;
    closePop(event: any): void;
    setSelectClass(obj: any): boolean;
    setSearchWord(): void;
    selectedItem(item: any, index: any): void;
    debounce(fn: any, wait: any, immediate: any): () => any;
    resetPopDirection(node: any): void;
    changeInput(): void;
    jdbDataSource: any;
    jdbSearchParam: any;
    jdbServerApi: any;
    writeValue(value: string): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(fn: () => void): void;
}
