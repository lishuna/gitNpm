import { OnInit, ComponentFactoryResolver, Injector, OnDestroy, EventEmitter } from '@angular/core';
export declare class JdbTabComponent implements OnInit, OnDestroy {
    private componentFactoryResolver;
    _injector: Injector;
    target: any;
    onTabChange: EventEmitter<{}>;
    onTabRemove: EventEmitter<{}>;
    onTopComMsg: EventEmitter<{}>;
    items: any[];
    tabComs: any[];
    tabSubs: any;
    curTabIndex: number;
    tabIdComMap: {};
    constructor(componentFactoryResolver: ComponentFactoryResolver, _injector: Injector);
    ngOnInit(): void;
    addItem(ChildComponent: any, attrs: any, title: string, comId?: any, isCloseFlag?: boolean): any;
    private setOneComHide;
    private setOneComShow;
    tabChange(index: any): void;
    setOneTabShow(index: any): void;
    removeTab(index: any): void;
    removeTabById(id: string): void;
    ngOnDestroy(): void;
}
