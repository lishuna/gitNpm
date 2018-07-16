import { ElementRef } from '@angular/core';
export declare class OnlyNumberDirective {
    private el;
    constructor(el: ElementRef);
    regexStr: string;
    appOnlyNumber: boolean;
    onKeyDown(event: any): void;
    onKeyUp(event: any): void;
}
