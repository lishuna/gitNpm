import { ElementRef, Renderer } from '@angular/core';
export declare class DragDirective {
    private elem;
    private render;
    oldLeft: string;
    oldTop: string;
    private isDown;
    private disX;
    private disY;
    private disLeft;
    private disTop;
    constructor(elem: ElementRef, render: Renderer);
    onMousedown(event: any): void;
    onMousemove(event: any): boolean;
    onMouseup(): void;
    onMouseleave(): void;
    ngOnDestroy(): void;
}
