import { ComponentFactoryResolver } from '@angular/core';
export declare class CommonMethodService {
    private componentFactoryResolver;
    vRef: any;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    testPhoneNumber(number: string): boolean;
    setRootViewContainerRef(vRef: any): void;
    toast(msg: any, delayTime?: number): void;
    removeNodeFromArray(list: any, node?: any): any;
}
