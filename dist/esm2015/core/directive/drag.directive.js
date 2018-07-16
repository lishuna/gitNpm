/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { HostListener, ElementRef, Directive, Renderer } from '@angular/core';
export class DragDirective {
    /**
     * @param {?} elem
     * @param {?} render
     */
    constructor(elem, render) {
        //
        this.elem = elem;
        this.render = render;
        this.isDown = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        const /** @type {?} */ wRate = localStorage.getItem('dragWidth');
        const /** @type {?} */ hRate = localStorage.getItem('dragHeight');
        this.isDown = true;
        this.disLeft = this.elem.nativeElement.offsetLeft;
        this.disTop = this.elem.nativeElement.offsetTop;
        this.disX = event.clientX;
        this.disY = event.clientY;
        event.target.style.cursor = 'move';
        // event.preventDefault();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousemove(event) {
        event.preventDefault();
        // 判断该元素是否被点击了。
        if (this.isDown) {
            const /** @type {?} */ newdisX = event.clientX - this.disX;
            const /** @type {?} */ newdisY = event.clientY - this.disY;
            this.elem.nativeElement.style.left = newdisX + this.disLeft + 'px';
            this.elem.nativeElement.style.top = newdisY + this.disTop + 'px';
        }
        return false;
    }
    /**
     * @return {?}
     */
    onMouseup() {
        // 只用当元素移动过了，离开函数体才会触发。
        if (this.isDown) {
            this.isDown = false;
            this.disLeft = this.elem.nativeElement.offsetLeft;
            this.disTop = this.elem.nativeElement.offsetTop;
        }
    }
    /**
     * @return {?}
     */
    onMouseleave() {
        this.isDown = false;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    }
}
DragDirective.decorators = [
    { type: Directive, args: [{
                selector: 'img[appDragDirective]'
            },] },
];
/** @nocollapse */
DragDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
DragDirective.propDecorators = {
    "onMousedown": [{ type: HostListener, args: ['mousedown', ['$event'],] },],
    "onMousemove": [{ type: HostListener, args: ['mousemove', ['$event'],] },],
    "onMouseup": [{ type: HostListener, args: ['mouseup', ['$event'],] },],
    "onMouseleave": [{ type: HostListener, args: ['mouseleave', ['$event'],] },],
};
function DragDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DragDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DragDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DragDirective.propDecorators;
    /** @type {?} */
    DragDirective.prototype.oldLeft;
    /** @type {?} */
    DragDirective.prototype.oldTop;
    /** @type {?} */
    DragDirective.prototype.isDown;
    /** @type {?} */
    DragDirective.prototype.disX;
    /** @type {?} */
    DragDirective.prototype.disY;
    /** @type {?} */
    DragDirective.prototype.disLeft;
    /** @type {?} */
    DragDirective.prototype.disTop;
    /** @type {?} */
    DragDirective.prototype.elem;
    /** @type {?} */
    DragDirective.prototype.render;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVzdC11aS9jb3JlLyIsInNvdXJjZXMiOlsiY29yZS9kaXJlY3RpdmUvZHJhZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsRUFFVCxRQUFRLEVBTVgsTUFBTSxlQUFlLENBQUM7QUFLdkIsTUFBTTs7Ozs7SUFVRixZQUNZLE1BQ0E7O1FBREEsU0FBSSxHQUFKLElBQUk7UUFDSixXQUFNLEdBQU4sTUFBTTtzQkFSRCxLQUFLO0tBV3JCOzs7OztJQUdzQyxXQUFXLENBQUMsS0FBSztRQUNwRCx1QkFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCx1QkFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUVoRCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7SUFLQSxXQUFXLENBQUMsS0FBSztRQUNwRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7O1FBR3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLHVCQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDMUMsdUJBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUVwRTtRQUNELE9BQU8sS0FBSyxDQUFDOzs7OztJQU9vQixTQUFTOztRQUUxQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztTQUNuRDs7Ozs7SUFJbUMsWUFBWTtRQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7Ozs7SUFFeEIsV0FBVzs7O0tBSVY7OztZQXZFSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjthQUNwQzs7OztZQWJHLFVBQVU7WUFHVixRQUFROzs7NEJBNkJQLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBZXBDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBa0JwQyxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzZCQVVsQyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgRWxlbWVudFJlZixcbiAgICBEaXJlY3RpdmUsXG4gICAgQ29tcG9uZW50LFxuICAgIFJlbmRlcmVyLFxuICAgIE9uSW5pdCxcbiAgICBJbnB1dCxcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdpbWdbYXBwRHJhZ0RpcmVjdGl2ZV0nXG59KVxuZXhwb3J0IGNsYXNzIERyYWdEaXJlY3RpdmUge1xuICAgIG9sZExlZnQ6IHN0cmluZztcbiAgICBvbGRUb3A6IHN0cmluZztcblxuICAgIHByaXZhdGUgaXNEb3duID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBkaXNYO1xuICAgIHByaXZhdGUgZGlzWTtcbiAgICBwcml2YXRlIGRpc0xlZnQ7XG4gICAgcHJpdmF0ZSBkaXNUb3A7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbGVtOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXJcbiAgICApIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICAvLyDngrnlh7vkuovku7ZcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKSBvbk1vdXNlZG93bihldmVudCkge1xuICAgICAgICBjb25zdCB3UmF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkcmFnV2lkdGgnKTtcbiAgICAgICAgY29uc3QgaFJhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZHJhZ0hlaWdodCcpO1xuICAgICAgICB0aGlzLmlzRG93biA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5kaXNMZWZ0ID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgdGhpcy5kaXNUb3AgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5vZmZzZXRUb3A7XG5cbiAgICAgICAgdGhpcy5kaXNYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgdGhpcy5kaXNZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICAvLyDnm5HlkKznp7vliqjkuovku7bkuovku7ZcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW1vdmUnLCBbJyRldmVudCddKSBvbk1vdXNlbW92ZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyDliKTmlq3or6XlhYPntKDmmK/lkKbooqvngrnlh7vkuobjgIJcblxuICAgICAgICBpZiAodGhpcy5pc0Rvd24pIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld2Rpc1ggPSBldmVudC5jbGllbnRYIC0gdGhpcy5kaXNYO1xuICAgICAgICAgICAgY29uc3QgbmV3ZGlzWSA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLmRpc1k7XG4gICAgICAgICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gbmV3ZGlzWCArIHRoaXMuZGlzTGVmdCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBuZXdkaXNZICsgdGhpcy5kaXNUb3AgKyAncHgnO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG5cbiAgICB9XG5cbiAgICAvLyDnm5HlkKxkb2N1bWVudOemu+W8gOS6i+S7tlxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcsIFsnJGV2ZW50J10pIG9uTW91c2V1cCgpIHtcbiAgICAgICAgLy8g5Y+q55So5b2T5YWD57Sg56e75Yqo6L+H5LqG77yM56a75byA5Ye95pWw5L2T5omN5Lya6Kem5Y+R44CCXG4gICAgICAgIGlmICh0aGlzLmlzRG93bikge1xuICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGlzTGVmdCA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICAgICAgICB0aGlzLmRpc1RvcCA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOebkeWQrOWFg+e0oOemu+W8gOS6i+S7tlxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbJyRldmVudCddKSBvbk1vdXNlbGVhdmUoKSB7XG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG4gICAgfVxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICAvL0NhbGxlZCBvbmNlLCBiZWZvcmUgdGhlIGluc3RhbmNlIGlzIGRlc3Ryb3llZC5cbiAgICAgICAgLy9BZGQgJ2ltcGxlbWVudHMgT25EZXN0cm95JyB0byB0aGUgY2xhc3MuXG4gICAgICAgIFxuICAgIH1cbn1cbiJdfQ==