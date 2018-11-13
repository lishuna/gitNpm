import { OnInit, ComponentFactoryResolver, Injector, OnDestroy, EventEmitter, OnChanges } from '@angular/core';
export declare class JdbTabComponent implements OnInit, OnDestroy, OnChanges {
    private componentFactoryResolver;
    _injector: Injector;
    target: any;
    onTabChange: EventEmitter<{}>;
    onTabRemove: EventEmitter<{}>;
    onTopComMsg: EventEmitter<{}>;
    totalTip: any;
    totalTipChange: EventEmitter<{}>;
    items: any[];
    tabComs: any[];
    tabSubs: any;
    curTabIndex: number;
    tabIdComMap: {};
    constructor(componentFactoryResolver: ComponentFactoryResolver, _injector: Injector);
    ngOnInit(): void;
    ngOnChanges(): void;
    /**
     *
     * @param ChildComponent
     * @param attrs:{
     *     propery:value
     * ]
     * title:string
     * isCloseFlag
     * @description: tab切换的样式作为可配置功能拓展，主要是通过类名设置，提供主题名theme和色调搭配 style:
     * 一、theme说明：
     * - text-纯文本
     * - trapezoid-梯形
     * - rectangle-长方形
     * - 待以后添加
     * 二、style说明：
     * 1、纯文本的一般情况下是没有边框和背景色的，所以格式遵循：'形状'-'初始字体颜色''激活字体颜色''边框色''边框长还是短'
     * - text garyBlackBlueLong（文本的默认样式）
     * - text garyBlackBlueShort
     * 2、图形一般情况下有边框和背景色：
     * （格式严格遵循：'形状'-'初始背景色''激活背景色''边框色''边框长还是短': 比如 'rectangle grayWhiteBlueLong')
     * - rectangle grayWhiteBlueLong: 长方形-灰色 白色 蓝边 长。这也是默认的tab样式
     * - trapezoid grayWhite: 梯形-灰色 白色。说明梯形的tab没有 边框的颜色效果
     * （如果倒数几个配置均不需要，则用nonono，直接省略不写：'trapezoid-grayWhite'））
     * （但是如果是中间有配置项为no，则不能省略 no。书写为：'trapezoid-noNoBlueLong'）
     * @example:
     * this.lefTopTab.addItem(ChildrenComponent, {
     *     theme: {
     *      height: 40,
     *      name: 'trapezoid',
     *      style: 'grayWhite',
     *      borderLength: 'long' / 'short'
     *     }
     *   }, '主页', '', true);
     * @extends:
     * 如果颜色配置遇到'light'，表示设置透明；
     * 三、borderLength说明：
     * ‘long'-长边框，此时隐藏元素
     * ‘short'-短边框，此时显示元素
     */
    addItem(ChildComponent: any, attrs: any, title: string, comId?: any, isCloseFlag?: boolean): any;
    private setOneComHide(tabIndex);
    private setOneComShow(tabIndex);
    tabChange(index: any): void;
    setOneTabShow(index: any): void;
    removeTab(index: any): void;
    removeTabById(id: string): void;
    ngOnDestroy(): void;
}
