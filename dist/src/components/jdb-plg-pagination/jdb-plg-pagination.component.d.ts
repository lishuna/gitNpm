import { EventEmitter, ElementRef, Renderer2 } from '@angular/core';
export declare class JdbPlgPaginationComponent {
    private el;
    private renderer2;
    _total: number;
    _current: number;
    _pageSize: number;
    _firstIndex: number;
    _lastIndex: number;
    _showTotal: boolean;
    _showPageSize: boolean;
    _showQuickJump: boolean;
    pages: any[];
    _options: {
        value: number;
        text: string;
    }[];
    quickJumpPage: any;
    hisQicukPage: any;
    _jdbSimple: boolean;
    _jdbSelectWidth: string;
    jdbPageSizeChange: EventEmitter<number>;
    jdbPageIndexChange: EventEmitter<number>;
    private inputJump;
    constructor(el: ElementRef, renderer2: Renderer2);
    jdbShowTotal: boolean;
    jdbTotal: number;
    jdbPageIndex: number;
    jdbShowPageSize: boolean;
    jdbPageSize: number;
    jdbSizeOptions: {
        value: number;
        text: string;
    }[];
    jdbShowQuickJump: boolean;
    jdbSimple: boolean;
    jdbSelectWidth: string;
    setPageNo(): void;
    dataChange(status: boolean, num: number, e?: any): void;
    quickJump(): void;
    jumpBefore(e: any, pageSize: any): void;
    jumpAfter(e: any, pageSize: any): void;
    toBoolean(value: boolean | string): boolean;
    isNumber(obj: any): boolean;
}
