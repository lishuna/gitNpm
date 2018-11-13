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

import { Directive, ElementRef, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Directive({
    selector: '[appWaterMark]'
})
export class WatermarkDirective implements OnInit, AfterViewInit {

    /**
     * 水印渲染的文案，默认JDB
     */
    private static _text: string = '';

    // 大部分时候需要在请求的毁掉里取设置水印文案，所以需要在设置水印文案之后重绘水印
    private static drawSubject: Subject<boolean> = new Subject<boolean>();

    private draw$: Observable<boolean> = WatermarkDirective.drawSubject.asObservable();

    constructor(
        private el: ElementRef,
        private render: Renderer2
    ) {
    }

    /**
     * @method 设置水印渲染的文案。
     * @param callback 该参数为一个函数或字符串，该参数为函数时用户自定义生成文案的过程，这个回调函数最后应返回字符串，因为这个字符串将被渲染成水印。
     * 若该参数为字符串，则传入的字符串就是渲染的水印文案
     */
    static setText(callback: string | (() => string)): void {
        if (typeof callback === 'string') {
            WatermarkDirective._text = callback;
        } else {
            WatermarkDirective._text = callback();
        }
        WatermarkDirective.drawSubject.next(true);
    }


    /**
     * @method 通过canvas渲染水印背景，然后设置到指令绑定的元素的背景，然后背景默认重复。
     * @extends 可以通过改变`fillText()`的个数来增加文案出现的次数。
     */
    draw() {
        // const name = localStorage.getItem('cxNickName') || '';
        // const phone = localStorage.getItem('cxPhone') || '';
        // const str = `CXWEB-${name}${phone.slice(-4)}`;
        if (WatermarkDirective._text) {
            const node = document.createElement('canvas');
            node.width = 500;
            node.height = 200;
            node.style.display = 'none';

            const ctx = node.getContext('2d');
            ctx.rotate(-10 * Math.PI / 180);
            ctx.font = '16px microsoft yahei';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'Middle';

            ctx.fillText(WatermarkDirective._text, 0, 200);
            // ctx.fillText(str, 80, 150);
            ctx.fillText(WatermarkDirective._text, 165, 85);
            // ctx.fillText(str, 230, 160);
            ctx.fillText(WatermarkDirective._text, 300, 190);
            this.render.setStyle(this.el.nativeElement, 'backgroundImage', `url(${node.toDataURL('image/png')})`);
        }
        // this.render.setStyle(this.el.nativeElement, 'background', `red`);
    }

    ngOnInit() {
        this.draw$.subscribe(() => {
            this.draw();
        });
    }
    ngAfterViewInit() {
        this.draw(); // 调用渲染水印方法
    }
}
