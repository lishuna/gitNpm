import { OnInit, EventEmitter, OnChanges, ElementRef, Renderer, OnDestroy } from '@angular/core';
export declare class PictureViewerComponent implements OnInit, OnChanges, OnDestroy {
    private renderer;
    pictureList: any;
    update: EventEmitter<{
        status: boolean;
    }>;
    imgBox: ElementRef;
    imgContent: ElementRef;
    maxWidth: number;
    maxHeight: number;
    jdbShowType: number;
    _jdbMaster: boolean;
    _jdbClear: boolean;
    dragStatus: boolean;
    current: number;
    elem: any;
    imgOperate: {
        num: number;
        degnum: number;
    };
    jdbMaster: boolean;
    jdbClear: boolean;
    jdbCurrent: number;
    constructor(renderer: Renderer);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    resetPosition(index: any): void;
    ImgState(index: any): "next" | "prev" | "off" | "on";
    Next(): void;
    Prev(): void;
    closeModel(): void;
    scaleBig(): void;
    scaleSmall(): void;
    routateNi(): void;
    routateShun(): void;
    resetImgData(): void;
    toBoolean(value: boolean | string): boolean;
    ngOnDestroy(): void;
}
