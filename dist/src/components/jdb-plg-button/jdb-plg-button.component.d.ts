import { OnInit, Renderer2, ElementRef } from '@angular/core';
import { JdbPlgBaseService } from '../../services/jdb-plg-base/jdb-plg-base.service';
export declare type buttonSize = 'small' | 'large' | 'default';
export declare type buttonType = 'primary' | 'gray' | 'danger' | 'buleline' | 'white';
export declare class JdbPlgButtonComponent implements OnInit {
    private _elementRef;
    private _renderer;
    jdbPlgBaseService: JdbPlgBaseService;
    _el: HTMLElement;
    nativeElement: HTMLElement;
    _prefixCls: string;
    size: buttonSize;
    type: buttonType;
    loading: boolean;
    jdbSize: buttonSize;
    jdbType: buttonType;
    jdbLoading: boolean | string;
    constructor(_elementRef: ElementRef, _renderer: Renderer2, jdbPlgBaseService: JdbPlgBaseService);
    _setClassMap(loading: any): void;
    ngOnInit(): void;
}
