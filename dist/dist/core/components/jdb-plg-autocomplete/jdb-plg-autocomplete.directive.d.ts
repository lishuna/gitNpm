import { EventEmitter, ElementRef, Renderer2, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { AutoCompleteResult } from './autocomplete.result';
export declare class JdbPlgAutocompleteDirective implements OnInit {
    private el;
    private jdbPlgBaseApi;
    private render;
    searchParam: string;
    serverApi: string;
    searchWord: string;
    dataReady: EventEmitter<AutoCompleteResult[]>;
    constructor(el: ElementRef, jdbPlgBaseApi: any, render: Renderer2);
    OnPaste(event: Event): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    popupList(): void;
    debounce(fn: any, wait: any, immediate: any): () => any;
}
