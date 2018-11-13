import { OnInit, AfterViewInit, ElementRef, EventEmitter, ViewContainerRef, Type, ComponentFactoryResolver, ComponentRef, Renderer2 } from '@angular/core';
export declare class JdbPlgNewDialogComponent implements OnInit, AfterViewInit {
    private resolver;
    private renderer;
    _visible: boolean;
    _title: string;
    _bodyStyleMap: any;
    _customClass: string;
    _maskClass: string;
    _closeable: boolean;
    _content: string | Type<void>;
    _footer: boolean;
    _isConfirm: boolean;
    _okText: string;
    _cancelText: string;
    _state: string;
    _closeType: string;
    _componentParams: {};
    _text: string;
    _class: string;
    _style: any;
    contentComponentRef: ComponentRef<void>;
    contentEl: ElementRef;
    textEl: ElementRef;
    bodyEl: ViewContainerRef;
    onClose: EventEmitter<MouseEvent>;
    onOk: EventEmitter<MouseEvent>;
    onCancel: EventEmitter<MouseEvent | KeyboardEvent>;
    _contentTpl: string | Type<void>;
    visible: boolean;
    _width: any;
    constructor(resolver: ComponentFactoryResolver, renderer: Renderer2);
    ngOnInit(): void;
    createDynamicDom(): void;
    createDynamicComponent(component: Type<any>): void;
    ngAfterViewInit(): void;
    closeModel(e: MouseEvent): void;
    confirmModel(e: MouseEvent): void;
    cancelModel(e: MouseEvent): void;
    cusCloseModal(e: MouseEvent): void;
    isChildOf(child: any, parent: any): boolean;
}
