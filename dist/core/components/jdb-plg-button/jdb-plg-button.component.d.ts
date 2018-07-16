import { OnInit, Renderer2, ElementRef } from '@angular/core';
export declare type buttonSize = 'small' | 'large' | 'default';
export declare type buttonType = 'primary' | 'gray' | 'danger' | 'buleline' | 'white';
export declare class JdbPlgButtonComponent implements OnInit {
    private _elementRef;
    private _renderer;
    _el: HTMLElement;
    nativeElement: HTMLElement;
    _prefixCls: string;
    size: buttonSize;
    type: buttonType;
    loading: boolean;
    jdbSize: buttonSize;
    jdbType: buttonType;
    jdbLoading: boolean | string;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    _setClassMap(loading: any): void;
    ngOnInit(): void;
}
