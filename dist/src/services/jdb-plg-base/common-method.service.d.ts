import { ComponentFactoryResolver } from '@angular/core';
export declare class CommonMethodService {
    private componentFactoryResolver;
    vRef: any;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    testPhoneNumber(number: string): boolean;
    testName(name: string): boolean;
    testRepayAmount(num: any): boolean;
    numFormat(num: any): any;
    /**
     * @method 将'yyyy-MM-dd~yyyy-MM-dd'格式，转化为startTime、endTime（10位时间戳）
     * @param value 'yyyy-MM-dd~yyyy-MM-dd'格式字符串
     */
    toTimestamp(value: any): {};
    toDate(time: any, type?: number): string;
    add0(m: any): any;
    getTarDate(n?: number, joinStr?: string, isTimeStamp?: boolean): any[];
    setRootViewContainerRef(vRef: any): void;
    toast(msg: any, delayTime?: number): void;
    accMul(arg1: any, arg2: any): number;
    accDiv(arg1: any, arg2: any): number;
    accAdd(arg1: any, arg2: any): number;
    accSubtr(arg1: any, arg2: any): string;
}
