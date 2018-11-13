/**
 * 2018-06-21
 * @author 李佳轩
 * @description 水印指令，组件渲染之前请确保通过静态方法setText设置了需要显示的水印文案，否则显示默认的`JDB`
 * @example
 * <div *ngIf="isList" class="caseList" appWaterMark>
 *      <nz-table ...>
 *          ...
 *      </nz-table>
 * </div>
 */
import { ElementRef, OnInit, Renderer2, AfterViewInit } from '@angular/core';
export declare class WatermarkDirective implements OnInit, AfterViewInit {
    private el;
    private render;
    /**
     * 水印渲染的文案，默认JDB
     */
    private static _text;
    private static drawSubject;
    private draw$;
    constructor(el: ElementRef, render: Renderer2);
    /**
     * @method 设置水印渲染的文案。
     * @param callback 该参数为一个函数或字符串，该参数为函数时用户自定义生成文案的过程，这个回调函数最后应返回字符串，因为这个字符串将被渲染成水印。
     * 若该参数为字符串，则传入的字符串就是渲染的水印文案
     */
    static setText(callback: string | (() => string)): void;
    /**
     * @method 通过canvas渲染水印背景，然后设置到指令绑定的元素的背景，然后背景默认重复。
     * @extends 可以通过改变`fillText()`的个数来增加文案出现的次数。
     */
    draw(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
